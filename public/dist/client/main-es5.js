function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/categories/categories.component.ts");
    /* harmony import */


    var _emails_emails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./emails/emails.component */
    "./src/app/emails/emails.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "register",
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: "profile",
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: "categories",
      component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: "email",
      component: _emails_emails_component__WEBPACK_IMPORTED_MODULE_8__["EmailsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AppComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Email Ids");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function AppComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        var tmp_0_0 = null;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]((tmp_0_0 = ctx_r17.auth.getUserDetails()) == null ? null : tmp_0_0.name);
      }
    }

    function AppComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r19.auth.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var AppComponent = function AppComponent(auth) {
      _classCallCheck(this, AppComponent);

      this.auth = auth;
    };

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 5,
      consts: [[1, "navbar", "navbar-default"], [1, "container"], ["id", "navbar-main"], [1, "nav", "navbar-nav"], [4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right"], ["routerLink", "/categories"], ["routerLink", "/email"], ["routerLink", "/login"], ["routerLink", "/profile"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AppComponent_li_4_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AppComponent_li_5_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AppComponent_li_7_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AppComponent_li_8_Template, 3, 1, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AppComponent_li_9_Template, 3, 0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.auth.isLoggedIn());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.auth.isLoggedIn());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./categories/categories.component */
    "./src/app/categories/categories.component.ts");
    /* harmony import */


    var _emails_emails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./emails/emails.component */
    "./src/app/emails/emails.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"], _emails_emails_component__WEBPACK_IMPORTED_MODULE_11__["EmailsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"], _emails_emails_component__WEBPACK_IMPORTED_MODULE_11__["EmailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl("/");
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "saveToken",
        value: function saveToken(token) {
          localStorage.setItem("mean-token", token);
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem("mean-token");
          }

          return this.token;
        }
      }, {
        key: "request",
        value: function request(method, type, user) {
          var _this = this;

          var base$;

          if (method === "post") {
            base$ = this.http.post("/api/".concat(type), user);
          } else {
            base$ = this.http.get("/api/".concat(type), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          }

          var request = base$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data.token) {
              _this.saveToken(data.token);
            }

            return data;
          }));
          return request;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = "";
          window.localStorage.removeItem("mean-token");
          this.router.navigateByUrl("/");
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          var token = this.getToken();
          var payload;

          if (token) {
            payload = token.split(".")[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var user = this.getUserDetails();

          if (user) {
            return user.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.request("post", "register", user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.request("post", "login", user);
        }
      }, {
        key: "profile",
        value: function profile() {
          return this.request("get", "profile");
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.??fac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthenticationService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.??fac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/categories/categories.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/categories/categories.component.ts ***!
    \****************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../category.service */
    "./src/app/category.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CategoriesComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoriesComponent_tr_35_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.deleteCategory(item_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.category);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        display: a0
      };
    };

    var CategoriesComponent =
    /*#__PURE__*/
    function () {
      function CategoriesComponent(category_service) {
        _classCallCheck(this, CategoriesComponent);

        this.category_service = category_service;
        this.category = "";
        this.categoryList = [];
        this.display = "none";
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllCategories();
        }
      }, {
        key: "openModal",
        value: function openModal() {
          this.display = "block";
        }
      }, {
        key: "onCloseHandled",
        value: function onCloseHandled() {
          this.display = "none";
        }
      }, {
        key: "createCategory",
        value: function createCategory() {
          var _this2 = this;

          this.category_service.CreateCategory(this.category).subscribe(function (category) {
            _this2.getAllCategories();

            _this2.onCloseHandled();

            _this2.category = "";
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this3 = this;

          this.category_service.GetAllCategory().subscribe(function (list) {
            _this3.categoryList = list;
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          var _this4 = this;

          this.category_service.DeleteCategory(id).subscribe(function (list) {
            _this4.getAllCategories();
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.??fac = function CategoriesComponent_Factory(t) {
      return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]));
    };

    CategoriesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CategoriesComponent,
      selectors: [["app-categories"]],
      decls: 36,
      vars: 5,
      consts: [["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "container"], [1, "row"], [1, "col-md-9", "col-xs-9", "col-lg-9"], [1, "form-signin-heading"], [1, "col-md-3", "col-xs-3", "col-lg-3", "text-right", 2, "margin-top", "20px", "margin-bottom", "10px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", "col-md-12"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-danger", 3, "click"]],
      template: function CategoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Create Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoriesComponent_Template_button_click_6_listener() {
            return ctx.onCloseHandled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Category Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function CategoriesComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.category = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoriesComponent_Template_button_click_13_listener() {
            return ctx.createCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoriesComponent_Template_button_click_15_listener() {
            return ctx.onCloseHandled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoriesComponent_Template_button_click_23_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, CategoriesComponent_tr_35_Template, 8, 2, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](3, _c0, ctx.display));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.category);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categoryList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".addbtn[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkYnRue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-categories',
          templateUrl: './categories.component.html',
          styleUrls: ['./categories.component.css']
        }]
      }], function () {
        return [{
          type: _category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/category.service.ts":
  /*!*************************************!*\
    !*** ./src/app/category.service.ts ***!
    \*************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(http, router) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.router = router;
      }

      _createClass(CategoryService, [{
        key: "getToken",
        value: function getToken() {
          this.token = localStorage.getItem("mean-token");
          return this.token;
        }
      }, {
        key: "request",
        value: function request(method, type, category) {
          var base$;

          if (method === "post") {
            base$ = this.http.post("/api/".concat(type), {
              "category": category
            }, {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          } else if (method === "get") {
            base$ = this.http.get("/api/".concat(type), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          } else if (method === "delete") {
            base$ = this.http.delete("/api/".concat(type, "/").concat(this.selectedID), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          }

          var request = base$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data) {}

            return data;
          }));
          return request;
        }
      }, {
        key: "GetAllCategory",
        value: function GetAllCategory() {
          return this.request("get", "category");
        }
      }, {
        key: "CreateCategory",
        value: function CreateCategory(category) {
          return this.request("post", "category", category);
        }
      }, {
        key: "DeleteCategory",
        value: function DeleteCategory(category) {
          this.selectedID = category;
          return this.request("delete", "category", category);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.??fac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    CategoryService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: CategoryService,
      factory: CategoryService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/email.service.ts":
  /*!**********************************!*\
    !*** ./src/app/email.service.ts ***!
    \**********************************/

  /*! exports provided: EmailService */

  /***/
  function srcAppEmailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailService", function () {
      return EmailService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EmailService =
    /*#__PURE__*/
    function () {
      function EmailService(http, router) {
        _classCallCheck(this, EmailService);

        this.http = http;
        this.router = router;
      }

      _createClass(EmailService, [{
        key: "getToken",
        value: function getToken() {
          if (!this.token) {
            this.token = localStorage.getItem("mean-token");
          }

          return this.token;
        }
      }, {
        key: "request",
        value: function request(method, type, email) {
          var base$;

          if (method === "post") {
            base$ = this.http.post("/api/".concat(type), email, {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          } else if (method === "get") {
            base$ = this.http.get("/api/".concat(type, "/").concat(this.categoryId), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          } else if (method === "delete") {
            base$ = this.http.delete("/api/".concat(type, "/").concat(this.selectedID), {
              headers: {
                Authorization: "Bearer ".concat(this.getToken())
              }
            });
          }

          var request = base$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data) {}

            return data;
          }));
          return request;
        }
      }, {
        key: "GetAllEmail",
        value: function GetAllEmail(id) {
          this.categoryId = id;
          return this.request("get", "email");
        }
      }, {
        key: "CreateEmail",
        value: function CreateEmail(email) {
          return this.request("post", "email", email);
        }
      }, {
        key: "DeleteEmail",
        value: function DeleteEmail(categoryId) {
          this.selectedID = categoryId;
          return this.request("delete", "email");
        }
      }]);

      return EmailService;
    }();

    EmailService.??fac = function EmailService_Factory(t) {
      return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EmailService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: EmailService,
      factory: EmailService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/emails/emails.component.ts":
  /*!********************************************!*\
    !*** ./src/app/emails/emails.component.ts ***!
    \********************************************/

  /*! exports provided: EmailsComponent */

  /***/
  function srcAppEmailsEmailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsComponent", function () {
      return EmailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../category.service */
    "./src/app/category.service.ts");
    /* harmony import */


    var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../email.service */
    "./src/app/email.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EmailsComponent_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", item_r8._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r8.category, " ");
      }
    }

    function EmailsComponent_option_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r9._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r9.category, " ");
      }
    }

    function EmailsComponent_tr_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmailsComponent_tr_49_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13);

          var item_r10 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r12.deleteEmail(item_r10._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r11 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r10.email);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        display: a0
      };
    };

    var EmailsComponent =
    /*#__PURE__*/
    function () {
      function EmailsComponent(category_service, email_service) {
        _classCallCheck(this, EmailsComponent);

        this.category_service = category_service;
        this.email_service = email_service;
        this.selectedOption = "0";
        this.selectedCategory = "0";
        this.display = "none";
        this.categoryList = [];
        this.emailList = [];
        this.getAllCategories();
      }

      _createClass(EmailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal() {
          this.display = "block";
        }
      }, {
        key: "onCloseHandled",
        value: function onCloseHandled() {
          this.display = "none";
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this5 = this;

          this.category_service.GetAllCategory().subscribe(function (list) {
            _this5.categoryList = list;
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "getEmailsByCategory",
        value: function getEmailsByCategory() {
          var _this6 = this;

          if (this.selectedCategory != "0") {
            this.email_service.GetAllEmail(this.selectedCategory).subscribe(function (list) {
              _this6.emailList = list;
            }, function (err) {
              console.error(err);
            });
          }
        }
      }, {
        key: "deleteEmail",
        value: function deleteEmail(id) {
          var _this7 = this;

          this.email_service.DeleteEmail(id).subscribe(function (list) {
            _this7.getEmailsByCategory();
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "createEmail",
        value: function createEmail() {
          var _this8 = this;

          var emailDetails = {
            category: this.selectedOption,
            email: this.email
          };
          this.email_service.CreateEmail(emailDetails).subscribe(function (email) {
            _this8.getEmailsByCategory();

            _this8.onCloseHandled();

            _this8.category = "0";
            _this8.email = "";
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return EmailsComponent;
    }();

    EmailsComponent.??fac = function EmailsComponent_Factory(t) {
      return new (t || EmailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]));
    };

    EmailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: EmailsComponent,
      selectors: [["app-emails"]],
      decls: 50,
      vars: 9,
      consts: [["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-md-8"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "row", 2, "padding-top", "15px"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "container"], [1, "col-md-4", "col-xs-4", "col-lg-4"], [1, "form-signin-heading"], [1, "col-md-5", "col-xs-4", "col-lg-4", 2, "margin-top", "20px", "margin-bottom", "10px"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-xs-3", "col-lg-3", "text-right", 2, "margin-top", "20px", "margin-bottom", "10px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table", "col-md-12"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "value"], ["scope", "row"], [1, "btn", "btn-danger", 3, "click"]],
      template: function EmailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Create Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmailsComponent_Template_button_click_6_listener() {
            return ctx.onCloseHandled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Category: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailsComponent_Template_select_ngModelChange_13_listener($event) {
            return ctx.selectedOption = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, EmailsComponent_option_16_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Email Id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailsComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmailsComponent_Template_button_click_22_listener() {
            return ctx.createEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmailsComponent_Template_button_click_24_listener() {
            return ctx.onCloseHandled();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmailsComponent_Template_select_ngModelChange_32_listener($event) {
            return ctx.selectedCategory = $event;
          })("ngModelChange", function EmailsComponent_Template_select_ngModelChange_32_listener() {
            return ctx.getEmailsByCategory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, EmailsComponent_option_35_Template, 2, 2, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmailsComponent_Template_button_click_37_listener() {
            return ctx.openModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " + ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "table", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "th", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, EmailsComponent_tr_49_Template, 8, 2, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c0, ctx.display));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categoryList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.selectedCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categoryList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.emailList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlscy9lbWFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-emails',
          templateUrl: './emails.component.html',
          styleUrls: ['./emails.component.css']
        }]
      }], function () {
        return [{
          type: _category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
        }, {
          type: _email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container"], ["routerLink", "/login"], ["routerLink", "/register"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Hello there");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Won't you please ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " or ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.credentials = {
          email: "",
          password: ""
        };
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          var _this9 = this;

          this.auth.login(this.credentials).subscribe(function () {
            _this9.router.navigateByUrl("/categories");
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["ng-component"]],
      decls: 21,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "form-signin-heading"], [1, "lead"], ["routerLink", "/register"], [3, "submit"], [1, "form-group"], ["for", "email"], ["type", "email", "name", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-default"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Not a member? Please ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " instead. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function LoginComponent_Template_form_submit_10_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.credentials.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.credentials.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Sign in!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.password);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./login.component.html",
          styleUrls: ["./login.component.css"]
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(auth) {
        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.auth.profile().subscribe(function (user) {
            _this10.details = user;
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.??fac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    ProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProfileComponent,
      selectors: [["ng-component"]],
      decls: 16,
      vars: 2,
      consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "form-signin-heading"], [1, "form-horizontal"], [1, "form-group"], [1, "col-sm-3", "control-label"], [1, "form-control-static"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Your profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Full name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.details == null ? null : ctx.details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.details == null ? null : ctx.details.email);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./profile.component.html",
          styleUrls: ["./profile.component.css"]
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(auth, router) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.credentials = {
          email: "",
          name: "",
          password: ""
        };
      }

      _createClass(RegisterComponent, [{
        key: "register",
        value: function register() {
          var _this11 = this;

          this.auth.register(this.credentials).subscribe(function () {
            _this11.router.navigateByUrl("/categories");
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.??fac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterComponent,
      selectors: [["ng-component"]],
      decls: 25,
      vars: 3,
      consts: [[1, "container"], [1, "row"], [1, "col-md-6"], [1, "lead"], ["routerLink", "/login"], [3, "submit"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "placeholder", "Enter your name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-default"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Already a member? Please ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " instead. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function RegisterComponent_Template_form_submit_10_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Full name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.credentials.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.credentials.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.credentials.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Register!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.credentials.password);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./register.component.html",
          styleUrls: ["./register.component.css"]
        }]
      }], function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\LP225GL\Downloads\FullStack\mean-authentication-1\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map