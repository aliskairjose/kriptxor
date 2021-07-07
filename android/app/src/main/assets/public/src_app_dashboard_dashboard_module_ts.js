(self["webpackChunkprueba"] = self["webpackChunkprueba"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 5935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 5935);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 2836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 8043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let DashboardPage = class DashboardPage {
    constructor() { }
    ngOnInit() {
    }
};
DashboardPage.ctorParameters = () => [];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 8043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".title {\n  color: #304FFE;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n\n.one {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n.two {\n  grid-column: 2/2;\n  grid-row: 1;\n}\n\n.header-items > ion-col {\n  margin: 0px;\n}\n\n.header-items .card-header {\n  align-items: center;\n  text-align: center;\n}\n\n.header-items .card-header-icon {\n  color: #304FFE;\n}\n\n.header-items .card-header-icon > ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.header-items .card-header-title {\n  color: #304FFE;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.header-items .card-header-content {\n  font-family: \"Open Sans\";\n  font-size: 1rem;\n}\n\n.card-content-header {\n  background-color: #304FFE;\n}\n\n.card-content-header-title {\n  color: white;\n}\n\n.card-content-title {\n  font-weight: bold;\n  font-size: 1rem;\n  color: #000000;\n}\n\n.card-content-subtitle {\n  text-align: right;\n}\n\n.card-content-text {\n  font-weight: bold;\n  font-size: 1rem;\n  color: #000000;\n}\n\n.card-content-button {\n  text-align: right;\n}\n\n.footer-items > ion-col {\n  margin: 0px;\n}\n\n.footer-items .card-footer {\n  align-items: center;\n  text-align: center;\n}\n\n.footer-items .card-footer-icon {\n  color: #304FFE;\n}\n\n.footer-items .card-footer-title {\n  color: #304FFE;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.footer-items .card-footer-content {\n  font-family: \"Open Sans\";\n  font-size: 1rem;\n  color: #000000;\n}\n\n.footer-items .card-footer-image {\n  height: 100;\n  width: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUpjO0FBRWhCOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0FBRkY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUlFO0VBQ0EsV0FBQTtBQURGOztBQUlFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUdJO0VBQ0UsY0EvQlU7QUE4QmhCOztBQUVNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBUjs7QUFHSTtFQUNFLGNBdENVO0VBdUNWLGVBQUE7RUFDQSxpQkFBQTtBQUROOztBQUdJO0VBQ0Usd0JBMUNTO0VBMkNULGVBQUE7QUFETjs7QUFNRTtFQUNFLHlCQWxEWTtBQStDaEI7O0FBSUk7RUFDRSxZQUFBO0FBRk47O0FBS0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEo7O0FBS0U7RUFDRSxpQkFBQTtBQUhKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhKOztBQUtFO0VBQ0ksaUJBQUE7QUFITjs7QUFRRTtFQUNBLFdBQUE7QUFMRjs7QUFRRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFPSTtFQUNFLGNBbEZVO0FBNkVoQjs7QUFPSTtFQUNFLGNBckZVO0VBc0ZWLGVBQUE7RUFDQSxpQkFBQTtBQUxOOztBQU9JO0VBQ0Usd0JBekZTO0VBMEZULGVBQUE7RUFDQSxjQUFBO0FBTE47O0FBT0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUxOIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzMwNEZGRTtcclxuJHByaW1hcnktdGV4dDogXCJPcGVuIFNhbnNcIjtcclxuXHJcbi50aXRsZXtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcblxyXG59XHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XHJcbn1cclxuLm9uZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIGdyaWQtcm93OiAxO1xyXG59XHJcbi50d28ge1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gMjtcclxuICBncmlkLXJvdzogMTtcclxufVxyXG5cclxuLmhlYWRlci1pdGVtc3tcclxuICAmID4gaW9uLWNvbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1oZWFkZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJi1pY29ue1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICYgPiBpb24taWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLXRpdGxle1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAmLWNvbnRlbnR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS10ZXh0O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jYXJkLWNvbnRlbnR7XHJcbiAgJi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICYtdGl0bGV7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gICYtc3VidGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgJi10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgJi1idXR0b257XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICB9XHJcbn1cclxuLmZvb3Rlci1pdGVtc3tcclxuICAmID4gaW9uLWNvbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1mb290ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgJi1pY29ue1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAmLXRpdGxle1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAmLWNvbnRlbnR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS10ZXh0O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgJi1pbWFnZXtcclxuICAgICAgaGVpZ2h0OiAxMDA7XHJcbiAgICAgIHdpZHRoOiAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"title\">dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-grid>\r\n  <ion-row class=\"header-items\">\r\n    <ion-col>\r\n      <ion-card class=\"card-header\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle class=\"card-header-icon\"><ion-icon src=\"assets/icon/assessment.svg\"></ion-icon></ion-card-subtitle>\r\n        <ion-card-title class=\"card-header-title\">258</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content class=\"card-header-content\">\r\n        Campañas\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card class=\"card-header\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle class=\"card-header-icon\"><ion-icon name=\"people-circle\"></ion-icon></ion-card-subtitle>\r\n        <ion-card-title class=\"card-header-title\">1058</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content class=\"card-header-content\">\r\n        Mis Clientes\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card class=\"card-header\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle class=\"card-header-icon\"><ion-icon src=\"assets/icon/monetization.svg\"></ion-icon></ion-card-subtitle>\r\n        <ion-card-title class=\"card-header-title\">50.369</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content class=\"card-header-content\">\r\n        Mis ventas\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card class=\"card-header\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle class=\"card-header-icon\"><ion-icon name=\"calendar-clear-outline\"></ion-icon></ion-card-subtitle>\r\n        <ion-card-title class=\"card-header-title\">35</ion-card-title>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content class=\"card-header-content\">\r\n        Mi Agencia\r\n      </ion-card-content>\r\n    </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-card class=\"card-content\">\r\n  <ion-card-header class=\"card-content-header\">\r\n    <ion-card-subtitle class=\"card-content-header-title\">ULTIMAS NOTIFICACIONES</ion-card-subtitle>\r\n  </ion-card-header>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"card-content\">\r\n  <ion-card-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"card-content-title\">\r\n            Nuevas metas establecidas\r\n          </ion-col>\r\n          <ion-col class=\"card-content-subtitle\">\r\n            04/05/2021\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\" class=\"card-content-text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n        sed do eiusmod tempor incididunt ut labore et dolore...\r\n      </ion-col>\r\n      <ion-col class=\"card-content-button\">\r\n        <ion-button shape=\"round\" color=\"warning\">\r\n          <ion-icon slot=\"start\" name=\"eye-outline\" ></ion-icon>\r\n          Leer Más\r\n\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- Quitar cuando se haga dinamico -->\r\n\r\n  <ion-card class=\"card-content\">\r\n  <ion-card-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"card-content-title\">\r\n            Grupo Elite crece a nivel internacional\r\n          </ion-col>\r\n          <ion-col class=\"card-content-subtitle\">\r\n            04/05/2021\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\" class=\"card-content-text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n        sed do eiusmod tempor incididunt ut labore et dolore...\r\n      </ion-col>\r\n      <ion-col class=\"card-content-button\">\r\n        <ion-button shape=\"round\" color=\"warning\">\r\n          <ion-icon slot=\"start\" name=\"eye-outline\" ></ion-icon>\r\n          Leer Más\r\n\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"card-content\">\r\n  <ion-card-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"card-content-title\">\r\n            Inicia proceso de implementación de CRM\r\n          </ion-col>\r\n          <ion-col class=\"card-content-subtitle\">\r\n            04/05/2021\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\" class=\"card-content-text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n        sed do eiusmod tempor incididunt ut labore et dolore...\r\n      </ion-col>\r\n      <ion-col class=\"card-content-button\">\r\n        <ion-button shape=\"round\" color=\"warning\">\r\n          <ion-icon slot=\"start\" name=\"eye-outline\" ></ion-icon>\r\n          Leer Más\r\n\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-card-content>\r\n  </ion-card>\r\n  <!-- Fin -->\r\n\r\n  <ion-card class=\"card-content\">\r\n  <ion-card-header class=\"card-content-header\">\r\n    <ion-card-subtitle class=\"card-content-header-title\">TOP SEMANAL DE VENDEDORES</ion-card-subtitle>\r\n  </ion-card-header>\r\n  </ion-card>\r\n  <ion-grid>\r\n    <ion-row class=\"footer-items\">\r\n      <ion-col>\r\n        <ion-card class=\"card-footer\">\r\n          <img src=\"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg\" />\r\n        <ion-card-header>\r\n          <ion-card-title class=\"card-footer-title\">\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content class=\"card-footer-content\">\r\n          Pedro Perez\r\n        </ion-card-content>\r\n      </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"card-footer\">\r\n          <img src=\"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg\" />\r\n        <ion-card-header>\r\n          <ion-card-title class=\"card-footer-title\">\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content class=\"card-footer-content\">\r\n          Maria Quintero\r\n        </ion-card-content>\r\n      </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card class=\"card-footer\">\r\n          <img src=\"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg\" />\r\n        <ion-card-header>\r\n          <ion-card-title class=\"card-footer-title\">\r\n          </ion-card-title>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content class=\"card-footer-content\">\r\n          Andres Monasterios\r\n        </ion-card-content>\r\n      </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map