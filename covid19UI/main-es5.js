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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<mat-drawer-container>\n    <mat-drawer-content>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n\n\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-patient/new-patient.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-patient/new-patient.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNewPatientNewPatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>New Patient</h2>\n\n<form class=\"example-form\" id=\"info_form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>First name: (*)</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" placeholder=\"Write fisrt name here...\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Last 4 ID digits: (*)</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"last4Digit\" name=\"last4Digit\" placeholder=\"Write last 4 ID digits here...\">\n      </mat-form-field>\n\n    <!--<mat-form-field class=\"example-full-width\">\n        <mat-label>Last name:</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"lastName\" name=\"lastName\">\n    </mat-form-field>-->\n\n    <mat-label style=\"color:darkgray; font-size: small;\">Date of Birth: (*)</mat-label>\n    <br/>\n    <mat-form-field style=\"width: 50px;\">\n        <mat-select [(value)]=\"day\">\n            <mat-option *ngFor=\"let d of daysLst\" [value]=\"d\">{{d}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 80px;\">\n        <mat-select [(value)]=\"month\">\n            <mat-option *ngFor=\"let m of monthsLst\" [value]=\"m\">{{m.name}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 80px;\">\n        <mat-select [(value)]=\"year\">\n            <mat-option *ngFor=\"let y of yearsLst\" [value]=\"y\">{{y}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <br/>\n\n    <mat-label style=\"color:darkgray; font-size: small;\">Gender:</mat-label>\n    <label style=\"visibility: hidden;\">......</label>\n    <mat-radio-group  [(ngModel)]=\"gender\" name=\"gender\">\n        <mat-radio-button  value='Male'>Male</mat-radio-button>\n        <mat-radio-button value='Female'>Female</mat-radio-button>\n      </mat-radio-group>\n\n      <br/>\n    <mat-label style=\"color:darkgray; font-size: small;\">Weight:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 50px;\" \n                [(ngModel)]=\"weight\" name=\"weight\">\n          </mat-form-field>\n    <br/>\n    <mat-checkbox [(ngModel)]=\"inRisk\" name=\"inrisk\">Risk group</mat-checkbox>\n    <br/>\n    <br/>\n    <mat-label style=\"color:darkgray; font-size: small;\">Sensors:</mat-label>\n    <br/>\n    <table mat-table \n           #table\n           [dataSource]=\"sensorsDataSource\" \n           class=\"mat-elevation-z8\" \n           style=\"width: 100%;\"\n           >\n        <!-- unitID Column -->\n        <ng-container matColumnDef=\"unit_id\">\n            <th mat-header-cell *matHeaderCellDef> UnitID </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.unit_id}} </td>\n            </ng-container>\n      \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name_tag\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name_tag}} </td>\n        </ng-container>\n      \n        <!-- Vendor Column -->\n        <ng-container matColumnDef=\"vendor_name\">\n          <th mat-header-cell *matHeaderCellDef> Vendor </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.vendor_name}} </td>\n        </ng-container>\n\n        <!--Release Col-->\n        <ng-container matColumnDef=\"remove\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)='removeSensorFromPatient(element)'>\n                <mat-icon>highlight_off</mat-icon>\n            </button>\n            </td>\n          </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <br/>\n      <br/>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor.name_tag}}</mat-label>\n        <mat-select [(value)]=\"sensor\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.name_tag}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <button mat-raised-button color='primary' (click)='AddSensorToPatient()'>Add</button>\n  </form>\n  \n  <form class=\"example-form\" id=\"remarks_form\">\n      <!--<h3>Remarks</h3>-->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Remarks</mat-label>\n          <textarea matInput type=\"text\" \n            style=\"width: 500px; height: 50px;\" [(ngModel)]=\"remarks\" name=\"remarks\" placeholder=\"Write remarks here...\"></textarea>\n        </mat-form-field>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Room:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"department\" name=\"department\" placeholder=\"Department (*)\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Room number (*)\">\n          </mat-form-field>\n          <br/>\n          <mat-label style=\"color:darkgray; font-size: small;\">Bed:</mat-label>\n          <label style=\"visibility: hidden;\">.........</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedNumber\" name=\"bedNumber\" placeholder=\"Bed number (*)\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedLocation\" name=\"bedLocation\" placeholder=\"Bed location\">\n          </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal HR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minHR\" name=\"minHR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxHR\" name=\"maxHR\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal SpO2 range:</mat-label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minSpO2\" name=\"minSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxSpO2\" name=\"maxSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal BR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minBR\" name=\"minBR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxBR\" name=\"maxBR\" disabled=\"true\">\n        </mat-form-field>       \n        <br/>\n        <br/>\n        <br/> \n        <br/>\n        <br/> \n  </form>\n\n<button mat-raised-button color='primary' (click)='OnClick()'>Finish</button>\n<br/>\n  \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-sensor/new-sensor.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-sensor/new-sensor.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesNewSensorNewSensorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>New Sensor</h1>\n\n<form class=\"example-form\" id=\"info_form\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Sensor name: (*)</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"sensorName\" name=\"sensorName\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Vendor: (*)</mat-label>\n        <input matInput type=\"text\" [(ngModel)]=\"sensorVendor\" name=\"sensorVendor\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Description:</mat-label>\n      <input matInput type=\"text\" [(ngModel)]=\"description\" name=\"description\">\n    </mat-form-field>\n    \n\n    <mat-label style=\"color:darkgray; font-size: small;\">Location:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 140px;\" \n                [(ngModel)]=\"institute\" name=\"institute\" placeholder=\"Institute (*)\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 140px;\" \n                [(ngModel)]=\"department\" name=\"department\" placeholder=\"Department (*)\">\n          </mat-form-field>\n          <br/>\n\n</form>\n\n\n<button mat-raised-button color='primary' (click)='OnClick()'>Finish</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/auxilary-data/auxilary-data.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/auxilary-data/auxilary-data.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataAuxilaryDataAuxilaryDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<label>{{type}}</label>\r\n<br>\r\n<iframe [src]=\"iframe_src\"\r\n        [ngClass]=\"{'hidden': visibility>0, 'visible': visibility<0}\"></iframe>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-data.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-data.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group>\n    <mat-tab label=\"Patient Information\">\n        <!--<h1>{{name}}</h1>-->\n        <div style=\"width: 100%; display: flex; flex-flow: row wrap;\">\n            <app-patient-personal-data id=\"patient_personal_info\"></app-patient-personal-data>\n            <app-patient-monitor id=\"monitor\"></app-patient-monitor>\n            <app-auxilary-data style=\"width: 350px;\"></app-auxilary-data>\n        </div>\n        <app-patient-history></app-patient-history>\n    </mat-tab>\n    <mat-tab label=\"Settings\">\n        <app-patient-settings></app-patient-settings>\n    </mat-tab>\n</mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-history/patient-history.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-history/patient-history.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientHistoryPatientHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 style=\"width: 100%;\">Patient History:</h2>\n\n<div style=\"width: 100%; display: flex; flex-flow: row wrap;\">\n<mat-card id=\"alerts_history\" >\n  <div>\n      <label><b>Alerts:</b></label>\n      <ul>\n        <li *ngFor=\"let alert of alerts\">\n          <b>{{ alert.name }}</b> : {{alert.time.toLocaleString()}}\n        </li>\n      </ul>\n    </div>\n</mat-card>\n\n<mat-card id=\"scoring_graph\">\n  <div class=\"chart-wrapper\"> \n      <canvas baseChart \n          [datasets]=\"lineChartData\" \n          [labels]=\"lineChartLabels\" \n          [options]=\"lineChartOptions\"\n          [colors]=\"lineChartColors\" \n          [legend]=\"lineChartLegend\" \n          [chartType]=\"lineChartType\" \n          [plugins]=\"lineChartPlugins\">\n      </canvas>\n  </div>\n</mat-card>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorBloodPressureMonitorBloodPressureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div >\n    <apx-chart #chart\n      [series]=\"chartOptions.series\"\n      [chart]=\"chartOptions.chart\"\n      [xaxis]=\"chartOptions.xaxis\"\n      [stroke]=\"chartOptions.stroke\"\n      [tooltip]=\"chartOptions.tooltip\"\n      [dataLabels]=\"chartOptions.dataLabels\"\n    ></apx-chart>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorBpMonitorBpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div \nstyle=\"background-color: black; \n       border-style: solid; \n       border-color: black; \n       width: 500px; \n       height: 30px;\">\n    <b><label style=\"color: cadetblue; font-size: larger;\">BP: {{bp_h}} / {{bp_l}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorBrGraphMonitorBrGraphComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 85px;\">\n      <apx-chart #chart\n            [series]=\"chartOptions.series\"\n            [chart]=\"chartOptions.chart\"\n            [xaxis]=\"chartOptions.xaxis\"\n            [stroke]=\"chartOptions.stroke\"\n            [tooltip]=\"chartOptions.tooltip\"\n            [dataLabels]=\"chartOptions.dataLabels\">\n      </apx-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorBreathingRateMonitorBreathingRateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <img [src]='warning' class=\"warning_visible\">\n    <b><label style=\"font-size: xx-small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: yellow;\n                     \"\n        >\nBrPm\n</label></b>\n<br/>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"BR\">{{currBr.br}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorEcgMonitorEcgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 85px;\">\n  <apx-chart #chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [stroke]=\"chartOptions.stroke\"\n    [tooltip]=\"chartOptions.tooltip\"\n    [dataLabels]=\"chartOptions.dataLabels\"\n    ></apx-chart>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorHeartRateMonitorHeartRateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <img [src]='warning' class=\"warning_visible\">\n    <img [src] = 'currPic' style=\"width: 20px; position: relative; left:0;\">\n    <b><label style=\"font-size: xx-small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: cadetblue;\n                     margin-top: 0px;\n                     \"\n        >\nBPM\n</label></b>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"HR\">{{heartRate.hr}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorSpO2GraphMonitorSpO2GraphComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 85px;\">\n  <apx-chart #chart\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [xaxis]=\"chartOptions.xaxis\"\n    [stroke]=\"chartOptions.stroke\"\n    [tooltip]=\"chartOptions.tooltip\"\n    [dataLabels]=\"chartOptions.dataLabels\"></apx-chart>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorSpo2MonitorSpo2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <img [src]='warning' class=\"warning_visible\">\n    <b><label style=\"font-size: xx-small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: cornflowerblue;\n                     \"\n        >\nSpO2 %\n</label></b>\n<br/>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"SPO2\">{{SpO2.spo2}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorMonitorTemperatureMonitorTemperatureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"top\">\n    <img [src]='warning' class=\"warning_visible\">\n    <b><label style=\"font-size: small; \n                     color: black;\n                     border:solid;\n                     vertical-align: 0%;\n                     background-color: aqua;\n                     \"\n        >\n&#x2103;\n</label></b>\n<br/>\n</div>\n<div class=\"square\">\n    <br/>\n    <b><label class=\"TMP\">{{currTmp.tmp}}</label></b>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/patient-monitor.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/patient-monitor.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientMonitorPatientMonitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width: 100%; display: flex; flex-flow: row wrap; height: 265px;\">\n    <div id=\"graphical_data\">\n        <app-monitor-ecg></app-monitor-ecg>\n        <app-monitor-sp-o2-graph></app-monitor-sp-o2-graph>\n        <app-monitor-br-graph></app-monitor-br-graph>\n    </div>\n\n    <div id=\"numerical_data\">\n        <app-monitor-heart-rate></app-monitor-heart-rate>\n        <app-monitor-spo2></app-monitor-spo2>\n        <app-monitor-breathing-rate></app-monitor-breathing-rate>\n        <app-monitor-temperature></app-monitor-temperature>\n    </div>\n</div>\n<div>\n    <app-monitor-bp></app-monitor-bp>\n</div>\n\n<!--<div style=\"width: 532px; background-color: black;\">\n    CHECK</div>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientPersonalDataPatientPersonalDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card style=\"width: 320px;\">\n    <h1>{{patientName}}</h1>\n    <label style=\"color:darkgray; font-size: small;\">Location:</label><br/>\n    <label>{{hospital}}, {{department}}/{{roomNumber}}</label>\n    <label style=\"visibility: hidden;\">..</label>\n    <label style=\"color:darkgray; font-size: small;\">Bed No: </label>\n    <label style=\"visibility: hidden;\">.</label>\n    <label>{{bedNumber}} {{bedLocation}}</label><br/><br/>\n    <label style=\"color:darkgray; font-size: small;\">Risk group:</label>\n    <label style=\"visibility: hidden;\">..</label>\n    <mat-checkbox [(ngModel)]=\"inRisk\" [disabled]=\"disabled\"></mat-checkbox><br/><br/>\n    <label style=\"color:darkgray; font-size: small;\">Attached to respirator:</label>\n    <label style=\"visibility: hidden;\">..</label>\n    <mat-checkbox [(ngModel)]=\"extraO2\" [disabled]=\"disabled\"></mat-checkbox><br/><br/>\n    <img class=\"roundImg\" [src] = \"statusPath\"><br/>\n</mat-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-settings/patient-settings.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-settings/patient-settings.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientDataPatientSettingsPatientSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form\">\n    <mat-label style=\"color:darkgray; font-size: small;\">Sensors:</mat-label>\n    <br/>\n    <br/>\n    <table mat-table \n        #table\n        [dataSource]=\"sensorsDataSource\" \n        class=\"mat-elevation-z8\" \n        style=\"width: 80%;\"\n        >\n    <!-- UnitID Column -->\n    <ng-container matColumnDef=\"unit_id\">\n    <th mat-header-cell *matHeaderCellDef> UnitID </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.unit_id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name_tag\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name_tag}} </td>\n    </ng-container>\n\n    <!-- Vendor Column -->\n    <ng-container matColumnDef=\"vendor_name\">\n    <th mat-header-cell *matHeaderCellDef> Vendor </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.vendor_name}} </td>\n    </ng-container>\n\n    <!--Release Col-->\n    <ng-container matColumnDef=\"remove\">\n        <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n        <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button (click)='removeSensorFromPatient(element)'>\n            <mat-icon>highlight_off</mat-icon>\n        </button>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <br/>\n    <mat-form-field style=\"width: 65%;\">\n        <mat-label style=\"color: black;\">{{sensor1.name_tag}}</mat-label>\n        <mat-select [(value)]=\"sensor1\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.name_tag}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <button mat-raised-button color='primary' (click)='AddSensorToPatient()'>Add</button>\n    <!--<label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor2.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor2\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor3.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor3\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor4.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor4\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-label style=\"color: black;\">{{sensor5.UnitID}}</mat-label>\n        <mat-select [(value)]=\"sensor5\" (selectionChange) = 'setSensors()'>\n            <mat-option *ngFor=\"let s of sensors\" [value]=\"s\">{{s.UnitID}}</mat-option>\n        </mat-select>\n    </mat-form-field>-->\n\n    <br/>\n    <mat-label style=\"color:darkgray; font-size: small;\">Room:</mat-label>\n        <!--<label style=\"visibility: hidden;\">......</label>\n        <mat-form-field>\n          <input matInput type=\"text\" style=\"width: 30px;\" [(ngModel)]=\"roomNum\" name=\"room\">\n        </mat-form-field>\n        <br/>-->\n\n        <label style=\"visibility: hidden;\">......</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"department\" name=\"department\" placeholder=\"Department\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"roomNumber\" name=\"roomNumber\" placeholder=\"Room number\">\n          </mat-form-field>\n          <br/>\n          <mat-label style=\"color:darkgray; font-size: small;\">Bed:</mat-label>\n          <label style=\"visibility: hidden;\">.........</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedNumber\" name=\"bedNumber\" placeholder=\"Bed number\">\n          </mat-form-field>\n          <label style=\"visibility: hidden;\">...</label>\n          <mat-form-field>\n            <input matInput type=\"text\" style=\"width: 100px;\" \n                [(ngModel)]=\"bedLocation\" name=\"bedLocation\" placeholder=\"Bed location\">\n          </mat-form-field>\n\n          <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal HR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minHR\" name=\"minHR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxHR\" name=\"maxHR\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal SpO2 range:</mat-label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minSpO2\" name=\"minSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxSpO2\" name=\"maxSpO2\" disabled=\"true\">\n        </mat-form-field>\n        <br/>\n\n        <mat-label style=\"color:darkgray; font-size: small;\">Normal BR range:</mat-label>\n        <label style=\"visibility: hidden;\">......</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"minBR\" name=\"minBR\" disabled=\"true\">\n        </mat-form-field>\n        <label style=\"visibility: hidden;\">...</label>\n        <label>-</label>\n        <label style=\"visibility: hidden;\">...</label>\n        <mat-form-field style=\"width: 30px;\">\n            <input matInput type=\"text\" [(ngModel)]=\"maxBR\" name=\"maxBR\" disabled=\"true\">\n        </mat-form-field>\n  </form>\n\n  <button mat-raised-button color='primary' (click)='OnSave()'>Save</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-release/patient-release.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-release/patient-release.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientReleasePatientReleaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Release Document</h1>\n<br/>\n\n<div id='patient_summary'>\n    <label>First name: </label>\n    <label>{{firstName}}</label>\n    <br/>\n    <br/>\n    <label>Age: </label>\n    <label>{{age}}</label>\n    <br/>\n    <br/>\n</div>\n\n<div id='remarks'>\n    <label>Remarks:</label>\n    <br/>\n    <textarea class=\"input_class\" rows=\"20\" [(ngModel)]=\"remarks\"></textarea>\n</div>\n<app-patient-history></app-patient-history>\n<br/>\n\n<button mat-raised-button (click)='OnFinishClick()'>Finish</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patients/patients.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patients/patients.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPatientsPatientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<h1>Patients Info</h1>\n<br/>-->\n<br/>\n<br/>\n\n<div>\n  <!--<button mat-raised-button color='primary' (click) = 'newSensor()'>New sensor</button>-->\n  <img class=\"roundImg\" [src] = \"greenStatusPath\">\n  <label style=\"visibility: hidden;\">.</label>\n  <label style=\"font-size: larger;\">{{numOfMinorPatients}}</label>\n\n  <label style=\"visibility: hidden;\">...</label>\n  <img class=\"roundImg\" [src] = \"yellowStatusPath\">\n  <label style=\"visibility: hidden;\">.</label>\n  <label style=\"font-size: larger;\">{{numOfModeratePatients}}</label>\n\n  <label style=\"visibility: hidden;\">...</label>\n  <img class=\"roundImg\" [src] = \"orangeStatusPath\">\n  <label style=\"visibility: hidden;\">.</label>\n  <label style=\"font-size: larger;\">{{numOfMajorPatients}}</label>\n\n  <label style=\"visibility: hidden;\">...</label>\n  <img class=\"roundImg\" [src] = \"redStatusPath\">\n  <label style=\"visibility: hidden;\">.</label>\n  <label style=\"font-size: larger;\">{{numOfCriticalPatients}}</label>\n\n  <button mat-icon-button (click) = 'sortByScore()' style=\"position: absolute; right: 110px;\">\n    <mat-icon>sort</mat-icon>\n  </button>\n\n\n  <button mat-icon-button (click) = 'newPatient()' style=\"position: absolute; right: 70px;\">\n    <mat-icon>add_circle</mat-icon>\n    Add patient\n  </button>\n  <!--\n    \n  -->\n</div>\n\n<br/>\n\n<div>\n    <table #table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--Patient Col-->\n        <ng-container matColumnDef=\"patient_Id\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> \n              <div>\n                <img [src] = 'patient_icon' class = 'icon'>\n                <br/>\n                Patient \n            </div>\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.last4Digit}} </td>\n          </ng-container>\n\n          <!--Room Col-->\n          <ng-container matColumnDef=\"room\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'room_icon' class = 'icon'>\n              <br/>\n              Room\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.room_identifier}} </td>\n          </ng-container>\n\n          <!--Age Col-->\n          <ng-container matColumnDef=\"age\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'age_icon' class = 'icon'>\n              <br/>\n              Age\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.personal.Age}} </td>\n          </ng-container>\n\n          <!--HR Col-->\n          <ng-container matColumnDef=\"heartRate\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'hr_icon' class = 'icon'>\n              <br/>\n              HR\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.heartRate.val}} </td>\n          </ng-container>\n\n          <!--BP Col-->\n          <ng-container matColumnDef=\"bloodPresure\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> \n              <img [src] = 'bp_icon' class = 'icon'>\n              <br/>\n              BP\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.bloodPresure.val}} </td>\n          </ng-container>\n\n          <!--SpO2 Col-->\n          <ng-container matColumnDef=\"spO2\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'spo2_icon' class = 'icon'>\n              <br/>\n              SpO2\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.spO2.val}} </td>\n          </ng-container>\n\n          <!--BR Col-->\n          <ng-container matColumnDef=\"breathingRate\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'br_icon' class = 'icon'>\n              <br/>\n              BR\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.breathingRate.val}} </td>\n          </ng-container>\n\n          <!--Extra O2 Col-->\n          <ng-container matColumnDef=\"extraO2\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> Extra <br/> O2 </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.extraO2.val}} </td>\n          </ng-container>\n\n          <!--Fever Col-->\n          <ng-container matColumnDef=\"fever\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'fever_icon' class = 'icon'>\n              <br/>\n              Fever\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.fever.val}} </td>\n          </ng-container>\n\n          <!--Breathing info-->\n          <ng-container matColumnDef=\"breathingInfo\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> Breathing <br/> Info </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.measureResults.breathingInfo.val}} </td>\n          </ng-container>\n\n          <!--Alerts Col-->\n          <ng-container matColumnDef=\"alerts\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'alerts_icon' class = 'icon'>\n              <br/>\n              Alerts\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.alerts}} </td>\n          </ng-container>\n\n          <!--Progress Col-->\n          <ng-container matColumnDef=\"progress\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\">\n              <img [src] = 'progress_icon' class = 'icon'>\n              <br/>\n              Progress\n            </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.progress}} </td>\n          </ng-container>\n\n          <!--Score Col-->\n          <ng-container matColumnDef=\"score\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"> Score </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.score}} </td>\n          </ng-container>\n\n          <!--Data Col-->\n          <ng-container matColumnDef=\"data\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)='patientData(element)'>\n                <mat-icon>assignment_ind</mat-icon>\n            </button>\n            </td>\n          </ng-container>\n\n          <!--Release Col-->\n          <ng-container matColumnDef=\"release\">\n            <th mat-header-cell *matHeaderCellDef class=\"col_class\"></th>\n            <td mat-cell *matCellDef=\"let element\">\n              <button mat-icon-button (click)='releasePatient(element)'>\n                <mat-icon>highlight_off</mat-icon>\n            </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" \n          [ngClass]=\"{'make-red': row.score >= 7, \n                      'make-green': row.score <2, \n                      'make-yellow': row.score >= 2 && row.score<5,\n                      'make-orange': row.score >= 5 && row.score<7}\"></tr>\n          \n\n    </table>\n</div>\n\n<br/>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/set-default-hospital/set-default-hospital.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/set-default-hospital/set-default-hospital.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSetDefaultHospitalSetDefaultHospitalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Set Default Hospital</h1>\n<form>\n    <mat-form-field style=\"width: 230px;\">\n        <mat-select [(value)]=\"hospital.name\" > <!--(selectionChange) = 'setSensors()'-->\n            <mat-option *ngFor=\"let h of hospitalsList\" [value]=\"h\">{{h}}</mat-option>\n        </mat-select>\n    </mat-form-field>\n    <label style=\"visibility: hidden;\">...</label>\n    <button mat-raised-button color='primary' (click)='SetClick()'>Set</button>\n</form>\n\n\n\n<h3>Add hospital to list:</h3>\n\n<form>\n    <mat-form-field style=\"width: 230px;\">\n        <input matInput type=\"text\" placeholder=\"New hospital\" [(ngModel)]=\"newHospital\" name=\"newHospital\">\n      </mat-form-field>\n      <label style=\"visibility: hidden;\">...</label>\n      <button mat-raised-button color='primary' (click)='AddHospital()'>Add</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-divider></mat-divider>\n<footer color='primary'>\n    <!--TODO: maybe add content-->\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color='primary'>\n    <mat-toolbar-row>\n        <a routerLink=\"\">\n            <div>\n                <span (click)='OnClick()'>\n                    <img [src]='logo_path' height='170px' style=\"position: relative; left: -30px; top:5px\"/>\n                </span>\n            </div>\n        </a>\n\n        <!--<label style=\"visibility: hidden;\">\n            ................................................................\n        </label>-->\n\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"position: absolute; right: 40px;\">\n            <mat-icon>settings</mat-icon>\n        </button>\n        \n            <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item (click)='newSensor()'>New sensor</button>\n                <button mat-menu-item (click)='setHospital()'>Set hospital</button>\n            </mat-menu>\n\n            <button mat-icon-button (click)='OnClick()' style=\"position: absolute; right: 0;\">\n                <mat-icon>home</mat-icon>\n            </button>\n\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<!--\n    <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"toggleSideBar()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <span> APP LOGO </span>\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>settings</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>help_outline</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\n                        <mat-icon>person_outline</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                            <mat-icon>exit_to_app</mat-icon>\n                            Sign out\n                        </button>\n                    </mat-menu>\n\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modules/new-sensor/new-sensor.component */
    "./src/app/modules/new-sensor/new-sensor.component.ts");
    /* harmony import */


    var _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/patient-release/patient-release.component */
    "./src/app/modules/patient-release/patient-release.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/patient-data/patient-data.component */
    "./src/app/modules/patient-data/patient-data.component.ts");
    /* harmony import */


    var _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/new-patient/new-patient.component */
    "./src/app/modules/new-patient/new-patient.component.ts");
    /* harmony import */


    var _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/patients/patients.component */
    "./src/app/modules/patients/patients.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/default/default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var _modules_set_default_hospital_set_default_hospital_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/set-default-hospital/set-default-hospital.component */
    "./src/app/modules/set-default-hospital/set-default-hospital.component.ts");

    var routes = [{
      path: '',
      component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
      children: [{
        path: '',
        component: _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_5__["PatientsComponent"]
      }, {
        path: 'new-patient',
        component: _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_4__["NewPatientComponent"]
      }, {
        path: 'patient-data',
        component: _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_3__["PatientDataComponent"]
      }, {
        path: 'release-document',
        component: _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_2__["PatientReleaseComponent"]
      }, {
        path: 'new-sensor',
        component: _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_1__["NewSensorComponent"]
      }, {
        path: 'set-default-hospital',
        component: _modules_set_default_hospital_set_default_hospital_component__WEBPACK_IMPORTED_MODULE_9__["SetDefaultHospitalComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: ELASTIC_HOST, REDISFLAG, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ELASTIC_HOST", function () {
      return ELASTIC_HOST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REDISFLAG", function () {
      return REDISFLAG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/app-config.service */
    "./src/app/services/app-config.service.ts");

    var ELASTIC_HOST;
    var REDISFLAG;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(config) {
        _classCallCheck(this, AppComponent);

        this.config = config;
        this.title = 'covid19UI'; //console.log('--------------')
        //console.log(this.config)

        ELASTIC_HOST = this.config.getElastic();
        REDISFLAG = this.config.getRedisFlag();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(document).ready(function () {
            // debugger;   
            // alert('we call alert from JQuery');
            var resp = [];
            var err = [];
            var auth = 'elastic:VfuNDVwQqcnJmdLVsNFNoZgI';
            var port = 9243;
            var protocol = 'https';
            var hostUrls = ['1ef7bcb100ab4a95b850383f561c435f.us-east-1.aws.found.io'];
            var hosts = hostUrls.map(function (host) {
              return {
                protocol: protocol,
                host: host,
                port: port,
                auth: auth
              };
            }); // debugger;

            var client = new $.es.Client({
              // hosts: hosts
              host: ELASTIC_HOST
            });
            resp = client.cluster.health({}); // alert(resp);

            resp = client.ping({
              requestTimeout: 30000
            }); //debugger;

            var result = client.search({
              index: 'patients_v1',
              size: 1000
            }, function (err, resp, status) {
              if (resp) {
                //debugger;
                var exportData = resp.hits.hits; //console.log(exportData);

                exportData.forEach(function (p) {
                  //console.log('------')
                  //console.log(sensor._source.unit_id)
                  if (p._source.patient_Id !== undefined) {
                    _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__["PATIENTS"].push(p._source);
                  }
                });
              } else {}
            }); //

            var result = client.search({
              index: 'sensors_v1',
              size: 1000
            }, function (err, resp, status) {
              if (resp) {
                //debugger;
                var exportData = resp.hits.hits; //console.log(exportData);

                exportData.forEach(function (sensor) {
                  //console.log('------')
                  //console.log(sensor._source.unit_id)
                  if (sensor._source.unit_id !== undefined) {
                    _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__["SENSORS"].push(sensor._source);
                  }
                });
              } else {}
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layouts/default/default.module */
    "./src/app/layouts/default/default.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_app_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/app-config.service */
    "./src/app/services/app-config.service.ts");

    var initializerConfigFn = function initializerConfigFn(appConfig) {
      return function () {
        return appConfig.loadAppConfig();
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_2__["DefaultModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"] // SocketIoModule.forRoot(config)
      ],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"],
        useFactory: initializerConfigFn,
        multi: true,
        deps: [_services_app_config_service__WEBPACK_IMPORTED_MODULE_9__["AppConfigService"]]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/interfaces/PersonData.ts":
  /*!******************************************!*\
    !*** ./src/app/interfaces/PersonData.ts ***!
    \******************************************/

  /*! exports provided: PersonalData, HospitalizationInfo, PersonSettings, AlertData, PersonHistory, DBPatient, MeasureResultsUI, PersonHealthData, DEFAULT_HOSPITAL, DEFAULT_PERSON_SETTINGS, DEFAULT_PERSON_HISTORY, HEALTH_DATA, SENSORS, PATIENTS, PATIENT_STATUS_LIST, MEASURMENT_RESULTS */

  /***/
  function srcAppInterfacesPersonDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalData", function () {
      return PersonalData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalizationInfo", function () {
      return HospitalizationInfo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonSettings", function () {
      return PersonSettings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertData", function () {
      return AlertData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonHistory", function () {
      return PersonHistory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DBPatient", function () {
      return DBPatient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeasureResultsUI", function () {
      return MeasureResultsUI;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonHealthData", function () {
      return PersonHealthData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_HOSPITAL", function () {
      return DEFAULT_HOSPITAL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSON_SETTINGS", function () {
      return DEFAULT_PERSON_SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_PERSON_HISTORY", function () {
      return DEFAULT_PERSON_HISTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HEALTH_DATA", function () {
      return HEALTH_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SENSORS", function () {
      return SENSORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PATIENTS", function () {
      return PATIENTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PATIENT_STATUS_LIST", function () {
      return PATIENT_STATUS_LIST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MEASURMENT_RESULTS", function () {
      return MEASURMENT_RESULTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PersonalData = function PersonalData() {
      _classCallCheck(this, PersonalData);
    };

    var HospitalizationInfo = function HospitalizationInfo() {
      _classCallCheck(this, HospitalizationInfo);
    };

    var PersonSettings = function PersonSettings() {
      _classCallCheck(this, PersonSettings);
    };

    var AlertData = function AlertData() {
      _classCallCheck(this, AlertData);
    };

    var PersonHistory = function PersonHistory() {
      _classCallCheck(this, PersonHistory);
    };

    var DBPatient = function DBPatient() {
      _classCallCheck(this, DBPatient);
    };

    var MeasureResultsUI = function MeasureResultsUI() {
      _classCallCheck(this, MeasureResultsUI);
    };

    var PersonHealthData = function PersonHealthData() {
      _classCallCheck(this, PersonHealthData);
    };

    var DEFAULT_HOSPITAL = {
      name: 'Asuta'
    };
    var DEFAULT_PERSON_SETTINGS = {
      minHR: 51,
      maxHR: 90,
      minBR: 12,
      maxBR: 20,
      minSpO2: 96,
      maxSpO2: 100
    };
    var DEFAULT_PERSON_HISTORY = {
      alerts: [],
      scoring: []
    };
    var HEALTH_DATA = [];
    var SENSORS = [];
    var PATIENTS = [];
    var PATIENT_STATUS_LIST = [];
    var MEASURMENT_RESULTS = [];
    /*
    async function esTimeQuery() {
      var result = await client_prd.search({
        index: 'measure_results_v5',
        size: 100,
        body: {
          sort: [{ "timeTag": { "order": "desc" } }],
          query: {
            // CAUTION: dear Natali, do not query 'gte' for too long ago, it might not be efficient,
            //          let's say that an hour is enough
            "range": { "timeTag": { "gte": "2020-04-13T16:22:02.997", "lt": "now" } }
          },
        }
      },
        function (err, resp, status) {
          if (resp) {
            // do something
            console.log(resp.hits.hits);
          }
          else {
            console.log(err);
          }
        });
    }
    */

    /***/
  },

  /***/
  "./src/app/layouts/default/default.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/layouts/default/default.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsDefaultDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxDb3ZpZDE5LXdlYl9zZXJ2ZXJcXENvdmlkMTlfU3ByaW50TVJfY2xpZW50XFxTUkMtY292aWQxOVVJL3NyY1xcYXBwXFxsYXlvdXRzXFxkZWZhdWx0XFxkZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layouts/default/default.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/layouts/default/default.component.ts ***!
    \******************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcAppLayoutsDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DefaultComponent = /*#__PURE__*/function () {
      function DefaultComponent() {
        _classCallCheck(this, DefaultComponent);
      }

      _createClass(DefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefaultComponent;
    }();

    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-default',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./default.component.scss */
      "./src/app/layouts/default/default.component.scss"))["default"]]
    })], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/layouts/default/default.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/layouts/default/default.module.ts ***!
    \***************************************************/

  /*! exports provided: DefaultModule */

  /***/
  function srcAppLayoutsDefaultDefaultModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultModule", function () {
      return DefaultModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modules_set_default_hospital_set_default_hospital_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../modules/set-default-hospital/set-default-hospital.component */
    "./src/app/modules/set-default-hospital/set-default-hospital.component.ts");
    /* harmony import */


    var _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../modules/new-sensor/new-sensor.component */
    "./src/app/modules/new-sensor/new-sensor.component.ts");
    /* harmony import */


    var _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../modules/patient-release/patient-release.component */
    "./src/app/modules/patient-release/patient-release.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_history_patient_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-history/patient-history.component */
    "./src/app/modules/patient-data/patient-history/patient-history.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_settings_patient_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-settings/patient-settings.component */
    "./src/app/modules/patient-data/patient-settings/patient-settings.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_bp_monitor_bp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_br_graph_monitor_br_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_sp_o2_graph_monitor_sp_o2_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_ecg_monitor_ecg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_blood_pressure_monitor_blood_pressure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_heart_rate_monitor_heart_rate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_spo2_monitor_spo2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_breathing_rate_monitor_breathing_rate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_monitor_temperature_monitor_temperature_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component */
    "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_monitor_patient_monitor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-monitor/patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _modules_patient_data_auxilary_data_auxilary_data_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./../../modules/patient-data/auxilary-data/auxilary-data.component */
    "./src/app/modules/patient-data/auxilary-data/auxilary-data.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_personal_data_patient_personal_data_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-personal-data/patient-personal-data.component */
    "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.ts");
    /* harmony import */


    var _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./../../modules/patient-data/patient-data.component */
    "./src/app/modules/patient-data/patient-data.component.ts");
    /* harmony import */


    var _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./../../modules/new-patient/new-patient.component */
    "./src/app/modules/new-patient/new-patient.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./../../modules/patients/patients.component */
    "./src/app/modules/patients/patients.component.ts");
    /* harmony import */


    var _default_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./default.component */
    "./src/app/layouts/default/default.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DefaultModule = function DefaultModule() {
      _classCallCheck(this, DefaultModule);
    };

    DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_23__["NgModule"])({
      declarations: [_default_component__WEBPACK_IMPORTED_MODULE_22__["DefaultComponent"], _modules_patients_patients_component__WEBPACK_IMPORTED_MODULE_21__["PatientsComponent"], _modules_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_19__["NewPatientComponent"], _modules_patient_data_patient_data_component__WEBPACK_IMPORTED_MODULE_18__["PatientDataComponent"], _modules_patient_data_patient_personal_data_patient_personal_data_component__WEBPACK_IMPORTED_MODULE_17__["PatientPersonalDataComponent"], _modules_patient_data_patient_settings_patient_settings_component__WEBPACK_IMPORTED_MODULE_5__["PatientSettingsComponent"], _modules_patient_data_auxilary_data_auxilary_data_component__WEBPACK_IMPORTED_MODULE_16__["AuxilaryDataComponent"], _modules_patient_data_patient_monitor_patient_monitor_component__WEBPACK_IMPORTED_MODULE_15__["PatientMonitorComponent"], _modules_patient_data_patient_monitor_monitor_bp_monitor_bp_component__WEBPACK_IMPORTED_MODULE_6__["MonitorBpComponent"], _modules_patient_data_patient_monitor_monitor_sp_o2_graph_monitor_sp_o2_graph_component__WEBPACK_IMPORTED_MODULE_8__["MonitorSpO2GraphComponent"], _modules_patient_data_patient_monitor_monitor_br_graph_monitor_br_graph_component__WEBPACK_IMPORTED_MODULE_7__["MonitorBRGraphComponent"], _modules_patient_data_patient_monitor_monitor_ecg_monitor_ecg_component__WEBPACK_IMPORTED_MODULE_9__["MonitorECGComponent"], _modules_patient_data_patient_monitor_monitor_blood_pressure_monitor_blood_pressure_component__WEBPACK_IMPORTED_MODULE_10__["MonitorBloodPressureComponent"], _modules_patient_data_patient_monitor_monitor_heart_rate_monitor_heart_rate_component__WEBPACK_IMPORTED_MODULE_11__["MonitorHeartRateComponent"], _modules_patient_data_patient_monitor_monitor_spo2_monitor_spo2_component__WEBPACK_IMPORTED_MODULE_12__["MonitorSpo2Component"], _modules_patient_data_patient_monitor_monitor_breathing_rate_monitor_breathing_rate_component__WEBPACK_IMPORTED_MODULE_13__["MonitorBreathingRateComponent"], _modules_patient_data_patient_monitor_monitor_temperature_monitor_temperature_component__WEBPACK_IMPORTED_MODULE_14__["MonitorTemperatureComponent"], _modules_patient_data_patient_history_patient_history_component__WEBPACK_IMPORTED_MODULE_4__["PatientHistoryComponent"], _modules_patient_release_patient_release_component__WEBPACK_IMPORTED_MODULE_3__["PatientReleaseComponent"], _modules_new_sensor_new_sensor_component__WEBPACK_IMPORTED_MODULE_2__["NewSensorComponent"], _modules_set_default_hospital_set_default_hospital_component__WEBPACK_IMPORTED_MODULE_1__["SetDefaultHospitalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_29__["ChartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_30__["NgApexchartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"]]
    })], DefaultModule);
    /***/
  },

  /***/
  "./src/app/modules/new-patient/new-patient.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modules/new-patient/new-patient.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNewPatientNewPatientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_class {\n  width: 50%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-form2 {\n  min-width: 150px;\n  max-width: 1000px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\n#info_form {\n  display: inline-block;\n  margin-top: 10px;\n  margin-right: 100px;\n  width: 500px;\n}\n\n#remarks_form {\n  display: inline-block;\n  margin-top: 10px;\n  width: 500px;\n}\n\n/*label {\n    width: 100%;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXctcGF0aWVudC9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcQ292aWQxOS13ZWJfc2VydmVyXFxDb3ZpZDE5X1NwcmludE1SX2NsaWVudFxcU1JDLWNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xcbmV3LXBhdGllbnRcXG5ldy1wYXRpZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25ldy1wYXRpZW50L25ldy1wYXRpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0FDREo7O0FER0E7RUFDQSxXQUFBO0FDQUE7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNESjs7QURLQTs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmV3LXBhdGllbnQvbmV3LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2NsYXNzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAvL3dpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmV4YW1wbGUtZm9ybTIge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgLy93aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcblxyXG4jaW5mb19mb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDsgXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAvLyBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxufVxyXG5cclxuI3JlbWFya3NfZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIC8vIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcblxyXG4vKmxhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Ki8iLCIuZGl2X2NsYXNzIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mb3JtMiB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbiNpbmZvX2Zvcm0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuI3JlbWFya3NfZm9ybSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4vKmxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbn0qLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/new-patient/new-patient.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/new-patient/new-patient.component.ts ***!
    \**************************************************************/

  /*! exports provided: NewPatientComponent */

  /***/
  function srcAppModulesNewPatientNewPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewPatientComponent", function () {
      return NewPatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_patients_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/patients.service */
    "./src/app/services/patients.service.ts");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Months = [{
      num: 1,
      name: 'January'
    }, {
      num: 2,
      name: 'February'
    }, {
      num: 3,
      name: 'March'
    }, {
      num: 4,
      name: 'April'
    }, {
      num: 5,
      name: 'May'
    }, {
      num: 6,
      name: 'June'
    }, {
      num: 7,
      name: 'July'
    }, {
      num: 8,
      name: 'August'
    }, {
      num: 9,
      name: 'September'
    }, {
      num: 10,
      name: 'October'
    }, {
      num: 11,
      name: 'November'
    }, {
      num: 12,
      name: 'December'
    }];

    var NewPatientComponent = /*#__PURE__*/function () {
      function NewPatientComponent(router, currPersonService, patientsService) {
        var _this = this;

        _classCallCheck(this, NewPatientComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.patientsService = patientsService;
        this.firstName = '';
        this.last4Digit = '';
        this.inRisk = false;
        this.sensor = {
          unit_id: 'None',
          name_tag: 'None',
          time_tag: "2020-04-13T09:10:19.698Z",
          sensor_name: '',
          vendor_name: 'EarlySense',
          description: '',
          institute_name: '',
          department_name: '',
          currently_in_use: 'false'
        };
        this.displayedColumns = ['unit_id', 'name_tag', 'vendor_name', 'remove'];
        this.sensorsDataSource = [];
        this.sensors = [];
        this.remarks = '';
        this.weight = 0;
        this.gender = '';
        this.minHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_SETTINGS"].minHR;
        this.maxHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_SETTINGS"].maxHR;
        this.minSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_SETTINGS"].minSpO2;
        this.maxSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_SETTINGS"].maxSpO2;
        this.minBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_SETTINGS"].minBR;
        this.maxBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_SETTINGS"].maxBR;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this.newId = person.patient_Id; //console.log(this.newId)     

          _this.daysLst = _this.incRange(1, 31);
          _this.monthsLst = Months;
          _this.yearsLst = _this.decRange(1920, 2020);

          _this.setSensors();
        });
      }

      _createClass(NewPatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "decRange",
        value: function decRange(start, end) {
          return Array.from({
            length: end - start + 1
          }, function (v, k) {
            return end - k;
          });
        }
      }, {
        key: "incRange",
        value: function incRange(start, end) {
          return Array.from({
            length: end - start + 1
          }, function (v, k) {
            return start + k;
          });
        }
      }, {
        key: "AddSensorToPatient",
        value: function AddSensorToPatient() {
          if (this.sensor.unit_id === 'None') {
            return;
          }

          this.sensor.currently_in_use = 'true';
          var newPatientSensor = {
            unit_id: this.sensor.unit_id,
            name_tag: this.sensor.name_tag,
            time_tag: "2020-04-13T09:10:19.698Z",
            sensor_name: this.sensor.name_tag,
            vendor_name: this.sensor.vendor_name,
            description: this.sensor.description,
            institute_name: this.sensor.institute_name,
            department_name: this.sensor.department_name,
            currently_in_use: 'true'
          };
          this.sensorsDataSource.push(newPatientSensor);
          this.table.renderRows(); // console.log(this.sensorsDataSource)

          this.sensor = {
            unit_id: 'None',
            name_tag: 'None',
            time_tag: "2020-04-13T09:10:19.698Z",
            sensor_name: '',
            vendor_name: 'EarlySense',
            description: '',
            institute_name: '',
            department_name: '',
            currently_in_use: 'false'
          };
          this.setSensors();
        }
      }, {
        key: "removeSensorFromPatient",
        value: function removeSensorFromPatient(element) {
          var i = this.sensorsDataSource.indexOf(element);
          this.sensorsDataSource[i].currently_in_use = 'false';
          this.sensorsDataSource.splice(i, 1);
          this.table.renderRows();
          this.setSensors();
        }
      }, {
        key: "setSensors",
        value: function setSensors() {
          var _this2 = this;

          this.sensors = [];

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["SENSORS"].forEach(function (s) {
            if (s.unit_id !== 'None' && _this2.checkIfSensorInList(s)) {
              s.currently_in_use = 'true';
            }

            if (s.currently_in_use === 'false') {
              _this2.sensors.push(s);
            }
          });
        }
      }, {
        key: "checkIfSensorInList",
        value: function checkIfSensorInList(currSensor) {
          for (var i = 0; i < this.sensorsDataSource.length; i++) {
            if (this.sensorsDataSource[i].unit_id === currSensor.unit_id) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "verifyInput",
        value: function verifyInput() {
          return this.firstName === 'Write fisrt name here...' || this.last4Digit === 'Write last 4 ID digits here...' || this.gender === '' || this.day === undefined || this.month === undefined || this.year === undefined || this.department === undefined || this.roomNumber === undefined || this.bedNumber === undefined ? false : true;
        }
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (!this.verifyInput()) {
            alert('Please check that all of the fields are set properly');
            return;
          }

          if (this.remarks === 'Write remarks here...') {
            this.remarks = '';
          }

          if (this.sensorsDataSource.length === 0) {
            alert('Please choose at least one sensor for the patient');
            return;
          }

          var newPersonSettings = {
            minHR: this.minHR,
            maxHR: this.maxHR,
            minBR: this.minBR,
            maxBR: this.maxBR,
            minSpO2: this.minSpO2,
            maxSpO2: this.maxSpO2
          };

          if (this.bedLocation === undefined) {
            this.bedLocation = '';
          }

          var dateOfBirth = new Date(this.year, this.month.num, this.day);
          var timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
          var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

          if (!this.inRisk) {
            if (age >= 65) {
              this.inRisk = true;
            }
          }

          var newPatient = {
            patient_Id: this.newId,
            time_tag: '2020-04-13T19:30:08.514Z',
            first_name: this.firstName,
            last4Digit: this.last4Digit,
            institute_name: _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_HOSPITAL"].name,
            department_name: this.department,
            room_identifier: this.roomNumber,
            bed_identifier: this.bedNumber,
            bed_location: this.bedLocation,
            date_of_birth: this.year + '-' + this.getNumStr(this.month.num) + '-' + this.getNumStr(this.day),
            weight: this.weight,
            gender: this.gender,
            personal: {
              Name: this.firstName,
              Age: age,
              Gender: 'male',
              HighRiskGroup: this.inRisk
            },
            hospitalization: null,
            measureResults: {
              heartRate: 68,
              bloodPresure: '120/80',
              spO2: 99,
              breathingRate: 12,
              extraO2: 'NO',
              fever: 37,
              breathingInfo: ''
            },
            alerts: '',
            progress: '',
            score: 0,
            history: _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PERSON_HISTORY"],
            settings: newPersonSettings,
            sensors_list: this.sensorsDataSource
          }; // this.patientListService.newPatient(newPatient);

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_4__["HEALTH_DATA"].push(newPatient);

          alert('Patient added');
          this.currPersonService.nextMessage(newPatient); //this.router.navigate(['/patient-data']);

          var newPatientDB = this.getPatientToPost(newPatient);
          this.patientsService.addPatient(newPatientDB).subscribe(function (patient) {});
        }
      }, {
        key: "getPatientToPost",
        value: function getPatientToPost(newPatient) {
          var sensorsList = [];
          newPatient.sensors_list.forEach(function (s) {
            sensorsList.push({
              unit_Id: s.unit_id,
              sensor_name: s.sensor_name,
              vendor_name: s.vendor_name,
              description: s.description
            });
          });
          var newPatientDB = {
            patient_Id: newPatient.patient_Id,
            //patient_Id: 'a64ce230-73db-11ea-9ca9-e56bb32f5931',
            time_tag: newPatient.time_tag,
            first_name: newPatient.first_name,
            last4Digit: newPatient.last4Digit,
            institute_name: newPatient.institute_name,
            department_name: newPatient.department_name,
            room_identifier: newPatient.room_identifier,
            bed_identifier: newPatient.bed_identifier,
            bed_location: newPatient.bed_location,
            date_of_birth: newPatient.date_of_birth,
            risk_group: newPatient.personal.HighRiskGroup + '',
            weight: newPatient.weight + '',
            gender: newPatient.gender,
            normal_range_list: [],
            sensors_list: sensorsList
          };
          return newPatientDB;
        }
      }, {
        key: "getNumStr",
        value: function getNumStr(num) {
          if (num > 9) return num + '';
          return '0' + num;
        }
      }]);

      return NewPatientComponent;
    }();

    NewPatientComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }, {
        type: _services_patients_service__WEBPACK_IMPORTED_MODULE_1__["PatientsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('table', null)], NewPatientComponent.prototype, "table", void 0);
    NewPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-new-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-patient/new-patient.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-patient.component.scss */
      "./src/app/modules/new-patient/new-patient.component.scss"))["default"]]
    })], NewPatientComponent);
    /***/
  },

  /***/
  "./src/app/modules/new-sensor/new-sensor.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modules/new-sensor/new-sensor.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesNewSensorNewSensorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_class {\n  width: 50%;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-form2 {\n  min-width: 150px;\n  max-width: 1000px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXctc2Vuc29yL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxDb3ZpZDE5LXdlYl9zZXJ2ZXJcXENvdmlkMTlfU3ByaW50TVJfY2xpZW50XFxTUkMtY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxuZXctc2Vuc29yXFxuZXctc2Vuc29yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25ldy1zZW5zb3IvbmV3LXNlbnNvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZXctc2Vuc29yL25ldy1zZW5zb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2X2NsYXNzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAvL3dpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmV4YW1wbGUtZm9ybTIge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgLy93aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuZGl2X2NsYXNzIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mb3JtMiB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/new-sensor/new-sensor.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/new-sensor/new-sensor.component.ts ***!
    \************************************************************/

  /*! exports provided: NewSensorComponent */

  /***/
  function srcAppModulesNewSensorNewSensorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewSensorComponent", function () {
      return NewSensorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_sensors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/sensors.service */
    "./src/app/services/sensors.service.ts");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewSensorComponent = /*#__PURE__*/function () {
      function NewSensorComponent(router, sensorsService) {
        _classCallCheck(this, NewSensorComponent);

        this.router = router;
        this.sensorsService = sensorsService;
        this.sensorName = '';
        this.sensorVendor = '';
        this.description = '';
      }

      _createClass(NewSensorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnClick",
        value: function OnClick() {
          if (!this.validate()) {
            alert('Please check that all of the fields are set properly');
            return;
          }

          var new_sensor = {
            unit_id: this.getNextID(),
            name_tag: this.sensorName,
            time_tag: '2020-04-13T09:47:09.981Z',
            sensor_name: '',
            vendor_name: this.sensorVendor,
            description: this.description,
            institute_name: this.institute,
            department_name: this.department,
            currently_in_use: 'false'
          };

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_2__["SENSORS"].push(new_sensor);

          alert('Sensor added to list'); //this.router.navigate(['/']);

          this.sensorsService.addSensor(new_sensor).subscribe(function (sensor) {});
        }
      }, {
        key: "validate",
        value: function validate() {
          if (this.sensorID === '' || this.sensorVendor === '') {
            return false;
          }

          return true;
        }
      }, {
        key: "getNextID",
        value: function getNextID() {
          return _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_2__["SENSORS"].length + '';
        }
      }]);

      return NewSensorComponent;
    }();

    NewSensorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_sensors_service__WEBPACK_IMPORTED_MODULE_1__["SensorsService"]
      }];
    };

    NewSensorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-new-sensor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-sensor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/new-sensor/new-sensor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-sensor.component.scss */
      "./src/app/modules/new-sensor/new-sensor.component.scss"))["default"]]
    })], NewSensorComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/auxilary-data/auxilary-data.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/patient-data/auxilary-data/auxilary-data.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataAuxilaryDataAuxilaryDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".visible {\n  visibility: visible;\n  height: 290px;\n  width: 350px;\n}\n\n.hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvYXV4aWxhcnktZGF0YS9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcQ292aWQxOS13ZWJfc2VydmVyXFxDb3ZpZDE5X1NwcmludE1SX2NsaWVudFxcU1JDLWNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxhdXhpbGFyeS1kYXRhXFxhdXhpbGFyeS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9hdXhpbGFyeS1kYXRhL2F1eGlsYXJ5LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvYXV4aWxhcnktZGF0YS9hdXhpbGFyeS1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGhlaWdodDogMjkwcHg7IFxyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59IiwiLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBoZWlnaHQ6IDI5MHB4O1xuICB3aWR0aDogMzUwcHg7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/auxilary-data/auxilary-data.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/patient-data/auxilary-data/auxilary-data.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AuxilaryDataComponent */

  /***/
  function srcAppModulesPatientDataAuxilaryDataAuxilaryDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuxilaryDataComponent", function () {
      return AuxilaryDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var PATIENT_AUXILARY_DATA = {
      patient_id: '',
      auxilary_data: undefined
    };

    var AuxilaryDataComponent = /*#__PURE__*/function () {
      //the study can be a spirometer, a stethoscope or an ECG study.
      function AuxilaryDataComponent(currPersonService, s) {
        _classCallCheck(this, AuxilaryDataComponent);

        this.currPersonService = currPersonService;
        this.s = s;
        this.type = '';
        this.iframe_src = this.s.bypassSecurityTrustResourceUrl('');
        this.iframe_is_set = false;
        this.visibility = 1;
        this.currPersonService.sharedMessage.subscribe(function (patient) {
          PATIENT_AUXILARY_DATA.patient_id = patient.patient_Id;
        });
      }

      _createClass(AuxilaryDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //console.log('--------------------')
          this.timer = setInterval(function () {
            _this3.getAuxilaryData();

            if (PATIENT_AUXILARY_DATA.auxilary_data !== undefined && !_this3.iframe_is_set) {
              _this3.visibility = -1; //console.log(PATIENT_AUXILARY_DATA.auxilary_data)

              PATIENT_AUXILARY_DATA.auxilary_data.study.data.forEach(function (t) {
                _this3.type = _this3.type + t.type + '|';
              });
              _this3.type = _this3.type.substring(0, _this3.type.length - 1);
              _this3.type = PATIENT_AUXILARY_DATA.auxilary_data.study.data[0].type; //console.log(this.type)

              _this3.iframe_src = _this3.s.bypassSecurityTrustResourceUrl(PATIENT_AUXILARY_DATA.auxilary_data.study.link);
              _this3.iframe_is_set = true; //console.log(PATIENT_AUXILARY_DATA.auxilary_data.study.link)
            }
          }, 1000 * 1);
        }
      }, {
        key: "getAuxilaryData",
        value: function getAuxilaryData() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var client, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    client = new $.es.Client({
                      // hosts: hosts
                      host: _app_component__WEBPACK_IMPORTED_MODULE_1__["ELASTIC_HOST"]
                    });
                    result = client.search({
                      index: 'measure_results_v5',
                      size: 1000,
                      body: {
                        sort: [{
                          "timeTag": {
                            "order": "desc"
                          }
                        }],
                        query: {
                          match: {
                            patientId: PATIENT_AUXILARY_DATA.patient_id
                          }
                        }
                      }
                    }, function (err, resp, status) {
                      if (resp) {
                        var exportData = resp.hits.hits; //console.log('-------------')
                        //console.log(exportData);

                        var patientMeasureRes = undefined;

                        for (var i = 0; i < exportData.length; i++) {
                          if (exportData[i]._source.auxilary_data != undefined) {
                            patientMeasureRes = exportData[i]._source;
                            break;
                          }
                        }

                        var aux_data = patientMeasureRes.auxilary_data; //console.log(patientMeasureRes);

                        PATIENT_AUXILARY_DATA.auxilary_data = aux_data; //console.log(PATIENT_AUXILARY_DATA);
                      } else {}
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return AuxilaryDataComponent;
    }();

    AuxilaryDataComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    AuxilaryDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-auxilary-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auxilary-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/auxilary-data/auxilary-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auxilary-data.component.scss */
      "./src/app/modules/patient-data/auxilary-data/auxilary-data.component.scss"))["default"]]
    })], AuxilaryDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-data.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-data.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#patient_personal_info {\n  display: inline-block;\n  margin-right: 10px;\n  width: 360px;\n  margin-top: 10px;\n}\n\n#monitor {\n  display: inline-block;\n  width: 540px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXENvdmlkMTktd2ViX3NlcnZlclxcQ292aWQxOV9TcHJpbnRNUl9jbGllbnRcXFNSQy1jb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXHBhdGllbnQtZGF0YVxccGF0aWVudC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FESUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhdGllbnRfcGVyc29uYWxfaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgLy9oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4jbW9uaXRvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgd2lkdGg6IDU0MHB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvL2hlaWdodDogMzAwcHg7XHJcbn0iLCIjcGF0aWVudF9wZXJzb25hbF9pbmZvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzNjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI21vbml0b3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1NDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-data.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-data.component.ts ***!
    \****************************************************************/

  /*! exports provided: PatientDataComponent */

  /***/
  function srcAppModulesPatientDataPatientDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientDataComponent", function () {
      return PatientDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientDataComponent = /*#__PURE__*/function () {
      function PatientDataComponent(currPersonService) {
        var _this4 = this;

        _classCallCheck(this, PatientDataComponent);

        this.currPersonService = currPersonService;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          return _this4.name = person.personal.Name;
        });
      }

      _createClass(PatientDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientDataComponent;
    }();

    PatientDataComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patient-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-data.component.scss */
      "./src/app/modules/patient-data/patient-data.component.scss"))["default"]]
    })], PatientDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-history/patient-history.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-history/patient-history.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientHistoryPatientHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#alerts_history {\n  display: inline-block;\n  margin-right: 10px;\n  width: 320px;\n  margin-top: 10px;\n  height: 300px;\n}\n\n#scoring_graph {\n  display: inline-block;\n  width: 500px;\n  margin-top: 10px;\n  height: 300px;\n}\n\n.header {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1oaXN0b3J5L0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxDb3ZpZDE5LXdlYl9zZXJ2ZXJcXENvdmlkMTlfU3ByaW50TVJfY2xpZW50XFxTUkMtY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50LWRhdGFcXHBhdGllbnQtaGlzdG9yeVxccGF0aWVudC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LWhpc3RvcnkvcGF0aWVudC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtaGlzdG9yeS9wYXRpZW50LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxlcnRzX2hpc3Rvcnkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy9ib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiNzY29yaW5nX2dyYXBoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59IiwiI2FsZXJ0c19oaXN0b3J5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuI3Njb3JpbmdfZ3JhcGgge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-history/patient-history.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-history/patient-history.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PatientHistoryComponent */

  /***/
  function srcAppModulesPatientDataPatientHistoryPatientHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientHistoryComponent", function () {
      return PatientHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientHistoryComponent = /*#__PURE__*/function () {
      //
      function PatientHistoryComponent(currPersonService) {
        var _this5 = this;

        _classCallCheck(this, PatientHistoryComponent);

        this.currPersonService = currPersonService;
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)'
        }];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this5.alerts = person.history.alerts;
          _this5.scoring = person.history.scoring;
          _this5.lineChartData = [{
            data: _this5.scoring,
            label: 'Patient Scoring'
          }];
          _this5.lineChartLabels = [];

          for (var i = 0; i < _this5.scoring.length; i++) {
            _this5.lineChartLabels.push('day ' + (i + 1));
          }
        });
      }

      _createClass(PatientHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientHistoryComponent;
    }();

    PatientHistoryComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patient-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-history/patient-history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-history.component.scss */
      "./src/app/modules/patient-data/patient-history/patient-history.component.scss"))["default"]]
    })], PatientHistoryComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBloodPressureMonitorBloodPressureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWJsb29kLXByZXNzdXJlL21vbml0b3ItYmxvb2QtcHJlc3N1cmUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: MonitorBloodPressureComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBloodPressureMonitorBloodPressureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorBloodPressureComponent", function () {
      return MonitorBloodPressureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorBloodPressureComponent = /*#__PURE__*/function () {
      function MonitorBloodPressureComponent() {
        _classCallCheck(this, MonitorBloodPressureComponent);

        this.mydata = [31, 40, 28, 51, 42, 109, 100];
        this.chartOptions = {
          series: [{
            //name: "series1",
            data: this.mydata
          }],
          chart: {
            id: 'realtime',
            height: 85,
            background: '#000',
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth"
          },
          xaxis: {
            labels: {
              show: false
            }
          },
          yaxis: {
            show: false,
            showAlways: false,
            showForNullSeries: false,
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              show: false
            }
          },
          tooltip: {}
        };
      }

      _createClass(MonitorBloodPressureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.timer = setInterval(function () {
            var fe = _this6.mydata.shift();

            _this6.mydata.push(fe);

            console.log(_this6.mydata); //this.chart.render();
            //this.chartOptions.series[0].data = this.mydata;

            console.log(_this6.chart); //this.chart.updateOptions()
            //this.chart.updateSeries
            //this.chart.responsive.shift();

            _this6.chart.updateSeries([{
              data: _this6.mydata
            }]);
          }, 1000); // this.chart.updateSeries()
        }
      }]);

      return MonitorBloodPressureComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chart", null)], MonitorBloodPressureComponent.prototype, "chart", void 0);
    MonitorBloodPressureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-blood-pressure',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-blood-pressure.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-blood-pressure.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-blood-pressure/monitor-blood-pressure.component.scss"))["default"]]
    })], MonitorBloodPressureComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBpMonitorBpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWJwL21vbml0b3ItYnAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MonitorBpComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBpMonitorBpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorBpComponent", function () {
      return MonitorBpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorBpComponent = /*#__PURE__*/function () {
      function MonitorBpComponent() {
        _classCallCheck(this, MonitorBpComponent);
      }

      _createClass(MonitorBpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.timer = setInterval(function () {
            var bp_h_tmp = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].Bp_h.val + '';
            var bp_l_tmp = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].Bp_l.val + '';
            _this7.bp_h = bp_h_tmp.substring(0, Math.min(5, bp_h_tmp.length));
            _this7.bp_l = bp_l_tmp.substring(0, Math.min(5, bp_l_tmp.length));
          }, 1000 * 0.5);
        }
      }]);

      return MonitorBpComponent;
    }();

    MonitorBpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-monitor-bp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-bp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-bp.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-bp/monitor-bp.component.scss"))["default"]]
    })], MonitorBpComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBrGraphMonitorBrGraphComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWJyLWdyYXBoL21vbml0b3ItYnItZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: MonitorBRGraphComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBrGraphMonitorBrGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorBRGraphComponent", function () {
      return MonitorBRGraphComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorBRGraphComponent = /*#__PURE__*/function () {
      function MonitorBRGraphComponent() {
        _classCallCheck(this, MonitorBRGraphComponent);

        this.mydata = [0, 0, 0, 0, 0, 0, 0];
        this.chartOptions = {
          series: [{
            //name: "series1",
            data: this.mydata
          }],
          chart: {
            id: 'realtime',
            height: 85,
            background: '#000',
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth",
            colors: ['#FFFF00']
          },
          xaxis: {
            labels: {
              show: false
            }
          },
          yaxis: {
            max: 100,
            show: false,
            showAlways: false,
            showForNullSeries: false,
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              show: false
            }
          },
          tooltip: {}
        };
      }

      _createClass(MonitorBRGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.timer = setInterval(function () {
            var fe = _this8.mydata.shift();

            _this8.mydata.push(_patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].BR.val); //console.log(this.mydata);
            //this.chart.render();
            //this.chartOptions.series[0].data = this.mydata;
            //console.log(this.chart);
            //this.chart.updateOptions()
            //this.chart.updateSeries
            //this.chart.responsive.shift();


            _this8.chart.updateSeries([{
              data: _this8.mydata
            }]);
          }, 1000); // this.chart.updateSeries()
        }
      }]);

      return MonitorBRGraphComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("chart", null)], MonitorBRGraphComponent.prototype, "chart", void 0);
    MonitorBRGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-monitor-br-graph',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-br-graph.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-br-graph.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-br-graph/monitor-br-graph.component.scss"))["default"]]
    })], MonitorBRGraphComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBreathingRateMonitorBreathingRateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: yellow;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: yellow;\n}\n\n.BR {\n  font-size: xx-large;\n  text-align: center;\n  color: yellow;\n  vertical-align: middle;\n  width: 80px;\n}\n\n.warning_visible {\n  width: 20px;\n  position: relative;\n  left: 0;\n  top: 3px;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItYnJlYXRoaW5nLXJhdGUvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXENvdmlkMTktd2ViX3NlcnZlclxcQ292aWQxOV9TcHJpbnRNUl9jbGllbnRcXFNSQy1jb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXHBhdGllbnQtZGF0YVxccGF0aWVudC1tb25pdG9yXFxtb25pdG9yLWJyZWF0aGluZy1yYXRlXFxtb25pdG9yLWJyZWF0aGluZy1yYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvbW9uaXRvci1icmVhdGhpbmctcmF0ZS9tb25pdG9yLWJyZWF0aGluZy1yYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBRUEsc0JBQUE7RUFFQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvbW9uaXRvci1icmVhdGhpbmctcmF0ZS9tb25pdG9yLWJyZWF0aGluZy1yYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHllbGxvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi5zcXVhcmV7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5CUntcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL3dpZHRoOiA3MHB4O1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvLyBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5nX3Zpc2libGUge1xyXG4gICAgd2lkdGg6IDIwcHg7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59IiwiLnRvcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXRvcDogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4uc3F1YXJlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5CUiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHllbGxvdztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi53YXJuaW5nX3Zpc2libGUge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDNweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: MonitorBreathingRateComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorBreathingRateMonitorBreathingRateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorBreathingRateComponent", function () {
      return MonitorBreathingRateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); //declare var $: any;
    //export const BrVal = {patientID:'', br: ''}


    var MonitorBreathingRateComponent = /*#__PURE__*/function () {
      function MonitorBreathingRateComponent() {
        _classCallCheck(this, MonitorBreathingRateComponent);

        this.currBr = {
          br: '',
          "new": true
        };
        this.warning_icon = './../../../../../assets/icons/warning-icon-red.png';
        this.black_icon = './../../../../../assets/icons/black-icon.png';
        this.warning = '';
      }

      _createClass(MonitorBreathingRateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.timer = setInterval(function () {
            var temp = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].BR.val + '';
            _this9.currBr.br = temp.substring(0, Math.min(4, temp.length));
            _this9.currBr["new"] = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].BR["new"];

            if (_this9.currBr["new"]) {
              _this9.warning = _this9.black_icon;
            } else {
              _this9.warning = _this9.warning_icon;
            } //this.getPatientInfo();

          }, 1000 * 0.5);
        }
        /*async getPatientInfo(){
          var client = new $.es.Client({
            // hosts: hosts
            host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
          });
              var result = client.search({
            index: 'measure_results_v4',
            size: 1000,
            /*body:{
              query:{
                match:{patientId: '88646e00-7d45-11ea-ac59-2fbe9b8b5360'}
              }
            }
          
            },
              function(err, resp, status) {
                if (resp) {
                  var exportData = resp.hits.hits;
                  //console.log('--------------------------------------')
                  //console.log(BrVal.patientID);
                  console.log(exportData[0]._source.primery_priority.breath_rate); //todo fix to patient id
                  BrVal.br = exportData[0]._source.primery_priority.breath_rate;
                }
                else {
                
                }
            });
        }
        */

      }, {
        key: "randomBr",
        value: function randomBr() {
          this.currBr.br = Math.floor(Math.random() * 10) + 10 + '';
        }
      }]);

      return MonitorBreathingRateComponent;
    }();

    MonitorBreathingRateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-monitor-breathing-rate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-breathing-rate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-breathing-rate.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-breathing-rate/monitor-breathing-rate.component.scss"))["default"]]
    })], MonitorBreathingRateComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorEcgMonitorEcgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWVjZy9tb25pdG9yLWVjZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: MonitorECGComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorEcgMonitorEcgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorECGComponent", function () {
      return MonitorECGComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorECGComponent = /*#__PURE__*/function () {
      function MonitorECGComponent() {
        _classCallCheck(this, MonitorECGComponent);

        this.mydata = [31, 40, 28, 51, 42, 109, 100];
        this.chartOptions = {
          series: [{
            //name: "series1",
            data: this.mydata
          }],
          chart: {
            id: 'realtime',
            height: 85,
            background: '#000',
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth",
            colors: ['#5F9EA0']
          },
          xaxis: {
            labels: {
              show: false
            }
          },
          yaxis: {
            show: false,
            showAlways: false,
            showForNullSeries: false,
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              show: false
            }
          },
          tooltip: {}
        };
      }

      _createClass(MonitorECGComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.timer = setInterval(function () {
            var fe = _this10.mydata.shift();

            _this10.mydata.push(fe); //console.log(this.mydata);
            //this.chart.render();
            //this.chartOptions.series[0].data = this.mydata;
            //console.log(this.chart);
            //this.chart.updateOptions()
            //this.chart.updateSeries
            //this.chart.responsive.shift();


            _this10.chart.updateSeries([{
              data: _this10.mydata
            }]);
          }, 1000); // this.chart.updateSeries()
        }
      }]);

      return MonitorECGComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chart", null)], MonitorECGComponent.prototype, "chart", void 0);
    MonitorECGComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-ecg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-ecg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-ecg.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-ecg/monitor-ecg.component.scss"))["default"]]
    })], MonitorECGComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorHeartRateMonitorHeartRateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: cadetblue;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: cadetblue;\n}\n\n.HR {\n  font-size: xx-large;\n  text-align: center;\n  color: cadetblue;\n  vertical-align: middle;\n  width: 80px;\n}\n\n.warning_visible {\n  width: 20px;\n  position: relative;\n  left: 0;\n  top: 3px;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItaGVhcnQtcmF0ZS9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcQ292aWQxOS13ZWJfc2VydmVyXFxDb3ZpZDE5X1NwcmludE1SX2NsaWVudFxcU1JDLWNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxwYXRpZW50LW1vbml0b3JcXG1vbml0b3ItaGVhcnQtcmF0ZVxcbW9uaXRvci1oZWFydC1yYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvbW9uaXRvci1oZWFydC1yYXRlL21vbml0b3ItaGVhcnQtcmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxzQkFBQTtFQUVBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLWhlYXJ0LXJhdGUvbW9uaXRvci1oZWFydC1yYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCU7XHJcbn1cclxuXHJcbi5zcXVhcmV7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XHJcbn1cclxuXHJcbi5IUntcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL3dpZHRoOiA3MHB4O1xyXG4gICAgY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvLyBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5nX3Zpc2libGUge1xyXG4gICAgd2lkdGg6IDIwcHg7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGxlZnQ6IDA7IFxyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59IiwiLnRvcCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXRvcDogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4uc3F1YXJlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi5IUiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi53YXJuaW5nX3Zpc2libGUge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDNweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: MonitorHeartRateComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorHeartRateMonitorHeartRateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorHeartRateComponent", function () {
      return MonitorHeartRateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); //declare var $: any;
    //export const hrVal = {patientID:'', hr: ''}


    var MonitorHeartRateComponent = /*#__PURE__*/function () {
      function MonitorHeartRateComponent() {
        _classCallCheck(this, MonitorHeartRateComponent);

        this.currPic = '../../../../../assets/monitor_pics/heart.jpg';
        this.heartPicPath = '../../../../../assets/monitor_pics/heart.jpg';
        this.blackPicPath = '../../../../../assets/monitor_pics/black.jpg';
        this.hearts = [this.heartPicPath, this.blackPicPath];
        this.currPicIdx = 0;
        this.heartRate = {
          hr: '',
          "new": true
        };
        this.warning_icon = './../../../../../assets/icons/warning-icon-red.png';
        this.black_icon = './../../../../../assets/icons/black-icon.png';
        this.warning = '';
      }

      _createClass(MonitorHeartRateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.timer = setInterval(function () {
            var temp = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].HR.val + '';
            _this11.heartRate.hr = temp.substring(0, Math.min(5, temp.length));
            _this11.heartRate["new"] = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].HR["new"];

            if (_this11.heartRate["new"]) {
              _this11.warning = _this11.black_icon;
            } else {
              _this11.warning = _this11.warning_icon;
            }
          }, 1000 * 0.5);
          this.timer2 = setInterval(function () {
            _this11.heartPic();
          }, 1000 * 1);
        }
        /*async getPatientInfo(){
          var client = new $.es.Client({
            // hosts: hosts
            host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
          });
              var result = client.search({
            index: 'measure_results_v4',
            size: 1000,
            body:{
              query:{
                match:{patientId: '88646e00-7d45-11ea-ac59-2fbe9b8b5360'}
              }
            }
          
            },
              function(err, resp, status) {
                if (resp) {
                  var exportData = resp.hits.hits;
                  //console.log('--------------------------------------')
                  //console.log(hrVal.patientID);
                  console.log(exportData[0]._source.secondery_priority.bpm); //todo fix to patient id
                  hrVal.hr = exportData[0]._source.secondery_priority.bpm;
                }
                else {
                
                }
            });
        }*/

      }, {
        key: "randomHr",
        value: function randomHr() {
          this.heartRate.hr = Math.floor(Math.random() * 30) + 51 + '';
        }
      }, {
        key: "heartPic",
        value: function heartPic() {
          this.currPic = this.hearts[this.currPicIdx];
          this.currPicIdx = 1 - this.currPicIdx;
        }
      }]);

      return MonitorHeartRateComponent;
    }();

    MonitorHeartRateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-monitor-heart-rate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-heart-rate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-heart-rate.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-heart-rate/monitor-heart-rate.component.scss"))["default"]]
    })], MonitorHeartRateComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorSpO2GraphMonitorSpO2GraphComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLXNwLW8yLWdyYXBoL21vbml0b3Itc3AtbzItZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: MonitorSpO2GraphComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorSpO2GraphMonitorSpO2GraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorSpO2GraphComponent", function () {
      return MonitorSpO2GraphComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MonitorSpO2GraphComponent = /*#__PURE__*/function () {
      function MonitorSpO2GraphComponent() {
        _classCallCheck(this, MonitorSpO2GraphComponent);

        this.mydata = [0, 0, 0, 0, 0, 0, 0];
        this.chartOptions = {
          series: [{
            //name: "series1",
            data: this.mydata
          }],
          chart: {
            id: 'realtime',
            height: 85,
            background: '#000',
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            }
          },
          grid: {
            show: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth",
            colors: ['#6495ED']
          },
          xaxis: {
            labels: {
              show: false
            }
          },
          yaxis: {
            max: 100,
            show: false,
            showAlways: false,
            showForNullSeries: false,
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              show: false
            }
          },
          tooltip: {}
        };
      }

      _createClass(MonitorSpO2GraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.timer = setInterval(function () {
            var fe = _this12.mydata.shift();

            _this12.mydata.push(Math.floor(_patient_monitor_component__WEBPACK_IMPORTED_MODULE_1__["MONITOR_PATIENT"].SpO2.val)); //console.log(this.mydata);
            //this.chart.render();
            //this.chartOptions.series[0].data = this.mydata;
            //console.log(this.chart);
            //this.chart.updateOptions()
            //this.chart.updateSeries
            //this.chart.responsive.shift();


            _this12.chart.updateSeries([{
              data: _this12.mydata
            }]);
          }, 1000); // this.chart.updateSeries()
        }
      }]);

      return MonitorSpO2GraphComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("chart", null)], MonitorSpO2GraphComponent.prototype, "chart", void 0);
    MonitorSpO2GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-monitor-sp-o2-graph',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-sp-o2-graph.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-sp-o2-graph.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-sp-o2-graph/monitor-sp-o2-graph.component.scss"))["default"]]
    })], MonitorSpO2GraphComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorSpo2MonitorSpo2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: cornflowerblue;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: cornflowerblue;\n}\n\n.SPO2 {\n  font-size: xx-large;\n  text-align: center;\n  color: cornflowerblue;\n  vertical-align: middle;\n  width: 80px;\n}\n\n.warning_visible {\n  width: 20px;\n  position: relative;\n  left: 0;\n  top: 3px;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3Itc3BvMi9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcQ292aWQxOS13ZWJfc2VydmVyXFxDb3ZpZDE5X1NwcmludE1SX2NsaWVudFxcU1JDLWNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxwYXRpZW50LW1vbml0b3JcXG1vbml0b3Itc3BvMlxcbW9uaXRvci1zcG8yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvbW9uaXRvci1zcG8yL21vbml0b3Itc3BvMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFFQSxzQkFBQTtFQUVBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9tb25pdG9yLXNwbzIvbW9uaXRvci1zcG8yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwJTtcclxufVxyXG5cclxuLnNxdWFyZXtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG59XHJcblxyXG4uU1BPMntcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL3dpZHRoOiA3MHB4O1xyXG4gICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8vIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLndhcm5pbmdfdmlzaWJsZSB7XHJcbiAgICB3aWR0aDogMjBweDsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICB0b3A6IDNweDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn0iLCIudG9wIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItdG9wOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLnNxdWFyZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICBib3JkZXItbGVmdDogc29saWQ7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbi5TUE8yIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4ud2FybmluZ192aXNpYmxlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAzcHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MonitorSpo2Component */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorSpo2MonitorSpo2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorSpo2Component", function () {
      return MonitorSpo2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts"); //declare var $: any;
    //export const spO2Val = {patientID:'', SpO2: ''}


    var MonitorSpo2Component = /*#__PURE__*/function () {
      function MonitorSpo2Component() {
        _classCallCheck(this, MonitorSpo2Component);

        this.SpO2 = {
          spo2: '',
          "new": true
        }; //patientID;

        this.warning_icon = './../../../../../assets/icons/warning-icon-red.png';
        this.black_icon = './../../../../../assets/icons/black-icon.png';
        this.warning = '';
      }

      _createClass(MonitorSpo2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.timer = setInterval(function () {
            var temp = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_2__["MONITOR_PATIENT"].SpO2.val + '';
            _this13.SpO2.spo2 = temp.substring(0, Math.min(5, temp.length));
            _this13.SpO2["new"] = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_2__["MONITOR_PATIENT"].SpO2["new"];

            if (_this13.SpO2["new"]) {
              _this13.warning = _this13.black_icon;
            } else {
              _this13.warning = _this13.warning_icon;
            } //this.getPatientInfo()

          }, 1000 * 0.5); //this.getPatientInfo();
        }
        /*async getPatientInfo(){
          var client = new $.es.Client({
            // hosts: hosts
            host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
          });
              var result = client.search({
            index: 'measure_results_v4',
            size: 1000,
            /*body:{
              query:{
                match:{patientId: '88646e00-7d45-11ea-ac59-2fbe9b8b5360'}
              }
            }
          
            },
              function(err, resp, status) {
                if (resp) {
                  var exportData = resp.hits.hits;
                  console.log(exportData[0]._source.secondery_priority.saturation);
                  spO2Val.SpO2 = exportData[0]._source.secondery_priority.saturation;
                }
                else {
                
                }
            });
        }*/

      }, {
        key: "randomSpO2",
        value: function randomSpO2() {
          this.SpO2.spo2 = Math.floor(Math.random() * 10) + 90 + '';
        }
      }]);

      return MonitorSpo2Component;
    }();

    MonitorSpo2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-spo2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-spo2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-spo2.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-spo2/monitor-spo2.component.scss"))["default"]]
    })], MonitorSpo2Component);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorTemperatureMonitorTemperatureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top {\n  width: 80px;\n  height: 5px;\n  border-top: solid;\n  border-left: solid;\n  border-right: solid;\n  border-color: aqua;\n  background-color: black;\n  text-align: right;\n  padding-bottom: 0%;\n}\n\n.square {\n  width: 80px;\n  height: 55px;\n  border-bottom: solid;\n  border-left: solid;\n  border-right: solid;\n  background-color: black;\n  text-align: center;\n  border-color: aqua;\n}\n\n.TMP {\n  font-size: xx-large;\n  text-align: center;\n  color: aqua;\n  vertical-align: middle;\n  width: 80px;\n}\n\n.warning_visible {\n  width: 20px;\n  position: relative;\n  left: 0;\n  top: 3px;\n  visibility: visible;\n}\n\n.warning_hidden {\n  width: 20px;\n  position: relative;\n  left: 0;\n  top: 3px;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL21vbml0b3ItdGVtcGVyYXR1cmUvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXENvdmlkMTktd2ViX3NlcnZlclxcQ292aWQxOV9TcHJpbnRNUl9jbGllbnRcXFNSQy1jb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXHBhdGllbnQtZGF0YVxccGF0aWVudC1tb25pdG9yXFxtb25pdG9yLXRlbXBlcmF0dXJlXFxtb25pdG9yLXRlbXBlcmF0dXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvbW9uaXRvci10ZW1wZXJhdHVyZS9tb25pdG9yLXRlbXBlcmF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBRUEsc0JBQUE7RUFFQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvbW9uaXRvci10ZW1wZXJhdHVyZS9tb25pdG9yLXRlbXBlcmF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGFxdWE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAlO1xyXG59XHJcblxyXG4uc3F1YXJle1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogYXF1YTtcclxufVxyXG5cclxuLlRNUHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvL3dpZHRoOiA3MHB4O1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLy8gZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ud2FybmluZ192aXNpYmxlIHtcclxuICAgIHdpZHRoOiAyMHB4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHRvcDogM3B4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLndhcm5pbmdfaGlkZGVuIHtcclxuICAgIHdpZHRoOiAyMHB4OyBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHRvcDogM3B4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufSIsIi50b3Age1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkO1xuICBib3JkZXItbGVmdDogc29saWQ7XG4gIGJvcmRlci1yaWdodDogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYXF1YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5zcXVhcmUge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sb3I6IGFxdWE7XG59XG5cbi5UTVAge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBhcXVhO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogODBweDtcbn1cblxuLndhcm5pbmdfdmlzaWJsZSB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogM3B4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ud2FybmluZ19oaWRkZW4ge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDNweDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: MonitorTemperatureComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorMonitorTemperatureMonitorTemperatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorTemperatureComponent", function () {
      return MonitorTemperatureComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _patient_monitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../patient-monitor.component */
    "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts"); //declare var $: any;
    //export const feverVal = {patientID:'', temp: ''}


    var MonitorTemperatureComponent = /*#__PURE__*/function () {
      function MonitorTemperatureComponent() {
        _classCallCheck(this, MonitorTemperatureComponent);

        this.currTmp = {
          tmp: '',
          "new": true
        };
        this.warning_icon = './../../../../../assets/icons/warning-icon-red.png';
        this.black_icon = './../../../../../assets/icons/black-icon.png';
        this.warning = '';
      }

      _createClass(MonitorTemperatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.timer = setInterval(function () {
            var temp = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_2__["MONITOR_PATIENT"].TMP.val + '';
            _this14.currTmp.tmp = temp.substring(0, Math.min(4, temp.length));
            _this14.currTmp["new"] = _patient_monitor_component__WEBPACK_IMPORTED_MODULE_2__["MONITOR_PATIENT"].TMP["new"];

            if (_this14.currTmp["new"]) {
              _this14.warning = _this14.black_icon;
            } else {
              _this14.warning = _this14.warning_icon;
            }
          }, 1000 * 0.5);
        }
        /*async getPatientInfo(){
          var client = new $.es.Client({
            // hosts: hosts
            host: 'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
          });
              var result = client.search({
            index: 'measure_results_v4',
            size: 1000,
            /*body:{
              query:{
                match:{patientId: '88646e00-7d45-11ea-ac59-2fbe9b8b5360'}
              }
            }
          
            },
              function(err, resp, status) {
                if (resp) {
                  var exportData = resp.hits.hits;
                  //console.log('--------------------------------------')
                  //console.log(feverVal.patientID);
                  console.log(exportData[0]._source.secondery_priority.fever); //todo fix to patient id
                  feverVal.temp = exportData[0]._source.secondery_priority.fever;
                }
                else {
                
                }
            });
        }*/

      }, {
        key: "randomTmp",
        value: function randomTmp() {
          this.currTmp.tmp = Math.floor(Math.random() * 8) + 35 + '';
        }
      }]);

      return MonitorTemperatureComponent;
    }();

    MonitorTemperatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monitor-temperature',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./monitor-temperature.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./monitor-temperature.component.scss */
      "./src/app/modules/patient-data/patient-monitor/monitor-temperature/monitor-temperature.component.scss"))["default"]]
    })], MonitorTemperatureComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/patient-monitor.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientMonitorPatientMonitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#graphical_data {\n  display: inline-block;\n  width: 420px;\n  margin-top: 10px;\n  height: 300px;\n}\n\n#numerical_data {\n  display: inline-block;\n  width: 80px;\n  margin-top: 10px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1tb25pdG9yL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxDb3ZpZDE5LXdlYl9zZXJ2ZXJcXENvdmlkMTlfU3ByaW50TVJfY2xpZW50XFxTUkMtY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50LWRhdGFcXHBhdGllbnQtbW9uaXRvclxccGF0aWVudC1tb25pdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LW1vbml0b3IvcGF0aWVudC1tb25pdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF0aWVudC1kYXRhL3BhdGllbnQtbW9uaXRvci9wYXRpZW50LW1vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JhcGhpY2FsX2RhdGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvL2JvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI251bWVyaWNhbF9kYXRhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIC8vYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufSIsIiNncmFwaGljYWxfZGF0YSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4jbnVtZXJpY2FsX2RhdGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-monitor/patient-monitor.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MONITOR_PATIENT, PatientMonitorComponent */

  /***/
  function srcAppModulesPatientDataPatientMonitorPatientMonitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MONITOR_PATIENT", function () {
      return MONITOR_PATIENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientMonitorComponent", function () {
      return PatientMonitorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_last_known_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/last-known.service */
    "./src/app/services/last-known.service.ts");

    var MONITOR_PATIENT = {
      patientID: '',
      HR: {
        val: '',
        "new": true
      },
      SpO2: {
        val: 0,
        "new": true
      },
      BR: {
        val: 0,
        "new": true
      },
      TMP: {
        val: '',
        "new": true
      },
      Bp_h: {
        val: 0,
        "new": true
      },
      Bp_l: {
        val: 0,
        "new": true
      },
      ECG: {
        val: {},
        "new": true
      }
    };
    var P_MEASURE_RESULTS = [];

    var PatientMonitorComponent = /*#__PURE__*/function () {
      function PatientMonitorComponent(currPersonService, lastKnownService) {
        var _this15 = this;

        _classCallCheck(this, PatientMonitorComponent);

        this.currPersonService = currPersonService;
        this.lastKnownService = lastKnownService;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          //MONITOR_PATIENT.patientID = person.patient_Id;
          // MONITOR_PATIENT.patientID = 'nbnbnbnb-778c-11ea-99b7-nbnbnbnbnbnb' //todo - change to patient id!!!
          MONITOR_PATIENT.patientID = person.patient_Id;
          _this15.selectedPerson = person;
        });
      }

      _createClass(PatientMonitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.timer = setInterval(function () {
            if (_app_component__WEBPACK_IMPORTED_MODULE_1__["REDISFLAG"]) {
              _this16.getLatestPatientInfo(); //this.getPatientInfo1()

            } else {
              _this16.getPatientInfo();

              _this16.getPatientUIMeasureResults();
            }
          }, 1000 * 0.5);
        } // not in use

      }, {
        key: "getPatientInfo1",
        value: function getPatientInfo1() {
          MONITOR_PATIENT.HR.val = Math.floor(Math.random() * 30) + 51 + '';
          MONITOR_PATIENT.SpO2.val = Math.floor(Math.random() * 10) + 90;
          MONITOR_PATIENT.BR.val = Math.floor(Math.random() * 10) + 10;
          MONITOR_PATIENT.TMP.val = Math.floor(Math.random() * 5) + 35 + '';
          MONITOR_PATIENT.Bp_h.val = 122;
          MONITOR_PATIENT.Bp_l.val = 68;
        }
      }, {
        key: "getLastKnown",
        value: function getLastKnown() {
          var _this17 = this;

          this.lastKnownService.getLastKnown().subscribe(function (lists) {
            _this17.lastKnownLst = lists[0];
            _this17.lastUpdateLst = lists[1]; //let ret = this.getPatientUIMeasureResultsFromRedis('a64ce230-73db-11ea-9ca9-e56bb32f5931');

            var ret = _this17.getPatientUIMeasureResultsFromRedis(MONITOR_PATIENT.patientID);

            if (ret === undefined) {
              return;
            }

            MONITOR_PATIENT.HR = ret.heartRate;
            MONITOR_PATIENT.SpO2.val = +ret.spO2.val;
            MONITOR_PATIENT.SpO2["new"] = ret.spO2["new"];
            MONITOR_PATIENT.BR.val = +ret.breathingRate.val;
            MONITOR_PATIENT.BR["new"] = ret.breathingRate["new"];
            MONITOR_PATIENT.TMP = ret.fever;
            var bp = ret.bloodPresure.val;
            MONITOR_PATIENT.Bp_h.val = +bp.substring(0, bp.indexOf('/'));
            MONITOR_PATIENT.Bp_l.val = +bp.substring(bp.indexOf('/') + 1, bp.length); //MONITOR_PATIENT.ECG = patientMeasureRes.secondery_priority.ecg;
          });
        }
      }, {
        key: "getLatestPatientInfo",
        value: function getLatestPatientInfo() {
          this.getLastKnown();
        }
      }, {
        key: "getPatientUIMeasureResultsFromRedis",
        value: function getPatientUIMeasureResultsFromRedis(patientId) {
          var PatientMeasureResults = {
            heartRate: {
              val: '-',
              "new": true
            },
            bloodPresure: {
              val: '-',
              "new": true
            },
            spO2: {
              val: '0',
              "new": true
            },
            breathingRate: {
              val: '0',
              "new": true
            },
            extraO2: {
              val: '',
              "new": true
            },
            fever: {
              val: '-',
              "new": true
            },
            breathingInfo: {
              val: '-',
              "new": true
            }
          };

          if (this.lastKnownLst[patientId] === undefined) {
            return PatientMeasureResults;
          }

          var p_lastKnown = JSON.parse(this.lastKnownLst[patientId]);
          var p_lastUpdate = JSON.parse(this.lastUpdateLst[patientId]);
          var hr = p_lastKnown.secondery_priority.bpm + '';

          if (hr === undefined) {
            hr = '-';
          }

          var bp_h = p_lastKnown.secondery_priority.blood_pressure_h + '';

          if (bp_h === undefined) {
            bp_h = '-';
          }

          var bp_l = p_lastKnown.secondery_priority.blood_pressure_l + '';

          if (bp_l === undefined) {
            bp_l = '-';
          }

          var p_bp = bp_h.substring(0, Math.min(bp_h.length, 5)) + '/' + bp_l.substring(0, Math.min(bp_l.length, 5));
          var spO2 = p_lastKnown.secondery_priority.saturation + '';

          if (spO2 === undefined) {
            spO2 = '0';
          }

          var br = p_lastKnown.primery_priority.breath_rate;

          if (br === undefined) {
            br = '0';
          }

          var fever = p_lastKnown.secondery_priority.fever + '';

          if (fever === undefined) {
            fever = '-';
          }

          ;
          var p_breathing_info = 'cough %: ' + p_lastKnown.primery_priority.cough_presence_rate;

          if (p_lastKnown.primery_priority.wheezing) {
            p_breathing_info = 'Wheezing, ' + p_breathing_info;
          }

          PatientMeasureResults.heartRate.val = hr.substring(0, Math.min(5, hr.length));
          PatientMeasureResults.bloodPresure.val = p_bp;
          PatientMeasureResults.spO2.val = spO2.substring(0, Math.min(spO2.length, 5));
          PatientMeasureResults.breathingRate.val = br;
          PatientMeasureResults.fever.val = fever.substring(0, Math.min(fever.length, 4));
          PatientMeasureResults.breathingInfo.val = p_breathing_info;
          PatientMeasureResults.heartRate["new"] = this.isNewInformation(p_lastUpdate.updates.bmp, 10);
          PatientMeasureResults.bloodPresure["new"] = this.isNewInformation(p_lastUpdate.updates.blood_pressure_h, 10) && this.isNewInformation(p_lastUpdate.updates.blood_pressure_l, 10);
          PatientMeasureResults.spO2["new"] = this.isNewInformation(p_lastUpdate.updates.saturation, 10);
          PatientMeasureResults.breathingRate["new"] = this.isNewInformation(p_lastUpdate.updates.breath_rate, 10);
          PatientMeasureResults.fever["new"] = this.isNewInformation(p_lastUpdate.updates.fever, 10);
          PatientMeasureResults.breathingInfo["new"] = this.isNewInformation(p_lastUpdate.updates.cough_presence_rate, 10) && this.isNewInformation(p_lastUpdate.updates.wheezing, 10);
          return PatientMeasureResults;
        }
      }, {
        key: "isNewInformation",
        value: function isNewInformation(originalTime, maxDelay) {
          var now = new Date(new Date().toUTCString());
          var time = new Date(new Date(originalTime).toUTCString());
          var diffMs = Math.abs(now.getTime() - time.getTime());
          var diffMins = Math.round(diffMs % 86400000 % 3600000 / 60000);
          return diffMins < maxDelay ? true : false;
        }
      }, {
        key: "getPatientUIMeasureResults",
        value: function getPatientUIMeasureResults() {
          var p_id = this.selectedPerson.patient_Id;
          var isUpdated = {
            heartRate: false,
            bloodPresure: false,
            spO2: false,
            breathingRate: false,
            extraO2: false,
            fever: false,
            breathingInfo: false
          };
          var return_Value = {
            heartRate: {
              val: '-',
              "new": true
            },
            bloodPresure: {
              val: '-',
              "new": true
            },
            spO2: {
              val: '0',
              "new": true
            },
            breathingRate: {
              val: '0',
              "new": true
            },
            extraO2: {
              val: '',
              "new": true
            },
            fever: {
              val: '-',
              "new": true
            },
            breathingInfo: {
              val: '-',
              "new": true
            }
          };

          for (var i = 0; i < P_MEASURE_RESULTS.length; i++) {
            if (isUpdated.heartRate && isUpdated.bloodPresure && isUpdated.spO2 && isUpdated.breathingRate && isUpdated.fever && isUpdated.breathingInfo) {
              break;
            }

            var curr_mr = P_MEASURE_RESULTS[i];

            if (!isUpdated.heartRate && curr_mr.secondery_priority.bpm !== undefined && curr_mr.secondery_priority.bpm !== 0) {
              var hr = curr_mr.secondery_priority.bpm + '';
              return_Value.heartRate.val = hr.substring(0, Math.min(5, hr.length));
              isUpdated.heartRate = true;
            }

            if (!isUpdated.bloodPresure && curr_mr.secondery_priority.blood_pressure_h !== undefined && curr_mr.secondery_priority.blood_pressure_h !== 0) {
              var bp_h = curr_mr.secondery_priority.blood_pressure_h + '';
              var bp_l = curr_mr.secondery_priority.blood_pressure_l + '';
              var p_bp = bp_h.substring(0, Math.min(bp_h.length, 5)) + '/' + bp_l.substring(0, Math.min(bp_l.length, 5));
              return_Value.bloodPresure.val = p_bp;
              isUpdated.bloodPresure = true;
            }

            if (!isUpdated.spO2 && curr_mr.secondery_priority.saturation !== undefined && curr_mr.secondery_priority.saturation !== 0) {
              var spO2 = curr_mr.secondery_priority.saturation + '';
              return_Value.spO2.val = spO2.substring(0, Math.min(spO2.length, 5));
              isUpdated.spO2 = true;
            }

            if (!isUpdated.breathingRate && curr_mr.primery_priority.breath_rate !== undefined && curr_mr.primery_priority.breath_rate !== 0) {
              return_Value.breathingRate.val = curr_mr.primery_priority.breath_rate;
              isUpdated.breathingRate = true;
            }

            if (!isUpdated.fever && curr_mr.secondery_priority.fever !== undefined && curr_mr.secondery_priority.fever !== 0) {
              return_Value.fever.val = curr_mr.secondery_priority.fever;
              isUpdated.fever = true;
            }

            if (!isUpdated.breathingInfo && curr_mr.primery_priority.cough_presence_rate !== undefined && curr_mr.primery_priority.cough_presence_rate !== 0) {
              var p_breathing_info = 'cough %: ' + curr_mr.primery_priority.cough_presence_rate;

              if (curr_mr.primery_priority.wheezing) {
                p_breathing_info = 'Wheezing, ' + p_breathing_info;
              }

              return_Value.breathingInfo.val = p_breathing_info;
            }
          }

          MONITOR_PATIENT.HR = return_Value.heartRate;
          MONITOR_PATIENT.SpO2.val = +return_Value.spO2.val;
          MONITOR_PATIENT.SpO2["new"] = return_Value.spO2["new"];
          MONITOR_PATIENT.BR.val = +return_Value.breathingRate.val;
          MONITOR_PATIENT.BR["new"] = return_Value.breathingRate["new"];
          MONITOR_PATIENT.TMP = return_Value.fever;
          var bp = return_Value.bloodPresure.val;
          MONITOR_PATIENT.Bp_h.val = +bp.substring(0, bp.indexOf('/'));
          MONITOR_PATIENT.Bp_l.val = +bp.substring(bp.indexOf('/') + 1, bp.length);
        }
      }, {
        key: "getPatientInfo",
        value: function getPatientInfo() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var client, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    client = new $.es.Client({
                      // hosts: hosts
                      host: _app_component__WEBPACK_IMPORTED_MODULE_1__["ELASTIC_HOST"]
                    });
                    result = client.search({
                      index: 'measure_results_v5',
                      size: 1000,
                      body: {
                        query: {
                          match: {
                            patientId: MONITOR_PATIENT.patientID
                          }
                        }
                      }
                    }, function (err, resp, status) {
                      if (resp) {
                        var exportData = resp.hits.hits;

                        for (var i = 0; i < P_MEASURE_RESULTS.length; i++) {
                          P_MEASURE_RESULTS.pop();
                        }

                        exportData.forEach(function (result) {
                          if (result._source.patientId !== undefined) {
                            P_MEASURE_RESULTS.push(result._source);
                          }
                        });
                      } else {}
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return PatientMonitorComponent;
    }();

    PatientMonitorComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }, {
        type: _services_last_known_service__WEBPACK_IMPORTED_MODULE_4__["LastKnownService"]
      }];
    };

    PatientMonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-patient-monitor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-monitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-monitor/patient-monitor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-monitor.component.scss */
      "./src/app/modules/patient-data/patient-monitor/patient-monitor.component.scss"))["default"]]
    })], PatientMonitorComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientPersonalDataPatientPersonalDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".roundImg {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1wZXJzb25hbC1kYXRhL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxDb3ZpZDE5LXdlYl9zZXJ2ZXJcXENvdmlkMTlfU3ByaW50TVJfY2xpZW50XFxTUkMtY292aWQxOVVJL3NyY1xcYXBwXFxtb2R1bGVzXFxwYXRpZW50LWRhdGFcXHBhdGllbnQtcGVyc29uYWwtZGF0YVxccGF0aWVudC1wZXJzb25hbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LXBlcnNvbmFsLWRhdGEvcGF0aWVudC1wZXJzb25hbC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1wZXJzb25hbC1kYXRhL3BhdGllbnQtcGVyc29uYWwtZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZEltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59IiwiLnJvdW5kSW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PatientPersonalDataComponent */

  /***/
  function srcAppModulesPatientDataPatientPersonalDataPatientPersonalDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientPersonalDataComponent", function () {
      return PatientPersonalDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientPersonalDataComponent = /*#__PURE__*/function () {
      function PatientPersonalDataComponent(currPersonService) {
        var _this18 = this;

        _classCallCheck(this, PatientPersonalDataComponent);

        this.currPersonService = currPersonService;
        this.disabled = true;
        this.greenStatusPath = './../../../../assets/colors/green.jpg';
        this.yellowStatusPath = './../../../../assets/colors/yellow.jpg';
        this.orangeStatusPath = './../../../../assets/colors/orange.jpg';
        this.redStatusPath = './../../../../assets/colors/red.jpg';
        this.criticalScore = [this.redStatusPath, this.yellowStatusPath];
        this.criticalCurrColor = 0;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this18.selectedPerson = person;
          _this18.patientName = person.first_name;
          _this18.hospital = person.institute_name;
          _this18.department = person.department_name;
          _this18.roomNumber = person.room_identifier;
          _this18.bedNumber = person.bed_identifier;
          _this18.bedLocation = person.bed_location;
          _this18.inRisk = person.personal.HighRiskGroup;
          _this18.statusPath = _this18.setColor(person.score);
          person.measureResults.extraO2 === 'NO' ? _this18.extraO2 = false : _this18.extraO2 = true;
        });
      }

      _createClass(PatientPersonalDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.timer = setInterval(function () {
            _this19.randomScore();
          }, 1000 * 0.5);
        }
      }, {
        key: "setColor",
        value: function setColor(score) {
          if (score < 2) {
            return this.greenStatusPath;
          }

          if (score >= 2 && score <= 4) {
            return this.yellowStatusPath;
          }

          if (score >= 5 && score <= 6) {
            return this.orangeStatusPath;
          } else {
            return this.redStatusPath;
          }
        }
      }, {
        key: "randomScore",
        value: function randomScore() {
          if (this.selectedPerson.score >= 7) this.statusPath = this.criticalScore[this.criticalCurrColor];
          this.criticalCurrColor = 1 - this.criticalCurrColor;
        }
      }]);

      return PatientPersonalDataComponent;
    }();

    PatientPersonalDataComponent.ctorParameters = function () {
      return [{
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_1__["CurrPersonService"]
      }];
    };

    PatientPersonalDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-patient-personal-data',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-personal-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-personal-data.component.scss */
      "./src/app/modules/patient-data/patient-personal-data/patient-personal-data.component.scss"))["default"]]
    })], PatientPersonalDataComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-settings/patient-settings.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-settings/patient-settings.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientDataPatientSettingsPatientSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1zZXR0aW5ncy9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcQ292aWQxOS13ZWJfc2VydmVyXFxDb3ZpZDE5X1NwcmludE1SX2NsaWVudFxcU1JDLWNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudC1kYXRhXFxwYXRpZW50LXNldHRpbmdzXFxwYXRpZW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtZGF0YS9wYXRpZW50LXNldHRpbmdzL3BhdGllbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LWRhdGEvcGF0aWVudC1zZXR0aW5ncy9wYXRpZW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIC8vd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/patient-data/patient-settings/patient-settings.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/patient-data/patient-settings/patient-settings.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PatientSettingsComponent */

  /***/
  function srcAppModulesPatientDataPatientSettingsPatientSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSettingsComponent", function () {
      return PatientSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientSettingsComponent = /*#__PURE__*/function () {
      function PatientSettingsComponent(router, // private patientsListService: PatientsListService,
      currPersonService) {
        var _this20 = this;

        _classCallCheck(this, PatientSettingsComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.sensor1 = {
          unit_id: 'None',
          name_tag: 'None',
          time_tag: "2020-04-13T09:10:19.698Z",
          sensor_name: '',
          vendor_name: 'EarlySense',
          description: '',
          institute_name: '',
          department_name: '',
          currently_in_use: 'false'
        };
        this.displayedColumns = ['unit_id', 'name_tag', 'vendor_name', 'remove'];
        this.sensorsDataSource = [];
        this.sensors = [];
        this.minHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minHR;
        this.maxHR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxHR;
        this.minSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minSpO2;
        this.maxSpO2 = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxSpO2;
        this.minBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].minBR;
        this.maxBR = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"].maxBR;
        this.citical_color = 'red';
        this.currPersonService.sharedMessage.subscribe(function (person) {
          //console.log(SENSORS);
          //console.log(person.id);
          //console.log(person.settings.sensors)
          _this20.selectedPerson = person;
          _this20.department = person.department_name;
          _this20.roomNumber = person.room_identifier;
          _this20.bedNumber = person.bed_identifier;
          _this20.bedLocation = person.bed_location;
          _this20.sensorsDataSource = person.sensors_list;

          _this20.setSensors();
        });
      }

      _createClass(PatientSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setSensors",
        value: function setSensors() {
          var _this21 = this;

          this.sensors = [];

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["SENSORS"].forEach(function (s) {
            if (s.unit_id !== 'None' && _this21.checkIfSensorInList(s)) {
              s.currently_in_use = 'true';
            }

            if (s.currently_in_use === 'false') {
              _this21.sensors.push(s);
            }
          });
        }
      }, {
        key: "checkIfSensorInList",
        value: function checkIfSensorInList(currSensor) {
          for (var i = 0; i < this.sensorsDataSource.length; i++) {
            if (this.sensorsDataSource[i].unit_id === currSensor.unit_id) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "AddSensorToPatient",
        value: function AddSensorToPatient() {
          if (this.sensor1.unit_id === 'None') {
            return;
          }

          this.sensor1.currently_in_use = 'true';
          var newPatientSensor = {
            unit_id: this.sensor1.unit_id,
            name_tag: this.sensor1.name_tag,
            time_tag: "2020-04-13T09:10:19.698Z",
            sensor_name: this.sensor1.name_tag,
            vendor_name: this.sensor1.vendor_name,
            description: this.sensor1.description,
            institute_name: this.sensor1.institute_name,
            department_name: this.sensor1.department_name,
            currently_in_use: 'true'
          };
          this.sensorsDataSource.push(newPatientSensor);
          this.table.renderRows();
          this.sensor1 = {
            unit_id: 'None',
            name_tag: 'None',
            time_tag: "2020-04-13T09:10:19.698Z",
            sensor_name: '',
            vendor_name: 'EarlySense',
            description: '',
            institute_name: '',
            department_name: '',
            currently_in_use: 'false'
          };
          this.setSensors();
        }
      }, {
        key: "removeSensorFromPatient",
        value: function removeSensorFromPatient(element) {
          var i = this.sensorsDataSource.indexOf(element);
          this.sensorsDataSource[i].currently_in_use = 'false';
          this.sensorsDataSource.splice(i, 1);
          this.table.renderRows();
          this.setSensors();
        }
      }, {
        key: "OnSave",
        value: function OnSave() {
          if (this.sensorsDataSource.length === 0) {
            alert('Please choose at least one sensor for the patient');
            return;
          }

          var newSettings = {
            minHR: this.minHR,
            maxHR: this.maxHR,
            minBR: this.minBR,
            maxBR: this.maxBR,
            minSpO2: this.minSpO2,
            maxSpO2: this.maxSpO2
          };
          this.selectedPerson.sensors_list = this.sensorsDataSource;
          this.selectedPerson.settings = newSettings;
          this.selectedPerson.department_name = this.department;
          this.selectedPerson.room_identifier = this.roomNumber;
          this.selectedPerson.bed_identifier = this.bedNumber;
          this.selectedPerson.bed_location = this.bedLocation; // this.patientsListService.editPatient(this.selectedPerson);

          alert('Patient info updated');
          this.router.navigate(['/']);
        }
      }]);

      return PatientSettingsComponent;
    }();

    PatientSettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('table', null)], PatientSettingsComponent.prototype, "table", void 0);
    PatientSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-patient-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-data/patient-settings/patient-settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-settings.component.scss */
      "./src/app/modules/patient-data/patient-settings/patient-settings.component.scss"))["default"]]
    })], PatientSettingsComponent);
    /***/
  },

  /***/
  "./src/app/modules/patient-release/patient-release.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/modules/patient-release/patient-release.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientReleasePatientReleaseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#patient_summary {\n  display: inline-block;\n  margin-right: 10px;\n  width: 320px;\n  height: 110px;\n}\n\n#remarks {\n  display: inline-block;\n  width: 320px;\n  height: 110px;\n}\n\n.input_class {\n  height: 66px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50LXJlbGVhc2UvQzpcXFVzZXJzXFw5OTk5MjBcXERlc2t0b3BcXENvdmlkMTktd2ViX3NlcnZlclxcQ292aWQxOV9TcHJpbnRNUl9jbGllbnRcXFNSQy1jb3ZpZDE5VUkvc3JjXFxhcHBcXG1vZHVsZXNcXHBhdGllbnQtcmVsZWFzZVxccGF0aWVudC1yZWxlYXNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtcmVsZWFzZS9wYXRpZW50LXJlbGVhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhdGllbnQtcmVsZWFzZS9wYXRpZW50LXJlbGVhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGF0aWVudF9zdW1tYXJ5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcblxyXG4jcmVtYXJrcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcblxyXG4uaW5wdXRfY2xhc3Mge1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbiIsIiNwYXRpZW50X3N1bW1hcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4jcmVtYXJrcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uaW5wdXRfY2xhc3Mge1xuICBoZWlnaHQ6IDY2cHg7XG4gIHdpZHRoOiAyNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/patient-release/patient-release.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/patient-release/patient-release.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PatientReleaseComponent */

  /***/
  function srcAppModulesPatientReleasePatientReleaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientReleaseComponent", function () {
      return PatientReleaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientReleaseComponent = /*#__PURE__*/function () {
      function PatientReleaseComponent(router, // private patientsListService: PatientsListService,
      currPersonService) {
        var _this22 = this;

        _classCallCheck(this, PatientReleaseComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.currPersonService.sharedMessage.subscribe(function (person) {
          _this22.firstName = person.personal.Name;
          _this22.age = person.personal.Age;
          _this22.selectedPerson = person;
        });
      }

      _createClass(PatientReleaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnFinishClick",
        value: function OnFinishClick() {
          if (confirm('Are you sure you want to discharge the selected patient?')) {
            var index = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].indexOf(this.selectedPerson);

            if (index != -1) _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].splice(index, 1); // this.patientsListService.removePatient(this.selectedPerson);

            alert('Patient dischareged!');
            this.router.navigate(['/']);
          } else {
            alert('Patient remained in list');
            this.router.navigate(['/']);
          }
        }
      }]);

      return PatientReleaseComponent;
    }();

    PatientReleaseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_2__["CurrPersonService"]
      }];
    };

    PatientReleaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-patient-release',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-release.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patient-release/patient-release.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-release.component.scss */
      "./src/app/modules/patient-release/patient-release.component.scss"))["default"]]
    })], PatientReleaseComponent);
    /***/
  },

  /***/
  "./src/app/modules/patients/patients.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/patients/patients.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPatientsPatientsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n  margin-left: unset;\n  margin-right: unset;\n}\n\n.col_class {\n  width: 50px;\n}\n\n.roundImg {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n}\n\n.make-red {\n  background-color: red;\n}\n\n.make-orange {\n  background-color: orange;\n}\n\n.make-yellow {\n  background-color: yellow;\n}\n\n.make-green {\n  background-color: greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXRpZW50cy9DOlxcVXNlcnNcXDk5OTkyMFxcRGVza3RvcFxcQ292aWQxOS13ZWJfc2VydmVyXFxDb3ZpZDE5X1NwcmludE1SX2NsaWVudFxcU1JDLWNvdmlkMTlVSS9zcmNcXGFwcFxcbW9kdWxlc1xccGF0aWVudHNcXHBhdGllbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxufVxyXG5cclxuLmNvbF9jbGFzcyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLnJvdW5kSW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYWtlLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5tYWtlLW9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5tYWtlLXllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5tYWtlLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gIG1hcmdpbi1yaWdodDogdW5zZXQ7XG59XG5cbi5jb2xfY2xhc3Mge1xuICB3aWR0aDogNTBweDtcbn1cblxuLnJvdW5kSW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4ubWFrZS1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5tYWtlLW9yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLm1ha2UteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4ubWFrZS1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/patients/patients.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/patients/patients.component.ts ***!
    \********************************************************/

  /*! exports provided: PatientsComponent */

  /***/
  function srcAppModulesPatientsPatientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsComponent", function () {
      return PatientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_last_known_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/last-known.service */
    "./src/app/services/last-known.service.ts");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _services_curr_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/curr-person.service */
    "./src/app/services/curr-person.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TIMETAG = "2019-04-13T16:22:02.997";

    var PatientsComponent = /*#__PURE__*/function () {
      function PatientsComponent(router, currPersonService, lastKnownService) {
        var _this23 = this;

        _classCallCheck(this, PatientsComponent);

        this.router = router;
        this.currPersonService = currPersonService;
        this.lastKnownService = lastKnownService; // icons

        this.patient_icon = '../../../assets/icons/Patient.JPG';
        this.room_icon = '../../../assets/icons/Room.JPG';
        this.age_icon = '../../../assets/icons/age.JPG';
        this.hr_icon = '../../../assets/icons/HR.JPG';
        this.bp_icon = '../../../assets/icons/BP.jpg';
        this.spo2_icon = '../../../assets/icons/sat.jpg';
        this.br_icon = '../../../assets/icons/BR.JPG';
        this.fever_icon = '../../../assets/icons/Fever.JPG';
        this.alerts_icon = '../../../assets/icons/alert.JPG';
        this.progress_icon = '../../../assets/icons/status.JPG';
        this.removeUser_icon = '../../../assets/icons/remove-user.jpg';
        this.displayedColumns = ['patient_Id', 'room', 'age', 'heartRate', 'bloodPresure', 'spO2', 'breathingRate', 'extraO2', 'fever', 'breathingInfo', 'alerts', 'progress', 'score', 'data', 'release']; // dataSource: PersonHealthData[];

        this.dsPatients = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENTS"];
        this.greenStatusPath = '../../../assets/colors/green.jpg';
        this.yellowStatusPath = '../../../assets/colors/yellow.jpg';
        this.orangeStatusPath = '../../../assets/colors/orange.jpg';
        this.redStatusPath = '../../../assets/colors/red.jpg'; //console.log(PATIENTS);
        //console.log(SENSORS);
        //console.log(PATIENT_STATUS_LIST);
        //console.log(MEASURMENT_RESULTS);

        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(1000).subscribe(function () {
          _this23.setUIPatients();

          _this23.dataSource = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"];

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].forEach(function (element) {
            console.log(element.patient_Id);
          });
        });
      }

      _createClass(PatientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.mytimer = setInterval(function () {
            TIMETAG = _this24.getDateInElasticFormat();

            _this24.updateMeasureResults();

            _this24.calculatePatientsByScore();

            if (_app_component__WEBPACK_IMPORTED_MODULE_1__["REDISFLAG"]) {
              _this24.getLatestPatientInfo();
            } else {
              _this24.setPatientUIListMeasureResults();
            }
          }, 1000 * 0.5);
        }
      }, {
        key: "calculatePatientsByScore",
        value: function calculatePatientsByScore() {
          var _this25 = this;

          this.numOfCriticalPatients = 0;
          this.numOfMajorPatients = 0;
          this.numOfModeratePatients = 0;
          this.numOfMinorPatients = 0;

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].forEach(function (patient) {
            if (patient.score < 2) {
              _this25.numOfMinorPatients++;
            }

            if (patient.score >= 2 && patient.score < 5) {
              _this25.numOfModeratePatients++;
            }

            if (patient.score >= 5 && patient.score < 7) {
              _this25.numOfMajorPatients++;
            }

            if (patient.score >= 7) {
              _this25.numOfCriticalPatients++;
            }
          });
        } // set Patients List
        // todo devide score and measure results

      }, {
        key: "setUIPatients",
        value: function setUIPatients() {
          var _this26 = this;

          //console.log('-----------------')
          //console.log(PATIENTS);
          //console.log('length: ' + PATIENTS.length);
          //console.log(PATIENTS[0]);
          if (_interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].length !== 0) {
            return;
          }

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENTS"].forEach(function (patient) {
            var curr_age = _this26.getAge(patient.date_of_birth);

            var riskgroup = true;

            var p_sensorsList = _this26.getPatientSensors(patient);

            if (patient.risk_group === 'None') {
              riskgroup = false;
            }

            var patientUI = {
              patient_Id: patient.patient_Id,
              time_tag: patient.time_tag,
              first_name: patient.first_name,
              last4Digit: patient.last4Digit,
              institute_name: patient.institute_name,
              department_name: patient.department_name,
              room_identifier: patient.room_identifier,
              bed_identifier: patient.bed_identifier,
              bed_location: patient.bed_location,
              date_of_birth: patient.date_of_birth,
              weight: patient.weight,
              gender: patient.gender,
              personal: {
                Name: patient.first_name,
                Age: curr_age,
                Gender: patient.gender,
                HighRiskGroup: riskgroup
              },
              hospitalization: null,
              measureResults: {
                heartRate: {
                  val: '-',
                  "new": true
                },
                bloodPresure: {
                  val: '-',
                  "new": true
                },
                spO2: {
                  val: '-',
                  "new": true
                },
                breathingRate: {
                  val: '-',
                  "new": true
                },
                extraO2: {
                  val: '',
                  "new": true
                },
                fever: {
                  val: '-',
                  "new": true
                },
                breathingInfo: {
                  val: '-',
                  "new": true
                }
              },
              alerts: '',
              progress: '',
              score: 0,
              history: {
                alerts: [
                  /*{name:'no pulse', time: new Date()},
                  {name:'no breath', time: new Date()}*/
                ],
                scoring: []
              },
              settings: _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PERSON_SETTINGS"],
              sensors_list: p_sensorsList
            }; //console.log(patientUI);

            _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].push(patientUI);
          });
        }
      }, {
        key: "getAge",
        value: function getAge(elastic_b_day) {
          if (elastic_b_day === undefined) {
            return 0;
          } //2020-04-13


          var y = +elastic_b_day.substring(0, 4);
          var m = +elastic_b_day.substring(5, 7);
          var d = +elastic_b_day.substring(8, 10); //console.log(y);
          //console.log(m);
          //console.log(d);

          var dateOfBirth = new Date(y, m, d);
          var timeDiff = Math.abs(Date.now() - dateOfBirth.getTime());
          var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
          return age;
        }
      }, {
        key: "getPatientSensors",
        value: function getPatientSensors(patient) {
          if (patient.sensors_list === undefined) {
            return [];
          }

          var newList = [];
          patient.sensors_list.forEach(function (s) {
            newList.push({
              unit_id: s.unit_Id,
              name_tag: s.sensor_name,
              time_tag: "2020-04-13T09:10:19.698Z",
              sensor_name: s.sensor_name,
              vendor_name: s.vendor_name,
              description: s.description,
              institute_name: patient.institute_name,
              department_name: patient.department_name,
              currently_in_use: 'true'
            });
          });
          return newList;
        } // end of set Patients List

      }, {
        key: "setPatientUIListMeasureResults",
        value: function setPatientUIListMeasureResults() {
          var _this27 = this;

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].forEach(function (p_ui) {
            p_ui.measureResults = _this27.getPatientUIMeasureResults(p_ui);
            p_ui.score = _this27.getPatientScore(p_ui.patient_Id);
          });
        }
      }, {
        key: "getPatientUIMeasureResults",
        value: function getPatientUIMeasureResults(patient) {
          var p_id = patient.patient_Id;
          var isUpdated = {
            heartRate: false,
            bloodPresure: false,
            spO2: false,
            breathingRate: false,
            extraO2: false,
            fever: false,
            breathingInfo: false
          };
          var return_Value = {
            heartRate: patient.measureResults.heartRate,
            bloodPresure: patient.measureResults.bloodPresure,
            spO2: patient.measureResults.spO2,
            breathingRate: patient.measureResults.breathingRate,
            extraO2: patient.measureResults.extraO2,
            fever: patient.measureResults.fever,
            breathingInfo: patient.measureResults.breathingInfo
          };

          for (var i = 0; i < _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["MEASURMENT_RESULTS"].length; i++) {
            if (isUpdated.heartRate && isUpdated.bloodPresure && isUpdated.spO2 && isUpdated.breathingRate && isUpdated.fever && isUpdated.breathingInfo) {
              break;
            } //todo - change back to p_id instead of '800d4470-7d45-11ea-ac59-2fbe9b8b5360'!!!!!!!


            if (_interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["MEASURMENT_RESULTS"][i].patientId === p_id) {
              var curr_mr = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["MEASURMENT_RESULTS"][i];

              if (!isUpdated.heartRate && curr_mr.secondery_priority.bpm !== undefined && curr_mr.secondery_priority.bpm !== 0) {
                var hr = curr_mr.secondery_priority.bpm + '';
                return_Value.heartRate.val = hr.substring(0, Math.min(5, hr.length));
                isUpdated.heartRate = true;
              }

              if (!isUpdated.bloodPresure && curr_mr.secondery_priority.blood_pressure_h !== undefined && curr_mr.secondery_priority.blood_pressure_h !== 0) {
                var bp_h = curr_mr.secondery_priority.blood_pressure_h + '';
                var bp_l = curr_mr.secondery_priority.blood_pressure_l + '';
                var p_bp = bp_h.substring(0, Math.min(bp_h.length, 5)) + '/' + bp_l.substring(0, Math.min(bp_l.length, 5));
                return_Value.bloodPresure.val = p_bp;
                isUpdated.bloodPresure = true;
              }

              if (!isUpdated.spO2 && curr_mr.secondery_priority.saturation !== undefined && curr_mr.secondery_priority.saturation !== 0) {
                var spO2 = curr_mr.secondery_priority.saturation + '';
                return_Value.spO2.val = spO2.substring(0, Math.min(spO2.length, 5));
                isUpdated.spO2 = true;
              }

              if (!isUpdated.breathingRate && curr_mr.primery_priority.breath_rate !== undefined && curr_mr.primery_priority.breath_rate !== 0) {
                return_Value.breathingRate.val = curr_mr.primery_priority.breath_rate;
                isUpdated.breathingRate = true;
              }

              if (!isUpdated.fever && curr_mr.secondery_priority.fever !== undefined && curr_mr.secondery_priority.fever !== 0) {
                return_Value.fever.val = curr_mr.secondery_priority.fever;
                isUpdated.fever = true;
              }

              if (!isUpdated.breathingInfo && curr_mr.primery_priority.cough_presence_rate !== undefined && curr_mr.primery_priority.cough_presence_rate !== 0) {
                var p_breathing_info = 'cough %: ' + curr_mr.primery_priority.cough_presence_rate;

                if (curr_mr.primery_priority.wheezing) {
                  p_breathing_info = 'Wheezing, ' + p_breathing_info;
                }

                return_Value.breathingInfo.val = p_breathing_info;
              }
            }
          }

          return return_Value;
        }
      }, {
        key: "getPatientScore",
        value: function getPatientScore(p_id) {
          for (var i = 0; i < _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"].length; i++) {
            //todo - change back to p_id instead of '15720b10-778c-11ea-99b7-1f57529dde94'!!!
            if (_interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"][i].PatientID === p_id) {
              console.log(_interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"][i]);
              return _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"][i].Score.Total; //return Math.floor(Math.random()*9); //check if table is dynamic
            }
          }

          return '-';
        }
      }, {
        key: "updateMeasureResults",
        value: function updateMeasureResults() {
          var client = new $.es.Client({
            // hosts: hosts
            host: _app_component__WEBPACK_IMPORTED_MODULE_1__["ELASTIC_HOST"]
          });
          var result = client.search({
            index: 'measure_results_v5',
            size: 100,
            body: {
              sort: [{
                "timeTag": {
                  "order": "desc"
                }
              }],
              query: {
                // CAUTION: dear Natali, do not query 'gte' for too long ago, it might not be efficient,
                //          let's say that an hour is enough
                "range": {
                  "timeTag": {
                    "gte": TIMETAG,
                    "lt": "now"
                  }
                }
              }
            } //match: {}

          }, function (err, resp, status) {
            if (resp) {
              //debugger;
              var exportData = resp.hits.hits; //console.log(exportData);

              if (!_app_component__WEBPACK_IMPORTED_MODULE_1__["REDISFLAG"]) {
                for (var i = 0; i < _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["MEASURMENT_RESULTS"].length; i++) {
                  _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["MEASURMENT_RESULTS"].pop();
                }

                exportData.forEach(function (result) {
                  if (result._source.patientId !== undefined) {
                    _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["MEASURMENT_RESULTS"].push(result._source);
                  }
                });
              }
            } else {}
          });
          var result = client.search({
            index: 'patient_status',
            size: 1000
          }, function (err, resp, status) {
            if (resp) {
              //debugger;
              var exportData = resp.hits.hits;

              for (var i = 0; i < _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"].length; i++) {
                _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"].pop();
              }

              exportData.forEach(function (status) {
                //console.log('------')
                //console.log(sensor._source.unit_id)
                if (status._source.Id !== undefined) {
                  _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PATIENT_STATUS_LIST"].push(status._source);
                }
              });
            } else {}
          });
        }
      }, {
        key: "getDateInElasticFormat",
        value: function getDateInElasticFormat() {
          var date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var hour = date.getHours() - 1;
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();
          var milliseconds = date.getMilliseconds();
          return year + '-' + this.getNumStr(month, 2) + '-' + this.getNumStr(day, 2) + 'T' + this.getNumStr(hour, 2) + ':' + this.getNumStr(minutes, 2) + ':' + this.getNumStr(seconds, 2) + '.' + this.getNumStr(milliseconds, 3);
        }
      }, {
        key: "getNumStr",
        value: function getNumStr(num, len) {
          if (len === 2) {
            if (num > 9) return num + '';
            return '0' + num;
          }

          if (num < 9) return '00' + num;
          if (num < 100) return '0' + num;
          return num;
        } // Buttons

      }, {
        key: "sortByScore",
        value: function sortByScore() {
          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].sort(function (p1, p2) {
            return p1.score < p2.score ? 1 : -1;
          });

          this.table.renderRows();
        }
      }, {
        key: "newSensor",
        value: function newSensor() {
          this.router.navigate(['/new-sensor']);
        }
      }, {
        key: "newPatient",
        value: function newPatient() {
          var newPerson = new _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["PersonHealthData"]();
          newPerson.patient_Id = this.getNextID();
          this.currPersonService.nextMessage(newPerson);
          this.router.navigate(['/new-patient']);
        }
      }, {
        key: "getNextID",
        value: function getNextID() {
          var nextID = -1;

          _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].forEach(function (element) {
            console.log(element.patient_Id);
            if (element.patient_Id >= nextID) nextID = element.patient_Id + 1;
          }); // console.log(nextID);


          return nextID;
        }
      }, {
        key: "patientData",
        value: function patientData(element) {
          this.currPersonService.nextMessage(element);
          this.router.navigate(['/patient-data']);
        }
      }, {
        key: "releasePatient",
        value: function releasePatient(element) {
          this.currPersonService.nextMessage(element);
          this.router.navigate(['/release-document']);
        } //end of buttons

      }, {
        key: "getLastKnown",
        value: function getLastKnown() {
          var _this28 = this;

          this.lastKnownService.getLastKnown().subscribe(function (lists) {
            _this28.lastKnownLst = lists[0];
            _this28.lastUpdateLst = lists[1]; //console.log(this.lastKnownLst)

            _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_3__["HEALTH_DATA"].forEach(function (p_ui) {
              p_ui.measureResults = _this28.getPatientUIMeasureResultsFromRedis(p_ui.patient_Id); //p_ui.measureResults = this.getPatientUIMeasureResultsFromRedis('a64ce230-73db-11ea-9ca9-e56bb32f5931');

              p_ui.score = _this28.getPatientScore(p_ui.patient_Id);
            });
          });
        }
      }, {
        key: "getLatestPatientInfo",
        value: function getLatestPatientInfo() {
          this.getLastKnown();
        }
      }, {
        key: "getPatientUIMeasureResultsFromRedis",
        value: function getPatientUIMeasureResultsFromRedis(patientId) {
          //console.log('In Function!!!!!!!!!!!!!!!!!!!!!!!!!!')
          //console.log(this.lastKnownLst)
          var PatientMeasureResults = {
            heartRate: {
              val: '-',
              "new": true
            },
            bloodPresure: {
              val: '-',
              "new": true
            },
            spO2: {
              val: '-',
              "new": true
            },
            breathingRate: {
              val: '-',
              "new": true
            },
            extraO2: {
              val: '',
              "new": true
            },
            fever: {
              val: '-',
              "new": true
            },
            breathingInfo: {
              val: '-',
              "new": true
            }
          };

          if (this.lastKnownLst[patientId] === undefined) {
            return PatientMeasureResults;
          }

          var p_lastKnown = JSON.parse(this.lastKnownLst[patientId]);
          var p_lastUpdate = JSON.parse(this.lastUpdateLst[patientId]);
          var hr = p_lastKnown.secondery_priority.bpm + '';

          if (hr === undefined) {
            hr = '-';
          }

          var bp_h = p_lastKnown.secondery_priority.blood_pressure_h + '';

          if (bp_h === undefined) {
            bp_h = '-';
          }

          var bp_l = p_lastKnown.secondery_priority.blood_pressure_l + '';

          if (bp_l === undefined) {
            bp_l = '-';
          }

          var p_bp = bp_h.substring(0, Math.min(bp_h.length, 5)) + '/' + bp_l.substring(0, Math.min(bp_l.length, 5));
          var spO2 = p_lastKnown.secondery_priority.saturation + '';

          if (spO2 === undefined) {
            spO2 = '0';
          }

          var br = p_lastKnown.primery_priority.breath_rate;

          if (br === undefined) {
            br = '0';
          }

          var fever = p_lastKnown.secondery_priority.fever + '';

          if (fever === undefined) {
            fever = '-';
          }

          ;
          var p_breathing_info = 'cough %: ' + p_lastKnown.primery_priority.cough_presence_rate;

          if (p_lastKnown.primery_priority.wheezing) {
            p_breathing_info = 'Wheezing, ' + p_breathing_info;
          }

          PatientMeasureResults.heartRate.val = hr.substring(0, Math.min(5, hr.length));
          PatientMeasureResults.bloodPresure.val = p_bp;
          PatientMeasureResults.spO2.val = spO2.substring(0, Math.min(spO2.length, 5));
          PatientMeasureResults.breathingRate.val = br;
          PatientMeasureResults.fever.val = fever.substring(0, Math.min(fever.length, 4));
          PatientMeasureResults.breathingInfo.val = p_breathing_info;
          PatientMeasureResults.heartRate["new"] = this.isNewInformation(p_lastUpdate.updates.bmp, 10);
          PatientMeasureResults.bloodPresure["new"] = this.isNewInformation(p_lastUpdate.updates.blood_pressure_h, 10) && this.isNewInformation(p_lastUpdate.updates.blood_pressure_l, 10);
          PatientMeasureResults.spO2["new"] = this.isNewInformation(p_lastUpdate.updates.saturation, 10);
          PatientMeasureResults.breathingRate["new"] = this.isNewInformation(p_lastUpdate.updates.breath_rate, 10);
          PatientMeasureResults.fever["new"] = this.isNewInformation(p_lastUpdate.updates.fever, 10);
          PatientMeasureResults.breathingInfo["new"] = this.isNewInformation(p_lastUpdate.updates.cough_presence_rate, 10) && this.isNewInformation(p_lastUpdate.updates.wheezing, 10);
          return PatientMeasureResults;
        }
      }, {
        key: "isNewInformation",
        value: function isNewInformation(originalTime, maxDelay) {
          var now = new Date(new Date().toUTCString());
          var time = new Date(new Date(originalTime).toUTCString());
          var diffMs = Math.abs(now.getTime() - time.getTime());
          var diffMins = Math.round(diffMs % 86400000 % 3600000 / 60000);
          return diffMins < maxDelay ? true : false;
        }
      }]);

      return PatientsComponent;
    }();

    PatientsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_curr_person_service__WEBPACK_IMPORTED_MODULE_4__["CurrPersonService"]
      }, {
        type: _services_last_known_service__WEBPACK_IMPORTED_MODULE_2__["LastKnownService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('table', null)], PatientsComponent.prototype, "table", void 0);
    PatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-patients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/patients/patients.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patients.component.scss */
      "./src/app/modules/patients/patients.component.scss"))["default"]]
    })], PatientsComponent);
    /***/
  },

  /***/
  "./src/app/modules/set-default-hospital/set-default-hospital.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/set-default-hospital/set-default-hospital.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesSetDefaultHospitalSetDefaultHospitalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0LWRlZmF1bHQtaG9zcGl0YWwvc2V0LWRlZmF1bHQtaG9zcGl0YWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/set-default-hospital/set-default-hospital.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/set-default-hospital/set-default-hospital.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SetDefaultHospitalComponent */

  /***/
  function srcAppModulesSetDefaultHospitalSetDefaultHospitalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetDefaultHospitalComponent", function () {
      return SetDefaultHospitalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SetDefaultHospitalComponent = /*#__PURE__*/function () {
      function SetDefaultHospitalComponent(router) {
        _classCallCheck(this, SetDefaultHospitalComponent);

        this.router = router;
        this.newHospital = '';
        this.hospitalsList = ['Asuta', 'Wolfson'];
        this.hospital = _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_HOSPITAL"];
      }

      _createClass(SetDefaultHospitalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "SetClick",
        value: function SetClick() {
          this.router.navigate(['/']);
        }
      }, {
        key: "AddHospital",
        value: function AddHospital() {
          if (this.newHospital === '') {
            return;
          }

          this.hospitalsList.push(this.newHospital);
          this.newHospital = '';
        }
      }]);

      return SetDefaultHospitalComponent;
    }();

    SetDefaultHospitalComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SetDefaultHospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-set-default-hospital',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./set-default-hospital.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/set-default-hospital/set-default-hospital.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./set-default-hospital.component.scss */
      "./src/app/modules/set-default-hospital/set-default-hospital.component.scss"))["default"]]
    })], SetDefaultHospitalComponent);
    /***/
  },

  /***/
  "./src/app/services/app-config.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/app-config.service.ts ***!
    \************************************************/

  /*! exports provided: AppConfigService */

  /***/
  function srcAppServicesAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppConfigService = /*#__PURE__*/function () {
      function AppConfigService(http) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
      }

      _createClass(AppConfigService, [{
        key: "loadAppConfig",
        value: function loadAppConfig() {
          var _this29 = this;

          return this.http.get('./../../assets/config/app-cinfig.json').toPromise().then(function (data) {
            _this29.appConfig = data;
          });
        }
      }, {
        key: "getBaseUrl",
        value: function getBaseUrl() {
          return this.appConfig.baseUrl;
        }
      }, {
        key: "getNewSensorUrl",
        value: function getNewSensorUrl() {
          return this.appConfig.newSensorUrl;
        }
      }, {
        key: "getNewPatientUrl",
        value: function getNewPatientUrl() {
          return this.appConfig.newPatientUrl;
        }
      }, {
        key: "getElastic",
        value: function getElastic() {
          return this.appConfig.elastic;
        }
      }, {
        key: "getRedisFlag",
        value: function getRedisFlag() {
          return this.appConfig.redis_flag;
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppConfigService);
    /***/
  },

  /***/
  "./src/app/services/curr-person.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/curr-person.service.ts ***!
    \*************************************************/

  /*! exports provided: CurrPersonService */

  /***/
  function srcAppServicesCurrPersonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrPersonService", function () {
      return CurrPersonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../interfaces/PersonData */
    "./src/app/interfaces/PersonData.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CurrPersonService = /*#__PURE__*/function () {
      function CurrPersonService() {
        _classCallCheck(this, CurrPersonService);

        this.selectedPersonSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _interfaces_PersonData__WEBPACK_IMPORTED_MODULE_1__["PersonHealthData"]());
        this.sharedMessage = this.selectedPersonSubject.asObservable();
      }

      _createClass(CurrPersonService, [{
        key: "nextMessage",
        value: function nextMessage(selectedPerson) {
          this.selectedPersonSubject.next(selectedPerson);
        }
      }]);

      return CurrPersonService;
    }();

    CurrPersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CurrPersonService);
    /***/
  },

  /***/
  "./src/app/services/last-known.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/last-known.service.ts ***!
    \************************************************/

  /*! exports provided: LastKnownService */

  /***/
  function srcAppServicesLastKnownServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastKnownService", function () {
      return LastKnownService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/services/app-config.service.ts");

    var LastKnownService = /*#__PURE__*/function () {
      function LastKnownService(http, config) {
        _classCallCheck(this, LastKnownService);

        this.http = http;
        this.config = config;
        this.url = this.config.getBaseUrl();
      }

      _createClass(LastKnownService, [{
        key: "getLastKnown",
        value: function getLastKnown() {
          var lastKnownVal = this.http.get(this.url + 'getLastKnown');
          var latUpdate = this.http.get(this.url + 'getLastUpdate');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([lastKnownVal, latUpdate]);
        }
      }]);

      return LastKnownService;
    }();

    LastKnownService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_4__["AppConfigService"]
      }];
    };

    LastKnownService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], LastKnownService);
    /***/
  },

  /***/
  "./src/app/services/patients.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/patients.service.ts ***!
    \**********************************************/

  /*! exports provided: PatientsService */

  /***/
  function srcAppServicesPatientsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsService", function () {
      return PatientsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/services/app-config.service.ts");

    var PatientsService = /*#__PURE__*/function () {
      function PatientsService(http, config) {
        _classCallCheck(this, PatientsService);

        this.http = http;
        this.config = config;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.post_url = this.config.getNewPatientUrl();
      }

      _createClass(PatientsService, [{
        key: "addPatient",
        value: function addPatient(new_patient) {
          return this.http.post(this.post_url, JSON.stringify(new_patient), this.httpOptions).pipe();
        }
      }]);

      return PatientsService;
    }();

    PatientsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]
      }];
    };

    PatientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], PatientsService);
    /***/
  },

  /***/
  "./src/app/services/sensors.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/sensors.service.ts ***!
    \*********************************************/

  /*! exports provided: SensorsService */

  /***/
  function srcAppServicesSensorsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SensorsService", function () {
      return SensorsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-config.service */
    "./src/app/services/app-config.service.ts");

    var SensorsService = /*#__PURE__*/function () {
      function SensorsService(http, config) {
        _classCallCheck(this, SensorsService);

        this.http = http;
        this.config = config;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this.post_url = this.config.getNewSensorUrl();
      }

      _createClass(SensorsService, [{
        key: "addSensor",
        value: function addSensor(new_sensor) {
          console.log(JSON.stringify(new_sensor));
          return this.http.post(this.post_url, JSON.stringify(new_sensor), this.httpOptions).pipe();
        }
      }]);

      return SensorsService;
    }();

    SensorsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _app_config_service__WEBPACK_IMPORTED_MODULE_3__["AppConfigService"]
      }];
    };

    SensorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], SensorsService);
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcOTk5OTIwXFxEZXNrdG9wXFxDb3ZpZDE5LXdlYl9zZXJ2ZXJcXENvdmlkMTlfU3ByaW50TVJfY2xpZW50XFxTUkMtY292aWQxOVVJL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59IiwiZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      //logo_path = './../../../../assets/logo/covidlogo.png';
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.logo_path = './../../../../assets/logo/medic.png';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "OnClick",
        value: function OnClick() {
          this.router.navigate(['']);
        }
      }, {
        key: "newSensor",
        value: function newSensor() {
          this.router.navigate(['/new-sensor']);
        }
      }, {
        key: "setHospital",
        value: function setHospital() {
          this.router.navigate(['/set-default-hospital']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); //import { FlexLayoutModule } from '@angular/flex-layout';


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], //FlexLayoutModule,
      _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"]],
      exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
    })], SharedModule);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'http://52.16.82.127:3000/',
      newSensorUrl: 'http://52.16.82.127:4000/new_sensor',
      newPatientUrl: 'http://52.16.82.127:4000/new_patient',
      elastic: 'https://search-covid198-es-2-x6zr2th7oiq7sjzp653cs3k3xm.eu-west-1.es.amazonaws.com/',
      //'https://search-covid19-es-xpwsq3s2uyodkz7tqizo5oxcty.eu-west-1.es.amazonaws.com/',
      redis_flag: true
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\999920\Desktop\Covid19-web_server\Covid19_SprintMR_client\SRC-covid19UI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map