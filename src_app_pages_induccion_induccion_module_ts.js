(self["webpackChunkcvivo2021"] = self["webpackChunkcvivo2021"] || []).push([["src_app_pages_induccion_induccion_module_ts"],{

/***/ 4131:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn1/btn1.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn1Component": () => (/* binding */ Btn1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn1.component.html */ 3535);
/* harmony import */ var _btn1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn1.component.scss */ 1197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn1Component = class Btn1Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 10 ? this.isLast = true : this.isLast = false;
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn1Component.ctorParameters = () => [];
Btn1Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn1', { static: false },] }]
};
Btn1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn1',
        template: _raw_loader_btn1_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn1_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn1Component);



/***/ }),

/***/ 1312:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn2/btn2.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn2Component": () => (/* binding */ Btn2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn2.component.html */ 8356);
/* harmony import */ var _btn2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn2.component.scss */ 4261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn2Component = class Btn2Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 7 ? this.isLast = true : this.isLast = false;
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn2Component.ctorParameters = () => [];
Btn2Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn2', { static: false },] }]
};
Btn2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn2',
        template: _raw_loader_btn2_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn2_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn2Component);



/***/ }),

/***/ 2225:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn3/btn3.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn3Component": () => (/* binding */ Btn3Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn3.component.html */ 6516);
/* harmony import */ var _btn3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn3.component.scss */ 7312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn3Component = class Btn3Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 9 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn3Component.ctorParameters = () => [];
Btn3Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn3', { static: false },] }]
};
Btn3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn3',
        template: _raw_loader_btn3_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn3_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn3Component);



/***/ }),

/***/ 9239:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn4/btn4.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn4Component": () => (/* binding */ Btn4Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn4.component.html */ 5112);
/* harmony import */ var _btn4_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn4.component.scss */ 47);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn4Component = class Btn4Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 9 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn4Component.ctorParameters = () => [];
Btn4Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn4', { static: false },] }]
};
Btn4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn4',
        template: _raw_loader_btn4_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn4_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn4Component);



/***/ }),

/***/ 1513:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn5/btn5.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn5Component": () => (/* binding */ Btn5Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn5.component.html */ 3234);
/* harmony import */ var _btn5_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn5.component.scss */ 7400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn5Component = class Btn5Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 8 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn5Component.ctorParameters = () => [];
Btn5Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn5', { static: false },] }]
};
Btn5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn5',
        template: _raw_loader_btn5_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn5_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn5Component);



/***/ }),

/***/ 7205:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn6/btn6.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn6Component": () => (/* binding */ Btn6Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn6_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn6.component.html */ 4486);
/* harmony import */ var _btn6_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn6.component.scss */ 6240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn6Component = class Btn6Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 9 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn6Component.ctorParameters = () => [];
Btn6Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn6', { static: false },] }]
};
Btn6Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn6',
        template: _raw_loader_btn6_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn6_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn6Component);



/***/ }),

/***/ 440:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn7/btn7.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn7Component": () => (/* binding */ Btn7Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn7_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn7.component.html */ 6597);
/* harmony import */ var _btn7_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn7.component.scss */ 429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn7Component = class Btn7Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 8 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn7Component.ctorParameters = () => [];
Btn7Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn7', { static: false },] }]
};
Btn7Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn7',
        template: _raw_loader_btn7_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn7_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn7Component);



/***/ }),

/***/ 9421:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/btn8/btn8.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn8Component": () => (/* binding */ Btn8Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_btn8_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./btn8.component.html */ 1578);
/* harmony import */ var _btn8_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn8.component.scss */ 6898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let Btn8Component = class Btn8Component {
    constructor() {
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (index != 0) {
                this.isFirst = false;
                index == 10 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
Btn8Component.ctorParameters = () => [];
Btn8Component.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slideBtn8', { static: false },] }]
};
Btn8Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-btn8',
        template: _raw_loader_btn8_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_btn8_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Btn8Component);



/***/ }),

/***/ 9686:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/intro/intro.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroComponent": () => (/* binding */ IntroComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./intro.component.html */ 2628);
/* harmony import */ var _intro_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.component.scss */ 8044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_pages_induccion_induccion_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/induccion/induccion.page */ 1431);





let IntroComponent = class IntroComponent {
    constructor(induccion) {
        this.induccion = induccion;
        this.isFirst = true;
        this.isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            // document.querySelector('ion-content').scrollToTop(500);
            console.log(index);
            this.index = index;
            if (this.index != 0) {
                this.isFirst = false;
                index == 3 ? (this.isLast = true) : (this.isLast = false);
            }
            else {
                this.isFirst = true;
                this.isLast = false;
            }
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    ngOnInit() { }
};
IntroComponent.ctorParameters = () => [
    { type: src_app_pages_induccion_induccion_page__WEBPACK_IMPORTED_MODULE_2__.InduccionPage }
];
IntroComponent.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slideBtnIntro', { static: false },] }]
};
IntroComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-intro',
        template: _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_intro_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IntroComponent);



/***/ }),

/***/ 9799:
/*!*****************************************************************!*\
  !*** ./src/app/components/induccion/moodle/moodle.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoodleComponent": () => (/* binding */ MoodleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_moodle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./moodle.component.html */ 6436);
/* harmony import */ var _moodle_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moodle.component.scss */ 690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MoodleComponent = class MoodleComponent {
    constructor() { }
    ngOnInit() { }
};
MoodleComponent.ctorParameters = () => [];
MoodleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-moodle',
        template: _raw_loader_moodle_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_moodle_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MoodleComponent);



/***/ }),

/***/ 7426:
/*!*************************************************************!*\
  !*** ./src/app/components/induccion/quiz/quiz.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizComponent": () => (/* binding */ QuizComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_quiz_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./quiz.component.html */ 3388);
/* harmony import */ var _quiz_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz.component.scss */ 9578);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





