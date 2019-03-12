(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- About Section Start -->\n<section id=\"about\" class=\"section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <div class=\"img-thumb wow fadeInLeft\" data-wow-delay=\"0.3s\">\n          <img class=\"img-fluid\" src=\"assets/img/about/about-1.jpg\" alt=\"\">\n        </div>\n      </div> \n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <div class=\"profile-wrapper wow fadeInRight\" data-wow-delay=\"0.3s\">\n          <h3>Hi guys!</h3>\n          <p>First of all I would like to thank you for taking your time visiting my website.\n            This simple site is a part of my practice on utilizing modern web technolgies such as Angular and NodeJS.\n            It has been my goal to create my own resume and boast it to my friends and colleagues.\n            But my main purpose is to learn and to be honest learning is really challenging but the satisfaction I get is what I love about it.\n            Anyway, feel free to scroll on my site. If you have any question, please don't hesitate to contact me.\n          </p>\n          <div class=\"about-profile\">\n            <ul class=\"admin-profile\">\n              <li><span class=\"pro-title\"> Name </span> <span class=\"pro-detail\">{{ kev.name }}</span></li>\n              <li><span class=\"pro-title\"> Age </span> <span class=\"pro-detail\">{{ kev.age }} Years</span></li>\n              <li><span class=\"pro-title\"> Experience </span> <span class=\"pro-detail\">{{ kev.experience }} Years</span></li>\n              <li><span class=\"pro-title\"> Country </span> <span class=\"pro-detail\">{{ kev.country }}</span></li>\n              <li><span class=\"pro-title\"> Location </span> <span class=\"pro-detail\">{{ kev.location }}</span></li>\n              <li><span class=\"pro-title\"> e-mail </span> <span class=\"pro-detail\">{{ kev.email }}</span></li>\n              <li><span class=\"pro-title\"> Phone </span> <span class=\"pro-detail\">{{ kev.phone }}</span></li>\n              <li><span class=\"pro-title\"> Freelance </span> <span class=\"pro-detail\">Available</span></li>\n            </ul>\n          </div>\n          <a href=\"#\" class=\"btn btn-common\"><i class=\"icon-paper-clip\"></i> Download Resume</a>\n          <a href=\"#contact\" class=\"btn btn-danger\"><i class=\"icon-speech\"></i> Contact Me</a>\n        </div>\n      </div>   \n    </div>\n  </div>\n</section>\n<!-- About Section End -->"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kevin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kevin */ "./src/app/kevin.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.kev = new _kevin__WEBPACK_IMPORTED_MODULE_2__["Kevin"]();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header Area wrapper Starts -->\n<header id=\"header-wrap\">\n  <app-navbar></app-navbar>\n\n  <app-hero></app-hero>\n\n</header>\n<!-- Header Area wrapper End -->\n\n<app-about></app-about>\n\n<app-services></app-services>\n\n<app-resume></app-resume>\n\n<app-portfolio></app-portfolio>\n\n<app-counter></app-counter>\n\n<app-contact></app-contact>\n\n<app-footer></app-footer>\n\n<!-- Go to Top Link -->\n<a href=\"#\" class=\"back-to-top\">\n  <i class=\"icon-arrow-up\"></i>\n</a>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Website';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_9__["ResumeComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_11__["CounterComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Contact Section Start -->\n<section id=\"contact\" class=\"section-padding\">      \n  <div class=\"contact-form\">\n    <div class=\"container\">\n      <div class=\"row contact-form-area wow fadeInUp\" data-wow-delay=\"0.4s\">          \n        <div class=\"col-md-6 col-lg-6 col-sm-12\">\n          <div class=\"contact-block\">\n            <h2>Contact Form</h2>\n            <form id=\"contactForm\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" required data-error=\"Please enter your name\">\n                    <div class=\"help-block with-errors\"></div>\n                  </div>                                 \n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Email\" id=\"email\" class=\"form-control\" name=\"email\" required data-error=\"Please enter your email\">\n                    <div class=\"help-block with-errors\"></div>\n                  </div> \n                </div>\n                 <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Subject\" id=\"msg_subject\" class=\"form-control\" required data-error=\"Please enter your subject\">\n                    <div class=\"help-block with-errors\"></div>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\"> \n                    <textarea class=\"form-control\" id=\"message\" placeholder=\"Your Message\" rows=\"5\" data-error=\"Write your message\" required></textarea>\n                    <div class=\"help-block with-errors\"></div>\n                  </div>\n                  <div class=\"submit-button\">\n                    <button class=\"btn btn-common\" id=\"submit\" type=\"submit\">Send Message</button>\n                    <div id=\"msgSubmit\" class=\"h3 text-center hidden\"></div> \n                    <div class=\"clearfix\"></div> \n                  </div>\n                </div>\n              </div>            \n            </form>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-6 col-sm-12\">\n          <div class=\"footer-right-area wow fadeIn\">\n            <h2>Contact Address</h2>\n            <div class=\"footer-right-contact\">\n              <div class=\"single-contact\">\n                <div class=\"contact-icon\">\n                  <i class=\"fa fa-map-marker\"></i>\n                </div>\n                <p>Mandaluyong, Metro Manila</p>\n              </div>\n              <div class=\"single-contact\">\n                <div class=\"contact-icon\">\n                  <i class=\"fa fa-envelope\"></i>\n                </div>\n                <p><a href=\"mailto:hello@tom.com\">zaragozakevz@gmail.com</a></p>\n              </div>\n              <div class=\"single-contact\">\n                <div class=\"contact-icon\">\n                  <i class=\"fa fa-phone\"></i>\n                </div>\n                <p><a href=\"#\">+(63)945-113-5686</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>   \n</section>\n<!-- Contact Section End -->"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.css":
/*!***********************************************!*\
  !*** ./src/app/counter/counter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Counter Area Start-->\n<section class=\"counter-section section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- Counter Item -->\n      <div class=\"col-md-3 col-sm-6 work-counter-widget text-center\">\n        <div class=\"counter wow fadeInDown\" data-wow-delay=\"0.3s\">\n          <div class=\"icon\"><i class=\"icon-briefcase\"></i></div>\n          <div class=\"counterUp\">250</div>\n          <p>Project Working</p>\n        </div>\n      </div>\n      <!-- Counter Item -->\n      <div class=\"col-md-3 col-sm-6 work-counter-widget text-center\">\n        <div class=\"counter wow fadeInDown\" data-wow-delay=\"0.6s\">\n          <div class=\"icon\"><i class=\"icon-check\"></i></div>\n          <div class=\"counterUp\">950</div>\n          <p>Project Done</p>\n        </div>\n      </div>\n      <!-- Counter Item -->\n      <div class=\"col-md-3 col-sm-6 work-counter-widget text-center\">\n        <div class=\"counter wow fadeInDown\" data-wow-delay=\"0.9s\">\n          <div class=\"icon\"><i class=\"icon-diamond\"></i></div>\n          <div class=\"counterUp\">150</div>\n          <p>Awards Received</p>\n        </div>\n      </div>\n      <!-- Counter Item -->\n      <div class=\"col-md-3 col-sm-6 work-counter-widget text-center\">\n        <div class=\"counter wow fadeInDown\" data-wow-delay=\"1.2s\">\n          <div class=\"icon\"><i class=\"icon-heart\"></i></div>\n          <div class=\"counterUp\">299</div>\n          <p>Happy Clients</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Counter Area End-->"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/counter/counter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer Section Start -->\n<footer class=\"footer-area section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"footer-text text-center wow fadeInDown\" data-wow-delay=\"0.3s\">\n          <ul class=\"social-icon\">\n            <li>\n              <a class=\"facebook\" href=\"{{ kev.facebook }}\"><i class=\"icon-social-facebook\"></i></a>\n            </li>\n            <li>\n              <a class=\"twitter\" href=\"{{ kev.twitter }}\"><i class=\"icon-social-twitter\"></i></a>\n            </li>\n            <li>\n              <a class=\"instagram\" href=\"{{ kev.instagram }}\"><i class=\"icon-social-instagram\"></i></a>\n            </li>\n            <li>\n              <a class=\"instagram\" href=\"{{ kev.linkedin }}\"><i class=\"icon-social-linkedin\"></i></a>\n            </li>\n          </ul>\n          <p>Copyright © 2018 UIdeck All Right Reserved</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!-- Footer Section End -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kevin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kevin */ "./src/app/kevin.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.kev = new _kevin__WEBPACK_IMPORTED_MODULE_2__["Kevin"]();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Hero Area Start -->\n<div id=\"hero-area\" class=\"hero-area-bg\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 text-center\">\n        <div class=\"contents\">\n          <h5 class=\"script-font wow fadeInUp\" data-wow-delay=\"0.2s\">Hi This is</h5>\n          <h2 class=\"head-title wow fadeInUp\" data-wow-delay=\"0.4s\">{{ fullname }}</h2>\n          <p class=\"script-font wow fadeInUp\" data-wow-delay=\"0.6s\">Your Handsome Full-Stack Web Developer</p>\n          <ul class=\"social-icon wow fadeInUp\" data-wow-delay=\"0.8s\">\n            <li>\n              <a class=\"facebook\" href=\"{{ kev.facebook }}\"><i class=\"icon-social-facebook\"></i></a>\n            </li>\n            <li>\n              <a class=\"twitter\" href=\"{{ kev.twitter }}\"><i class=\"icon-social-twitter\"></i></a>\n            </li>\n            <li>\n              <a class=\"instagram\" href=\"{{ kev.instagram }}\"><i class=\"icon-social-instagram\"></i></a>\n            </li>\n            <li>\n              <a class=\"linkedin\" href=\"{{ kev.linkedin }}\"><i class=\"icon-social-linkedin\"></i></a>\n            </li>\n          </ul>\n          <!-- <div class=\"header-button wow fadeInUp\" data-wow-delay=\"1s\">\n            <a href=\"#\" class=\"btn btn-common\">Get a Free Quote</a>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Hero Area End -->"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kevin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kevin */ "./src/app/kevin.ts");



var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.fullname = "Kevin Zaragoza";
        this.kev = new _kevin__WEBPACK_IMPORTED_MODULE_2__["Kevin"]();
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/kevin.ts":
/*!**************************!*\
  !*** ./src/app/kevin.ts ***!
  \**************************/
/*! exports provided: Kevin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kevin", function() { return Kevin; });
var Kevin = /** @class */ (function () {
    function Kevin() {
        this.name = "Kevin Zaragoza";
        this.age = 23;
        this.experience = 4;
        this.country = "Philippines";
        this.location = "Unit 2915 GA Tower 2, EDSA corner Boni Avenue, Mandaluyong City";
        this.email = "zaragozakevz@gmail.com";
        this.phone = "09451135686";
        this.facebook = "https://facebook.com/menthos984";
        this.instagram = "https://twitter.com/kievnz";
        this.instagram = "https://instagram.com/kievnz";
        this.linkedin = "https://www.linkedin.com/in/kevin-zaragoza-3483b2160/";
    }
    return Kevin;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n<nav class=\"navbar navbar-expand-lg fixed-top scrolling-navbar indigo\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-navbar\" aria-controls=\"main-navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n        <span class=\"icon-menu\"></span>\n        <span class=\"icon-menu\"></span>\n        <span class=\"icon-menu\"></span>\n      </button>\n      <a href=\"index.html\" class=\"navbar-brand\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"main-navbar\">\n      <ul class=\"onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#hero-area\">\n            Home\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#about\">\n            About\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#services\">\n            Services\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#resume\">\n            Resume\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#portfolios\">\n            Work\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#contact\">\n            Contact\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Mobile Menu Start -->\n  <ul class=\"onepage-nev mobile-menu\">\n    <li>\n      <a href=\"#home\">Home</a>\n    </li>\n    <li>\n      <a href=\"#about\">about</a>\n    </li>\n    <li>\n      <a href=\"#services\">Services</a>\n    </li>\n    <li>\n      <a href=\"#resume\">resume</a>\n    </li>\n    <li>\n      <a href=\"#portfolio\">Work</a>\n    </li>\n    <li>\n      <a href=\"#contact\">Contact</a>\n    </li>\n  </ul>\n  <!-- Mobile Menu End -->\n</nav>\n<!-- Navbar End -->\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Portfolio Section -->\n<section id=\"portfolios\" class=\"section-padding\">\n  <!-- Container Starts -->\n  <div class=\"container\">        \n    <h2 class=\"section-title wow flipInX\" data-wow-delay=\"0.4s\">My Remarkable Works</h2>\n    <div class=\"row\">          \n      <div class=\"col-md-12\">\n        <!-- Portfolio Controller/Buttons -->\n        <div class=\"controls text-center\">\n          <a class=\"filter active btn btn-common\" data-filter=\"all\">\n            All \n          </a>\n          <a class=\"filter btn btn-common\" data-filter=\".design\">\n            Design \n          </a>\n          <a class=\"filter btn btn-common\" data-filter=\".development\">\n            Development\n          </a>\n          <a class=\"filter btn btn-common\" data-filter=\".print\">\n            Print \n          </a>\n        </div>\n        <!-- Portfolio Controller/Buttons Ends-->\n      </div>\n\n      <!-- Portfolio Recent Projects -->\n      <div id=\"portfolio\" class=\"row wow fadeInDown\" data-wow-delay=\"0.4s\">\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/img/gallery/img-1.jpg\" alt=\"\" />  \n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/img/gallery/img-1.jpg\">\n                    <i class=\"icon-eye\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>               \n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/img/gallery/img-2.jpg\" alt=\"\"/> \n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/img/gallery/img-2.jpg\">\n                    <i class=\"icon-eye\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>               \n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/img/gallery/img-3.jpg\" alt=\"\"/> \n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/img/gallery/img-3.jpg\">\n                    <i class=\"icon-eye\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>               \n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/img/gallery/img-4.jpg\" alt=\"\" /> \n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/img/gallery/img-4.jpg\">\n                    <i class=\"icon-eye\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>               \n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/img/gallery/img-5.jpg\" alt=\"\" /> \n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/img/gallery/img-5.jpg\">\n                    <i class=\"icon-eye\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>               \n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/img/gallery/img-6.jpg\" alt=\"\"/>\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/img/gallery/img-6.jpg\">\n                    <i class=\"icon-eye\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>               \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Container Ends -->\n</section>\n<!-- Portfolio Section Ends --> "

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Resume Section Start -->\n<div id=\"resume\" class=\"section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <div class=\"education wow fadeInRight\" data-wow-delay=\"0.3s\">\n          <ul class=\"timeline\">\n            <li>\n              <i class=\"icon-graduation\"></i>\n              <h2 class=\"timelin-title\">Education</h2>\n            </li>\n            <li *ngFor=\"let education of education\">\n              <div class=\"content-text\">\n                <h3 class=\"line-title\">{{ education.title }}</h3>\n                <span>{{ education.school }}</span>\n                <p class=\"line-text\">{{ education.year }}</p>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <div class=\"experience wow fadeInRight\" data-wow-delay=\"0.6s\">\n          <ul class=\"timeline\">\n            <li>\n              <i class=\"icon-briefcase\"></i>\n              <h2 class=\"timelin-title\">Experience</h2>\n            </li>\n            <li *ngFor=\"let experience of experience\">\n              <div class=\"content-text\">\n                <h3 class=\"line-title\">{{ experience.title }}</h3>\n                <span>{{ experience.year }}</span>\n                <p class=\"line-text\">{{ experience.description }}</p>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Resume Section End -->"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.education = [{
                title: "Bachelor of Science in Information and Technology",
                school: "Ateneo de Zamboanga University",
                year: "2011 - 2017"
            }, {
                title: "Secondary School",
                school: "Zamboanga City High School - Main",
                year: "2007 - 2011"
            }, {
                title: "Grade School",
                school: "Putik Central School",
                year: "2001 - 2007"
            }];
        this.experience = [{
                title: "Kahon.ph",
                year: "2017 ~ Present",
                description: "An ecommerce website that provides full-serviced storage. This ecommerce website is built using NodeJS and MongoDB"
            }, {
                title: "Electroweld Management System",
                year: "2017",
                description: "A Management System that digitize their business process. This system was build on NodeJS and MongoDB"
            }, {
                title: "Running Math Challenge",
                year: "2016 ~ 2017",
                description: "A game-based supplemental learning tool for basic arithmetic operations. The game is built with Phaser.io and HTML5"
            }];
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Services Section Start -->\n<section id=\"services\" class=\"services section-padding\">\n  <h2 class=\"section-title wow flipInX\" data-wow-delay=\"0.4s\">What I do</h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- Services item -->\n      <div class=\"col-md-6 col-lg-3 col-xs-12\">\n        <div class=\"services-item wow fadeInDown\" data-wow-delay=\"0.3s\">\n          <div class=\"icon\">\n            <i class=\"icon-grid\"></i>\n          </div>\n          <div class=\"services-content\">\n            <h3><a href=\"#\">Front-end Development</a></h3>\n            <p>CSS, Bootstrap, JQuery and Angular</p>\n          </div>\n        </div>\n      </div>\n      <!-- Services item -->\n      <div class=\"col-md-6 col-lg-3 col-xs-12\">\n        <div class=\"services-item wow fadeInDown\" data-wow-delay=\"0.6s\">\n          <div class=\"icon\">\n            <i class=\"icon-layers\"></i>\n          </div>\n          <div class=\"services-content\">\n            <h3><a href=\"#\">Back-end Develpment</a></h3>\n            <p>NodeJS, Angular, and MongoDB</p>\n          </div>\n        </div>\n      </div>\n      <!-- Services item -->\n      <div class=\"col-md-6 col-lg-3 col-xs-12\">\n        <div class=\"services-item wow fadeInDown\" data-wow-delay=\"0.9s\">\n          <div class=\"icon\">\n            <i class=\"icon-briefcase\"></i>\n          </div>\n          <div class=\"services-content\">\n            <h3><a href=\"#\">Methodologies</a></h3>\n            <p>Agile and Scrum</p>\n          </div>\n        </div>\n      </div>\n      <!-- Services item -->\n      <div class=\"col-md-6 col-lg-3 col-xs-12\">\n        <div class=\"services-item wow fadeInDown\" data-wow-delay=\"1.2s\">\n          <div class=\"icon\">\n            <i class=\"icon-bubbles\"></i>\n          </div>\n          <div class=\"services-content\">\n            <h3><a href=\"#\">Consultancy</a></h3>\n            <p>Troubleshooting and Support</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Services Section End -->"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Documents/Website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map