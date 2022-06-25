(self["webpackChunkcvivo2021"] = self["webpackChunkcvivo2021"] || []).push([["src_app_pages_channels_channels_module_ts"],{

/***/ 5877:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-popper/__ivy_ngcc__/fesm2015/ngx-popper.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Triggers": () => (/* binding */ Triggers),
/* harmony export */   "Placements": () => (/* binding */ Placements),
/* harmony export */   "PopperController": () => (/* binding */ PopperController),
/* harmony export */   "PopperContent": () => (/* binding */ PopperContent),
/* harmony export */   "NgxPopperModule": () => (/* binding */ NgxPopperModule)
/* harmony export */ });
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ 404);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



const _c0 = ["popperViewRef"];
function PopperContent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PopperContent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = ["*", "*"];
class Triggers {
}
Triggers.CLICK = 'click';
Triggers.HOVER = 'hover';
Triggers.MOUSEDOWN = 'mousedown';
Triggers.NONE = 'none';
class Placements {
}
Placements.Top = 'top';
Placements.Bottom = 'bottom';
Placements.Left = 'left';
Placements.Right = 'right';
Placements.TopStart = 'top-start';
Placements.BottomStart = 'bottom-start';
Placements.LeftStart = 'left-start';
Placements.RightStart = 'right-start';
Placements.TopEnd = 'top-end';
Placements.BottomEnd = 'bottom-end';
Placements.LeftEnd = 'left-end';
Placements.RightEnd = 'right-end';
Placements.Auto = 'auto';
Placements.AutoStart = 'auto-start';
Placements.AutoEnd = 'auto-end';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopperContent {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} viewRef
     * @param {?} CDR
     */
    constructor(elemRef, renderer, viewRef, CDR) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.viewRef = viewRef;
        this.CDR = CDR;
        this.popperOptions = (/** @type {?} */ ({
            disableAnimation: false,
            disableDefaultStyling: false,
            placement: Placements.Auto,
            boundariesElement: '',
            trigger: Triggers.HOVER,
            positionFixed: false,
            appendToBody: false,
            popperModifiers: {}
        }));
        this.isMouseOver = false;
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.displayType = "none";
        this.opacity = 0;
        this.ariaHidden = 'true';
        this.arrowColor = null;
        this.state = true;
    }
    /**
     * @return {?}
     */
    onMouseOver() {
        this.isMouseOver = true;
    }
    /**
     * @return {?}
     */
    showOnLeave() {
        this.isMouseOver = false;
        if (this.popperOptions.trigger !== Triggers.HOVER && !this.popperOptions.hideOnMouseLeave) {
            return;
        }
        this.hide();
    }
    /**
     * @return {?}
     */
    onDocumentResize() {
        this.update();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clean();
        if (this.popperOptions.appendTo && this.elemRef && this.elemRef.nativeElement && this.elemRef.nativeElement.parentNode) {
            this.viewRef.detach();
            this.elemRef.nativeElement.parentNode.removeChild(this.elemRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    clean() {
        this.toggleVisibility(false);
        if (!this.popperInstance) {
            return;
        }
        ((/** @type {?} */ (this.popperInstance))).disableEventListeners();
        this.popperInstance.destroy();
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.referenceObject) {
            return;
        }
        /** @type {?} */
        const appendToParent = this.popperOptions.appendTo && document.querySelector(this.popperOptions.appendTo);
        if (appendToParent && this.elemRef.nativeElement.parentNode !== appendToParent) {
            this.elemRef.nativeElement.parentNode && this.elemRef.nativeElement.parentNode.removeChild(this.elemRef.nativeElement);
            appendToParent.appendChild(this.elemRef.nativeElement);
        }
        /** @type {?} */
        let popperOptions = (/** @type {?} */ ({
            placement: this.popperOptions.placement,
            positionFixed: this.popperOptions.positionFixed,
            modifiers: {
                arrow: {
                    element: this.popperViewRef.nativeElement.querySelector('.ngxp__arrow')
                }
            }
        }));
        if (this.onUpdate) {
            popperOptions.onUpdate = (/** @type {?} */ (this.onUpdate));
        }
        /** @type {?} */
        let boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);
        if (popperOptions.modifiers && boundariesElement) {
            popperOptions.modifiers.preventOverflow = { boundariesElement };
        }
        if (popperOptions.modifiers && this.popperOptions.preventOverflow !== undefined) {
            popperOptions.modifiers.preventOverflow = popperOptions.modifiers.preventOverflow || {};
            popperOptions.modifiers.preventOverflow.enabled = this.popperOptions.preventOverflow;
            if (!popperOptions.modifiers.preventOverflow.enabled) {
                popperOptions.modifiers.hide = { enabled: false };
            }
        }
        this.determineArrowColor();
        popperOptions.modifiers = Object.assign(popperOptions.modifiers, this.popperOptions.popperModifiers);
        this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_1__.default(this.referenceObject, this.popperViewRef.nativeElement, popperOptions);
        ((/** @type {?} */ (this.popperInstance))).enableEventListeners();
        this.scheduleUpdate();
        this.toggleVisibility(true);
        this.globalResize = this.renderer.listen('document', 'resize', this.onDocumentResize.bind(this));
    }
    /**
     * @private
     * @return {?}
     */
    determineArrowColor() {
        ['background-color', 'backgroundColor'].some((clr) => {
            if (!this.popperOptions.styles) {
                return false;
            }
            if (this.popperOptions.styles.hasOwnProperty(clr)) {
                this.arrowColor = this.popperOptions.styles[clr];
                return true;
            }
            return false;
        });
    }
    /**
     * @return {?}
     */
    update() {
        this.popperInstance && ((/** @type {?} */ (this.popperInstance))).update();
    }
    /**
     * @return {?}
     */
    scheduleUpdate() {
        this.popperInstance && ((/** @type {?} */ (this.popperInstance))).scheduleUpdate();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
        }
        this.toggleVisibility(false);
        this.onHidden.emit();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggleVisibility(state) {
        if (!state) {
            this.opacity = 0;
            this.displayType = "none";
            this.ariaHidden = 'true';
            this.state = false;
        }
        else {
            this.opacity = 1;
            this.displayType = "block";
            this.ariaHidden = 'false';
            this.state = true;
        }
        if (!this.CDR['destroyed']) {
            this.CDR.detectChanges();
        }
    }
    /**
     * @param {?=} classList
     * @return {?}
     */
    extractAppliedClassListExpr(classList) {
        if (!classList || typeof classList !== 'string') {
            return null;
        }
        try {
            return classList
                .replace(/ /, '')
                .split(',')
                .reduce((acc, clss) => {
                acc[clss] = true;
                return acc;
            }, {});
        }
        catch (e) {
            return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearGlobalResize() {
        this.globalResize && typeof this.globalResize === 'function' && this.globalResize();
    }
}
PopperContent.ɵfac = function PopperContent_Factory(t) { return new (t || PopperContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
PopperContent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopperContent, selectors: [["popper-content"]], viewQuery: function PopperContent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popperViewRef = _t.first);
    } }, hostBindings: function PopperContent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PopperContent_mouseover_HostBindingHandler() { return ctx.onMouseOver(); })("mouseleave", function PopperContent_mouseleave_HostBindingHandler() { return ctx.showOnLeave(); });
    } }, ngContentSelectors: _c1, decls: 5, vars: 20, consts: [[3, "ngStyle", "ngClass"], ["popperViewRef", ""], ["class", "ngxp__inner", 3, "innerHTML", 4, "ngIf"], ["class", "ngxp__inner", 4, "ngIf"], [1, "ngxp__arrow", 3, "ngClass"], [1, "ngxp__inner", 3, "innerHTML"], [1, "ngxp__inner"]], template: function PopperContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopperContent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopperContent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayType)("opacity", ctx.opacity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngxp__container", !ctx.popperOptions.disableDefaultStyling)("ngxp__animation", !ctx.popperOptions.disableAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.popperOptions.styles)("ngClass", ctx.extractAppliedClassListExpr(ctx.popperOptions.applyClass));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", ctx.ariaHidden)("aria-describedby", ctx.popperOptions.ariaDescribe || null)("role", ctx.popperOptions.ariaRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx.arrowColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("__force-arrow", ctx.arrowColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.extractAppliedClassListExpr(ctx.popperOptions.applyArrowClass));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".ngxp__container{display:none;position:absolute;border-radius:3px;border:1px solid grey;box-shadow:0 0 2px rgba(0,0,0,.5);padding:10px}.ngxp__container.ngxp__animation{-webkit-animation:150ms ease-out ngxp-fadeIn;animation:150ms ease-out ngxp-fadeIn}.ngxp__container>.ngxp__arrow{border-color:grey;width:0;height:0;border-style:solid;position:absolute;margin:5px}.ngxp__container[x-placement^=bottom],.ngxp__container[x-placement^=left],.ngxp__container[x-placement^=right],.ngxp__container[x-placement^=top]{display:block}.ngxp__container[x-placement^=top]{margin-bottom:5px}.ngxp__container[x-placement^=top]>.ngxp__arrow{border-width:5px 5px 0;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.ngxp__container[x-placement^=top]>.ngxp__arrow.__force-arrow{border-right-color:transparent!important;border-bottom-color:transparent!important;border-left-color:transparent!important}.ngxp__container[x-placement^=bottom]{margin-top:5px}.ngxp__container[x-placement^=bottom]>.ngxp__arrow{border-width:0 5px 5px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.ngxp__container[x-placement^=bottom]>.ngxp__arrow.__force-arrow{border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}.ngxp__container[x-placement^=right]{margin-left:5px}.ngxp__container[x-placement^=right]>.ngxp__arrow{border-width:5px 5px 5px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.ngxp__container[x-placement^=right]>.ngxp__arrow.__force-arrow{border-top-color:transparent!important;border-bottom-color:transparent!important;border-left-color:transparent!important}.ngxp__container[x-placement^=left]{margin-right:5px}.ngxp__container[x-placement^=left]>.ngxp__arrow{border-width:5px 0 5px 5px;border-top-color:transparent;border-bottom-color:transparent;border-right-color:transparent;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.ngxp__container[x-placement^=left]>.ngxp__arrow.__force-arrow{border-top-color:transparent!important;border-bottom-color:transparent!important;border-right-color:transparent!important}@-webkit-keyframes ngxp-fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes ngxp-fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
PopperContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
PopperContent.propDecorators = {
    popperViewRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ["popperViewRef",] }],
    onMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseover',] }],
    showOnLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseleave',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopperContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: "popper-content",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <div #popperViewRef
         [class.ngxp__container]="!popperOptions.disableDefaultStyling"
         [class.ngxp__animation]="!popperOptions.disableAnimation"
         [style.display]="displayType"
         [style.opacity]="opacity"
         [ngStyle]="popperOptions.styles"
         [ngClass]="extractAppliedClassListExpr(popperOptions.applyClass)"
         attr.aria-hidden="{{ariaHidden}}"
         [attr.aria-describedby]="popperOptions.ariaDescribe || null"
         attr.role="{{popperOptions.ariaRole}}">
      <div class="ngxp__inner" *ngIf="text" [innerHTML]="text">
        <ng-content></ng-content>
      </div>
      <div class="ngxp__inner" *ngIf="!text">
        <ng-content></ng-content>
      </div>
      <div class="ngxp__arrow" [style.border-color]="arrowColor" [class.__force-arrow]="arrowColor"
           [ngClass]="extractAppliedClassListExpr(popperOptions.applyArrowClass)"></div>

    </div>
  `,
                styles: [".ngxp__container{display:none;position:absolute;border-radius:3px;border:1px solid grey;box-shadow:0 0 2px rgba(0,0,0,.5);padding:10px}.ngxp__container.ngxp__animation{-webkit-animation:150ms ease-out ngxp-fadeIn;animation:150ms ease-out ngxp-fadeIn}.ngxp__container>.ngxp__arrow{border-color:grey;width:0;height:0;border-style:solid;position:absolute;margin:5px}.ngxp__container[x-placement^=bottom],.ngxp__container[x-placement^=left],.ngxp__container[x-placement^=right],.ngxp__container[x-placement^=top]{display:block}.ngxp__container[x-placement^=top]{margin-bottom:5px}.ngxp__container[x-placement^=top]>.ngxp__arrow{border-width:5px 5px 0;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.ngxp__container[x-placement^=top]>.ngxp__arrow.__force-arrow{border-right-color:transparent!important;border-bottom-color:transparent!important;border-left-color:transparent!important}.ngxp__container[x-placement^=bottom]{margin-top:5px}.ngxp__container[x-placement^=bottom]>.ngxp__arrow{border-width:0 5px 5px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.ngxp__container[x-placement^=bottom]>.ngxp__arrow.__force-arrow{border-top-color:transparent!important;border-right-color:transparent!important;border-left-color:transparent!important}.ngxp__container[x-placement^=right]{margin-left:5px}.ngxp__container[x-placement^=right]>.ngxp__arrow{border-width:5px 5px 5px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.ngxp__container[x-placement^=right]>.ngxp__arrow.__force-arrow{border-top-color:transparent!important;border-bottom-color:transparent!important;border-left-color:transparent!important}.ngxp__container[x-placement^=left]{margin-right:5px}.ngxp__container[x-placement^=left]>.ngxp__arrow{border-width:5px 0 5px 5px;border-top-color:transparent;border-bottom-color:transparent;border-right-color:transparent;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.ngxp__container[x-placement^=left]>.ngxp__arrow.__force-arrow{border-top-color:transparent!important;border-bottom-color:transparent!important;border-right-color:transparent!important}@-webkit-keyframes ngxp-fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}@keyframes ngxp-fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}100%{display:block;opacity:1}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { 
    /**
     * @return {?}
     */
    onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseover']
        }], 
    /**
     * @return {?}
     */
    showOnLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseleave']
        }], popperViewRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ["popperViewRef"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopperController {
    /**
     * @param {?} viewContainerRef
     * @param {?} changeDetectorRef
     * @param {?} resolver
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?=} popperDefaults
     */
    constructor(viewContainerRef, changeDetectorRef, resolver, elementRef, renderer, popperDefaults = {}) {
        this.viewContainerRef = viewContainerRef;
        this.changeDetectorRef = changeDetectorRef;
        this.resolver = resolver;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.popperDefaults = popperDefaults;
        this.popperContentClass = PopperContent;
        this.shown = false;
        this.subscriptions = [];
        this.eventListeners = [];
        this.globalEventListeners = [];
        this.hideTimeout = 0;
        this.timeoutAfterShow = 0;
        this.popperOnShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.popperOnHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.popperOnUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        PopperController.baseOptions = Object.assign({}, PopperController.baseOptions, this.popperDefaults);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideOnClickOutsideHandler($event) {
        if (this.disabled || !this.hideOnClickOutside || $event.srcElement &&
            $event.srcElement === this.popperContent.elemRef.nativeElement ||
            this.popperContent.elemRef.nativeElement.contains($event.srcElement)) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideOnScrollHandler($event) {
        if (this.disabled || !this.hideOnScroll) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    }
    /**
     * @return {?}
     */
    applyTriggerListeners() {
        switch (this.showTrigger) {
            case Triggers.CLICK:
                this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'click', this.toggle.bind(this)));
                break;
            case Triggers.MOUSEDOWN:
                this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'mousedown', this.toggle.bind(this)));
                break;
            case Triggers.HOVER:
                this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', this.scheduledShow.bind(this, this.showDelay)));
                this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'touchend', this.scheduledHide.bind(this, null, this.hideTimeout)));
                this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'touchcancel', this.scheduledHide.bind(this, null, this.hideTimeout)));
                this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.scheduledHide.bind(this, null, this.hideTimeout)));
                break;
        }
        if (this.showTrigger !== Triggers.HOVER && this.hideOnMouseLeave) {
            this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'touchend', this.scheduledHide.bind(this, null, this.hideTimeout)));
            this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'touchcancel', this.scheduledHide.bind(this, null, this.hideTimeout)));
            this.eventListeners.push(this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.scheduledHide.bind(this, null, this.hideTimeout)));
        }
    }
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    static assignDefined(target, ...sources) {
        for (const source of sources) {
            for (const key of Object.keys(source)) {
                /** @type {?} */
                const val = source[key];
                if (val !== undefined) {
                    target[key] = val;
                }
            }
        }
        return target;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //Support legacy prop
        this.hideOnClickOutside = typeof this.hideOnClickOutside === 'undefined' ?
            this.closeOnClickOutside : this.hideOnClickOutside;
        if (typeof this.content === 'string') {
            /** @type {?} */
            const text = this.content;
            this.popperContent = this.constructContent();
            this.popperContent.text = text;
        }
        else {
            this.popperContent = this.content;
        }
        /** @type {?} */
        const popperRef = this.popperContent;
        popperRef.referenceObject = this.getRefElement();
        this.setContentProperties(popperRef);
        this.setDefaults();
        this.applyTriggerListeners();
        if (this.showOnStart) {
            this.scheduledShow();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['popperDisabled'] && changes['popperDisabled'].currentValue) {
            this.hide();
        }
        if (changes['content']
            && !changes['content'].firstChange
            && typeof changes['content'].currentValue === 'string') {
            this.popperContent.text = changes['content'].currentValue;
        }
        if (changes['applyClass']
            && !changes['applyClass'].firstChange
            && typeof changes['applyClass'].currentValue === 'string') {
            this.popperContent.popperOptions.applyClass = changes['applyClass'].currentValue;
        }
        if (changes['applyArrowClass']
            && !changes['applyArrowClass'].firstChange
            && typeof changes['applyArrowClass'].currentValue === 'string') {
            this.popperContent.popperOptions.applyArrowClass = changes['applyArrowClass'].currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe && sub.unsubscribe());
        this.subscriptions.length = 0;
        this.clearEventListeners();
        this.clearGlobalEventListeners();
        clearTimeout(this.scheduledShowTimeout);
        clearTimeout(this.scheduledHideTimeout);
        this.popperContent && this.popperContent.clean();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled) {
            return;
        }
        this.shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
    }
    /**
     * @return {?}
     */
    show() {
        if (this.shown) {
            this.overrideHideTimeout();
            return;
        }
        this.shown = true;
        /** @type {?} */
        const popperRef = this.popperContent;
        /** @type {?} */
        const element = this.getRefElement();
        if (popperRef.referenceObject !== element) {
            popperRef.referenceObject = element;
        }
        this.setContentProperties(popperRef);
        popperRef.show();
        this.popperOnShown.emit(this);
        if (this.timeoutAfterShow > 0) {
            this.scheduledHide(null, this.timeoutAfterShow);
        }
        this.globalEventListeners.push(this.renderer.listen('document', 'touchend', this.hideOnClickOutsideHandler.bind(this)));
        this.globalEventListeners.push(this.renderer.listen('document', 'click', this.hideOnClickOutsideHandler.bind(this)));
        this.globalEventListeners.push(this.renderer.listen(this.getScrollParent(this.getRefElement()), 'scroll', this.hideOnScrollHandler.bind(this)));
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.disabled) {
            return;
        }
        if (!this.shown) {
            this.overrideShowTimeout();
            return;
        }
        this.shown = false;
        if (this.popperContentRef) {
            this.popperContentRef.instance.hide();
        }
        else {
            this.popperContent.hide();
        }
        this.popperOnHidden.emit(this);
        this.clearGlobalEventListeners();
    }
    /**
     * @param {?=} delay
     * @return {?}
     */
    scheduledShow(delay = this.showDelay) {
        if (this.disabled) {
            return;
        }
        this.overrideHideTimeout();
        this.scheduledShowTimeout = setTimeout(() => {
            this.show();
            this.applyChanges();
        }, delay);
    }
    /**
     * @param {?=} $event
     * @param {?=} delay
     * @return {?}
     */
    scheduledHide($event = null, delay = this.hideTimeout) {
        if (this.disabled) {
            return;
        }
        this.overrideShowTimeout();
        this.scheduledHideTimeout = setTimeout(() => {
            /** @type {?} */
            const toElement = $event ? $event.toElement : null;
            /** @type {?} */
            const popperContentView = this.popperContent.popperViewRef ? this.popperContent.popperViewRef.nativeElement : false;
            if (!popperContentView || popperContentView === toElement || popperContentView.contains(toElement) || ((/** @type {?} */ (this.content))).isMouseOver) {
                return;
            }
            this.hide();
            this.applyChanges();
        }, delay);
    }
    /**
     * @return {?}
     */
    getRefElement() {
        return this.targetElement || this.viewContainerRef.element.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */
    applyChanges() {
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    setDefaults() {
        this.showDelay = typeof this.showDelay === 'undefined' ? PopperController.baseOptions.showDelay : this.showDelay;
        this.showTrigger = typeof this.showTrigger === 'undefined' ? PopperController.baseOptions.trigger : this.showTrigger;
        this.hideOnClickOutside = typeof this.hideOnClickOutside === 'undefined' ? PopperController.baseOptions.hideOnClickOutside : this.hideOnClickOutside;
        this.hideOnScroll = typeof this.hideOnScroll === 'undefined' ? PopperController.baseOptions.hideOnScroll : this.hideOnScroll;
        this.hideOnMouseLeave = typeof this.hideOnMouseLeave === 'undefined' ? PopperController.baseOptions.hideOnMouseLeave : this.hideOnMouseLeave;
        this.ariaRole = typeof this.ariaRole === 'undefined' ? PopperController.baseOptions.ariaRole : this.ariaRole;
        this.ariaDescribe = typeof this.ariaDescribe === 'undefined' ? PopperController.baseOptions.ariaDescribe : this.ariaDescribe;
        this.styles = typeof this.styles === 'undefined' ? Object.assign({}, PopperController.baseOptions.styles) : this.styles;
    }
    /**
     * @private
     * @return {?}
     */
    clearEventListeners() {
        this.eventListeners.forEach(evt => {
            evt && typeof evt === 'function' && evt();
        });
        this.eventListeners.length = 0;
    }
    /**
     * @private
     * @return {?}
     */
    clearGlobalEventListeners() {
        this.globalEventListeners.forEach(evt => {
            evt && typeof evt === 'function' && evt();
        });
        this.globalEventListeners.length = 0;
    }
    /**
     * @private
     * @return {?}
     */
    overrideShowTimeout() {
        if (this.scheduledShowTimeout) {
            clearTimeout(this.scheduledShowTimeout);
            this.scheduledHideTimeout = 0;
        }
    }
    /**
     * @private
     * @return {?}
     */
    overrideHideTimeout() {
        if (this.scheduledHideTimeout) {
            clearTimeout(this.scheduledHideTimeout);
            this.scheduledHideTimeout = 0;
        }
    }
    /**
     * @private
     * @return {?}
     */
    constructContent() {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(this.popperContentClass);
        this.popperContentRef = this.viewContainerRef.createComponent(factory);
        return (/** @type {?} */ (this.popperContentRef.instance));
    }
    /**
     * @private
     * @param {?} popperRef
     * @return {?}
     */
    setContentProperties(popperRef) {
        popperRef.popperOptions = PopperController.assignDefined(popperRef.popperOptions, PopperController.baseOptions, {
            showDelay: this.showDelay,
            disableAnimation: this.disableAnimation,
            disableDefaultStyling: this.disableStyle,
            placement: this.placement,
            boundariesElement: this.boundariesElement,
            trigger: this.showTrigger,
            positionFixed: this.positionFixed,
            popperModifiers: this.popperModifiers,
            ariaDescribe: this.ariaDescribe,
            ariaRole: this.ariaRole,
            applyClass: this.applyClass,
            applyArrowClass: this.applyArrowClass,
            hideOnMouseLeave: this.hideOnMouseLeave,
            styles: this.styles,
            appendTo: this.appendTo,
            preventOverflow: this.preventOverflow,
        });
        popperRef.onUpdate = this.onPopperUpdate.bind(this);
        this.subscriptions.push(popperRef.onHidden.subscribe(this.hide.bind(this)));
    }
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    getScrollParent(node) {
        /** @type {?} */
        const isElement = node instanceof HTMLElement;
        /** @type {?} */
        const overflowY = isElement && window.getComputedStyle(node).overflowY;
        /** @type {?} */
        const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
        if (!node) {
            return null;
        }
        else if (isScrollable && node.scrollHeight >= node.clientHeight) {
            return node;
        }
        return this.getScrollParent(node.parentNode) || document;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onPopperUpdate(event) {
        this.popperOnUpdate.emit(event);
    }
}
PopperController.ɵfac = function PopperController_Factory(t) { return new (t || PopperController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('popperDefaults')); };
PopperController.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PopperController, selectors: [["", "popper", ""]], inputs: { hideTimeout: ["popperTimeout", "hideTimeout"], timeoutAfterShow: ["popperTimeoutAfterShow", "timeoutAfterShow"], hideOnClickOutside: ["popperHideOnClickOutside", "hideOnClickOutside"], showDelay: ["popperDelay", "showDelay"], showTrigger: ["popperTrigger", "showTrigger"], hideOnScroll: ["popperHideOnScroll", "hideOnScroll"], hideOnMouseLeave: ["popperHideOnMouseLeave", "hideOnMouseLeave"], ariaRole: ["popperAriaRole", "ariaRole"], ariaDescribe: ["popperAriaDescribeBy", "ariaDescribe"], styles: ["popperStyles", "styles"], content: ["popper", "content"], disabled: ["popperDisabled", "disabled"], placement: ["popperPlacement", "placement"], targetElement: ["popperTarget", "targetElement"], boundariesElement: ["popperBoundaries", "boundariesElement"], showOnStart: ["popperShowOnStart", "showOnStart"], closeOnClickOutside: ["popperCloseOnClickOutside", "closeOnClickOutside"], positionFixed: ["popperPositionFixed", "positionFixed"], popperModifiers: "popperModifiers", disableStyle: ["popperDisableStyle", "disableStyle"], disableAnimation: ["popperDisableAnimation", "disableAnimation"], applyClass: ["popperApplyClass", "applyClass"], applyArrowClass: ["popperApplyArrowClass", "applyArrowClass"], appendTo: ["popperAppendTo", "appendTo"], preventOverflow: ["popperPreventOverflow", "preventOverflow"] }, outputs: { popperOnShown: "popperOnShown", popperOnHidden: "popperOnHidden", popperOnUpdate: "popperOnUpdate" }, exportAs: ["popper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
PopperController.baseOptions = (/** @type {?} */ ({
    showDelay: 0,
    placement: Placements.Auto,
    hideOnClickOutside: true,
    hideOnMouseLeave: false,
    hideOnScroll: false,
    showTrigger: Triggers.HOVER,
    appendTo: undefined,
    ariaRole: 'popper',
    ariaDescribe: '',
    styles: {}
}));
/** @nocollapse */
PopperController.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: ['popperDefaults',] }] }
];
PopperController.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popper',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperDisabled',] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperPlacement',] }],
    showTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperTrigger',] }],
    targetElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperTarget',] }],
    showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperDelay',] }],
    hideTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperTimeout',] }],
    timeoutAfterShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperTimeoutAfterShow',] }],
    boundariesElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperBoundaries',] }],
    showOnStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperShowOnStart',] }],
    closeOnClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperCloseOnClickOutside',] }],
    hideOnClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperHideOnClickOutside',] }],
    hideOnScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperHideOnScroll',] }],
    hideOnMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperHideOnMouseLeave',] }],
    positionFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperPositionFixed',] }],
    popperModifiers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperModifiers',] }],
    disableStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperDisableStyle',] }],
    disableAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperDisableAnimation',] }],
    applyClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperApplyClass',] }],
    applyArrowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperApplyArrowClass',] }],
    ariaDescribe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperAriaDescribeBy',] }],
    ariaRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperAriaRole',] }],
    styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperStyles',] }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperAppendTo',] }],
    preventOverflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['popperPreventOverflow',] }],
    popperOnShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    popperOnHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    popperOnUpdate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopperController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[popper]',
                exportAs: 'popper'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: ['popperDefaults']
            }] }]; }, { hideTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperTimeout']
        }], timeoutAfterShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperTimeoutAfterShow']
        }], popperOnShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], popperOnHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], popperOnUpdate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], hideOnClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperHideOnClickOutside']
        }], showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperDelay']
        }], showTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperTrigger']
        }], hideOnScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperHideOnScroll']
        }], hideOnMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperHideOnMouseLeave']
        }], ariaRole: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperAriaRole']
        }], ariaDescribe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperAriaDescribeBy']
        }], styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperStyles']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popper']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperDisabled']
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperPlacement']
        }], targetElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperTarget']
        }], boundariesElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperBoundaries']
        }], showOnStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperShowOnStart']
        }], closeOnClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperCloseOnClickOutside']
        }], positionFixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperPositionFixed']
        }], popperModifiers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperModifiers']
        }], disableStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperDisableStyle']
        }], disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperDisableAnimation']
        }], applyClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperApplyClass']
        }], applyArrowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperApplyArrowClass']
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperAppendTo']
        }], preventOverflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['popperPreventOverflow']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPopperModule {
    /**
     * @return {?}
     */
    ngDoBootstrap() {
    }
    /**
     * @param {?=} popperBaseOptions
     * @return {?}
     */
    static forRoot(popperBaseOptions = {}) {
        return { ngModule: NgxPopperModule, providers: [{ provide: 'popperDefaults', useValue: popperBaseOptions }] };
    }
}
NgxPopperModule.ɵfac = function NgxPopperModule_Factory(t) { return new (t || NgxPopperModule)(); };
NgxPopperModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPopperModule });
NgxPopperModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPopperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
                ],
                declarations: [
                    PopperController,
                    PopperContent
                ],
                exports: [
                    PopperController,
                    PopperContent
                ],
                entryComponents: [
                    PopperContent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPopperModule, { declarations: function () { return [PopperController, PopperContent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [PopperController, PopperContent]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-popper.js.map

/***/ }),

/***/ 404:
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popper);
//# sourceMappingURL=popper.js.map


/***/ }),

/***/ 9246:
/*!***********************************************************!*\
  !*** ./src/app/pages/channels/channels-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelsPageRoutingModule": () => (/* binding */ ChannelsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _channels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channels.page */ 2121);




const routes = [
    {
        path: '',
        component: _channels_page__WEBPACK_IMPORTED_MODULE_0__.ChannelsPage
    }
];
let ChannelsPageRoutingModule = class ChannelsPageRoutingModule {
};
ChannelsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChannelsPageRoutingModule);



/***/ }),

/***/ 403:
/*!***************************************************!*\
  !*** ./src/app/pages/channels/channels.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelsPageModule": () => (/* binding */ ChannelsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _channels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./channels-routing.module */ 9246);
/* harmony import */ var _channels_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channels.page */ 2121);
/* harmony import */ var ngx_popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-popper */ 5877);








let ChannelsPageModule = class ChannelsPageModule {
};
ChannelsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _channels_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChannelsPageRoutingModule,
            ngx_popper__WEBPACK_IMPORTED_MODULE_7__.NgxPopperModule.forRoot({})
        ],
        declarations: [_channels_page__WEBPACK_IMPORTED_MODULE_1__.ChannelsPage]
    })
], ChannelsPageModule);



/***/ }),

/***/ 2121:
/*!*************************************************!*\
  !*** ./src/app/pages/channels/channels.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelsPage": () => (/* binding */ ChannelsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_channels_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./channels.page.html */ 3818);
/* harmony import */ var _channels_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channels.page.scss */ 2521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_channels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/channels.service */ 1514);







let ChannelsPage = class ChannelsPage {
    constructor(channelService, router, authService) {
        this.channelService = channelService;
        this.router = router;
        this.authService = authService;
        this.bgVideolUrl = '';
        this.loading = true;
        this.ids = {
            f1afda78aZ: {
                nombre: 'Tu primera vez',
                img: 'assets/imgs/logos-cursos/induccion.png',
                ruta: '/induccion',
            },
        };
        this.cursos = {
            vistos: [],
            noVistos: [...Object.keys(this.ids)],
        };
    }
    goHome(channelInfo) {
        this.channelService
            .getChannelCategories(channelInfo.id)
            .subscribe((channelCategories) => {
            let naviagtionExtras = {
                state: {
                    channel: { channelInfo, categories: channelCategories },
                },
                queryParams: {
                    channelName: channelInfo.name,
                },
            };
            this.router.navigate([`home`], naviagtionExtras);
        });
    }
    getCursos() {
        return this.channelService
            .getProgress(localStorage.getItem('uid'))
            .subscribe((dataUser) => {
            console.log(dataUser);
            this.dataUser = dataUser;
            this.cursos.vistos = dataUser['cursosVistos'];
            this.cursos.noVistos = Object.keys(this.ids).filter((val) => !dataUser['cursosVistos'].includes(val));
            localStorage.setItem('cursosUser', JSON.stringify(dataUser['cursosVistos']));
            this.loading = false;
        });
    }
    checkVisto(idCurso, ruta) {
        const cursosInStorage = JSON.parse(localStorage.getItem('cursosUser'));
        const uid = localStorage.getItem('uid');
        if (cursosInStorage.includes(idCurso)) {
            this.router.navigate([ruta]);
        }
        else {
            this.router.navigate([ruta]).then(() => {
                this.dataUser['cursosVistos'].push(idCurso);
                console.log(this.dataUser);
                this.channelService.upadteProgress(uid, this.dataUser);
            });
        }
    }
    navegarA(ruta) {
        this.router.navigate([ruta]);
    }
    signOut() {
        this.fireSub.unsubscribe();
        this.authService.signOut();
    }
    ngOnInit() {
        if (!localStorage.getItem('uid')) {
            this.router.navigate(['/login']);
            alert('Se ha cerrado tu sesión, por favor ingresa nuevamente');
        }
        this.fireSub = this.getCursos();
    }
};
ChannelsPage.ctorParameters = () => [
    { type: src_app_services_channels_service__WEBPACK_IMPORTED_MODULE_3__.ChannelsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ChannelsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-channels',
        template: _raw_loader_channels_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_channels_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChannelsPage);



/***/ }),

/***/ 1514:
/*!**********************************************!*\
  !*** ./src/app/services/channels.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelsService": () => (/* binding */ ChannelsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);



let ChannelsService = class ChannelsService {
    constructor(db) {
        this.db = db;
    }
    getChannels() {
        return this.db.collection('channels').valueChanges({ idField: 'id' });
    }
    getChannelCategories(channelId) {
        return this.db
            .collection('channels')
            .doc(channelId)
            .collection('categories', (ref) => ref.orderBy('name', 'asc'))
            .valueChanges({ idField: 'id' });
    }
    getChannelConfig(channel) {
        return this.db.collection('Config').doc(channel).valueChanges();
    }
    getProgress(uid) {
        return this.db.collection('usersInduccion').doc(uid).valueChanges();
    }
    upadteProgress(uid, data) {
        this.db.collection('usersInduccion').doc(uid).ref.update(data);
    }
};
ChannelsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
ChannelsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ChannelsService);



/***/ }),

/***/ 2521:
/*!***************************************************!*\
  !*** ./src/app/pages/channels/channels.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@font-face {\n  font-family: \"Lemon\";\n  src: url(\"/assets/fonts/lemon.otf\") format(\"truetype\");\n}\n* {\n  color: white;\n}\nion-header p {\n  font-family: Lemon;\n  font-size: 22px;\n  padding: 0 0 0 20px;\n}\nion-content {\n  background: #061133;\n  --background: url('fondo-mujERES2.png') no-repeat center\n    right / cover;\n}\nh1 {\n  font-family: Lemon;\n  font-size: 35px;\n}\n.logo {\n  max-height: 56px;\n  text-align: center;\n  margin-left: 16px;\n}\nion-fab {\n  --background: #843ba9;\n}\n.channelImage {\n  border-radius: 50%;\n  max-width: 153px;\n  max-height: 153px;\n  box-shadow: 0px 2px 24px 1px rgba(0, 0, 0, 0.67);\n  cursor: pointer;\n}\n.fullscreen-bg {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -100;\n  position: absolute;\n}\n#video {\n  opacity: 0.5;\n}\n.textSh {\n  text-shadow: 1px 0 0 gray, -1px 0 0 gray, 0 1px 0 gray, 0 -1px 0 gray, 1px 1px gray, -1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray;\n  text-shadow: 1px 0 0 gray, -1px 0 0 gray, 0 1px 0 gray, 0 -1px 0 gray, 1px 1px gray, -1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray;\n}\n.spinner-large {\n  transform: scale(2.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5uZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUFDRjtBQUtBO0VBQ0UsWUFBQTtBQUhGO0FBT0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUpKO0FBUUE7RUFDRSxtQkFBQTtFQUNBO2lCQUFBO0FBSkY7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUxGO0FBUUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQVFBO0VBQ0UscUJBQUE7QUFMRjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0FBTEY7QUFRQTtFQUNFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7QUFRQTtFQUNFLFlBQUE7QUFMRjtBQVFBO0VBQ0UsdUlBQUE7RUFFQSx1SUFBQTtBQU5GO0FBVUE7RUFDRSxxQkFBQTtBQVBGIiwiZmlsZSI6ImNoYW5uZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxlbW9uXCI7XHJcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2xlbW9uLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcclxufVxyXG5cclxuJGZvbnQtY29sYWI6IFwiTGVtb25cIiwgc2Fucy1zZXJpZjtcclxuXHJcblxyXG4qe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6IExlbW9uO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMjBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjMDYxMTMzO1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvZm9uZG8tbXVqRVJFUzIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXJcclxuICAgIHJpZ2h0IC8gY292ZXI7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtZmFtaWx5OiBMZW1vbjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXgtaGVpZ2h0OiA1NnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuaW9uLWZhYiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjODQzYmE5O1xyXG59XHJcblxyXG4uY2hhbm5lbEltYWdlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiAxNTNweDtcclxuICBtYXgtaGVpZ2h0OiAxNTNweDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDI0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC42Nyk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnVsbHNjcmVlbi1iZyB7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jdmlkZW8ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnRleHRTaCB7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAwIDAgZ3JheSwgLTFweCAwIDAgZ3JheSwgMCAxcHggMCBncmF5LCAwIC0xcHggMCBncmF5LFxyXG4gICAgMXB4IDFweCBncmF5LCAtMXB4IC0xcHggMCBncmF5LCAxcHggLTFweCAwIGdyYXksIC0xcHggMXB4IDAgZ3JheTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDAgMCBncmF5LCAtMXB4IDAgMCBncmF5LCAwIDFweCAwIGdyYXksIDAgLTFweCAwIGdyYXksXHJcbiAgICAxcHggMXB4IGdyYXksIC0xcHggLTFweCAwIGdyYXksIDFweCAtMXB4IDAgZ3JheSwgLTFweCAxcHggMCBncmF5O1xyXG59XHJcblxyXG4uc3Bpbm5lci1sYXJnZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XHJcbn0iXX0= */");

/***/ }),

/***/ 3818:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/channels/channels.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <p>Tu primera vez CUN</p>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"fullscreen-bg\" *ngIf=\"bgVidelUrl != '' \">\r\n  </div>\r\n\r\n  <!-- Contenedor con componente de spinner -->\r\n  <ion-grid fixed *ngIf=\"loading\" style=\"height: 100%; display: flex; flex-flow: column; justify-content: center;\">\r\n    <ion-row style=\"flex: 0 1 auto\" class=\"ion-margin-vertical\">\r\n      <ion-col size=\"12\" class=\"ion-text-center ion-margin-vertical\">\r\n        <ion-spinner name=\"bubbles\" class=\"spinner-large\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Contenedor con cursos -->\r\n  <ion-grid fixed *ngIf=\"!loading\">\r\n    <ion-row *ngIf=\"cursos.vistos.length > 0\" class=\"ion-margin-vertical\">\r\n      <ion-col size=\"12\" class=\"ion-text-center ion-margin-vertical\">\r\n        <h1 class=\"animate__animated animate__backInDown\">\r\n          Continua viendo\r\n        </h1>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"cursos.vistos.length > 0\" class=\"ion-margin-vertical\"\r\n      style=\"width: 100%; display: flex; flex-flow: row; justify-content: center; align-items: center;\">\r\n      <ion-col ng popper=\"{{ids[visto].nombre}}\" [popperTrigger]=\"'hover'\" [popperPlacement]=\"'top-center'\"\r\n        popperDelay=\"200\" popperApplyClass=\"tootltipClass\" popperApplyArrowClass=\"tooltipArrow\"\r\n        popperPreventOverflow=\"true\" size-lg=\"2.4\" size-xs=\"6\" size-md=\"3\" (click)=\"navegarA(ids[visto].ruta)\"\r\n        class=\"ion-margin-vertical ion-text-center animate__animated animate__backInDown\"\r\n        *ngFor=\"let visto of cursos.vistos\">\r\n        <img class=\"channelImage hvr-grow-rotate\" src=\"{{ids[visto].img}}\" alt=\"\" />\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"cursos.noVistos.length > 0\" class=\"ion-margin-vertical\">\r\n      <ion-col size=\"12\" class=\"ion-text-center ion-margin-vertical\">\r\n        <h1 class=\"animate__animated animate__backInDown\">\r\n          ¿List@ para tu primera vez?\r\n        </h1>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"cursos.noVistos.length > 0\"\r\n      style=\"width: 100%; display: flex; flex-flow: row; justify-content: center; align-items: center; padding-bottom: 3em\">\r\n      <ion-col ng popper=\"{{ids[noVisto].nombre}}\" [popperTrigger]=\"'hover'\" [popperPlacement]=\"'top-center'\"\r\n        popperDelay=\"200\" popperApplyClass=\"tootltipClass\" popperApplyArrowClass=\"tooltipArrow\"\r\n        popperPreventOverflow=\"true\" size-lg=\"2.4\" size-xs=\"6\" size-md=\"3\"\r\n        (click)=\"checkVisto(noVisto, ids[noVisto].ruta)\"\r\n        class=\"ion-margin-vertical ion-text-center animate__animated animate__backInDown\"\r\n        *ngFor=\"let noVisto of cursos.noVistos\">\r\n        <img class=\"channelImage hvr-grow-rotate\" src=\"{{ids[noVisto].img}}\" alt=\"\" />\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Botón de salida -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button routerDirection=\"root\" mode=\"md\" size=\"small\" (click)=\"signOut()\">\r\n      <ion-icon name=\"log-out\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_channels_channels_module_ts.js.map