let QuizComponent = class QuizComponent {
    constructor(auth) {
        this.auth = auth;
        // isFirst = true;
        // isLast = false;
        this.isPlay = false;
        this.index = 0;
        this.puntaje = 0;
        this.isSubmitted = false;
        this.testCompletado = false;
        this.respuestas = new Array(20);
        this.correctas = [
            'c',
            'c',
            'd',
            'b',
            'c',
            'd',
            'c',
            'c',
            'a',
            'b',
            'b',
            'd',
            'b',
            'c',
            'b',
            'd',
            'a',
            'c',
            'b',
            'd',
        ];
        this.list = [
            {
                form: 'form0',
                rptas: [
                    'Solidaridad y honestidad.',
                    'Ética y equidad.',
                    'Recursividad y adaptabilidad.',
                    'Responsabilidad social y tolerancia.',
                ],
            },
            {
                form: 'form1',
                rptas: [
                    'Asume el cambio como lo único constante. ',
                    'Hacen bien las cosas desde el inicio, de manera proactiva y eficiente.',
                    'Está comprometida con la formación integral del ser humano y en especial de la mujer, a través de un modelo innovador.',
                    'Promete tener una amplia cobertura con calidad y excelencia. ',
                ],
            },
            {
                form: 'form2',
                rptas: [
                    'Integridad, respeto, emprendimiento, mujer y desarrollo social.',
                    'Pensamiento lógico y lectura crítica, apropiación de las TIC y recursividad.',
                    'Compromiso, desarrollo social, lectura crítica, integridad y responsabilidad ambiental.',
                    'Apropiación de las TIC, mujer y el desarrollo social, desarrollo sostenible y responsabilidad ambiental, emprendimiento, pensamiento lógico y lectura crítica.',
                ],
            },
            {
                form: 'form3',
                rptas: [
                    'Integridad.',
                    'Creatividad. ',
                    'Responsabilidad.',
                    'Recursividad. ',
                ],
            },
            {
                form: 'form4',
                rptas: [
                    'Debe dirigirse a la sede más cercana y realizar el proceso presencialmente',
                    'Debe enviar una carta a coordinación académica indicando los horarios de las materias que va a cursar en el semestre.',
                    'Ninguno ya que en el primer semestre el sistema asigna el horario  automáticamente  ',
                    'Debe enviar por correo electrónico a cada uno de los docentes solicitando  el horario en que verá las clases.',
                ],
            },
            {
                form: 'form5',
                rptas: [
                    'Que debe ser muy responsable en el semestre para poder llevar un buen rendimiento académico.',
                    'Que solicite a coordinación aplazar algunas materias para no tener una  gran carga académica.',
                    'Que solicite a los docentes la disminución de actividades por medio de una carta para disminuir la carga académica.',
                    'Que no se preocupe ya que hay asignaturas que tienen una carga mucho menor y duran entre 5 u 8 semanas',
                ],
            },
            {
                form: 'form6',
                rptas: [
                    'Verdadero ya que todas las instituciones educativas están volviendo a la presencialidad.',
                    'Falso porque aún no se ha estipulado una normativa general acerca de la  presencialidad.',
                    'Falso porque existen materias con modalidad Presencial, distancia y virtual, por lo tanto, debe verificar a cuál pertenece cada una de ellas. ',
                    'Verdadero  siempre y cuando las personas estén con el esquema de vacunación en un 100% ',
                ],
            },
            {
                form: 'form7',
                rptas: [
                    'Solicitar al docente vía correo electrónico el cambio de horario para las materias ',
                    'Enviar una carta a la facultad correspondiente indicando la situación para poder cambiar los horarios ',
                    'Tener en cuenta que en virtual hay una clase por semana donde la asistencia no es obligatoria, allí se realiza un encuentro sincrónico y de no asistir podrá ver las grabaciones. ',
                    'Retirar alguna de las dos materias.',
                ],
            },
            {
                form: 'form8',
                rptas: [
                    'En la biblioteca virtual de la CUN',
                    'En la Panamericana',
                    'Con su tía ',
                    'En el infierno',
                ],
            },
            {
                form: 'form9',
                rptas: [
                    'Redes sociales de la CUN',
                    'Cami Ticket',
                    'Redes sociales de CUNMEDIA',
                    'Ninguna de las anteriores.',
                ],
            },
            {
                form: 'form10',
                rptas: [
                    'En su casa con los libros del colegio',
                    'Escuela de idiomas BE',
                    'Jugando en el celular',
                    'En ningún lado, un segundo idioma no es necesario',
                ],
            },
            {
                form: 'form11',
                rptas: [
                    '@YOSOYCUN y @CUNMENDIAOFICIAL en Facebook y @CUNMEDIA en Instagram ',
                    '@YOSOYCUN Y @CUNMEDIA en Instagram y @YOSOYCUN en TikTok ',
                    '@YOSOYCUN en Twitter y @Cuntuber en Youtube',
                    'Todas las anteriores.',
                ],
            },
            {
                form: 'form12',
                rptas: ['SINU', 'CUN DIGITAL', 'Cami Ticket', 'CunWork'],
            },
            {
                form: 'form13',
                rptas: ['Cun digital.', 'Sinu.', 'CamiTicket. ', 'ICEBERG.'],
            },
            {
                form: 'form14',
                rptas: [
                    'Ingresar por Cun digital y redactar la solicitud.',
                    'Envíar la solicitud al correo contactenos@cun.edu.co.',
                    'Seleccionar Sinu y solicitar el certificado. ',
                    'Dirigirse directamente a la facultad y solicitar el certificado.',
                ],
            },
            {
                form: 'form15',
                rptas: [
                    'Solicitudes académicas.',
                    'Solicitudes tecnológicas.',
                    'Solicitudes Bienestar y permanencia.',
                    'Solicitudes financieras.',
                ],
            },
            {
                form: 'form16',
                rptas: [
                    'Solicitudes Bienestar y permanencia.',
                    'Solicitudes académicas.',
                    'Solicitudes tecnológicas.',
                    'Solicitudes financieras.',
                ],
            },
            {
                form: 'form17',
                rptas: [
                    'La página principal de la CUN',
                    'El correo electrónico',
                    'Cun digital/moodle',
                    'Ninguna de las anteriores.',
                ],
            },
            {
                form: 'form18',
                rptas: [
                    'Es un nuevo juego que creó la institución.',
                    'Es la plataforma por la cual los estudiantes están en conocimiento de sus materias y donde ven las actividades a realizar.',
                    'Es la plataforma en donde se pueden ver únicamente las notas.',
                    'Todas las anteriores.',
                ],
            },
            {
                form: 'form19',
                rptas: [
                    'Que lo escriba en una agenda.',
                    'Que se encomiende al dios que prefiera.',
                    'Que se compre un calendario.',
                    'Que utilice el planner de CUN digital. ',
                ],
            },
            // {
            //   form: 'form20',
            //   rptas: [
            //     'Ingresar a la página de la CUN, dar clic a soy cunista, luego a estudiante. Dar clic a tu programa, luego a plataforma virtual, y finalmente entrar  con el correo institucional. ',
            //     'Ingresar a la página de la CUN, dar clic a formación continuada, luego a estudiante. Dar clic a tu programa, luego a mundo CUN  y finalmente ingresar con el correo institucional. ',
            //     'Ingresar a la página de la CUN, dar clic a básica y media, luego a estudiante. Dar clic a plataforma virtual, luego a “ingresa” y  finalmente entrar con el correo institucional.',
            //     'Ingresar a la página de la CUN, dar clic a soy cunista, luego a estudiante. Dar clic a plataforma virtual, luego a “ingresa” y  finalmente entrar  con el correo institucional.',
            //   ],
            // },
            // {
            //   form: 'form21',
            //   rptas: [
            //     'Ingresando por SINU y seleccionar la opción “plataforma virtual”.',
            //     'Usando el método de autenticación por correo gmail, al dar clic en esa opción podrá ingresar el correo institucional.',
            //     'Cambiando de contraseña e intentando nuevamente.',
            //     'Hacer un Ticket y esperar a que solucionen internamente el inconveniente.',
            //   ],
            // },
            // {
            //   form: 'form22',
            //   rptas: [
            //     'Dirigirse a la línea de tiempo.',
            //     'Ir al histórico dentro de la plataforma.',
            //     'Revisar mi área personal.',
            //     'Enviar una solicitud por correo electrónico.',
            //   ],
            // },
            // {
            //   form: 'form23',
            //   rptas: [
            //     'Debe realizar un ticket solicitando información a su docente sobre el inicio del curso.',
            //     'Ingresando  al botón mis cursos, se desplegarán todos los cursos a los cuales el usuario está matriculado. Allí verá la información de inicio.',
            //     'Al seleccionar el botón de Sinu se desplegará el inicio de curso.',
            //     'Debe ingresar en la opción de la línea de tiempo, se pueden filtrar los cursos y salen las fechas, incluso también se puede ver una panorámica de “futuros cursos” los que se van a abrir en cierta fecha.',
            //   ],
            // },
            // {
            //   form: 'form24',
            //   rptas: [
            //     '2 y 3 es correcto.',
            //     '1 y 4 es correcto.',
            //     'Ninguna de las anteriores.',
            //     'Todas son correctas.',
            //   ],
            // },
            // {
            //   form: 'form25',
            //   rptas: [
            //     'Ingresar al curso, realizar el intento del cuestionario, descargar las preguntas y finalizar la revisión. ',
            //     'Buscar el curso, seleccionar el examen, realizar el intento del cuestionario, finalizar revisión y ver calificación. ',
            //     'Enviar un correo electrónico, esperar a que el profesor  habilite la plataforma, presentar el examen, finalizar la revisión y ver mi calificación.',
            //     'Seleccionar el curso que deseo, buscar la evaluación, intentar resolver el cuestionario, oprimir terminar intento, ver el resumen de mis preguntas, ver la retroalimentación y mi calificación.',
            //   ],
            // },
            // {
            //   form: 'form26',
            //   rptas: [
            //     'Hacer un Camiticket.',
            //     'Contactar al profesor por correo electrónico y enviarle una solicitud.',
            //     'Escribirle al profesor a WhatsApp para explicar lo ocurrido.',
            //     'Indicarle a un compañero que le diga al profesor el inconveniente.',
            //   ],
            // },
            // {
            //   form: 'form27',
            //   rptas: [
            //     'Guardar cambios.',
            //     'Subir el archivo en otro documento.',
            //     'Cargar nuevamente la plataforma.',
            //     'Leer las instrucciones antes de entregar la actividad.',
            //   ],
            // },
            // {
            //   form: 'form28',
            //   rptas: [
            //     'La descripción del examen.',
            //     'La notificación de google calendar.',
            //     'Sus apuntes sobre la entrega.',
            //     'La plataforma SINU.',
            //   ],
            // },
            // {
            //   form: 'form29',
            //   rptas: [
            //     'Que son muy impacientes y que en algún momento sabrán.',
            //     'Que pueden revisar en la plataforma, tanto de SINU, como de Moodle.',
            //     'Que las pueden ver en las plataformas, pero que si son materias de única nota, solo las podrán ver al final del semestre.',
            //     'Ninguna de las anteriores. Los profesores envían las notas por correo electrónico.',
            //   ],
            // },
            // {
            //   form: 'form30',
            //   rptas: [
            //     'Las notas únicas son aquellas que se obtienen siempre en todas las materias.',
            //     'Las notas únicas son aquellas que se obtienen si no se entregan todos los trabajos durante el semestre.',
            //     'Las notas únicas son aquellas que tienen algunas materias. Los estudiantes solo ven reflejada la calificación en aprobada o reprobada.',
            //     'Las notas únicas son aquellas que solo se pueden ver una única vez en la plataforma.',
            //   ],
            // },
            // {
            //   form: 'form31',
            //   rptas: [
            //     'Las notas acumulativas son aquellas que  responden a la sumatoria de cada una de las actividades evaluativas que puede tener un periodo académico. El resultado final de la nota puede verse reflejada en una escala de 1.0 a 5.0.',
            //     'Las notas acumulativas son aquellas que  responden a la sumatoria de todas las materias que se estén cursando. El resultado final de la nota puede verse reflejada en una escala de 1.0 a 5.0.',
            //     'Las notas acumulativas son aquellas que  responden a la sumatoria de cada una de las actividades evaluativas que puede tener un periodo académico. El resultado final de la nota se refleja en aprobado o reprobado.',
            //     'Ninguna de las anteriores es correcta.',
            //   ],
            // },
        ];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoHeight: true,
            onlyExternal: false,
        };
    }
    checkIndexSlide() {
        this.slideWithNav.getActiveIndex().then((index) => {
            this.slideWithNav.update();
            // document.querySelector('ion-content').scrollToTop(500);
            console.log('index slide:', index);
            this.index = index;
        });
    }
    next() {
        this.slideWithNav.slideNext();
    }
    prev() {
        this.slideWithNav.slidePrev();
    }
    guardarRespuesta(value, index) {
        this.respuestas[index] = value;
        this.correctas[index] == value
            ? (this.puntaje += 1)
            : (this.puntaje = this.puntaje);
        localStorage.setItem('rptaInduccion', JSON.stringify(this.respuestas));
        localStorage.setItem('puntajeInduccion', JSON.stringify(this.puntaje));
        // console.log('Rpta correcta', this.correctas[index]);
        // console.log('Array Respuetas', this.respuestas);
        // console.log('Puntaje', this.puntaje);
        if (this.index == 19) {
            this.auth
                .saveRptas(JSON.stringify(this.respuestas), this.puntaje)
                .then(() => {
                this.testCompletado = true;
                localStorage.setItem('induccionCompletada', String(this.testCompletado));
            });
        }
        else {
            this.next();
        }
    }
    submitForm(form, index) {
        this.isSubmitted = true;
        if (!form.valid) {
            return false;
        }
        else {
            this.isSubmitted = false;
            // console.log('Opción escogida: ', Object.values(form.value)[0]);
            this.guardarRespuesta(Object.values(form.value)[0], index);
        }
    }
    ngOnInit() {
        if (localStorage.getItem('rptaInduccion')) {
            this.respuestas = JSON.parse(localStorage.getItem('rptaInduccion'));
        }
        else {
            this.respuestas.fill('empty');
        }
        // if (localStorage.getItem('induccionCompletada')) {
        //   this.testCompletado = true;
        // } else {
        //   this.testCompletado = false;
        // }
    }
};
QuizComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
QuizComponent.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slideBtnQuiz', { static: false },] }]
};
QuizComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-quiz',
        template: _raw_loader_quiz_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quiz_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuizComponent);



