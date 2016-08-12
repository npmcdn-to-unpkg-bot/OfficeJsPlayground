import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Utilities, ContextType, RequestHelper} from '../helpers';

export enum OfficeClient {
    All,
    Word,
    Excel,
    PowerPoint,
    Project,
    Outlook,
    OneNote 
}

export interface ISnippetMeta {
    name: string;
    id: string;
    group?: string;
    client?: OfficeClient;
}

export interface ISnippet {
    meta: ISnippetMeta;
    ts: string; // FIXME, after merge with other branch, rename to "scriptSource"
    html: string;
    css: string;

    /**
     * Extras can be of the following form:
     * 
     * // A comment     	                            ==> Ignore
     * https://appsomething.cdn.blah/something.js       ==> Convert to //, then take the rest as is
     * http://appsomething.cdn.blah/something.js        ==> Convert to //, then take the rest as is
     * //appsomething.cdn.blah/something.js             ==> Take as is
     * jquery                                           ==> NPM JS
     * office-ui-fabric/dist/js/jquery.fabric.min.js    ==> NPM JS
     * office-ui-fabric/dist/css/fabric.min.css         ==> NPM CSS
     * @types/jquery                                    ==> @types from CDN
     */
    extras: string;
}

export class Snippet implements ISnippet {
    meta: {
        name: string;
        id: string;
    };
    ts: string;
    html: string;
    css: string;
    extras: string;

    hash: string;
    jsHash: string;

    private _compiledJs: string;

    constructor(snippet: ISnippet) {
        this.meta = snippet.meta;
        this.ts = snippet.ts;
        this.css = snippet.css;
        this.extras = snippet.extras;
        this.html = snippet.html;
    }

    static createBlankOfficeJsSnippet(): Snippet {
        return new Snippet({
            meta: {
                name: null,
                id: null
            },
            ts: Utilities.stripSpaces(`
                ${getNamespace()}.run(function(context) {
                    // ...
                    return context.sync();
                }).catch(function(error) {
                    console.log(error);
                    if (error instanceof OfficeExtension.Error) {
                        console.log("Debug info: " + JSON.stringify(error.debugInfo));
                    }
                });
            `),
            html: null,
            css: null,
            extras: Utilities.stripSpaces(`
                // Office.js CDN reference
                https://appsforoffice.microsoft.com/lib/1/hosted/Office.js

                // NPM CDN references
                jquery
                office-ui-fabric/dist/js/jquery.fabric.min.js
                office-ui-fabric/dist/css/fabric.min.css
                office-ui-fabric/dist/css/fabric.components.min.css

                // IntelliSense definitions
                @types/jquery
                @types/office-js
                @types/office-ui-fabric
            `)
        });

        function getNamespace() {
            switch (Utilities.context) {
                case ContextType.Excel:
                    return 'Excel';
                case ContextType.Word:
                    return 'Word';
                default:
                    throw new Error("Invalid context type for Office namespace");
            }
        }
    }

    static createBlankWebSnippet(): Snippet {
        return new Snippet({
            meta: {
                name: null,
                id: null
            },
            ts: Utilities.stripSpaces(`
                console.log("Hello world");
            `),
            html: null,
            css: null,
            extras: Utilities.stripSpaces(`
                // NPM CDN references
                jquery

                // IntelliSense definitions
                @types/jquery
            `)
        });
    }

    // A bit of a hack (probably doesn't belong here, but want to get an easy "run" link)
    get runUrl(): string {
        var url = window.location.toString() + "#/run/" + this.meta.id;
        return url;
    }

    get js(): Promise<string> {
        if (Snippet._isPureValidJs(Utilities.stringOrEmpty(this.ts))) {
            this._compiledJs = Utilities.stringOrEmpty(this.ts);
            return Promise.resolve(this._compiledJs);
        }
        else {
            // FIXME expose to user
            throw Utilities.error("Invalid JavaScript (or is TypeScript, which we don't have a compiler for yet)")
            // return this._compile(this.ts).then((compiledJs) => {
            //     this._compiledJs = compiledJs;
            //     return compiledJs; 
            // })
        }
    }

    getJsLibaries(): Array<string> {
        return Utilities.stringOrEmpty(this.extras).split("\n")
            .map((entry) => {
                entry = entry.toLowerCase().trim();
                
                if (entry.length === 0 || entry.startsWith("//") || entry.startsWith("@types") || entry.endsWith(".css")) {
                    return null;
                }

                if (Snippet._entryIsUrl(entry) && entry.endsWith(".js")) {
                    return Snippet._normalizeUrl(entry);
                }

                // otherwise assume it's an NPM package name
                return "//npmcdn.com/" + entry;
            })
            .filter((entry) => entry != null);
    }

    getCssStylesheets(): Array<string> {
        return Utilities.stringOrEmpty(this.extras).split("\n")
            .map((entry) => entry.trim().toLowerCase())
            .filter((entry) => entry.endsWith(".css"))
            .map((entry) => {
                if (Snippet._entryIsUrl(entry)) {
                    return Snippet._normalizeUrl(entry);
                }

                // otherwise assume it's an NPM package name
                return "//npmcdn.com/" + entry;
            })
    }

    static _entryIsUrl(entry: string): boolean {
        entry = entry.trim().toLowerCase();
        return entry.startsWith("http://") || entry.startsWith("https://") || entry.startsWith("//");
    }

    static _normalizeUrl(url: string): string {
        // strip out https: or http:
        return url.substr(url.indexOf("//"));
    }

    static _isPureValidJs(scriptText): boolean {
        try {
            new Function(scriptText);
            return true;
        } catch (syntaxError) {
            return false;
        }
    }

    private _compile(ts: string): Promise<string> {
        // FIXME
        return Promise.resolve(ts);
    }

    private _hash() {
        // FIXME
    }

    static create(meta, js, html, css, extras): Promise<Snippet> {
        return Promise.all([meta, js, html, css, extras])
            .then(results => new Snippet(<ISnippet>{
                meta: results[0],
                ts: results[1],
                html: results[2],
                css: results[3],
                extras: results[4]
            }))
            .catch(error => Utilities.error);
    }
}

@Injectable()
export class SnippetsService {
    private _baseUrl: string = 'https://xlsnippets.azurewebsites.net/api';

    constructor(private _request: RequestHelper) {

    }

    get(snippetId: string): Promise<Snippet> {
        var meta = this._request.get(this._baseUrl + '/snippets/' + snippetId);
        var js = this._request.get(this._baseUrl + '/snippets/' + snippetId + '/content/js', null, true);
        var html = this._request.get(this._baseUrl + '/snippets/' + snippetId + '/content/html', null, true);
        var css = this._request.get(this._baseUrl + '/snippets/' + snippetId + '/content/css', null, true);
        var extras = this._request.get(this._baseUrl + '/snippets/' + snippetId + '/content/extras', null, true);
        return Snippet.create(meta, js, html, css, extras);
    }

    create(name: string, password?: string): Promise<{ id: string, password: string }> {
        var body = { name: name, password: password };

        return this._request.post(this._baseUrl + '/snippets', body)
            .then((data: any) => {
                return {
                    id: data.id,
                    password: data.password
                }
            })
    }

    uploadContent(snippetId: string, password: string, fileName: string, content: string) {
        var headers = RequestHelper.generateHeaders({
            "Content-Type": "application/octet-stream",
            "x-ms-b64-password": btoa(password)
        });
        return this._request.putRaw(this._baseUrl + '/snippets/' + snippetId + '/content/' + fileName, content, headers);
    }
}