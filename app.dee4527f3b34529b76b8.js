webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(328);
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(349);
	var app_routes_1 = __webpack_require__(401);
	var services_1 = __webpack_require__(648);
	var helpers_1 = __webpack_require__(408);
	__webpack_require__(668);
	__webpack_require__(670);
	exports.PROVIDER_OVERRIDES = [
	    { provide: core_1.ExceptionHandler, useClass: helpers_1.ExceptionHelper },
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	];
	exports.APP_PROVIDERS = [
	    services_1.SnippetService,
	    services_1.SnippetManager,
	    helpers_1.ExceptionHelper,
	    helpers_1.NotificationHelper,
	    helpers_1.RequestHelper,
	    services_1.MediatorService,
	    http_1.HTTP_PROVIDERS
	];
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: '<router-outlet></router-outlet>',
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	function launch() {
	    platform_browser_dynamic_1.bootstrap(AppComponent, app_routes_1.APP_ROUTER_PROVIDERS.concat(exports.PROVIDER_OVERRIDES, exports.APP_PROVIDERS))
	        .catch(function (err) { return helpers_1.Utilities.error; });
	}
	exports.launch = launch;
	launch();


/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(349);
	var components_1 = __webpack_require__(402);
	exports.AppRoutes = [
	    {
	        path: '',
	        redirectTo: 'new',
	        pathMatch: 'full'
	    },
	    {
	        path: 'new',
	        component: components_1.NewComponent,
	    },
	    {
	        path: 'edit/:id',
	        component: components_1.EditorComponent
	    },
	    {
	        path: 'run/:id',
	        component: components_1.RunComponent
	    },
	    {
	        path: 'view/:id',
	        component: components_1.ViewComponent
	    }
	];
	exports.routes = exports.AppRoutes.slice();
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];


/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(403));
	__export(__webpack_require__(655));
	__export(__webpack_require__(659));
	__export(__webpack_require__(664));


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(404));


/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(2);
	var router_1 = __webpack_require__(349);
	var components_1 = __webpack_require__(405);
	var base_component_1 = __webpack_require__(423);
	var services_1 = __webpack_require__(648);
	var helpers_1 = __webpack_require__(408);
	var EditorComponent = (function (_super) {
	    __extends(EditorComponent, _super);
	    function EditorComponent(_snippetManager, _location, _router, _route) {
	        _super.call(this);
	        this._snippetManager = _snippetManager;
	        this._location = _location;
	        this._router = _router;
	        this._route = _route;
	        this.snippet = new services_1.Snippet({ meta: { name: null, id: null } });
	        this.editMode = false;
	    }
	    EditorComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var subscription = this._route.params.subscribe(function (params) {
	            return _this._snippetManager.find(params['id'])
	                .then(function (snippet) { return _this.snippet = snippet; })
	                .catch(function (e) { return _this._showStatus(e, true); });
	        });
	        this.markDispose(subscription);
	    };
	    EditorComponent.prototype.back = function () {
	        this._router.navigate(['new']);
	    };
	    EditorComponent.prototype.share = function () {
	    };
	    EditorComponent.prototype.save = function () {
	        var _this = this;
	        this.snippet = this._composeSnippetFromEditor();
	        return this._snippetManager.save(this.snippet)
	            .then(function (snippet) {
	            _this._showStatus('Saved ' + snippet.meta.name);
	        }).
	            catch(function (e) {
	            _this._showStatus(e, true);
	            throw 'cannot run';
	        });
	    };
	    EditorComponent.prototype.delete = function () {
	        var _this = this;
	        return this._snippetManager.delete(this.snippet)
	            .then(function (snippet) {
	            return _this._showStatus('Deleted ' + _this.snippet.meta.name)
	                .then(function () {
	                _this._router.navigate(['new']);
	            });
	        }).
	            catch(function (e) {
	            return _this._showStatus(e, true);
	        });
	    };
	    EditorComponent.prototype.run = function () {
	        var _this = this;
	        this.save().then(function () {
	            _this._router.navigate(['run', _this.snippet.meta.id]);
	        });
	    };
	    EditorComponent.prototype._showStatus = function (message, error) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            try {
	                if (!helpers_1.Utilities.isNull(_this.timeout))
	                    clearTimeout(_this.timeout);
	                _this.status = message;
	                _this.error = error;
	                _this.timeout = setTimeout(function () {
	                    clearTimeout(_this.timeout);
	                    _this.status = null;
	                    _this.error = false;
	                    resolve();
	                }, 5000);
	            }
	            catch (exception) {
	                reject(exception);
	            }
	        });
	    };
	    EditorComponent.prototype._composeSnippetFromEditor = function () {
	        var currentEditorState = this.tabs.currentState;
	        return new services_1.Snippet({
	            meta: this.snippet.meta,
	            css: currentEditorState['CSS'],
	            extras: currentEditorState['Libraries'],
	            ts: currentEditorState['JavaScript'],
	            html: currentEditorState['HTML']
	        });
	    };
	    __decorate([
	        core_1.ViewChild(components_1.Tabs), 
	        __metadata('design:type', components_1.Tabs)
	    ], EditorComponent.prototype, "tabs", void 0);
	    EditorComponent = __decorate([
	        core_1.Component({
	            selector: 'editor',
	            template: __webpack_require__(653),
	            styles: [__webpack_require__(654)],
	            directives: [components_1.Tab, components_1.Tabs]
	        }), 
	        __metadata('design:paramtypes', [services_1.SnippetManager, common_1.Location, router_1.Router, router_1.ActivatedRoute])
	    ], EditorComponent);
	    return EditorComponent;
	}(base_component_1.BaseComponent));
	exports.EditorComponent = EditorComponent;


/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(406));
	__export(__webpack_require__(423));


/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(407));
	__export(__webpack_require__(422));