/***/ }),

/***/ 909:
/*!*************************************************************!*\
  !*** ./src/app/pages/induccion/induccion-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InduccionPageRoutingModule": () => (/* binding */ InduccionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _induccion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./induccion.page */ 1431);




const routes = [
    {
        path: '',
        component: _induccion_page__WEBPACK_IMPORTED_MODULE_0__.InduccionPage
    }
];
let InduccionPageRoutingModule = class InduccionPageRoutingModule {
};
InduccionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InduccionPageRoutingModule);



/***/ }),

/***/ 9432:
/*!*****************************************************!*\
  !*** ./src/app/pages/induccion/induccion.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InduccionPageModule": () => (/* binding */ InduccionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _induccion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./induccion-routing.module */ 909);
/* harmony import */ var _induccion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./induccion.page */ 1431);
/* harmony import */ var src_app_components_induccion_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/induccion/intro/intro.component */ 9686);
/* harmony import */ var src_app_components_induccion_btn1_btn1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/induccion/btn1/btn1.component */ 4131);
/* harmony import */ var src_app_components_induccion_btn2_btn2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/induccion/btn2/btn2.component */ 1312);
/* harmony import */ var src_app_components_induccion_btn3_btn3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/induccion/btn3/btn3.component */ 2225);
/* harmony import */ var src_app_components_induccion_btn4_btn4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/induccion/btn4/btn4.component */ 9239);
/* harmony import */ var src_app_components_induccion_btn5_btn5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/induccion/btn5/btn5.component */ 1513);
/* harmony import */ var src_app_components_induccion_btn6_btn6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/induccion/btn6/btn6.component */ 7205);
/* harmony import */ var src_app_components_induccion_btn7_btn7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/induccion/btn7/btn7.component */ 440);
/* harmony import */ var src_app_components_induccion_btn8_btn8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/induccion/btn8/btn8.component */ 9421);
/* harmony import */ var src_app_components_induccion_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/induccion/quiz/quiz.component */ 7426);
/* harmony import */ var _components_induccion_moodle_moodle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../components/induccion/moodle/moodle.component */ 9799);


















let InduccionPageModule = class InduccionPageModule {
};
InduccionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule, _induccion_routing_module__WEBPACK_IMPORTED_MODULE_0__.InduccionPageRoutingModule],
        declarations: [
            _induccion_page__WEBPACK_IMPORTED_MODULE_1__.InduccionPage,
            src_app_components_induccion_intro_intro_component__WEBPACK_IMPORTED_MODULE_2__.IntroComponent,
            src_app_components_induccion_btn1_btn1_component__WEBPACK_IMPORTED_MODULE_3__.Btn1Component,
            src_app_components_induccion_btn2_btn2_component__WEBPACK_IMPORTED_MODULE_4__.Btn2Component,
            src_app_components_induccion_btn3_btn3_component__WEBPACK_IMPORTED_MODULE_5__.Btn3Component,
            src_app_components_induccion_btn4_btn4_component__WEBPACK_IMPORTED_MODULE_6__.Btn4Component,
            src_app_components_induccion_btn5_btn5_component__WEBPACK_IMPORTED_MODULE_7__.Btn5Component,
            src_app_components_induccion_btn6_btn6_component__WEBPACK_IMPORTED_MODULE_8__.Btn6Component,
            src_app_components_induccion_btn7_btn7_component__WEBPACK_IMPORTED_MODULE_9__.Btn7Component,
            src_app_components_induccion_btn8_btn8_component__WEBPACK_IMPORTED_MODULE_10__.Btn8Component,
            src_app_components_induccion_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__.QuizComponent,
            _components_induccion_moodle_moodle_component__WEBPACK_IMPORTED_MODULE_12__.MoodleComponent
        ],
    })
], InduccionPageModule);



/***/ }),

/***/ 1431:
/*!***************************************************!*\
  !*** ./src/app/pages/induccion/induccion.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InduccionPage": () => (/* binding */ InduccionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_induccion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./induccion.page.html */ 7162);
