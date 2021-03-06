import {Injectable} from '@angular/core';
import {ISnippet, Snippet, SnippetNamingSuffixOption} from '../services';
import {StorageHelper, Utilities, ContextUtil, ContextType,
    ExpectedError, PlaygroundError, UxUtil} from '../helpers';

@Injectable()
export class SnippetManager {
    private _snippetsContainer: StorageHelper<ISnippet>;
    private currentContext: string;

    /**
     * Must be called from every controller to ensure that the snippet manager uses
     * a correct snippet context (Excel vs. Word vs. Web).
     */
    initialize() {
        this._snippetsContainer = new StorageHelper<ISnippet>(ContextUtil.contextString + '_snippets');
    }

    new(): Promise<Snippet> {
        return this.add(SnippetManager.createBlankSnippet(this),
            SnippetNamingSuffixOption.StripNumericSuffixAndIncrement);
    }

    add(snippet: Snippet, suffixOption: SnippetNamingSuffixOption): Promise<Snippet> {
        return new Promise(resolve => {
            snippet.randomizeId(true /*force*/, this);
            snippet.makeNameUnique(suffixOption, this);
            resolve(this._addSnippetToLocalStorage(snippet));
        });
    }

    duplicate(snippet: ISnippet): Promise<Snippet> {
        return this.add(new Snippet(snippet), SnippetNamingSuffixOption.AddCopySuffix);
    }

    save(snippet: Snippet): Promise<ISnippet> {
        if (Utilities.isNull(snippet) || Utilities.isNull(snippet.meta)) {
            return Promise.reject(new Error('Snippet metadata cannot be empty')) as any;
        }
        if (Utilities.isEmpty(snippet.meta.name)) return Promise.reject(new Error('Snippet name cannot be empty')) as any;
        snippet.lastSavedHash = snippet.getHash();
        return Promise.resolve(this._snippetsContainer.insert(snippet.meta.id, snippet));
    }

    delete(snippet: ISnippet, askForConfirmation: boolean): Promise<any> {
        if (Utilities.isNull(snippet) || Utilities.isNull(snippet.meta)) {
            return Promise.reject(new Error('Snippet metadata cannot be empty'));
        }

        var that = this;

        if (askForConfirmation) {
            return UxUtil.showDialog('Delete confirmation',
                    `Are you sure you want to delete the snippet "${snippet.meta.name}"?`, ['Yes', 'No'])
                .then((choice) => {
                    if (choice === 'Yes') {
                        return deleteAndResolvePromise();
                    } else {
                        return Promise.reject(new ExpectedError());
                    }
                });
        } else {
            return deleteAndResolvePromise();
        }

        function deleteAndResolvePromise(): Promise<any> {
            that._snippetsContainer.remove(snippet.meta.id);
            return Promise.resolve();
        }
    }

    deleteAll(askForConfirmation: boolean): Promise<any> {
        var that = this;

        if (askForConfirmation) {
            return UxUtil.showDialog('Delete confirmation',
                    'Are you sure you want to delete *ALL* of your local snippets?', ['Yes', 'No'])
                .then((choice) => {
                    if (choice === 'Yes') {
                        return deleteAndResolvePromise();
                    } else {
                        return Promise.reject(new ExpectedError());
                    }
                });
        } else {
            return deleteAndResolvePromise();
        }

        function deleteAndResolvePromise(): Promise<any> {
            that._snippetsContainer.clear();
            return Promise.resolve();
        }
    }

    /**
     * Returns a list of local snippets.  Note that the initialize function of SnippetManager
     * MUST be called before issuing this call, or else you'll always get an empty list.
     */
    getLocal(): ISnippet[] {
        if (this._snippetsContainer) {
            return this._snippetsContainer.values();
        }

        return [];
    }

    getPlaylist(): Promise<any> {
        return Promise.resolve(this._playlist)
            .then(data => {
                return {
                    name: data.name,
                    items: _.groupBy(data.snippets, item => item.group)
                };
            })
            .then(data => {
                var remappedArray = _.map(data.items, (value, index) => {
                    return {
                        name: index,
                        items: value
                    };
                });

                return {
                    name: data.name,
                    items: remappedArray
                };
            });
    }

