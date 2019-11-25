(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"toolbar\">\n  <div>\n    <div style=\"display:flex;\">\n      <button fxShow fxHide.gt-sm mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon id=\"menu\">menu</mat-icon>\n\n      </button>\n    </div>\n    <ul id=\"lang-nav\" fxLayout=\"row\">\n      <li><a\n        (click)=\"onLangChange('de');\"\n        [ngClass]=\"selectedLang==='de' ? 'active' : 'not-active'\"\n        lang=\"de\"\n        title=\"Deutsch\"\n        aria-label=\"Deutsch\">DE</a></li>\n      <li><a\n        (click)=\"onLangChange('en');\"\n        [ngClass]=\"selectedLang==='en' ? 'active' : 'not-active'\"\n        lang=\"en\"\n        title=\"English\"\n        aria-label=\"English\">EN</a></li>\n    </ul>\n    <div *ngIf=\"isAuthenticated\" id=\"user-icon\">\n    <mat-icon>person</mat-icon>\n    </div>\n    <div fxLayout=\"row\">\n      <a mat-button *ngIf=\"!isAuthenticated\" routerLink=\"/login\" routerLinkActive=\"active\">{{ 'LOGIN' | translate }}</a>\n      <a mat-button *ngIf=\"isAuthenticated\" routerLink=\"/logout\" routerLinkActive=\"active\">{{ 'LOGOUT' | translate }}</a>\n      <a mat-button *ngIf=\"!isAuthenticated\" routerLink=\"/register\" routerLinkActive=\"active\">{{ 'REGISTER' | translate }}</a>\n      <a mat-button *ngIf=\"isAuthenticated\" routerLink=\"/create\" routerLinkActive=\"active\">{{ 'CREATE' | translate }}</a>\n    </div>\n  </div>\n\n  <div id=\"logo-container\">\n    <div id=\"logo-background\">\n      <img id=\"logo\" src=\"https://minio.digisus.ch/ossdirectory-assets/OSSD_Logo_rgb.svg\">\n    </div>\n  </div>\n</mat-toolbar>\n<div id=\"flex-sidenav\">\n  <mat-sidenav-container fxLayout=\"column\" class=\"mat-typography\" fxFlexFill>\n\n    <!-- fxShow fxHide.gt-sm -->\n    <mat-sidenav color=\"primary\" #sidenav fxLayout=\"column\" mode=\"side\" opened=\"true\">\n      <div class=\"menu\" fxLayout=\"column\">\n        <!--<app-navbar-item [label]=\"'Home'\" [url]=\"'/'\"></app-navbar-item>-->\n        <app-navbar-item *ngFor=\"let item of navbarItems\" (activate)=\"activateLink(item)\" [item]=\"item\"\n                         [active]=\"selectedItem === item\"></app-navbar-item>\n      </div>\n    </mat-sidenav>\n\n    <mat-sidenav-content fxFLexFill>\n\n      <div id=\"content\" fxFlex>\n        <router-outlet></router-outlet>\n      </div>\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n<app-footer></app-footer>\n  \n  \n  \n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/auth/login/login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/auth/login/login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <mat-card>\n\n            <mat-card-header>\n                <mat-card-title>Login</mat-card-title>\n            </mat-card-header>\n        \n            <mat-card-content>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n                    </mat-form-field>\n        \n                    <br>\n        \n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required>\n                    </mat-form-field>\n                </form>\n            </mat-card-content>\n        \n            <mat-card-actions>\n                <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n                <button mat-flat-button routerLink=\"/register\">Register</button>\n            </mat-card-actions>\n        </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/auth/registration/registration.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/auth/registration/registration.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlexFill>\n    <mat-card>\n    \n            <mat-card-header>\n                <mat-card-title>Register</mat-card-title>\n            </mat-card-header>\n        \n            <mat-card-content>\n                <form>\n                    <mat-form-field>\n                        <input matInput type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n                    </mat-form-field>\n        \n                    <br>\n        \n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required>\n                    </mat-form-field>\n    \n                    <br>\n    \n                    <mat-form-field>\n                        <input matInput type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirm\" name=\"confirm\" required>\n                    </mat-form-field>\n                </form>\n            </mat-card-content>\n        \n            <mat-card-actions>\n                <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\n            </mat-card-actions>\n        \n        </mat-card>\n    \n    </div>\n        "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/add-relationship/add-relationship.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/add-relationship/add-relationship.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"canEdit\" class=\"add-relation\">\n  <mat-icon (click)=\"openDialog()\">add</mat-icon>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/badge/badge.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/badge/badge.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"badge-container\" *ngIf=\"items\">\n  <div class=\"community-badge\" *ngFor=\"let community of items\">\n    <img src=\"http://minio.digisus.ch/oss-directory/{{community.Community.imageUrl}}\">\n  </div>\n  <div *ngIf=\"canEdit\" (click)=\"toggleAddNew()\" class=\"add-community-badge\">\n    <mat-icon>add</mat-icon>\n  </div>\n  <div *ngIf=\"addNew\" class=\"add-community-badge-input\">\n    <input type=\"text\" matInput [(ngModel)]=\"community\" [matAutocomplete]=\"auto\">\n    <a (click)=\"addCommunityBadge()\" class=\"submit-button\">Add</a>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let community of allCommunities\" [value]=\"community\">{{community.translation[0].title}}</mat-option>\n    </mat-autocomplete>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/claim/claim.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/claim/claim.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" class=\"detail-form-input\">\n  <input (focusout)=\"update()\" class=\"claim\" [disabled]=\"!canEdit\" type=\"text\" [(ngModel)]=\"item.claim\" placeholder=\"claim\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/contact/contact.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/contact/contact.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"item\" class=\"detail-form-input\">\n  <input [disabled]=\"!canEdit\" (focusout)=\"updateAddress()\" class=\"contact\" type=\"text\" [(ngModel)]=\"address.address\" placeholder=\"Musterstrasse\">\n  <input [disabled]=\"!canEdit\" (focusout)=\"updateAddress2()\" class=\"contact\" type=\"text\" [(ngModel)]=\"address.address2\" placeholder=\"Musterpostfach\">\n  <div style=\"display:flex;flex-direction: rows\"> \n    <input [disabled]=\"!canEdit\" (focusout)=\"updateZip()\" class=\"contact\" type=\"text\" size=\"4\" [(ngModel)]=\"address.zip\" placeholder=\"0000\">\n    <input [disabled]=\"!canEdit\" (focusout)=\"updateCity()\" class=\"contact\" type=\"text\" [(ngModel)]=\"address.city\" placeholder=\"Musterstadt\">\n</div>\n  <input [disabled]=\"!canEdit\" (focusout)=\"updateUrl()\" class=\"contact\" type=\"text\" [(ngModel)]=\"item.url\" placeholder=\"url\">\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/description/description.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/description/description.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ckeditor *ngIf=\"item\"\n          (focusout)=\"update()\"\n          [disabled]=\"!canEdit\"\n          [(ngModel)]=\"item.description\"\n          [config]=\"{ placeholder : 'description', toolbar: [ 'heading', '|', 'bold', 'italic' ], width: '100' }\"\n          [editor]=\"Editor\">\n</ckeditor>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/grid-item/grid-item.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/grid-item/grid-item.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"\n\n     style=\"margin-bottom: 40px; \"\n\n     fxFlex.xs=\"200px\"\n     fxFlex.sm=\"200px\"\n     fxFlex.md=\"200px\"\n     fxFlex.lg=\"200px\"\n     fxFlex.xl=\"200px\">\n  <div class=\"grid-item-border\">\n    <div *ngIf=\"item.sequence\" class=\"grid-item-overlay\"\n         routerLink=\"/hier-kommt-spezifischer-text/{{item.sequence}}/oder-auch-hier/bald-auch-ganz-dynamisch\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <div class=\"image-wrapper\">\n        <img *ngIf=\"item.imageUrl\" [src]=\"item.imageUrl\">\n        </div>\n        <p>{{item.translations[0].title}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<!--  export styles and make a variable for margin-bottom (coresponds with layoutgap in parent view)-->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/image-uploader/image-uploader.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/image-uploader/image-uploader.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"file\">Choose File</label>\n    <input type=\"file\"\n           id=\"file\"\n           (change)=\"handleFileInput($event.target.files)\">\n</div>\n\n\n\n<!-- <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" \n(onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n    <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n      <button  type=\"button\" (click)=\"openFileSelector()\">Choose Image</button>\n    </ng-template>\n</ngx-file-drop> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/image/image.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/image/image.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" class=\"img-container\">\n  <div class=\"title-img\" (mouseenter)=\"mouseenter()\" (mouseleave)=\"mouseleave()\">\n    <img *ngIf=\"!mouseover || !canEdit\" src=\"{{item.imageUrl}}\" (error)=\"imageNotLoaded($event)\">\n    <div class=\"img-upload\">\n        <app-image-uploader ></app-image-uploader>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/search/search.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/search/search.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input type=\"text\" class=\"search\" placeholder=\"Search\" matInput [(ngModel)]=\"searchString\">\n  <!--<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n    <mat-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</mat-option>\n  </mat-autocomplete>-->\n</mat-form-field>\n<a class=\"mat-button\" (click)=\"onSearch()\">Search</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/stats/stats.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/stats/stats.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"formattedDate; else noDate\" class=\"detail-form-input\">\n  <body class=\"stats\">Zuletzt geändert: {{formattedDate}}</body>\n</div>\n<ng-template #noDate>\n    <body class=\"stats\">Kein Erstellungs-/Änderungsdatum gefunden.</body>\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/base/components/title/title.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/base/components/title/title.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item\" class=\"detail-form-input\">\n  <input (focusout)=\"update()\" class=\"title\" type=\"text\" [disabled]=\"!canEdit\" [(ngModel)]=\"item.title\" placeholder=\"title\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/create-new/create-new.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/create-new/create-new.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create a new item</h1>\n<a class=\"mat-raised-button\" (click)=\"create('Client')\">new client</a>\n<a class=\"mat-raised-button\" (click)=\"create('Vendor')\">new vendor</a>\n<a class=\"mat-raised-button\" (click)=\"create('Product')\">new product</a>\n<a class=\"mat-raised-button\" (click)=\"create('SuccessStory')\">new success story</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/detail/detail-layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/detail/detail-layout.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-gradient\">\n\n<div fxLayout=\"column\" class=\"detail-overlay detail-container\">\n  <div  fxLayout.gt-sm=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center\">\n    <div fxFlex.gt-sm=\"1 1 30%\" fxFlex.lt-md=\"1 1 100%\" class=\"detail-left\">\n      <div id=\"nw\">\n        <ng-content select=\"[detail-nw]\"></ng-content>\n      </div>\n      <mat-divider></mat-divider>\n      <div id=\"sw\">\n        <ng-content select=\"[detail-sw]\"></ng-content>\n      </div>\n    </div>\n    <div fxFlex.gt-sm=\"1 1 70%\" fxFlex.lt-md=\"1 1 100%\" class=\"detail-right\">\n      <div id=\"ne-top\">\n        <ng-content select=\"[detail-ne-top]\"></ng-content>\n      </div>\n      <div id=\"ne-mid\">\n        <ng-content select=\"[detail-ne-mid]\"></ng-content>\n      </div>\n      <div id=\"ne-bot\">\n        <ng-content select=\"[detail-ne-bot]\"></ng-content>\n      </div>\n      <div id=\"se\">\n        <ng-content select=\"[detail-se]\"></ng-content>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <ng-content select=\"[detail-relations]\"></ng-content>\n  </div>\n</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/detail/detail.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/detail/detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!type\">\n  <mat-progress-spinner></mat-progress-spinner>\n</ng-container>\n<ng-container *ngIf=\"type\" [ngSwitch]=\"type\">\n  <app-client-detail *ngSwitchCase=\"'Client'\"></app-client-detail>\n  <app-community-detail *ngSwitchCase=\"'Community'\">     </app-community-detail>\n  <app-event-detail *ngSwitchCase=\"'Event'\">     </app-event-detail>\n  <app-job-detail *ngSwitchCase=\"'Job'\">     </app-job-detail>\n  <app-news-detail *ngSwitchCase=\"'News'\">      </app-news-detail>\n  <app-news-feed-detail *ngSwitchCase=\"'NewsFeed'\">     </app-news-feed-detail>\n  <app-product-detail *ngSwitchCase=\"'Product'\">     </app-product-detail>\n  <app-rss-detail *ngSwitchCase=\"'RSS'\">     </app-rss-detail>\n  <app-success-story-detail *ngSwitchCase=\"'SuccessStory'\">     </app-success-story-detail>\n  <app-vendor-detail *ngSwitchCase=\"'Vendor'\">    </app-vendor-detail>\n  <app-default-detail *ngSwitchDefault></app-default-detail>\n</ng-container>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/drop-down-grid/drop-down-grid-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/drop-down-grid/drop-down-grid-layout.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content drop-down-grid-header></ng-content>\n<ng-content drop-down-grid-items></ng-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/drop-down-grid/drop-down-grid.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/drop-down-grid/drop-down-grid.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-divider></mat-divider>\n<div class=\"panel-title\">\n  <ng-content select=\"[drop-down-grid-header]\"></ng-content>\n  <div (click)=\"toggleExpansionPanel()\">\n    <a class=\"expansion-panel-icon\">\n      <mat-icon *ngIf=\"!expansionPanelOpen\">keyboard_arrow_down</mat-icon>\n    </a>\n    <a class=\"expansion-panel-icon\">\n      <mat-icon *ngIf=\"expansionPanelOpen\">keyboard_arrow_up</mat-icon>\n    </a>\n  </div>\n</div>\n<div> <!-- TODO: hardcoded height for expansion panel -->\n  <div [ngClass]=\"{'panel-open': expansionPanelOpen}\" class=\"expansion-panel\">\n    <ng-content select=\"[drop-down-grid-items]\"></ng-content>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <mat-toolbar id=\"footer\">\n    <div id=\"skew\"></div>\n    <div id=\"footer-content\">\n      <a>Über uns</a>\n      <a>Newsletter</a>\n      <a>Kontakt</a>\n      <a>Nutzungsbedingungen</a>\n      <a>CH Open Initiativen</a>\n    </div>\n  </mat-toolbar>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/grid/grid-layout.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/grid/grid-layout.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"row\">\n\n    <div fxFlex=\"200px\">\n        <ng-content select=\"[grid-left]\"></ng-content>\n      </div>\n\n  <div fxLayout=\"column\" fxFlex=\"grow\">\n\n      <div>\n        <ng-content select=\"[grid-top]\"></ng-content>\n      </div>\n\n    <div >\n      <ng-content select=\"[grid-mid]\"></ng-content>\n    </div>\n    \n    <div fxFlex=\"50px\">\n      <ng-content select=\"[grid-bot]\" ></ng-content>\n    </div>\n  </div>\n\n  <div fxFlex=\"200px\">\n        <ng-content select=\"[grid-right]\"></ng-content>\n      </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/grid/grid.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/grid/grid.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"config.get('type')\">\n\n  <app-client-grid *ngSwitchCase=\"'Client'\">      </app-client-grid>\n  <app-community-grid *ngSwitchCase=\"'Community'\">     </app-community-grid>\n  <app-event-grid *ngSwitchCase=\"'Event'\">     </app-event-grid>\n  <app-job-grid *ngSwitchCase=\"'Job'\">     </app-job-grid>\n  <app-news-grid *ngSwitchCase=\"'News'\">      </app-news-grid>\n  <app-news-feed-grid *ngSwitchCase=\"'NewsFeed'\">     </app-news-feed-grid>\n  <app-product-grid *ngSwitchCase=\"'Product'\">     </app-product-grid>\n  <app-rss-grid *ngSwitchCase=\"'RSS'\">     </app-rss-grid>\n  <app-success-story-grid *ngSwitchCase=\"'SuccessStory'\">     </app-success-story-grid>\n  <app-vendor-grid *ngSwitchCase=\"'Vendor'\">      </app-vendor-grid>\n\n  <app-default-grid *ngSwitchDefault></app-default-grid>\n\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/home/home.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/home/home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h1 i18n=\"i18n test|this is a test for i18n usage@@test\">Welcome to the new and improved OSS Directory!! :-)</h1>\n\n  <!--\n  <h1>TODO</h1>\n  <mat-chip-list class=\"mat-chip-list-stacked\">\n      <mat-chip selected color=\"warn\">I18N</mat-chip>\n      <mat-chip selected color=\"accent\">Publisher/Subscriber Implementation</mat-chip>\n      <mat-chip selected color=\"accent\">Generic User Model</mat-chip>\n      <mat-chip selected color=\"accent\">Password reset</mat-chip>\n      <mat-chip selected>Router animations</mat-chip>\n    </mat-chip-list>\n\n  -->\n  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-detail/client-detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/client/client-detail/client-detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail>\n  <div detail-relations>\n\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Success Stories</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addSuccessStory($event)\"\n                              [component]=\"clientSuccessStory\"></app-add-relationship>\n        <app-client-successstory-relation-item class=\"relation-item\" *ngFor=\"let successStory of successStories\"\n                                               [successStory]=\"successStory\"></app-client-successstory-relation-item>\n      </div>\n    </app-drop-down-grid>\n  </div>\n</app-default-detail>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-grid/client-grid.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/client/client-grid/client-grid.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newSuccessStory\" [matAutocomplete]=\"auto\">\n    <mat-label>Success Story</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let successstory of allSuccessStories\" [value]=\"successstory\">{{successstory.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addSuccessStory()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"successStory\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/community/community-detail/community-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/community/community-detail/community-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail></app-default-detail>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/community/community-grid/community-grid.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/community/community-grid/community-grid.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/default/default-detail/default-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/default/default-detail/default-detail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-detail-layout>\n\n  <app-image detail-nw></app-image>\n  \n  <app-badge detail-ne-top></app-badge>\n  <app-title detail-ne-mid></app-title>\n  <app-claim detail-ne-bot></app-claim>\n\n  <app-description detail-se></app-description>\n\n  <app-contact detail-sw></app-contact>\n  <app-stats detail-se></app-stats>\n\n  <ng-content detail-relations select=\"[detail-relations]\"></ng-content>\n\n</app-detail-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/default/default-grid/default-grid.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/default/default-grid/default-grid.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-layout>\n  <div grid-top>\n  <h1>{{type}}</h1>\n    <mat-form-field>\n      <input type=\"text\" class=\"search\" placeholder=\"{{'SEARCHSTRING' | translate }}\" matInput [(ngModel)]=\"searchString\">\n      <!--<mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let item of items\" [value]=\"item\">{{item}}</mat-option>\n      </mat-autocomplete>-->\n    </mat-form-field>\n    <a class=\"mat-button\" (click)=\"updateGrid()\">{{'SEARCH' | translate }}</a>\n  </div>\n\n  <div grid-mid fxLayout=\"row wrap\" fxLayoutGap=\"40px\">\n      <ng-container *ngFor=\"let item of items\">\n        <div \n          fxFlex.xs=\"200px\"\n          fxFlex.sm=\"200px\"\n          fxFlex.md=\"200px\"\n          fxFlex.lg=\"200px\"\n          fxFlex.xl=\"200px\"\n          \n          fxLayout=\"column\">\n\n            <app-grid-item \n              fxLayout=\"column\"\n\n              style=\"margin-bottom: 40px; \"\n\n              fxFlex.xs=\"200px\"\n              fxFlex.sm=\"200px\"\n              fxFlex.md=\"200px\"\n              fxFlex.lg=\"200px\"\n              fxFlex.xl=\"200px\"\n              [item]=\"item\"></app-grid-item> <!-- Export style and check how well fxLayoutGap works in different browsers -->\n        </div>\n      </ng-container>\n    \n  </div>\n</app-grid-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/event/event-detail/event-detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/event/event-detail/event-detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail></app-default-detail>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/event/event-grid/event-grid.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/event/event-grid/event-grid.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/job/job-detail/job-detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/job/job-detail/job-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail></app-default-detail>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/job/job-grid/job-grid.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/job/job-grid/job-grid.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail></app-default-detail>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-layout>\n  <h1 grid-top>NewsFeed</h1>\n\n\n  <div *ngFor=\"let feed of newsfeed\" grid-mid>\n    <h2><b>{{feed.name}}</b></h2>\n\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\">\n\n      <ng-container *ngFor=\"let item of feed.items\">\n        <div\n          fxFlex.xs=\"200px\"\n          fxFlex.sm=\"200px\"\n          fxFlex.md=\"200px\"\n          fxFlex.lg=\"200px\"\n          fxFlex.xl=\"200px\"\n\n          fxLayout=\"column\">\n          <a href=\"{{item.link}}\" target=\"_blank\">\n            <h3>{{item.title}}</h3>\n          </a>\n          <h4>{{item.pubDate}}</h4>\n          <!-- Export style and check how well fxLayoutGap works in different browsers -->\n        </div>\n      </ng-container>\n\n    </div>\n  </div>\n</app-grid-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/news/news-detail/news-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/news/news-detail/news-detail.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail></app-default-detail>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/news/news-grid/news-grid.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/news/news-grid/news-grid.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-detail/product-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/product/product-detail/product-detail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-detail-layout>\n\n  <app-image detail-nw></app-image>\n\n  <app-title detail-ne-mid></app-title>\n  <app-claim detail-ne-bot></app-claim>\n\n  <app-description detail-se></app-description>\n\n  <app-stats detail-se></app-stats>\n\n  <div detail-relations>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Vendors</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addVendor($event)\" [component]=\"productVendor\"></app-add-relationship>\n        <app-product-vendor-relation-item class=\"relation-item\" *ngFor=\"let vendor of vendors\"\n                                          [vendor]=\"vendor.Vendor\"></app-product-vendor-relation-item>\n      </div>\n    </app-drop-down-grid>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Success Stories</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addSuccessStory($event)\"\n                              [component]=\"productSuccessStory\"></app-add-relationship>\n        <app-product-successstory-relation-item class=\"relation-item\" *ngFor=\"let successStory of successStories\"\n                                                [successStory]=\"successStory\"></app-product-successstory-relation-item>\n      </div>\n    </app-drop-down-grid>\n  </div>\n\n</app-detail-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-grid/product-grid.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/product/product-grid/product-grid.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newSuccessStory\" [matAutocomplete]=\"auto\">\n    <mat-label>Success Story</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let successstory of allSuccessStories\" [value]=\"successstory\">{{successstory.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addSuccessStory()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"successStory\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newVendor\" [matAutocomplete]=\"auto\">\n    <mat-label>Vendor</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let vendor of allVendors\" [value]=\"vendor\">{{vendor.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addVendor()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"vendor\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/rss/rss-detail/rss-detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/rss/rss-detail/rss-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail></app-default-detail>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/rss/rss-grid/rss-grid.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/rss/rss-grid/rss-grid.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>success-story-client-relation-item works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-detail/success-story-detail.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/success-story-detail/success-story-detail.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-detail-layout>\n\n  <app-image detail-nw></app-image>\n\n  <app-title detail-ne-mid></app-title>\n\n  <app-description detail-se></app-description>\n\n  <app-stats detail-se></app-stats>\n\n  <div detail-relations>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Client</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addClient($event)\" [component]=\"successStoryClient\"></app-add-relationship>\n        <app-successstory-client-relation-item *ngIf=\"client\" class=\"relation-item\"\n                                               [client]=\"client\"></app-successstory-client-relation-item>\n      </div>\n    </app-drop-down-grid>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Vendor</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addVendor($event)\" [component]=\"successStoryVendor\"></app-add-relationship>\n        <app-successstory-vendor-relation-item *ngIf=\"vendor\" class=\"relation-item\"\n                                               [vendor]=\"vendor\"></app-successstory-vendor-relation-item>\n      </div>\n    </app-drop-down-grid>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Products</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addProduct($event)\" [component]=\"successStoryProduct\"></app-add-relationship>\n        <app-successstory-product-relation-item class=\"relation-item\" *ngFor=\"let product of products\"\n                                                [product]=\"product\"></app-successstory-product-relation-item>\n      </div>\n    </app-drop-down-grid>\n  </div>\n\n</app-detail-layout>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-grid/success-story-grid.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/success-story-grid/success-story-grid.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.html ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>success-story-product-relation-item works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>success-story-vendor-relation-item works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newClient\" [matAutocomplete]=\"auto\">\n    <mat-label>Client</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let client of allClients\" [value]=\"client\">{{client.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addClient()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"client\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newProduct\" [matAutocomplete]=\"auto\">\n    <mat-label>Product</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let product of allProducts\" [value]=\"product\">{{product.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addProduct()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.html ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"product\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newVendor\" [matAutocomplete]=\"auto\">\n    <mat-label>Vendor</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let vendor of allVendors\" [value]=\"vendor\">{{vendor.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addVendor()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"vendor\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-detail/vendor-detail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/vendor/vendor-detail/vendor-detail.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-detail>\n  <div detail-relations>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Products</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addProduct($event)\" [component]=\"vendorProduct\"></app-add-relationship>\n        <app-vendor-product-relation-item class=\"relation-item\" *ngFor=\"let product of products\"\n                                          [product]=\"product.Product\"></app-vendor-product-relation-item>\n      </div>\n    </app-drop-down-grid>\n    <app-drop-down-grid>\n      <h2 drop-down-grid-header>Success Stories</h2>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"40px\" drop-down-grid-items>\n        <app-add-relationship (onAccept)=\"addSuccessStory($event)\"\n                              [component]=\"vendorSuccessStory\"></app-add-relationship>\n        <app-vendor-successstory-relation-item class=\"relation-item\" *ngFor=\"let successStory of successStories\"\n                                               [successStory]=\"successStory\"></app-vendor-successstory-relation-item>\n      </div>\n    </app-drop-down-grid>\n  </div>\n</app-default-detail>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-grid/vendor-grid.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/vendor/vendor-grid/vendor-grid.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-default-grid></app-default-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newProduct\" [matAutocomplete]=\"auto\">\n    <mat-label>Product</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let product of allProducts\" [value]=\"product\">{{product.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addProduct()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"product\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n  <mat-form-field>\n    <input type=\"text\" matInput [(ngModel)]=\"newSuccessStory\" [matAutocomplete]=\"auto\">\n    <mat-label>Success Story</mat-label>\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let successstory of allSuccessStories\" [value]=\"successstory\">{{successstory.translation[0].title}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" mat-button (click)=\"addSuccessStory()\">Add</button>\n  <button class=\"mat-raised-button\" mat-button (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-grid-item [item]=\"successStory\"></app-grid-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/navbar/navbar-item/navbar-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/navbar/navbar-item/navbar-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex class=\"navbar-button-wrapper\" (click)=\"onClick()\" routerLink={{item.url}}>\n  <div fxFlex=\"30\" class=\"nav-arrow-container\">\n    <img *ngIf=\"active\" src=\"https://minio.digisus.ch/ossdirectory-assets/oss-arrow.svg\" height=\"20px\">\n  </div>\n  <div fxFlex=\"70\">\n    <a [ngClass]=\"{ 'active-link' : active }\" class=\"navbar-button\">\n      {{item.name | translate}}\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n  <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <img id=\"logo\" src=\"https://minio.digisus.ch/oss-directory/oss-logo.png\">\n  <div fxFlex=\"1 1 auto\">\n    <a mat-button routerLink=\"/\">Home</a>\n    <mat-divider [vertical]=\"true\"></mat-divider>\n    <a mat-button routerLink=\"/content/vendor\">Vendors</a>\n    <mat-divider [vertical]=\"true\"></mat-divider>\n    <a mat-button routerLink=\"/content/client\">Clients</a>\n    <mat-divider [vertical]=\"true\"></mat-divider>\n    <a mat-button routerLink=\"/content/community\">Communities</a>\n    <mat-divider [vertical]=\"true\"></mat-divider>\n    <a mat-button routerLink=\"/content/product\">Products</a>\n    <mat-divider [vertical]=\"true\"></mat-divider>\n    <a mat-button routerLink=\"/content/successstory\">Success Stories</a>\n  </div>\n\n  <button class=\"user-menu-button\" mat-button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons\">person</i></button>\n\n  <mat-menu #menu=\"matMenu\">\n    <a *ngIf=\"!authenticated\" mat-button routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n    <a *ngIf=\"!authenticated\" mat-button routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n    <a *ngIf=\"authenticated\" mat-button routerLink=\"/user/edit\" routerLinkActive=\"active\">Edit user</a>\n    <a *ngIf=\"authenticated\" mat-button (click)=\"logout()\">Logout</a>\n  </mat-menu>\n</mat-toolbar>\n\n<mat-sidenav color=\"primary\" #sidenav fxLayout=\"column\" mode=\"over\" opened=\"false\" fxHide.gt-sm=\"true\">\n  <div fxLayout=\"column\">\n    <a mat-list-item routerLink=\"/\">Home</a>\n    <a mat-list-item routerLink=\"/content/vendor\">Vendors</a>\n    <a mat-list-item routerLink=\"/content/client\">Clients</a>\n    <a mat-list-item routerLink=\"/content/product\">Products</a>\n    <a mat-list-item routerLink=\"/content/successstory\">Success Stories</a>\n    <a *ngIf=\"!authenticated\" mat-list-item routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n    <a *ngIf=\"!authenticated\" mat-list-item routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n    <a *ngIf=\"authenticated\" mat-list-item routerLink=\"/user/edit\" routerLinkActive=\"active\">Edit user</a>\n    <a *ngIf=\"authenticated\" mat-list-item (click)=\"logout()\">Logout</a>\n  </div>\n</mat-sidenav> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/notification/snackbar/snackbar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/notification/snackbar/snackbar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>snackbar works!</p>\n"

/***/ }),

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
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _view_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/auth/login/login.component */ "./src/app/view/auth/login/login.component.ts");
/* harmony import */ var _view_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/auth/registration/registration.component */ "./src/app/view/auth/registration/registration.component.ts");
/* harmony import */ var _view_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/create-new/create-new.component */ "./src/app/view/create-new/create-new.component.ts");