/* harmony import */ var _induccion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./induccion.page.scss */ 5842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let InduccionPage = class InduccionPage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
        this.seccionAct = 'intro';
        this.isMobile = false;
        this.ids = ['GR1', 'GR2', 'GR3', 'GR4', 'GR5', 'GR6', 'GR7', 'GR8', 'GR9', 'GR10'];
    }
    cambiarComponente(seccion) {
        this.ids.forEach((id, index) => {
            if (seccion - 1 == index) {
                let btnAct = document.getElementById('GR' + seccion);
                btnAct.classList.remove('unselected');
                btnAct.classList.add('selected');
            }
            else {
                let btns = document.getElementById(id);
                if (btns.classList.contains('selected')) {
                    btns.setAttribute('src', 'assets/imgs/induccion/botones/btn' + id + '-off.png');
                    btns.classList.remove('selected');
                    btns.classList.add('unselected');
                }
            }
        });
        this.seccionAct = seccion;
    }
    getIsMobile() {
        const w = document.documentElement.clientWidth;
        const breakpoint = 768;
        if (w < breakpoint) {
            return true;
        }
        else {
            return false;
        }
    }
    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    closeMenu() {
        this.menu.enable(false, 'first');
        this.menu.close('first');
    }
    ngOnInit() {
        this.isMobile = this.getIsMobile();
        window.onresize = () => {
            this.isMobile = this.getIsMobile();
        };
        this.ids.forEach((id, index) => {
            let btnOrig = document.getElementById(id);
            btnOrig.className = 'botoneSecciones animate__animated animate__fadeInLeft animate__delay-' + index + 's unselected';
        });
    }
};
InduccionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
InduccionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-induccion',
        template: _raw_loader_induccion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_induccion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InduccionPage);



/***/ }),