/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var helpers_1 = __webpack_require__(408);
	var Tabs = (function (_super) {
	    __extends(Tabs, _super);
	    function Tabs(_http) {
	        _super.call(this);
	        this._http = _http;
	        this._subscriptions = [];
	    }
	    Tabs.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        window.require(['vs/editor/editor.main'], function () {
	            // FIXME: make dynamic
	            Promise.all([
	                _this._http.get('https://npmcdn.com/@types/office-js/index.d.ts').toPromise(),
	                _this._http.get('https://npmcdn.com/@types/jquery/index.d.ts').toPromise(),
	                _this._http.get('https://npmcdn.com/@types/core-js/index.d.ts').toPromise(),
	            ])
	                .then(function (responses) {
	                try {
	                    monaco.languages.typescript.typescriptDefaults.addExtraLib(responses[0].text(), 'office-js.d.ts');
	                    monaco.languages.typescript.typescriptDefaults.addExtraLib(responses[1].text(), 'jquery.d.ts');
	                    monaco.languages.typescript.typescriptDefaults.addExtraLib(responses[2].text(), 'core-js.d.ts');
	                }
	                catch (e) {
	                }
	                _this._monacoEditor = monaco.editor.create(_this._component.nativeElement, {
	                    value: '',
	                    language: 'text',
	                    lineNumbers: true,
	                    roundedSelection: false,
	                    scrollBeyondLastLine: false,
	                    wrappingColumn: 0,
	                    readOnly: _this.readonly,
	                    theme: "vs-dark"
	                });
	                _this._updateEditor(_this.selectedTab);
	            });
	        });
	    };
	    Tabs.prototype.ngOnDestroy = function () {
	        this._subscriptions.forEach(function (subscription) {
	            if (!subscription.isUnsubscribed) {
	                subscription.unsubscribe();
	            }
	        });
	        this._monacoEditor.dispose();
	    };
	    Object.defineProperty(Tabs.prototype, "currentState", {
	        get: function () {
	            this.selectedTab.state = this._monacoEditor.saveViewState();
	            this.selectedTab.model = this._monacoEditor.getModel();
	            this.selectedTab.content = this._monacoEditor.getValue();
	            var state = new helpers_1.Dictionary();
	            this.values().forEach(function (tab) {
	                state.add(tab.name, tab.content);
	            });
	            return state.lookup();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Tabs.prototype.add = function (name, tab) {
	        var _this = this;
	        if (this.count == 0) {
	            this.select(tab);
	        }
	        var subscription = tab.update.subscribe(function (name) {
	            _this.get(name).model = null;
	            if (_this.selectedTab.name === name)
	                _this._updateEditor(_this.selectedTab);
	        });
	        this._subscriptions.push(subscription);
	        return _super.prototype.add.call(this, tab.name, tab);
	    };
	    Tabs.prototype.select = function (tab) {
	        var currentTab = null;
	        this.selectedTab = tab;
	        this.values().forEach(function (tab) {
	            if (tab.active) {
	                currentTab = tab;
	            }
	            tab.active = false;
	        });
	        this.selectedTab.active = true;
	        this._updateEditor(tab, currentTab);
	    };
	    Tabs.prototype.resize = function () {
	        this._monacoEditor.layout();
	        this._monacoEditor.setScrollTop(0);
	        this._monacoEditor.setScrollLeft(0);
	    };
	    Tabs.prototype._updateEditor = function (nextTab, currentTab) {
	        if (!helpers_1.Utilities.isNull(this._monacoEditor)) {
	            if (!helpers_1.Utilities.isNull(currentTab)) {
	                currentTab.state = this._monacoEditor.saveViewState();
	                currentTab.model = this._monacoEditor.getModel();
	                currentTab.content = this._monacoEditor.getValue();
	            }
	            if (helpers_1.Utilities.isNull(nextTab.model)) {
	                nextTab.model = monaco.editor.createModel(nextTab.content, nextTab.language);
	            }
	            this._monacoEditor.setModel(nextTab.model);
	            this._monacoEditor.restoreViewState(nextTab.state);
	            this._monacoEditor.focus();
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], Tabs.prototype, "readonly", void 0);
	    __decorate([
	        core_1.ViewChild('editor'), 
	        __metadata('design:type', core_1.ElementRef)
	    ], Tabs.prototype, "_component", void 0);
	    __decorate([
	        core_1.HostListener('window:resize', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], Tabs.prototype, "resize", null);
	    Tabs = __decorate([
	        core_1.Component({
	            selector: 'tabs',
	            template: "\n    <ul class=\"tabs ms-Pivot ms-Pivot--tabs\">\n        <li class=\"tabs__tab ms-Pivot-link\" *ngFor=\"let tab of values()\" (click)=\"select(tab)\" [ngClass]=\"{'is-selected tabs__tab--active': tab.active}\">\n            {{tab.alias||tab.name}}\n        </li>\n    </ul>\n    <div class=\"tabs__container\">\n        <section #editor class=\"monaco-editor\"></section>\n    </div>",
	            styles: [__webpack_require__(421)]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Tabs);
	    return Tabs;
	}(helpers_1.Dictionary));
	exports.Tabs = Tabs;


/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(409));
	__export(__webpack_require__(410));
	__export(__webpack_require__(412));
	__export(__webpack_require__(413));
	__export(__webpack_require__(414));
	__export(__webpack_require__(415));
	__export(__webpack_require__(416));


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var helpers_1 = __webpack_require__(408);
	var NotificationHelper = (function () {
	    function NotificationHelper() {
	    }
	    NotificationHelper.prototype.showProgress = function (promise, message) {
	        var _this = this;
	        if (helpers_1.Utilities.isNull(promise))
	            return;
	        this.progress.isShown = true;
	        this.progress.message = message || "Loading";
	        return promise.then(function (success) {
	            _this.progress.isShown = false;
	            return success;
	        }, function (error) {
	            _this.progress.isShown = false;
	            return error;
	        }).catch(function (error) {
	            _this.progress.isShown = false;
	            throw error;
	        });
	    };
	    return NotificationHelper;
	}());
	exports.NotificationHelper = NotificationHelper;


/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var helpers_1 = __webpack_require__(408);
	var Dictionary = (function () {
	    function Dictionary(items) {
	        this.items = items;
	        if (helpers_1.Utilities.isNull(this.items))
	            this.items = {};
	    }
	    Dictionary.prototype.get = function (key) {
	        if (!this.contains(key))
	            return null;
	        return this.items[key];
	    };
	    Dictionary.prototype.add = function (key, value) {
	        if (this.contains(key))
	            throw new Error('Key already exists.');
	        return this.insert(key, value);
	    };
	    ;
	    Dictionary.prototype.first = function () {
	        if (helpers_1.Utilities.isNull(this.items))
	            throw new Error('Dictionary isn\'t initialized. Call \'new\' first.');
	        var key = this.keys()[0];
	        if (!helpers_1.Utilities.isNull(key))
	            return this.items[key];
	    };
	    Dictionary.prototype.insert = function (key, value) {
	        if (helpers_1.Utilities.isNull(this.items))
	            throw new Error('Dictionary isn\'t initialized. Call \'new\' first.');
	        if (helpers_1.Utilities.isNull(value))
	            throw new Error('Value expected. Got ' + value);
	        this.items[key] = value;
	        return value;
	    };
	    Dictionary.prototype.remove = function (key) {
	        if (!this.contains(key))
	            throw new Error('Key not found.');
	        var value = this.items[key];
	        delete this.items[key];
	        return value;
	    };
	    ;
	    Dictionary.prototype.clear = function () {
	        this.items = {};
	    };
	    Dictionary.prototype.contains = function (key) {
	        if (key == null)
	            throw new Error('Key cannot be null or undefined');
	        if (helpers_1.Utilities.isNull(this.items))
	            throw new Error('Dictionary isn\'t initialized. Call \'new\' first.');
	        return this.items.hasOwnProperty(key);
	    };
	    Dictionary.prototype.keys = function () {
	        if (helpers_1.Utilities.isNull(this.items))
	            throw new Error('Dictionary isn\'t initialized. Call \'new\' first.');
	        return _.keys(this.items);
	    };
	    Dictionary.prototype.values = function () {
	        if (helpers_1.Utilities.isNull(this.items))
	            throw new Error('Dictionary isn\'t initialized. Call \'new\' first.');
	        return _.values(this.items);
	    };
	    Dictionary.prototype.lookup = function () {
	        return this.keys().length ? this.items : null;
	    };
	    Object.defineProperty(Dictionary.prototype, "count", {
	        get: function () {
	            return this.values().length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return Dictionary;
	}());
	exports.Dictionary = Dictionary;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411)))

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var helpers_1 = __webpack_require__(408);
	(function (StorageTypes) {
	    StorageTypes[StorageTypes["LocalStorage"] = 0] = "LocalStorage";
	    StorageTypes[StorageTypes["SessionStorage"] = 1] = "SessionStorage";
	})(exports.StorageTypes || (exports.StorageTypes = {}));
	var StorageTypes = exports.StorageTypes;
	var StorageHelper = (function (_super) {
	    __extends(StorageHelper, _super);
	    function StorageHelper(_container, type) {
	        _super.call(this);
	        this._container = _container;
	        this._storage = null;
	        type = type || StorageTypes.LocalStorage;
	        this.switchStorage(type);
	    }
	    StorageHelper.prototype.switchStorage = function (type) {
	        this._storage = type === StorageTypes.LocalStorage ? localStorage : sessionStorage;
	        if (!_.has(this._storage, this._container)) {
	            this._storage[this._container] = "";
	        }
	        this.load();
	    };
	    StorageHelper.prototype.insert = function (item, value) {
	        _super.prototype.insert.call(this, item, value);
	        this.save();
	        return value;
	    };
	    StorageHelper.prototype.add = function (item, value) {
	        _super.prototype.add.call(this, item, value);
	        this.save();
	        return value;
	    };
	    StorageHelper.prototype.remove = function (item) {
	        var deletedItem = _super.prototype.remove.call(this, item);
	        this.save();
	        return deletedItem;
	    };
	    StorageHelper.prototype.clear = function () {
	        _super.prototype.clear.call(this);
	        delete this._storage[this._container];
	    };
	    StorageHelper.clear = function () {
	        window.localStorage.clear();
	        window.sessionStorage.clear();
	    };
	    StorageHelper.prototype.save = function () {
	        this._storage[this._container] = JSON.stringify(this.items);
	    };
	    StorageHelper.prototype.load = function () {
	        _super.prototype.clear.call(this);
	        var data = this._storage[this._container];
	        if (helpers_1.Utilities.isEmpty(data))
	            return;
	        this.items = JSON.parse(data);
	    };
	    return StorageHelper;
	}(helpers_1.Dictionary));
	exports.StorageHelper = StorageHelper;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411)))

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	(function (ContextType) {
	    ContextType[ContextType["Web"] = 0] = "Web";
	    ContextType[ContextType["Word"] = 1] = "Word";
	    ContextType[ContextType["Excel"] = 2] = "Excel";
	})(exports.ContextType || (exports.ContextType = {}));
	var ContextType = exports.ContextType;
	var Utilities = (function () {
	    function Utilities() {
	    }
	    Utilities.replace = function (source) {
	        return function self(key, value) {
	            if (!key)
	                return source;
	            source = source.replace(key, value);
	            return self;
	        };
	    };
	    Utilities.regex = function (source) {
	        return function self(key, value) {
	            if (!key)
	                return source;
	            source = source.replace(key, value);
	            return self;
	        };
	    };
	    Utilities.isNull = function (obj) {
	        return _.isUndefined(obj) || _.isNull(obj);
	    };
	    Utilities.isEmpty = function (obj) {
	        return this.isNull(obj) || _.isEmpty(obj);
	    };
	    Utilities.stringOrEmpty = function (text) {
	        if (text === null || text === undefined) {
	            return "";
	        }
	        return text;
	    };
	    Utilities.isNullOrWhitespace = function (text) {
	        return Utilities.isNull(text) || Utilities.isEmpty(text.trim());
	    };
	    Utilities.stripSpaces = function (text) {
	        var lines = text.split('\n');
	        // Replace each tab with 4 spaces.
	        for (var i = 0; i < lines.length; i++) {
	            lines[i].replace('\t', '    ');
	        }
	        var isZeroLengthLine = true;
	        var arrayPosition = 0;
	        // Remove zero length lines from the beginning of the snippet.
	        do {
	            var currentLine = lines[arrayPosition];
	            if (currentLine.trim() === '') {
	                lines.splice(arrayPosition, 1);
	            }
	            else {
	                isZeroLengthLine = false;
	            }
	        } while (isZeroLengthLine || (arrayPosition === lines.length));
	        arrayPosition = lines.length - 1;
	        isZeroLengthLine = true;
	        // Remove zero length lines from the end of the snippet.
	        do {
	            var currentLine = lines[arrayPosition];
	            if (currentLine.trim() === '') {
	                lines.splice(arrayPosition, 1);
	                arrayPosition--;
	            }
	            else {
	                isZeroLengthLine = false;
	            }
	        } while (isZeroLengthLine);
	        // Get smallest indent for align left.
	        var shortestIndentSize = 1024;
	        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
	            var line = lines_1[_i];
	            var currentLine = line;
	            if (currentLine.trim() !== '') {
	                var spaces = line.search(/\S/);
	                if (spaces < shortestIndentSize) {
	                    shortestIndentSize = spaces;
	                }
	            }
	        }
	        // Align left
	        for (var i = 0; i < lines.length; i++) {
	            if (lines[i].length >= shortestIndentSize) {
	                lines[i] = lines[i].substring(shortestIndentSize);
	            }
	        }
	        // Convert the array back into a string and return it.
	        var finalSetOfLines = '';
	        for (var i = 0; i < lines.length; i++) {
	            if (i < lines.length - 1) {
	                finalSetOfLines += lines[i] + '\n';
	            }
	            else {
	                finalSetOfLines += lines[i];
	            }
	        }
	        return finalSetOfLines;
	    };
	    Utilities.indentAll = function (text, indentSize) {
	        var lines = text.split('\n');
	        var indentString = "";
	        for (var i = 0; i < indentSize; i++) {
	            indentString += "    ";
	        }
	        return lines.map(function (line) { return indentString + line; }).join('\n');
	    };
	    Object.defineProperty(Utilities, "isExcel", {
	        get: function () {
	            return this._context == ContextType.Excel;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Utilities, "isWord", {
	        get: function () {
	            return this._context == ContextType.Word;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Utilities, "isWeb", {
	        get: function () {
	            return this._context == ContextType.Web;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Utilities.error = function (exception) {
	        console.log('Error: ' + JSON.stringify(exception));
	        return exception;
	    };
	    Object.defineProperty(Utilities, "context", {
	        get: function () {
	            if (this.isNull(this._context)) {
	                if (_.has(window, 'Word')) {
	                    this._context = ContextType.Word;
	                }
	                else if (_.has(window, 'Excel')) {
	                    this._context = ContextType.Excel;
	                }
	                else {
	                    this._context = ContextType.Web;
	                }
	                ;
	            }
	            return this._context;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Utilities._context = null;
	    Utilities.randomize = function (limit, start) {
	        if (limit === void 0) { limit = 100000; }
	        if (start === void 0) { start = 0; }
	        return Math.floor(Math.random() * limit + start);
	    };
	    return Utilities;
	}());
	exports.Utilities = Utilities;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411)))

/***/ },

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var ExceptionHelper = (function (_super) {
	    __extends(ExceptionHelper, _super);
	    function ExceptionHelper() {
	        _super.apply(this, arguments);
	    }
	    ExceptionHelper.prototype.call = function (exception, stackTrace, reason) {
	        console.group(exception.description || 'Handled Exception');
	        console.error(exception);
	        console.groupCollapsed('Stack Trace');
	        console.error(stackTrace);
	        console.groupEnd();
	        console.groupEnd();
	    };
	    return ExceptionHelper;
	}(core_1.ExceptionHandler));
	exports.ExceptionHelper = ExceptionHelper;


/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(328);
	var helpers_1 = __webpack_require__(408);
	var RequestHelper = (function () {
	    function RequestHelper(_http) {
	        this._http = _http;
	    }
	    RequestHelper.prototype.get = function (url, unformatted) {
	        var xhr = this._http.get(url);
	        return unformatted ? this._text(xhr) : this._json(xhr);
	    };
	    RequestHelper.prototype.post = function (url, body, options) {
	        var requestOptions = options || RequestHelper.generateHeaders({ "Content-Type": "application/json" });
	        var xhr = helpers_1.Utilities.isNull(requestOptions) ? this._http.post(url, JSON.stringify(body)) : this._http.post(url, JSON.stringify(body), requestOptions);
	        return this._json(xhr);
	    };
	    RequestHelper.prototype.put = function (url, body, options) {
	        var requestOptions = options || RequestHelper.generateHeaders();
	        var xhr = this._http.put(url, body, requestOptions);
	        return xhr.toPromise();
	    };
	    RequestHelper.generateHeaders = function (additionalHeaders) {
	        var headersObj = additionalHeaders || {};
	        headersObj["Accept"] = "application/json";
	        var headers = new http_1.Headers(headersObj);
	        return new http_1.RequestOptions({ headers: headers });
	    };
	    RequestHelper.prototype._text = function (request) {
	        return request
	            .map(function (response) { return response.text(); })
	            .toPromise()
	            .catch(function (error) { helpers_1.Utilities.error(error); });
	    };
	    RequestHelper.prototype._json = function (request) {
	        return request
	            .map(function (response) { return response.json(); })
	            .toPromise()
	            .catch(function (error) { helpers_1.Utilities.error(error); });
	    };
	    RequestHelper = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], RequestHelper);
	    return RequestHelper;
	}());
	exports.RequestHelper = RequestHelper;


/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utilities_1 = __webpack_require__(413);
	var SnippetWriter = (function () {
	    function SnippetWriter() {
	    }
	    SnippetWriter.createHtml = function (snippet, options) {
	        return snippet.js.then(function (js) {
	            var html = [
	                '<!DOCTYPE html>',
	                '<html>',
	                '<head>',
	                '    <meta charset="UTF-8" />',
	                '    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />',
	                '    <title>Running snippet</title>',
	                '	 <script src="https://npmcdn.com/jquery"></script>',
	                snippet.getJsLibaries().map(function (item) { return '    <script src="' + item + '"></script>'; }).join("\n"),
	                snippet.getCssStylesheets().map(function (item) { return '    <link rel="stylesheet" href="' + item + '" />'; }).join("\n"),
	            ];
	            if (options.inlineJsAndCssIntoIframe) {
	                html.push("    <style>", utilities_1.Utilities.stringOrEmpty(snippet.css).trim(), "    </style>");
	                var jsStringArray = [];
	                if (options.inlineJsAndCssIntoIframe) {
	                    jsStringArray.push('parent.iframeReadyCallback(window);');
	                }
	                if (options.includeOfficeInitialize) {
	                    jsStringArray.push('Office.initialize = function (reason) {');
	                }
	                jsStringArray.push('$(document).ready(function () {');
	                if (utilities_1.Utilities.isNullOrWhitespace(snippet.html)) {
	                    jsStringArray.push('$("#invoke-action").click(invokeAction);');
	                }
	                else {
	                    jsStringArray.push(js.trim());
	                }
	                jsStringArray.push('});');
	                if (options.includeOfficeInitialize) {
	                    jsStringArray.push('};');
	                }
	                if (utilities_1.Utilities.isNullOrWhitespace(snippet.html)) {
	                    jsStringArray.push('function invokeAction() {', js.trim(), '}');
	                }
	                var beautify = __webpack_require__(417).js_beautify;
	                var jsString = utilities_1.Utilities.indentAll(utilities_1.Utilities.stripSpaces(beautify(jsStringArray.join("\n"))), 2);
	                html.push("    <script>", jsString, "    </script>");
	            }
	            else {
	                html.push("    <link type='text/css' rel='stylesheet' href='app.css' />", "    <script src='app.js'></script>");
	            }
	            var htmlBody = utilities_1.Utilities.isNullOrWhitespace(snippet.html) ?
	                '<button id="invoke-action">Invoke action</button>' : snippet.html;
	            html.push('</head>', '<body>', utilities_1.Utilities.indentAll(htmlBody, 1), '</body>', '</html>');
	            return utilities_1.Utilities.stripSpaces(html.join('\n'));
	        });
	    };
	    return SnippetWriter;
	}());
	exports.SnippetWriter = SnippetWriter;


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	The following batches are equivalent:
	
	var beautify_js = require('js-beautify');
	var beautify_js = require('js-beautify').js;
	var beautify_js = require('js-beautify').js_beautify;
	
	var beautify_css = require('js-beautify').css;
	var beautify_css = require('js-beautify').css_beautify;
	
	var beautify_html = require('js-beautify').html;
	var beautify_html = require('js-beautify').html_beautify;
	
	All methods returned accept two arguments, the source string and an options object.
	**/
	
	function get_beautify(js_beautify, css_beautify, html_beautify) {
	    // the default is js
	    var beautify = function(src, config) {
	        return js_beautify.js_beautify(src, config);
	    };
	
	    // short aliases
	    beautify.js = js_beautify.js_beautify;
	    beautify.css = css_beautify.css_beautify;
	    beautify.html = html_beautify.html_beautify;
	
	    // legacy aliases
	    beautify.js_beautify = js_beautify.js_beautify;
	    beautify.css_beautify = css_beautify.css_beautify;
	    beautify.html_beautify = html_beautify.html_beautify;
	
	    return beautify;
	}
	
	if (true) {
	    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(418),
	        __webpack_require__(419),
	        __webpack_require__(420)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(js_beautify, css_beautify, html_beautify) {
	        return get_beautify(js_beautify, css_beautify, html_beautify);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	    (function(mod) {
	        var js_beautify = require('./lib/beautify');
	        var css_beautify = require('./lib/beautify-css');
	        var html_beautify = require('./lib/beautify-html');
	
	        mod.exports = get_beautify(js_beautify, css_beautify, html_beautify);
	
	    })(module);
	}

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*
	
	  The MIT License (MIT)
	
	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.
	
	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:
	
	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.
	
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.
	
	 JS Beautifier
	---------------
	
	
	  Written by Einar Lielmanis, <einar@jsbeautifier.org>
	      http://jsbeautifier.org/
	
	  Originally converted to javascript by Vital, <vital76@gmail.com>
	  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
	  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>
	
	
	  Usage:
	    js_beautify(js_source_text);
	    js_beautify(js_source_text, options);
	
	  The options are:
	    indent_size (default 4)          - indentation size,
	    indent_char (default space)      - character to indent with,
	    preserve_newlines (default true) - whether existing line breaks should be preserved,
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,
	
	    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.
	
	            jslint_happy        !jslint_happy
	            ---------------------------------
	            function ()         function()
	
	            switch () {         switch() {
	            case 1:               case 1:
	              break;                break;
	            }                   }
	
	    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
	          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)
	
	    brace_style (default "collapse") - "collapse-preserve-inline" | "collapse" | "expand" | "end-expand" | "none"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
	
	    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",
	
	    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"
	
	    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
	          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
	                be preserved if it were present.
	
	    end_with_newline (default false)  - end output with a newline
	
	
	    e.g
	
	    js_beautify(js_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t'
	    });
	
	*/
	
	// Object.values polyfill found here:
	// http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html
	if (!Object.values) {
	    Object.values = function(o) {
	        if (o !== Object(o)) {
	            throw new TypeError('Object.values called on a non-object');
	        }
	        var k = [],
	            p;
	        for (p in o) {
	            if (Object.prototype.hasOwnProperty.call(o, p)) {
	                k.push(o[p]);
	            }
	        }
	        return k;
	    };
	}
	
	(function() {
	
	    function js_beautify(js_source_text, options) {
	
	        var acorn = {};
	        (function(exports) {
	            /* jshint curly: false */
	            // This section of code is taken from acorn.
	            //
	            // Acorn was written by Marijn Haverbeke and released under an MIT
	            // license. The Unicode regexps (for identifiers and whitespace) were
	            // taken from [Esprima](http://esprima.org) by Ariya Hidayat.
	            //
	            // Git repositories for Acorn are available at
	            //
	            //     http://marijnhaverbeke.nl/git/acorn
	            //     https://github.com/marijnh/acorn.git
	
	            // ## Character categories
	
	            // Big ugly regular expressions that match characters in the
	            // whitespace, identifier, and identifier-start categories. These
	            // are only applied when a character is found to actually have a
	            // code point above 128.
	
	            var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line
	            var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
	            var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
	            var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	            var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
	
	            // Whether a single character denotes a newline.
	
	            exports.newline = /[\n\r\u2028\u2029]/;
	
	            // Matches a whole line break (where CRLF is considered a single
	            // line break). Used to count lines.
	
	            // in javascript, these two differ
	            // in python they are the same, different methods are called on them
	            exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
	            exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');
	
	
	            // Test whether a given character code starts an identifier.
	
	            exports.isIdentifierStart = function(code) {
	                // permit $ (36) and @ (64). @ is used in ES7 decorators.
	                if (code < 65) return code === 36 || code === 64;
	                // 65 through 91 are uppercase letters.
	                if (code < 91) return true;
	                // permit _ (95).
	                if (code < 97) return code === 95;
	                // 97 through 123 are lowercase letters.
	                if (code < 123) return true;
	                return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
	            };
	
	            // Test whether a given character is part of an identifier.
	
	            exports.isIdentifierChar = function(code) {
	                if (code < 48) return code === 36;
	                if (code < 58) return true;
	                if (code < 65) return false;
	                if (code < 91) return true;
	                if (code < 97) return code === 95;
	                if (code < 123) return true;
	                return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
	            };
	        })(acorn);
	        /* jshint curly: true */
	
	        function in_array(what, arr) {
	            for (var i = 0; i < arr.length; i += 1) {
	                if (arr[i] === what) {
	                    return true;
	                }
	            }
	            return false;
	        }
	
	        function trim(s) {
	            return s.replace(/^\s+|\s+$/g, '');
	        }
	
	        function ltrim(s) {
	            return s.replace(/^\s+/g, '');
	        }
	
	        // function rtrim(s) {
	        //     return s.replace(/\s+$/g, '');
	        // }
	
	        function sanitizeOperatorPosition(opPosition) {
	            opPosition = opPosition || OPERATOR_POSITION.before_newline;
	
	            var validPositionValues = Object.values(OPERATOR_POSITION);
	
	            if (!in_array(opPosition, validPositionValues)) {
	                throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n" +
	                    validPositionValues +
	                    "\nYou passed in: '" + opPosition + "'");
	            }
	
	            return opPosition;
	        }
	
	        var OPERATOR_POSITION = {
	            before_newline: 'before-newline',
	            after_newline: 'after-newline',
	            preserve_newline: 'preserve-newline',
	        };
	
	        var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
	
	        var MODE = {
	            BlockStatement: 'BlockStatement', // 'BLOCK'
	            Statement: 'Statement', // 'STATEMENT'
	            ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
	            ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
	            ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
	            Conditional: 'Conditional', //'(COND-EXPRESSION)',
	            Expression: 'Expression' //'(EXPRESSION)'
	        };
	
	        function Beautifier(js_source_text, options) {
	            "use strict";
	            var output;
	            var tokens = [],
	                token_pos;
	            var Tokenizer;
	            var current_token;
	            var last_type, last_last_text, indent_string;
	            var flags, previous_flags, flag_store;
	            var prefix;
	
	            var handlers, opt;
	            var baseIndentString = '';
	
	            handlers = {
	                'TK_START_EXPR': handle_start_expr,
	                'TK_END_EXPR': handle_end_expr,
	                'TK_START_BLOCK': handle_start_block,
	                'TK_END_BLOCK': handle_end_block,
	                'TK_WORD': handle_word,
	                'TK_RESERVED': handle_word,
	                'TK_SEMICOLON': handle_semicolon,
	                'TK_STRING': handle_string,
	                'TK_EQUALS': handle_equals,
	                'TK_OPERATOR': handle_operator,
	                'TK_COMMA': handle_comma,
	                'TK_BLOCK_COMMENT': handle_block_comment,
	                'TK_COMMENT': handle_comment,
	                'TK_DOT': handle_dot,
	                'TK_UNKNOWN': handle_unknown,
	                'TK_EOF': handle_eof
	            };
	
	            function create_flags(flags_base, mode) {
	                var next_indent_level = 0;
	                if (flags_base) {
	                    next_indent_level = flags_base.indentation_level;
	                    if (!output.just_added_newline() &&
	                        flags_base.line_indent_level > next_indent_level) {
	                        next_indent_level = flags_base.line_indent_level;
	                    }
	                }
	
	                var next_flags = {
	                    mode: mode,
	                    parent: flags_base,
	                    last_text: flags_base ? flags_base.last_text : '', // last token text
	                    last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
	                    declaration_statement: false,
	                    declaration_assignment: false,
	                    multiline_frame: false,
	                    inline_frame: false,
	                    if_block: false,
	                    else_block: false,
	                    do_block: false,
	                    do_while: false,
	                    import_block: false,
	                    in_case_statement: false, // switch(..){ INSIDE HERE }
	                    in_case: false, // we're on the exact line with "case 0:"
	                    case_body: false, // the indented case-action block
	                    indentation_level: next_indent_level,
	                    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
	                    start_line_index: output.get_line_number(),
	                    ternary_depth: 0
	                };
	                return next_flags;
	            }
	
	            // Some interpreters have unexpected results with foo = baz || bar;
	            options = options ? options : {};
	            opt = {};
	
	            // compatibility
	            if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
	                opt.brace_style = options.braces_on_own_line ? "expand" : "collapse";
	            }
	            opt.brace_style = options.brace_style ? options.brace_style : (opt.brace_style ? opt.brace_style : "collapse");
	
	            // graceful handling of deprecated option
	            if (opt.brace_style === "expand-strict") {
	                opt.brace_style = "expand";
	            }
	
	            opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
	            opt.indent_char = options.indent_char ? options.indent_char : ' ';
	            opt.eol = options.eol ? options.eol : 'auto';
	            opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
	            opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
	            opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
	            opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
	            opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
	            opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
	            opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
	            opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
	            opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
	            opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
	            opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
	            opt.e4x = (options.e4x === undefined) ? false : options.e4x;
	            opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	            opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;
	            opt.operator_position = sanitizeOperatorPosition(options.operator_position);
	
	            // For testing of beautify ignore:start directive
	            opt.test_output_raw = (options.test_output_raw === undefined) ? false : options.test_output_raw;
	
	            // force opt.space_after_anon_function to true if opt.jslint_happy
	            if (opt.jslint_happy) {
	                opt.space_after_anon_function = true;
	            }
	
	            if (options.indent_with_tabs) {
	                opt.indent_char = '\t';
	                opt.indent_size = 1;
	            }
	
	            if (opt.eol === 'auto') {
	                opt.eol = '\n';
	                if (js_source_text && acorn.lineBreak.test(js_source_text || '')) {
	                    opt.eol = js_source_text.match(acorn.lineBreak)[0];
	                }
	            }
	
	            opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n');
	
	            //----------------------------------
	            indent_string = '';
	            while (opt.indent_size > 0) {
	                indent_string += opt.indent_char;
	                opt.indent_size -= 1;
	            }
	
	            var preindent_index = 0;
	            if (js_source_text && js_source_text.length) {
	                while ((js_source_text.charAt(preindent_index) === ' ' ||
	                        js_source_text.charAt(preindent_index) === '\t')) {
	                    baseIndentString += js_source_text.charAt(preindent_index);
	                    preindent_index += 1;
	                }
	                js_source_text = js_source_text.substring(preindent_index);
	            }
	
	            last_type = 'TK_START_BLOCK'; // last token type
	            last_last_text = ''; // pre-last token text
	            output = new Output(indent_string, baseIndentString);
	
	            // If testing the ignore directive, start with output disable set to true
	            output.raw = opt.test_output_raw;
	
	
	            // Stack of parsing/formatting states, including MODE.
	            // We tokenize, parse, and output in an almost purely a forward-only stream of token input
	            // and formatted output.  This makes the beautifier less accurate than full parsers
	            // but also far more tolerant of syntax errors.
	            //
	            // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
	            // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
	            // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
	            // most full parsers would die, but the beautifier gracefully falls back to
	            // MODE.BlockStatement and continues on.
	            flag_store = [];
	            set_mode(MODE.BlockStatement);
	
	            this.beautify = function() {
	
	                /*jshint onevar:true */
	                var local_token, sweet_code;
	                Tokenizer = new tokenizer(js_source_text, opt, indent_string);
	                tokens = Tokenizer.tokenize();
	                token_pos = 0;
	
	                function get_local_token() {
	                    local_token = get_token();
	                    return local_token;
	                }
	
	                while (get_local_token()) {
	                    for (var i = 0; i < local_token.comments_before.length; i++) {
	                        // The cleanest handling of inline comments is to treat them as though they aren't there.
	                        // Just continue formatting and the behavior should be logical.
	                        // Also ignore unknown tokens.  Again, this should result in better behavior.
	                        handle_token(local_token.comments_before[i]);
	                    }
	                    handle_token(local_token);
	
	                    last_last_text = flags.last_text;
	                    last_type = local_token.type;
	                    flags.last_text = local_token.text;
	
	                    token_pos += 1;
	                }
	
	                sweet_code = output.get_code();
	                if (opt.end_with_newline) {
	                    sweet_code += '\n';
	                }
	
	                if (opt.eol !== '\n') {
	                    sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
	                }
	
	                return sweet_code;
	            };
	
	            function handle_token(local_token) {
	                var newlines = local_token.newlines;
	                var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
	
	                if (keep_whitespace) {
	                    for (var i = 0; i < newlines; i += 1) {
	                        print_newline(i > 0);
	                    }
	                } else {
	                    if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
	                        newlines = opt.max_preserve_newlines;
	                    }
	
	                    if (opt.preserve_newlines) {
	                        if (local_token.newlines > 1) {
	                            print_newline();
	                            for (var j = 1; j < newlines; j += 1) {
	                                print_newline(true);
	                            }
	                        }
	                    }
	                }
	
	                current_token = local_token;
	                handlers[current_token.type]();
	            }
	
	            // we could use just string.split, but
	            // IE doesn't like returning empty strings
	            function split_linebreaks(s) {
	                //return s.split(/\x0d\x0a|\x0a/);
	
	                s = s.replace(acorn.allLineBreaks, '\n');
	                var out = [],
	                    idx = s.indexOf("\n");
	                while (idx !== -1) {
	                    out.push(s.substring(0, idx));
	                    s = s.substring(idx + 1);
	                    idx = s.indexOf("\n");
	                }
	                if (s.length) {
	                    out.push(s);
	                }
	                return out;
	            }
	
	            var newline_restricted_tokens = ['break', 'contiue', 'return', 'throw'];
	
	            function allow_wrap_or_preserved_newline(force_linewrap) {
	                force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;
	
	                // Never wrap the first token on a line
	                if (output.just_added_newline()) {
	                    return;
	                }
	
	                var shouldPreserveOrForce = (opt.preserve_newlines && current_token.wanted_newline) || force_linewrap;
	                var operatorLogicApplies = in_array(flags.last_text, Tokenizer.positionable_operators) || in_array(current_token.text, Tokenizer.positionable_operators);
	
	                if (operatorLogicApplies) {
	                    var shouldPrintOperatorNewline = (
	                            in_array(flags.last_text, Tokenizer.positionable_operators) &&
	                            in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
	                        ) ||
	                        in_array(current_token.text, Tokenizer.positionable_operators);
	                    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
	                }
	
	                if (shouldPreserveOrForce) {
	                    print_newline(false, true);
	                } else if (opt.wrap_line_length) {
	                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens)) {
	                        // These tokens should never have a newline inserted
	                        // between them and the following expression.
	                        return;
	                    }
	                    var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
	                        (output.space_before_token ? 1 : 0);
	                    if (proposed_line_length >= opt.wrap_line_length) {
	                        print_newline(false, true);
	                    }
	                }
	            }
	
	            function print_newline(force_newline, preserve_statement_flags) {
	                if (!preserve_statement_flags) {
	                    if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
	                        while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
	                            restore_mode();
	                        }
	                    }
	                }
	
	                if (output.add_new_line(force_newline)) {
	                    flags.multiline_frame = true;
	                }
	            }
	
	            function print_token_line_indentation() {
	                if (output.just_added_newline()) {
	                    if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
	                        output.current_line.push(current_token.whitespace_before);
	                        output.space_before_token = false;
	                    } else if (output.set_indent(flags.indentation_level)) {
	                        flags.line_indent_level = flags.indentation_level;
	                    }
	                }
	            }
	
	            function print_token(printable_token) {
	                if (output.raw) {
	                    output.add_raw_token(current_token);
	                    return;
	                }
	
	                if (opt.comma_first && last_type === 'TK_COMMA' &&
	                    output.just_added_newline()) {
	                    if (output.previous_line.last() === ',') {
	                        var popped = output.previous_line.pop();
	                        // if the comma was already at the start of the line,
	                        // pull back onto that line and reprint the indentation
	                        if (output.previous_line.is_empty()) {
	                            output.previous_line.push(popped);
	                            output.trim(true);
	                            output.current_line.pop();
	                            output.trim();
	                        }
	
	                        // add the comma in front of the next token
	                        print_token_line_indentation();
	                        output.add_token(',');
	                        output.space_before_token = true;
	                    }
	                }
	
	                printable_token = printable_token || current_token.text;
	                print_token_line_indentation();
	                output.add_token(printable_token);
	            }
	
	            function indent() {
	                flags.indentation_level += 1;
	            }
	
	            function deindent() {
	                if (flags.indentation_level > 0 &&
	                    ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level)) {
	                    flags.indentation_level -= 1;
	
	                }
	            }
	
	            function set_mode(mode) {
	                if (flags) {
	                    flag_store.push(flags);
	                    previous_flags = flags;
	                } else {
	                    previous_flags = create_flags(null, mode);
	                }
	
	                flags = create_flags(previous_flags, mode);
	            }
	
	            function is_array(mode) {
	                return mode === MODE.ArrayLiteral;
	            }
	
	            function is_expression(mode) {
	                return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
	            }
	
	            function restore_mode() {
	                if (flag_store.length > 0) {
	                    previous_flags = flags;
	                    flags = flag_store.pop();
	                    if (previous_flags.mode === MODE.Statement) {
	                        output.remove_redundant_indentation(previous_flags);
	                    }
	                }
	            }
	
	            function start_of_object_property() {
	                return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
	                    (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
	            }
	
	            function start_of_statement() {
	                if (
	                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
	                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw']) && !current_token.wanted_newline) ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'else' && !(current_token.type === 'TK_RESERVED' && current_token.text === 'if')) ||
	                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
	                    (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement &&
	                        !flags.in_case &&
	                        !(current_token.text === '--' || current_token.text === '++') &&
	                        last_last_text !== 'function' &&
	                        current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
	                    (flags.mode === MODE.ObjectLiteral && (
	                        (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
	                ) {
	
	                    set_mode(MODE.Statement);
	                    indent();
	
	                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
	                        flags.declaration_statement = true;
	                    }
	
	                    // Issue #276:
	                    // If starting a new statement with [if, for, while, do], push to a new line.
	                    // if (a) if (b) if(c) d(); else e(); else f();
	                    if (!start_of_object_property()) {
	                        allow_wrap_or_preserved_newline(
	                            current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
	                    }
	
	                    return true;
	                }
	                return false;
	            }
	
	            function all_lines_start_with(lines, c) {
	                for (var i = 0; i < lines.length; i++) {
	                    var line = trim(lines[i]);
	                    if (line.charAt(0) !== c) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	
	            function each_line_matches_indent(lines, indent) {
	                var i = 0,
	                    len = lines.length,
	                    line;
	                for (; i < len; i++) {
	                    line = lines[i];
	                    // allow empty lines to pass through
	                    if (line && line.indexOf(indent) !== 0) {
	                        return false;
	                    }
	                }
	                return true;
	            }
	
	            function is_special_word(word) {
	                return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
	            }
	
	            function get_token(offset) {
	                var index = token_pos + (offset || 0);
	                return (index < 0 || index >= tokens.length) ? null : tokens[index];
	            }
	
	            function handle_start_expr() {
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                }
	
	                var next_mode = MODE.Expression;
	                if (current_token.text === '[') {
	
	                    if (last_type === 'TK_WORD' || flags.last_text === ')') {
	                        // this is array index specifier, break immediately
	                        // a[x], fn()[x]
	                        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
	                            output.space_before_token = true;
	                        }
	                        set_mode(next_mode);
	                        print_token();
	                        indent();
	                        if (opt.space_in_paren) {
	                            output.space_before_token = true;
	                        }
	                        return;
	                    }
	
	                    next_mode = MODE.ArrayLiteral;
	                    if (is_array(flags.mode)) {
	                        if (flags.last_text === '[' ||
	                            (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
	                            // ], [ goes to new line
	                            // }, [ goes to new line
	                            if (!opt.keep_array_indentation) {
	                                print_newline();
	                            }
	                        }
	                    }
	
	                } else {
	                    if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
	                        next_mode = MODE.ForInitializer;
	                    } else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
	                        next_mode = MODE.Conditional;
	                    } else {
	                        // next_mode = MODE.Expression;
	                    }
	                }
	
	                if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
	                    print_newline();
	                } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
	                    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
	                    allow_wrap_or_preserved_newline(current_token.wanted_newline);
	                    // do nothing on (( and )( and ][ and ]( and .(
	                } else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
	                    output.space_before_token = true;
	                } else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
	                    (flags.last_text === '*' && last_last_text === 'function')) {
	                    // function() vs function ()
	                    if (opt.space_after_anon_function) {
	                        output.space_before_token = true;
	                    }
	                } else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
	                    if (opt.space_before_conditional) {
	                        output.space_before_token = true;
	                    }
	                }
	
	                // Should be a space between await and an IIFE
	                if (current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await') {
	                    output.space_before_token = true;
	                }
	
	                // Support of this kind of newline preservation.
	                // a = (b &&
	                //     (c || d));
	                if (current_token.text === '(') {
	                    if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                        if (!start_of_object_property()) {
	                            allow_wrap_or_preserved_newline();
	                        }
	                    }
	                }
	
	                // Support preserving wrapped arrow function expressions
	                // a.b('c',
	                //     () => d.e
	                // )
	                if (current_token.text === '(' && last_type !== 'TK_WORD' && last_type !== 'TK_RESERVED') {
	                    allow_wrap_or_preserved_newline();
	                }
	
	                set_mode(next_mode);
	                print_token();
	                if (opt.space_in_paren) {
	                    output.space_before_token = true;
	                }
	
	                // In all cases, if we newline while inside an expression it should be indented.
	                indent();
	            }
	
	            function handle_end_expr() {
	                // statements inside expressions are not valid syntax, but...
	                // statements must all be closed when their container closes
	                while (flags.mode === MODE.Statement) {
	                    restore_mode();
	                }
	
	                if (flags.multiline_frame) {
	                    allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
	                }
	
	                if (opt.space_in_paren) {
	                    if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
	                        // () [] no inner space in empty parens like these, ever, ref #320
	                        output.trim();
	                        output.space_before_token = false;
	                    } else {
	                        output.space_before_token = true;
	                    }
	                }
	                if (current_token.text === ']' && opt.keep_array_indentation) {
	                    print_token();
	                    restore_mode();
	                } else {
	                    restore_mode();
	                    print_token();
	                }
	                output.remove_redundant_indentation(previous_flags);
	
	                // do {} while () // no statement required after
	                if (flags.do_while && previous_flags.mode === MODE.Conditional) {
	                    previous_flags.mode = MODE.Expression;
	                    flags.do_block = false;
	                    flags.do_while = false;
	
	                }
	            }
	
	            function handle_start_block() {
	                // Check if this is should be treated as a ObjectLiteral
	                var next_token = get_token(1);
	                var second_token = get_token(2);
	                if (second_token && (
	                        (in_array(second_token.text, [':', ',']) && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED'])) ||
	                        (in_array(next_token.text, ['get', 'set']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
	                    )) {
	                    // We don't support TypeScript,but we didn't break it for a very long time.
	                    // We'll try to keep not breaking it.
	                    if (!in_array(last_last_text, ['class', 'interface'])) {
	                        set_mode(MODE.ObjectLiteral);
	                    } else {
	                        set_mode(MODE.BlockStatement);
	                    }
	                } else if (last_type === 'TK_OPERATOR' && flags.last_text === '=>') {
	                    // arrow function: (param1, paramN) => { statements }
	                    set_mode(MODE.BlockStatement);
	                } else if (in_array(last_type, ['TK_EQUALS', 'TK_START_EXPR', 'TK_COMMA', 'TK_OPERATOR']) ||
	                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw', 'import']))
	                ) {
	                    // Detecting shorthand function syntax is difficult by scanning forward,
	                    //     so check the surrounding context.
	                    // If the block is being returned, imported, passed as arg,
	                    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
	                    set_mode(MODE.ObjectLiteral);
	                } else {
	                    set_mode(MODE.BlockStatement);
	                }
	
	                var empty_braces = !next_token.comments_before.length && next_token.text === '}';
	                var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
	                    last_type === 'TK_END_EXPR';
	
	
	                if (opt.brace_style === "expand" ||
	                    (opt.brace_style === "none" && current_token.wanted_newline)) {
	                    if (last_type !== 'TK_OPERATOR' &&
	                        (empty_anonymous_function ||
	                            last_type === 'TK_EQUALS' ||
	                            (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
	                        output.space_before_token = true;
	                    } else {
	                        print_newline(false, true);
	                    }
	                } else { // collapse
	                    if (opt.brace_style === 'collapse-preserve-inline') {
	                        // search forward for a newline wanted inside this block
	                        var index = 0;
	                        var check_token = null;
	                        flags.inline_frame = true;
	                        do {
	                            index += 1;
	                            check_token = get_token(index);
	                            if (check_token.wanted_newline) {
	                                flags.inline_frame = false;
	                                break;
	                            }
	                        } while (check_token.type !== 'TK_EOF' &&
	                            !(check_token.type === 'TK_END_BLOCK' && check_token.opened === current_token));
	                    }
	
	                    if (is_array(previous_flags.mode) && (last_type === 'TK_START_EXPR' || last_type === 'TK_COMMA')) {
	                        // if we're preserving inline,
	                        // allow newline between comma and next brace.
	                        if (last_type === 'TK_COMMA' || opt.space_in_paren) {
	                            output.space_before_token = true;
	                        }
	
	                        if (opt.brace_style === 'collapse-preserve-inline' &&
	                            (last_type === 'TK_COMMA' || (last_type === 'TK_START_EXPR' && flags.inline_frame))) {
	                            allow_wrap_or_preserved_newline();
	                            previous_flags.multiline_frame = previous_flags.multiline_frame || flags.multiline_frame;
	                            flags.multiline_frame = false;
	                        }
	                    } else if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
	                        if (last_type === 'TK_START_BLOCK') {
	                            print_newline();
	                        } else {
	                            output.space_before_token = true;
	                        }
	                    }
	                }
	                print_token();
	                indent();
	            }
	
	            function handle_end_block() {
	                // statements must all be closed when their container closes
	                while (flags.mode === MODE.Statement) {
	                    restore_mode();
	                }
	                var empty_braces = last_type === 'TK_START_BLOCK';
	
	                if (opt.brace_style === "expand") {
	                    if (!empty_braces) {
	                        print_newline();
	                    }
	                } else {
	                    // skip {}
	                    if (!empty_braces) {
	                        if (flags.inline_frame) {
	                            output.space_before_token = true;
	                        } else if (is_array(flags.mode) && opt.keep_array_indentation) {
	                            // we REALLY need a newline here, but newliner would skip that
	                            opt.keep_array_indentation = false;
	                            print_newline();
	                            opt.keep_array_indentation = true;
	
	                        } else {
	                            print_newline();
	                        }
	                    }
	                }
	                restore_mode();
	                print_token();
	            }
	
	            function handle_word() {
	                if (current_token.type === 'TK_RESERVED') {
	                    if (in_array(current_token.text, ['set', 'get']) && flags.mode !== MODE.ObjectLiteral) {
	                        current_token.type = 'TK_WORD';
	                    } else if (in_array(current_token.text, ['as', 'from']) && !flags.import_block) {
	                        current_token.type = 'TK_WORD';
	                    } else if (flags.mode === MODE.ObjectLiteral) {
	                        var next_token = get_token(1);
	                        if (next_token.text === ':') {
	                            current_token.type = 'TK_WORD';
	                        }
	                    }
	                }
	
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                } else if (current_token.wanted_newline && !is_expression(flags.mode) &&
	                    (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
	                    last_type !== 'TK_EQUALS' &&
	                    (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {
	
	                    print_newline();
	                }
	
	                if (flags.do_block && !flags.do_while) {
	                    if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
	                        // do {} ## while ()
	                        output.space_before_token = true;
	                        print_token();
	                        output.space_before_token = true;
	                        flags.do_while = true;
	                        return;
	                    } else {
	                        // do {} should always have while as the next word.
	                        // if we don't see the expected while, recover
	                        print_newline();
	                        flags.do_block = false;
	                    }
	                }
	
	                // if may be followed by else, or not
	                // Bare/inline ifs are tricky
	                // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
	                if (flags.if_block) {
	                    if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
	                        flags.else_block = true;
	                    } else {
	                        while (flags.mode === MODE.Statement) {
	                            restore_mode();
	                        }
	                        flags.if_block = false;
	                        flags.else_block = false;
	                    }
	                }
	
	                if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
	                    print_newline();
	                    if (flags.case_body || opt.jslint_happy) {
	                        // switch cases following one another
	                        deindent();
	                        flags.case_body = false;
	                    }
	                    print_token();
	                    flags.in_case = true;
	                    flags.in_case_statement = true;
	                    return;
	                }
	
	                if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
	                    if (in_array(flags.last_text, ['}', ';']) || (output.just_added_newline() && !in_array(flags.last_text, ['[', '{', ':', '=', ',']))) {
	                        // make sure there is a nice clean space of at least one blank line
	                        // before a new function definition
	                        if (!output.just_added_blankline() && !current_token.comments_before.length) {
	                            print_newline();
	                            print_newline(true);
	                        }
	                    }
	                    if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
	                        if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
	                            output.space_before_token = true;
	                        } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
	                            output.space_before_token = true;
	                        } else {
	                            print_newline();
	                        }
	                    } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
	                        // foo = function
	                        output.space_before_token = true;
	                    } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
	                        // (function
	                    } else {
	                        print_newline();
	                    }
	                }
	
	                if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                    if (!start_of_object_property()) {
	                        allow_wrap_or_preserved_newline();
	                    }
	                }
	
	                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['function', 'get', 'set'])) {
	                    print_token();
	                    flags.last_word = current_token.text;
	                    return;
	                }
	
	                prefix = 'NONE';
	
	                if (last_type === 'TK_END_BLOCK') {
	
	                    if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally', 'from']))) {
	                        prefix = 'NEWLINE';
	                    } else {
	                        if (opt.brace_style === "expand" ||
	                            opt.brace_style === "end-expand" ||
	                            (opt.brace_style === "none" && current_token.wanted_newline)) {
	                            prefix = 'NEWLINE';
	                        } else {
	                            prefix = 'SPACE';
	                            output.space_before_token = true;
	                        }
	                    }
	                } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
	                    // TODO: Should this be for STATEMENT as well?
	                    prefix = 'NEWLINE';
	                } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
	                    prefix = 'SPACE';
	                } else if (last_type === 'TK_STRING') {
	                    prefix = 'NEWLINE';
	                } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
	                    (flags.last_text === '*' && last_last_text === 'function')) {
	                    prefix = 'SPACE';
	                } else if (last_type === 'TK_START_BLOCK') {
	                    if (flags.inline_frame) {
	                        prefix = 'SPACE';
	                    } else {
	                        prefix = 'NEWLINE';
	                    }
	                } else if (last_type === 'TK_END_EXPR') {
	                    output.space_before_token = true;
	                    prefix = 'NEWLINE';
	                }
	
	                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
	                    if (flags.last_text === 'else' || flags.last_text === 'export') {
	                        prefix = 'SPACE';
	                    } else {
	                        prefix = 'NEWLINE';
	                    }
	
	                }
	
	                if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
	                    if (!(last_type === 'TK_END_BLOCK' && previous_flags.mode === MODE.BlockStatement) ||
	                        opt.brace_style === "expand" ||
	                        opt.brace_style === "end-expand" ||
	                        (opt.brace_style === "none" && current_token.wanted_newline)) {
	                        print_newline();
	                    } else {
	                        output.trim(true);
	                        var line = output.current_line;
	                        // If we trimmed and there's something other than a close block before us
	                        // put a newline back in.  Handles '} // comment' scenario.
	                        if (line.last() !== '}') {
	                            print_newline();
	                        }
	                        output.space_before_token = true;
	                    }
	                } else if (prefix === 'NEWLINE') {
	                    if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                        // no newline between 'return nnn'
	                        output.space_before_token = true;
	                    } else if (last_type !== 'TK_END_EXPR') {
	                        if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
	                            // no need to force newline on 'var': for (var x = 0...)
	                            if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
	                                // no newline for } else if {
	                                output.space_before_token = true;
	                            } else {
	                                print_newline();
	                            }
	                        }
	                    } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
	                        print_newline();
	                    }
	                } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
	                    print_newline(); // }, in lists get a newline treatment
	                } else if (prefix === 'SPACE') {
	                    output.space_before_token = true;
	                }
	                print_token();
	                flags.last_word = current_token.text;
	
	                if (current_token.type === 'TK_RESERVED') {
	                    if (current_token.text === 'do') {
	                        flags.do_block = true;
	                    } else if (current_token.text === 'if') {
	                        flags.if_block = true;
	                    } else if (current_token.text === 'import') {
	                        flags.import_block = true;
	                    } else if (flags.import_block && current_token.type === 'TK_RESERVED' && current_token.text === 'from') {
	                        flags.import_block = false;
	                    }
	                }
	            }
	
	            function handle_semicolon() {
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                    // Semicolon can be the start (and end) of a statement
	                    output.space_before_token = false;
	                }
	                while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
	                    restore_mode();
	                }
	
	                // hacky but effective for the moment
	                if (flags.import_block) {
	                    flags.import_block = false;
	                }
	                print_token();
	            }
	
	            function handle_string() {
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                    // One difference - strings want at least a space before
	                    output.space_before_token = true;
	                } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.inline_frame) {
	                    output.space_before_token = true;
	                } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                    if (!start_of_object_property()) {
	                        allow_wrap_or_preserved_newline();
	                    }
	                } else {
	                    print_newline();
	                }
	                print_token();
	            }
	
	            function handle_equals() {
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                }
	
	                if (flags.declaration_statement) {
	                    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
	                    flags.declaration_assignment = true;
	                }
	                output.space_before_token = true;
	                print_token();
	                output.space_before_token = true;
	            }
	
	            function handle_comma() {
	                print_token();
	                output.space_before_token = true;
	                if (flags.declaration_statement) {
	                    if (is_expression(flags.parent.mode)) {
	                        // do not break on comma, for(var a = 1, b = 2)
	                        flags.declaration_assignment = false;
	                    }
	
	                    if (flags.declaration_assignment) {
	                        flags.declaration_assignment = false;
	                        print_newline(false, true);
	                    } else if (opt.comma_first) {
	                        // for comma-first, we want to allow a newline before the comma
	                        // to turn into a newline after the comma, which we will fixup later
	                        allow_wrap_or_preserved_newline();
	                    }
	                } else if (flags.mode === MODE.ObjectLiteral ||
	                    (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
	                    if (flags.mode === MODE.Statement) {
	                        restore_mode();
	                    }
	
	                    if (!flags.inline_frame) {
	                        print_newline();
	                    }
	                } else if (opt.comma_first) {
	                    // EXPR or DO_BLOCK
	                    // for comma-first, we want to allow a newline before the comma
	                    // to turn into a newline after the comma, which we will fixup later
	                    allow_wrap_or_preserved_newline();
	                }
	            }
	
	            function handle_operator() {
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                }
	
	                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                    // "return" had a special handling in TK_WORD. Now we need to return the favor
	                    output.space_before_token = true;
	                    print_token();
	                    return;
	                }
	
	                // hack for actionscript's import .*;
	                if (current_token.text === '*' && last_type === 'TK_DOT') {
	                    print_token();
	                    return;
	                }
	
	                if (current_token.text === '::') {
	                    // no spaces around exotic namespacing syntax operator
	                    print_token();
	                    return;
	                }
	
	                // Allow line wrapping between operators when operator_position is
	                //   set to before or preserve
	                if (last_type === 'TK_OPERATOR' && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
	                    allow_wrap_or_preserved_newline();
	                }
	
	                if (current_token.text === ':' && flags.in_case) {
	                    flags.case_body = true;
	                    indent();
	                    print_token();
	                    print_newline();
	                    flags.in_case = false;
	                    return;
	                }
	
	                var space_before = true;
	                var space_after = true;
	                var in_ternary = false;
	                var isGeneratorAsterisk = current_token.text === '*' && last_type === 'TK_RESERVED' && flags.last_text === 'function';
	                var isUnary = in_array(current_token.text, ['-', '+']) && (
	                    in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) ||
	                    in_array(flags.last_text, Tokenizer.line_starters) ||
	                    flags.last_text === ','
	                );
	
	                if (current_token.text === ':') {
	                    if (flags.ternary_depth === 0) {
	                        // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
	                        space_before = false;
	                    } else {
	                        flags.ternary_depth -= 1;
	                        in_ternary = true;
	                    }
	                } else if (current_token.text === '?') {
	                    flags.ternary_depth += 1;
	                }
	
	                // let's handle the operator_position option prior to any conflicting logic
	                if (!isUnary && !isGeneratorAsterisk && opt.preserve_newlines && in_array(current_token.text, Tokenizer.positionable_operators)) {
	                    var isColon = current_token.text === ':';
	                    var isTernaryColon = (isColon && in_ternary);
	                    var isOtherColon = (isColon && !in_ternary);
	
	                    switch (opt.operator_position) {
	                        case OPERATOR_POSITION.before_newline:
	                            // if the current token is : and it's not a ternary statement then we set space_before to false
	                            output.space_before_token = !isOtherColon;
	
	                            print_token();
	
	                            if (!isColon || isTernaryColon) {
	                                allow_wrap_or_preserved_newline();
	                            }
	
	                            output.space_before_token = true;
	                            return;
	
	                        case OPERATOR_POSITION.after_newline:
	                            // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
	                            //   then print a newline.
	
	                            output.space_before_token = true;
	
	                            if (!isColon || isTernaryColon) {
	                                if (get_token(1).wanted_newline) {
	                                    print_newline(false, true);
	                                } else {
	                                    allow_wrap_or_preserved_newline();
	                                }
	                            } else {
	                                output.space_before_token = false;
	                            }
	
	                            print_token();
	
	                            output.space_before_token = true;
	                            return;
	
	                        case OPERATOR_POSITION.preserve_newline:
	                            if (!isOtherColon) {
	                                allow_wrap_or_preserved_newline();
	                            }
	
	                            // if we just added a newline, or the current token is : and it's not a ternary statement,
	                            //   then we set space_before to false
	                            space_before = !(output.just_added_newline() || isOtherColon);
	
	                            output.space_before_token = space_before;
	                            print_token();
	                            output.space_before_token = true;
	                            return;
	                    }
	                }
	
	                if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
	                    // unary operators (and binary +/- pretending to be unary) special cases
	
	                    space_before = false;
	                    space_after = false;
	
	                    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
	                    // if there is a newline between -- or ++ and anything else we should preserve it.
	                    if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
	                        print_newline(false, true);
	                    }
	
	                    if (flags.last_text === ';' && is_expression(flags.mode)) {
	                        // for (;; ++i)
	                        //        ^^^
	                        space_before = true;
	                    }
	
	                    if (last_type === 'TK_RESERVED') {
	                        space_before = true;
	                    } else if (last_type === 'TK_END_EXPR') {
	                        space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
	                    } else if (last_type === 'TK_OPERATOR') {
	                        // a++ + ++b;
	                        // a - -b
	                        space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
	                        // + and - are not unary when preceeded by -- or ++ operator
	                        // a-- + b
	                        // a * +b
	                        // a - -b
	                        if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
	                            space_after = true;
	                        }
	                    }
	
	
	                    if (((flags.mode === MODE.BlockStatement && !flags.inline_frame) || flags.mode === MODE.Statement) &&
	                        (flags.last_text === '{' || flags.last_text === ';')) {
	                        // { foo; --i }
	                        // foo(); --bar;
	                        print_newline();
	                    }
	                } else if (isGeneratorAsterisk) {
	                    space_before = false;
	                    space_after = false;
	                }
	                output.space_before_token = output.space_before_token || space_before;
	                print_token();
	                output.space_before_token = space_after;
	            }
	
	            function handle_block_comment() {
	                if (output.raw) {
	                    output.add_raw_token(current_token);
	                    if (current_token.directives && current_token.directives.preserve === 'end') {
	                        // If we're testing the raw output behavior, do not allow a directive to turn it off.
	                        output.raw = opt.test_output_raw;
	                    }
	                    return;
	                }
	
	                if (current_token.directives) {
	                    print_newline(false, true);
	                    print_token();
	                    if (current_token.directives.preserve === 'start') {
	                        output.raw = true;
	                    }
	                    print_newline(false, true);
	                    return;
	                }
	
	                // inline block
	                if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
	                    output.space_before_token = true;
	                    print_token();
	                    output.space_before_token = true;
	                    return;
	                }
	
	                var lines = split_linebreaks(current_token.text);
	                var j; // iterator for this case
	                var javadoc = false;
	                var starless = false;
	                var lastIndent = current_token.whitespace_before;
	                var lastIndentLength = lastIndent.length;
	
	                // block comment starts with a new line
	                print_newline(false, true);
	                if (lines.length > 1) {
	                    javadoc = all_lines_start_with(lines.slice(1), '*');
	                    starless = each_line_matches_indent(lines.slice(1), lastIndent);
	                }
	
	                // first line always indented
	                print_token(lines[0]);
	                for (j = 1; j < lines.length; j++) {
	                    print_newline(false, true);
	                    if (javadoc) {
	                        // javadoc: reformat and re-indent
	                        print_token(' ' + ltrim(lines[j]));
	                    } else if (starless && lines[j].length > lastIndentLength) {
	                        // starless: re-indent non-empty content, avoiding trim
	                        print_token(lines[j].substring(lastIndentLength));
	                    } else {
	                        // normal comments output raw
	                        output.add_token(lines[j]);
	                    }
	                }
	
	                // for comments of more than one line, make sure there's a new line after
	                print_newline(false, true);
	            }
	
	            function handle_comment() {
	                if (current_token.wanted_newline) {
	                    print_newline(false, true);
	                } else {
	                    output.trim(true);
	                }
	
	                output.space_before_token = true;
	                print_token();
	                print_newline(false, true);
	            }
	
	            function handle_dot() {
	                if (start_of_statement()) {
	                    // The conditional starts the statement if appropriate.
	                }
	
	                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                    output.space_before_token = true;
	                } else {
	                    // allow preserved newlines before dots in general
	                    // force newlines on dots after close paren when break_chained - for bar().baz()
	                    allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
	                }
	
	                print_token();
	            }
	
	            function handle_unknown() {
	                print_token();
	
	                if (current_token.text[current_token.text.length - 1] === '\n') {
	                    print_newline();
	                }
	            }
	
	            function handle_eof() {
	                // Unwind any open statements
	                while (flags.mode === MODE.Statement) {
	                    restore_mode();
	                }
	            }
	        }
	
	
	        function OutputLine(parent) {
	            var _character_count = 0;
	            // use indent_count as a marker for lines that have preserved indentation
	            var _indent_count = -1;
	
	            var _items = [];
	            var _empty = true;
	
	            this.set_indent = function(level) {
	                _character_count = parent.baseIndentLength + level * parent.indent_length;
	                _indent_count = level;
	            };
	
	            this.get_character_count = function() {
	                return _character_count;
	            };
	
	            this.is_empty = function() {
	                return _empty;
	            };
	
	            this.last = function() {
	                if (!this._empty) {
	                    return _items[_items.length - 1];
	                } else {
	                    return null;
	                }
	            };
	
	            this.push = function(input) {
	                _items.push(input);
	                _character_count += input.length;
	                _empty = false;
	            };
	
	            this.pop = function() {
	                var item = null;
	                if (!_empty) {
	                    item = _items.pop();
	                    _character_count -= item.length;
	                    _empty = _items.length === 0;
	                }
	                return item;
	            };
	
	            this.remove_indent = function() {
	                if (_indent_count > 0) {
	                    _indent_count -= 1;
	                    _character_count -= parent.indent_length;
	                }
	            };
	
	            this.trim = function() {
	                while (this.last() === ' ') {
	                    _items.pop();
	                    _character_count -= 1;
	                }
	                _empty = _items.length === 0;
	            };
	
	            this.toString = function() {
	                var result = '';
	                if (!this._empty) {
	                    if (_indent_count >= 0) {
	                        result = parent.indent_cache[_indent_count];
	                    }
	                    result += _items.join('');
	                }
	                return result;
	            };
	        }
	
	        function Output(indent_string, baseIndentString) {
	            baseIndentString = baseIndentString || '';
	            this.indent_cache = [baseIndentString];
	            this.baseIndentLength = baseIndentString.length;
	            this.indent_length = indent_string.length;
	            this.raw = false;
	
	            var lines = [];
	            this.baseIndentString = baseIndentString;
	            this.indent_string = indent_string;
	            this.previous_line = null;
	            this.current_line = null;
	            this.space_before_token = false;
	
	            this.add_outputline = function() {
	                this.previous_line = this.current_line;
	                this.current_line = new OutputLine(this);
	                lines.push(this.current_line);
	            };
	
	            // initialize
	            this.add_outputline();
	
	
	            this.get_line_number = function() {
	                return lines.length;
	            };
	
	            // Using object instead of string to allow for later expansion of info about each line
	            this.add_new_line = function(force_newline) {
	                if (this.get_line_number() === 1 && this.just_added_newline()) {
	                    return false; // no newline on start of file
	                }
	
	                if (force_newline || !this.just_added_newline()) {
	                    if (!this.raw) {
	                        this.add_outputline();
	                    }
	                    return true;
	                }
	
	                return false;
	            };
	
	            this.get_code = function() {
	                var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
	                return sweet_code;
	            };
	
	            this.set_indent = function(level) {
	                // Never indent your first output indent at the start of the file
	                if (lines.length > 1) {
	                    while (level >= this.indent_cache.length) {
	                        this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
	                    }
	
	                    this.current_line.set_indent(level);
	                    return true;
	                }
	                this.current_line.set_indent(0);
	                return false;
	            };
	
	            this.add_raw_token = function(token) {
	                for (var x = 0; x < token.newlines; x++) {
	                    this.add_outputline();
	                }
	                this.current_line.push(token.whitespace_before);
	                this.current_line.push(token.text);
	                this.space_before_token = false;
	            };
	
	            this.add_token = function(printable_token) {
	                this.add_space_before_token();
	                this.current_line.push(printable_token);
	            };
	
	            this.add_space_before_token = function() {
	                if (this.space_before_token && !this.just_added_newline()) {
	                    this.current_line.push(' ');
	                }
	                this.space_before_token = false;
	            };
	
	            this.remove_redundant_indentation = function(frame) {
	                // This implementation is effective but has some issues:
	                //     - can cause line wrap to happen too soon due to indent removal
	                //           after wrap points are calculated
	                // These issues are minor compared to ugly indentation.
	
	                if (frame.multiline_frame ||
	                    frame.mode === MODE.ForInitializer ||
	                    frame.mode === MODE.Conditional) {
	                    return;
	                }
	
	                // remove one indent from each line inside this section
	                var index = frame.start_line_index;
	
	                var output_length = lines.length;
	                while (index < output_length) {
	                    lines[index].remove_indent();
	                    index++;
	                }
	            };
	
	            this.trim = function(eat_newlines) {
	                eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;
	
	                this.current_line.trim(indent_string, baseIndentString);
	
	                while (eat_newlines && lines.length > 1 &&
	                    this.current_line.is_empty()) {
	                    lines.pop();
	                    this.current_line = lines[lines.length - 1];
	                    this.current_line.trim();
	                }
	
	                this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
	            };
	
	            this.just_added_newline = function() {
	                return this.current_line.is_empty();
	            };
	
	            this.just_added_blankline = function() {
	                if (this.just_added_newline()) {
	                    if (lines.length === 1) {
	                        return true; // start of the file and newline = blank
	                    }
	
	                    var line = lines[lines.length - 2];
	                    return line.is_empty();
	                }
	                return false;
	            };
	        }
	
	
	        var Token = function(type, text, newlines, whitespace_before, parent) {
	            this.type = type;
	            this.text = text;
	            this.comments_before = [];
	            this.newlines = newlines || 0;
	            this.wanted_newline = newlines > 0;
	            this.whitespace_before = whitespace_before || '';
	            this.parent = parent || null;
	            this.opened = null;
	            this.directives = null;
	        };
	
	        function tokenizer(input, opts) {
	
	            var whitespace = "\n\r\t ".split('');
	            var digit = /[0-9]/;
	            var digit_bin = /[01]/;
	            var digit_oct = /[01234567]/;
	            var digit_hex = /[0123456789abcdefABCDEF]/;
	
	            this.positionable_operators = '!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||'.split(' ');
	            var punct = this.positionable_operators.concat(
	                // non-positionable operators - these do not follow operator position settings
	                '! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~'.split(' '));
	
	            // words which should always start on new line.
	            this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
	            var reserved_words = this.line_starters.concat(['do', 'in', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);
	
	            //  /* ... */ comment ends with nearest */ or end of file
	            var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;
	
	            // comment ends just before nearest linefeed or end of file
	            var comment_pattern = /([^\n\r\u2028\u2029]*)/g;
	
	            var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
	            var directive_pattern = / (\w+)[:](\w+)/g;
	            var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;
	
	            var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;
	
	            var n_newlines, whitespace_before_token, in_html_comment, tokens, parser_pos;
	            var input_length;
	
	            this.tokenize = function() {
	                // cache the source's length.
	                input_length = input.length;
	                parser_pos = 0;
	                in_html_comment = false;
	                tokens = [];
	
	                var next, last;
	                var token_values;
	                var open = null;
	                var open_stack = [];
	                var comments = [];
	
	                while (!(last && last.type === 'TK_EOF')) {
	                    token_values = tokenize_next();
	                    next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
	                    while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
	                        if (next.type === 'TK_BLOCK_COMMENT') {
	                            next.directives = token_values[2];
	                        }
	                        comments.push(next);
	                        token_values = tokenize_next();
	                        next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
	                    }
	
	                    if (comments.length) {
	                        next.comments_before = comments;
	                        comments = [];
	                    }
	
	                    if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
	                        next.parent = last;
	                        open_stack.push(open);
	                        open = next;
	                    } else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
	                        (open && (
	                            (next.text === ']' && open.text === '[') ||
	                            (next.text === ')' && open.text === '(') ||
	                            (next.text === '}' && open.text === '{')))) {
	                        next.parent = open.parent;
	                        next.opened = open;
	
	                        open = open_stack.pop();
	                    }
	
	                    tokens.push(next);
	                    last = next;
	                }
	
	                return tokens;
	            };
	
	            function get_directives(text) {
	                if (!text.match(directives_block_pattern)) {
	                    return null;
	                }
	
	                var directives = {};
	                directive_pattern.lastIndex = 0;
	                var directive_match = directive_pattern.exec(text);
	
	                while (directive_match) {
	                    directives[directive_match[1]] = directive_match[2];
	                    directive_match = directive_pattern.exec(text);
	                }
	
	                return directives;
	            }
	
	            function tokenize_next() {
	                var resulting_string;
	                var whitespace_on_this_line = [];
	
	                n_newlines = 0;
	                whitespace_before_token = '';
	
	                if (parser_pos >= input_length) {
	                    return ['', 'TK_EOF'];
	                }
	
	                var last_token;
	                if (tokens.length) {
	                    last_token = tokens[tokens.length - 1];
	                } else {
	                    // For the sake of tokenizing we can pretend that there was on open brace to start
	                    last_token = new Token('TK_START_BLOCK', '{');
	                }
	
	
	                var c = input.charAt(parser_pos);
	                parser_pos += 1;
	
	                while (in_array(c, whitespace)) {
	
	                    if (acorn.newline.test(c)) {
	                        if (!(c === '\n' && input.charAt(parser_pos - 2) === '\r')) {
	                            n_newlines += 1;
	                            whitespace_on_this_line = [];
	                        }
	                    } else {
	                        whitespace_on_this_line.push(c);
	                    }
	
	                    if (parser_pos >= input_length) {
	                        return ['', 'TK_EOF'];
	                    }
	
	                    c = input.charAt(parser_pos);
	                    parser_pos += 1;
	                }
	
	                if (whitespace_on_this_line.length) {
	                    whitespace_before_token = whitespace_on_this_line.join('');
	                }
	
	                if (digit.test(c) || (c === '.' && digit.test(input.charAt(parser_pos)))) {
	                    var allow_decimal = true;
	                    var allow_e = true;
	                    var local_digit = digit;
	
	                    if (c === '0' && parser_pos < input_length && /[XxOoBb]/.test(input.charAt(parser_pos))) {
	                        // switch to hex/oct/bin number, no decimal or e, just hex/oct/bin digits
	                        allow_decimal = false;
	                        allow_e = false;
	                        if (/[Bb]/.test(input.charAt(parser_pos))) {
	                            local_digit = digit_bin;
	                        } else if (/[Oo]/.test(input.charAt(parser_pos))) {
	                            local_digit = digit_oct;
	                        } else {
	                            local_digit = digit_hex;
	                        }
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	                    } else if (c === '.') {
	                        // Already have a decimal for this literal, don't allow another
	                        allow_decimal = false;
	                    } else {
	                        // we know this first loop will run.  It keeps the logic simpler.
	                        c = '';
	                        parser_pos -= 1;
	                    }
	
	                    // Add the digits
	                    while (parser_pos < input_length && local_digit.test(input.charAt(parser_pos))) {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	
	                        if (allow_decimal && parser_pos < input_length && input.charAt(parser_pos) === '.') {
	                            c += input.charAt(parser_pos);
	                            parser_pos += 1;
	                            allow_decimal = false;
	                        } else if (allow_e && parser_pos < input_length && /[Ee]/.test(input.charAt(parser_pos))) {
	                            c += input.charAt(parser_pos);
	                            parser_pos += 1;
	
	                            if (parser_pos < input_length && /[+-]/.test(input.charAt(parser_pos))) {
	                                c += input.charAt(parser_pos);
	                                parser_pos += 1;
	                            }
	
	                            allow_e = false;
	                            allow_decimal = false;
	                        }
	                    }
	
	                    return [c, 'TK_WORD'];
	                }
	
	                if (acorn.isIdentifierStart(input.charCodeAt(parser_pos - 1))) {
	                    if (parser_pos < input_length) {
	                        while (acorn.isIdentifierChar(input.charCodeAt(parser_pos))) {
	                            c += input.charAt(parser_pos);
	                            parser_pos += 1;
	                            if (parser_pos === input_length) {
	                                break;
	                            }
	                        }
	                    }
	
	                    if (!(last_token.type === 'TK_DOT' ||
	                            (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get']))) &&
	                        in_array(c, reserved_words)) {
	                        if (c === 'in') { // hack for 'in' operator
	                            return [c, 'TK_OPERATOR'];
	                        }
	                        return [c, 'TK_RESERVED'];
	                    }
	
	                    return [c, 'TK_WORD'];
	                }
	
	                if (c === '(' || c === '[') {
	                    return [c, 'TK_START_EXPR'];
	                }
	
	                if (c === ')' || c === ']') {
	                    return [c, 'TK_END_EXPR'];
	                }
	
	                if (c === '{') {
	                    return [c, 'TK_START_BLOCK'];
	                }
	
	                if (c === '}') {
	                    return [c, 'TK_END_BLOCK'];
	                }
	
	                if (c === ';') {
	                    return [c, 'TK_SEMICOLON'];
	                }
	
	                if (c === '/') {
	                    var comment = '';
	                    var comment_match;
	                    // peek for comment /* ... */
	                    if (input.charAt(parser_pos) === '*') {
	                        parser_pos += 1;
	                        block_comment_pattern.lastIndex = parser_pos;
	                        comment_match = block_comment_pattern.exec(input);
	                        comment = '/*' + comment_match[0];
	                        parser_pos += comment_match[0].length;
	                        var directives = get_directives(comment);
	                        if (directives && directives.ignore === 'start') {
	                            directives_end_ignore_pattern.lastIndex = parser_pos;
	                            comment_match = directives_end_ignore_pattern.exec(input);
	                            comment += comment_match[0];
	                            parser_pos += comment_match[0].length;
	                        }
	                        comment = comment.replace(acorn.allLineBreaks, '\n');
	                        return [comment, 'TK_BLOCK_COMMENT', directives];
	                    }
	                    // peek for comment // ...
	                    if (input.charAt(parser_pos) === '/') {
	                        parser_pos += 1;
	                        comment_pattern.lastIndex = parser_pos;
	                        comment_match = comment_pattern.exec(input);
	                        comment = '//' + comment_match[0];
	                        parser_pos += comment_match[0].length;
	                        return [comment, 'TK_COMMENT'];
	                    }
	
	                }
	
	                var startXmlRegExp = /^<([-a-zA-Z:0-9_.]+|{.+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{.+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.+?}))*\s*(\/?)\s*>/;
	
	                if (c === '`' || c === "'" || c === '"' || // string
	                    (
	                        (c === '/') || // regexp
	                        (opts.e4x && c === "<" && input.slice(parser_pos - 1).match(startXmlRegExp)) // xml
	                    ) && ( // regex and xml can only appear in specific locations during parsing
	                        (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
	                        (last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
	                            last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
	                        (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
	                            'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
	                        ]))
	                    )) {
	
	                    var sep = c,
	                        esc = false,
	                        has_char_escapes = false;
	
	                    resulting_string = c;
	
	                    if (sep === '/') {
	                        //
	                        // handle regexp
	                        //
	                        var in_char_class = false;
	                        while (parser_pos < input_length &&
	                            ((esc || in_char_class || input.charAt(parser_pos) !== sep) &&
	                                !acorn.newline.test(input.charAt(parser_pos)))) {
	                            resulting_string += input.charAt(parser_pos);
	                            if (!esc) {
	                                esc = input.charAt(parser_pos) === '\\';
	                                if (input.charAt(parser_pos) === '[') {
	                                    in_char_class = true;
	                                } else if (input.charAt(parser_pos) === ']') {
	                                    in_char_class = false;
	                                }
	                            } else {
	                                esc = false;
	                            }
	                            parser_pos += 1;
	                        }
	                    } else if (opts.e4x && sep === '<') {
	                        //
	                        // handle e4x xml literals
	                        //
	
	                        var xmlRegExp = /<(\/?)([-a-zA-Z:0-9_.]+|{.+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{.+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.+?}))*\s*(\/?)\s*>/g;
	                        var xmlStr = input.slice(parser_pos - 1);
	                        var match = xmlRegExp.exec(xmlStr);
	                        if (match && match.index === 0) {
	                            var rootTag = match[2];
	                            var depth = 0;
	                            while (match) {
	                                var isEndTag = !!match[1];
	                                var tagName = match[2];
	                                var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
	                                if (tagName === rootTag && !isSingletonTag) {
	                                    if (isEndTag) {
	                                        --depth;
	                                    } else {
	                                        ++depth;
	                                    }
	                                }
	                                if (depth <= 0) {
	                                    break;
	                                }
	                                match = xmlRegExp.exec(xmlStr);
	                            }
	                            var xmlLength = match ? match.index + match[0].length : xmlStr.length;
	                            xmlStr = xmlStr.slice(0, xmlLength);
	                            parser_pos += xmlLength - 1;
	                            xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
	                            return [xmlStr, "TK_STRING"];
	                        }
	                    } else {
	                        //
	                        // handle string
	                        //
	                        var parse_string = function(delimiter, allow_unescaped_newlines, start_sub) {
	                            // Template strings can travers lines without escape characters.
	                            // Other strings cannot
	                            var current_char;
	                            while (parser_pos < input_length) {
	                                current_char = input.charAt(parser_pos);
	                                if (!(esc || (current_char !== delimiter &&
	                                        (allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
	                                    break;
	                                }
	
	                                // Handle \r\n linebreaks after escapes or in template strings
	                                if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
	                                    if (current_char === '\r' && input.charAt(parser_pos + 1) === '\n') {
	                                        parser_pos += 1;
	                                        current_char = input.charAt(parser_pos);
	                                    }
	                                    resulting_string += '\n';
	                                } else {
	                                    resulting_string += current_char;
	                                }
	                                if (esc) {
	                                    if (current_char === 'x' || current_char === 'u') {
	                                        has_char_escapes = true;
	                                    }
	                                    esc = false;
	                                } else {
	                                    esc = current_char === '\\';
	                                }
	
	                                parser_pos += 1;
	
	                                if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
	                                    if (delimiter === '`') {
	                                        parse_string('}', allow_unescaped_newlines, '`');
	                                    } else {
	                                        parse_string('`', allow_unescaped_newlines, '${');
	                                    }
	                                }
	                            }
	                        };
	
	                        if (sep === '`') {
	                            parse_string('`', true, '${');
	                        } else {
	                            parse_string(sep);
	                        }
	                    }
	
	                    if (has_char_escapes && opts.unescape_strings) {
	                        resulting_string = unescape_string(resulting_string);
	                    }
	
	                    if (parser_pos < input_length && input.charAt(parser_pos) === sep) {
	                        resulting_string += sep;
	                        parser_pos += 1;
	
	                        if (sep === '/') {
	                            // regexps may have modifiers /regexp/MOD , so fetch those, too
	                            // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
	                            while (parser_pos < input_length && acorn.isIdentifierStart(input.charCodeAt(parser_pos))) {
	                                resulting_string += input.charAt(parser_pos);
	                                parser_pos += 1;
	                            }
	                        }
	                    }
	                    return [resulting_string, 'TK_STRING'];
	                }
	
	                if (c === '#') {
	
	                    if (tokens.length === 0 && input.charAt(parser_pos) === '!') {
	                        // shebang
	                        resulting_string = c;
	                        while (parser_pos < input_length && c !== '\n') {
	                            c = input.charAt(parser_pos);
	                            resulting_string += c;
	                            parser_pos += 1;
	                        }
	                        return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
	                    }
	
	
	
	                    // Spidermonkey-specific sharp variables for circular references
	                    // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
	                    // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
	                    var sharp = '#';
	                    if (parser_pos < input_length && digit.test(input.charAt(parser_pos))) {
	                        do {
	                            c = input.charAt(parser_pos);
	                            sharp += c;
	                            parser_pos += 1;
	                        } while (parser_pos < input_length && c !== '#' && c !== '=');
	                        if (c === '#') {
	                            //
	                        } else if (input.charAt(parser_pos) === '[' && input.charAt(parser_pos + 1) === ']') {
	                            sharp += '[]';
	                            parser_pos += 2;
	                        } else if (input.charAt(parser_pos) === '{' && input.charAt(parser_pos + 1) === '}') {
	                            sharp += '{}';
	                            parser_pos += 2;
	                        }
	                        return [sharp, 'TK_WORD'];
	                    }
	                }
	
	                if (c === '<' && (input.charAt(parser_pos) === '?' || input.charAt(parser_pos) === '%')) {
	                    template_pattern.lastIndex = parser_pos - 1;
	                    var template_match = template_pattern.exec(input);
	                    if (template_match) {
	                        c = template_match[0];
	                        parser_pos += c.length - 1;
	                        c = c.replace(acorn.allLineBreaks, '\n');
	                        return [c, 'TK_STRING'];
	                    }
	                }
	
	                if (c === '<' && input.substring(parser_pos - 1, parser_pos + 3) === '<!--') {
	                    parser_pos += 3;
	                    c = '<!--';
	                    while (!acorn.newline.test(input.charAt(parser_pos)) && parser_pos < input_length) {
	                        c += input.charAt(parser_pos);
	                        parser_pos++;
	                    }
	                    in_html_comment = true;
	                    return [c, 'TK_COMMENT'];
	                }
	
	                if (c === '-' && in_html_comment && input.substring(parser_pos - 1, parser_pos + 2) === '-->') {
	                    in_html_comment = false;
	                    parser_pos += 2;
	                    return ['-->', 'TK_COMMENT'];
	                }
	
	                if (c === '.') {
	                    return [c, 'TK_DOT'];
	                }
	
	                if (in_array(c, punct)) {
	                    while (parser_pos < input_length && in_array(c + input.charAt(parser_pos), punct)) {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	                        if (parser_pos >= input_length) {
	                            break;
	                        }
	                    }
	
	                    if (c === ',') {
	                        return [c, 'TK_COMMA'];
	                    } else if (c === '=') {
	                        return [c, 'TK_EQUALS'];
	                    } else {
	                        return [c, 'TK_OPERATOR'];
	                    }
	                }
	
	                return [c, 'TK_UNKNOWN'];
	            }
	
	
	            function unescape_string(s) {
	                var esc = false,
	                    out = '',
	                    pos = 0,
	                    s_hex = '',
	                    escaped = 0,
	                    c;
	
	                while (esc || pos < s.length) {
	
	                    c = s.charAt(pos);
	                    pos++;
	
	                    if (esc) {
	                        esc = false;
	                        if (c === 'x') {
	                            // simple hex-escape \x24
	                            s_hex = s.substr(pos, 2);
	                            pos += 2;
	                        } else if (c === 'u') {
	                            // unicode-escape, \u2134
	                            s_hex = s.substr(pos, 4);
	                            pos += 4;
	                        } else {
	                            // some common escape, e.g \n
	                            out += '\\' + c;
	                            continue;
	                        }
	                        if (!s_hex.match(/^[0123456789abcdefABCDEF]+$/)) {
	                            // some weird escaping, bail out,
	                            // leaving whole string intact
	                            return s;
	                        }
	
	                        escaped = parseInt(s_hex, 16);
	
	                        if (escaped >= 0x00 && escaped < 0x20) {
	                            // leave 0x00...0x1f escaped
	                            if (c === 'x') {
	                                out += '\\x' + s_hex;
	                            } else {
	                                out += '\\u' + s_hex;
	                            }
	                            continue;
	                        } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
	                            // single-quote, apostrophe, backslash - escape these
	                            out += '\\' + String.fromCharCode(escaped);
	                        } else if (c === 'x' && escaped > 0x7e && escaped <= 0xff) {
	                            // we bail out on \x7f..\xff,
	                            // leaving whole string escaped,
	                            // as it's probably completely binary
	                            return s;
	                        } else {
	                            out += String.fromCharCode(escaped);
	                        }
	                    } else if (c === '\\') {
	                        esc = true;
	                    } else {
	                        out += c;
	                    }
	                }
	                return out;
	            }
	        }
	
	        var beautifier = new Beautifier(js_source_text, options);
	        return beautifier.beautify();
	
	    }
	
	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return { js_beautify: js_beautify };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var js_beautify = require("beautify").js_beautify`.
	        exports.js_beautify = js_beautify;
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.js_beautify = js_beautify;
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.js_beautify = js_beautify;
	    }
	
	}());

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*
	
	  The MIT License (MIT)
	
	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.
	
	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:
	
	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.
	
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.
	
	
	 CSS Beautifier
	---------------
	
	    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)
	
	    Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
	        http://jsbeautifier.org/
	
	    Usage:
	        css_beautify(source_text);
	        css_beautify(source_text, options);
	
	    The options are (default in brackets):
	        indent_size (4)                         — indentation size,
	        indent_char (space)                     — character to indent with,
	        selector_separator_newline (true)       - separate selectors with newline or
	                                                  not (e.g. "a,\nbr" or "a, br")
	        end_with_newline (false)                - end with a newline
	        newline_between_rules (true)            - add a new line after every css rule
	        space_around_selector_separator (false) - ensure space around selector separators:
	                                                  '>', '+', '~' (e.g. "a>b" -> "a > b")
	    e.g
	
	    css_beautify(css_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t',
	      'selector_separator': ' ',
	      'end_with_newline': false,
	      'newline_between_rules': true,
	      'space_around_selector_separator': true
	    });
	*/
	
	// http://www.w3.org/TR/CSS21/syndata.html#tokenization
	// http://www.w3.org/TR/css3-syntax/
	
	(function() {
	    function css_beautify(source_text, options) {
	        options = options || {};
	        source_text = source_text || '';
	        // HACK: newline parsing inconsistent. This brute force normalizes the input.
	        source_text = source_text.replace(/\r\n|[\r\u2028\u2029]/g, '\n');
	
	        var indentSize = options.indent_size || 4;
	        var indentCharacter = options.indent_char || ' ';
	        var selectorSeparatorNewline = (options.selector_separator_newline === undefined) ? true : options.selector_separator_newline;
	        var end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        var newline_between_rules = (options.newline_between_rules === undefined) ? true : options.newline_between_rules;
	        var spaceAroundSelectorSeparator = (options.space_around_selector_separator === undefined) ? false : options.space_around_selector_separator;
	        var eol = options.eol ? options.eol : '\n';
	
	        // compatibility
	        if (typeof indentSize === "string") {
	            indentSize = parseInt(indentSize, 10);
	        }
	
	        if (options.indent_with_tabs) {
	            indentCharacter = '\t';
	            indentSize = 1;
	        }
	
	        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n');
	
	
	        // tokenizer
	        var whiteRe = /^\s+$/;
	
	        var pos = -1,
	            ch;
	        var parenLevel = 0;
	
	        function next() {
	            ch = source_text.charAt(++pos);
	            return ch || '';
	        }
	
	        function peek(skipWhitespace) {
	            var result = '';
	            var prev_pos = pos;
	            if (skipWhitespace) {
	                eatWhitespace();
	            }
	            result = source_text.charAt(pos + 1) || '';
	            pos = prev_pos - 1;
	            next();
	            return result;
	        }
	
	        function eatString(endChars) {
	            var start = pos;
	            while (next()) {
	                if (ch === "\\") {
	                    next();
	                } else if (endChars.indexOf(ch) !== -1) {
	                    break;
	                } else if (ch === "\n") {
	                    break;
	                }
	            }
	            return source_text.substring(start, pos + 1);
	        }
	
	        function peekString(endChar) {
	            var prev_pos = pos;
	            var str = eatString(endChar);
	            pos = prev_pos - 1;
	            next();
	            return str;
	        }
	
	        function eatWhitespace() {
	            var result = '';
	            while (whiteRe.test(peek())) {
	                next();
	                result += ch;
	            }
	            return result;
	        }
	
	        function skipWhitespace() {
	            var result = '';
	            if (ch && whiteRe.test(ch)) {
	                result = ch;
	            }
	            while (whiteRe.test(next())) {
	                result += ch;
	            }
	            return result;
	        }
	
	        function eatComment(singleLine) {
	            var start = pos;
	            singleLine = peek() === "/";
	            next();
	            while (next()) {
	                if (!singleLine && ch === "*" && peek() === "/") {
	                    next();
	                    break;
	                } else if (singleLine && ch === "\n") {
	                    return source_text.substring(start, pos);
	                }
	            }
	
	            return source_text.substring(start, pos) + ch;
	        }
	
	
	        function lookBack(str) {
	            return source_text.substring(pos - str.length, pos).toLowerCase() ===
	                str;
	        }
	
	        // Nested pseudo-class if we are insideRule
	        // and the next special character found opens
	        // a new block
	        function foundNestedPseudoClass() {
	            var openParen = 0;
	            for (var i = pos + 1; i < source_text.length; i++) {
	                var ch = source_text.charAt(i);
	                if (ch === "{") {
	                    return true;
	                } else if (ch === '(') {
	                    // pseudoclasses can contain ()
	                    openParen += 1;
	                } else if (ch === ')') {
	                    if (openParen === 0) {
	                        return false;
	                    }
	                    openParen -= 1;
	                } else if (ch === ";" || ch === "}") {
	                    return false;
	                }
	            }
	            return false;
	        }
	
	        // printer
	        var basebaseIndentString = source_text.match(/^[\t ]*/)[0];
	        var singleIndent = new Array(indentSize + 1).join(indentCharacter);
	        var indentLevel = 0;
	        var nestedLevel = 0;
	
	        function indent() {
	            indentLevel++;
	            basebaseIndentString += singleIndent;
	        }
	
	        function outdent() {
	            indentLevel--;
	            basebaseIndentString = basebaseIndentString.slice(0, -indentSize);
	        }
	
	        var print = {};
	        print["{"] = function(ch) {
	            print.singleSpace();
	            output.push(ch);
	            print.newLine();
	        };
	        print["}"] = function(ch) {
	            print.newLine();
	            output.push(ch);
	            print.newLine();
	        };
	
	        print._lastCharWhitespace = function() {
	            return whiteRe.test(output[output.length - 1]);
	        };
	
	        print.newLine = function(keepWhitespace) {
	            if (output.length) {
	                if (!keepWhitespace && output[output.length - 1] !== '\n') {
	                    print.trim();
	                }
	
	                output.push('\n');
	
	                if (basebaseIndentString) {
	                    output.push(basebaseIndentString);
	                }
	            }
	        };
	        print.singleSpace = function() {
	            if (output.length && !print._lastCharWhitespace()) {
	                output.push(' ');
	            }
	        };
	
	        print.preserveSingleSpace = function() {
	            if (isAfterSpace) {
	                print.singleSpace();
	            }
	        };
	
	        print.trim = function() {
	            while (print._lastCharWhitespace()) {
	                output.pop();
	            }
	        };
	
	
	        var output = [];
	        /*_____________________--------------------_____________________*/
	
	        var insideRule = false;
	        var insidePropertyValue = false;
	        var enteringConditionalGroup = false;
	        var top_ch = '';
	        var last_top_ch = '';
	
	        while (true) {
	            var whitespace = skipWhitespace();
	            var isAfterSpace = whitespace !== '';
	            var isAfterNewline = whitespace.indexOf('\n') !== -1;
	            last_top_ch = top_ch;
	            top_ch = ch;
	
	            if (!ch) {
	                break;
	            } else if (ch === '/' && peek() === '*') { /* css comment */
	                var header = indentLevel === 0;
	
	                if (isAfterNewline || header) {
	                    print.newLine();
	                }
	
	                output.push(eatComment());
	                print.newLine();
	                if (header) {
	                    print.newLine(true);
	                }
	            } else if (ch === '/' && peek() === '/') { // single line comment
	                if (!isAfterNewline && last_top_ch !== '{') {
	                    print.trim();
	                }
	                print.singleSpace();
	                output.push(eatComment());
	                print.newLine();
	            } else if (ch === '@') {
	                print.preserveSingleSpace();
	
	                // deal with less propery mixins @{...}
	                if (peek() === '{') {
	                    output.push(eatString('}'));
	                } else {
	                    output.push(ch);
	
	                    // strip trailing space, if present, for hash property checks
	                    var variableOrRule = peekString(": ,;{}()[]/='\"");
	
	                    if (variableOrRule.match(/[ :]$/)) {
	                        // we have a variable or pseudo-class, add it and insert one space before continuing
	                        next();
	                        variableOrRule = eatString(": ").replace(/\s$/, '');
	                        output.push(variableOrRule);
	                        print.singleSpace();
	                    }
	
	                    variableOrRule = variableOrRule.replace(/\s$/, '');
	
	                    // might be a nesting at-rule
	                    if (variableOrRule in css_beautify.NESTED_AT_RULE) {
	                        nestedLevel += 1;
	                        if (variableOrRule in css_beautify.CONDITIONAL_GROUP_RULE) {
	                            enteringConditionalGroup = true;
	                        }
	                    }
	                }
	            } else if (ch === '#' && peek() === '{') {
	                print.preserveSingleSpace();
	                output.push(eatString('}'));
	            } else if (ch === '{') {
	                if (peek(true) === '}') {
	                    eatWhitespace();
	                    next();
	                    print.singleSpace();
	                    output.push("{}");
	                    print.newLine();
	                    if (newline_between_rules && indentLevel === 0) {
	                        print.newLine(true);
	                    }
	                } else {
	                    indent();
	                    print["{"](ch);
	                    // when entering conditional groups, only rulesets are allowed
	                    if (enteringConditionalGroup) {
	                        enteringConditionalGroup = false;
	                        insideRule = (indentLevel > nestedLevel);
	                    } else {
	                        // otherwise, declarations are also allowed
	                        insideRule = (indentLevel >= nestedLevel);
	                    }
	                }
	            } else if (ch === '}') {
	                outdent();
	                print["}"](ch);
	                insideRule = false;
	                insidePropertyValue = false;
	                if (nestedLevel) {
	                    nestedLevel--;
	                }
	                if (newline_between_rules && indentLevel === 0) {
	                    print.newLine(true);
	                }
	            } else if (ch === ":") {
	                eatWhitespace();
	                if ((insideRule || enteringConditionalGroup) &&
	                    !(lookBack("&") || foundNestedPseudoClass())) {
	                    // 'property: value' delimiter
	                    // which could be in a conditional group query
	                    insidePropertyValue = true;
	                    output.push(':');
	                    print.singleSpace();
	                } else {
	                    // sass/less parent reference don't use a space
	                    // sass nested pseudo-class don't use a space
	                    if (peek() === ":") {
	                        // pseudo-element
	                        next();
	                        output.push("::");
	                    } else {
	                        // pseudo-class
	                        output.push(':');
	                    }
	                }
	            } else if (ch === '"' || ch === '\'') {
	                print.preserveSingleSpace();
	                output.push(eatString(ch));
	            } else if (ch === ';') {
	                insidePropertyValue = false;
	                output.push(ch);
	                print.newLine();
	            } else if (ch === '(') { // may be a url
	                if (lookBack("url")) {
	                    output.push(ch);
	                    eatWhitespace();
	                    if (next()) {
	                        if (ch !== ')' && ch !== '"' && ch !== '\'') {
	                            output.push(eatString(')'));
	                        } else {
	                            pos--;
	                        }
	                    }
	                } else {
	                    parenLevel++;
	                    print.preserveSingleSpace();
	                    output.push(ch);
	                    eatWhitespace();
	                }
	            } else if (ch === ')') {
	                output.push(ch);
	                parenLevel--;
	            } else if (ch === ',') {
	                output.push(ch);
	                eatWhitespace();
	                if (selectorSeparatorNewline && !insidePropertyValue && parenLevel < 1) {
	                    print.newLine();
	                } else {
	                    print.singleSpace();
	                }
	            } else if (ch === '>' || ch === '+' || ch === '~') {
	                //handl selector separator spacing
	                if (spaceAroundSelectorSeparator && !insidePropertyValue && parenLevel < 1) {
	                    print.singleSpace();
	                    output.push(ch);
	                    print.singleSpace();
	                } else {
	                    output.push(ch);
	                }
	            } else if (ch === ']') {
	                output.push(ch);
	            } else if (ch === '[') {
	                print.preserveSingleSpace();
	                output.push(ch);
	            } else if (ch === '=') { // no whitespace before or after
	                eatWhitespace();
	                ch = '=';
	                output.push(ch);
	            } else {
	                print.preserveSingleSpace();
	                output.push(ch);
	            }
	        }
	
	
	        var sweetCode = '';
	        if (basebaseIndentString) {
	            sweetCode += basebaseIndentString;
	        }
	
	        sweetCode += output.join('').replace(/[\r\n\t ]+$/, '');
	
	        // establish end_with_newline
	        if (end_with_newline) {
	            sweetCode += '\n';
	        }
	
	        if (eol !== '\n') {
	            sweetCode = sweetCode.replace(/[\n]/g, eol);
	        }
	
	        return sweetCode;
	    }
	
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	    css_beautify.NESTED_AT_RULE = {
	        "@page": true,
	        "@font-face": true,
	        "@keyframes": true,
	        // also in CONDITIONAL_GROUP_RULE below
	        "@media": true,
	        "@supports": true,
	        "@document": true
	    };
	    css_beautify.CONDITIONAL_GROUP_RULE = {
	        "@media": true,
	        "@supports": true,
	        "@document": true
	    };
	
	    /*global define */
	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return {
	                css_beautify: css_beautify
	            };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
	        exports.css_beautify = css_beautify;
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.css_beautify = css_beautify;
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.css_beautify = css_beautify;
	    }
	
	}());

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*
	
	  The MIT License (MIT)
	
	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.
	
	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:
	
	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.
	
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.
	
	
	 Style HTML
	---------------
	
	  Written by Nochum Sossonko, (nsossonko@hotmail.com)
	
	  Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
	    http://jsbeautifier.org/
	
	  Usage:
	    style_html(html_source);
	
	    style_html(html_source, options);
	
	  The options are:
	    indent_inner_html (default false)  — indent <head> and <body> sections,
	    indent_size (default 4)          — indentation size,
	    indent_char (default space)      — character to indent with,
	    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
	    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
	    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
	    indent_scripts (default normal)  - "keep"|"separate"|"normal"
	    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
	                                        Only works before elements, not inside tags or for text.
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
	    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
	    end_with_newline (false)          - end with a newline
	    extra_liners (default [head,body,/html]) -List of tags that should have an extra newline before them.
	
	    e.g.
	
	    style_html(html_source, {
	      'indent_inner_html': false,
	      'indent_size': 2,
	      'indent_char': ' ',
	      'wrap_line_length': 78,
	      'brace_style': 'expand',
	      'preserve_newlines': true,
	      'max_preserve_newlines': 5,
	      'indent_handlebars': false,
	      'extra_liners': ['/html']
	    });
	*/
	
	(function() {
	
	    // function trim(s) {
	    //     return s.replace(/^\s+|\s+$/g, '');
	    // }
	
	    function ltrim(s) {
	        return s.replace(/^\s+/g, '');
	    }
	
	    function rtrim(s) {
	        return s.replace(/\s+$/g, '');
	    }
	
	    function style_html(html_source, options, js_beautify, css_beautify) {
	        //Wrapper function to invoke all the necessary constructors and deal with the output.
	
	        var multi_parser,
	            indent_inner_html,
	            indent_size,
	            indent_character,
	            wrap_line_length,
	            brace_style,
	            unformatted,
	            preserve_newlines,
	            max_preserve_newlines,
	            indent_handlebars,
	            wrap_attributes,
	            wrap_attributes_indent_size,
	            end_with_newline,
	            extra_liners,
	            eol;
	
	        options = options || {};
	
	        // backwards compatibility to 1.3.4
	        if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) &&
	            (options.max_char !== undefined && parseInt(options.max_char, 10) !== 0)) {
	            options.wrap_line_length = options.max_char;
	        }
	
	        indent_inner_html = (options.indent_inner_html === undefined) ? false : options.indent_inner_html;
	        indent_size = (options.indent_size === undefined) ? 4 : parseInt(options.indent_size, 10);
	        indent_character = (options.indent_char === undefined) ? ' ' : options.indent_char;
	        brace_style = (options.brace_style === undefined) ? 'collapse' : options.brace_style;
	        wrap_line_length = parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
	        unformatted = options.unformatted || [
	            // https://www.w3.org/TR/html5/dom.html#phrasing-content
	            'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
	            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
	            'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
	            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
	            'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
	            'video', 'wbr', 'text',
	            // prexisting - not sure of full effect of removing, leaving in
	            'acronym', 'address', 'big', 'dt', 'ins', 'small', 'strike', 'tt',
	            'pre',
	            'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
	        ];
	        preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
	        max_preserve_newlines = preserve_newlines ?
	            (isNaN(parseInt(options.max_preserve_newlines, 10)) ? 32786 : parseInt(options.max_preserve_newlines, 10)) :
	            0;
	        indent_handlebars = (options.indent_handlebars === undefined) ? false : options.indent_handlebars;
	        wrap_attributes = (options.wrap_attributes === undefined) ? 'auto' : options.wrap_attributes;
	        wrap_attributes_indent_size = (isNaN(parseInt(options.wrap_attributes_indent_size, 10))) ? indent_size : parseInt(options.wrap_attributes_indent_size, 10);
	        end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        extra_liners = (typeof options.extra_liners === 'object') && options.extra_liners ?
	            options.extra_liners.concat() : (typeof options.extra_liners === 'string') ?
	            options.extra_liners.split(',') : 'head,body,/html'.split(',');
	        eol = options.eol ? options.eol : '\n';
	
	        if (options.indent_with_tabs) {
	            indent_character = '\t';
	            indent_size = 1;
	        }
	
	        eol = eol.replace(/\\r/, '\r').replace(/\\n/, '\n');
	
	        function Parser() {
	
	            this.pos = 0; //Parser position
	            this.token = '';
	            this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
	            this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
	                parent: 'parent1',
	                parentcount: 1,
	                parent1: ''
	            };
	            this.tag_type = '';
	            this.token_text = this.last_token = this.last_text = this.token_type = '';
	            this.newlines = 0;
	            this.indent_content = indent_inner_html;
	
	            this.Utils = { //Uilities made available to the various functions
	                whitespace: "\n\r\t ".split(''),
	
	                single_token: [
	                    // HTLM void elements - aka self-closing tags - aka singletons
	                    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
	                    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
	                    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
	                    // NOTE: Optional tags - are not understood.
	                    // https://www.w3.org/TR/html5/syntax.html#optional-tags
	                    // The rules for optional tags are too complex for a simple list
	                    // Also, the content of these tags should still be indented in many cases.
	                    // 'li' is a good exmple.
	
	                    // Doctype and xml elements
	                    '!doctype', '?xml',
	                    // ?php tag
	                    '?php',
	                    // other tags that were in this list, keeping just in case
	                    'basefont', 'isindex'
	                ],
	                extra_liners: extra_liners, //for tags that need a line of whitespace before them
	                in_array: function(what, arr) {
	                    for (var i = 0; i < arr.length; i++) {
	                        if (what === arr[i]) {
	                            return true;
	                        }
	                    }
	                    return false;
	                }
	            };
	
	            // Return true if the given text is composed entirely of whitespace.
	            this.is_whitespace = function(text) {
	                for (var n = 0; n < text.length; n++) {
	                    if (!this.Utils.in_array(text.charAt(n), this.Utils.whitespace)) {
	                        return false;
	                    }
	                }
	                return true;
	            };
	
	            this.traverse_whitespace = function() {
	                var input_char = '';
	
	                input_char = this.input.charAt(this.pos);
	                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                    this.newlines = 0;
	                    while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                        if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
	                            this.newlines += 1;
	                        }
	
	                        this.pos++;
	                        input_char = this.input.charAt(this.pos);
	                    }
	                    return true;
	                }
	                return false;
	            };
	
	            // Append a space to the given content (string array) or, if we are
	            // at the wrap_line_length, append a newline/indentation.
	            // return true if a newline was added, false if a space was added
	            this.space_or_wrap = function(content) {
	                if (this.line_char_count >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
	                    this.print_newline(false, content);
	                    this.print_indentation(content);
	                    return true;
	                } else {
	                    this.line_char_count++;
	                    content.push(' ');
	                    return false;
	                }
	            };
	
	            this.get_content = function() { //function to capture regular content between tags
	                var input_char = '',
	                    content = [];
	
	                while (this.input.charAt(this.pos) !== '<') {
	                    if (this.pos >= this.input.length) {
	                        return content.length ? content.join('') : ['', 'TK_EOF'];
	                    }
	
	                    if (this.traverse_whitespace()) {
	                        this.space_or_wrap(content);
	                        continue;
	                    }
	
	                    if (indent_handlebars) {
	                        // Handlebars parsing is complicated.
	                        // {{#foo}} and {{/foo}} are formatted tags.
	                        // {{something}} should get treated as content, except:
	                        // {{else}} specifically behaves like {{#if}} and {{/if}}
	                        var peek3 = this.input.substr(this.pos, 3);
	                        if (peek3 === '{{#' || peek3 === '{{/') {
	                            // These are tags and not content.
	                            break;
	                        } else if (peek3 === '{{!') {
	                            return [this.get_tag(), 'TK_TAG_HANDLEBARS_COMMENT'];
	                        } else if (this.input.substr(this.pos, 2) === '{{') {
	                            if (this.get_tag(true) === '{{else}}') {
	                                break;
	                            }
	                        }
	                    }
	
	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	                    this.line_char_count++;
	                    content.push(input_char); //letter at-a-time (or string) inserted to an array
	                }
	                return content.length ? content.join('') : '';
	            };
	
	            this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
	                if (this.pos === this.input.length) {
	                    return ['', 'TK_EOF'];
	                }
	                var content = '';
	                var reg_match = new RegExp('</' + name + '\\s*>', 'igm');
	                reg_match.lastIndex = this.pos;
	                var reg_array = reg_match.exec(this.input);
	                var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
	                if (this.pos < end_script) { //get everything in between the script tags
	                    content = this.input.substring(this.pos, end_script);
	                    this.pos = end_script;
	                }
	                return content;
	            };
	
	            this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
	                if (this.tags[tag + 'count']) { //check for the existence of this tag type
	                    this.tags[tag + 'count']++;
	                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
	                } else { //otherwise initialize this tag type
	                    this.tags[tag + 'count'] = 1;
	                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
	                }
	                this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
	                this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
	            };
	
	            this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
	                if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
	                    var temp_parent = this.tags.parent; //check to see if it's a closable tag.
	                    while (temp_parent) { //till we reach '' (the initial value);
	                        if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
	                            break;
	                        }
	                        temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
	                    }
	                    if (temp_parent) { //if we caught something
	                        this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
	                        this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
	                    }
	                    delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
	                    delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
	                    if (this.tags[tag + 'count'] === 1) {
	                        delete this.tags[tag + 'count'];
	                    } else {
	                        this.tags[tag + 'count']--;
	                    }
	                }
	            };
	
	            this.indent_to_tag = function(tag) {
	                // Match the indentation level to the last use of this tag, but don't remove it.
	                if (!this.tags[tag + 'count']) {
	                    return;
	                }
	                var temp_parent = this.tags.parent;
	                while (temp_parent) {
	                    if (tag + this.tags[tag + 'count'] === temp_parent) {
	                        break;
	                    }
	                    temp_parent = this.tags[temp_parent + 'parent'];
	                }
	                if (temp_parent) {
	                    this.indent_level = this.tags[tag + this.tags[tag + 'count']];
	                }
	            };
	
	            this.get_tag = function(peek) { //function to get a full tag and parse its type
	                var input_char = '',
	                    content = [],
	                    comment = '',
	                    space = false,
	                    first_attr = true,
	                    tag_start, tag_end,
	                    tag_start_char,
	                    orig_pos = this.pos,
	                    orig_line_char_count = this.line_char_count;
	
	                peek = peek !== undefined ? peek : false;
	
	                do {
	                    if (this.pos >= this.input.length) {
	                        if (peek) {
	                            this.pos = orig_pos;
	                            this.line_char_count = orig_line_char_count;
	                        }
	                        return content.length ? content.join('') : ['', 'TK_EOF'];
	                    }
	
	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	
	                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
	                        space = true;
	                        continue;
	                    }
	
	                    if (input_char === "'" || input_char === '"') {
	                        input_char += this.get_unformatted(input_char);
	                        space = true;
	
	                    }
	
	                    if (input_char === '=') { //no space before =
	                        space = false;
	                    }
	
	                    if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
	                        //no space after = or before >
	                        var wrapped = this.space_or_wrap(content);
	                        var indentAttrs = wrapped && input_char !== '/' && wrap_attributes !== 'force';
	                        space = false;
	                        if (!first_attr && wrap_attributes === 'force' && input_char !== '/') {
	                            this.print_newline(false, content);
	                            this.print_indentation(content);
	                            indentAttrs = true;
	                        }
	                        if (indentAttrs) {
	                            //indent attributes an auto or forced line-wrap
	                            for (var count = 0; count < wrap_attributes_indent_size; count++) {
	                                content.push(indent_character);
	                            }
	                        }
	                        for (var i = 0; i < content.length; i++) {
	                            if (content[i] === ' ') {
	                                first_attr = false;
	                                break;
	                            }
	                        }
	                    }
	
	                    if (indent_handlebars && tag_start_char === '<') {
	                        // When inside an angle-bracket tag, put spaces around
	                        // handlebars not inside of strings.
	                        if ((input_char + this.input.charAt(this.pos)) === '{{') {
	                            input_char += this.get_unformatted('}}');
	                            if (content.length && content[content.length - 1] !== ' ' && content[content.length - 1] !== '<') {
	                                input_char = ' ' + input_char;
	                            }
	                            space = true;
	                        }
	                    }
	
	                    if (input_char === '<' && !tag_start_char) {
	                        tag_start = this.pos - 1;
	                        tag_start_char = '<';
	                    }
	
	                    if (indent_handlebars && !tag_start_char) {
	                        if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] === '{') {
	                            if (input_char === '#' || input_char === '/' || input_char === '!') {
	                                tag_start = this.pos - 3;
	                            } else {
	                                tag_start = this.pos - 2;
	                            }
	                            tag_start_char = '{';
	                        }
	                    }
	
	                    this.line_char_count++;
	                    content.push(input_char); //inserts character at-a-time (or string)
	
	                    if (content[1] && (content[1] === '!' || content[1] === '?' || content[1] === '%')) { //if we're in a comment, do something special
	                        // We treat all comments as literals, even more than preformatted tags
	                        // we just look for the appropriate close tag
	                        content = [this.get_comment(tag_start)];
	                        break;
	                    }
	
	                    if (indent_handlebars && content[1] && content[1] === '{' && content[2] && content[2] === '!') { //if we're in a comment, do something special
	                        // We treat all comments as literals, even more than preformatted tags
	                        // we just look for the appropriate close tag
	                        content = [this.get_comment(tag_start)];
	                        break;
	                    }
	
	                    if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
	                        break;
	                    }
	                } while (input_char !== '>');
	
	                var tag_complete = content.join('');
	                var tag_index;
	                var tag_offset;
	
	                if (tag_complete.indexOf(' ') !== -1) { //if there's whitespace, thats where the tag name ends
	                    tag_index = tag_complete.indexOf(' ');
	                } else if (tag_complete.charAt(0) === '{') {
	                    tag_index = tag_complete.indexOf('}');
	                } else { //otherwise go with the tag ending
	                    tag_index = tag_complete.indexOf('>');
	                }
	                if (tag_complete.charAt(0) === '<' || !indent_handlebars) {
	                    tag_offset = 1;
	                } else {
	                    tag_offset = tag_complete.charAt(2) === '#' ? 3 : 2;
	                }
	                var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();
	                if (tag_complete.charAt(tag_complete.length - 2) === '/' ||
	                    this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
	                    if (!peek) {
	                        this.tag_type = 'SINGLE';
	                    }
	                } else if (indent_handlebars && tag_complete.charAt(0) === '{' && tag_check === 'else') {
	                    if (!peek) {
	                        this.indent_to_tag('if');
	                        this.tag_type = 'HANDLEBARS_ELSE';
	                        this.indent_content = true;
	                        this.traverse_whitespace();
	                    }
	                } else if (this.is_unformatted(tag_check, unformatted)) { // do not reformat the "unformatted" tags
	                    comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
	                    content.push(comment);
	                    tag_end = this.pos - 1;
	                    this.tag_type = 'SINGLE';
	                } else if (tag_check === 'script' &&
	                    (tag_complete.search('type') === -1 ||
	                        (tag_complete.search('type') > -1 &&
	                            tag_complete.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json)/) > -1))) {
	                    if (!peek) {
	                        this.record_tag(tag_check);
	                        this.tag_type = 'SCRIPT';
	                    }
	                } else if (tag_check === 'style' &&
	                    (tag_complete.search('type') === -1 ||
	                        (tag_complete.search('type') > -1 && tag_complete.search('text/css') > -1))) {
	                    if (!peek) {
	                        this.record_tag(tag_check);
	                        this.tag_type = 'STYLE';
	                    }
	                } else if (tag_check.charAt(0) === '!') { //peek for <! comment
	                    // for comments content is already correct.
	                    if (!peek) {
	                        this.tag_type = 'SINGLE';
	                        this.traverse_whitespace();
	                    }
	                } else if (!peek) {
	                    if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
	                        this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
	                        this.tag_type = 'END';
	                    } else { //otherwise it's a start-tag
	                        this.record_tag(tag_check); //push it on the tag stack
	                        if (tag_check.toLowerCase() !== 'html') {
	                            this.indent_content = true;
	                        }
	                        this.tag_type = 'START';
	                    }
	
	                    // Allow preserving of newlines after a start or end tag
	                    if (this.traverse_whitespace()) {
	                        this.space_or_wrap(content);
	                    }
	
	                    if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
	                        this.print_newline(false, this.output);
	                        if (this.output.length && this.output[this.output.length - 2] !== '\n') {
	                            this.print_newline(true, this.output);
	                        }
	                    }
	                }
	
	                if (peek) {
	                    this.pos = orig_pos;
	                    this.line_char_count = orig_line_char_count;
	                }
	
	                return content.join(''); //returns fully formatted tag
	            };
	
	            this.get_comment = function(start_pos) { //function to return comment content in its entirety
	                // this is will have very poor perf, but will work for now.
	                var comment = '',
	                    delimiter = '>',
	                    matched = false;
	
	                this.pos = start_pos;
	                var input_char = this.input.charAt(this.pos);
	                this.pos++;
	
	                while (this.pos <= this.input.length) {
	                    comment += input_char;
	
	                    // only need to check for the delimiter if the last chars match
	                    if (comment.charAt(comment.length - 1) === delimiter.charAt(delimiter.length - 1) &&
	                        comment.indexOf(delimiter) !== -1) {
	                        break;
	                    }
	
	                    // only need to search for custom delimiter for the first few characters
	                    if (!matched && comment.length < 10) {
	                        if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
	                            delimiter = '<![endif]>';
	                            matched = true;
	                        } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
	                            delimiter = ']]>';
	                            matched = true;
	                        } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
	                            delimiter = ']>';
	                            matched = true;
	                        } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
	                            delimiter = '-->';
	                            matched = true;
	                        } else if (comment.indexOf('{{!') === 0) { // {{! handlebars comment
	                            delimiter = '}}';
	                            matched = true;
	                        } else if (comment.indexOf('<?') === 0) { // {{! handlebars comment
	                            delimiter = '?>';
	                            matched = true;
	                        } else if (comment.indexOf('<%') === 0) { // {{! handlebars comment
	                            delimiter = '%>';
	                            matched = true;
	                        }
	                    }
	
	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	                }
	
	                return comment;
	            };
	
	            function tokenMatcher(delimiter) {
	                var token = '';
	
	                var add = function(str) {
	                    var newToken = token + str.toLowerCase();
	                    token = newToken.length <= delimiter.length ? newToken : newToken.substr(newToken.length - delimiter.length, delimiter.length);
	                };
	
	                var doesNotMatch = function() {
	                    return token.indexOf(delimiter) === -1;
	                };
	
	                return {
	                    add: add,
	                    doesNotMatch: doesNotMatch
	                };
	            }
	
	            this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety
	                if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) !== -1) {
	                    return '';
	                }
	                var input_char = '';
	                var content = '';
	                var space = true;
	
	                var delimiterMatcher = tokenMatcher(delimiter);
	
	                do {
	
	                    if (this.pos >= this.input.length) {
	                        return content;
	                    }
	
	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	
	                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                        if (!space) {
	                            this.line_char_count--;
	                            continue;
	                        }
	                        if (input_char === '\n' || input_char === '\r') {
	                            content += '\n';
	                            /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
	                for (var i=0; i<this.indent_level; i++) {
	                  content += this.indent_string;
	                }
	                space = false; //...and make sure other indentation is erased
	                */
	                            this.line_char_count = 0;
	                            continue;
	                        }
	                    }
	                    content += input_char;
	                    delimiterMatcher.add(input_char);
	                    this.line_char_count++;
	                    space = true;
	
	                    if (indent_handlebars && input_char === '{' && content.length && content.charAt(content.length - 2) === '{') {
	                        // Handlebars expressions in strings should also be unformatted.
	                        content += this.get_unformatted('}}');
	                        // Don't consider when stopping for delimiters.
	                    }
	                } while (delimiterMatcher.doesNotMatch());
	
	                return content;
	            };
	
	            this.get_token = function() { //initial handler for token-retrieval
	                var token;
	
	                if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
	                    var type = this.last_token.substr(7);
	                    token = this.get_contents_to(type);
	                    if (typeof token !== 'string') {
	                        return token;
	                    }
	                    return [token, 'TK_' + type];
	                }
	                if (this.current_mode === 'CONTENT') {
	                    token = this.get_content();
	                    if (typeof token !== 'string') {
	                        return token;
	                    } else {
	                        return [token, 'TK_CONTENT'];
	                    }
	                }
	
	                if (this.current_mode === 'TAG') {
	                    token = this.get_tag();
	                    if (typeof token !== 'string') {
	                        return token;
	                    } else {
	                        var tag_name_type = 'TK_TAG_' + this.tag_type;
	                        return [token, tag_name_type];
	                    }
	                }
	            };
	
	            this.get_full_indent = function(level) {
	                level = this.indent_level + level || 0;
	                if (level < 1) {
	                    return '';
	                }
	
	                return Array(level + 1).join(this.indent_string);
	            };
	
	            this.is_unformatted = function(tag_check, unformatted) {
	                //is this an HTML5 block-level link?
	                if (!this.Utils.in_array(tag_check, unformatted)) {
	                    return false;
	                }
	
	                if (tag_check.toLowerCase() !== 'a' || !this.Utils.in_array('a', unformatted)) {
	                    return true;
	                }
	
	                //at this point we have an  tag; is its first child something we want to remain
	                //unformatted?
	                var next_tag = this.get_tag(true /* peek. */ );
	
	                // test next_tag to see if it is just html tag (no external content)
	                var tag = (next_tag || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);
	
	                // if next_tag comes back but is not an isolated tag, then
	                // let's treat the 'a' tag as having content
	                // and respect the unformatted option
	                if (!tag || this.Utils.in_array(tag, unformatted)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            };
	
	            this.printer = function(js_source, indent_character, indent_size, wrap_line_length, brace_style) { //handles input/output and some other printing functions
	
	                this.input = js_source || ''; //gets the input for the Parser
	
	                // HACK: newline parsing inconsistent. This brute force normalizes the input.
	                this.input = this.input.replace(/\r\n|[\r\u2028\u2029]/g, '\n');
	
	                this.output = [];
	                this.indent_character = indent_character;
	                this.indent_string = '';
	                this.indent_size = indent_size;
	                this.brace_style = brace_style;
	                this.indent_level = 0;
	                this.wrap_line_length = wrap_line_length;
	                this.line_char_count = 0; //count to see if wrap_line_length was exceeded
	
	                for (var i = 0; i < this.indent_size; i++) {
	                    this.indent_string += this.indent_character;
	                }
	
	                this.print_newline = function(force, arr) {
	                    this.line_char_count = 0;
	                    if (!arr || !arr.length) {
	                        return;
	                    }
	                    if (force || (arr[arr.length - 1] !== '\n')) { //we might want the extra line
	                        if ((arr[arr.length - 1] !== '\n')) {
	                            arr[arr.length - 1] = rtrim(arr[arr.length - 1]);
	                        }
	                        arr.push('\n');
	                    }
	                };
	
	                this.print_indentation = function(arr) {
	                    for (var i = 0; i < this.indent_level; i++) {
	                        arr.push(this.indent_string);
	                        this.line_char_count += this.indent_string.length;
	                    }
	                };
	
	                this.print_token = function(text) {
	                    // Avoid printing initial whitespace.
	                    if (this.is_whitespace(text) && !this.output.length) {
	                        return;
	                    }
	                    if (text || text !== '') {
	                        if (this.output.length && this.output[this.output.length - 1] === '\n') {
	                            this.print_indentation(this.output);
	                            text = ltrim(text);
	                        }
	                    }
	                    this.print_token_raw(text);
	                };
	
	                this.print_token_raw = function(text) {
	                    // If we are going to print newlines, truncate trailing
	                    // whitespace, as the newlines will represent the space.
	                    if (this.newlines > 0) {
	                        text = rtrim(text);
	                    }
	
	                    if (text && text !== '') {
	                        if (text.length > 1 && text.charAt(text.length - 1) === '\n') {
	                            // unformatted tags can grab newlines as their last character
	                            this.output.push(text.slice(0, -1));
	                            this.print_newline(false, this.output);
	                        } else {
	                            this.output.push(text);
	                        }
	                    }
	
	                    for (var n = 0; n < this.newlines; n++) {
	                        this.print_newline(n > 0, this.output);
	                    }
	                    this.newlines = 0;
	                };
	
	                this.indent = function() {
	                    this.indent_level++;
	                };
	
	                this.unindent = function() {
	                    if (this.indent_level > 0) {
	                        this.indent_level--;
	                    }
	                };
	            };
	            return this;
	        }
	
	        /*_____________________--------------------_____________________*/
	
	        multi_parser = new Parser(); //wrapping functions Parser
	        multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values
	
	        while (true) {
	            var t = multi_parser.get_token();
	            multi_parser.token_text = t[0];
	            multi_parser.token_type = t[1];
	
	            if (multi_parser.token_type === 'TK_EOF') {
	                break;
	            }
	
	            switch (multi_parser.token_type) {
	                case 'TK_TAG_START':
	                    multi_parser.print_newline(false, multi_parser.output);
	                    multi_parser.print_token(multi_parser.token_text);
	                    if (multi_parser.indent_content) {
	                        multi_parser.indent();
	                        multi_parser.indent_content = false;
	                    }
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_STYLE':
	                case 'TK_TAG_SCRIPT':
	                    multi_parser.print_newline(false, multi_parser.output);
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_END':
	                    //Print new line only if the tag has no content and has child
	                    if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
	                        var tag_name = multi_parser.token_text.match(/\w+/)[0];
	                        var tag_extracted_from_last_output = null;
	                        if (multi_parser.output.length) {
	                            tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\s*(\w+)/);
	                        }
	                        if (tag_extracted_from_last_output === null ||
	                            (tag_extracted_from_last_output[1] !== tag_name && !multi_parser.Utils.in_array(tag_extracted_from_last_output[1], unformatted))) {
	                            multi_parser.print_newline(false, multi_parser.output);
	                        }
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_SINGLE':
	                    // Don't add a newline before elements that should remain unformatted.
	                    var tag_check = multi_parser.token_text.match(/^\s*<([a-z-]+)/i);
	                    if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
	                        multi_parser.print_newline(false, multi_parser.output);
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_HANDLEBARS_ELSE':
	                    // Don't add a newline if opening {{#if}} tag is on the current line
	                    var foundIfOnCurrentLine = false;
	                    for (var lastCheckedOutput = multi_parser.output.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
	                        if (multi_parser.output[lastCheckedOutput] === '\n') {
	                            break;
	                        } else {
	                            if (multi_parser.output[lastCheckedOutput].match(/{{#if/)) {
	                                foundIfOnCurrentLine = true;
	                                break;
	                            }
	                        }
	                    }
	                    if (!foundIfOnCurrentLine) {
	                        multi_parser.print_newline(false, multi_parser.output);
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    if (multi_parser.indent_content) {
	                        multi_parser.indent();
	                        multi_parser.indent_content = false;
	                    }
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_HANDLEBARS_COMMENT':
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                case 'TK_CONTENT':
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                case 'TK_STYLE':
	                case 'TK_SCRIPT':
	                    if (multi_parser.token_text !== '') {
	                        multi_parser.print_newline(false, multi_parser.output);
	                        var text = multi_parser.token_text,
	                            _beautifier,
	                            script_indent_level = 1;
	                        if (multi_parser.token_type === 'TK_SCRIPT') {
	                            _beautifier = typeof js_beautify === 'function' && js_beautify;
	                        } else if (multi_parser.token_type === 'TK_STYLE') {
	                            _beautifier = typeof css_beautify === 'function' && css_beautify;
	                        }
	
	                        if (options.indent_scripts === "keep") {
	                            script_indent_level = 0;
	                        } else if (options.indent_scripts === "separate") {
	                            script_indent_level = -multi_parser.indent_level;
	                        }
	
	                        var indentation = multi_parser.get_full_indent(script_indent_level);
	                        if (_beautifier) {
	
	                            // call the Beautifier if avaliable
	                            var Child_options = function() {
	                                this.eol = '\n';
	                            };
	                            Child_options.prototype = options;
	                            var child_options = new Child_options();
	                            text = _beautifier(text.replace(/^\s*/, indentation), child_options);
	                        } else {
	                            // simply indent the string otherwise
	                            var white = text.match(/^\s*/)[0];
	                            var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
	                            var reindent = multi_parser.get_full_indent(script_indent_level - _level);
	                            text = text.replace(/^\s*/, indentation)
	                                .replace(/\r\n|\r|\n/g, '\n' + reindent)
	                                .replace(/\s+$/, '');
	                        }
	                        if (text) {
	                            multi_parser.print_token_raw(text);
	                            multi_parser.print_newline(true, multi_parser.output);
	                        }
	                    }
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                default:
	                    // We should not be getting here but we don't want to drop input on the floor
	                    // Just output the text and move on
	                    if (multi_parser.token_text !== '') {
	                        multi_parser.print_token(multi_parser.token_text);
	                    }
	                    break;
	            }
	            multi_parser.last_token = multi_parser.token_type;
	            multi_parser.last_text = multi_parser.token_text;
	        }
	        var sweet_code = multi_parser.output.join('').replace(/[\r\n\t ]+$/, '');
	
	        // establish end_with_newline
	        if (end_with_newline) {
	            sweet_code += '\n';
	        }
	
	        if (eol !== '\n') {
	            sweet_code = sweet_code.replace(/[\n]/g, eol);
	        }
	
	        return sweet_code;
	    }
	
	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(418), __webpack_require__(419)], __WEBPACK_AMD_DEFINE_RESULT__ = function(requireamd) {
	            var js_beautify = __webpack_require__(418);
	            var css_beautify = __webpack_require__(419);
	
	            return {
	                html_beautify: function(html_source, options) {
	                    return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
	                }
	            };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
	        var js_beautify = require('./beautify.js');
	        var css_beautify = require('./beautify-css.js');
	
	        exports.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
	        };
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, window.js_beautify, window.css_beautify);
	        };
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, global.js_beautify, global.css_beautify);
	        };
	    }
	
	}());

/***/ },

/***/ 421:
/***/ function(module, exports) {

	module.exports = "/* Default Variables */\n\n/* Background Colors */\n\n/* Foreground Colors */\n\n/* Accent Colors */\n\n.tabs {\n  background-color: #f4f4f4;\n  overflow: hidden;\n  -webkit-flex: 0 0 40px;\n  -ms-flex: 0 0 40px;\n  flex: 0 0 40px;\n}\n\n.tabs__tab--active {\n  background-color: #217346 !important;\n  color: #d3f3e1 !important;\n}\n\n.tabs__container {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  width: 100%;\n}\n\ntabs {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n}\n\n.monaco-editor {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  width: 100% !important;\n  height: 100% !important;\n}\n\n"

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var tab_container_component_1 = __webpack_require__(407);
	var Tab = (function () {
	    function Tab(tabs) {
	        this.tabs = tabs;
	        this.update = new core_1.EventEmitter();
	    }
	    Tab.prototype.ngOnInit = function () {
	        this.state = null;
	        this.model = null;
	        this.tabs.add(this.name, this);
	    };
	    Tab.prototype.ngOnChanges = function (changes) {
	        this.model = null;
	        this.update.next(this.name);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Tab.prototype, "name", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], Tab.prototype, "active", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Tab.prototype, "content", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Tab.prototype, "language", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Tab.prototype, "update", void 0);
	    Tab = __decorate([
	        core_1.Directive({
	            selector: 'tab'
	        }), 
	        __metadata('design:paramtypes', [tab_container_component_1.Tabs])
	    ], Tab);
	    return Tab;
	}());
	exports.Tab = Tab;


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var Rx_1 = __webpack_require__(424);
	var BaseComponent = (function () {
	    function BaseComponent() {
	        this._subscriptions = [];
	    }
	    BaseComponent.prototype.markDispose = function (subscription) {
	        if (Array.isArray(subscription)) {
	            this._subscriptions = this._subscriptions.concat(subscription);
	        }
	        else if (subscription instanceof Rx_1.Subscription) {
	            this._subscriptions.push(subscription);
	        }
	    };
	    BaseComponent.prototype.ngOnDestroy = function () {
	        _.each(this._subscriptions, function (subscription) {
	            subscription.unsubscribe();
	        });
	        this._subscriptions = [];
	    };
	    return BaseComponent;
	}());
	exports.BaseComponent = BaseComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411)))

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(649));
	__export(__webpack_require__(650));
	__export(__webpack_require__(651));
	__export(__webpack_require__(652));


/***/ },

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var Rx_1 = __webpack_require__(424);
	var helpers_1 = __webpack_require__(408);
	var MediatorService = (function (_super) {
	    __extends(MediatorService, _super);
	    function MediatorService() {
	        _super.call(this);
	    }
	    MediatorService.prototype.createEventChannel = function (name) {
	        var current = this.get(name);
	        if (!helpers_1.Utilities.isNull(current))
	            return current;
	        var event = new core_1.EventEmitter();
	        return this.add(name, { name: name, source$: event.asObservable(), event: event });
	    };
	    MediatorService.prototype.createSubjectChannel = function (name) {
	        var current = this.get(name);
	        if (!helpers_1.Utilities.isNull(current))
	            return current;
	        var dataSource = new Rx_1.Subject();
	        var event = dataSource.asObservable();
	        return this.add(name, { name: name, source$: event, dataSource: dataSource });
	    };
	    MediatorService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], MediatorService);
	    return MediatorService;
	}(helpers_1.Dictionary));
	exports.MediatorService = MediatorService;


/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var helpers_1 = __webpack_require__(408);
	var services_1 = __webpack_require__(648);
	var SnippetService = (function () {
	    function SnippetService(_request) {
	        this._request = _request;
	        this._baseUrl = 'https://xlsnippets.azurewebsites.net/api';
	    }
	    SnippetService.prototype.get = function (id) {
	        var meta = this._request.get(this._baseUrl + "/snippets/" + id);
	        var js = this._request.get(this._baseUrl + "/snippets/" + id + "/content/js", true);
	        var html = this._request.get(this._baseUrl + "/snippets/" + id + "/content/html", true);
	        var css = this._request.get(this._baseUrl + "/snippets/" + id + "/content/css", true);
	        var extras = this._request.get(this._baseUrl + "/snippets/" + id + "/content/extras", true);
	        return this._createSnippet(meta, js, html, css, extras);
	    };
	    SnippetService.prototype.create = function (name, password) {
	        var body = { name: name, password: password };
	        return this._request.post(this._baseUrl + '/snippets', body);
	    };
	    SnippetService.prototype.upload = function (meta, content, segment) {
	        if (helpers_1.Utilities.isEmpty(content))
	            Promise.resolve("");
	        var headers = helpers_1.RequestHelper.generateHeaders({
	            "Content-Type": "application/octet-stream",
	            "x-ms-b64-password": btoa(meta.key)
	        });
	        return this._request.put(this._baseUrl + '/snippets/' + meta.id + '/content/' + segment, content, headers);
	    };
	    SnippetService.prototype._createSnippet = function (meta, ts, html, css, extras) {
	        return Promise.all([
	            meta,
	            ts.catch(function (e) { return ""; }),
	            html.catch(function (e) { return ""; }),
	            css.catch(function (e) { return ""; }),
	            extras.catch(function (e) { return ""; })
	        ])
	            .then(function (results) { return new services_1.Snippet({
	            meta: results[0],
	            ts: results[1],
	            html: results[2],
	            css: results[3],
	            extras: results[4]
	        }); })
	            .catch(function (error) { return helpers_1.Utilities.error; });
	    };
	    SnippetService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [helpers_1.RequestHelper])
	    ], SnippetService);
	    return SnippetService;
	}());
	exports.SnippetService = SnippetService;


/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var helpers_1 = __webpack_require__(408);
	var Snippet = (function () {
	    function Snippet(snippet) {
	        this.meta = _.extend({}, snippet.meta);
	        if (helpers_1.Utilities.isNullOrWhitespace(this.meta.name))
	            this.meta.name = 'New Snippet';
	        this.randomizeId();
	        if (helpers_1.Utilities.isNull(this.meta))
	            throw 'Snippet metadata cannot be empty.';
	        this._default(snippet);
	    }
	    Object.defineProperty(Snippet.prototype, "runUrl", {
	        // A bit of a hack (probably doesn't belong here, but want to get an easy "run" link)
	        get: function () {
	            var url = window.location.toString() + "#/run/" + this.meta.id;
	            return url;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Snippet.prototype, "js", {
	        get: function () {
	            if (Snippet._isValid(this.ts)) {
	                this._compiledJs = this.ts;
	                return Promise.resolve(this._compiledJs);
	            }
	            else {
	                // FIXME expose to user
	                return Promise.reject("Invalid JavaScript (or is TypeScript, which we don't have a compiler for yet)");
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Snippet.prototype.getJsLibaries = function () {
	        return helpers_1.Utilities.stringOrEmpty(this.extras).split("\n")
	            .map(function (entry) {
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
	            .filter(function (entry) { return entry != null; });
	    };
	    Snippet.prototype.getCssStylesheets = function () {
	        return helpers_1.Utilities.stringOrEmpty(this.extras).split("\n")
	            .map(function (entry) { return entry.trim().toLowerCase(); })
	            .filter(function (entry) { return entry.endsWith(".css"); })
	            .map(function (entry) {
	            if (Snippet._entryIsUrl(entry)) {
	                return Snippet._normalizeUrl(entry);
	            }
	            // otherwise assume it's an NPM package name
	            return "//npmcdn.com/" + entry;
	        });
	    };
	    Snippet._entryIsUrl = function (entry) {
	        entry = entry.trim().toLowerCase();
	        return entry.startsWith("http://") || entry.startsWith("https://") || entry.startsWith("//");
	    };
	    Snippet._normalizeUrl = function (url) {
	        // strip out https: or http:
	        return url.substr(url.indexOf("//"));
	    };
	    Snippet.prototype.randomizeId = function (force) {
	        if (force || helpers_1.Utilities.isEmpty(this.meta.id) || this.meta.id.indexOf('~!L') == -1)
	            this.meta.id = '~!L' + helpers_1.Utilities.randomize(10000).toString();
	    };
	    Snippet._isValid = function (scriptText) {
	        try {
	            new Function(scriptText);
	            return true;
	        }
	        catch (syntaxError) {
	            helpers_1.Utilities.error(syntaxError);
	            return false;
	        }
	    };
	    Snippet.prototype._compile = function (ts) {
	        // FIXME
	        return Promise.resolve(ts);
	    };
	    Snippet.prototype._hash = function () {
	        // FIXME
	    };
	    // TODO: this is where we'll have our default code for each format.
	    Snippet.prototype._default = function (snippet) {
	        this.ts = snippet.ts || "";
	        this.css = snippet.css || "";
	        this.html = snippet.html || "";
	        this.extras = snippet.extras || "";
	    };
	    return Snippet;
	}());
	exports.Snippet = Snippet;
	(function (OfficeClient) {
	    OfficeClient[OfficeClient["All"] = 0] = "All";
	    OfficeClient[OfficeClient["Word"] = 1] = "Word";
	    OfficeClient[OfficeClient["Excel"] = 2] = "Excel";
	    OfficeClient[OfficeClient["PowerPoint"] = 3] = "PowerPoint";
	    OfficeClient[OfficeClient["Project"] = 4] = "Project";
	    OfficeClient[OfficeClient["Outlook"] = 5] = "Outlook";
	    OfficeClient[OfficeClient["OneNote"] = 6] = "OneNote";
	})(exports.OfficeClient || (exports.OfficeClient = {}));
	var OfficeClient = exports.OfficeClient;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411)))

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var services_1 = __webpack_require__(648);
	var helpers_1 = __webpack_require__(408);
	var SnippetManager = (function () {
	    function SnippetManager(_service) {
	        this._service = _service;
	        this._playlist = {
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
	        this._snippetsContainer = new helpers_1.StorageHelper('snippets');
	    }
	    SnippetManager.prototype.new = function () {
	        var _this = this;
	        return new Promise(function (resolve) {
	            var snippet;
	            if (helpers_1.Utilities.context == helpers_1.ContextType.Web) {
	                snippet = _this._createBlankWebSnippet();
	            }
	            else {
	                snippet = _this._createBlankOfficeJsSnippet();
	            }
	            resolve(_this._makeNameUniqueAndSave(snippet));
	        });
	    };
	    SnippetManager.prototype.save = function (snippet) {
	        if (helpers_1.Utilities.isNull(snippet) || helpers_1.Utilities.isNull(snippet.meta))
	            return Promise.reject('Snippet metadata cannot be empty');
	        if (helpers_1.Utilities.isEmpty(snippet.meta.name))
	            return Promise.reject('Snippet name cannot be empty');
	        return Promise.resolve(this._snippetsContainer.insert(snippet.meta.id, snippet));
	    };
	    SnippetManager.prototype.delete = function (snippet) {
	        if (helpers_1.Utilities.isNull(snippet) || helpers_1.Utilities.isNull(snippet.meta))
	            return Promise.reject('Snippet metadata cannot be empty');
	        return Promise.resolve(this._snippetsContainer.remove(snippet.meta.id));
	    };
	    SnippetManager.prototype.getLocal = function () {
	        return Promise.resolve(this._snippetsContainer.values());
	    };
	    SnippetManager.prototype.getPlaylist = function () {
	        return Promise.resolve(this._playlist)
	            .then(function (data) {
	            return {
	                name: data.name,
	                items: _.groupBy(data.snippets, function (item) { return item.group; })
	            };
	        })
	            .then(function (data) {
	            var remappedArray = _.map(data.items, function (value, index) {
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
	    };
	    SnippetManager.prototype.import = function (privateLink) {
	        var _this = this;
	        var id = null;
	        var regex = /^^(https?:\/\/[^/]+)\/(?:api\/)?snippets\/([0-9a-z]+)\/?$/;
	        var matches = regex.exec(privateLink);
	        if (!helpers_1.Utilities.isEmpty(matches))
	            id = matches[2];
	        else {
	            var altRegex = /^[0-9a-z]+$/;
	            if (!altRegex.test(privateLink))
	                return Promise.reject('Please provide either the snippet ID or snippet URL');
	            id = privateLink;
	        }
	        return this._service.get(id).then(function (snippet) { return _this._makeNameUniqueAndSave(snippet); });
	    };
	    SnippetManager.prototype.find = function (id) {
	        var _this = this;
	        return new Promise(function (resolve) {
	            var result = _this._snippetsContainer.get(id);
	            resolve(new services_1.Snippet(result));
	        });
	    };
	    SnippetManager.prototype.duplicate = function (snippet) {
	        var _this = this;
	        return new Promise(function (resolve) {
	            if (helpers_1.Utilities.isNull(snippet))
	                throw "Snippet cannot be null.";
	            var newSnippet = new services_1.Snippet(snippet);
	            newSnippet.randomizeId(true);
	            resolve(_this._makeNameUniqueAndSave(newSnippet));
	        });
	    };
	    SnippetManager.prototype.publish = function (snippet, password) {
	        var _this = this;
	        return this._service.create(snippet.meta.name, password)
	            .then(function (data) {
	            snippet.meta.id = data.id;
	            snippet.meta.key = data.password;
	        })
	            .then(function (data) { return _this._uploadAllContents(snippet); });
	    };
	    SnippetManager.prototype.update = function (snippet, password) {
	        if (helpers_1.Utilities.isEmpty(snippet.meta.name))
	            return Promise.reject('Snippet name cannot be empty');
	        if (helpers_1.Utilities.isEmpty(snippet.meta.id))
	            return Promise.reject('Snippet id cannot be empty');
	        return this._uploadAllContents(snippet);
	    };
	    SnippetManager.prototype._uploadAllContents = function (snippet) {
	        if (helpers_1.Utilities.isNull(snippet) || helpers_1.Utilities.isNull(snippet.meta))
	            return Promise.reject('Snippet metadata cannot be empty');
	        return Promise.all([
	            this._service.upload(snippet.meta, snippet.ts, 'js'),
	            this._service.upload(snippet.meta, snippet.html, 'html'),
	            this._service.upload(snippet.meta, snippet.css, 'css'),
	            this._service.upload(snippet.meta, snippet.extras, 'extras')
	        ]).then(function () { return snippet; });
	    };
	    SnippetManager.prototype._makeNameUniqueAndSave = function (snippet) {
	        var escapedName = this._escapeRegex(snippet.meta.name);
	        var regex = new RegExp('^' + escapedName + ' \\(([0-9]+)\\)$');
	        var maxSeen = 0;
	        this._snippetsContainer.values().forEach(function (value) {
	            var matches = regex.exec(value.meta.name);
	            if (matches) {
	                var num = +matches[1];
	                if (num > maxSeen)
	                    maxSeen = num;
	            }
	        });
	        snippet.meta.name = escapedName + ' (' + (maxSeen + 1) + ')';
	        return this._snippetsContainer.add(snippet.meta.id, snippet);
	    };
	    SnippetManager.prototype._escapeRegex = function (input) {
	        return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    };
	    SnippetManager.prototype._createBlankOfficeJsSnippet = function () {
	        return new services_1.Snippet({
	            meta: {
	                name: null,
	                id: null
	            },
	            ts: helpers_1.Utilities.stripSpaces("\n                " + getNamespace() + ".run(function(context) {\n                    // ...\n                    return context.sync();\n                }).catch(function(error) {\n                    console.log(error);\n                    if (error instanceof OfficeExtension.Error) {\n                        console.log(\"Debug info: \" + JSON.stringify(error.debugInfo));\n                    }\n                });\n            "),
	            html: null,
	            css: null,
	            extras: helpers_1.Utilities.stripSpaces("\n                // Office.js CDN reference\n                https://appsforoffice.microsoft.com/lib/1/hosted/Office.js\n\n                // NPM CDN references\n                jquery\n                office-ui-fabric/dist/js/jquery.fabric.min.js\n                office-ui-fabric/dist/css/fabric.min.css\n                office-ui-fabric/dist/css/fabric.components.min.css\n\n                // IntelliSense definitions\n                @types/jquery\n                @types/office-js\n                @types/office-ui-fabric\n            ")
	        });
	        function getNamespace() {
	            switch (helpers_1.Utilities.context) {
	                case helpers_1.ContextType.Excel:
	                    return 'Excel';
	                case helpers_1.ContextType.Word:
	                    return 'Word';
	                default:
	                    throw new Error("Invalid context type for Office namespace");
	            }
	        }
	    };
	    SnippetManager.prototype._createBlankWebSnippet = function () {
	        return new services_1.Snippet({
	            meta: {
	                name: null,
	                id: null
	            },
	            ts: helpers_1.Utilities.stripSpaces("\n                console.log(\"Hello world\");\n            "),
	            html: null,
	            css: null,
	            extras: helpers_1.Utilities.stripSpaces("\n                // NPM CDN references\n                jquery\n\n                // IntelliSense definitions\n                @types/jquery\n            ")
	        });
	    };
	    SnippetManager = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [services_1.SnippetService])
	    ], SnippetManager);
	    return SnippetManager;
	}());
	exports.SnippetManager = SnippetManager;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411)))

/***/ },

/***/ 653:
/***/ function(module, exports) {

	module.exports = "<header class=\"editor__header\">\r\n    <ul class=\"editor-command-bar\">\r\n        <li class=\"editor-command-bar__command\"><i class=\"ms-Icon ms-Icon--chevronThinLeft\" (click)=\"back()\"></i></li>\r\n        <li class=\"editor-command-bar__command editor-command-bar__command--text ms-font-m\">\r\n            <span [hidden]=\"editMode\" (click)=\"editMode = !editMode\">{{snippet?.meta?.name}}</span>\r\n            <input [hidden]=\"!editMode\" class=\"editor-command-bar__input--text\" type=\"text\" [(ngModel)]=\"snippet.meta.name\" placeholder=\"New name for snippet\" />\r\n        </li>\r\n        <li [hidden]=\"!editMode\" (click)=\"editMode = !editMode\" class=\"editor-command-bar__command editor-command-bar__command--right\"><i class=\"ms-Icon ms-Icon--check\"></i></li>\r\n        <li [hidden]=\"editMode\" class=\"editor-command-bar__command editor-command-bar__command--right\" (click)=\"save()\"><i class=\"ms-Icon ms-Icon--save\"></i></li>\r\n        <li [hidden]=\"editMode\" class=\"editor-command-bar__command editor-command-bar__command--right\" (click)=\"delete()\"><i class=\"ms-Icon ms-Icon--trash\"></i></li>\r\n        <li [hidden]=\"editMode\" class=\"editor-command-bar__command editor-command-bar__command--right\" (click)=\"share()\"><i class=\"ms-Icon ms-Icon--share\"></i></li>\r\n        <li [hidden]=\"editMode\" class=\"editor-command-bar__command editor-command-bar__command--right\" (click)=\"run()\"><i class=\"ms-Icon ms-Icon--play\"></i></li>\r\n    </ul>\r\n</header>\r\n<section class=\"editor__main\">\r\n    <tabs readonly=\"false\">\r\n        <tab name=\"JavaScript\" language=\"typescript\" [content]=\"snippet.ts\"></tab>\r\n        <tab name=\"HTML\" language=\"html\" [content]=\"snippet.html\"></tab>\r\n        <tab name=\"CSS\" language=\"css\" [content]=\"snippet.css\"></tab>\r\n        <tab name=\"Libraries\" language=\"text\" [content]=\"snippet.extras\"></tab>\r\n    </tabs>\r\n</section>\r\n<section class=\"editor__footer ms-font-m\" [ngClass]=\"{'editor__footer--error':error}\">\r\n    <span *ngIf=\"!!!status\" class=\"ms-u-slideUpIn20\">Powered by Monaco Editor</span><span *ngIf=\"!!status\" class=\"ms-u-slideUpIn20\">{{status}}</span>\r\n</section>";

/***/ },

/***/ 654:
/***/ function(module, exports) {

	module.exports = "/* Default Variables */\n\n/* Background Colors */\n\n/* Foreground Colors */\n\n/* Accent Colors */\n\n.editor__header {\n  padding-right: 30px;\n}\n\n.editor__main {\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.editor__footer {\n  background-color: #217346;\n  color: #d3f3e1;\n  padding: 7.5px 15px;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.editor__footer--error {\n  background-color: #FF4444;\n  color: white;\n}\n\n.editor-command-bar {\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  list-style-type: none;\n  width: 100%;\n  border-bottom: 1px solid #DEDEDE;\n}\n\n.editor-command-bar__command {\n  padding: 12.5px 15px;\n  transition: background ease-in-out 0.1s, color ease-in-out 0.1s;\n}\n\n.editor-command-bar__command:active,\n.editor-command-bar__command:hover {\n  background: #217346;\n  color: #d3f3e1;\n  cursor: pointer;\n}\n\n.editor-command-bar__command:active {\n  background: #217346;\n  -webkit-transform: scale3d(0.98, 0.98, 1);\n  transform: scale3d(0.98, 0.98, 1);\n}\n\n.editor-command-bar__command--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.editor-command-bar__command--disabled:active,\n.editor-command-bar__command--disabled:hover {\n  background: transparent;\n}\n\n.editor-command-bar__command--disabled:active {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.editor-command-bar__command:hover i {\n  color: #d3f3e1;\n}\n\n.editor-command-bar__command--text {\n  -webkit-flex: 1 1 0px;\n  -ms-flex: 1 1 0px;\n  flex: 1 1 0px;\n  padding: 0;\n  width: auto;\n  max-width: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.editor-command-bar__command--text span {\n  display: block;\n  padding: 12px;\n  width: calc(100% - 24px);\n}\n\n.editor-command-bar__command--text span[hidden] {\n  display: none;\n}\n\n.editor-command-bar__command--text i {\n  padding-right: 7.5px;\n}\n\n.editor-command-bar__command--right {\n  -webkit-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n}\n\n.editor-command-bar__input--text {\n  width: calc(100% - 16px);\n  height: 25px;\n  padding: 8px;\n  font-size: 14px;\n  background-color: #F4F4F4;\n  border: solid 1px transparent;\n  outline: none;\n}\n\n.editor-command-bar__input--text:focus {\n  color: #217346;\n  border: solid 1px #217346;\n}\n\n"

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(656));


/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(349);
	var helpers_1 = __webpack_require__(408);
	var services_1 = __webpack_require__(648);
	var base_component_1 = __webpack_require__(423);
	var NewComponent = (function (_super) {
	    __extends(NewComponent, _super);
	    function NewComponent(_router, _route, _snippetManager) {
	        _super.call(this);
	        this._router = _router;
	        this._route = _route;
	        this._snippetManager = _snippetManager;
	        this.importFlag = false;
	    }
	    NewComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._snippetManager.getLocal().then(function (data) { return _this.localGallery = data; });
	        this._snippetManager.getPlaylist().then(function (data) { return _this.gallery = data; });
	    };
	    NewComponent.prototype.delete = function (snippet) {
	        var _this = this;
	        this._snippetManager.delete(snippet).then(function (result) { return _this._snippetManager.getLocal().then(function (data) { return _this.localGallery = data; }); });
	    };
	    NewComponent.prototype.run = function (snippet) {
	        this._router.navigate(['run', snippet.meta.id]);
	    };
	    NewComponent.prototype.select = function (snippet) {
	        var _this = this;
	        if (helpers_1.Utilities.isEmpty(snippet)) {
	            return this._snippetManager.new().then(function (newSnippet) {
	                _this._router.navigate(['edit', newSnippet.meta.id]);
	            });
	        }
	        this._router.navigate(['edit', snippet.meta.id]);
	    };
	    NewComponent.prototype.duplicate = function (snippet) {
	        var _this = this;
	        this._snippetManager.duplicate(snippet).then(function (result) { return _this._snippetManager.getLocal().then(function (data) { return _this.localGallery = data; }); });
	    };
	    NewComponent.prototype.import = function (snippet) {
	        var _this = this;
	        var link = snippet.id || this.link;
	        this._snippetManager.import(link).then(function (snippet) { return _this.select(snippet); });
	    };
	    NewComponent = __decorate([
	        core_1.Component({
	            selector: 'new',
	            template: __webpack_require__(657),
	            styles: [__webpack_require__(658)]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, services_1.SnippetManager])
	    ], NewComponent);
	    return NewComponent;
	}(base_component_1.BaseComponent));
	exports.NewComponent = NewComponent;


/***/ },

/***/ 657:
/***/ function(module, exports) {

	module.exports = "<section class=\"new\">\r\n    <section class=\"new__section new__gallery\">\r\n        <h2 class=\"new__section-title ms-font-l\">OfficeJS API Playground</h2>\r\n        <section class=\"new-list\">\r\n            <section class=\"new-list__group\">\r\n                <h3 class=\"new-list__group-header ms-font-m\">My local snippets</h3>\r\n                <article class=\"new-list__item ms-font-m\" *ngFor=\"let snippet of localGallery\">\r\n                    <span (click)=\"select(snippet)\">{{snippet?.meta.name}}</span>\r\n                    <i class=\"new-list__action ms-Icon ms-Icon--play\" (click)=\"run(snippet)\"></i>\r\n                    <i class=\"new-list__action ms-Icon ms-Icon--copy\" (click)=\"duplicate(snippet)\"></i>\r\n                    <i class=\"new-list__action ms-Icon ms-Icon--trash\" (click)=\"delete(snippet)\"></i>\r\n                </article>\r\n                <p class=\"new-list__message ms-font-m\" [hidden]=\"localGallery?.length > 0\">\r\n                    You have no local snippets. To get started, import one from a shared link or create a new snippet. You can\r\n                    also choose from the gallery below.\r\n                </p>\r\n            </section>\r\n            <section class=\"new-list__group\" *ngFor=\"let group of gallery?.items; let i = index\">\r\n                <h3 class=\"new-list__group-header ms-font-m\">{{group?.name}}</h3>\r\n                <article class=\"new-list__item ms-font-m\" *ngFor=\"let snippet of group?.items\">\r\n                    <span (click)=\"import(snippet)\">{{snippet?.name}}</span>\r\n                </article>\r\n            </section>\r\n        </section>\r\n    </section>\r\n    <section class=\"new__section\">\r\n        <hr class=\"new__section--separator\" />\r\n        <button class=\"new__action ms-Button ms-Button--compound\" (click)=\"select()\">\r\n            <span class=\"ms-Button-label\">Create new</span>\r\n            <span class=\"ms-Button-description\">Create a new snippet from a blank template</span>\r\n        </button>\r\n        <button class=\"new__action button-primary ms-Button ms-Button--compound\" (click)=\"importFlag = !importFlag\">\r\n            <span class=\"ms-Button-label\">Create from link</span>\r\n            <span class=\"ms-Button-description\">Create a new snippet from a shared snippet link</span>\r\n        </button>\r\n    </section>\r\n    <section class=\"new__section new__form\" [hidden]=\"!importFlag\">\r\n        <hr class=\"new__section--separator\" />\r\n        <input class=\"new__input--text\" type=\"text\" name=\"link\" [(ngModel)]=\"link\" placeholder=\"Link to snippet or snippet ID\" />\r\n        <h2 class=\"new__section-title ms-font-l\" (click)=\"import()\">Create<i class=\"ms-Icon ms-Icon--chevronThinRight\"></i></h2>\r\n    </section>\r\n</section>";

/***/ },

/***/ 658:
/***/ function(module, exports) {

	module.exports = "/* Default Variables */\n\n/* Background Colors */\n\n/* Foreground Colors */\n\n/* Accent Colors */\n\n.new {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n}\n\n.new__action {\n  width: 100%;\n  max-width: none;\n  display: block !important;\n  background-color: #F4F4F4;\n  color: #333;\n  margin: 0;\n  border: none;\n  border-bottom: solid 1px #E4E4E4;\n  transition: background ease-in-out 0.1s, color ease-in-out 0.1s;\n}\n\n.new__action:last-child {\n  margin-bottom: 0;\n}\n\n.new__action:active,\n.new__action:hover {\n  background: #217346;\n  color: #d3f3e1;\n  cursor: pointer;\n}\n\n.new__action:active {\n  background: #217346;\n  -webkit-transform: scale3d(0.98, 0.98, 1);\n  transform: scale3d(0.98, 0.98, 1);\n}\n\n.new__action--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.new__action--disabled:active,\n.new__action--disabled:hover {\n  background: transparent;\n}\n\n.new__action--disabled:active {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.new__action:hover,\n.new__action:focus {\n  border: none;\n  background-color: #217346;\n}\n\n.new__action:hover .ms-Button-description,\n.new__action:hover .ms-Button-label,\n.new__action:focus .ms-Button-description,\n.new__action:focus .ms-Button-label {\n  color: #d3f3e1;\n}\n\n.new__action .ms-Button-description,\n.new__action .ms-Button-label {\n  color: #333;\n}\n\n.new__section:last-child {\n  margin-bottom: 0;\n}\n\n.new__section--separator {\n  height: 0;\n  border: none;\n  outline: none;\n  border-bottom: solid 1px #E4E4E4;\n}\n\n.new__section-title {\n  padding: 15px !important;\n  color: #217346;\n}\n\n.new__gallery {\n  margin-bottom: 15px;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.new__form i.ms-Icon {\n  position: absolute;\n  right: 15px;\n  margin-top: 7.5px;\n}\n\n.new__form .new__section-title {\n  transition: background ease-in-out 0.1s, color ease-in-out 0.1s;\n}\n\n.new__form .new__section-title:active,\n.new__form .new__section-title:hover {\n  background: #217346;\n  color: #d3f3e1;\n  cursor: pointer;\n}\n\n.new__form .new__section-title:active {\n  background: #217346;\n  -webkit-transform: scale3d(0.98, 0.98, 1);\n  transform: scale3d(0.98, 0.98, 1);\n}\n\n.new__form .new__section-title--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.new__form .new__section-title--disabled:active,\n.new__form .new__section-title--disabled:hover {\n  background: transparent;\n}\n\n.new__form .new__section-title--disabled:active {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.new__input--text {\n  width: 100%;\n  height: 25px;\n  padding: 15px 15px;\n  font-size: 15px;\n  background-color: #F4F4F4;\n  border: none;\n  outline: none;\n}\n\n.new__input--text:focus {\n  color: #217346;\n  border: solid 1px #217346;\n}\n\n.new-list {\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  overflow: auto;\n  height: 100%;\n  overflow-x: hidden;\n}\n\n.new-list__group {\n  margin-bottom: 15px;\n}\n\n.new-list__group-header {\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 7.5px 15px;\n  color: #217346;\n}\n\n.new-list__item {\n  transition: background ease-in-out 0.1s, color ease-in-out 0.1s;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  width: 100%;\n}\n\n.new-list__item:active,\n.new-list__item:hover {\n  background: #F4F4F4;\n  cursor: pointer;\n}\n\n.new-list__item:active {\n  background: #F4F4F4;\n  -webkit-transform: scale3d(0.98, 0.98, 1);\n  transform: scale3d(0.98, 0.98, 1);\n}\n\n.new-list__item--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.new-list__item--disabled:active,\n.new-list__item--disabled:hover {\n  background: transparent;\n}\n\n.new-list__item--disabled:active {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.new-list__item span {\n  padding: 15px;\n  -webkit-align-self: flex-start;\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n  width: auto;\n  max-width: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n}\n\n.new-list__message {\n  padding: 7.5px 15px;\n}\n\n.new-list__action {\n  padding: 17px;\n  font-size: 15px;\n  transition: background ease-in-out 0.1s, color ease-in-out 0.1s;\n  -webkit-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n}\n\n.new-list__action:active,\n.new-list__action:hover {\n  background: #217346;\n  color: #d3f3e1;\n  cursor: pointer;\n}\n\n.new-list__action:active {\n  background: #217346;\n  -webkit-transform: scale3d(0.98, 0.98, 1);\n  transform: scale3d(0.98, 0.98, 1);\n}\n\n.new-list__action--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.new-list__action--disabled:active,\n.new-list__action--disabled:hover {\n  background: transparent;\n}\n\n.new-list__action--disabled:active {\n  -webkit-transform: none;\n  transform: none;\n}\n\n"

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(660));


/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(349);
	var base_component_1 = __webpack_require__(423);
	var helpers_1 = __webpack_require__(408);
	var services_1 = __webpack_require__(648);
	var RunComponent = (function (_super) {
	    __extends(RunComponent, _super);
	    function RunComponent(_snippetManager, _route, _router) {
	        _super.call(this);
	        this._snippetManager = _snippetManager;
	        this._route = _route;
	        this._router = _router;
	        this._snippet = new services_1.Snippet({ meta: { name: null, id: null } });
	        this._consoleMethodsToIntercept = ['log', 'warn', 'error'];
	        this._originalConsoleMethods = {};
	        this._consoleLastShown = false;
	    }
	    RunComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._originalConsole = window.console;
	        this._consoleMethodsToIntercept.forEach(function (methodName) {
	            _this._originalConsoleMethods[methodName] = window.console[methodName];
	        });
	        this._monkeyPatchConsole(window);
	        var createHtmlOptions = {
	            includeOfficeInitialize: helpers_1.Utilities.context != helpers_1.ContextType.Web,
	            inlineJsAndCssIntoIframe: true
	        };
	        var subscription = this._route.params.subscribe(function (params) {
	            _this._snippetManager.find(params['id'])
	                .then(function (snippet) {
	                _this._snippet = snippet;
	                return helpers_1.SnippetWriter.createHtml(_this._snippet, createHtmlOptions);
	            })
	                .then(function (fullHtml) {
	                var iframe = _this.runner.nativeElement;
	                var iframeWindow = iframe.contentWindow;
	                iframeWindow.document.open();
	                iframeWindow.document.write(fullHtml);
	                iframeWindow.document.close();
	            })
	                .catch(function (e) {
	                console.log(e);
	                // TODO eventually Util instead
	            });
	        });
	        this.markDispose(subscription);
	        window["iframeReadyCallback"] = function (iframeWin) {
	            if (createHtmlOptions.includeOfficeInitialize) {
	                iframeWin['Office'] = window.Office;
	                iframeWin['Excel'] = window.Excel;
	            }
	            _this._monkeyPatchConsole(iframeWin);
	            var that = _this;
	            iframeWin.onerror = function () {
	                that.logToConsole('error', arguments);
	            };
	        };
	        this.$console = $(this.consoleView.nativeElement);
	        this.$consoleText = $('pre', this.$console);
	        this._initializeConsole();
	    };
	    RunComponent.prototype.ngOnDestroy = function () {
	        var _this = this;
	        _super.prototype.ngOnDestroy.call(this);
	        this._consoleMethodsToIntercept.forEach(function (methodName) {
	            window.console[methodName] = _this._originalConsoleMethods[methodName];
	        });
	    };
	    RunComponent.prototype._initializeConsole = function () {
	        var _this = this;
	        this.$console.height(window.innerHeight / 2);
	        $("#console-clear", this.$console).click(function () { return _this.$consoleText.empty(); });
	        $("#console-close", this.$console).click(function () { return _this._showHideConsole(false); });
	    };
	    RunComponent.prototype._showHideConsole = function (showConsole) {
	        if (showConsole) {
	            this.$console.show();
	        }
	        else {
	            this.$console.hide();
	        }
	    };
	    RunComponent.prototype._monkeyPatchConsole = function (windowToPatch) {
	        // Taken from http://tobyho.com/2012/07/27/taking-over-console-log/
	        var console = windowToPatch.console;
	        var that = this;
	        if (!console)
	            return;
	        var intercept = function (methodName) {
	            var original = console[methodName];
	            console[methodName] = function () {
	                that.logToConsole(methodName, arguments);
	                if (original.apply) {
	                    // Do this for normal browsers
	                    original.apply(console, arguments);
	                }
	                else {
	                    // Do this for IE
	                    var message = Array.prototype.slice.apply(arguments).join(' ');
	                    original(message);
	                }
	            };
	        };
	        this._consoleMethodsToIntercept.forEach(function (methodName) {
	            intercept(methodName);
	        });
	    };
	    RunComponent.prototype.logToConsole = function (consoleMethodType, args) {
	        if (!this.$console) {
	            // Must have been called during initial initialization, before the console is available
	            return;
	        }
	        var message = '';
	        _.each(args, function (arg) {
	            if (_.isString(arg))
	                message += arg + ' ';
	            else if (_.object(arg) || _.isArray(arg))
	                message += stringifyPlusPlus(arg) + ' ';
	        });
	        message += '\n';
	        var trimmedMessage = message.trim();
	        if (trimmedMessage === "Agave.HostCall.IssueCall" ||
	            trimmedMessage === "Agave.HostCall.ReceiveResponse") {
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
	            function getStringifiableSnapshot(object) {
	                try {
	                    var snapshot = {};
	                    var current = object;
	                    var hasOwnProperty = Object.prototype.hasOwnProperty;
	                    function tryAddName(name) {
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
	                }
	                catch (e) {
	                    return object;
	                }
	            }
	        }
	    };
	    RunComponent.prototype.back = function () {
	        this._router.navigate(['edit', this._snippet.meta.id]);
	    };
	    RunComponent.prototype.refresh = function () {
	        window.location.reload();
	    };
	    __decorate([
	        core_1.ViewChild('runner'), 
	        __metadata('design:type', core_1.ElementRef)
	    ], RunComponent.prototype, "runner", void 0);
	    __decorate([
	        core_1.ViewChild('console'), 
	        __metadata('design:type', core_1.ElementRef)
	    ], RunComponent.prototype, "consoleView", void 0);
	    RunComponent = __decorate([
	        core_1.Component({
	            selector: 'run',
	            template: __webpack_require__(662),
	            styles: [__webpack_require__(663)],
	        }), 
	        __metadata('design:paramtypes', [services_1.SnippetManager, router_1.ActivatedRoute, router_1.Router])
	    ], RunComponent);
	    return RunComponent;
	}(base_component_1.BaseComponent));
	exports.RunComponent = RunComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(661), __webpack_require__(411)))

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	
	
	
	var
		version = "3.1.0",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
	
			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;
	
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||
	
				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||
	
					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList
			.then( fn )
	
			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
	
		/* eslint-disable max-len */
	
		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		/* eslint-enable */
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* eslint-disable no-loop-func */
	
				anim.done( function() {
	
				/* eslint-enable no-loop-func */
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						/* eslint-disable no-cond-assign */
	
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
	
						/* eslint-enable no-cond-assign */
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	return jQuery;
	} );


/***/ },

/***/ 662:
/***/ function(module, exports) {

	module.exports = "<section class=\"run__header\">\r\n    <span id=\"back\" (click)=\"back()\">&#8656;</span>\r\n    <span id=\"name\" class=\"ms-font-l\">Running \"<b>{{_snippet.meta.name}}</b>\"</span>\r\n    <span id=\"refresh\" (click)=\"refresh()\">&#8635;</span>\r\n</section>\r\n\r\n<section class=\"run__main\">\r\n    <iframe #runner id=\"runner-frame\"></iframe>\r\n</section>\r\n\r\n<section class=\"run__console\" #console id=\"console\">\r\n    <div>\r\n        <button class=\"ms-Button\" id=\"console-clear\">Clear</button>\r\n        <button class=\"ms-Button\" id=\"console-close\">Close</button>\r\n    </div>\r\n    <div class=\"scrollable\">\r\n        <pre></pre>\r\n    </div>\r\n</section>\r\n";

/***/ },

/***/ 663:
/***/ function(module, exports) {

	module.exports = "/* Default Variables */\n\n/* Background Colors */\n\n/* Foreground Colors */\n\n/* Accent Colors */\n\n.run__header {\n  background-color: #217346;\n  padding: 7.5px 15px;\n}\n\n.run__header h1 {\n  color: #d3f3e1;\n}\n\n.run__main {\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.run__console {\n  background-color: #F4F4F4;\n  height: 300px;\n  padding: 15px;\n  overflow: auto;\n}\n\n.run__console pre {\n  width: 100%;\n  height: 100%;\n  font-family: \"consolas\", monospace;\n}\n\n#runner-frame {\n  width: 100%;\n  height: 100%;\n}\n\n#back,\n#refresh {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: white;\n  /* different browsers use different terms for pointer vs. hand, so include both*/\n  cursor: pointer;\n  cursor: hand;\n}\n\n#refresh {\n  position: absolute;\n  right: 20px;\n}\n\n#name {\n  color: white;\n  margin-left: 15px;\n}\n\n#console {\n  font-family: Consolas;\n  padding: 5px;\n  display: none;\n  font-size: 11pt;\n}\n\n#console .ms-Button {\n  border: solid 1px #666;\n  cursor: pointer;\n}\n\n#console .scrollable {\n  overflow-y: auto;\n  overflow-wrap: normal;\n  height: calc(100% - 30px);\n  border: 1px solid gray;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n\n#console pre {\n  padding: 3px 6px;\n  box-sizing: border-box;\n  white-space: pre-wrap;\n  /* Since CSS 2.1 */\n  white-space: -moz-pre-wrap;\n  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;\n  /* Opera 4-6 */\n  white-space: -o-pre-wrap;\n  /* Opera 7 */\n  word-wrap: break-word;\n  /* Internet Explorer 5.5+ */\n}\n\n"

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(665));


/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(349);
	var components_1 = __webpack_require__(405);
	var base_component_1 = __webpack_require__(423);
	var services_1 = __webpack_require__(648);
	var ViewComponent = (function (_super) {
	    __extends(ViewComponent, _super);
	    function ViewComponent(_snippetsService, _route) {
	        _super.call(this);
	        this._snippetsService = _snippetsService;
	        this._route = _route;
	    }
	    ViewComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        var subscription = this._route.params.subscribe(function (params) {
	            _this._snippetsService.get(params['id']).then(function (snippet) { return _this.snippet = snippet; });
	        });
	        this.markDispose(subscription);
	    };
	    ViewComponent = __decorate([
	        core_1.Component({
	            selector: 'view',
	            template: __webpack_require__(666),
	            styles: [__webpack_require__(667)],
	            directives: [components_1.Tab, components_1.Tabs]
	        }), 
	        __metadata('design:paramtypes', [services_1.SnippetService, router_1.ActivatedRoute])
	    ], ViewComponent);
	    return ViewComponent;
	}(base_component_1.BaseComponent));
	exports.ViewComponent = ViewComponent;


/***/ },

/***/ 666:
/***/ function(module, exports) {

	module.exports = "<section class=\"view__main\">\r\n    <tabs readonly=\"true\">\r\n        <tab name=\"HTML\" language=\"html\" [content]='snippet?.html'></tab>\r\n        <tab name=\"CSS\" language=\"css\" [content]='snippet?.css'></tab>\r\n        <tab name=\"JS\" language=\"typescript\" [content]='snippet?.ts'></tab>\r\n        <tab name=\"Extras\" language=\"text\" [content]='snippet?.extras'></tab>\r\n    </tabs>\r\n</section>\r\n<section class=\"view__footer ms-font-m\">Powered by Monaco view</section>";

/***/ },

/***/ 667:
/***/ function(module, exports) {

	module.exports = "/* Default Variables */\n\n/* Background Colors */\n\n/* Foreground Colors */\n\n/* Accent Colors */\n\n.view__main {\n  -webkit-flex: 1 1 100%;\n  -ms-flex: 1 1 100%;\n  flex: 1 1 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.view__footer {\n  background-color: #217346;\n  color: #d3f3e1;\n  padding: 7.5px 15px;\n}\n\n"

/***/ },

/***/ 668:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 670:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app.dee4527f3b34529b76b8.js.map