import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {BaseComponent} from '../shared/components/base.component';
import {Utilities, ContextType, SnippetWriter, ICreateHtmlOptions} from '../shared/helpers';
import {Snippet, SnippetManager} from '../shared/services';
import {} from "js-beautify";

@Component({
    selector: 'run',
    templateUrl: 'run.component.html',
    styleUrls: ['run.component.scss'],
})
export class RunComponent extends BaseComponent implements OnInit, OnDestroy {
    @ViewChild('runner') runner: ElementRef;
    @ViewChild('console') consoleView: ElementRef;

    private _snippet: Snippet;

    private _originalConsole: Console;
    private _consoleMethodsToIntercept = ['log', 'warn', 'error'];
    private _originalConsoleMethods: { [key: string] : () => void; } = {};
    private _consoleLastShown = false;

    private $console: JQuery;
    private $consoleText: JQuery;

    constructor(
        private _snippetManager: SnippetManager,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        super();
    }

    ngOnInit() {
        this._originalConsole = window.console;

        this._consoleMethodsToIntercept.forEach(methodName => {
            this._originalConsoleMethods[methodName] = window.console[methodName];
        });

        this._monkeyPatchConsole(window);

        // In case of "Run" view, never include Office.initialize,
        //     since parent is already initialized and child doesn't need to.
        var createHtmlOptions: ICreateHtmlOptions = {
            includeOfficeInitialize: false,
            inlineJsAndCssIntoIframe: true
        };

        var subscription = this._route.params.subscribe(params => {
            var snippetName = Utilities.decode(params['name']);
            if (Utilities.isEmpty(snippetName)) return;
            this._snippet = this._snippetManager.findByName(snippetName);

            var iframe = this.runner.nativeElement;
            var iframeWindow: Window = (<any>iframe).contentWindow;
            SnippetWriter.createHtml(this._snippet, createHtmlOptions).then(function (fullHtml) {
                iframeWindow.document.open();
                iframeWindow.document.write(fullHtml);
                iframeWindow.document.close();
            }).catch(function (e) {
                console.log(e);
                // TODO eventually Util instead
            });
        });

        this.markDispose(subscription);

        window["iframeReadyCallback"] = (iframeWin) => {
            if (createHtmlOptions.includeOfficeInitialize) {
                iframeWin['Office'] = (<any>window).Office;
                iframeWin['Excel'] = (<any>window).Excel;
            }

            this._monkeyPatchConsole(iframeWin);
            
            var that = this;
            iframeWin.onerror = function() {
                that.logToConsole('error', arguments);
            }
        }

        this.$console = $(this.consoleView.nativeElement);
		this.$consoleText = $('pre', this.$console);

        this._initializeConsole();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        
        this._consoleMethodsToIntercept.forEach(methodName => {
            window.console[methodName] = this._originalConsoleMethods[methodName];
        });
    }

    private _initializeConsole() {
        this.$console.height(window.innerHeight / 2);

        $("#console-clear", this.$console).click(() => this.$consoleText.empty());
        $("#console-close", this.$console).click(() => this._showHideConsole(false));
    }

    private _showHideConsole(showConsole: boolean) {
        if (showConsole) {
            this.$console.show();
        } else {
            this.$console.hide();
        }
    }

    private _monkeyPatchConsole(windowToPatch: Window) {
        // Taken from http://tobyho.com/2012/07/27/taking-over-console-log/
        var console = windowToPatch.console;
        var that = this;
        if (!console) return
        function intercept(methodName) {
            var original = console[methodName];
            console[methodName] = function() {
                that.logToConsole(methodName, arguments);
                if (original.apply){
                    // Do this for normal browsers
                    original.apply(console, arguments);
                } else{
                    // Do this for IE
                    var message = Array.prototype.slice.apply(arguments).join(' ');
                    original(message);
                }
            }
        }

        this._consoleMethodsToIntercept.forEach(methodName => {
            intercept(methodName);
        });
    }

    private logToConsole(consoleMethodType: string, args: IArguments) {
        if (!this.$console) {
            // Must have been called during initial initialization, before the console is available
            return;
        }

        var message = '';
        _.each(args, arg => {
            if (_.isString(arg)) message += arg + ' ';
            else if (_.object(arg) || _.isArray(arg)) message += stringifyPlusPlus(arg) + ' ';
        });
        message += '\n';

        var trimmedMessage = message.trim();
        if (trimmedMessage === "Agave.HostCall.IssueCall" ||
            trimmedMessage === "Agave.HostCall.ReceiveResponse"
        ) {
            return;
        }

        var span = document.createElement("span");
        span.classList.add("console");
        span.classList.add(consoleMethodType);
        span.innerText = message;
        this.$consoleText.append(span);

        this._showHideConsole(true);
        this.$console.children('.scrollable')[0].scrollTop = $(span)[0].offsetTop;

        function stringifyPlusPlus(object) {
            // Don't JSON.stringify strings, because we don't want quotes in the output
            if (object == null) {
                return "null";
            }
            if (typeof object == 'string' || object instanceof String) {
				return object;
			}
            if (object.toString() != "[object Object]") {
				return object.toString();
			}

			// Otherwise, stringify the object
			
            return JSON.stringify(object, function (key, value) {
                if (value && typeof value === "object" && !$.isArray(value)) {
                    return getStringifiableSnapshot(value);
                }
                return value;
            }, "  ");

            function getStringifiableSnapshot(object: any) {
                try {
                    var snapshot: any = {};
                    var current = object;
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    function tryAddName(name: string) {
                        if (name.indexOf("_") < 0 &&
                            !hasOwnProperty.call(snapshot, name)) {
                            Object.defineProperty(snapshot, name, {
                                configurable: true,
                                enumerable: true,
                                get: function () {
                                    return object[name];
                                }
                            });
                        }
                    }
                    do {
                        Object.keys(current).forEach(tryAddName);
                        current = Object.getPrototypeOf(current);
                    } while (current);
                    return snapshot;
                } catch (e) {
                    return object;
                }
            }
        }
    }

    back() {
        this._router.navigate(['edit', Utilities.encode(this._snippet.meta.name)]);
    }

    refresh() {
        window.location.reload();
    }
}