/***/ 1197:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn1/btn1.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    bottom: 5%;\n    width: 80%;\n    height: 300px;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImJ0bjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW1vVmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4261:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn2/btn2.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    bottom: 5%;\n    width: 80%;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImJ0bjIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW1vVmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnZpZGVtb1ZpZGVvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 7312:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn3/btn3.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    bottom: 5%;\n    width: 80%;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImJ0bjMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW1vVmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnZpZGVtb1ZpZGVvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 47:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn4/btn4.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    bottom: 5%;\n    width: 80%;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImJ0bjQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW1vVmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnZpZGVtb1ZpZGVvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 7400:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn5/btn5.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  bottom: 15%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    bottom: 8%;\n    width: 80%;\n    height: auto;\n    background-color: black;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsWUFBQTtFQURGO0FBQ0YiLCJmaWxlIjoiYnRuNS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlbW9WaWRlbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDE1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBib3R0b206IDglO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAudmlkZW1vVmlkZW8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 6240:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn6/btn6.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo1 {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 350px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.videmoVideo2 {\n  position: absolute;\n  left: 50%;\n  bottom: calc(6% + 350px);\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 350px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 910px) {\n  .videmoVideo1 {\n    width: auto;\n    margin: auto;\n    height: 250px;\n  }\n\n  .videmoVideo2 {\n    bottom: calc(6% + 250px);\n    width: auto;\n    margin: auto;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUlBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFERjs7RUFJQTtJQUNFLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBREY7QUFDRiIsImZpbGUiOiJidG42LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVtb1ZpZGVvMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDUlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxM3B4IC0zcHggIzAwMDAwMGY1O1xyXG59XHJcblxyXG4udmlkZW1vVmlkZW8yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogY2FsYyg2JSArIDM1MHB4KTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcclxuICAudmlkZW1vVmlkZW8xIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnZpZGVtb1ZpZGVvMiB7XHJcbiAgICBib3R0b206IGNhbGMoNiUgKyAyNTBweCk7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 429:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn7/btn7.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  top: 14%;\n  z-index: 1;\n  transform: translateX(-28%);\n  border-radius: 14px;\n  width: 55%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    transform: translateX(-50%);\n    width: 80%;\n    top: 16%;\n    background-color: black;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxZQUFBO0VBREY7QUFDRiIsImZpbGUiOiJidG43LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVtb1ZpZGVvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogMTQlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yOCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxM3B4IC0zcHggIzAwMDAwMGY1O1xyXG59XHJcblxyXG4uYXVkaW8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLmltZ1NsaWRlIHtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxM3B4IC0zcHggIzAwMDAwMGY1O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5uZXh0QnRuLFxyXG4ucHJldkJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogOHZoO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNiU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5leHRCdG4ge1xyXG4gIHJpZ2h0OiAzdnc7XHJcbn1cclxuXHJcbi5wcmV2QnRuIHtcclxuICBsZWZ0OiAzdnc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnZpZGVtb1ZpZGVvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0b3A6IDE2JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAudmlkZW1vVmlkZW8ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 6898:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/btn8/btn8.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".videmoVideo {\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  z-index: 1;\n  transform: translateX(-50%);\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n\n@media screen and (max-width: 768px) {\n  .videmoVideo {\n    bottom: 5%;\n    width: 80%;\n    height: auto;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .videmoVideo {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0bjguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImJ0bjguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW1vVmlkZW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLmF1ZGlvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXVkaW86bm90KFtjb250cm9sc10pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuXHJcbi5pbWdTbGlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ubmV4dEJ0bixcclxuLnByZXZCdG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDh2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5uZXh0QnRuIHtcclxuICByaWdodDogM3Z3O1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aWRlbW9WaWRlbyB7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnZpZGVtb1ZpZGVvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 8044:
/*!*****************************************************************!*\
  !*** ./src/app/components/induccion/intro/intro.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("iframe, .imgVideo {\n  border-radius: 14px;\n  width: 80%;\n  height: 400px;\n  margin: 4em auto;\n}\n\n.botoneSecciones,\niframe, .imgVideo {\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\niframe, .videoIntro {\n  z-index: 1;\n}\n\n.audio {\n  width: 100%;\n  height: -webkit-min-content;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n.imgVideo {\n  border-radius: 14px;\n}\n\n.botoneSecciones,\n.imgVideo {\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.videoIntro {\n  z-index: 1;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.imgSlide,\n.videoIntro {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n\n.imgSlide {\n  width: 80%;\n}\n\n.nextBtn {\n  right: 3vw;\n}\n\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n\n.prevBtn {\n  left: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsbUNBQUE7QUFFRjs7QUFDQTtFQUNFLFVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBOztFQUVFLG1DQUFBO0FBR0Y7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7O0FBQUE7RUFDRSxZQUFBO0FBR0Y7O0FBQUE7O0VBRUUsbUJBQUE7RUFDQSxtQ0FBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUhBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFNRjs7QUFIQTtFQUNFLFNBQUE7QUFNRiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZSwgLmltZ1ZpZGVvIHtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDRlbSBhdXRvO1xyXG59XHJcbi5ib3RvbmVTZWNjaW9uZXMsXHJcbmlmcmFtZSwgLmltZ1ZpZGVvIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuaWZyYW1lLCAudmlkZW9JbnRybyB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmF1ZGlve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uaW1nVmlkZW8ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLmJvdG9uZVNlY2Npb25lcyxcclxuLmltZ1ZpZGVvIHtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG5cclxuLnZpZGVvSW50cm8ge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmltZ1NsaWRlLFxyXG4udmlkZW9JbnRybyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG4uaW1nU2xpZGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLm5leHRCdG4ge1xyXG4gIHJpZ2h0OiAzdnc7XHJcbn1cclxuLm5leHRCdG4sXHJcbi5wcmV2QnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA4dmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2JTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJldkJ0biB7XHJcbiAgbGVmdDogM3Z3O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 690:
/*!*******************************************************************!*\
  !*** ./src/app/components/induccion/moodle/moodle.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slides {\n  border-radius: 20px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 98%;\n}\n\n.moodle {\n  width: 100%;\n  height: 45vw;\n  margin: auto;\n  border-radius: 20px;\n  text-align: center;\n}\n\n@media screen and (max-width: 768px) {\n  ion-slides {\n    margin: 3em auto;\n  }\n\n  .moodle {\n    height: 55vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vb2RsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGdCQUFBO0VBQUY7O0VBR0E7SUFDRSxZQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJtb29kbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVzIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxM3B4IC0zcHggIzAwMDAwMGY1O1xyXG4gIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbi5tb29kbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDV2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgbWFyZ2luOiAzZW0gYXV0bztcclxuICB9XHJcblxyXG4gIC5tb29kbGUge1xyXG4gICAgaGVpZ2h0OiA1NXZ3O1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 9578:
/*!***************************************************************!*\
  !*** ./src/app/components/induccion/quiz/quiz.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@font-face {\n  font-family: \"Shadows\";\n  src: url(\"/assets/fonts/shadows.ttf\") format(\"truetype\");\n}\n* {\n  font-family: Shadows;\n}\nform {\n  width: 95%;\n  padding: 15px 0;\n  margin: auto;\n  background-color: white;\n  border-radius: 20px;\n  text-align: center;\n}\nform .pregunta {\n  width: auto;\n}\nform .respuestas {\n  width: 90%;\n  margin: auto;\n  text-align: left;\n}\nform .respuestas .divisorItem {\n  margin: 10px auto;\n}\nform .respuestas input {\n  margin: 10px 0;\n  cursor: pointer;\n}\nform .respuestas label {\n  cursor: pointer;\n  padding-left: 10px;\n}\nform .invalid-feedback {\n  width: 60%;\n  margin: 8px auto;\n}\nform .invalid-feedback p {\n  border-radius: 20px;\n  padding: 5px;\n  border: 1px solid red;\n  margin: 0;\n  color: red;\n}\nform button {\n  background-color: #239a00;\n  color: white;\n  margin: 20px auto 10px auto;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 18px;\n}\n.resultado {\n  width: 95%;\n  padding: 25px 20px 45px 20px;\n  margin: auto;\n  background-color: white;\n  border-radius: 20px;\n  text-align: center;\n}\n.resultado .puntaje {\n  text-align: center;\n  font-size: 24px;\n}\n.resultado .nota {\n  text-align: center;\n  font-size: 22px;\n}\n.imgSlide {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n  width: 80%;\n}\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n.nextBtn {\n  right: 3vw;\n}\n.prevBtn {\n  left: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHdEQUFBO0FBQ0Y7QUFJQTtFQUNFLG9CQUFBO0FBRkY7QUFLQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0FBRko7QUFLRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQUtJO0VBQ0UsaUJBQUE7QUFITjtBQU1JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBTE47QUFTRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQVBKO0FBUUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTk47QUFVRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJKO0FBYUE7RUFDRSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVkY7QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVZKO0FBY0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFaSjtBQWlCQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FBZEY7QUFpQkE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWRGO0FBaUJBO0VBQ0UsVUFBQTtBQWRGO0FBaUJBO0VBQ0UsU0FBQTtBQWRGIiwiZmlsZSI6InF1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJTaGFkb3dzXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NoYWRvd3MudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG59XHJcblxyXG4kZm9udC1jb2xhYjogXCJTaGFkb3dzXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4qIHtcclxuICBmb250LWZhbWlseTogU2hhZG93cztcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAucHJlZ3VudGEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucmVzcHVlc3RhcyB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAuZGl2aXNvckl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDhweCBhdXRvO1xyXG4gICAgcCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOWEwMDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucmVzdWx0YWRve1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcGFkZGluZzogMjVweCAyMHB4IDQ1cHggMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC5wdW50YWple1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIFxyXG4gIH0gXHJcbiAgXHJcbiAgLm5vdGF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmltZ1NsaWRlIHtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxM3B4IC0zcHggIzAwMDAwMGY1O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5uZXh0QnRuLFxyXG4ucHJldkJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogOHZoO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNiU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5leHRCdG4ge1xyXG4gIHJpZ2h0OiAzdnc7XHJcbn1cclxuXHJcbi5wcmV2QnRuIHtcclxuICBsZWZ0OiAzdnc7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 5842:
/*!*****************************************************!*\
  !*** ./src/app/pages/induccion/induccion.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@font-face {\n  font-family: \"Lemon\";\n  src: url(\"/assets/fonts/lemon.otf\") format(\"truetype\");\n}\nion-content {\n  --background: #d6d6d6;\n}\nion-header {\n  --backgound: #d6d6d6;\n}\nion-header ion-title {\n  font-family: Lemon;\n  font-size: 30px;\n}\n.backBtn {\n  --background: transparent;\n  --border-radius: 50px;\n  padding-left: 10px;\n}\n.homeBtn {\n  padding-right: 10px;\n}\n.imgVideo {\n  border-radius: 14px;\n}\n.botoneSecciones,\n.imgVideo {\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n.botoneSecciones {\n  border-top-right-radius: 27px;\n  border-bottom-right-radius: 27px;\n  cursor: pointer;\n}\n.selected {\n  width: 100%;\n}\n.unselected {\n  width: 90%;\n}\n.logo {\n  position: fixed;\n  z-index: -1;\n  right: -6vw;\n  bottom: -3vh;\n}\n.circulo {\n  position: fixed;\n  z-index: -2;\n  right: -9vw;\n  bottom: -15vh;\n  box-shadow: 0 0 13px -3px #000000f5;\n  border-radius: 50%;\n}\n.videoIntro {\n  z-index: 1;\n}\n.imgSlide,\n.videoIntro {\n  border-radius: 18px;\n  box-shadow: 0 0 13px -3px #000000f5;\n}\n.imgSlide {\n  width: 80%;\n}\n.nextBtn {\n  right: 3vw;\n}\n.nextBtn,\n.prevBtn {\n  position: absolute;\n  bottom: 8vh;\n  display: inline-block;\n  width: 6%;\n  z-index: 1;\n}\n.prevBtn {\n  left: 3vw;\n  transform: rotate(180deg);\n}\nion-item {\n  z-index: 2005;\n  cursor: pointer;\n}\n@media screen and (max-width: 425px) {\n  .logo {\n    right: -6vw;\n    bottom: -3vh;\n    width: 60%;\n  }\n\n  .circulo {\n    right: -44vw;\n    bottom: -15vh;\n  }\n\n  .selected {\n    width: 80%;\n  }\n\n  .unselected {\n    width: 70%;\n  }\n\n  .imgSlide {\n    width: 100%;\n  }\n}\n.btn-menu {\n  margin-bottom: 2em;\n  width: 12vw;\n  cursor: pointer;\n}\n#menu {\n  position: fixed;\n  z-index: 99;\n}\n@keyframes hvr-bo {\n  0% {\n    transform: translateY(-8px);\n  }\n  50% {\n    transform: translateY(-4px);\n  }\n  to {\n    transform: translateY(-8px);\n  }\n}\n@keyframes hvr-bob-float {\n  to {\n    transform: translateY(-8px);\n  }\n}\n.hvr-bo {\n  display: inline-block;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px #0000;\n  animation-name: hvr-bob-float, hvr-bo;\n  animation-duration: 0.3s, 1.5s;\n  animation-delay: 0s, 0.3s;\n  animation-timing-function: ease-out, ease-in-out;\n  animation-iteration-count: 1, infinite;\n  animation-fill-mode: forwards;\n  animation-direction: normal, alternate;\n}\n@keyframes hvr-pulsem {\n  25% {\n    transform: scale(1.03);\n  }\n  75% {\n    transform: scale(1);\n  }\n}\n.hvr-pulsem {\n  display: inline-block;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px #0000;\n  animation-name: hvr-pulsem;\n  animation-duration: 5s;\n  animation-timing-function: ease;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZHVjY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHNEQUFBO0FBQ0Y7QUFJQTtFQUNFLHFCQUFBO0FBRkY7QUFLQTtFQUNFLG9CQUFBO0FBRkY7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBTUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUtBOztFQUVFLG1DQUFBO0FBRkY7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBREY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUVBO0VBQ0UsVUFBQTtBQUNGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBR0Y7QUFEQTtFQUNFLFVBQUE7QUFJRjtBQUZBOztFQUVFLG1CQUFBO0VBQ0EsbUNBQUE7QUFLRjtBQUhBO0VBQ0UsVUFBQTtBQU1GO0FBSkE7RUFDRSxVQUFBO0FBT0Y7QUFMQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUUY7QUFOQTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtBQVNGO0FBTkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQVNGO0FBUEE7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQVVGOztFQVJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFXRjs7RUFUQTtJQUNFLFVBQUE7RUFZRjs7RUFWQTtJQUNFLFVBQUE7RUFhRjs7RUFYQTtJQUNFLFdBQUE7RUFjRjtBQUNGO0FBWkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBY0Y7QUFaQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBZUY7QUFiQTtFQUNFO0lBQ0UsMkJBQUE7RUFnQkY7RUFkQTtJQUNFLDJCQUFBO0VBZ0JGO0VBZEE7SUFDRSwyQkFBQTtFQWdCRjtBQUNGO0FBZEE7RUFDRTtJQUNFLDJCQUFBO0VBZ0JGO0FBQ0Y7QUFkQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7QUFnQkY7QUFkQTtFQUNFO0lBQ0Usc0JBQUE7RUFpQkY7RUFmQTtJQUNFLG1CQUFBO0VBaUJGO0FBQ0Y7QUFmQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7QUFpQkYiLCJmaWxlIjoiaW5kdWNjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlbW9uXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2xlbW9uLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuJGZvbnQtY29sYWI6IFwiTGVtb25cIiwgc2Fucy1zZXJpZjtcclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNkNmQ2ZDY7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gIC0tYmFja2dvdW5kOiAjZDZkNmQ2O1xyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IExlbW9uO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJhY2tCdG4ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmhvbWVCdG4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWdWaWRlbyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG4uYm90b25lU2VjY2lvbmVzLFxyXG4uaW1nVmlkZW8ge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxM3B4IC0zcHggIzAwMDAwMGY1O1xyXG59XHJcbi5ib3RvbmVTZWNjaW9uZXMge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyN3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VsZWN0ZWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51bnNlbGVjdGVkIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5sb2dvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgcmlnaHQ6IC02dnc7XHJcbiAgYm90dG9tOiAtM3ZoO1xyXG59XHJcbi5jaXJjdWxvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogLTI7XHJcbiAgcmlnaHQ6IC05dnc7XHJcbiAgYm90dG9tOiAtMTV2aDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnZpZGVvSW50cm8ge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmltZ1NsaWRlLFxyXG4udmlkZW9JbnRybyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTNweCAtM3B4ICMwMDAwMDBmNTtcclxufVxyXG4uaW1nU2xpZGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLm5leHRCdG4ge1xyXG4gIHJpZ2h0OiAzdnc7XHJcbn1cclxuLm5leHRCdG4sXHJcbi5wcmV2QnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA4dmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2JTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5wcmV2QnRuIHtcclxuICBsZWZ0OiAzdnc7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgei1pbmRleDogMjAwNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICByaWdodDogLTZ2dztcclxuICAgIGJvdHRvbTogLTN2aDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG4gIC5jaXJjdWxvIHtcclxuICAgIHJpZ2h0OiAtNDR2dztcclxuICAgIGJvdHRvbTogLTE1dmg7XHJcbiAgfVxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAudW5zZWxlY3RlZCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxuICAuaW1nU2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5idG4tbWVudSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIHdpZHRoOiAxMnZ3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcbkBrZXlmcmFtZXMgaHZyLWJvIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBodnItYm9iLWZsb2F0IHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XHJcbiAgfVxyXG59XHJcbi5odnItYm8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzAwMDA7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGh2ci1ib2ItZmxvYXQsIGh2ci1ibztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3MsIDEuNXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcywgMC4zcztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dCwgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSwgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsLCBhbHRlcm5hdGU7XHJcbn1cclxuQGtleWZyYW1lcyBodnItcHVsc2VtIHtcclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcbi5odnItcHVsc2VtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMwMDAwO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBodnItcHVsc2VtO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 3535:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn1/btn1.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn1 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\n  scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide1.png\">\n  </ion-slide>\n  <ion-slide style=\"position: relative;\">\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide2.png\">\n    <iframe *ngIf=\"index == 1\" class=\"videmoVideo\" src=\"https://player.vimeo.com/video/670969764?h=34b99f4ae3&autoplay=1&loop=1&autopause=0\" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide3.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide4.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide5.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide6.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide7.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide8.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo1/slide9.png\">\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\"><iframe frameborder=\"0\"\n          width=\"1200px\" height=\"675px\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n          src=\"https://view.genial.ly/61e9f8e80f7d8200129c7df3\" type=\"text/html\" allowscriptaccess=\"always\"\n          allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\"></iframe> </div>\n    </div>\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <form onsubmit=\"return guardarRespuesta(event)\">\n\n        <p>\n      \n          Empleo actual:<br>\n      \n          <input type=\"radio\" name=\"test11\" value=\"tiempocompleto\"> Tiempo completo<br>\n      \n          <input type=\"radio\" name=\"test11\" value=\"mediodia\"> Medio día<br>\n      \n          <input type=\"radio\" name=\"test11\" value=\"sinempleo\"> Sin empleo\n      \n        </p>\n      \n        <p><input type=\"submit\" value=\"Enviar datos\"></p>\n      \n      </form>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">\n\n<div *ngIf=\"index == 7\" class=\"audio\">\n  <audio controls autoplay>\n    <source src=\"assets/imgs/induccion/modulo1/podcast1.mp3\" type=\"audio/mp3\">\n  </audio>\n</div>");

/***/ }),

/***/ 8356:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn2/btn2.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn2 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\n  scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide1.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide2.png\">\n  </ion-slide>\n  <ion-slide style=\"position: relative;\">\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide3.png\">\n    <iframe *ngIf=\"index == 2\" class=\"videmoVideo\" src=\"https://player.vimeo.com/video/670969645?h=391dd70455&autoplay=1&loop=1&autopause=0\"\n      width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide4.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide5.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide6.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo2/slide7.png\">\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\">\n        <iframe frameborder=\"0\" width=\"1200px\" height=\"675px\"\n          style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n          src=\"https://view.genial.ly/61b2350cf5fc510d92fcfc6b\" type=\"text/html\" allowscriptaccess=\"always\"\n          allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\n        </iframe>\n      </div>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">\n  \n<div *ngIf=\"index == 5\" class=\"audio\">\n  <audio controls autoplay>\n    <source src=\"assets/imgs/induccion/modulo2/podcast1.mp3\" type=\"audio/mp3\">\n  </audio>\n</div>");

