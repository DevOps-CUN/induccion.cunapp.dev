(self["webpackChunkcvivo2021"] = self["webpackChunkcvivo2021"] || []).push([["src_app_pages_sign-in_sign-in_module_ts"],{

/***/ 5578:
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageRoutingModule": () => (/* binding */ SignInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.page */ 5050);




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_0__.SignInPage
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ 9885:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPageModule": () => (/* binding */ SignInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in-routing.module */ 5578);
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page */ 5050);
/* harmony import */ var src_app_components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/signupform/signupform.component */ 6704);








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignInPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_1__.SignInPage, src_app_components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_2__.SignupformComponent]
    })
], SignInPageModule);



/***/ }),

/***/ 5050:
/*!***********************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-in.page.html */ 5811);
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in.page.scss */ 5313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);








let SignInPage = class SignInPage {
    constructor(formBuilder, toastController, router, authService) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.router = router;
        this.authService = authService;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
        });
    }
    ngOnInit() {
        localStorage.clear();
    }
    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }
    presentToast(text, any) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000,
                animated: true,
                mode: 'ios',
                color: 'primary',
            });
            toast.present();
        });
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignInPage);



/***/ }),

/***/ 5313:
/*!*************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@font-face {\n  font-family: \"Lemon\";\n  src: url(\"/assets/fonts/lemon.otf\") format(\"truetype\");\n}\n.logo {\n  max-height: 56px;\n  text-align: center;\n  margin-left: 16px;\n}\nion-header p {\n  font-family: Lemon;\n  font-size: 22px;\n  padding: 0 0 0 20px;\n}\nion-content {\n  background: #061133;\n  --background: url('fondo-mujERES2.png') no-repeat center right / cover;\n  --color: white;\n}\nion-content p {\n  font-family: Lemon;\n  font-size: 20px;\n  padding: 20px 0;\n  text-align: center;\n  text-transform: none;\n}\nion-item {\n  --background: transparent;\n  --color: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n  --highlight-color-valid: var(--ion-color-tertiary);\n}\n.imgBig {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  background-color: var(--ion-color-secondary);\n}\nion-button {\n  --background: #843ba9;\n}\n.logoIntro {\n  max-width: 280px;\n  filter: drop-shadow(0px 0px 6px #f1f1f1);\n}\n@media only screen and (min-width: 993px) and (max-width: 1800px) {\n  .sesionContent {\n    width: 50%;\n    margin: auto;\n  }\n\n  .content button {\n    margin: 40px auto 50px auto;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQUNGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxzRUFBQTtFQUNBLGNBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFISjtBQU9BO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0RBQUE7QUFKRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0FBSkY7QUFPQTtFQUNFLHFCQUFBO0FBSkY7QUFPQTtFQUNFLGdCQUFBO0VBRUEsd0NBQUE7QUFKRjtBQU9BO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQUpGOztFQU1BO0lBQ0UsMkJBQUE7SUFDQSxVQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJzaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlbW9uXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2xlbW9uLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuJGZvbnQtY29sYWI6IFwiTGVtb25cIiwgc2Fucy1zZXJpZjtcclxuXHJcbi5sb2dvIHtcclxuICBtYXgtaGVpZ2h0OiA1NnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6IExlbW9uO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMDYxMTMzO1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG8tbXVqRVJFUzIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQgLyBjb3ZlcjtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6IExlbW9uO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG59XHJcblxyXG4uaW1nQmlnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzg0M2JhOTtcclxufVxyXG5cclxuLmxvZ29JbnRyb3tcclxuICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDZweCByZ2IoMjQxLCAyNDEsIDI0MSkpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA2cHggcmdiKDI0MSwgMjQxLCAyNDEpKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkgYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xyXG4gIC5zZXNpb25Db250ZW50IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0byA1MHB4IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5811:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-in/sign-in.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header color=\"secondary\">\r\n  <ion-toolbar color=\"primary\">\r\n    <p>Tu primera vez CUN</p>\r\n\r\n    <ion-buttons slot=\"end\">\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid fixed style=\"height: 100%;\" class=\"animate__animated animate__slideInUp animate__slow\">\r\n    <ion-row style=\"height: 100%;\">\r\n      <ion-col size=\"12\" style=\"display: flex; flex-direction: column; justify-content: center; align-items: center;\">\r\n        <img class=\"logoIntro\" src=\"assets/imgs/logo-intro.png\">\r\n        <p>Bienvenido a tu primera vez, el maravilloso curso de inducción Cunista.</p>\r\n        <ion-button expand=\"block\" shape=\"round\" type=\"submit\" (click)=\"loginWithGoogle()\"\r\n          class=\"ion-margin-vertical\">\r\n          <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\r\n          Ingresa con Google\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sign-in_sign-in_module_ts.js.map