var routes = [
    {
        path: '',
        component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full',
        data: { state: 'home' },
    },
    {
        path: 'login',
        component: _view_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        pathMatch: 'full',
    },
    {
        path: 'register',
        component: _view_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"],
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: _view_create_new_create_new_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewComponent"],
        pathMatch: 'full',
    },
    /*
    OSS Implementation
    */
    {
        path: '',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./view/view.module */ "./src/app/view/view.module.ts")).then(function (m) { return m.ViewModule; }); },
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#content {\n  margin-top: 64px;\n}\n.sidenav {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.menu {\n  padding-top: 74px;\n  position: fixed;\n  width: 200px;\n}\nmat-toolbar {\n  position: fixed;\n  color: white;\n}\n.toolbar-menu, .mat-divider, mat-icon#menu {\n  color: white;\n}\n.mat-divider.mat-divider-vertical {\n  height: 70%;\n  border-color: white;\n}\n.user-menu-button mat-icon {\n  background-color: white;\n  border-radius: 50%;\n  padding: 5px;\n}\nmat-sidenav-content {\n  background-color: white;\n}\n#flex-sidenav {\n  display: flex;\n}\nmat-sidenav-container {\n  flex: 1 1 auto;\n  min-height: 100vh !important;\n}\nmat-sidenav {\n  width: 200px;\n}\n#toolbar {\n  background-image: linear-gradient(to right, #01b9ce, #451250);\n  justify-content: space-between;\n}\n#logo-container {\n  height: 100%;\n  width: auto;\n}\n#logo-background {\n  transform: skew(-45deg);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: white;\n}\n#logo {\n  padding: 0 60px;\n  height: 70%;\n  transform: skew(45deg);\n}\n#logo-background:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: white;\n  transform-origin: 100% 0;\n  transform: skew(45deg);\n  z-index: -1;\n}\n#user-icon {\n  background-color: #fff;\n  color: black;\n  border-radius: 50%;\n  padding: 5px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#user-icon mat-icon {\n  font-size: 35px;\n  width: 35px;\n  height: 35px;\n}\n#lang-nav {\n  list-style-type: none;\n  padding-right: 20px;\n}\n#lang-nav > li > a {\n  font-size: small;\n  padding: 5px;\n  cursor: pointer;\n}\n#lang-nav > li > a:hover {\n  background-color: darkgrey;\n}\n#lang-nav > li > a.active {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3RldmUvbGFiL2Zkbi9vc3NkaXJlY3Rvcnkvd2Vic2l0ZS9hbmd1bGFyL3N0ZGluIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeTFDQSxrQ0FBQTtBQThoREEsMkNBQUE7QUF3Q0EscUJBQUE7QUF0a0RBLGtDQUFBO0FBOGhEQSwyQ0FBQTtBQXdDQSxxQkFBQTtBQzU1RkE7RUFDRSxnQkFBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDSUY7QUREQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtBQ0lGO0FEREE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNJRjtBRERBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0UsdUJBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtBQ0lGO0FEREE7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtBQ0lGO0FEREE7RUFDRSw2REFBQTtFQUNBLDhCQUFBO0FDSUY7QUREQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDSUY7QUREQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNJRjtBRERBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBR0Esd0JBQUE7RUFHQSxzQkFBQTtFQUNBLFdBQUE7QUNJRjtBRERBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0lGO0FEREE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ0lGO0FEREE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSUY7QUREQTtFQUNFLDBCQUFBO0FDSUY7QUREQTtFQUNFLHVCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSBjYW4gdXNlIHJlbGF0aXZlIGltcG9ydHMgZm9yIGltcG9ydHMgZnJvbSB0aGUgY2RrIGJlY2F1c2Ugd2UgYnVuZGxlIGV2ZXJ5dGhpbmdcbi8vIHVwIGludG8gYSBzaW5nbGUgZmxhdCBzY3NzIGZpbGUgZm9yIG1hdGVyaWFsLlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpICFkZWZhdWx0O1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vL1xuLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUpIHtcbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogJHRhcmdldCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwKSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcbiAgJGNvbG9yZWQtYm94LXNlbGVjdG9yOiAnLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc7XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWVzIGhlcmUgY29tZSBmcm9tXG4vLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW0pLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW0pLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTEsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMSk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cbi8vIFRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBzdHlsZXMgZm9yIHRoZSBiYWRnZVxuLy8gcmF0aGVyIHRoYW4ganVzdCB0aGUgY29sb3IvdGhlbWUgYmVjYXVzZSBvZlxuLy8gbm8gc3R5bGUgc2hlZXQgc3VwcG9ydCBmb3IgZGlyZWN0aXZlcy5cblxuXG5cblxuXG4kbWF0LWJhZGdlLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcbiRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJG1hdC1iYWRnZS1zbWFsbC1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSAtIDY7XG4kbWF0LWJhZGdlLWxhcmdlLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplICsgNjtcblxuLy8gTWl4aW4gZm9yIGJ1aWxkaW5nIG9mZnNldCBnaXZlbiBkaWZmZXJlbnQgc2l6ZXNcbkBtaXhpbiBfbWF0LWJhZGdlLXNpemUoJHNpemUpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSkge1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtZGlzYWJsZWQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgICAvLyBUaGUgZGlzYWJsZWQgY29sb3IgdXN1YWxseSBoYXMgc29tZSBraW5kIG9mIG9wYWNpdHksIGJ1dCBiZWNhdXNlIHRoZSBiYWRnZSBpcyBvdmVybGF5ZWRcbiAgICAgIC8vIG9uIHRvcCBvZiBzb21ldGhpbmcgZWxzZSwgaXQgd29uJ3QgbG9vayBnb29kIGlmIGl0J3Mgb3BhcXVlLiBJZiBpdCBpcyBhIGNvbG9yICp0eXBlKixcbiAgICAgIC8vIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZ1xuICAgICAgLy8gdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW5cbiAgICAgIC8vIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgQGlmICh0eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIHR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4gIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgLy8gU2V0IHRoZSBmb250IHNpemUgdG8gNzUlIG9mIHRoZSBvcmlnaW5hbC5cbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMC43NTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgICAvLyBIYXZpbmcgdGhlIG9uZSBhYm92ZSBiZSAhaW1wb3J0YW50IGVuZHMgdXAgb3ZlcnJpZGluZyB0aGUgYnJvd3NlcidzIGF1dG9tYXRpY1xuICAgICAgLy8gY29sb3IgaW52ZXJzaW9uIHNvIHdlIG5lZWQgdG8gcmUtaW52ZXJ0IGl0IG91cnNlbHZlcyBmb3IgYmxhY2stb24td2hpdGUuXG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgb25lIGlzIG1vdmVkIGRvd24gaGVyZSBzbyBpdCBjYW4gdGFyZ2V0IGJvdGhcbiAgLy8gdGhlIHRoZW1lIGNvbG9ycyBhbmQgdGhlIGRpc2FibGVkIHN0YXRlLlxuICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIC8vIE5lZWRzIHRvIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBoaWRlcyB0aGUgY2hlY2tib3ggb3V0bGluZS5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAubWF0LWNoZWNrYm94IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBUaGlzIG1peGluIHdpbGwgZW5zdXJlIHRoYXQgbGluZXMgdGhhdCBvdmVyZmxvdyB0aGUgY29udGFpbmVyIHdpbGwgaGlkZSB0aGUgb3ZlcmZsb3cgYW5kXG4vLyB0cnVuY2F0ZSBuZWF0bHkgd2l0aCBhbiBlbGxpcHNpcy5cbkBtaXhpbiBtYXQtdHJ1bmNhdGUtbGluZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIE1peGluIHRvIHByb3ZpZGUgYWxsIG1hdC1saW5lIHN0eWxlcywgY2hhbmdpbmcgc2Vjb25kYXJ5IGZvbnQgc2l6ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBsaXN0XG4vLyBpcyBpbiBkZW5zZSBtb2RlLlxuQG1peGluIG1hdC1saW5lLWJhc2UoJHNlY29uZGFyeS1mb250LXNpemUpIHtcbiAgLm1hdC1saW5lIHtcbiAgICBAaW5jbHVkZSBtYXQtdHJ1bmNhdGUtbGluZSgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAvLyBhbGwgbGluZXMgYnV0IHRoZSB0b3AgbGluZSBzaG91bGQgaGF2ZSBzbWFsbGVyIHRleHRcbiAgICAmOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNlY29uZGFyeS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gbm9ybWFsaXplcyBkZWZhdWx0IGVsZW1lbnQgc3R5bGVzLCBlLmcuIGZvbnQgd2VpZ2h0IGZvciBoZWFkaW5nIHRleHQuXG5AbWl4aW4gbWF0LW5vcm1hbGl6ZS10ZXh0KCkge1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNlIHN0eWxlcyBmb3IgdGhlIHdyYXBwZXIgYXJvdW5kIG1hdC1saW5lIGVsZW1lbnRzIGluIGEgbGlzdC5cbkBtaXhpbiBtYXQtbGluZS13cmFwcGVyLWJhc2UoKSB7XG4gIEBpbmNsdWRlIG1hdC1ub3JtYWxpemUtdGV4dCgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIE11c3QgcmVtb3ZlIHdyYXBwZXIgd2hlbiBsaW5lcyBhcmUgZW1wdHkgb3IgaXQgdGFrZXMgdXAgaG9yaXpvbnRhbFxuICAvLyBzcGFjZSBhbmQgcHVzaGVzIG90aGVyIGVsZW1lbnRzIHRvIHRoZSByaWdodC5cbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKSB7IH1cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtaWNvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICBAcmV0dXJuIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cblxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgICB9XG5cbiAgICAvLyBPbiBkYXJrIHRoZW1lcyB3ZSBzZXQgdGhlIG5hdGl2ZSBgc2VsZWN0YCBjb2xvciB0byBzb21lIHNoYWRlIG9mIHdoaXRlLFxuICAgIC8vIGhvd2V2ZXIgdGhlIGNvbG9yIHByb3BhZ2F0ZXMgdG8gYWxsIG9mIHRoZSBgb3B0aW9uYCBlbGVtZW50cywgd2hpY2ggYXJlXG4gICAgLy8gYWx3YXlzIG9uIGEgd2hpdGUgYmFja2dyb3VuZCBpbnNpZGUgdGhlIGRyb3Bkb3duLCBjYXVzaW5nIHRoZW0gdG8gYmxlbmQgaW4uXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3QgY2hhbmdlIGJhY2tncm91bmQgb2YgdGhlIGRyb3Bkb3duLCB3ZSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAgICAvLyByZXNldCB0aGUgY29sb3Igb2YgdGhlIG9wdGlvbnMgdG8gc29tZXRoaW5nIGRhcmsuXG4gICAgQGlmIChtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWxpc3QtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0sXG4gIC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVuc2UgbGlzdFxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0ge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLCAmOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1yYWRpby1jb2xvcigkcGFsZXR0ZSkge1xuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbiAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbiAgJjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICAkb3BhY2l0eTogMC42O1xuICAgICRiYWNrZHJvcC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkLCAkb3BhY2l0eSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrOiBtYXBfZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIENvbG9yIGh1ZXMgYXJlIGJhc2VkIG9uIHRoZSBzcGVjcyB3aGljaCBicmllZmx5IHNob3cgdGhlIGh1ZXMgdGhhdCBhcmUgYXBwbGllZCB0byBhIHN3aXRjaC5cbiAgLy8gVGhlIDIwMTggc3BlY3Mgbm8gbG9uZ2VyIGRlc2NyaWJlIGhvdyBkYXJrIHN3aXRjaGVzIHNob3VsZCBsb29rIGxpa2UuIER1ZSB0byB0aGUgbGFjayBvZlxuICAvLyBpbmZvcm1hdGlvbiBmb3IgZGFyayB0aGVtZWQgc3dpdGNoZXMsIHdlIHBhcnRpYWxseSBrZWVwIHRoZSBvbGQgYmVoYXZpb3IgdGhhdCBpcyBiYXNlZCBvblxuICAvLyB0aGUgcHJldmlvdXMgc3BlY2lmaWNhdGlvbnMuIEZvciB0aGUgY2hlY2tlZCBjb2xvciB3ZSBhbHdheXMgdXNlIHRoZSBgZGVmYXVsdGAgaHVlIGJlY2F1c2VcbiAgLy8gdGhhdCBmb2xsb3dzIE1EQyBhbmQgYWxzbyBtYWtlcyBpdCBlYXNpZXIgZm9yIHBlb3BsZSB0byBjcmVhdGUgYSBjdXN0b20gdGhlbWUgd2l0aG91dCBuZWVkaW5nXG4gIC8vIHRvIHNwZWNpZnkgZWFjaCBodWUgaW5kaXZpZHVhbGx5LlxuICAkdGh1bWItdW5jaGVja2VkLWh1ZTogaWYoJGlzLWRhcmssIDQwMCwgNTApO1xuICAkdGh1bWItY2hlY2tlZC1odWU6IGRlZmF1bHQ7XG5cbiAgJGJhci11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkYWNjZW50LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkd2FybiwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpcHBsZS11bmNoZWNrZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsIDAuMik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuMTIpO1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuNyk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIElmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG4gICAgLy8gKnR5cGUqLCB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmRcbiAgICAvLyB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmRcbiAgICAvLyB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLiBPdGhlcndpc2UsIGlmIGl0IHJlc29sdmVzIHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSksIHdlIHVzZSB0aGUgY29sb3IgZGlyZWN0bHkuXG4gICAgQGlmICh0eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkbWF0LWdyZXksIDcwMCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiQGltcG9ydCBcIm9zcy10aGVtZVwiO1xuQGltcG9ydCBcIn5AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nXCI7XG5cbiNjb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbn1cblxuLnNpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLm1lbnUge1xuICBwYWRkaW5nLXRvcDo3NHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItbWVudSwgLm1hdC1kaXZpZGVyLCBtYXQtaWNvbiNtZW51IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXItbWVudS1idXR0b24gbWF0LWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2ZsZXgtc2lkZW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aCFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4jdG9vbGJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAxYjljZSwgIzQ1MTI1MCk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2xvZ28tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbn1cblxuI2xvZ28tYmFja2dyb3VuZCB7XG4gIHRyYW5zZm9ybTogc2tldygtNDVkZWcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbiNsb2dvIHtcbiAgcGFkZGluZzogMCA2MHB4O1xuICBoZWlnaHQ6IDcwJTtcbiAgdHJhbnNmb3JtOiBza2V3KDQ1ZGVnKTtcbn1cblxuI2xvZ28tYmFja2dyb3VuZDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tldyg0NWRlZyk7XG4gIHRyYW5zZm9ybTogc2tldyg0NWRlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jdXNlci1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN1c2VyLWljb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNsYW5nLW5hdiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuI2xhbmctbmF2ID4gbGkgPiBhIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsYW5nLW5hdiA+IGxpID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuXG4jbGFuZy1uYXYgPiBsaSA+IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iLCIvKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuI2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubWVudSB7XG4gIHBhZGRpbmctdG9wOiA3NHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvb2xiYXItbWVudSwgLm1hdC1kaXZpZGVyLCBtYXQtaWNvbiNtZW51IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXItbWVudS1idXR0b24gbWF0LWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuI2ZsZXgtc2lkZW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuI3Rvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMWI5Y2UsICM0NTEyNTApO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNsb2dvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNsb2dvLWJhY2tncm91bmQge1xuICB0cmFuc2Zvcm06IHNrZXcoLTQ1ZGVnKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4jbG9nbyB7XG4gIHBhZGRpbmc6IDAgNjBweDtcbiAgaGVpZ2h0OiA3MCU7XG4gIHRyYW5zZm9ybTogc2tldyg0NWRlZyk7XG59XG5cbiNsb2dvLWJhY2tncm91bmQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tldyg0NWRlZyk7XG4gIHRyYW5zZm9ybTogc2tldyg0NWRlZyk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jdXNlci1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN1c2VyLWljb24gbWF0LWljb24ge1xuICBmb250LXNpemU6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNsYW5nLW5hdiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuI2xhbmctbmF2ID4gbGkgPiBhIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNsYW5nLW5hdiA+IGxpID4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xufVxuXG4jbGFuZy1uYXYgPiBsaSA+IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _route_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route/services/route.service */ "./src/app/route/services/route.service.ts");
/* harmony import */ var _data_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/services/language.service */ "./src/app/data/services/language.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/services/config.service */ "./src/app/config/services/config.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private _sailsService: SailsService,
    router, route, // load route service in app component such that all children can access it
    snackbar, translate, langService, auth, config) {
        this.router = router;
        this.route = route;
        this.snackbar = snackbar;
        this.translate = translate;
        this.langService = langService;
        this.auth = auth;
        this.config = config;
        this.selectedLang = 'de';
        this.navbarItems = [
            { name: 'HOME', url: '/' },
            { name: 'VENDOR_PLURAL', url: '/content/vendor' },
            { name: 'CLIENT_PLURAL', url: '/content/client' },
            { name: 'PRODUCT_PLURAL', url: '/content/product' },
            { name: 'SUCCESSSTORY_PLURAL', url: '/content/successstory' },
            { name: 'NEWSFEED', url: '/content/newsfeed' },
        ];
        this.selectedItem = this.navbarItems[0];
        this.isAuthenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._langSub = this.langService.currentLang.subscribe(function (lang) {
            _this.translate.use(lang);
            _this.selectedLang = lang;
        });
        this.config.getSubject().subscribe(function (d) {
            _this.isAuthenticated = d.authenticated;
        });
    };
    AppComponent.prototype.activateLink = function (item) {
        this.selectedItem = item;
    };
    AppComponent.prototype.onLangChange = function (lang) {
        this.langService.changeLang(lang);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _route_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _data_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _route_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _data_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-design/material-design.module */ "./src/app/material-design/material-design.module.ts");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/navbar/navbar.component */ "./src/app/view/navbar/navbar.component.ts");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http/http.service */ "./src/app/http/http.service.ts");
/* harmony import */ var _view_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view/footer/footer.component */ "./src/app/view/footer/footer.component.ts");
/* harmony import */ var _data_data_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/data.module */ "./src/app/data/data.module.ts");
/* harmony import */ var _route_route_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./route/route.module */ "./src/app/route/route.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _view_navbar_navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view/navbar/navbar-item/navbar-item.component */ "./src/app/view/navbar/navbar-item/navbar-item.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _graphql_graphql_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./graphql/graphql.module */ "./src/app/graphql/graphql.module.ts");
/* harmony import */ var _view_view_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view/view.module */ "./src/app/view/view.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _view_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _view_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _view_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _view_navbar_navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_17__["NavbarItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"],
                _data_data_module__WEBPACK_IMPORTED_MODULE_14__["DataModule"],
                _route_route_module__WEBPACK_IMPORTED_MODULE_15__["RouteModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                _graphql_graphql_module__WEBPACK_IMPORTED_MODULE_19__["GraphQLModule"],
                _view_view_module__WEBPACK_IMPORTED_MODULE_20__["ViewModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateLoader"],
                        useFactory: _view_view_module__WEBPACK_IMPORTED_MODULE_20__["HttpLoaderFactory"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                })
            ],
            exports: [
                _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_7__["MaterialDesignModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"],
            ],
            providers: [
                _http_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_editable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/editable.service */ "./src/app/auth/services/editable.service.ts");






var loginQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n    query login($email: String!, $password: String!){\n        login(email: $email, password: $password) {\n            email\n        }\n    }\n"], ["\n    query login($email: String!, $password: String!){\n        login(email: $email, password: $password) {\n            email\n        }\n    }\n"])));
var registerQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n    mutation userRegistration($email: String!, $password: String!) {\n        CreateUser(email: $email, password: $password) {\n            email\n        }\n    }\n"], ["\n    mutation userRegistration($email: String!, $password: String!) {\n        CreateUser(email: $email, password: $password) {\n            email\n        }\n    }\n"])));
var AuthService = /** @class */ (function () {
    function AuthService(apollo, router, editable) {
        this.apollo = apollo;
        this.router = router;
        this.editable = editable;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.apollo.queryObservable(loginQuery, { email: email, password: password })
            .subscribe(function (res) {
            _this.editable.authenticateUser();
            _this.router.navigate([_this.redirectUrl || '/']);
            _this.redirectUrl = null;
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        this.apollo.mutateObservable(registerQuery, { email: email, password: password })
            .subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.editable.isEditable();
    };
    AuthService.ctorParameters = function () { return [
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_2__["ApolloService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_services_apollo_service__WEBPACK_IMPORTED_MODULE_2__["ApolloService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"]])
    ], AuthService);
    return AuthService;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/auth/services/editable.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/services/editable.service.ts ***!
  \***************************************************/
/*! exports provided: EditableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableService", function() { return EditableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");




var EditableService = /** @class */ (function () {
    function EditableService(config) {
        this.config = config;
    }
    EditableService.prototype.isEditable = function () {
        return this.config.get('authenticated');
    };
    EditableService.prototype.authenticateUser = function () {
        this.config.set('authenticated', true);
    };
    EditableService.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    EditableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], EditableService);
    return EditableService;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
        this.language = 'de';
        this.first = 20;
        this.offset = 0;
        this.authenticated = false;
    }
    return Config;
}());



/***/ }),