/***/ }),

/***/ 6516:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn3/btn3.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn3 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\n  scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide1.png\">\n    <iframe *ngIf=\"index == 0\" class=\"videmoVideo\"\n      src=\"https://player.vimeo.com/video/671272108?h=78763c2cbe&autoplay=1&loop=1&autopause=0\" width=\"640\" height=\"360\"\n      frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide2.png\">\n  </ion-slide>\n  <ion-slide style=\"position: relative;\">\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide3.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide4.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide5.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide6.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide7.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide8.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo3/slide9.png\">\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\">\n        <iframe frameborder=\"0\" width=\"1200px\" height=\"675px\"\n          style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n          src=\"https://view.genial.ly/61e9c8a5b433d20025de6b82\" type=\"text/html\" allowscriptaccess=\"always\"\n          allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\n        </iframe>\n      </div>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">\n\n<div *ngIf=\"index == 7\" class=\"audio\">\n  <audio controls autoplay>\n    <source src=\"assets/imgs/induccion/modulo3/podcast1.mp3\" type=\"audio/mp3\">\n  </audio>\n</div>");

/***/ }),

/***/ 5112:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn4/btn4.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn4 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\n  scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide1.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide2.png\">\n    <iframe *ngIf=\"index == 1\" class=\"videmoVideo\" src=\"https://player.vimeo.com/video/670969583?h=ee1ad270ba&autoplay=1&loop=1&autopause=0\"\n      width=\"640\" height=\"342\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide style=\"position: relative;\">\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide3.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide4.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide5.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide6.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide7.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide8.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo4/slide9.png\">\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\">\n        <iframe frameborder=\"0\" width=\"1200px\" height=\"675px\"\n          style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n          src=\"https://view.genial.ly/61ef28ca55082b0012c17178\" type=\"text/html\" allowscriptaccess=\"always\"\n          allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\n        </iframe>\n      </div>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">\n\n<div *ngIf=\"index == 7\" class=\"audio\">\n  <audio controls autoplay>\n    <source src=\"assets/imgs/induccion/modulo4/podcast1.mp3\" type=\"audio/mp3\">\n  </audio>\n</div>");

/***/ }),

/***/ 3234:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn5/btn5.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn5 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\n  scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide1.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide2.png\">\n  </ion-slide>\n  <ion-slide style=\"position: relative;\">\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide3.png\">\n    <iframe *ngIf=\"index == 2\" class=\"videmoVideo\"\n      src=\"https://player.vimeo.com/video/642075130?h=ece16dd2df&autoplay=1&loop=1&autopause=0\" width=\"640\" height=\"360\"\n      frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide4.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide5.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide6.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide7.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo5/slide8.png\">\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\">\n        <iframe frameborder=\"0\" width=\"1200px\" height=\"675px\"\n          style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n          src=\"https://view.genial.ly/61eab2ed70bc0d00137de71b\" type=\"text/html\" allowscriptaccess=\"always\"\n          allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\n        </iframe>\n      </div>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">\n\n<div *ngIf=\"index == 6\" class=\"audio\">\n  <audio controls autoplay>\n    <source src=\"assets/imgs/induccion/modulo5/podcast1.mp3\" type=\"audio/mp3\">\n  </audio>\n</div>");