    find(id: string): Promise<Snippet> {
        return new Promise(resolve => {
            var result = this._snippetsContainer.get(id);
            resolve(new Snippet(result));
        });
    }

    private _addSnippetToLocalStorage(snippet: Snippet) {
        this._snippetsContainer.add(snippet.meta.id, snippet);
        return snippet;
    }

    static createBlankSnippet(snippetManager: SnippetManager) {
        switch (ContextUtil.context) {
            case ContextType.Excel:
            case ContextType.Word:
                return createBlankOfficeJsSnippet();

            case ContextType.Fabric:
                return createBlankFabricSnippet();

            case ContextType.TypeScript:
                return createBlankTypeScriptSnippet();

            default: 
                throw new Error("Cannot create blank snippet -- invalid context");
        }

        function createBlankOfficeJsSnippet(): Snippet {
            return new Snippet({
                script: Utilities.stripSpaces(`
                    ${ContextUtil.getContextNamespace()}.run(function(context) {
                        // insert your code here...
                        return context.sync();
                    }).catch(function(error) {
                        console.log(error);
                        if (error instanceof OfficeExtension.Error) {
                            console.log("Debug info: " + JSON.stringify(error.debugInfo));
                        }
                    });
                `),
                libraries: Utilities.stripSpaces(`
                    # Office.js CDN reference
                    //appsforoffice.microsoft.com/lib/1/hosted/Office.js

                    # NPM CDN references
                    jquery
                    office-ui-fabric/dist/js/jquery.fabric.min.js
                    office-ui-fabric/dist/css/fabric.min.css
                    office-ui-fabric/dist/css/fabric.components.min.css

                    # IntelliSense definitions
                    //raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/office-js/office-js.d.ts
                    //raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/jquery/jquery.d.ts

                    # Note: for any "loose" typescript definitions, you can paste them at the bottom of your TypeScript/JavaScript code in the "Script" tab.
                `)
            });
        }

        function createBlankFabricSnippet(): Snippet {
            return new Snippet({
                libraries: Utilities.stripSpaces(`
                    # NPM CDN references
                    jquery
                    office-ui-fabric/dist/js/jquery.fabric.min.js
                    office-ui-fabric/dist/css/fabric.min.css
                    office-ui-fabric/dist/css/fabric.components.min.css

                    # IntelliSense definitions
                    //raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/jquery/jquery.d.ts

                    # Note: for any "loose" typescript definitions, you can paste them at the bottom of your TypeScript/JavaScript code in the "Script" tab.
                `)
            });
        }

        function createBlankTypeScriptSnippet(): Snippet {
            return new Snippet({
                script: Utilities.stripSpaces(`
                    console.log("Hello world");
                `),
                libraries: Utilities.stripSpaces(`
                    # NPM CDN references
                    jquery

                    # IntelliSense definitions
                    //raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/jquery/jquery.d.ts

                    # Note: for any "loose" typescript definitions, you can paste them at the bottom of your TypeScript/JavaScript code in the "Script" tab.
                `)
            });
        }
    }

    private _playlist = {
        name: 'Microsoft',
        snippets: [
            {
                id: 'abc',
                name: 'Set range values',
                group: 'Range Manipulation'
            },
            {
                id: 'abc',
                name: 'Set cell ranges',
                group: 'Range Manipulation'
            },
            {
                id: 'abc',
                name: 'Set formulas',
                group: 'Range Manipulation'
            },
            {
                id: 'abc',
                name: 'Set background',
                group: 'Range Manipulation'
            },
            {
                id: 'abc',
                name: 'Set range values',
                group: 'Tables'
            },
            {
                id: 'abc',
                name: 'Set range values',
                group: 'Tables'
            },
            {
                id: 'abc',
                name: 'Set cell ranges',
                group: 'Tables'
            },
            {
                id: 'abc',
                name: 'Set formulas',
                group: 'Tables'
            },
            {
                id: 'abc',
                name: 'Set background',
                group: 'Tables'
            }
        ]
    };

}