/***/ "./src/app/config/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/config/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/services/language.service */ "./src/app/data/services/language.service.ts");





var ConfigService = /** @class */ (function () {
    function ConfigService(langService) {
        this.langService = langService;
        this.setup();
    }
    ConfigService.prototype.setup = function () {
        var _this = this;
        this.config = new _config__WEBPACK_IMPORTED_MODULE_2__["Config"]();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.config);
        this._langSub = this.langService.currentLang.subscribe(function (lang) {
            _this.config.language = lang;
        });
    };
    ConfigService.prototype.set = function (attribute, value) {
        this.config[attribute] = value;
        this.subject.next(this.config);
    };
    ConfigService.prototype.get = function (attribute) {
        return this.config[attribute];
    };
    ConfigService.prototype.getSubject = function () {
        return this.subject;
    };
    ConfigService.ctorParameters = function () { return [
        { type: _data_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }
    ]; };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/data/data.module.ts":
/*!*************************************!*\
  !*** ./src/app/data/data.module.ts ***!
  \*************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * Provides functionality for handling data/models
 *
 * Creates requests based on provided model type and data
 * Requests can be multiple models and/or files
 *
 * GraphQl logic may be exported to the backend side
 */
var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [],
            providers: []
        })
    ], DataModule);
    return DataModule;
}());



/***/ }),

/***/ "./src/app/data/enums/modeltype.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/data/enums/modeltype.enum.ts ***!
  \**********************************************/
/*! exports provided: Modeltype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modeltype", function() { return Modeltype; });
var Modeltype;
(function (Modeltype) {
    Modeltype["Vendor"] = "Vendor";
    Modeltype["Client"] = "Client";
    Modeltype["Community"] = "Community";
    Modeltype["OrganisationTranslation"] = "OrganisationTranslation";
    Modeltype["SuccessStory"] = "SuccessStory";
    Modeltype["SuccessStoryTranslation"] = "SuccessStoryTranslation";
    Modeltype["Product"] = "Product";
    Modeltype["ProductTranslation"] = "ProductTranslation";
    Modeltype["ProductCategory"] = "ProductCategory";
    Modeltype["ProductCategoryTranslation"] = "ProductCategoryTranslation";
    Modeltype["VendorProductServices"] = "VendorProductServices";
    Modeltype["Industry"] = "Industry";
    Modeltype["IndustryTranslation"] = "IndustryTranslation";
    Modeltype["Language"] = "Language";
    Modeltype["Address"] = "Address";
    Modeltype["CommunityMember"] = "CommunityMember";
    Modeltype["NewsFeed"] = "NewsFeed";
    Modeltype["TopNews"] = "TopNews";
})(Modeltype || (Modeltype = {}));


/***/ }),

/***/ "./src/app/data/services/apollo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/data/services/apollo.service.ts ***!
  \*************************************************/
/*! exports provided: ApolloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloService", function() { return ApolloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");






var Query = function (sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n    query Entry {\n      Entry : findBySequence(sequence : \"", "\")\n   }\n  "], ["\n    query Entry {\n      Entry : findBySequence(sequence : \"", "\")\n   }\n  "])), sequence); };
var ApolloService = /** @class */ (function () {
    function ApolloService(apollo, config) {
        this.apollo = apollo;
        this.config = config;
    }
    ApolloService.prototype.sendQuery = function (query, variables) {
        if (variables === void 0) { variables = {}; }
        var queryRef = this.watchQueryRef(query, variables);
        return queryRef.valueChanges;
    };
    /**
     * A QueryRef offers multiple functions like subscribing and refetching
     * @returns QueryRef
     * @param query
     * @param variables
     * @param notifyOnNetworkStatusChange
     * if false the observable emits only once
     * if true the observable may emit multiple times and data object may be empty
     */
    ApolloService.prototype.watchQueryRef = function (query, variables, notifyOnNetworkStatusChange) {
        if (variables === void 0) { variables = {}; }
        if (notifyOnNetworkStatusChange === void 0) { notifyOnNetworkStatusChange = false; }
        return this.apollo.watchQuery({
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            query: query,
            variables: variables
        });
    };
    /**
     * Directly returns an observable that resolves ones on subscribe
     *
     * @param query
     * a query created with the graphql tag
     * right now gql tag returns a graphql query with the any type (may change in the future)
     *  no typesafte here for now
     * @param variables
     * object with the variables used by the query
     *
     * @returns Observable
     */
    ApolloService.prototype.queryObservable = function (query, variables) {
        if (variables === void 0) { variables = {}; }
        var observable = this.apollo.query({
            query: query,
            variables: variables
        });
        return observable;
    };
    /**
     * Directly returns an observable that resolves ones on subscribe
     * You may provide optimisticResponse
     * apollo will update cache based on that response
     * and updates it once again if the actual response comes in
     * @param mutation
     * @param variables
     * @param optimisticResponse
     */
    ApolloService.prototype.mutateObservable = function (mutation, variables, optimisticResponse) {
        if (variables === void 0) { variables = {}; }
        var observable = this.apollo.mutate({
            mutation: mutation,
            variables: variables,
            optimisticResponse: optimisticResponse,
        });
        return observable;
    };
    ApolloService.prototype.sendUpdateQuery = function (query, variables, refetchQuery) {
        if (variables === void 0) { variables = {}; }
        if (refetchQuery) {
            return this.apollo.mutate({
                mutation: query,
                variables: variables,
                refetchQueries: [{
                        query: refetchQuery
                    }]
            });
        }
        else {
            return this.apollo.mutate({
                mutation: query,
                variables: variables
            });
        }
    };
    ApolloService.prototype.uploadImage = function (query, variables) {
        if (variables === void 0) { variables = {}; }
        return this.apollo.mutate({
            mutation: query,
            variables: variables,
            context: { upload: true }
        });
    };
    ApolloService.prototype.delete = function () {
    };
    ApolloService.prototype.getType = function (sequence) {
        var _this = this;
        return this.apollo.watchQuery({
            query: Query(sequence),
        }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var data = _a.data;
            _this.config.set("type", data.Entry);
            return data.Entry;
        }));
    };
    ApolloService.ctorParameters = function () { return [
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] },
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    ApolloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], ApolloService);
    return ApolloService;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/data/services/file.service.ts":
/*!***********************************************!*\
  !*** ./src/app/data/services/file.service.ts ***!
  \***********************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/http.service */ "./src/app/http/http.service.ts");
/* harmony import */ var _data_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.module */ "./src/app/data/data.module.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var FileService = /** @class */ (function () {
    function FileService(http, config) {
        this.http = http;
        this.config = config;
    }
    FileService.prototype.uploadFile = function (fileToUpload) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + "upload";
        var sequence = this.config.get("uid"); // TODO: take uid for now
        var type = this.config.get("type").toLowerCase();
        var fileExtension = fileToUpload.name.split('.').pop();
        var filename = type + "_" + sequence + "." + fileExtension;
        var formData = new FormData();
        formData.append('sequence', sequence);
        formData.append('type', type);
        formData.append('file', fileToUpload, filename);
        return this.http.post(url, formData, {
            'Content-Type': 'multipart/form-data',
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return true; }));
    };
    FileService.ctorParameters = function () { return [
        { type: _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: _data_module__WEBPACK_IMPORTED_MODULE_3__["DataModule"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/data/services/language.service.ts":
/*!***************************************************!*\
  !*** ./src/app/data/services/language.service.ts ***!
  \***************************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
        // Check browser language - set to 'de' if language if language is not supported
        this._browserLang = this.translate.getBrowserLang();
        this._langSrc = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.checkLang(this._browserLang));
        this.currentLang = this._langSrc.asObservable();
    }
    LanguageService.prototype.changeLang = function (lang) {
        this._langSrc.next(this.checkLang(lang));
    };
    LanguageService.prototype.getCurrentLang = function () {
        return this.translate.currentLang;
    };
    LanguageService.prototype.checkLang = function (lang) {
        var str = lang.toLocaleLowerCase();
        return str.match(/de|en/) ? str : 'de';
    };
    LanguageService.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LanguageService);
    return LanguageService;
}());



/***/ }),

/***/ "./src/app/data/services/rss-feed.service.ts":
/*!***************************************************!*\
  !*** ./src/app/data/services/rss-feed.service.ts ***!
  \***************************************************/
/*! exports provided: RssFeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssFeedService", function() { return RssFeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RssFeedService = /** @class */ (function () {
    function RssFeedService(http) {
        this.http = http;
    }
    RssFeedService.prototype.getRssFeed = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'rss-feed');
    };
    RssFeedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RssFeedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RssFeedService);
    return RssFeedService;
}());



/***/ }),

/***/ "./src/app/graphql/apollo-options.service.ts":
/*!***************************************************!*\
  !*** ./src/app/graphql/apollo-options.service.ts ***!
  \***************************************************/
/*! exports provided: ApolloOptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloOptionsService", function() { return ApolloOptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _on_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-error.service */ "./src/app/graphql/on-error.service.ts");






var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].graphqlURL;
var ws_uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].graphqlWSURL;
var ApolloOptionsService = /** @class */ (function () {
    function ApolloOptionsService(httpLink, onErrorService) {
        this.httpLink = httpLink;
        this.onErrorService = onErrorService;
    }
    ApolloOptionsService.prototype.websocket = function () {
        // const wss = new WebSocketLink({
        //     uri: ws_uri,
        //     options: {
        //         reconnect: true,
        //     }
        // });
    };
    ApolloOptionsService.prototype.authHeader = function () {
        // const authLink = setContext((operation, previousContext) => {
        //     const { headers } = previousContext;
        //     return {
        //         ...previousContext,
        //         headers: {
        //             ...headers,
        //             'Authorization': `${token}`,
        //         }
        //     };
        // });
    };
    ApolloOptionsService.prototype.split = function () {
        // link: split(
        //     ({ query }) => {
        //         const definition = getMainDefinition(query);
        //         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        //     },
        //     wss,
        //     // authLink.concat(https),
        //     https,
        // ),
    };
    ApolloOptionsService.prototype.link = function () {
        var link = this.httpLink.create({ uri: uri });
        return link;
    };
    ApolloOptionsService.prototype.cache = function () {
        var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]({
            dataIdFromObject: function (o) { return o.sequence; } // make sequence the new identifier
        });
        return cache;
    };
    ApolloOptionsService.prototype.headers = function () {
        var headers = {
            'Access-Control-Allow-Origin': uri,
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'application/json',
        };
        return headers;
    };
    ApolloOptionsService.prototype.createOptions = function () {
        var link = this.link();
        var onError = this.onErrorService.unauthorizedRetry();
        link = link.concat(onError);
        var cache = this.cache();
        var headers = this.headers();
        return {
            link: link,
            cache: cache,
            headers: headers,
        };
    };
    ApolloOptionsService.ctorParameters = function () { return [
        { type: apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"] },
        { type: _on_error_service__WEBPACK_IMPORTED_MODULE_5__["OnErrorService"] }
    ]; };
    ApolloOptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"],
            _on_error_service__WEBPACK_IMPORTED_MODULE_5__["OnErrorService"]])
    ], ApolloOptionsService);
    return ApolloOptionsService;
}());



/***/ }),

/***/ "./src/app/graphql/graphql.module.ts":
/*!*******************************************!*\
  !*** ./src/app/graphql/graphql.module.ts ***!
  \*******************************************/
/*! exports provided: options, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var _apollo_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apollo-options.service */ "./src/app/graphql/apollo-options.service.ts");





function options(optionsService) {
    return optionsService.createOptions();
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: options,
                    deps: [_apollo_options_service__WEBPACK_IMPORTED_MODULE_4__["ApolloOptionsService"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/graphql/on-error.service.ts":
/*!*********************************************!*\
  !*** ./src/app/graphql/on-error.service.ts ***!
  \*********************************************/
/*! exports provided: OnErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnErrorService", function() { return OnErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");



var OnErrorService = /** @class */ (function () {
    function OnErrorService() {
    }
    OnErrorService.prototype.unauthorizedRetry = function () {
        var link = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_2__["onError"])(function (_a) {
            var e_1, _b;
            var operation = _a.operation, graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, response = _a.response, forward = _a.forward;
            if (graphQLErrors) {
                try {
                    for (var graphQLErrors_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](graphQLErrors), graphQLErrors_1_1 = graphQLErrors_1.next(); !graphQLErrors_1_1.done; graphQLErrors_1_1 = graphQLErrors_1.next()) {
                        var err = graphQLErrors_1_1.value;
                        // TODO: show modal for login and retry request on succesfull login
                        // return forward(operation); 
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (graphQLErrors_1_1 && !graphQLErrors_1_1.done && (_b = graphQLErrors_1.return)) _b.call(graphQLErrors_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
        return link;
    };
    OnErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnErrorService);
    return OnErrorService;
}());



/***/ }),

/***/ "./src/app/http/http.service.ts":
/*!**************************************!*\
  !*** ./src/app/http/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.request = function (options) {
        return;
    };
    HttpService.prototype.get = function (url, data, headers) {
        return this.http.get(url, headers);
    };
    HttpService.prototype.post = function (url, data, headers) {
        return this.http.post(url, data, headers);
    };
    HttpService.prototype.patch = function (url, data, headers) {
        return this.http.patch(url, data, headers);
    };
    HttpService.prototype.delete = function (url, data, headers) {
        return this.http.delete(url, data);
    };
    //TODO create request options
    HttpService.prototype.options = function (body, headers, params) {
        var http_params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](params);
        var http_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headers);
        return { headers: http_headers, params: http_params };
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/material-design/material-design.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-design/material-design.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialDesignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function() { return MaterialDesignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");








var MaterialDesignModule = /** @class */ (function () {
    function MaterialDesignModule() {
    }
    MaterialDesignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]
            ],
            declarations: []
        })
    ], MaterialDesignModule);
    return MaterialDesignModule;
}());



/***/ }),

/***/ "./src/app/route/route.module.ts":
/*!***************************************!*\
  !*** ./src/app/route/route.module.ts ***!
  \***************************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], RouteModule);
    return RouteModule;
}());



/***/ }),

/***/ "./src/app/route/services/matcher.ts":
/*!*******************************************!*\
  !*** ./src/app/route/services/matcher.ts ***!
  \*******************************************/
/*! exports provided: MatcherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatcherService", function() { return MatcherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route.module */ "./src/app/route/route.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/enums/modeltype.enum */ "./src/app/data/enums/modeltype.enum.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");





var MatcherService = /** @class */ (function () {
    function MatcherService(config) {
        this.config = config;
    }
    MatcherService.prototype.detectTypes = function (segments) {
        var e_1, _a;
        var currentSegment;
        var type;
        try {
            for (var segments_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](segments), segments_1_1 = segments_1.next(); !segments_1_1.done; segments_1_1 = segments_1.next()) {
                var segment = segments_1_1.value;
                var path = segment.path.toLowerCase();
                for (var model in _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_3__["Modeltype"]) {
                    if (model.toLowerCase() === path) {
                        type = model;
                        currentSegment = segment;
                        break;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (segments_1_1 && !segments_1_1.done && (_a = segments_1.return)) _a.call(segments_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (type) {
            this.config.set("type", type);
            return { consumed: segments, posParams: { type: currentSegment } };
        }
        return null;
    };
    MatcherService.prototype.detectSequence = function (segments) {
        var e_2, _a;
        var sequence;
        try {
            for (var segments_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](segments), segments_2_1 = segments_2.next(); !segments_2_1.done; segments_2_1 = segments_2.next()) {
                var segment = segments_2_1.value;
                if (!isNaN(+segment.path)) {
                    sequence = segment;
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (segments_2_1 && !segments_2_1.done && (_a = segments_2.return)) _a.call(segments_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (sequence) {
            this.config.set("sequence", sequence.path);
            return { consumed: segments, posParams: { sequence: sequence } };
        }
        return null;
    };
    MatcherService.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    MatcherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: _route_module__WEBPACK_IMPORTED_MODULE_1__["RouteModule"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], MatcherService);
    return MatcherService;
}());



/***/ }),

/***/ "./src/app/route/services/route.service.ts":
/*!*************************************************!*\
  !*** ./src/app/route/services/route.service.ts ***!
  \*************************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../route.module */ "./src/app/route/route.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RouteService = /** @class */ (function () {
    function RouteService(router) {
        this.router = router;
    }
    RouteService.prototype.url = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.router.parseUrl(this.router.url));
    };
    RouteService.prototype.events = function () {
        return this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }));
    };
    RouteService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: _route_module__WEBPACK_IMPORTED_MODULE_1__["RouteModule"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/view/auth/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/view/auth/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.auth.login(this.email, this.password);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/view/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/view/auth/registration/registration.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/view/auth/registration/registration.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/auth/registration/registration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view/auth/registration/registration.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, apollo, auth) {
        this.router = router;
        this.apollo = apollo;
        this.auth = auth;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        this.auth.register(this.email, this.password);
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/auth/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/view/auth/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/view/base/base.module.ts":
/*!******************************************!*\
  !*** ./src/app/view/base/base.module.ts ***!
  \******************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/image/image.component */ "./src/app/view/base/components/image/image.component.ts");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/title/title.component */ "./src/app/view/base/components/title/title.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/view/base/components/contact/contact.component.ts");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stats/stats.component */ "./src/app/view/base/components/stats/stats.component.ts");
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/badge/badge.component */ "./src/app/view/base/components/badge/badge.component.ts");
/* harmony import */ var _components_claim_claim_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/claim/claim.component */ "./src/app/view/base/components/claim/claim.component.ts");
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/description/description.component */ "./src/app/view/base/components/description/description.component.ts");
/* harmony import */ var _components_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/grid-item/grid-item.component */ "./src/app/view/base/components/grid-item/grid-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/image-uploader/image-uploader.component */ "./src/app/view/base/components/image-uploader/image-uploader.component.ts");
/* harmony import */ var _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../material-design/material-design.module */ "./src/app/material-design/material-design.module.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/view/base/components/search/search.component.ts");
/* harmony import */ var _components_add_relationship_add_relationship_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-relationship/add-relationship.component */ "./src/app/view/base/components/add-relationship/add-relationship.component.ts");



















var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"],
                _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
                _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__["BadgeComponent"],
                _components_claim_claim_component__WEBPACK_IMPORTED_MODULE_8__["ClaimComponent"],
                _components_description_description_component__WEBPACK_IMPORTED_MODULE_9__["DescriptionComponent"],
                _components_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_10__["GridItemComponent"],
                _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__["ImageUploaderComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _components_add_relationship_add_relationship_component__WEBPACK_IMPORTED_MODULE_18__["AddRelationshipComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_15__["MaterialDesignModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_16__["NgxFileDropModule"]
            ],
            exports: [
                _components_image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"],
                _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_6__["StatsComponent"],
                _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__["BadgeComponent"],
                _components_claim_claim_component__WEBPACK_IMPORTED_MODULE_8__["ClaimComponent"],
                _components_description_description_component__WEBPACK_IMPORTED_MODULE_9__["DescriptionComponent"],
                _components_grid_item_grid_item_component__WEBPACK_IMPORTED_MODULE_10__["GridItemComponent"],
                _components_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__["ImageUploaderComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _components_add_relationship_add_relationship_component__WEBPACK_IMPORTED_MODULE_18__["AddRelationshipComponent"]
            ],
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/view/base/components/add-relationship/add-relationship.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/view/base/components/add-relationship/add-relationship.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-relation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ededed;\n  width: 200px;\n  height: 200px;\n}\n\n.add-relation mat-icon {\n  color: white;\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n}\n\n.add-relation mat-icon:hover {\n  color: black;\n}\n\n.submit-button {\n  cursor: pointer;\n}\n\n.submit-button:hover {\n  font-weight: bold;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9hZGQtcmVsYXRpb25zaGlwL2FkZC1yZWxhdGlvbnNoaXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL2FkZC1yZWxhdGlvbnNoaXAvYWRkLXJlbGF0aW9uc2hpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL2FkZC1yZWxhdGlvbnNoaXAvYWRkLXJlbGF0aW9uc2hpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcmVsYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uYWRkLXJlbGF0aW9uIG1hdC1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1yZWxhdGlvbiBtYXQtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIiwiLmFkZC1yZWxhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5hZGQtcmVsYXRpb24gbWF0LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXJlbGF0aW9uIG1hdC1pY29uOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/base/components/add-relationship/add-relationship.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/view/base/components/add-relationship/add-relationship.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddRelationshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRelationshipComponent", function() { return AddRelationshipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");




var AddRelationshipComponent = /** @class */ (function () {
    function AddRelationshipComponent(dialog, editable) {
        this.dialog = dialog;
        this.editable = editable;
        this.onAccept = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.canEdit = this.editable.isEditable();
    }
    AddRelationshipComponent.prototype.ngOnInit = function () {
    };
    AddRelationshipComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(this.component);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result) {
                console.log(result);
                _this.onAccept.emit(result);
            }
        });
    };
    AddRelationshipComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_3__["EditableService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddRelationshipComponent.prototype, "onAccept", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddRelationshipComponent.prototype, "component", void 0);
    AddRelationshipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-relationship',
            template: __webpack_require__(/*! raw-loader!./add-relationship.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/add-relationship/add-relationship.component.html"),
            styles: [__webpack_require__(/*! ./add-relationship.component.scss */ "./src/app/view/base/components/add-relationship/add-relationship.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_3__["EditableService"]])
    ], AddRelationshipComponent);
    return AddRelationshipComponent;
}());



/***/ }),

/***/ "./src/app/view/base/components/badge/badge.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/base/components/badge/badge.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.community-badge, .add-community-badge {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  padding: 5px;\n  background-color: #f3aa00;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n.community-badge:hover {\n  background-color: rgba(243, 170, 0, 0.7);\n}\n\n.community-badge img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.add-community-badge {\n  background-color: #ededed;\n  z-index: 1;\n}\n\n.add-community-badge-input {\n  transition: opacity 1s ease-out;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.add-community-badge-input input {\n  background-color: #ededed;\n  border: none;\n  height: 50px;\n  padding: 5px 30px;\n  margin-left: -30px;\n}\n\n.add-community-badge-input input:active {\n  border: none;\n  border-bottom: 2px solid black;\n}\n\n/*.add-community-badge-input:before {\n  background-color: #ededed;\n  content: \"\";\n  border: none;\n  height: 50px;\n  width: 20px;\n  display: block;\n  padding: 5px;\n  float: left;\n  margin-left: -30px;\n  z-index: -1;\n}*/\n\n.add-community-badge-input .submit-button {\n  background-color: #ededed;\n  border: none;\n  height: 50px;\n  width: 50px;\n  padding: 5px;\n  margin-left: -25px;\n  border-radius: 50%;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.add-community-badge-input .submit-button:hover, .add-community-badge:hover {\n  font-weight: bold;\n  background-color: #bcbcbc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9iYXNlL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTs7Ozs7Ozs7Ozs7RUFBQTs7QUFhQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29tbXVuaXR5LWJhZGdlLCAuYWRkLWNvbW11bml0eS1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNhYTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbXVuaXR5LWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDE3MCwgMCwgMC43KTtcbn1cblxuLmNvbW11bml0eS1iYWRnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5hZGQtY29tbXVuaXR5LWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgei1pbmRleDogMTtcbn1cblxuLmFkZC1jb21tdW5pdHktYmFkZ2UtaW5wdXQge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA1cHggMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4uYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dCBpbnB1dDphY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLyouYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIHotaW5kZXg6IC0xO1xufSovXG5cbi5hZGQtY29tbXVuaXR5LWJhZGdlLWlucHV0IC5zdWJtaXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dCAuc3VibWl0LWJ1dHRvbjpob3ZlciwgLmFkZC1jb21tdW5pdHktYmFkZ2U6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjYmNiYztcbn1cbiIsIi5iYWRnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29tbXVuaXR5LWJhZGdlLCAuYWRkLWNvbW11bml0eS1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNhYTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tbXVuaXR5LWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDE3MCwgMCwgMC43KTtcbn1cblxuLmNvbW11bml0eS1iYWRnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5hZGQtY29tbXVuaXR5LWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgei1pbmRleDogMTtcbn1cblxuLmFkZC1jb21tdW5pdHktYmFkZ2UtaW5wdXQge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dCBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA1cHggMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xufVxuXG4uYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dCBpbnB1dDphY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbn1cblxuLyouYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gIHotaW5kZXg6IC0xO1xufSovXG4uYWRkLWNvbW11bml0eS1iYWRnZS1pbnB1dCAuc3VibWl0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogLTI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1jb21tdW5pdHktYmFkZ2UtaW5wdXQgLnN1Ym1pdC1idXR0b246aG92ZXIsIC5hZGQtY29tbXVuaXR5LWJhZGdlOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiY2JjYmM7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/base/components/badge/badge.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/base/components/badge/badge.component.ts ***!
  \***************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");






var communityQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query CommunityQuery {\n    ", "( sequence : \"", "\" ) {\n      communities {\n        Community {\n          sequence\n          __typename\n          imageUrl\n            translations {\n              sequence\n              __typename\n              title\n            }\n          }\n      }\n    }\n  }\n"], ["\n  query CommunityQuery {\n    ", "( sequence : \"", "\" ) {\n      communities {\n        Community {\n          sequence\n          __typename\n          imageUrl\n            translations {\n              sequence\n              __typename\n              title\n            }\n          }\n      }\n    }\n  }\n"])), type, sequence); };
var communityUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addCommunityTo", "($sequence : String!, $community_sequence : String!){\n  Add", "Communities (\n    from : { sequence : $sequence }\n  \tto : { sequence : $community_sequence }\n  \tdata : { confirmed : false\n    level : \"1\" }\n  ) {\n  \tlevel\n  }\n}\n"], ["\n  mutation addCommunityTo", "($sequence : String!, $community_sequence : String!){\n  Add", "Communities (\n    from : { sequence : $sequence }\n  \tto : { sequence : $community_sequence }\n  \tdata : { confirmed : false\n    level : \"1\" }\n  ) {\n  \tlevel\n  }\n}\n"])), type, type); };
var allCommunitiesQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AlLCommunitiesQuery {\n    Community(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AlLCommunitiesQuery {\n    Community(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var BadgeComponent = /** @class */ (function () {
    function BadgeComponent(config, apollo, editable) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.editable = editable;
        this.addNew = false;
        this.canEdit = false;
        this.type = config.get('type');
        this.sequence = config.get('sequence');
        this.canEdit = this.editable.isEditable();
        console.log(this.sequence);
        var query = communityQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.items = res.data[_this.type][0].communities;
            console.log(_this.items);
        });
        this.apollo.sendQuery(allCommunitiesQuery()).subscribe(function (res) {
            _this.allCommunities = res.data['Community'];
            console.log(_this.allCommunities);
        });
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    BadgeComponent.prototype.addCommunityBadge = function () {
        console.log(this.sequence);
        console.log(this.community);
        this.addNew = false;
        this.apollo.sendUpdateQuery(communityUpdateQuery(this.type), { sequence: this.sequence, community_sequence: this.community.sequence }, communityQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    BadgeComponent.prototype.toggleAddNew = function () {
        this.addNew = !this.addNew;
    };
    BadgeComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    BadgeComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"] }
    ]; };
    BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge',
            template: __webpack_require__(/*! raw-loader!./badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/badge/badge.component.html"),
            styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/view/base/components/badge/badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"]])
    ], BadgeComponent);
    return BadgeComponent;
}());

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/app/view/base/components/claim/claim.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/base/components/claim/claim.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".claim {\n  border: none;\n  font-size: 1.8em !important;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9jbGFpbS9jbGFpbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9iYXNlL2NvbXBvbmVudHMvY2xhaW0vY2xhaW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL2NsYWltL2NsYWltLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYWltIHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuOGVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuY2xhaW0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS44ZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/base/components/claim/claim.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/base/components/claim/claim.component.ts ***!
  \***************************************************************/
/*! exports provided: ClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimComponent", function() { return ClaimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");






var claimQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query ClaimQuery {\n    ", "( sequence : \"", "\" ) {\n      translations {\n        claim\n        language {\n          short\n        }\n        sequence\n        __typename\n      }\n      sequence\n      __typename\n    }\n  }\n"], ["\n  query ClaimQuery {\n    ", "( sequence : \"", "\" ) {\n      translations {\n        claim\n        language {\n          short\n        }\n        sequence\n        __typename\n      }\n      sequence\n      __typename\n    }\n  }\n"])), type, sequence); };
var claimUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateClaim($sequence : String!, $claim : String){\n    Update", "Translation( sequence : $sequence, claim : $claim) {\n\t\t\t claim\n    }\n  }\n"], ["\n  mutation UpdateClaim($sequence : String!, $claim : String){\n    Update", "Translation( sequence : $sequence, claim : $claim) {\n\t\t\t claim\n    }\n  }\n"])), type); };
var ClaimComponent = /** @class */ (function () {
    function ClaimComponent(config, apollo, editable) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.editable = editable;
        this.canEdit = false;
        this.type = config.get("type");
        this.sequence = config.get("sequence");
        this.canEdit = this.editable.isEditable();
        var query = claimQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.item = res.data[_this.type][0].translations[0];
            console.log(_this.item);
        });
    }
    ClaimComponent.prototype.ngOnInit = function () {
    };
    ClaimComponent.prototype.update = function () {
        this.apollo.sendUpdateQuery(claimUpdateQuery(this.type), { sequence: this.item.sequence, claim: this.item.claim }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ClaimComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"] }
    ]; };
    ClaimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claim',
            template: __webpack_require__(/*! raw-loader!./claim.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/claim/claim.component.html"),
            styles: [__webpack_require__(/*! ./claim.component.scss */ "./src/app/view/base/components/claim/claim.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"]])
    ], ClaimComponent);
    return ClaimComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/view/base/components/contact/contact.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/view/base/components/contact/contact.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/base/components/contact/contact.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/base/components/contact/contact.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-balloon */ "./node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");







var contactQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query ContactQuery {\n     ", "( sequence : \"", "\" ) {\n       url\n        address {\n          sequence\n          address\n          address2\n          zip\n          city\n      }\n      sequence\n\n  }\n  }\n"], ["\n  query ContactQuery {\n     ", "( sequence : \"", "\" ) {\n       url\n        address {\n          sequence\n          address\n          address2\n          zip\n          city\n      }\n      sequence\n\n  }\n  }\n"])), type, sequence); };
var urlUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateURL($sequence : String!, $url : String){\n    UpdateClient( sequence : $sequence, url : $url) {\n    url\n    }\n  }\n"], ["\n  mutation UpdateURL($sequence : String!, $url : String){\n    UpdateClient( sequence : $sequence, url : $url) {\n    url\n    }\n  }\n"]))); };
var addressUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateAddress($sequence : String!, $address : String){\n    UpdateAddress( sequence : $sequence, address : $address) {\n\t\t\t address\n    }\n  }\n"], ["\n  mutation UpdateAddress($sequence : String!, $address : String){\n    UpdateAddress( sequence : $sequence, address : $address) {\n\t\t\t address\n    }\n  }\n"]))); };
var address2UpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateAddress2($sequence : String!, $address2 : String){\n    UpdateAddress( sequence : $sequence, address2 : $address2) {\n\t\t\t address2\n    }\n  }\n"], ["\n  mutation UpdateAddress2($sequence : String!, $address2 : String){\n    UpdateAddress( sequence : $sequence, address2 : $address2) {\n\t\t\t address2\n    }\n  }\n"]))); };
var zipUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_5 || (templateObject_5 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateZip($sequence : String!, $zip : String){\n    UpdateAddress( sequence : $sequence, zip : $zip) {\n\t\t\t zip\n    }\n  }\n"], ["\n  mutation UpdateZip($sequence : String!, $zip : String){\n    UpdateAddress( sequence : $sequence, zip : $zip) {\n\t\t\t zip\n    }\n  }\n"]))); };
var cityUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_6 || (templateObject_6 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateCity($sequence : String!, $city : String){\n    UpdateAddress( sequence : $sequence, city : $city) {\n\t\t\t city\n    }\n  }\n"], ["\n  mutation UpdateCity($sequence : String!, $city : String){\n    UpdateAddress( sequence : $sequence, city : $city) {\n\t\t\t city\n    }\n  }\n"]))); };
var ContactComponent = /** @class */ (function () {
    function ContactComponent(config, apollo, editable) {
        this.config = config;
        this.apollo = apollo;
        this.editable = editable;
        this.Editor = _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.config.get("type");
        this.sequence = this.config.get("sequence");
        this.canEdit = this.editable.isEditable();
        var query = contactQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.item = res.data[_this.type][0];
            console.log(_this.item);
            _this.address = _this.item.address;
            console.log(_this.address);
        });
    };
    ContactComponent.prototype.updateUrl = function () {
        this.apollo.sendUpdateQuery(urlUpdateQuery(this.type), { sequence: this.item.sequence, url: this.item.url }).subscribe(function (_a) {
            var data = _a.data;
            console.log('got data', data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ContactComponent.prototype.updateAddress = function () {
        this.apollo.sendUpdateQuery(addressUpdateQuery(this.type), { sequence: this.address.sequence, address: this.address.address }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ContactComponent.prototype.updateAddress2 = function () {
        this.apollo.sendUpdateQuery(address2UpdateQuery(this.type), { sequence: this.address.sequence, address2: this.address.address2 }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ContactComponent.prototype.updateZip = function () {
        this.apollo.sendUpdateQuery(zipUpdateQuery(this.type), { sequence: this.address.sequence, zip: this.address.zip }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ContactComponent.prototype.updateCity = function () {
        this.apollo.sendUpdateQuery(cityUpdateQuery(this.type), { sequence: this.address.sequence, city: this.address.city }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_6__["EditableService"] }
    ]; };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/view/base/components/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_6__["EditableService"]])
    ], ContactComponent);
    return ContactComponent;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/app/view/base/components/description/description.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/view/base/components/description/description.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/base/components/description/description.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/base/components/description/description.component.ts ***!
  \***************************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-balloon */ "./node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");







var descriptionQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query DescriptionQuery {\n    ", "( sequence : \"", "\" ) {\n      translations {\n        description\n        language {\n          short\n        }\n        sequence\n        __typename\n      }\n      sequence\n      __typename\n    }\n  }\n"], ["\n  query DescriptionQuery {\n    ", "( sequence : \"", "\" ) {\n      translations {\n        description\n        language {\n          short\n        }\n        sequence\n        __typename\n      }\n      sequence\n      __typename\n    }\n  }\n"])), type, sequence); };
var descriptionUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateDescription($sequence : String!, $description : String){\n    Update", "Translation( sequence : $sequence, description : $description) {\n\t\t\t description\n    }\n  }\n"], ["\n  mutation UpdateDescription($sequence : String!, $description : String){\n    Update", "Translation( sequence : $sequence, description : $description) {\n\t\t\t description\n    }\n  }\n"])), type); };
var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent(config, apollo, editable) {
        this.config = config;
        this.apollo = apollo;
        this.editable = editable;
        this.Editor = _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__;
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.config.get("type");
        this.sequence = this.config.get("sequence");
        this.canEdit = this.editable.isEditable();
        var query = descriptionQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.item = res.data[_this.type][0].translations[0];
            console.log(_this.item);
        });
    };
    DescriptionComponent.prototype.update = function () {
        this.apollo.sendUpdateQuery(descriptionUpdateQuery(this.type), { sequence: this.item.sequence, description: this.item.description }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    DescriptionComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_6__["EditableService"] }
    ]; };
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! raw-loader!./description.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/view/base/components/description/description.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_6__["EditableService"]])
    ], DescriptionComponent);
    return DescriptionComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/view/base/components/grid-item/grid-item.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/view/base/components/grid-item/grid-item.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-item-border {\n  /*background-image: linear-gradient(to left, #01b9ce, #451250);*/\n  background-color: #efefef;\n  padding: 1px;\n  flex: 1;\n  display: flex;\n}\n\n.grid-item-overlay {\n  background-color: white;\n  overflow: hidden;\n  cursor: pointer;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 198px;\n}\n\n.image-wrapper, .image-wrapper img {\n  max-width: 100%;\n  height: auto;\n}\n\n:host ::ng-deep .relation-item .grid-item-border {\n  background-image: linear-gradient(to left, #f3aa00, #f0613d);\n  padding: 2px;\n  flex: 1;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9ncmlkLWl0ZW0vZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9ncmlkLWl0ZW0vZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0VBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsNERBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL2dyaWQtaXRlbS9ncmlkLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1pdGVtLWJvcmRlciB7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMWI5Y2UsICM0NTEyNTApOyovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIHBhZGRpbmc6IDFweDtcbiAgZmxleCA6IDE7XG4gIGRpc3BsYXk6ZmxleDtcbn1cblxuLmdyaWQtaXRlbS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTk4cHg7XG59XG5cbi5pbWFnZS13cmFwcGVyLCAuaW1hZ2Utd3JhcHBlciBpbWcge1xuICBtYXgtd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJlbGF0aW9uLWl0ZW0gLmdyaWQtaXRlbS1ib3JkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2YzYWEwMCwgI2YwNjEzZCk7XG4gIHBhZGRpbmc6IDJweDtcbiAgZmxleCA6IDE7XG4gIGRpc3BsYXk6ZmxleDtcbn1cblxuXG4iLCIuZ3JpZC1pdGVtLWJvcmRlciB7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMWI5Y2UsICM0NTEyNTApOyovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIHBhZGRpbmc6IDFweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdyaWQtaXRlbS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTk4cHg7XG59XG5cbi5pbWFnZS13cmFwcGVyLCAuaW1hZ2Utd3JhcHBlciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5yZWxhdGlvbi1pdGVtIC5ncmlkLWl0ZW0tYm9yZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmM2FhMDAsICNmMDYxM2QpO1xuICBwYWRkaW5nOiAycHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/base/components/grid-item/grid-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view/base/components/grid-item/grid-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: GridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemComponent", function() { return GridItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");




var gridQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query GridQuery($first : Int, $offset : Int) {\n    list : ", "(first : $first, offset : $offset) {\n      imageUrl\n      sequence\n      __typename\n    }\n  }\n"], ["\n  query GridQuery($first : Int, $offset : Int) {\n    list : ", "(first : $first, offset : $offset) {\n      imageUrl\n      sequence\n      __typename\n    }\n  }\n"])), type); };
var GridItemComponent = /** @class */ (function () {
    function GridItemComponent(config) {
        this.config = config;
    }
    GridItemComponent.prototype.ngOnInit = function () {
        this.config.get("type");
    };
    GridItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridItemComponent.prototype, "item", void 0);
    GridItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-item',
            template: __webpack_require__(/*! raw-loader!./grid-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/grid-item/grid-item.component.html"),
            styles: [__webpack_require__(/*! ./grid-item.component.scss */ "./src/app/view/base/components/grid-item/grid-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], GridItemComponent);
    return GridItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/base/components/image-uploader/image-uploader.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/view/base/components/image-uploader/image-uploader.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-zone {\n  margin-top: 20px;\n  border: dotted 3px red;\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9pbWFnZS11cGxvYWRlci9pbWFnZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9iYXNlL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkZXIvaW1hZ2UtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9pbWFnZS11cGxvYWRlci9pbWFnZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLXpvbmUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTtcbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG59XG4iLCIuZHJvcC16b25lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgcGFkZGluZzogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/base/components/image-uploader/image-uploader.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/view/base/components/image-uploader/image-uploader.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ImageUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploaderComponent", function() { return ImageUploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/services/file.service */ "./src/app/data/services/file.service.ts");






var updateImageUrl = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\nmutation updateImage($sequence: String!, $imageUrl: String) {\n  Update", "(sequence: $sequence, imageUrl: $imageUrl) {\n    sequence\n  }\n}\n"], ["\nmutation updateImage($sequence: String!, $imageUrl: String) {\n  Update", "(sequence: $sequence, imageUrl: $imageUrl) {\n    sequence\n  }\n}\n"])), type); };
var ImageUploaderComponent = /** @class */ (function () {
    function ImageUploaderComponent(apollo, config, file) {
        this.apollo = apollo;
        this.config = config;
        this.file = file;
    }
    ImageUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config.getSubject().subscribe(function (_a) {
            var type = _a.type, sequence = _a.sequence;
            _this.type = type;
            _this.sequence = sequence;
        });
    };
    ImageUploaderComponent.prototype.handleFileInput = function (files) {
        var _this = this;
        var file = files.item(0);
        if (file) {
            var fileExtension = file.name.split('.').pop();
            var sequence = this.config.get('sequence');
            var type = this.config.get('type');
            var imageUrl = type.toLowerCase() + "_" + sequence + "." + fileExtension;
            // if user could update image then send image to minio
            this.apollo.mutateObservable(updateImageUrl(type), { sequence: sequence, imageUrl: imageUrl }).subscribe(function (res) {
                if (!res.error) {
                    _this.file.uploadFile(file).subscribe(function () { return console.log("uploaded file"); });
                }
            });
        }
    };
    ImageUploaderComponent.ctorParameters = function () { return [
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"] },
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _data_services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"] }
    ]; };
    ImageUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-uploader',
            template: __webpack_require__(/*! raw-loader!./image-uploader.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/image-uploader/image-uploader.component.html"),
            styles: [__webpack_require__(/*! ./image-uploader.component.scss */ "./src/app/view/base/components/image-uploader/image-uploader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _data_services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"]])
    ], ImageUploaderComponent);
    return ImageUploaderComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/base/components/image/image.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/base/components/image/image.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-img {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.title-img img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.img-upload {\n  max-width: 100%;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9iYXNlL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZS1pbWcgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgXG59XG5cbi5pbWctdXBsb2FkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn0iLCIudGl0bGUtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUtaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmltZy11cGxvYWQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/base/components/image/image.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/base/components/image/image.component.ts ***!
  \***************************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");






//TODO: go for uid
var imageQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query ImageQuery {\n    ", "( sequence : \"", "\" ) {\n      uid\n      imageUrl\n      sequence\n      __typename\n    }\n  }\n"], ["\n  query ImageQuery {\n    ", "( sequence : \"", "\" ) {\n      uid\n      imageUrl\n      sequence\n      __typename\n    }\n  }\n"])), type, sequence); };
var imageUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation UpdateImage($sequence : String!, $imageUrl : String){\n    Update", "( sequence : $sequence, imageUrl : $imageUrl) {\n\t\t\t imageUrl\n    }\n  }\n"], ["\n  mutation UpdateImage($sequence : String!, $imageUrl : String){\n    Update", "( sequence : $sequence, imageUrl : $imageUrl) {\n\t\t\t imageUrl\n    }\n  }\n"])), type); };
var ImageComponent = /** @class */ (function () {
    function ImageComponent(config, apollo, editable) {
        this.config = config;
        this.apollo = apollo;
        this.editable = editable;
    }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.config.get("type");
        this.sequence = this.config.get("sequence");
        this.canEdit = this.editable.isEditable();
        this.canEdit = true;
        var query = imageQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.item = res.data[_this.type][0];
            _this.config.set('uid', _this.item.uid);
        });
    };
    ImageComponent.prototype.uploadImage = function () {
        this.apollo.sendUpdateQuery(imageUpdateQuery(this.type), { sequence: this.item.sequence, imageUrl: this.item.imageUrl }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ImageComponent.prototype.imageNotLoaded = function ($event) {
    };
    ImageComponent.prototype.mouseenter = function () {
        this.mouseover = true;
    };
    ImageComponent.prototype.mouseleave = function () {
        this.mouseover = false;
    };
    ImageComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"] }
    ]; };
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/view/base/components/image/image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"]])
    ], ImageComponent);
    return ImageComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/view/base/components/search/search.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/view/base/components/search/search.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/base/components/search/search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/base/components/search/search.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/enums/modeltype.enum */ "./src/app/data/enums/modeltype.enum.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");






var listQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\nquery listQuery($searchString : String){\n  list : ", "(first : 50){\n    sequence\n    imageUrl\n    translations( filter : {title_not : \"\", title_contains : $searchString}) {\n      title\n    }\n  }\n}\n"], ["\nquery listQuery($searchString : String){\n  list : ", "(first : 50){\n    sequence\n    imageUrl\n    translations( filter : {title_not : \"\", title_contains : $searchString}) {\n      title\n    }\n  }\n}\n"])), type); };
var SearchComponent = /** @class */ (function () {
    function SearchComponent(config, apollo) {
        this.config = config;
        this.apollo = apollo;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.items = [];
        this.searchString = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var re = /(?:\.([^.]+))?$/;
        this.type = this.config.get("type");
        this.apollo.sendQuery(listQuery(this.type), { searchString: this.searchString }).subscribe(function (result) {
            console.log(result);
            _this.items = result.data.list.filter(function (r) { return r.translations.length > 0; });
            _this.items.map(function (value) {
                var ending = re.exec(value.logo)[1];
                if (_this.type === _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_3__["Modeltype"].SuccessStory)
                    _this.type = "success_story";
                value.imageUrl = "http://minio.digisus.ch/oss-directory/" + _this.type.toLowerCase() + "_" + value.uid + "." + ending;
            });
        });
    };
    SearchComponent.prototype.updateGrid = function () {
        var _this = this;
        var re = /(?:\.([^.]+))?$/;
        this.apollo.sendQuery(listQuery(this.type), { searchString: this.searchString }).subscribe(function (result) {
            _this.items = result.data.list.filter(function (r) { return r.translations.length > 0; });
            _this.items.map(function (value) {
                var ending = re.exec(value.logo)[1];
                if (_this.type === _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_3__["Modeltype"].SuccessStory)
                    _this.type = "success_story";
                value.imageUrl = "http://minio.digisus.ch/oss-directory/" + _this.type.toLowerCase() + "_" + value.uid + "." + ending;
            });
        });
    };
    SearchComponent.prototype.onSearch = function () {
        this.search.emit(this.searchString);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchComponent.prototype, "search", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/view/base/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"]])
    ], SearchComponent);
    return SearchComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/base/components/stats/stats.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/base/components/stats/stats.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/base/components/stats/stats.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/base/components/stats/stats.component.ts ***!
  \***************************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-balloon */ "./node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");






var statsQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query StatsQuery {\n     ", "( sequence : \"", "\" ) {\n       sequence\n       created_at{\n        year\n        month\n        day\n      }\n      updated_at {\n        year\n        month\n        day\n      }\n\n  }\n  }\n"], ["\n  query StatsQuery {\n     ", "( sequence : \"", "\" ) {\n       sequence\n       created_at{\n        year\n        month\n        day\n      }\n      updated_at {\n        year\n        month\n        day\n      }\n\n  }\n  }\n"])), type, sequence); };
var StatsComponent = /** @class */ (function () {
    function StatsComponent(config, apollo) {
        this.config = config;
        this.apollo = apollo;
        this.Editor = _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__;
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.config.get("type");
        this.sequence = this.config.get("sequence");
        var query = statsQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.createdAt = res.data[_this.type][0].created_at;
            console.log(_this.createdAt);
            _this.updatedAt = res.data[_this.type][0].updated_at;
            console.log(_this.updatedAt);
            //format date
            if (_this.updatedAt.year == null) {
                if (_this.createdAt.year == null) {
                    _this.formattedDate = null;
                }
                else {
                    _this.formattedDate = _this.formatDigit(_this.createdAt.day) + '.' + _this.formatDigit(_this.createdAt.month) + '.' + _this.createdAt.year;
                }
            }
            else {
                _this.formattedDate = _this.formatDigit(_this.updatedAt.day) + '.' + _this.formatDigit(_this.updatedAt.month) + '.' + _this.updatedAt.year;
            }
        });
    };
    //add a zero before single length digits
    StatsComponent.prototype.formatDigit = function (digit) {
        digit = String(digit);
        if (digit.length === 1) {
            return '0' + digit;
        }
        else {
            return digit;
        }
    };
    StatsComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"] }
    ]; };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/view/base/components/stats/stats.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_5__["ApolloService"]])
    ], StatsComponent);
    return StatsComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/base/components/title/title.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/base/components/title/title.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  border: none;\n  font-size: 2em !important;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Jhc2UvY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9iYXNlL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvYmFzZS9jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIudGl0bGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/base/components/title/title.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/base/components/title/title.component.ts ***!
  \***************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../auth/services/editable.service */ "./src/app/auth/services/editable.service.ts");






var titleQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query ClaimQuery {\n    ", "( sequence : \"", "\" ) {\n      translations {\n        title\n        language {\n          short\n        }\n        sequence\n        __typename\n      }\n      sequence\n      __typename\n    }\n  }\n"], ["\n  query ClaimQuery {\n    ", "( sequence : \"", "\" ) {\n      translations {\n        title\n        language {\n          short\n        }\n        sequence\n        __typename\n      }\n      sequence\n      __typename\n    }\n  }\n"])), type, sequence); };
var titleUpdateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n   mutation UpdateDescription($sequence : String!, $title : String){\n    Update", "Translation( sequence : $sequence, title : $title) {\n\t\t\t title\n    }\n  }\n"], ["\n   mutation UpdateDescription($sequence : String!, $title : String){\n    Update", "Translation( sequence : $sequence, title : $title) {\n\t\t\t title\n    }\n  }\n"])), type); };
var TitleComponent = /** @class */ (function () {
    function TitleComponent(config, apollo, editable) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.editable = editable;
        this.type = config.get("type");
        this.sequence = config.get("sequence");
        this.canEdit = this.editable.isEditable();
        var query = titleQuery(this.type, this.sequence);
        var obs = this.apollo.sendQuery(query);
        obs.subscribe(function (res) {
            _this.item = res.data[_this.type][0].translations[0];
            console.log(_this.item);
        });
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent.prototype.update = function () {
        this.apollo.sendUpdateQuery(titleUpdateQuery(this.type), { sequence: this.item.sequence, title: this.item.title }).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    TitleComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"] },
        { type: _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"] }
    ]; };
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! raw-loader!./title.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/base/components/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/view/base/components/title/title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"],
            _auth_services_editable_service__WEBPACK_IMPORTED_MODULE_5__["EditableService"]])
    ], TitleComponent);
    return TitleComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/view/create-new/create-new.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/view/create-new/create-new.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvY3JlYXRlLW5ldy9jcmVhdGUtbmV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/create-new/create-new.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/view/create-new/create-new.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewComponent", function() { return CreateNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var createQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation CreateTypeQuery {\n    Create", " {\n      sequence\n      __typename\n    }\n  }\n"], ["\n  mutation CreateTypeQuery {\n    Create", " {\n      sequence\n      __typename\n    }\n  }\n"])), type); };
var CreateNewComponent = /** @class */ (function () {
    function CreateNewComponent(config, apollo, router) {
        this.config = config;
        this.apollo = apollo;
        this.router = router;
    }
    CreateNewComponent.prototype.ngOnInit = function () {
    };
    CreateNewComponent.prototype.create = function (type) {
        var _this = this;
        var query = createQuery(type);
        this.apollo.mutateObservable(query).subscribe(function (res) {
            _this.config.set('type', type);
            _this.config.set('sequence', res.data['Create' + type].sequence);
            _this.router.navigateByUrl("/hier-kommt-spezifischer-text/" + _this.config.get('sequence') + "/oder-auch-hier/bald-auch-ganz-dynamisch");
            console.log(res.data);
            console.log(_this.config.get('type'));
            console.log(_this.config.get('sequence'));
        });
    };
    CreateNewComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CreateNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-new',
            template: __webpack_require__(/*! raw-loader!./create-new.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/create-new/create-new.component.html"),
            styles: [__webpack_require__(/*! ./create-new.component.scss */ "./src/app/view/create-new/create-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateNewComponent);
    return CreateNewComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/detail/detail-layout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/view/detail/detail-layout.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 90%;\n  margin: auto;\n}\n\n.left {\n  left: 0;\n  margin-top: 2em;\n}\n\n.right {\n  margin-top: 2em;\n  right: 100%;\n}\n\n.change-language {\n  font-size: 50px;\n  margin: 20px;\n}\n\n.change-language .mat-icon {\n  font-size: 50px;\n  width: auto;\n  line-height: 0.5;\n}\n\n.event-times {\n  display: flex;\n  justify-content: center;\n}\n\n.event-times > input {\n  text-align: center;\n}\n\n.title-img img {\n  width: 100%;\n}\n\n.product-form-component .links-container {\n  width: 40%;\n}\n\n.communities {\n  justify-content: space-around;\n}\n\n.community-batch-container {\n  width: 90px;\n  height: 90px;\n  padding: 2px;\n  border-radius: 50%;\n  background-color: #F4AA0D;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.community-batch {\n  width: 100%;\n}\n\n.detail-gradient {\n  /*background-image: linear-gradient(to left, #01b9ce, #451250);*/\n  background-color: #efefef;\n  margin: 5%;\n  padding: 1px;\n}\n\n.detail-overlay {\n  background-color: white;\n}\n\n.detail-container {\n  padding: 10px;\n  width: 100%;\n}\n\nmat-divider {\n  margin: 20px 0;\n  border-top-color: black !important;\n}\n\n.relations-container {\n  height: 600px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2RldGFpbC9kZXRhaWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3L2RldGFpbC9kZXRhaWwtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdFQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlldy9kZXRhaWwvZGV0YWlsLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtY29udGVudCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn07XG5cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuXG4ucmlnaHQge1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHJpZ2h0OiAxMDAlO1xufVxuXG4uY2hhbmdlLWxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jaGFuZ2UtbGFuZ3VhZ2UgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDAuNTtcbn1cblxuLmV2ZW50LXRpbWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ldmVudC10aW1lcz5pbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtZm9ybS1jb21wb25lbnQgLmxpbmtzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5jb21tdW5pdGllcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY29tbXVuaXR5LWJhdGNoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRBQTBEO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbW11bml0eS1iYXRjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGV0YWlsLWdyYWRpZW50IHtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAxYjljZSwgIzQ1MTI1MCk7Ki9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgbWFyZ2luOiA1JTtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uZGV0YWlsLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmRldGFpbC1jb250YWluZXIge1xuICBwYWRkaW5nOjEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG59XG5cbi5yZWxhdGlvbnMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiIsIi5kZXRhaWwtY29udGVudCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxlZnQge1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5yaWdodCB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgcmlnaHQ6IDEwMCU7XG59XG5cbi5jaGFuZ2UtbGFuZ3VhZ2Uge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmNoYW5nZS1sYW5ndWFnZSAubWF0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMC41O1xufVxuXG4uZXZlbnQtdGltZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV2ZW50LXRpbWVzID4gaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LWZvcm0tY29tcG9uZW50IC5saW5rcy1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xufVxuXG4uY29tbXVuaXRpZXMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNvbW11bml0eS1iYXRjaC1jb250YWluZXIge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0QUEwRDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb21tdW5pdHktYmF0Y2gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbC1ncmFkaWVudCB7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMWI5Y2UsICM0NTEyNTApOyovXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIG1hcmdpbjogNSU7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmRldGFpbC1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5kZXRhaWwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlci10b3AtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5yZWxhdGlvbnMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/detail/detail-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view/detail/detail-layout.component.ts ***!
  \********************************************************/
/*! exports provided: DetailLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailLayoutComponent", function() { return DetailLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailLayoutComponent = /** @class */ (function () {
    function DetailLayoutComponent() {
    }
    DetailLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-layout',
            template: __webpack_require__(/*! raw-loader!./detail-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/detail/detail-layout.component.html"),
            styles: [__webpack_require__(/*! ./detail-layout.component.scss */ "./src/app/view/detail/detail-layout.component.scss")]
        })
    ], DetailLayoutComponent);
    return DetailLayoutComponent;
}());



/***/ }),

/***/ "./src/app/view/detail/detail.component.scss":
/*!***************************************************!*\
  !*** ./src/app/view/detail/detail.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/detail/detail.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/detail/detail.component.ts ***!
  \*************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _route_services_route_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../route/services/route.service */ "./src/app/route/services/route.service.ts");








var CreateQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["  mutation createModel{\n    Create", " {\n        sequence\n    }\n}\n"], ["  mutation createModel{\n    Create", " {\n        sequence\n    }\n}\n"])), type); };
var DetailComponent = /** @class */ (function () {
    function DetailComponent(apollo, config, route) {
        this.apollo = apollo;
        this.config = config;
        this.route = route;
        this.terminateSubs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sequence = this.config.get('sequence');
        var obs = this.apollo.getType(sequence).subscribe(function (type) {
            obs.unsubscribe();
            _this.type = type;
        });
        var events = this.route.events();
        var subs = events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.terminateSubs)).subscribe(function () {
            subs.unsubscribe();
            _this.ngOnInit();
        });
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.terminateSubs.next();
        this.terminateSubs.complete();
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_2__["ApolloService"] },
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
        { type: _route_services_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/view/detail/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_services_apollo_service__WEBPACK_IMPORTED_MODULE_2__["ApolloService"],
            _config_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _route_services_route_service__WEBPACK_IMPORTED_MODULE_7__["RouteService"]])
    ], DetailComponent);
    return DetailComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/detail/directives/detail-directive.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-directive.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailDirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDirectiveModule", function() { return DetailDirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _detail_nw_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-nw.directive */ "./src/app/view/detail/directives/detail-nw.directive.ts");
/* harmony import */ var _detail_sw_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-sw.directive */ "./src/app/view/detail/directives/detail-sw.directive.ts");
/* harmony import */ var _detail_se_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-se.directive */ "./src/app/view/detail/directives/detail-se.directive.ts");
/* harmony import */ var _detail_ne_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-ne.directive */ "./src/app/view/detail/directives/detail-ne.directive.ts");
/* harmony import */ var _detail_ne_top_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-ne-top.directive */ "./src/app/view/detail/directives/detail-ne-top.directive.ts");
/* harmony import */ var _detail_ne_mid_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail-ne-mid.directive */ "./src/app/view/detail/directives/detail-ne-mid.directive.ts");
/* harmony import */ var _detail_ne_bot_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail-ne-bot.directive */ "./src/app/view/detail/directives/detail-ne-bot.directive.ts");










var DetailDirectiveModule = /** @class */ (function () {
    function DetailDirectiveModule() {
    }
    DetailDirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _detail_nw_directive__WEBPACK_IMPORTED_MODULE_3__["DetailNwDirective"],
                _detail_sw_directive__WEBPACK_IMPORTED_MODULE_4__["DetailSwDirective"],
                _detail_se_directive__WEBPACK_IMPORTED_MODULE_5__["DetailSeDirective"],
                _detail_ne_directive__WEBPACK_IMPORTED_MODULE_6__["DetailNeDirective"],
                _detail_ne_top_directive__WEBPACK_IMPORTED_MODULE_7__["DetailNeTopDirective"],
                _detail_ne_mid_directive__WEBPACK_IMPORTED_MODULE_8__["DetailNeMidDirective"],
                _detail_ne_bot_directive__WEBPACK_IMPORTED_MODULE_9__["DetailNeBotDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _detail_nw_directive__WEBPACK_IMPORTED_MODULE_3__["DetailNwDirective"],
                _detail_sw_directive__WEBPACK_IMPORTED_MODULE_4__["DetailSwDirective"],
                _detail_se_directive__WEBPACK_IMPORTED_MODULE_5__["DetailSeDirective"],
                _detail_ne_directive__WEBPACK_IMPORTED_MODULE_6__["DetailNeDirective"],
                _detail_ne_top_directive__WEBPACK_IMPORTED_MODULE_7__["DetailNeTopDirective"],
                _detail_ne_mid_directive__WEBPACK_IMPORTED_MODULE_8__["DetailNeMidDirective"],
                _detail_ne_bot_directive__WEBPACK_IMPORTED_MODULE_9__["DetailNeBotDirective"]
            ],
        })
    ], DetailDirectiveModule);
    return DetailDirectiveModule;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-ne-bot.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-ne-bot.directive.ts ***!
  \*******************************************************************/
/*! exports provided: DetailNeBotDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNeBotDirective", function() { return DetailNeBotDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailNeBotDirective = /** @class */ (function () {
    function DetailNeBotDirective() {
    }
    DetailNeBotDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-ne-bot]',
        })
    ], DetailNeBotDirective);
    return DetailNeBotDirective;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-ne-mid.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-ne-mid.directive.ts ***!
  \*******************************************************************/
/*! exports provided: DetailNeMidDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNeMidDirective", function() { return DetailNeMidDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailNeMidDirective = /** @class */ (function () {
    function DetailNeMidDirective() {
    }
    DetailNeMidDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-ne-mid]',
        })
    ], DetailNeMidDirective);
    return DetailNeMidDirective;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-ne-top.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-ne-top.directive.ts ***!
  \*******************************************************************/
/*! exports provided: DetailNeTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNeTopDirective", function() { return DetailNeTopDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailNeTopDirective = /** @class */ (function () {
    function DetailNeTopDirective() {
    }
    DetailNeTopDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-ne-top]',
        })
    ], DetailNeTopDirective);
    return DetailNeTopDirective;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-ne.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-ne.directive.ts ***!
  \***************************************************************/
/*! exports provided: DetailNeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNeDirective", function() { return DetailNeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailNeDirective = /** @class */ (function () {
    function DetailNeDirective() {
    }
    DetailNeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-ne]',
        })
    ], DetailNeDirective);
    return DetailNeDirective;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-nw.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-nw.directive.ts ***!
  \***************************************************************/
/*! exports provided: DetailNwDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNwDirective", function() { return DetailNwDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailNwDirective = /** @class */ (function () {
    function DetailNwDirective() {
    }
    DetailNwDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-nw]',
        })
    ], DetailNwDirective);
    return DetailNwDirective;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-se.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-se.directive.ts ***!
  \***************************************************************/
/*! exports provided: DetailSeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSeDirective", function() { return DetailSeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailSeDirective = /** @class */ (function () {
    function DetailSeDirective() {
    }
    DetailSeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-se]',
        })
    ], DetailSeDirective);
    return DetailSeDirective;
}());



/***/ }),

/***/ "./src/app/view/detail/directives/detail-sw.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/detail/directives/detail-sw.directive.ts ***!
  \***************************************************************/
/*! exports provided: DetailSwDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailSwDirective", function() { return DetailSwDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailSwDirective = /** @class */ (function () {
    function DetailSwDirective() {
    }
    DetailSwDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detail-sw]',
        })
    ], DetailSwDirective);
    return DetailSwDirective;
}());



/***/ }),

/***/ "./src/app/view/drop-down-grid/directives/drop-down-grid-directive.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/view/drop-down-grid/directives/drop-down-grid-directive.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DropDownGridDirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownGridDirectiveModule", function() { return DropDownGridDirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _drop_down_grid_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drop-down-grid-header.directive */ "./src/app/view/drop-down-grid/directives/drop-down-grid-header.directive.ts");
/* harmony import */ var _drop_down_grid_items_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drop-down-grid-items.directive */ "./src/app/view/drop-down-grid/directives/drop-down-grid-items.directive.ts");





var DropDownGridDirectiveModule = /** @class */ (function () {
    function DropDownGridDirectiveModule() {
    }
    DropDownGridDirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _drop_down_grid_header_directive__WEBPACK_IMPORTED_MODULE_3__["DropDownGridHeaderDirective"],
                _drop_down_grid_items_directive__WEBPACK_IMPORTED_MODULE_4__["DropDownGridItemsDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _drop_down_grid_header_directive__WEBPACK_IMPORTED_MODULE_3__["DropDownGridHeaderDirective"],
                _drop_down_grid_items_directive__WEBPACK_IMPORTED_MODULE_4__["DropDownGridItemsDirective"]
            ],
        })
    ], DropDownGridDirectiveModule);
    return DropDownGridDirectiveModule;
}());



/***/ }),

/***/ "./src/app/view/drop-down-grid/directives/drop-down-grid-header.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/view/drop-down-grid/directives/drop-down-grid-header.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: DropDownGridHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownGridHeaderDirective", function() { return DropDownGridHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownGridHeaderDirective = /** @class */ (function () {
    function DropDownGridHeaderDirective() {
    }
    DropDownGridHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[drop-down-grid-header]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropDownGridHeaderDirective);
    return DropDownGridHeaderDirective;
}());



/***/ }),

/***/ "./src/app/view/drop-down-grid/directives/drop-down-grid-items.directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/view/drop-down-grid/directives/drop-down-grid-items.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: DropDownGridItemsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownGridItemsDirective", function() { return DropDownGridItemsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownGridItemsDirective = /** @class */ (function () {
    function DropDownGridItemsDirective() {
    }
    DropDownGridItemsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[drop-down-grid-items]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropDownGridItemsDirective);
    return DropDownGridItemsDirective;
}());



/***/ }),

/***/ "./src/app/view/drop-down-grid/drop-down-grid-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/view/drop-down-grid/drop-down-grid-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZHJvcC1kb3duLWdyaWQvZHJvcC1kb3duLWdyaWQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/drop-down-grid/drop-down-grid-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/view/drop-down-grid/drop-down-grid-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: DropDownGridLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownGridLayoutComponent", function() { return DropDownGridLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownGridLayoutComponent = /** @class */ (function () {
    function DropDownGridLayoutComponent() {
    }
    DropDownGridLayoutComponent.prototype.ngOnInit = function () {
    };
    DropDownGridLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drop-down-grid-layout',
            template: __webpack_require__(/*! raw-loader!./drop-down-grid-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/drop-down-grid/drop-down-grid-layout.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-grid-layout.component.scss */ "./src/app/view/drop-down-grid/drop-down-grid-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropDownGridLayoutComponent);
    return DropDownGridLayoutComponent;
}());



/***/ }),

/***/ "./src/app/view/drop-down-grid/drop-down-grid.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/view/drop-down-grid/drop-down-grid.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expansion-panel {\n  min-height: 220px;\n  overflow: hidden;\n  max-height: 220px;\n  transition: max-height 0.3s ease-out;\n}\n\n.panel-open {\n  max-height: 1000px;\n  transition: max-height 0.3s ease-in;\n  overflow-y: auto;\n}\n\n.panel-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n.expansion-panel-icon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Ryb3AtZG93bi1ncmlkL2Ryb3AtZG93bi1ncmlkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3L2Ryb3AtZG93bi1ncmlkL2Ryb3AtZG93bi1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L2Ryb3AtZG93bi1ncmlkL2Ryb3AtZG93bi1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuc2lvbi1wYW5lbCB7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAyMjBweDtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuM3MgZWFzZS1vdXQ7XG59XG5cbi5wYW5lbC1vcGVuIHtcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC4zcyBlYXNlLWluO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucGFuZWwtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5leHBhbnNpb24tcGFuZWwtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi5leHBhbnNpb24tcGFuZWwge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMjIwcHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcbn1cblxuLnBhbmVsLW9wZW4ge1xuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLWluO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucGFuZWwtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5leHBhbnNpb24tcGFuZWwtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/drop-down-grid/drop-down-grid.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view/drop-down-grid/drop-down-grid.component.ts ***!
  \*****************************************************************/
/*! exports provided: DropDownGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownGridComponent", function() { return DropDownGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownGridComponent = /** @class */ (function () {
    function DropDownGridComponent() {
        this.expansionPanelOpen = false;
    }
    DropDownGridComponent.prototype.ngOnInit = function () {
    };
    DropDownGridComponent.prototype.toggleExpansionPanel = function () {
        this.expansionPanelOpen = !this.expansionPanelOpen;
    };
    DropDownGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drop-down-grid',
            template: __webpack_require__(/*! raw-loader!./drop-down-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/drop-down-grid/drop-down-grid.component.html"),
            styles: [__webpack_require__(/*! ./drop-down-grid.component.scss */ "./src/app/view/drop-down-grid/drop-down-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropDownGridComponent);
    return DropDownGridComponent;
}());



/***/ }),

/***/ "./src/app/view/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/view/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\n  position: relative;\n  height: 100px;\n  background-color: #464646;\n  color: white;\n}\n\n#footer-content {\n  font-size: 16px;\n  display: flex;\n  justify-content: space-around;\n  margin-left: 150px;\n  width: 50%;\n}\n\n#skew {\n  width: 150px;\n  height: 60px;\n  background-color: #f0613d;\n  transform: skew(-45deg);\n  transform-origin: 100% 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXcvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUdBLHVCQUFBO0VBR0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNmb290ZXItY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI3NrZXcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNjEzZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tldygtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHNrZXcoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbiIsIiNmb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2NDY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2Zvb3Rlci1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4jc2tldyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2MTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiBza2V3KC00NWRlZyk7XG4gIHRyYW5zZm9ybTogc2tldygtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/view/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/view/grid/directives/grid-bot.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/view/grid/directives/grid-bot.directive.ts ***!
  \************************************************************/
/*! exports provided: GridBotDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBotDirective", function() { return GridBotDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridBotDirective = /** @class */ (function () {
    function GridBotDirective() {
    }
    GridBotDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[grid-bot]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridBotDirective);
    return GridBotDirective;
}());



/***/ }),

/***/ "./src/app/view/grid/directives/grid-directive.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/grid/directives/grid-directive.module.ts ***!
  \***************************************************************/
/*! exports provided: GridDirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridDirectiveModule", function() { return GridDirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _grid_top_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-top.directive */ "./src/app/view/grid/directives/grid-top.directive.ts");
/* harmony import */ var _grid_bot_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid-bot.directive */ "./src/app/view/grid/directives/grid-bot.directive.ts");
/* harmony import */ var _grid_left_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-left.directive */ "./src/app/view/grid/directives/grid-left.directive.ts");
/* harmony import */ var _grid_right_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-right.directive */ "./src/app/view/grid/directives/grid-right.directive.ts");
/* harmony import */ var _grid_mid_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid-mid.directive */ "./src/app/view/grid/directives/grid-mid.directive.ts");








var GridDirectiveModule = /** @class */ (function () {
    function GridDirectiveModule() {
    }
    GridDirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _grid_top_directive__WEBPACK_IMPORTED_MODULE_3__["GridTopDirective"],
                _grid_bot_directive__WEBPACK_IMPORTED_MODULE_4__["GridBotDirective"],
                _grid_left_directive__WEBPACK_IMPORTED_MODULE_5__["GridLeftDirective"],
                _grid_right_directive__WEBPACK_IMPORTED_MODULE_6__["GridRightDirective"],
                _grid_mid_directive__WEBPACK_IMPORTED_MODULE_7__["GridMidDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _grid_top_directive__WEBPACK_IMPORTED_MODULE_3__["GridTopDirective"],
                _grid_bot_directive__WEBPACK_IMPORTED_MODULE_4__["GridBotDirective"],
                _grid_left_directive__WEBPACK_IMPORTED_MODULE_5__["GridLeftDirective"],
                _grid_right_directive__WEBPACK_IMPORTED_MODULE_6__["GridRightDirective"],
                _grid_mid_directive__WEBPACK_IMPORTED_MODULE_7__["GridMidDirective"]
            ],
        })
    ], GridDirectiveModule);
    return GridDirectiveModule;
}());



/***/ }),

/***/ "./src/app/view/grid/directives/grid-left.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/view/grid/directives/grid-left.directive.ts ***!
  \*************************************************************/
/*! exports provided: GridLeftDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLeftDirective", function() { return GridLeftDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridLeftDirective = /** @class */ (function () {
    function GridLeftDirective() {
    }
    GridLeftDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[grid-left]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridLeftDirective);
    return GridLeftDirective;
}());



/***/ }),

/***/ "./src/app/view/grid/directives/grid-mid.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/view/grid/directives/grid-mid.directive.ts ***!
  \************************************************************/
/*! exports provided: GridMidDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMidDirective", function() { return GridMidDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridMidDirective = /** @class */ (function () {
    function GridMidDirective() {
    }
    GridMidDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[grid-mid]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridMidDirective);
    return GridMidDirective;
}());



/***/ }),

/***/ "./src/app/view/grid/directives/grid-right.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/view/grid/directives/grid-right.directive.ts ***!
  \**************************************************************/
/*! exports provided: GridRightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRightDirective", function() { return GridRightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridRightDirective = /** @class */ (function () {
    function GridRightDirective() {
    }
    GridRightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[grid-right]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridRightDirective);
    return GridRightDirective;
}());



/***/ }),

/***/ "./src/app/view/grid/directives/grid-top.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/view/grid/directives/grid-top.directive.ts ***!
  \************************************************************/
/*! exports provided: GridTopDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridTopDirective", function() { return GridTopDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridTopDirective = /** @class */ (function () {
    function GridTopDirective() {
    }
    GridTopDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[grid-top]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridTopDirective);
    return GridTopDirective;
}());



/***/ }),

/***/ "./src/app/view/grid/grid-layout.component.scss":
/*!******************************************************!*\
  !*** ./src/app/view/grid/grid-layout.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZ3JpZC9ncmlkLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/grid/grid-layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view/grid/grid-layout.component.ts ***!
  \****************************************************/
/*! exports provided: GridLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayoutComponent", function() { return GridLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridLayoutComponent = /** @class */ (function () {
    function GridLayoutComponent() {
    }
    GridLayoutComponent.prototype.ngOnInit = function () {
    };
    GridLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-layout',
            template: __webpack_require__(/*! raw-loader!./grid-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/grid/grid-layout.component.html"),
            styles: [__webpack_require__(/*! ./grid-layout.component.scss */ "./src/app/view/grid/grid-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridLayoutComponent);
    return GridLayoutComponent;
}());



/***/ }),

/***/ "./src/app/view/grid/grid.component.scss":
/*!***********************************************!*\
  !*** ./src/app/view/grid/grid.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/grid/grid.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/grid/grid.component.ts ***!
  \*********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/services/config.service */ "./src/app/config/services/config.service.ts");