/***/ }),

/***/ 4486:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn6/btn6.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn6 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\n  scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide1.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide2.png\">\n    <iframe *ngIf=\"index == 1\" class=\"videmoVideo2\" src=\"https://player.vimeo.com/video/671467789?h=553853d36c&autoplay=1&loop=1&autopause=0\" width=\"640\" height=\"360\" frameborder=\"0\"\n      allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n    <iframe *ngIf=\"index == 1\" class=\"videmoVideo1\"\n      src=\"https://player.vimeo.com/video/671355796?h=f324a5171e\" width=\"640\" height=\"360\"\n      frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide style=\"position: relative;\">\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide3.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide4.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide5.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide6.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide7.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide8.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo6/slide9.png\">\n  </ion-slide>\n  <ion-slide>\n    <div style=\"width: 85%; margin: auto;\">\n      <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\">\n        <iframe frameborder=\"0\" width=\"1200px\" height=\"675px\"\n          style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n          src=\"https://view.genial.ly/61ec5c7e82ffbc0012e63218\" type=\"text/html\" allowscriptaccess=\"always\"\n          allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\n        </iframe>\n      </div>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">\n\n<div *ngIf=\"index == 8\" class=\"audio\">\n  <audio controls autoplay>\n    <source src=\"assets/imgs/induccion/modulo6/podcast1.mp3\" type=\"audio/mp3\">\n  </audio>\n</div>");

/***/ }),

/***/ 6597:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn7/btn7.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn7 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\r\n    scrollbar=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide1.png\">\r\n        <iframe *ngIf=\"index == 0\" class=\"videmoVideo\"\r\n            src=\"https://player.vimeo.com/video/438694248?h=50adbe235f&autoplay=1&loop=1&autopause=0\" width=\"640\"\r\n            height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\r\n        </iframe>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide2.png\">\r\n    </ion-slide>\r\n    <ion-slide style=\"position: relative;\">\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide3.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide4.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide5.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide6.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide7.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo7/slide8.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <div style=\"width: 85%; margin: auto;\">\r\n            <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\"><iframe frameborder=\"0\"\r\n                    width=\"1200px\" height=\"675px\"\r\n                    style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\r\n                    src=\"https://view.genial.ly/61eaaf42af45bd001217bfee\" type=\"text/html\" allowscriptaccess=\"always\"\r\n                    allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\r\n                </iframe>\r\n            </div>\r\n        </div>\r\n    </ion-slide>\r\n</ion-slides>\r\n\r\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\r\n    class=\"nextBtn pointer hvr-grow\">\r\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\r\n    class=\"prevBtn pointer hvr-grow\">\r\n\r\n<div *ngIf=\"index == 7\" class=\"audio\">\r\n    <audio controls autoplay>\r\n        <source src=\"assets/imgs/induccion/modulo7/podcast1.mp3\" type=\"audio/mp3\">\r\n    </audio>\r\n</div>");

/***/ }),

/***/ 1578:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/btn8/btn8.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtn8 (ionSlideDidChange)=\"checkIndexSlide()\" class=\"animate__animated animate__fadeIn animate__slow\"\r\n    scrollbar=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide1.png\">\r\n        <iframe *ngIf=\"index == 0\" class=\"videmoVideo\"\r\n            src=\"https://player.vimeo.com/video/443834692?h=eb87294e97&autoplay=1&loop=1&autopause=0\" width=\"640\"\r\n            height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\r\n        </iframe>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide2.png\">\r\n    </ion-slide>\r\n    <ion-slide style=\"position: relative;\">\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide3.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide4.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide5.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide6.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide7.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide8.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide9.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/modulo8/slide10.png\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <div style=\"width: 85%; margin: auto;\">\r\n            <div style=\"position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;\"><iframe frameborder=\"0\"\r\n                    width=\"1200px\" height=\"675px\"\r\n                    style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\r\n                    src=\"https://view.genial.ly/61ef29b1e59161001493992c\" type=\"text/html\" allowscriptaccess=\"always\"\r\n                    allowfullscreen=\"true\" scrolling=\"yes\" allownetworking=\"all\">\r\n                </iframe>\r\n            </div>\r\n        </div>\r\n    </ion-slide>\r\n</ion-slides>\r\n\r\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\r\n    class=\"nextBtn pointer hvr-grow\">\r\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\r\n    class=\"prevBtn pointer hvr-grow\">\r\n\r\n<div *ngIf=\"index == 8\" class=\"audio\">\r\n    <audio controls autoplay>\r\n        <source src=\"assets/imgs/induccion/modulo8/podcast1.mp3\" type=\"audio/mp3\">\r\n    </audio>\r\n</div>");

/***/ }),

/***/ 2628:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/intro/intro.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides #slideBtnIntro (ionSlideDidChange)=\"checkIndexSlide()\"\n  class=\"animate__animated animate__fadeIn animate__slow\" scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <iframe *ngIf=\"index == 0\" src=\"https://player.vimeo.com/video/670969685?h=eee9abbb6c&autoplay=1&loop=1&autopause=0\"\n      width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen>\n    </iframe>\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/intro/slide1.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/intro/slide2.png\">\n  </ion-slide>\n  <ion-slide>\n    <img alt=\"\" class=\"imgSlide ion-margin\" src=\"assets/imgs/induccion/intro/slide4.png\">\n  </ion-slide>\n</ion-slides>\n\n<img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\">");

/***/ }),

/***/ 6436:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/moodle/moodle.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides class=\"animate__animated animate__fadeIn animate__slow swiper-no-swiping\" scrollbar=\"true\">\n  <ion-slide>\n    <div class=\"moodle\">\n      <iframe scrolling=\"no\" src=\"https://virtual.cun.edu.co/contenidos/digital/recorrido_cundigital/story.html\"\n        width=\"100%\" height=\"100%\"></iframe>\n    </div>\n  </ion-slide>\n</ion-slides>");

/***/ }),

/***/ 3388:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/induccion/quiz/quiz.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides *ngIf=\"!testCompletado\" #slideBtnQuiz (ionSlideDidChange)=\"checkIndexSlide()\"\n  class=\"animate__animated animate__fadeIn animate__slow swiper-no-swiping\" scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide *ngFor=\"let item of list; index as i\">\n    <form #form0=\"ngForm\" id=\"{{item.form}}\" (submit)=\"submitForm(form0, i)\" novalidate>\n      <img class=\"pregunta\" src='assets/imgs/induccion/quiz/{{i}}.png'>\n      <div class=\"respuestas\">\n        <!-- <div style=\"text-align: center;\" *ngIf=\"index == 24\">\n          1. Desde la página cun.edu.co, seleccionar soy cunista, luego estudiante.<br>\n          2. Ingresando a Sinu, luego a la opción estudiante, introducir usuario y contraseña.<br>\n          3. Debe dirigirse a CamiTikect y ir a la opción plataforma virtual.<br>\n          4. Ingresar a la plataforma virtual, introducir usuario y contraseña.<br><br>\n          \n          Según lo anterior: <br><br>\n          \n        </div> -->\n        <div class=\"divisorItem\">\n          <input id=\"a{{i}}\" type=\"radio\" value=\"a\" name=\"{{i}}\" ngModel required>\n          <label for=\"a{{i}}\">{{item.rptas[0]}}</label>\n        </div>\n        <div class=\"divisorItem\">\n          <input id=\"b{{i}}\" type=\"radio\" value=\"b\" name=\"{{i}}\" ngModel required>\n          <label for=\"b{{i}}\">{{item.rptas[1]}}</label>\n        </div>\n        <div class=\"divisorItem\">\n          <input id=\"c{{i}}\" type=\"radio\" value=\"c\" name=\"{{i}}\" ngModel required>\n          <label for=\"c{{i}}\">{{item.rptas[2]}}</label>\n        </div>\n        <div class=\"divisorItem\">\n          <input id=\"d{{i}}\" type=\"radio\" value=\"d\" name=\"{{i}}\" ngModel required>\n          <label for=\"d{{i}}\">{{item.rptas[3]}}</label>\n        </div>\n      </div>\n      <div class=\"invalid-feedback\" *ngIf=\"isSubmitted && form0.invalid\">\n        <p>Escoge una respuesta para continuar</p>\n      </div>\n      <button *ngIf=\"index != 19\" type=\"submit\">Siguiente</button>\n      <button *ngIf=\"index == 19\" type=\"submit\">Finalizar</button>\n    </form>\n  </ion-slide>\n</ion-slides>\n\n<ion-slides *ngIf=\"testCompletado\" class=\"animate__animated animate__fadeIn animate__slow swiper-no-swiping\" scrollbar=\"true\" [options]=\"slideOpts\">\n  <ion-slide>\n    <div class=\"resultado\">\n      <img *ngIf=\"puntaje >= 12\" style=\"max-width: 120px;\" src='assets/imgs/induccion/quiz/feliz.png'>\n      <img *ngIf=\"puntaje < 12\" style=\"max-width: 120px;\" src='assets/imgs/induccion/quiz/triste.png'>\n      <div class=\"puntaje\">\n        <h1><b>Tu puntaje fue de:</b></h1>\n        <h1>{{puntaje}} / 20</h1>\n      </div>\n      <div class=\"nota\">\n        <span *ngIf=\"puntaje >= 12\">¡Eres una pilera! Pasaste el curso satisfactoriamente.</span>\n        <span *ngIf=\"puntaje < 12\">¡UPS! debes practicar un poco más, inténtalo nuevamente.</span>\n      </div>\n    </div>\n  </ion-slide>\n</ion-slides>\n\n<!-- <img *ngIf=\"isLast != true\" (click)=\"next()\" src=\"assets/imgs/induccion/siguiente.png\" alt=\"\"\n  class=\"nextBtn pointer hvr-grow\">\n<img *ngIf=\"isFirst == false\" (click)=\"prev()\" src=\"assets/imgs/induccion/atras.png\" alt=\"\"\n  class=\"prevBtn pointer hvr-grow\"> -->");

