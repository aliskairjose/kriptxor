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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 2836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 8043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/dashboard.service */ 3736);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/common.service */ 62);






let DashboardPage = class DashboardPage {
    constructor(common, dashboard) {
        this.common = common;
        this.dashboard = dashboard;
        this.data = {};
        this.seeMore = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.common.presentLoading();
            loading.present();
            this.dashboard.dashboard().subscribe(response => {
                loading.dismiss();
                this.data = Object.assign({}, response.data);
            }, () => loading.dismiss());
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService },
    { type: _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__.DashboardService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 3736:
/*!******************************************************!*\
  !*** ./src/app/shared/services/dashboard.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 4691);



let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    dashboard() {
        return this.http.get(`dashboard-app`);
    }
};
DashboardService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService }
];
DashboardService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DashboardService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <div class=\"card-container\">\r\n    <div class=\"cards container-bordered\">\r\n      <img src=\"assets/icon/assessment.svg\">\r\n      <ion-label>{{data.allCampaigns}}</ion-label>\r\n      <p>Campañas</p>\r\n    </div>\r\n    <div class=\"cards container-bordered\">\r\n      <img src=\"/assets/icon/persons-circle.svg\" alt=\"\">\r\n      <ion-label>{{data.allCampaigns}}</ion-label>\r\n      <p>Mis Clientes</p>\r\n    </div>\r\n    <div class=\"cards container-bordered\">\r\n      <img src=\"assets/icon/monetization.svg\" alt=\"\">\r\n      <ion-label>{{data.allCampaigns}}</ion-label>\r\n      <p>Mis Proyecciones</p>\r\n    </div>\r\n    <div class=\"cards container-bordered\">\r\n      <img src=\"/assets/icon/calendar.svg\" alt=\"\">\r\n      <ion-label>{{data.allCampaigns}}</ion-label>\r\n      <p>Mi Agenda</p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"title-bar mt-3\">\r\n    ULTIMAS NOTIFICACIONES\r\n  </div>\r\n\r\n  <ng-container *ngFor=\"let news of data.lastNews\" class=\"card-content\">\r\n    <ion-card>\r\n      <ion-card-header class=\"bg-ligth-gray\">\r\n        <ion-card-subtitle>\r\n          {{news.title}}\r\n          {{news.create_at | date}}\r\n        </ion-card-subtitle>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <div class=\"d-flex flex-column\">\r\n          {{seeMore ? news.content.substring(0,100) + '...' : news.content}}...\r\n          <div>\r\n            <ion-button (click)=\"seeMore = !seeMore\" color=\"warning\" size=\"small\">\r\n              <ion-icon slot=\"start\" name=\"eye-outline\"></ion-icon>\r\n              {{ seeMore ? 'Leer más' : 'Leer menos'}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <div class=\"title-bar\">\r\n    TOP SEMANAL DE VENDEDORES\r\n  </div>\r\n\r\n  <div class=\"d-flex \">\r\n    <ng-container *ngFor=\"let seller of data.topSellers\">\r\n      <div class=\"seller-card text-center\">\r\n        <img [src]=\"seller.main_image\" />\r\n        <small>{{seller.nombre}} {{seller.apellido}}</small>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map