var GridComponent = /** @class */ (function () {
    function GridComponent(config) {
        this.config = config;
    }
    GridComponent.prototype.ngOnInit = function () {
        //   const subject = this.config.getSubject();
        //   subject.subscribe(() => {
        //       this.ngOnInit();
        //   });
    };
    GridComponent.prototype.ngOnDestroy = function () {
    };
    GridComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
    ]; };
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/view/grid/grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/view/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/view/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-chip {\n  max-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlldy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2hpcCB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn0iLCJtYXQtY2hpcCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-balloon */ "./node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/services/file.service */ "./src/app/data/services/file.service.ts");
/* harmony import */ var _route_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../route/services/route.service */ "./src/app/route/services/route.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(file, route) {
        this.file = file;
        this.route = route;
        this.Editor = _ckeditor_ckeditor5_build_balloon__WEBPACK_IMPORTED_MODULE_2__;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
        { type: _route_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/home/home.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/view/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"],
            _route_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/view/model/client/client-detail/client-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/view/model/client/client-detail/client-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvY2xpZW50L2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/client/client-detail/client-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/view/model/client/client-detail/client-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_successstory_relation_create_item_client_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-successstory-relation-create-item/client-successstory-relation-create-item.component */ "./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.ts");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);






var clientQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query ClientQuery {\n    Client( sequence : \"", "\" ) {\n      successStories {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n    }\n  }\n"], ["\n  query ClientQuery {\n    Client( sequence : \"", "\" ) {\n      successStories {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n    }\n  }\n"])), sequence); };
var clientSuccessStoryUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addSuccessStoryToClient($sequence : String!, $successstory_sequence : String!){\n    AddClientSuccessStories (\n      from : { sequence : $sequence }\n      to : { sequence : $successstory_sequence }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"], ["\n  mutation addSuccessStoryToClient($sequence : String!, $successstory_sequence : String!){\n    AddClientSuccessStories (\n      from : { sequence : $sequence }\n      to : { sequence : $successstory_sequence }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"]))); };
var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(config, apollo) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.clientSuccessStory = _client_successstory_relation_create_item_client_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_2__["ClientSuccessstoryRelationCreateItemComponent"];
        this.type = config.get('type');
        this.sequence = config.get('sequence');
        var query = clientQuery(this.type, this.sequence);
        this.apollo.sendQuery(query).subscribe(function (res) {
            _this.successStories = res.data[_this.type][0].successStories;
        });
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
    };
    ClientDetailComponent.prototype.addSuccessStory = function (successStory) {
        this.apollo.sendUpdateQuery(clientSuccessStoryUpdateQuery(), { sequence: this.sequence, successstory_sequence: successStory.sequence }, clientQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ClientDetailComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] }
    ]; };
    ClientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-detail',
            template: __webpack_require__(/*! raw-loader!./client-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-detail/client-detail.component.html"),
            styles: [__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/view/model/client/client-detail/client-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/view/model/client/client-grid/client-grid.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/view/model/client/client-grid/client-grid.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvY2xpZW50L2NsaWVudC1ncmlkL2NsaWVudC1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/client/client-grid/client-grid.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/view/model/client/client-grid/client-grid.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientGridComponent", function() { return ClientGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientGridComponent = /** @class */ (function () {
    function ClientGridComponent() {
    }
    ClientGridComponent.prototype.ngOnInit = function () {
    };
    ClientGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-grid',
            template: __webpack_require__(/*! raw-loader!./client-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-grid/client-grid.component.html"),
            styles: [__webpack_require__(/*! ./client-grid.component.scss */ "./src/app/view/model/client/client-grid/client-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientGridComponent);
    return ClientGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvY2xpZW50L2NsaWVudC1zdWNjZXNzc3RvcnktcmVsYXRpb24tY3JlYXRlLWl0ZW0vY2xpZW50LXN1Y2Nlc3NzdG9yeS1yZWxhdGlvbi1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ClientSuccessstoryRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSuccessstoryRelationCreateItemComponent", function() { return ClientSuccessstoryRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allSuccessStoriesQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllSuccessStoriesQuery {\n    SuccessStory(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllSuccessStoriesQuery {\n    SuccessStory(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var ClientSuccessstoryRelationCreateItemComponent = /** @class */ (function () {
    function ClientSuccessstoryRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.clientSequence = this.config.get('sequence');
    }
    ClientSuccessstoryRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allSuccessStoriesQuery(), { clientSequence: this.clientSequence }).subscribe(function (res) {
            _this.allSuccessStories = res.data['SuccessStory'];
            console.log(_this.allSuccessStories);
        });
    };
    ClientSuccessstoryRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ClientSuccessstoryRelationCreateItemComponent.prototype.addSuccessStory = function () {
        this.dialogRef.close(this.newSuccessStory);
    };
    ClientSuccessstoryRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    ClientSuccessstoryRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ClientSuccessstoryRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-successstory-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./client-successstory-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./client-successstory-relation-create-item.component.scss */ "./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], ClientSuccessstoryRelationCreateItemComponent);
    return ClientSuccessstoryRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvY2xpZW50L2NsaWVudC1zdWNjZXNzc3RvcnktcmVsYXRpb24taXRlbS9jbGllbnQtc3VjY2Vzc3N0b3J5LXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ClientSuccessstoryRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSuccessstoryRelationItemComponent", function() { return ClientSuccessstoryRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientSuccessstoryRelationItemComponent = /** @class */ (function () {
    function ClientSuccessstoryRelationItemComponent() {
    }
    ClientSuccessstoryRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.successStory.logo)[1];
        this.successStory.imageUrl = "http://minio.digisus.ch/oss-directory/successstory_" + this.successStory.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClientSuccessstoryRelationItemComponent.prototype, "successStory", void 0);
    ClientSuccessstoryRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-successstory-relation-item',
            template: __webpack_require__(/*! raw-loader!./client-successstory-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./client-successstory-relation-item.component.scss */ "./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientSuccessstoryRelationItemComponent);
    return ClientSuccessstoryRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/community/community-detail/community-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/view/model/community/community-detail/community-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvY29tbXVuaXR5L2NvbW11bml0eS1kZXRhaWwvY29tbXVuaXR5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/community/community-detail/community-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/view/model/community/community-detail/community-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CommunityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityDetailComponent", function() { return CommunityDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommunityDetailComponent = /** @class */ (function () {
    function CommunityDetailComponent() {
    }
    CommunityDetailComponent.prototype.ngOnInit = function () {
    };
    CommunityDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community-detail',
            template: __webpack_require__(/*! raw-loader!./community-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/community/community-detail/community-detail.component.html"),
            styles: [__webpack_require__(/*! ./community-detail.component.scss */ "./src/app/view/model/community/community-detail/community-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommunityDetailComponent);
    return CommunityDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/community/community-grid/community-grid.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/view/model/community/community-grid/community-grid.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvY29tbXVuaXR5L2NvbW11bml0eS1ncmlkL2NvbW11bml0eS1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/community/community-grid/community-grid.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/view/model/community/community-grid/community-grid.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CommunityGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityGridComponent", function() { return CommunityGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommunityGridComponent = /** @class */ (function () {
    function CommunityGridComponent() {
    }
    CommunityGridComponent.prototype.ngOnInit = function () {
    };
    CommunityGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community-grid',
            template: __webpack_require__(/*! raw-loader!./community-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/community/community-grid/community-grid.component.html"),
            styles: [__webpack_require__(/*! ./community-grid.component.scss */ "./src/app/view/model/community/community-grid/community-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommunityGridComponent);
    return CommunityGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/default/default-detail/default-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/view/model/default/default-detail/default-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvZGVmYXVsdC9kZWZhdWx0LWRldGFpbC9kZWZhdWx0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/default/default-detail/default-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/view/model/default/default-detail/default-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DefaultDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDetailComponent", function() { return DefaultDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultDetailComponent = /** @class */ (function () {
    function DefaultDetailComponent() {
    }
    DefaultDetailComponent.prototype.ngOnInit = function () {
    };
    DefaultDetailComponent.prototype.onTest = function ($event) {
        console.log("test in detail");
    };
    DefaultDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-detail',
            template: __webpack_require__(/*! raw-loader!./default-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/default/default-detail/default-detail.component.html"),
            styles: [__webpack_require__(/*! ./default-detail.component.scss */ "./src/app/view/model/default/default-detail/default-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultDetailComponent);
    return DefaultDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/default/default-grid/default-grid.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/view/model/default/default-grid/default-grid.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvZGVmYXVsdC9kZWZhdWx0LWdyaWQvZGVmYXVsdC1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/default/default-grid/default-grid.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/model/default/default-grid/default-grid.component.ts ***!
  \***************************************************************************/
/*! exports provided: DefaultGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGridComponent", function() { return DefaultGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/enums/modeltype.enum */ "./src/app/data/enums/modeltype.enum.ts");






var listQuery = function (type) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\nquery listQuery($searchString : String){\n  list : ", "(first : 50){\n    sequence\n    uid\n    imageUrl\n    logo\n    translations( filter : {title_not : \"\", title_contains : $searchString}) {\n      title\n    }\n  }\n}\n"], ["\nquery listQuery($searchString : String){\n  list : ", "(first : 50){\n    sequence\n    uid\n    imageUrl\n    logo\n    translations( filter : {title_not : \"\", title_contains : $searchString}) {\n      title\n    }\n  }\n}\n"])), type); };
var DefaultGridComponent = /** @class */ (function () {
    function DefaultGridComponent(config, apollo) {
        this.config = config;
        this.apollo = apollo;
        this.items = [];
        this.searchString = '';
    }
    DefaultGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        var re = /(?:\.([^.]+))?$/;
        this.type = this.config.get('type');
        this.apollo.sendQuery(listQuery(this.type), { searchString: this.searchString }).subscribe(function (result) {
            console.log(result);
            _this.items = result.data.list.filter(function (r) { return r.translations.length > 0; });
            _this.items.map(function (value) {
                var ending = re.exec(value.logo)[1];
                if (_this.type === _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_5__["Modeltype"].SuccessStory) {
                    _this.type = 'success_story';
                }
                value.imageUrl = "http://minio.digisus.ch/ossdirectory/" + _this.type.toLowerCase() + "_" + value.uid + "." + ending;
            });
        });
    };
    DefaultGridComponent.prototype.updateGrid = function () {
        var _this = this;
        var re = /(?:\.([^.]+))?$/;
        this.apollo.sendQuery(listQuery(this.type), { searchString: this.searchString }).subscribe(function (result) {
            _this.items = result.data.list.filter(function (r) { return r.translations.length > 0; });
            _this.items.map(function (value) {
                var ending = re.exec(value.logo)[1];
                if (_this.type === _data_enums_modeltype_enum__WEBPACK_IMPORTED_MODULE_5__["Modeltype"].SuccessStory) {
                    _this.type = 'success_story';
                }
                value.imageUrl = "http://minio.digisus.ch/oss-directory/" + _this.type.toLowerCase() + "_" + value.uid + "." + ending;
            });
        });
    };
    DefaultGridComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] }
    ]; };
    DefaultGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default-grid',
            template: __webpack_require__(/*! raw-loader!./default-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/default/default-grid/default-grid.component.html"),
            styles: [__webpack_require__(/*! ./default-grid.component.scss */ "./src/app/view/model/default/default-grid/default-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"]])
    ], DefaultGridComponent);
    return DefaultGridComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/event/event-detail/event-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/view/model/event/event-detail/event-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvZXZlbnQvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/event/event-detail/event-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view/model/event/event-detail/event-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent() {
    }
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! raw-loader!./event-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/event/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/view/model/event/event-detail/event-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/event/event-grid/event-grid.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/view/model/event/event-grid/event-grid.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvZXZlbnQvZXZlbnQtZ3JpZC9ldmVudC1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/event/event-grid/event-grid.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view/model/event/event-grid/event-grid.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGridComponent", function() { return EventGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventGridComponent = /** @class */ (function () {
    function EventGridComponent() {
    }
    EventGridComponent.prototype.ngOnInit = function () {
    };
    EventGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-grid',
            template: __webpack_require__(/*! raw-loader!./event-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/event/event-grid/event-grid.component.html"),
            styles: [__webpack_require__(/*! ./event-grid.component.scss */ "./src/app/view/model/event/event-grid/event-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventGridComponent);
    return EventGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/job/job-detail/job-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/view/model/job/job-detail/job-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvam9iL2pvYi1kZXRhaWwvam9iLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/job/job-detail/job-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/model/job/job-detail/job-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent() {
    }
    JobDetailComponent.prototype.ngOnInit = function () {
    };
    JobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-detail',
            template: __webpack_require__(/*! raw-loader!./job-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/job/job-detail/job-detail.component.html"),
            styles: [__webpack_require__(/*! ./job-detail.component.scss */ "./src/app/view/model/job/job-detail/job-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobDetailComponent);
    return JobDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/job/job-grid/job-grid.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/model/job/job-grid/job-grid.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvam9iL2pvYi1ncmlkL2pvYi1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/job/job-grid/job-grid.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/model/job/job-grid/job-grid.component.ts ***!
  \***************************************************************/
/*! exports provided: JobGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobGridComponent", function() { return JobGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobGridComponent = /** @class */ (function () {
    function JobGridComponent() {
    }
    JobGridComponent.prototype.ngOnInit = function () {
    };
    JobGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-grid',
            template: __webpack_require__(/*! raw-loader!./job-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/job/job-grid/job-grid.component.html"),
            styles: [__webpack_require__(/*! ./job-grid.component.scss */ "./src/app/view/model/job/job-grid/job-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobGridComponent);
    return JobGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvbmV3cy1mZWVkL25ld3MtZmVlZC1kZXRhaWwvbmV3cy1mZWVkLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NewsFeedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedDetailComponent", function() { return NewsFeedDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsFeedDetailComponent = /** @class */ (function () {
    function NewsFeedDetailComponent() {
    }
    NewsFeedDetailComponent.prototype.ngOnInit = function () {
    };
    NewsFeedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-feed-detail',
            template: __webpack_require__(/*! raw-loader!./news-feed-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-feed-detail.component.scss */ "./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsFeedDetailComponent);
    return NewsFeedDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvbmV3cy1mZWVkL25ld3MtZmVlZC1ncmlkL25ld3MtZmVlZC1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewsFeedGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedGridComponent", function() { return NewsFeedGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_services_rss_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/services/rss-feed.service */ "./src/app/data/services/rss-feed.service.ts");




var NewsFeedGridComponent = /** @class */ (function () {
    function NewsFeedGridComponent(http, rssFeed) {
        this.http = http;
        this.rssFeed = rssFeed;
    }
    NewsFeedGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rssFeed.getRssFeed().subscribe(function (feed) {
            _this.newsfeed = feed;
        });
    };
    NewsFeedGridComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _data_services_rss_feed_service__WEBPACK_IMPORTED_MODULE_3__["RssFeedService"] }
    ]; };
    NewsFeedGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-feed-grid',
            template: __webpack_require__(/*! raw-loader!./news-feed-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.html"),
            styles: [__webpack_require__(/*! ./news-feed-grid.component.scss */ "./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_services_rss_feed_service__WEBPACK_IMPORTED_MODULE_3__["RssFeedService"]])
    ], NewsFeedGridComponent);
    return NewsFeedGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/news/news-detail/news-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/view/model/news/news-detail/news-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvbmV3cy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/news/news-detail/news-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/view/model/news/news-detail/news-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent() {
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
    };
    NewsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! raw-loader!./news-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/news/news-detail/news-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-detail.component.scss */ "./src/app/view/model/news/news-detail/news-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/news/news-grid/news-grid.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/view/model/news/news-grid/news-grid.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvbmV3cy9uZXdzLWdyaWQvbmV3cy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/news/news-grid/news-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view/model/news/news-grid/news-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsGridComponent", function() { return NewsGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsGridComponent = /** @class */ (function () {
    function NewsGridComponent() {
    }
    NewsGridComponent.prototype.ngOnInit = function () {
    };
    NewsGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-grid',
            template: __webpack_require__(/*! raw-loader!./news-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/news/news-grid/news-grid.component.html"),
            styles: [__webpack_require__(/*! ./news-grid.component.scss */ "./src/app/view/model/news/news-grid/news-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsGridComponent);
    return NewsGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/product/product-detail/product-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/view/model/product/product-detail/product-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcHJvZHVjdC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/product/product-detail/product-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/view/model/product/product-detail/product-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _product_vendor_relation_create_item_product_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-vendor-relation-create-item/product-vendor-relation-create-item.component */ "./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.ts");
/* harmony import */ var _product_successstory_relation_create_item_product_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-successstory-relation-create-item/product-successstory-relation-create-item.component */ "./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.ts");







var productQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query ProductQuery {\n    Product( sequence : \"", "\" ) {\n      successStories {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      vendors {\n        Vendor {\n          sequence\n          uid\n          __typename\n          imageUrl\n          logo\n          translations {\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query ProductQuery {\n    Product( sequence : \"", "\" ) {\n      successStories {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      vendors {\n        Vendor {\n          sequence\n          uid\n          __typename\n          imageUrl\n          logo\n          translations {\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"])), sequence); };
var productSuccessStoryUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addSuccessStoryToProduct($sequence : String!, $successstory_sequence : String!){\n    AddProductSuccessStories (\n      from : { sequence : $successstory_sequence }\n      to : { sequence : $sequence }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"], ["\n  mutation addSuccessStoryToProduct($sequence : String!, $successstory_sequence : String!){\n    AddProductSuccessStories (\n      from : { sequence : $successstory_sequence }\n      to : { sequence : $sequence }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"]))); };
var productVendorUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addVendorToProduct($sequence : String!, $vendor_sequence : String!){\n    AddProductVendors (\n      from : { sequence : $vendor_sequence }\n      to : { sequence : $sequence }\n      data : {\n        claim : \"Hello there, new vendor! ;)\" }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"], ["\n  mutation addVendorToProduct($sequence : String!, $vendor_sequence : String!){\n    AddProductVendors (\n      from : { sequence : $vendor_sequence }\n      to : { sequence : $sequence }\n      data : {\n        claim : \"Hello there, new vendor! ;)\" }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"]))); };
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(config, apollo) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.productVendor = _product_vendor_relation_create_item_product_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductVendorRelationCreateItemComponent"];
        this.productSuccessStory = _product_successstory_relation_create_item_product_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductSuccessstoryRelationCreateItemComponent"];
        this.type = config.get('type');
        this.sequence = config.get('sequence');
        var query = productQuery(this.type, this.sequence);
        this.apollo.sendQuery(query).subscribe(function (res) {
            _this.vendors = res.data[_this.type][0].vendors;
            console.log(_this.vendors);
            _this.successStories = res.data[_this.type][0].successStories;
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.addSuccessStory = function (successStory) {
        this.apollo.sendUpdateQuery(productSuccessStoryUpdateQuery(), { sequence: this.sequence, successstory_sequence: successStory.sequence }, productQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ProductDetailComponent.prototype.addVendor = function (vendor) {
        this.apollo.sendUpdateQuery(productVendorUpdateQuery(), { sequence: this.sequence, vendor_sequence: vendor.sequence }, productQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/view/model/product/product-detail/product-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/app/view/model/product/product-grid/product-grid.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/view/model/product/product-grid/product-grid.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcHJvZHVjdC9wcm9kdWN0LWdyaWQvcHJvZHVjdC1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/product/product-grid/product-grid.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/view/model/product/product-grid/product-grid.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGridComponent", function() { return ProductGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductGridComponent = /** @class */ (function () {
    function ProductGridComponent() {
    }
    ProductGridComponent.prototype.ngOnInit = function () {
    };
    ProductGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-grid',
            template: __webpack_require__(/*! raw-loader!./product-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-grid/product-grid.component.html"),
            styles: [__webpack_require__(/*! ./product-grid.component.scss */ "./src/app/view/model/product/product-grid/product-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductGridComponent);
    return ProductGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcHJvZHVjdC9wcm9kdWN0LXN1Y2Nlc3NzdG9yeS1yZWxhdGlvbi1jcmVhdGUtaXRlbS9wcm9kdWN0LXN1Y2Nlc3NzdG9yeS1yZWxhdGlvbi1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ProductSuccessstoryRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSuccessstoryRelationCreateItemComponent", function() { return ProductSuccessstoryRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allSuccessStoriesQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllSuccessStoriesQuery {\n    SuccessStory(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllSuccessStoriesQuery {\n    SuccessStory(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var ProductSuccessstoryRelationCreateItemComponent = /** @class */ (function () {
    function ProductSuccessstoryRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.prodcutSequence = this.config.get('sequence');
    }
    ProductSuccessstoryRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allSuccessStoriesQuery(), { productSequence: this.prodcutSequence }).subscribe(function (res) {
            _this.allSuccessStories = res.data['SuccessStory'];
            console.log(_this.allSuccessStories);
        });
    };
    ProductSuccessstoryRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductSuccessstoryRelationCreateItemComponent.prototype.addSuccessStory = function () {
        this.dialogRef.close(this.newSuccessStory);
    };
    ProductSuccessstoryRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    ProductSuccessstoryRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ProductSuccessstoryRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-successstory-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./product-successstory-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./product-successstory-relation-create-item.component.scss */ "./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], ProductSuccessstoryRelationCreateItemComponent);
    return ProductSuccessstoryRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcHJvZHVjdC9wcm9kdWN0LXN1Y2Nlc3NzdG9yeS1yZWxhdGlvbi1pdGVtL3Byb2R1Y3Qtc3VjY2Vzc3N0b3J5LXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProductSuccessstoryRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSuccessstoryRelationItemComponent", function() { return ProductSuccessstoryRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductSuccessstoryRelationItemComponent = /** @class */ (function () {
    function ProductSuccessstoryRelationItemComponent() {
    }
    ProductSuccessstoryRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.successStory.logo)[1];
        this.successStory.imageUrl = "http://minio.digisus.ch/oss-directory/successstory_" + this.successStory.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductSuccessstoryRelationItemComponent.prototype, "successStory", void 0);
    ProductSuccessstoryRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-successstory-relation-item',
            template: __webpack_require__(/*! raw-loader!./product-successstory-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./product-successstory-relation-item.component.scss */ "./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductSuccessstoryRelationItemComponent);
    return ProductSuccessstoryRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcHJvZHVjdC9wcm9kdWN0LXZlbmRvci1yZWxhdGlvbi1jcmVhdGUtaXRlbS9wcm9kdWN0LXZlbmRvci1yZWxhdGlvbi1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProductVendorRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVendorRelationCreateItemComponent", function() { return ProductVendorRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allVendorsQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllVendorsQuery($productSequence : String!) {\n    Vendor(filter : { products : { Product : {sequence_not: $productSequence}}}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllVendorsQuery($productSequence : String!) {\n    Vendor(filter : { products : { Product : {sequence_not: $productSequence}}}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var ProductVendorRelationCreateItemComponent = /** @class */ (function () {
    function ProductVendorRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.productSequence = this.config.get('sequence');
    }
    ProductVendorRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allVendorsQuery(), { productSequence: this.productSequence }).subscribe(function (res) {
            _this.allVendors = res.data['Vendor'];
        });
    };
    ProductVendorRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductVendorRelationCreateItemComponent.prototype.addVendor = function () {
        this.dialogRef.close(this.newVendor);
    };
    ProductVendorRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    ProductVendorRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ProductVendorRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-vendor-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./product-vendor-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./product-vendor-relation-create-item.component.scss */ "./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], ProductVendorRelationCreateItemComponent);
    return ProductVendorRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcHJvZHVjdC9wcm9kdWN0LXZlbmRvci1yZWxhdGlvbi1pdGVtL3Byb2R1Y3QtdmVuZG9yLXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProductVendorRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductVendorRelationItemComponent", function() { return ProductVendorRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductVendorRelationItemComponent = /** @class */ (function () {
    function ProductVendorRelationItemComponent() {
    }
    ProductVendorRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.vendor.logo)[1];
        this.vendor.imageUrl = "http://minio.digisus.ch/oss-directory/vendor_" + this.vendor.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductVendorRelationItemComponent.prototype, "vendor", void 0);
    ProductVendorRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-vendor-relation-item',
            template: __webpack_require__(/*! raw-loader!./product-vendor-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./product-vendor-relation-item.component.scss */ "./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductVendorRelationItemComponent);
    return ProductVendorRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/rss/rss-detail/rss-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/view/model/rss/rss-detail/rss-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcnNzL3Jzcy1kZXRhaWwvcnNzLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/rss/rss-detail/rss-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/view/model/rss/rss-detail/rss-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: RssDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssDetailComponent", function() { return RssDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RssDetailComponent = /** @class */ (function () {
    function RssDetailComponent() {
    }
    RssDetailComponent.prototype.ngOnInit = function () {
    };
    RssDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rss-detail',
            template: __webpack_require__(/*! raw-loader!./rss-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/rss/rss-detail/rss-detail.component.html"),
            styles: [__webpack_require__(/*! ./rss-detail.component.scss */ "./src/app/view/model/rss/rss-detail/rss-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RssDetailComponent);
    return RssDetailComponent;
}());



/***/ }),

/***/ "./src/app/view/model/rss/rss-grid/rss-grid.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/view/model/rss/rss-grid/rss-grid.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvcnNzL3Jzcy1ncmlkL3Jzcy1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/rss/rss-grid/rss-grid.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/view/model/rss/rss-grid/rss-grid.component.ts ***!
  \***************************************************************/