/***/ }),

/***/ 7162:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/induccion/induccion.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"rapidito\" class=\"toolbar-title-default ion-color ion-color-rapidito md in-toolbar hydrated\">\n    <ion-button (click)=\"router.navigate(['/channels'])\" class=\"homeBtn\" slot=\"end\" color=\"primary\" tabindex=\"0\">\n      <ion-icon slot=\"icon-only\" name=\"home\" role=\"img\" aria-label=\"home\">\n      </ion-icon>\n    </ion-button>\n    <ion-button (click)=\"router.navigate(['/channels'])\" class=\"backBtn\" slot=\"start\" tabindex=\"0\">\n      <ion-icon name=\"chevron-back\" style=\"color: #843ba9;\"></ion-icon>\n    </ion-button>\n    <ion-title class=\"ion-text-center\">¡Tu primera vez!</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #contentInduccion [scrollEvents]=\"true\">\n\n  <ion-grid class=\"ion-hide-md-down\">\n    <ion-row class=\"rowRapidito\">\n      <ion-col size=\"3.5\">\n        <div>\n          <img src=\"assets/imgs/induccion/guia-rapidita.png\" alt=\"\" class=\"hvr-bo\">\n        </div>\n\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('1')\" id=\"GR1\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-0s unselected\"\n            src=\"assets/imgs/induccion/botones/btn1.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('2')\" id=\"GR2\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-1s unselected\"\n            src=\"assets/imgs/induccion/botones/btn2.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('3')\" id=\"GR3\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-2s unselected\"\n            src=\"assets/imgs/induccion/botones/btn3.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('4')\" id=\"GR4\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-3s unselected\"\n            src=\"assets/imgs/induccion/botones/btn4.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('5')\" id=\"GR5\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-4s unselected\"\n            src=\"assets/imgs/induccion/botones/btn5.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('6')\" id=\"GR6\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-5s unselected\"\n            src=\"assets/imgs/induccion/botones/btn6.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('7')\" id=\"GR7\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-6s unselected\"\n            src=\"assets/imgs/induccion/botones/btn7.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('8')\" id=\"GR8\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-7s unselected\"\n            src=\"assets/imgs/induccion/botones/btn8.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('9')\" id=\"GR9\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-8s unselected\"\n            src=\"assets/imgs/induccion/botones/btn9.png\">\n        </div>\n        <div class=\"hvr-backward\">\n          <img alt=\"\" (click)=\"cambiarComponente('10')\" id=\"GR10\"\n            class=\"botoneSecciones animate__animated animate__fadeInLeft animate__delay-9s unselected\"\n            src=\"assets/imgs/induccion/botones/btn10.png\">\n        </div>\n      </ion-col>\n      <ion-col *ngIf=\"!isMobile\" size=\"8.5\" class=\"colDesk ion-align-self-center\">\n        <app-intro *ngIf=\"seccionAct == 'intro'\"></app-intro>\n        <app-btn1 *ngIf=\"seccionAct == '1'\"></app-btn1>\n        <app-btn2 *ngIf=\"seccionAct == '2'\"></app-btn2>\n        <app-btn3 *ngIf=\"seccionAct == '3'\"></app-btn3>\n        <app-btn4 *ngIf=\"seccionAct == '4'\"></app-btn4>\n        <app-btn5 *ngIf=\"seccionAct == '5'\"></app-btn5>\n        <app-btn6 *ngIf=\"seccionAct == '6'\"></app-btn6>\n        <app-btn7 *ngIf=\"seccionAct == '7'\"></app-btn7>\n        <app-btn8 *ngIf=\"seccionAct == '8'\"></app-btn8>\n        <app-quiz *ngIf=\"seccionAct == '9'\"></app-quiz>\n        <app-moodle *ngIf=\"seccionAct == '10'\"></app-moodle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- GRID MOBILE -->\n\n\n  <ion-grid class=\"ion-hide-md-up ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" (click)=\"openMenu()\" class=\"ion-no-padding\">\n        <img src=\"assets/imgs/induccion/botones/menu.png\" alt=\"\" class=\"btn-menu\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"isMobile\" size=\"12\" class=\"colDesk ion-align-self-center\">\n        <app-intro *ngIf=\"seccionAct == 'intro'\"></app-intro>\n        <app-btn1 *ngIf=\"seccionAct == '1'\"></app-btn1>\n        <app-btn2 *ngIf=\"seccionAct == '2'\"></app-btn2>\n        <app-btn3 *ngIf=\"seccionAct == '3'\"></app-btn3>\n        <app-btn4 *ngIf=\"seccionAct == '4'\"></app-btn4>\n        <app-btn5 *ngIf=\"seccionAct == '5'\"></app-btn5>\n        <app-btn6 *ngIf=\"seccionAct == '6'\"></app-btn6>\n        <app-btn7 *ngIf=\"seccionAct == '7'\"></app-btn7>\n        <app-btn8 *ngIf=\"seccionAct == '8'\"></app-btn8>\n        <app-quiz *ngIf=\"seccionAct == '9'\"></app-quiz>\n        <app-moodle *ngIf=\"seccionAct == '10'\"></app-moodle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div>\n    <img src=\"assets/imgs/induccion/circulo.png\" alt=\"\" class=\"circulo animate__animated animate__fadeIn\">\n  </div>\n</ion-content>\n\n\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\" style=\"z-index: 2050;\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content style=\"z-index: 2050;\">\n    <ion-list>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('1'); closeMenu()\" id=\"GR1\"\n          src=\"assets/imgs/induccion/botones/btn1.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('2'); closeMenu()\" id=\"GR2\"\n          src=\"assets/imgs/induccion/botones/btn2.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('3'); closeMenu()\" id=\"GR3\"\n          src=\"assets/imgs/induccion/botones/btn3.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('4'); closeMenu()\" id=\"GR4\"\n          src=\"assets/imgs/induccion/botones/btn4.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('5'); closeMenu()\" id=\"GR5\"\n          src=\"assets/imgs/induccion/botones/btn5.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('6'); closeMenu()\" id=\"GR6\"\n          src=\"assets/imgs/induccion/botones/btn6.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('7'); closeMenu()\" id=\"GR7\"\n          src=\"assets/imgs/induccion/botones/btn7.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('8'); closeMenu()\" id=\"GR8\"\n          src=\"assets/imgs/induccion/botones/btn8.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('9'); closeMenu()\" id=\"GR9\"\n          src=\"assets/imgs/induccion/botones/btn9.png\">\n      </ion-item>\n      <ion-item>\n        <img alt=\"\" (click)=\"cambiarComponente('10'); closeMenu()\" id=\"GR10\"\n          src=\"assets/imgs/induccion/botones/btn10.png\">\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_induccion_induccion_module_ts.js.map