/*! exports provided: RssGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssGridComponent", function() { return RssGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RssGridComponent = /** @class */ (function () {
    function RssGridComponent() {
    }
    RssGridComponent.prototype.ngOnInit = function () {
    };
    RssGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rss-grid',
            template: __webpack_require__(/*! raw-loader!./rss-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/rss/rss-grid/rss-grid.component.html"),
            styles: [__webpack_require__(/*! ./rss-grid.component.scss */ "./src/app/view/model/rss/rss-grid/rss-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RssGridComponent);
    return RssGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzLXN0b3J5LWNsaWVudC1yZWxhdGlvbi1pdGVtL3N1Y2Nlc3Mtc3RvcnktY2xpZW50LXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SuccessStoryClientRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessStoryClientRelationItemComponent", function() { return SuccessStoryClientRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessStoryClientRelationItemComponent = /** @class */ (function () {
    function SuccessStoryClientRelationItemComponent() {
    }
    SuccessStoryClientRelationItemComponent.prototype.ngOnInit = function () {
    };
    SuccessStoryClientRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success-story-client-relation-item',
            template: __webpack_require__(/*! raw-loader!./success-story-client-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./success-story-client-relation-item.component.scss */ "./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessStoryClientRelationItemComponent);
    return SuccessStoryClientRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/success-story-detail/success-story-detail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-detail/success-story-detail.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzLXN0b3J5LWRldGFpbC9zdWNjZXNzLXN0b3J5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/success-story/success-story-detail/success-story-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-detail/success-story-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: SuccessStoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessStoryDetailComponent", function() { return SuccessStoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _successstory_product_relation_create_item_successstory_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../successstory-product-relation-create-item/successstory-product-relation-create-item.component */ "./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.ts");
/* harmony import */ var _successstory_client_relation_create_item_successstory_client_relation_create_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../successstory-client-relation-create-item/successstory-client-relation-create-item.component */ "./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.ts");
/* harmony import */ var _successstory_vendor_relation_create_item_successstory_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component */ "./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.ts");








var successStoryQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query SuccessStoryQuery {\n    SuccessStory( sequence : \"", "\" ) {\n      client {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      vendor {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      products {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n    }\n  }\n"], ["\n  query SuccessStoryQuery {\n    SuccessStory( sequence : \"", "\" ) {\n      client {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      vendor {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      products {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n    }\n  }\n"])), sequence); };
var successStoryProductUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addProductToSuccessStory($sequence : String!, $product_sequence : String!){\n    AddSuccessStoryProducts (\n      from : { sequence : $sequence }\n      to : { sequence : $product_sequence }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"], ["\n  mutation addProductToSuccessStory($sequence : String!, $product_sequence : String!){\n    AddSuccessStoryProducts (\n      from : { sequence : $sequence }\n      to : { sequence : $product_sequence }\n    ) {\n      to {\n        sequence\n      }\n    }\n  }\n"]))); };
var successStoryClientUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addClientToSuccessStory($sequence : String!, $client_sequence : String!){\n    AddSuccessStoryClient (\n      from : { sequence : $client_sequence }\n      to : { sequence : $sequence }\n    ) {\n      from {\n        sequence\n      }\n    }\n  }\n"], ["\n  mutation addClientToSuccessStory($sequence : String!, $client_sequence : String!){\n    AddSuccessStoryClient (\n      from : { sequence : $client_sequence }\n      to : { sequence : $sequence }\n    ) {\n      from {\n        sequence\n      }\n    }\n  }\n"]))); };
var successStoryVendorUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_4 || (templateObject_4 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addVendorToSuccessStory($sequence : String!, $vendor_sequence : String!){\n    AddSuccessStoryVendor (\n      from : { sequence : $vendor_sequence }\n      to : { sequence : $sequence }\n    ) {\n      from {\n        sequence\n      }\n    }\n  }\n"], ["\n  mutation addVendorToSuccessStory($sequence : String!, $vendor_sequence : String!){\n    AddSuccessStoryVendor (\n      from : { sequence : $vendor_sequence }\n      to : { sequence : $sequence }\n    ) {\n      from {\n        sequence\n      }\n    }\n  }\n"]))); };
var SuccessStoryDetailComponent = /** @class */ (function () {
    function SuccessStoryDetailComponent(config, apollo) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.successStoryProduct = _successstory_product_relation_create_item_successstory_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_5__["SuccessstoryProductRelationCreateItemComponent"];
        this.successStoryClient = _successstory_client_relation_create_item_successstory_client_relation_create_item_component__WEBPACK_IMPORTED_MODULE_6__["SuccessstoryClientRelationCreateItemComponent"];
        this.successStoryVendor = _successstory_vendor_relation_create_item_successstory_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_7__["SuccessstoryVendorRelationCreateItemComponent"];
        this.type = config.get('type');
        this.sequence = config.get('sequence');
        var query = successStoryQuery(this.type, this.sequence);
        this.apollo.sendQuery(query).subscribe(function (res) {
            console.log(res);
            _this.products = res.data[_this.type][0].products;
            _this.client = res.data[_this.type][0].client;
            _this.vendor = res.data[_this.type][0].vendor;
        });
    }
    SuccessStoryDetailComponent.prototype.ngOnInit = function () {
    };
    SuccessStoryDetailComponent.prototype.addVendor = function (vendor) {
        this.apollo.sendUpdateQuery(successStoryVendorUpdateQuery(), { sequence: this.sequence, vendor_sequence: vendor.sequence }, successStoryQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    SuccessStoryDetailComponent.prototype.addClient = function (client) {
        this.apollo.sendUpdateQuery(successStoryClientUpdateQuery(), { sequence: this.sequence, client_sequence: client.sequence }, successStoryQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    SuccessStoryDetailComponent.prototype.addProduct = function (product) {
        this.apollo.sendUpdateQuery(successStoryProductUpdateQuery(), { sequence: this.sequence, product_sequence: product.sequence }, successStoryQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    SuccessStoryDetailComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] }
    ]; };
    SuccessStoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success-story-detail',
            template: __webpack_require__(/*! raw-loader!./success-story-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-detail/success-story-detail.component.html"),
            styles: [__webpack_require__(/*! ./success-story-detail.component.scss */ "./src/app/view/model/success-story/success-story-detail/success-story-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"]])
    ], SuccessStoryDetailComponent);
    return SuccessStoryDetailComponent;
}());

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/app/view/model/success-story/success-story-grid/success-story-grid.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-grid/success-story-grid.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzLXN0b3J5LWdyaWQvc3VjY2Vzcy1zdG9yeS1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/success-story/success-story-grid/success-story-grid.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-grid/success-story-grid.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SuccessStoryGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessStoryGridComponent", function() { return SuccessStoryGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessStoryGridComponent = /** @class */ (function () {
    function SuccessStoryGridComponent() {
    }
    SuccessStoryGridComponent.prototype.ngOnInit = function () {
    };
    SuccessStoryGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success-story-grid',
            template: __webpack_require__(/*! raw-loader!./success-story-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-grid/success-story-grid.component.html"),
            styles: [__webpack_require__(/*! ./success-story-grid.component.scss */ "./src/app/view/model/success-story/success-story-grid/success-story-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessStoryGridComponent);
    return SuccessStoryGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzLXN0b3J5LXByb2R1Y3QtcmVsYXRpb24taXRlbS9zdWNjZXNzLXN0b3J5LXByb2R1Y3QtcmVsYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: SuccessStoryProductRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessStoryProductRelationItemComponent", function() { return SuccessStoryProductRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessStoryProductRelationItemComponent = /** @class */ (function () {
    function SuccessStoryProductRelationItemComponent() {
    }
    SuccessStoryProductRelationItemComponent.prototype.ngOnInit = function () {
    };
    SuccessStoryProductRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success-story-product-relation-item',
            template: __webpack_require__(/*! raw-loader!./success-story-product-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./success-story-product-relation-item.component.scss */ "./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessStoryProductRelationItemComponent);
    return SuccessStoryProductRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzLXN0b3J5LXZlbmRvci1yZWxhdGlvbi1pdGVtL3N1Y2Nlc3Mtc3RvcnktdmVuZG9yLXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SuccessStoryVendorRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessStoryVendorRelationItemComponent", function() { return SuccessStoryVendorRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessStoryVendorRelationItemComponent = /** @class */ (function () {
    function SuccessStoryVendorRelationItemComponent() {
    }
    SuccessStoryVendorRelationItemComponent.prototype.ngOnInit = function () {
    };
    SuccessStoryVendorRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success-story-vendor-relation-item',
            template: __webpack_require__(/*! raw-loader!./success-story-vendor-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./success-story-vendor-relation-item.component.scss */ "./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessStoryVendorRelationItemComponent);
    return SuccessStoryVendorRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzc3RvcnktY2xpZW50LXJlbGF0aW9uLWNyZWF0ZS1pdGVtL3N1Y2Nlc3NzdG9yeS1jbGllbnQtcmVsYXRpb24tY3JlYXRlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SuccessstoryClientRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoryClientRelationCreateItemComponent", function() { return SuccessstoryClientRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allClientsQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllClientsQuery {\n    Client(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : { language : { short : \"en\"}}) {\n        language {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllClientsQuery {\n    Client(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : { language : { short : \"en\"}}) {\n        language {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var SuccessstoryClientRelationCreateItemComponent = /** @class */ (function () {
    function SuccessstoryClientRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.successStorySequence = this.config.get('sequence');
    }
    SuccessstoryClientRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allClientsQuery(), { successStorySequence: this.successStorySequence }).subscribe(function (res) {
            _this.allClients = res.data['Client'];
            console.log(_this.allClients);
        });
    };
    SuccessstoryClientRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SuccessstoryClientRelationCreateItemComponent.prototype.addClient = function () {
        this.dialogRef.close(this.newClient);
    };
    SuccessstoryClientRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    SuccessstoryClientRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SuccessstoryClientRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstory-client-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./successstory-client-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./successstory-client-relation-create-item.component.scss */ "./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], SuccessstoryClientRelationCreateItemComponent);
    return SuccessstoryClientRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzc3RvcnktY2xpZW50LXJlbGF0aW9uLWl0ZW0vc3VjY2Vzc3N0b3J5LWNsaWVudC1yZWxhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SuccessstoryClientRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoryClientRelationItemComponent", function() { return SuccessstoryClientRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessstoryClientRelationItemComponent = /** @class */ (function () {
    function SuccessstoryClientRelationItemComponent() {
    }
    SuccessstoryClientRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.client.logo)[1];
        this.client.imageUrl = "http://minio.digisus.ch/oss-directory/client_" + this.client.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessstoryClientRelationItemComponent.prototype, "client", void 0);
    SuccessstoryClientRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstory-client-relation-item',
            template: __webpack_require__(/*! raw-loader!./successstory-client-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./successstory-client-relation-item.component.scss */ "./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessstoryClientRelationItemComponent);
    return SuccessstoryClientRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzc3RvcnktcHJvZHVjdC1yZWxhdGlvbi1jcmVhdGUtaXRlbS9zdWNjZXNzc3RvcnktcHJvZHVjdC1yZWxhdGlvbi1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: SuccessstoryProductRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoryProductRelationCreateItemComponent", function() { return SuccessstoryProductRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allProductsQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllProductsQuery {\n    Product(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllProductsQuery {\n    Product(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var SuccessstoryProductRelationCreateItemComponent = /** @class */ (function () {
    function SuccessstoryProductRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.successStorySequence = this.config.get('sequence');
    }
    SuccessstoryProductRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allProductsQuery(), { successStorySequence: this.successStorySequence }).subscribe(function (res) {
            _this.allProducts = res.data['Product'];
        });
    };
    SuccessstoryProductRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SuccessstoryProductRelationCreateItemComponent.prototype.addProduct = function () {
        this.dialogRef.close(this.newProduct);
    };
    SuccessstoryProductRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    SuccessstoryProductRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SuccessstoryProductRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstory-product-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./successstory-product-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./successstory-product-relation-create-item.component.scss */ "./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], SuccessstoryProductRelationCreateItemComponent);
    return SuccessstoryProductRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzc3RvcnktcHJvZHVjdC1yZWxhdGlvbi1pdGVtL3N1Y2Nlc3NzdG9yeS1wcm9kdWN0LXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: SuccessstoryProductRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoryProductRelationItemComponent", function() { return SuccessstoryProductRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessstoryProductRelationItemComponent = /** @class */ (function () {
    function SuccessstoryProductRelationItemComponent() {
    }
    SuccessstoryProductRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.product.logo)[1];
        this.product.imageUrl = "http://minio.digisus.ch/oss-directory/product_" + this.product.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessstoryProductRelationItemComponent.prototype, "product", void 0);
    SuccessstoryProductRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstory-product-relation-item',
            template: __webpack_require__(/*! raw-loader!./successstory-product-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./successstory-product-relation-item.component.scss */ "./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessstoryProductRelationItemComponent);
    return SuccessstoryProductRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzc3RvcnktdmVuZG9yLXJlbGF0aW9uLWNyZWF0ZS1pdGVtL3N1Y2Nlc3NzdG9yeS12ZW5kb3ItcmVsYXRpb24tY3JlYXRlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SuccessstoryVendorRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoryVendorRelationCreateItemComponent", function() { return SuccessstoryVendorRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allVendorsQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllVendorsQuery {\n    Vendor(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllVendorsQuery {\n    Vendor(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var SuccessstoryVendorRelationCreateItemComponent = /** @class */ (function () {
    function SuccessstoryVendorRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.successStorySequence = this.config.get('sequence');
    }
    SuccessstoryVendorRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allVendorsQuery(), { successStorySequence: this.successStorySequence }).subscribe(function (res) {
            _this.allVendors = res.data['Vendor'];
        });
    };
    SuccessstoryVendorRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    SuccessstoryVendorRelationCreateItemComponent.prototype.addVendor = function () {
        this.dialogRef.close(this.newVendor);
    };
    SuccessstoryVendorRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    SuccessstoryVendorRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    SuccessstoryVendorRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstory-vendor-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./successstory-vendor-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./successstory-vendor-relation-create-item.component.scss */ "./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], SuccessstoryVendorRelationCreateItemComponent);
    return SuccessstoryVendorRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvc3VjY2Vzcy1zdG9yeS9zdWNjZXNzc3RvcnktdmVuZG9yLXJlbGF0aW9uLWl0ZW0vc3VjY2Vzc3N0b3J5LXZlbmRvci1yZWxhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SuccessstoryVendorRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessstoryVendorRelationItemComponent", function() { return SuccessstoryVendorRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessstoryVendorRelationItemComponent = /** @class */ (function () {
    function SuccessstoryVendorRelationItemComponent() {
    }
    SuccessstoryVendorRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.vendor.logo)[1];
        this.vendor.imageUrl = "http://minio.digisus.ch/oss-directory/vendor_" + this.vendor.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SuccessstoryVendorRelationItemComponent.prototype, "vendor", void 0);
    SuccessstoryVendorRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-successstory-vendor-relation-item',
            template: __webpack_require__(/*! raw-loader!./successstory-vendor-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./successstory-vendor-relation-item.component.scss */ "./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessstoryVendorRelationItemComponent);
    return SuccessstoryVendorRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/vendor/vendor-detail/vendor-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-detail/vendor-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".relations-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.relations-container .relation-item {\n  display: flex;\n  align-self: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L21vZGVsL3ZlbmRvci92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXcvbW9kZWwvdmVuZG9yL3ZlbmRvci1kZXRhaWwvdmVuZG9yLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L21vZGVsL3ZlbmRvci92ZW5kb3ItZGV0YWlsL3ZlbmRvci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVsYXRpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yZWxhdGlvbnMtY29udGFpbmVyIC5yZWxhdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cbiIsIi5yZWxhdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlbGF0aW9ucy1jb250YWluZXIgLnJlbGF0aW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view/model/vendor/vendor-detail/vendor-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-detail/vendor-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: VendorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorDetailComponent", function() { return VendorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _vendor_product_relation_create_item_vendor_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor-product-relation-create-item/vendor-product-relation-create-item.component */ "./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.ts");
/* harmony import */ var _vendor_successstory_relation_create_item_vendor_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component */ "./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.ts");







var vendorQuery = function (type, sequence) { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query VendorQuery {\n    Vendor( sequence : \"", "\" ) {\n      successStories {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      products {\n        Product {\n          sequence\n          uid\n          __typename\n          imageUrl\n          logo\n          translations {\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query VendorQuery {\n    Vendor( sequence : \"", "\" ) {\n      successStories {\n        sequence\n        uid\n        __typename\n        imageUrl\n        logo\n        translations {\n          title\n          description\n        }\n      }\n      products {\n        Product {\n          sequence\n          uid\n          __typename\n          imageUrl\n          logo\n          translations {\n            title\n            description\n          }\n        }\n      }\n    }\n  }\n"])), sequence); };
var vendorProductUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addProductToVendor($sequence : String!, $product_sequence : String!){\n  AddVendorProducts (\n    from : { sequence : $sequence }\n  \tto : { sequence : $product_sequence }\n  \tdata : {\n    claim : \"Hello there, new product! ;)\" }\n  ) {\n  \tclaim\n  }\n}\n"], ["\n  mutation addProductToVendor($sequence : String!, $product_sequence : String!){\n  AddVendorProducts (\n    from : { sequence : $sequence }\n  \tto : { sequence : $product_sequence }\n  \tdata : {\n    claim : \"Hello there, new product! ;)\" }\n  ) {\n  \tclaim\n  }\n}\n"]))); };
var vendorSuccessStoryUpdateQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addSuccessStoryToVendor($sequence : String!, $successstory_sequence : String!){\n  AddVendorSuccessStories (\n    from : { sequence : $sequence }\n  \tto : { sequence : $successstory_sequence }\n  ) {\n  \tto {\n  \t  sequence\n  \t}\n  }\n}\n"], ["\n  mutation addSuccessStoryToVendor($sequence : String!, $successstory_sequence : String!){\n  AddVendorSuccessStories (\n    from : { sequence : $sequence }\n  \tto : { sequence : $successstory_sequence }\n  ) {\n  \tto {\n  \t  sequence\n  \t}\n  }\n}\n"]))); };
var VendorDetailComponent = /** @class */ (function () {
    function VendorDetailComponent(config, apollo) {
        var _this = this;
        this.config = config;
        this.apollo = apollo;
        this.vendorProduct = _vendor_product_relation_create_item_vendor_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_5__["VendorProductRelationCreateItemComponent"];
        this.vendorSuccessStory = _vendor_successstory_relation_create_item_vendor_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_6__["VendorSuccessstoryRelationCreateItemComponent"];
        this.type = config.get('type');
        this.sequence = config.get('sequence');
        var query = vendorQuery(this.type, this.sequence);
        this.apollo.sendQuery(query).subscribe(function (res) {
            _this.products = res.data[_this.type][0].products;
            _this.successStories = res.data[_this.type][0].successStories;
        });
    }
    VendorDetailComponent.prototype.ngOnInit = function () {
    };
    VendorDetailComponent.prototype.addSuccessStory = function (successStory) {
        this.apollo.sendUpdateQuery(vendorSuccessStoryUpdateQuery(), { sequence: this.sequence, successstory_sequence: successStory.sequence }, vendorQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    VendorDetailComponent.prototype.addProduct = function (product) {
        this.apollo.sendUpdateQuery(vendorProductUpdateQuery(), { sequence: this.sequence, product_sequence: product.sequence }, vendorQuery(this.type, this.sequence)).subscribe(function (_a) {
            var data = _a.data;
            console.log(data);
        }, function (error) {
            console.log('there was an error sending the query', error);
        });
    };
    VendorDetailComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"] }
    ]; };
    VendorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-detail',
            template: __webpack_require__(/*! raw-loader!./vendor-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-detail/vendor-detail.component.html"),
            styles: [__webpack_require__(/*! ./vendor-detail.component.scss */ "./src/app/view/model/vendor/vendor-detail/vendor-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_4__["ApolloService"]])
    ], VendorDetailComponent);
    return VendorDetailComponent;
}());

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/app/view/model/vendor/vendor-grid/vendor-grid.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-grid/vendor-grid.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvdmVuZG9yL3ZlbmRvci1ncmlkL3ZlbmRvci1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/vendor/vendor-grid/vendor-grid.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-grid/vendor-grid.component.ts ***!
  \************************************************************************/
/*! exports provided: VendorGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorGridComponent", function() { return VendorGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorGridComponent = /** @class */ (function () {
    function VendorGridComponent() {
    }
    VendorGridComponent.prototype.ngOnInit = function () {
    };
    VendorGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-grid',
            template: __webpack_require__(/*! raw-loader!./vendor-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-grid/vendor-grid.component.html"),
            styles: [__webpack_require__(/*! ./vendor-grid.component.scss */ "./src/app/view/model/vendor/vendor-grid/vendor-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorGridComponent);
    return VendorGridComponent;
}());



/***/ }),

/***/ "./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvdmVuZG9yL3ZlbmRvci1wcm9kdWN0LXJlbGF0aW9uLWNyZWF0ZS1pdGVtL3ZlbmRvci1wcm9kdWN0LXJlbGF0aW9uLWNyZWF0ZS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: VendorProductRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorProductRelationCreateItemComponent", function() { return VendorProductRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var allProductsQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllProductsQuery($vendorSequence : String!) {\n    Product(filter : { vendors : { Vendor : {sequence_not: $vendorSequence}}}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllProductsQuery($vendorSequence : String!) {\n    Product(filter : { vendors : { Vendor : {sequence_not: $vendorSequence}}}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var VendorProductRelationCreateItemComponent = /** @class */ (function () {
    function VendorProductRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.vendorSequence = this.config.get('sequence');
    }
    VendorProductRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allProductsQuery(), { vendorSequence: this.vendorSequence }).subscribe(function (res) {
            _this.allProducts = res.data['Product'];
            console.log(_this.allProducts);
        });
    };
    VendorProductRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    VendorProductRelationCreateItemComponent.prototype.addProduct = function () {
        this.dialogRef.close(this.newProduct);
    };
    VendorProductRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    VendorProductRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    VendorProductRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-product-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./vendor-product-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./vendor-product-relation-create-item.component.scss */ "./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], VendorProductRelationCreateItemComponent);
    return VendorProductRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvdmVuZG9yL3ZlbmRvci1wcm9kdWN0LXJlbGF0aW9uLWl0ZW0vdmVuZG9yLXByb2R1Y3QtcmVsYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: VendorProductRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorProductRelationItemComponent", function() { return VendorProductRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorProductRelationItemComponent = /** @class */ (function () {
    function VendorProductRelationItemComponent() {
    }
    VendorProductRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.product.logo)[1];
        this.product.imageUrl = "http://minio.digisus.ch/oss-directory/product_" + this.product.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VendorProductRelationItemComponent.prototype, "product", void 0);
    VendorProductRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-product-relation-item',
            template: __webpack_require__(/*! raw-loader!./vendor-product-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./vendor-product-relation-item.component.scss */ "./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorProductRelationItemComponent);
    return VendorProductRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvdmVuZG9yL3ZlbmRvci1zdWNjZXNzc3RvcnktcmVsYXRpb24tY3JlYXRlLWl0ZW0vdmVuZG9yLXN1Y2Nlc3NzdG9yeS1yZWxhdGlvbi1jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: VendorSuccessstoryRelationCreateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorSuccessstoryRelationCreateItemComponent", function() { return VendorSuccessstoryRelationCreateItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/services/config.service */ "./src/app/config/services/config.service.ts");
/* harmony import */ var _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../data/services/apollo.service */ "./src/app/data/services/apollo.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);






var allSuccessStoriesQuery = function () { return graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  query AllSuccessStoriesQuery {\n    SuccessStory(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"], ["\n  query AllSuccessStoriesQuery {\n    SuccessStory(filter : {}) {\n      sequence\n      __typename\n      imageUrl\n      translation: translations(filter : {}) {\n        language(filter: {short: \"en\"}) {\n          short\n        }\n        sequence\n        __typename\n        title\n      }\n    }\n  }\n"]))); };
var VendorSuccessstoryRelationCreateItemComponent = /** @class */ (function () {
    function VendorSuccessstoryRelationCreateItemComponent(config, apollo, dialogRef, data) {
        this.config = config;
        this.apollo = apollo;
        this.dialogRef = dialogRef;
        this.data = data;
        this.vendorSequence = this.config.get('sequence');
    }
    VendorSuccessstoryRelationCreateItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo.sendQuery(allSuccessStoriesQuery(), { vendorSequence: this.vendorSequence }).subscribe(function (res) {
            _this.allSuccessStories = res.data['SuccessStory'];
            console.log(_this.allSuccessStories);
        });
    };
    VendorSuccessstoryRelationCreateItemComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    VendorSuccessstoryRelationCreateItemComponent.prototype.addSuccessStory = function () {
        this.dialogRef.close(this.newSuccessStory);
    };
    VendorSuccessstoryRelationCreateItemComponent.prototype.displayFn = function (val) {
        return val ? val.translation[0].title : val;
    };
    VendorSuccessstoryRelationCreateItemComponent.ctorParameters = function () { return [
        { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
        { type: _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    VendorSuccessstoryRelationCreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-successstory-relation-create-item',
            template: __webpack_require__(/*! raw-loader!./vendor-successstory-relation-create-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.html"),
            styles: [__webpack_require__(/*! ./vendor-successstory-relation-create-item.component.scss */ "./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _data_services_apollo_service__WEBPACK_IMPORTED_MODULE_3__["ApolloService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], VendorSuccessstoryRelationCreateItemComponent);
    return VendorSuccessstoryRelationCreateItemComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbW9kZWwvdmVuZG9yL3ZlbmRvci1zdWNjZXNzc3RvcnktcmVsYXRpb24taXRlbS92ZW5kb3Itc3VjY2Vzc3N0b3J5LXJlbGF0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: VendorSuccessstoryRelationItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorSuccessstoryRelationItemComponent", function() { return VendorSuccessstoryRelationItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorSuccessstoryRelationItemComponent = /** @class */ (function () {
    function VendorSuccessstoryRelationItemComponent() {
    }
    VendorSuccessstoryRelationItemComponent.prototype.ngOnInit = function () {
        var re = /(?:\.([^.]+))?$/;
        var ending = re.exec(this.successStory.logo)[1];
        this.successStory.imageUrl = "http://minio.digisus.ch/oss-directory/successstory_" + this.successStory.uid + "." + ending;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VendorSuccessstoryRelationItemComponent.prototype, "successStory", void 0);
    VendorSuccessstoryRelationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-successstory-relation-item',
            template: __webpack_require__(/*! raw-loader!./vendor-successstory-relation-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.html"),
            styles: [__webpack_require__(/*! ./vendor-successstory-relation-item.component.scss */ "./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorSuccessstoryRelationItemComponent);
    return VendorSuccessstoryRelationItemComponent;
}());



/***/ }),

/***/ "./src/app/view/navbar/navbar-item/navbar-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/view/navbar/navbar-item/navbar-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-arrow-container {\n  padding: 0 20px;\n  display: flex;\n  justify-content: center;\n  /* align horizontal */\n  align-items: center;\n  /* align vertical */\n}\n\n.navbar-button-wrapper {\n  width: 100%;\n  padding: 2px 0;\n  cursor: pointer;\n}\n\n.navbar-button-wrapper:hover {\n  background-color: #efefef;\n  color: #f3aa00;\n}\n\n.navbar-button {\n  color: #451250;\n  text-decoration: none;\n  width: 100%;\n}\n\n.navbar-button:active {\n  color: #f3aa00;\n}\n\n.active-link {\n  color: #f3aa00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L25hdmJhci9uYXZiYXItaXRlbS9uYXZiYXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlldy9uYXZiYXIvbmF2YmFyLWl0ZW0vbmF2YmFyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQXlCLHFCQUFBO0VBQ3pCLG1CQUFBO0VBQXFCLG1CQUFBO0FDR3ZCOztBREFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbmF2YmFyL25hdmJhci1pdGVtL25hdmJhci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1hcnJvdy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBhbGlnbiBob3Jpem9udGFsICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIGFsaWduIHZlcnRpY2FsICovXG59XG5cbi5uYXZiYXItYnV0dG9uLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci1idXR0b24td3JhcHBlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGNvbG9yOiAjZjNhYTAwO1xufVxuXG4ubmF2YmFyLWJ1dHRvbiB7XG4gIGNvbG9yOiAjNDUxMjUwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2YmFyLWJ1dHRvbjphY3RpdmUge1xuICBjb2xvcjogI2YzYWEwMDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6ICNmM2FhMDA7XG59XG4iLCIubmF2LWFycm93LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGFsaWduIGhvcml6b250YWwgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogYWxpZ24gdmVydGljYWwgKi9cbn1cblxuLm5hdmJhci1idXR0b24td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyLWJ1dHRvbi13cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY29sb3I6ICNmM2FhMDA7XG59XG5cbi5uYXZiYXItYnV0dG9uIHtcbiAgY29sb3I6ICM0NTEyNTA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXZiYXItYnV0dG9uOmFjdGl2ZSB7XG4gIGNvbG9yOiAjZjNhYTAwO1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICBjb2xvcjogI2YzYWEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/navbar/navbar-item/navbar-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view/navbar/navbar-item/navbar-item.component.ts ***!
  \******************************************************************/
/*! exports provided: NavbarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItemComponent", function() { return NavbarItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarItemComponent = /** @class */ (function () {
    function NavbarItemComponent() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavbarItemComponent.prototype.ngOnInit = function () {
    };
    NavbarItemComponent.prototype.onClick = function () {
        this.activate.emit(this.item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavbarItemComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NavbarItemComponent.prototype, "activate", void 0);
    NavbarItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-item',
            template: __webpack_require__(/*! raw-loader!./navbar-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/navbar/navbar-item/navbar-item.component.html"),
            styles: [__webpack_require__(/*! ./navbar-item.component.scss */ "./src/app/view/navbar/navbar-item/navbar-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarItemComponent);
    return NavbarItemComponent;
}());



/***/ }),

/***/ "./src/app/view/navbar/navbar.component.scss":
/*!***************************************************!*\
  !*** ./src/app/view/navbar/navbar.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmat-toolbar {\n  position: fixed;\n}\n\n.mat-divider.mat-divider-vertical {\n  height: 70%;\n}\n\n.user-menu-button i {\n  background-color: white;\n  border-radius: 50%;\n  padding: 5px;\n}\n\n#logo {\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9sYWIvZmRuL29zc2RpcmVjdG9yeS93ZWJzaXRlL2FuZ3VsYXIvc3JjL2FwcC92aWV3L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXcvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm1hdC1kaXZpZGVyLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi51c2VyLW1lbnUtYnV0dG9uIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG4iLCIuc2lkZW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLm1hdC1kaXZpZGVyLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi51c2VyLW1lbnUtYnV0dG9uIGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbiNsb2dvIHtcbiAgaGVpZ2h0OiA3MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/view/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/navbar/navbar.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/view/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/view/notification/snackbar/snackbar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/view/notification/snackbar/snackbar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvbm90aWZpY2F0aW9uL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/notification/snackbar/snackbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view/notification/snackbar/snackbar.component.ts ***!
  \******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent() {
    }
    SnackbarComponent.prototype.ngOnInit = function () {
    };
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! raw-loader!./snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/notification/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/view/notification/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/view/view-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_services_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route/services/matcher */ "./src/app/route/services/matcher.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/view/detail/detail.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/view/grid/grid.component.ts");






var routes = [];
var ViewRoutingModule = /** @class */ (function () {
    function ViewRoutingModule(matcher) {
        var _this = this;
        this.matcher = matcher;
        routes.push({
            matcher: function (url) { return _this.matcher.detectSequence(url); },
            component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"]
        });
        routes.push({
            matcher: function (url) { return _this.matcher.detectTypes(url); },
            component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"]
        });
    }
    ViewRoutingModule.ctorParameters = function () { return [
        { type: _route_services_matcher__WEBPACK_IMPORTED_MODULE_3__["MatcherService"] }
    ]; };
    ViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            /*RouterModule.forRoot(routes, )*/
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_route_services_matcher__WEBPACK_IMPORTED_MODULE_3__["MatcherService"]])
    ], ViewRoutingModule);
    return ViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/view/view.module.ts":
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _model_vendor_vendor_detail_vendor_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/vendor/vendor-detail/vendor-detail.component */ "./src/app/view/model/vendor/vendor-detail/vendor-detail.component.ts");
/* harmony import */ var _model_vendor_vendor_grid_vendor_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/vendor/vendor-grid/vendor-grid.component */ "./src/app/view/model/vendor/vendor-grid/vendor-grid.component.ts");
/* harmony import */ var _model_client_client_grid_client_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/client/client-grid/client-grid.component */ "./src/app/view/model/client/client-grid/client-grid.component.ts");
/* harmony import */ var _model_client_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/client/client-detail/client-detail.component */ "./src/app/view/model/client/client-detail/client-detail.component.ts");
/* harmony import */ var _model_community_community_grid_community_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/community/community-grid/community-grid.component */ "./src/app/view/model/community/community-grid/community-grid.component.ts");
/* harmony import */ var _model_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/product/product-detail/product-detail.component */ "./src/app/view/model/product/product-detail/product-detail.component.ts");
/* harmony import */ var _model_product_product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/product/product-grid/product-grid.component */ "./src/app/view/model/product/product-grid/product-grid.component.ts");
/* harmony import */ var _model_success_story_success_story_grid_success_story_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/success-story/success-story-grid/success-story-grid.component */ "./src/app/view/model/success-story/success-story-grid/success-story-grid.component.ts");
/* harmony import */ var _model_success_story_success_story_detail_success_story_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/success-story/success-story-detail/success-story-detail.component */ "./src/app/view/model/success-story/success-story-detail/success-story-detail.component.ts");
/* harmony import */ var _model_job_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/job/job-detail/job-detail.component */ "./src/app/view/model/job/job-detail/job-detail.component.ts");
/* harmony import */ var _model_job_job_grid_job_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/job/job-grid/job-grid.component */ "./src/app/view/model/job/job-grid/job-grid.component.ts");
/* harmony import */ var _model_rss_rss_detail_rss_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/rss/rss-detail/rss-detail.component */ "./src/app/view/model/rss/rss-detail/rss-detail.component.ts");
/* harmony import */ var _model_rss_rss_grid_rss_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/rss/rss-grid/rss-grid.component */ "./src/app/view/model/rss/rss-grid/rss-grid.component.ts");
/* harmony import */ var _model_event_event_grid_event_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model/event/event-grid/event-grid.component */ "./src/app/view/model/event/event-grid/event-grid.component.ts");
/* harmony import */ var _model_event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./model/event/event-detail/event-detail.component */ "./src/app/view/model/event/event-detail/event-detail.component.ts");
/* harmony import */ var _model_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./model/news/news-detail/news-detail.component */ "./src/app/view/model/news/news-detail/news-detail.component.ts");
/* harmony import */ var _model_news_news_grid_news_grid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./model/news/news-grid/news-grid.component */ "./src/app/view/model/news/news-grid/news-grid.component.ts");
/* harmony import */ var _model_news_feed_news_feed_detail_news_feed_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./model/news-feed/news-feed-detail/news-feed-detail.component */ "./src/app/view/model/news-feed/news-feed-detail/news-feed-detail.component.ts");
/* harmony import */ var _model_news_feed_news_feed_grid_news_feed_grid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./model/news-feed/news-feed-grid/news-feed-grid.component */ "./src/app/view/model/news-feed/news-feed-grid/news-feed-grid.component.ts");
/* harmony import */ var _model_community_community_detail_community_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./model/community/community-detail/community-detail.component */ "./src/app/view/model/community/community-detail/community-detail.component.ts");
/* harmony import */ var _route_route_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../route/route.module */ "./src/app/route/route.module.ts");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/view/view-routing.module.ts");
/* harmony import */ var _base_base_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./base/base.module */ "./src/app/view/base/base.module.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/view/grid/grid.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/view/detail/detail.component.ts");
/* harmony import */ var _model_default_default_grid_default_grid_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./model/default/default-grid/default-grid.component */ "./src/app/view/model/default/default-grid/default-grid.component.ts");
/* harmony import */ var _model_default_default_detail_default_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./model/default/default-detail/default-detail.component */ "./src/app/view/model/default/default-detail/default-detail.component.ts");
/* harmony import */ var _detail_directives_detail_directive_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./detail/directives/detail-directive.module */ "./src/app/view/detail/directives/detail-directive.module.ts");
/* harmony import */ var _detail_detail_layout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./detail/detail-layout.component */ "./src/app/view/detail/detail-layout.component.ts");
/* harmony import */ var _grid_grid_layout_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./grid/grid-layout.component */ "./src/app/view/grid/grid-layout.component.ts");
/* harmony import */ var _grid_directives_grid_directive_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./grid/directives/grid-directive.module */ "./src/app/view/grid/directives/grid-directive.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../material-design/material-design.module */ "./src/app/material-design/material-design.module.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var _drop_down_grid_drop_down_grid_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./drop-down-grid/drop-down-grid.component */ "./src/app/view/drop-down-grid/drop-down-grid.component.ts");
/* harmony import */ var _drop_down_grid_drop_down_grid_layout_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./drop-down-grid/drop-down-grid-layout.component */ "./src/app/view/drop-down-grid/drop-down-grid-layout.component.ts");
/* harmony import */ var _drop_down_grid_directives_drop_down_grid_directive_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./drop-down-grid/directives/drop-down-grid-directive.module */ "./src/app/view/drop-down-grid/directives/drop-down-grid-directive.module.ts");
/* harmony import */ var _model_vendor_vendor_product_relation_item_vendor_product_relation_item_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./model/vendor/vendor-product-relation-item/vendor-product-relation-item.component */ "./src/app/view/model/vendor/vendor-product-relation-item/vendor-product-relation-item.component.ts");
/* harmony import */ var _model_success_story_success_story_product_relation_item_success_story_product_relation_item_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./model/success-story/success-story-product-relation-item/success-story-product-relation-item.component */ "./src/app/view/model/success-story/success-story-product-relation-item/success-story-product-relation-item.component.ts");
/* harmony import */ var _model_success_story_success_story_vendor_relation_item_success_story_vendor_relation_item_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component */ "./src/app/view/model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component.ts");
/* harmony import */ var _model_success_story_success_story_client_relation_item_success_story_client_relation_item_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./model/success-story/success-story-client-relation-item/success-story-client-relation-item.component */ "./src/app/view/model/success-story/success-story-client-relation-item/success-story-client-relation-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_vendor_vendor_successstory_relation_item_vendor_successstory_relation_item_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component */ "./src/app/view/model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component.ts");
/* harmony import */ var _model_vendor_vendor_product_relation_create_item_vendor_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component */ "./src/app/view/model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component.ts");
/* harmony import */ var _model_vendor_vendor_successstory_relation_create_item_vendor_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component */ "./src/app/view/model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/view/auth/login/login.component.ts");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/view/auth/registration/registration.component.ts");
/* harmony import */ var _notification_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./notification/snackbar/snackbar.component */ "./src/app/view/notification/snackbar/snackbar.component.ts");
/* harmony import */ var _model_client_client_successstory_relation_create_item_client_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component */ "./src/app/view/model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component.ts");
/* harmony import */ var _model_client_client_successstory_relation_item_client_successstory_relation_item_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./model/client/client-successstory-relation-item/client-successstory-relation-item.component */ "./src/app/view/model/client/client-successstory-relation-item/client-successstory-relation-item.component.ts");
/* harmony import */ var _model_success_story_successstory_client_relation_item_successstory_client_relation_item_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./model/success-story/successstory-client-relation-item/successstory-client-relation-item.component */ "./src/app/view/model/success-story/successstory-client-relation-item/successstory-client-relation-item.component.ts");
/* harmony import */ var _model_success_story_successstory_vendor_relation_item_successstory_vendor_relation_item_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component */ "./src/app/view/model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component.ts");
/* harmony import */ var _model_success_story_successstory_vendor_relation_create_item_successstory_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component */ "./src/app/view/model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component.ts");
/* harmony import */ var _model_success_story_successstory_client_relation_create_item_successstory_client_relation_create_item_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component */ "./src/app/view/model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component.ts");
/* harmony import */ var _model_success_story_successstory_product_relation_item_successstory_product_relation_item_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./model/success-story/successstory-product-relation-item/successstory-product-relation-item.component */ "./src/app/view/model/success-story/successstory-product-relation-item/successstory-product-relation-item.component.ts");
/* harmony import */ var _model_success_story_successstory_product_relation_create_item_successstory_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component */ "./src/app/view/model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component.ts");
/* harmony import */ var _model_product_product_vendor_relation_item_product_vendor_relation_item_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./model/product/product-vendor-relation-item/product-vendor-relation-item.component */ "./src/app/view/model/product/product-vendor-relation-item/product-vendor-relation-item.component.ts");
/* harmony import */ var _model_product_product_vendor_relation_create_item_product_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component */ "./src/app/view/model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component.ts");
/* harmony import */ var _model_product_product_successstory_relation_create_item_product_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component */ "./src/app/view/model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component.ts");
/* harmony import */ var _model_product_product_successstory_relation_item_product_successstory_relation_item_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./model/product/product-successstory-relation-item/product-successstory-relation-item.component */ "./src/app/view/model/product/product-successstory-relation-item/product-successstory-relation-item.component.ts");
/* harmony import */ var _create_new_create_new_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./create-new/create-new.component */ "./src/app/view/create-new/create-new.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");




































































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_67__["TranslateHttpLoader"](http);
}
var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_26__["GridComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_27__["DetailComponent"],
                _model_vendor_vendor_detail_vendor_detail_component__WEBPACK_IMPORTED_MODULE_3__["VendorDetailComponent"],
                _model_vendor_vendor_grid_vendor_grid_component__WEBPACK_IMPORTED_MODULE_4__["VendorGridComponent"],
                _model_client_client_grid_client_grid_component__WEBPACK_IMPORTED_MODULE_5__["ClientGridComponent"],
                _model_client_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailComponent"],
                _model_community_community_grid_community_grid_component__WEBPACK_IMPORTED_MODULE_7__["CommunityGridComponent"],
                _model_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
                _model_product_product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_9__["ProductGridComponent"],
                _model_success_story_success_story_grid_success_story_grid_component__WEBPACK_IMPORTED_MODULE_10__["SuccessStoryGridComponent"],
                _model_success_story_success_story_detail_success_story_detail_component__WEBPACK_IMPORTED_MODULE_11__["SuccessStoryDetailComponent"],
                _model_job_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_12__["JobDetailComponent"],
                _model_job_job_grid_job_grid_component__WEBPACK_IMPORTED_MODULE_13__["JobGridComponent"],
                _model_rss_rss_detail_rss_detail_component__WEBPACK_IMPORTED_MODULE_14__["RssDetailComponent"],
                _model_rss_rss_grid_rss_grid_component__WEBPACK_IMPORTED_MODULE_15__["RssGridComponent"],
                _model_event_event_grid_event_grid_component__WEBPACK_IMPORTED_MODULE_16__["EventGridComponent"],
                _model_event_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_17__["EventDetailComponent"],
                _model_news_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_18__["NewsDetailComponent"],
                _model_news_news_grid_news_grid_component__WEBPACK_IMPORTED_MODULE_19__["NewsGridComponent"],
                _model_news_feed_news_feed_detail_news_feed_detail_component__WEBPACK_IMPORTED_MODULE_20__["NewsFeedDetailComponent"],
                _model_news_feed_news_feed_grid_news_feed_grid_component__WEBPACK_IMPORTED_MODULE_21__["NewsFeedGridComponent"],
                _model_community_community_detail_community_detail_component__WEBPACK_IMPORTED_MODULE_22__["CommunityDetailComponent"],
                _model_default_default_grid_default_grid_component__WEBPACK_IMPORTED_MODULE_28__["DefaultGridComponent"],
                _model_default_default_detail_default_detail_component__WEBPACK_IMPORTED_MODULE_29__["DefaultDetailComponent"],
                _detail_detail_layout_component__WEBPACK_IMPORTED_MODULE_31__["DetailLayoutComponent"],
                _grid_grid_layout_component__WEBPACK_IMPORTED_MODULE_32__["GridLayoutComponent"],
                _drop_down_grid_drop_down_grid_component__WEBPACK_IMPORTED_MODULE_38__["DropDownGridComponent"],
                _drop_down_grid_drop_down_grid_layout_component__WEBPACK_IMPORTED_MODULE_39__["DropDownGridLayoutComponent"],
                _model_vendor_vendor_product_relation_item_vendor_product_relation_item_component__WEBPACK_IMPORTED_MODULE_41__["VendorProductRelationItemComponent"],
                _model_success_story_success_story_product_relation_item_success_story_product_relation_item_component__WEBPACK_IMPORTED_MODULE_42__["SuccessStoryProductRelationItemComponent"],
                _model_success_story_success_story_vendor_relation_item_success_story_vendor_relation_item_component__WEBPACK_IMPORTED_MODULE_43__["SuccessStoryVendorRelationItemComponent"],
                _model_success_story_success_story_client_relation_item_success_story_client_relation_item_component__WEBPACK_IMPORTED_MODULE_44__["SuccessStoryClientRelationItemComponent"],
                _model_vendor_vendor_successstory_relation_item_vendor_successstory_relation_item_component__WEBPACK_IMPORTED_MODULE_46__["VendorSuccessstoryRelationItemComponent"],
                _model_vendor_vendor_product_relation_create_item_vendor_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_47__["VendorProductRelationCreateItemComponent"],
                _model_vendor_vendor_successstory_relation_create_item_vendor_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_48__["VendorSuccessstoryRelationCreateItemComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_49__["LoginComponent"],
                _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_50__["RegistrationComponent"],
                _notification_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_51__["SnackbarComponent"],
                _model_client_client_successstory_relation_create_item_client_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_52__["ClientSuccessstoryRelationCreateItemComponent"],
                _model_client_client_successstory_relation_item_client_successstory_relation_item_component__WEBPACK_IMPORTED_MODULE_53__["ClientSuccessstoryRelationItemComponent"],
                _model_success_story_successstory_client_relation_item_successstory_client_relation_item_component__WEBPACK_IMPORTED_MODULE_54__["SuccessstoryClientRelationItemComponent"],
                _model_success_story_successstory_vendor_relation_item_successstory_vendor_relation_item_component__WEBPACK_IMPORTED_MODULE_55__["SuccessstoryVendorRelationItemComponent"],
                _model_success_story_successstory_vendor_relation_create_item_successstory_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_56__["SuccessstoryVendorRelationCreateItemComponent"],
                _model_success_story_successstory_client_relation_create_item_successstory_client_relation_create_item_component__WEBPACK_IMPORTED_MODULE_57__["SuccessstoryClientRelationCreateItemComponent"],
                _model_success_story_successstory_product_relation_item_successstory_product_relation_item_component__WEBPACK_IMPORTED_MODULE_58__["SuccessstoryProductRelationItemComponent"],
                _model_success_story_successstory_product_relation_create_item_successstory_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_59__["SuccessstoryProductRelationCreateItemComponent"],
                _model_product_product_vendor_relation_item_product_vendor_relation_item_component__WEBPACK_IMPORTED_MODULE_60__["ProductVendorRelationItemComponent"],
                _model_product_product_vendor_relation_create_item_product_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_61__["ProductVendorRelationCreateItemComponent"],
                _model_product_product_successstory_relation_create_item_product_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_62__["ProductSuccessstoryRelationCreateItemComponent"],
                _model_product_product_successstory_relation_item_product_successstory_relation_item_component__WEBPACK_IMPORTED_MODULE_63__["ProductSuccessstoryRelationItemComponent"],
                _create_new_create_new_component__WEBPACK_IMPORTED_MODULE_64__["CreateNewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _route_route_module__WEBPACK_IMPORTED_MODULE_23__["RouteModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_24__["ViewRoutingModule"],
                _base_base_module__WEBPACK_IMPORTED_MODULE_25__["BaseModule"],
                _detail_directives_detail_directive_module__WEBPACK_IMPORTED_MODULE_30__["DetailDirectiveModule"],
                _grid_directives_grid_directive_module__WEBPACK_IMPORTED_MODULE_33__["GridDirectiveModule"],
                _drop_down_grid_directives_drop_down_grid_directive_module__WEBPACK_IMPORTED_MODULE_40__["DropDownGridDirectiveModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_34__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_35__["FlexLayoutModule"],
                _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_36__["MaterialDesignModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_37__["NgxFileDropModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_65__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_65__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_66__["HttpClient"]]
                    }
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_34__["RouterModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_37__["NgxFileDropModule"],
            ],
            entryComponents: [
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_26__["GridComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_27__["DetailComponent"],
                _model_vendor_vendor_product_relation_create_item_vendor_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_47__["VendorProductRelationCreateItemComponent"],
                _model_vendor_vendor_successstory_relation_create_item_vendor_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_48__["VendorSuccessstoryRelationCreateItemComponent"],
                _model_client_client_successstory_relation_create_item_client_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_52__["ClientSuccessstoryRelationCreateItemComponent"],
                _model_product_product_successstory_relation_create_item_product_successstory_relation_create_item_component__WEBPACK_IMPORTED_MODULE_62__["ProductSuccessstoryRelationCreateItemComponent"],
                _model_product_product_vendor_relation_create_item_product_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_61__["ProductVendorRelationCreateItemComponent"],
                _model_success_story_successstory_client_relation_create_item_successstory_client_relation_create_item_component__WEBPACK_IMPORTED_MODULE_57__["SuccessstoryClientRelationCreateItemComponent"],
                _model_success_story_successstory_product_relation_create_item_successstory_product_relation_create_item_component__WEBPACK_IMPORTED_MODULE_59__["SuccessstoryProductRelationCreateItemComponent"],
                _model_success_story_successstory_vendor_relation_create_item_successstory_vendor_relation_create_item_component__WEBPACK_IMPORTED_MODULE_56__["SuccessstoryVendorRelationCreateItemComponent"]
            ]
        })
    ], ViewModule);
    return ViewModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:3000/',
    graphqlURL: 'http://localhost:3000/graphql',
    graphqlWSURL: 'ws://localhost:3000/graphql',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/steve/lab/fdn/ossdirectory/website/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map