(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../node_modules/raw-loader/index.js!../src/lib/nw-timeline/nw-timeline.component.html":
/*!************************************************************************************!*\
  !*** ../node_modules/raw-loader!../src/lib/nw-timeline/nw-timeline.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\">\r\n  <div class=\"timeline-wrapper timeline-wrapper-info\" [class.timeline-inverted]=\"isTwoColumn && idx % 2 === 0\"\r\n    *ngFor=\"let node of source; let idx = index\">\r\n    <div class=\"timeline-badge\"><i [class]=\"node.icon\"\r\n        (click)=\"$event.preventDefault(); node.isActive = !node.isActive;\"></i></div>\r\n\r\n    <div class=\"timeline-panel\" *ngIf=\"node.source as item\">\r\n      <div class=\"timeline-heading\" *ngIf=\"item.title\">\r\n        <h6 class=\"timeline-title\">{{item.title}}</h6>\r\n      </div>\r\n      <div class=\"timeline-body\" [style.display]=\"node.isActive ? 'block' : 'none'\">\r\n        <ng-template [ngIf]=\"isMultitlePanel(item)\" [ngIfElse]=\"singleEvents\">\r\n          <ng-template #multipleAvailable>\r\n            <div *ngFor=\"let evt of item.events\" class=\"card mb-3\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\" *ngFor=\"let key of getObjectkeys(evt)\">\r\n                  <div class=\"col-md-4\">{{key}}</div>\r\n                  <div class=\"col-md-8\">{{evt[key]}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"multipleEventsTemplateRef\" [ngIfElse]=\"multipleAvailable\"\r\n            [ngTemplateOutlet]=\"multipleEventsTemplateRef\"\r\n            [ngTemplateOutletContext]=\"{event: item.events, time: node.time}\"></ng-template>\r\n        </ng-template>\r\n        <ng-template #singleEvents>\r\n          <ng-template #singleAvailable>\r\n            <div class=\"card mb-3\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\" *ngFor=\"let key of getObjectkeys(item.events)\">\r\n                  <div class=\"col-md-4\">{{key}}</div>\r\n                  <div class=\"col-md-8\">{{item.events[key]}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"singleEventTemplateRef\" [ngIfElse]=\"singleAvailable\"\r\n            [ngTemplateOutlet]=\"singleEventTemplateRef\"\r\n            [ngTemplateOutletContext]=\"{event: item.events, time: node.time}\"></ng-template>\r\n        </ng-template>\r\n      </div>\r\n      <div class=\"timeline-footer d-flex align-items-center flex-wrap\">\r\n        <i class=\"mdi mdi-heart-outline text-muted mr-1\"></i>\r\n        <span></span>\r\n        <span class=\"ml-md-auto font-weight-bold\">{{node.time}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!***************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/app.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/layout/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <p class=\"lead\">This is a simple project built in Angular 8+.</p>\r\n    <hr class=\"my-2\">\r\n    <p>oNiwa &copy;2019</p>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html":
/*!********************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/layout/header/header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"/assets/images/logo.png\" alt=\"Home\">\r\n    </a>\r\n\r\n    <div class=\"navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\" *ngFor=\"let item of navs\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"item.route\" routerLinkActive=\"router-link-active\" [title]=\"item.title\">{{item.name}} <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/layout/navigation/navigation.component.html":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/layout/navigation/navigation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sidebar p-0\">\r\n    <div class=\"align-items-center d-flex navbar-toggler w-100\">\r\n        <span class=\"mr-auto\">Menu</span>\r\n        <button class=\"btn navbar-toggler-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\r\n            aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <svg class=\"align-middle\" focusable=\"false\" height=\"30\" viewBox=\"0 0 30 30\" width=\"30\"\r\n                xmlns=\"http://www.w3.org/2000/svg\">\r\n                <title>Menu</title>\r\n                <path d=\"M4 7h22M4 15h22M4 23h22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                    stroke-width=\"2\"></path>\r\n            </svg>\r\n        </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\" [class.group-item]=\"item.hasChild\" *ngFor=\"let item of navs\" routerLinkActive=\"active\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"item.route\" routerLinkActive=\"router-link-active\"\r\n                    [title]=\"item.title\">{{item.name}} <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/shared/components/code/code.component.html":
/*!***************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/shared/components/code/code.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pre class=\"language-{{ snippet.lang }}\"><code #code class=\"language-{{ snippet.lang }}\"></code></pre>\n"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/views/getting-started/getting-started.component.html":
/*!*************************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/views/getting-started/getting-started.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-3\">\r\n            <app-navigation></app-navigation>\r\n        </div>\r\n        <div class=\"col-12 col-lg-9\">\r\n            <!--Getting started content here-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 content\">\r\n                    <p>After installing the above dependencies, install <code>nw-widget</code> via:</p>\r\n\r\n                    <niwa-code [snippet]=\"codeInstall\"></niwa-code>\r\n\r\n                    <p>Once installed you need to import our main module.</p>\r\n\r\n                    <niwa-code [snippet]=\"codeRoot\"></niwa-code>\r\n\r\n                    <p>Alternatively you could only import modules with components you need, ex. pagination and alert.\r\n                        The resulting bundle will be smaller in this case.</p>\r\n\r\n                    <niwa-code [snippet]=\"codeOther\"></niwa-code>\r\n                    <br>\r\n\r\n                    <h4>\r\n                        SystemJS\r\n                    </h4>\r\n                    <p>\r\n                        If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.\r\n                    </p>\r\n                    <p>\r\n                        In your SystemJS config file, <code>map</code> needs to tell the System loader where to look for\r\n                        <code>nw-widget</code>:\r\n                    </p>\r\n\r\n                    <niwa-code [snippet]=\"codeSystem\"></niwa-code>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\r\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n\r\n<style>\r\n  :host {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  h1,\r\n  h2,\r\n  h3,\r\n  h4,\r\n  h5,\r\n  h6 {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p {\r\n    margin: 0;\r\n  }\r\n\r\n  .spacer {\r\n    flex: 1;\r\n  }\r\n\r\n  .toolbar {\r\n    height: 60px;\r\n    margin: -8px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .toolbar img {\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar #twitter-logo {\r\n    height: 40px;\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .toolbar #twitter-logo:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .content {\r\n    display: flex;\r\n    margin: 32px auto;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  svg.material-icons {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\n  svg.material-icons:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n  .card svg.material-icons path {\r\n    fill: #888;\r\n  }\r\n\r\n  .card-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  .card {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n  .card-container .card:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .card.card-small {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n  .card-container .card:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card-container .card:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(black, 0.35);\r\n  }\r\n\r\n  .card-container .card:not(.highlight-card):hover .material-icons path {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n\r\n  .card.highlight-card {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n  .card.card.highlight-card span {\r\n    margin-left: 45px;\r\n  }\r\n\r\n  @-webkit-keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n  @keyframes spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes flash {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n\r\n    50% {\r\n      opacity: .1;\r\n    }\r\n\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @keyframes flash {\r\n    0% {\r\n      opacity: 1;\r\n    }\r\n\r\n    50% {\r\n      opacity: .1;\r\n    }\r\n\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes pulse {\r\n    0% {\r\n      width: 60px;\r\n    }\r\n\r\n    25% {\r\n      width: 70px;\r\n    }\r\n\r\n    50% {\r\n      width: 80px;\r\n    }\r\n\r\n    75% {\r\n      width: 90px;\r\n    }\r\n\r\n    100% {\r\n      width: 100px;\r\n    }\r\n  }\r\n\r\n  @keyframes pulse {\r\n    0% {\r\n      width: 60px;\r\n    }\r\n\r\n    25% {\r\n      width: 70px;\r\n    }\r\n\r\n    50% {\r\n      width: 80px;\r\n    }\r\n\r\n    75% {\r\n      width: 90px;\r\n    }\r\n\r\n    100% {\r\n      width: 100px;\r\n    }\r\n  }\r\n\r\n  svg#star {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -25px;\r\n    top: -35px;\r\n    animation: spin 20s infinite linear;\r\n    animation-direction: reverse;\r\n  }\r\n\r\n  svg#sky {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -25px;\r\n    top: -35px;\r\n    -webkit-animation: flash linear .5s infinite;\r\n    animation: flash linear .5s infinite;\r\n  }\r\n\r\n  svg#niwa-pro {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -25px;\r\n    top: -35px;\r\n    -webkit-animation: pulse linear .5s infinite;\r\n    animation: pulse linear .5s infinite;\r\n  }\r\n\r\n  svg#rocket-smoke {\r\n    height: 100vh;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n  }\r\n\r\n  a,\r\n  a:visited,\r\n  a:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n  }\r\n\r\n  a:hover {\r\n    color: #125699;\r\n  }\r\n\r\n  .terminal {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 40px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n\r\n  .terminal::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n\r\n  .terminal pre {\r\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .circle-link {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n\r\n  .circle-link:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  footer {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n\r\n  footer a {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .github-star-badge {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27, 31, 35, .2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\r\n  }\r\n\r\n  .github-star-badge:hover {\r\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\r\n    border-color: rgba(27, 31, 35, .35);\r\n    background-position: -.5em;\r\n  }\r\n\r\n  .github-star-badge .material-icons {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n  }\r\n\r\n  svg#clouds {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n\r\n  /* Responsive Styles */\r\n  @media screen and (max-width: 767px) {\r\n\r\n    .card-container>*:not(.circle-link),\r\n    .terminal {\r\n      width: 100%;\r\n    }\r\n\r\n    .card:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card span {\r\n      margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke {\r\n      right: 120px;\r\n      transform: rotate(-5deg);\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 575px) {\r\n    svg#rocket-smoke {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\r\n</style>\r\n\r\n<!-- Toolbar -->\r\n<app-header></app-header>\r\n\r\n<div class=\"content\" role=\"main\">\r\n\r\n  <!-- Highlight Card -->\r\n  <div class=\"card highlight-card card-small\">\r\n    <svg id=\"star\" alt=\"Star\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      style=\"isolation:isolate\" viewBox=\"0 0 80 80\" width=\"80pt\" height=\"80pt\">\r\n      <defs>\r\n        <clipPath id=\"_clipPath_nN7Mb5n0tuPDSXTmdTVPdFSccqAIWDKO\">\r\n          <rect width=\"80\" height=\"80\" />\r\n        </clipPath>\r\n      </defs>\r\n      <g clip-path=\"url(#_clipPath_nN7Mb5n0tuPDSXTmdTVPdFSccqAIWDKO)\">\r\n        <path\r\n          d=\" M 64.789 74.087 L 43.318 65.665 L 24.789 80 L 20.874 55.905 L 0 45.913 L 17.557 30.24 L 15.211 5.913 L 36.682 14.335 L 55.211 0 L 59.126 24.095 L 80 34.087 L 62.443 49.76 L 64.789 74.087 Z \"\r\n          fill=\"rgb(255,0,0)\" />\r\n      </g>\r\n    </svg>\r\n    <svg id=\"niwa-pro\" alt=\"Niwa Pro\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      style=\"isolation:isolate\" viewBox=\"0 0 80 80\" width=\"80pt\" height=\"80pt\">\r\n      <defs>\r\n        <clipPath id=\"_clipPath_6SpAH4XaTOrmFkyWiqn9hg9NSLyzr5iX\">\r\n          <rect width=\"80\" height=\"80\" />\r\n        </clipPath>\r\n      </defs>\r\n      <g clip-path=\"url(#_clipPath_6SpAH4XaTOrmFkyWiqn9hg9NSLyzr5iX)\">\r\n        <clipPath id=\"_clipPath_SpA2AxjxA11QtXdXpEZQClaJ8Zcd4y8j\">\r\n          <rect x=\"10\" y=\"27.5\" width=\"60\" height=\"21\" transform=\"matrix(1,0,0,1,0,0)\" fill=\"rgb(255,255,255)\" />\r\n        </clipPath>\r\n        <g clip-path=\"url(#_clipPath_SpA2AxjxA11QtXdXpEZQClaJ8Zcd4y8j)\">\r\n          <clipPath id=\"_clipPath_ZwGmpbt2kqInrbXERM2Inejg3zOefUNz\">\r\n            <path d=\" M 10 27.5 L 70 27.5 L 70 48.5 L 10 48.5 L 10 27.5 Z \" fill=\"rgb(255,255,255)\" />\r\n          </clipPath>\r\n          <g clip-path=\"url(#_clipPath_ZwGmpbt2kqInrbXERM2Inejg3zOefUNz)\">\r\n            <path\r\n              d=\" M 20.389 38.893 C 19.768 38.888 19.278 39.17 18.919 39.741 C 18.616 40.221 18.464 40.782 18.464 41.423 C 18.464 42.029 18.636 42.494 18.98 42.818 C 19.253 43.075 19.571 43.204 19.934 43.204 C 20.374 43.204 20.755 43.055 21.079 42.757 C 21.447 42.408 21.644 41.936 21.67 41.34 C 21.735 39.713 21.308 38.898 20.389 38.893 Z  M 19.934 45.197 C 19 45.197 18.197 44.876 17.525 44.234 C 16.787 43.532 16.401 42.595 16.365 41.423 C 16.33 40.307 16.636 39.312 17.282 38.438 C 18.05 37.407 19.119 36.892 20.488 36.892 C 21.498 36.892 22.301 37.296 22.897 38.105 C 23.433 38.832 23.7 39.734 23.7 40.81 C 23.7 41.981 23.387 42.982 22.761 43.81 C 22.058 44.735 21.116 45.197 19.934 45.197 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 36.181 42.886 C 36.181 43.138 36.137 43.537 36.052 44.083 C 35.95 44.735 35.582 45.061 34.945 45.061 C 34.592 45.061 34.192 44.861 33.748 44.462 C 31.803 42.709 29.608 40.252 27.163 37.089 C 27.133 38.403 27.118 39.208 27.118 39.506 C 27.118 39.905 27.127 40.506 27.145 41.31 C 27.162 42.113 27.171 42.714 27.171 43.113 C 27.171 44.603 26.807 45.349 26.08 45.349 C 25.711 45.349 25.415 45.235 25.193 45.007 C 24.996 44.805 24.898 44.56 24.898 44.272 C 24.898 44.07 24.914 43.765 24.947 43.355 C 24.98 42.946 24.996 42.641 24.996 42.439 C 24.996 42.141 25.006 41.693 25.026 41.098 C 25.047 40.501 25.057 40.054 25.057 39.756 C 25.057 39.438 25.049 38.958 25.034 38.317 C 25.019 37.675 25.012 37.195 25.012 36.877 C 25.012 36.574 24.981 36.122 24.92 35.521 C 24.86 34.92 24.829 34.467 24.829 34.164 C 24.829 33.861 24.96 33.591 25.22 33.354 C 25.48 33.116 25.777 32.998 26.11 32.998 C 26.484 32.998 26.898 33.321 27.353 33.967 C 29.646 37.241 31.909 39.91 34.142 41.977 C 34.147 41.815 34.15 41.431 34.15 40.825 C 34.15 38.335 34.124 36.655 34.074 35.786 C 34.064 35.639 34.031 35.367 33.975 34.967 C 33.925 34.614 33.9 34.336 33.9 34.134 C 33.9 33.437 34.268 33.088 35.006 33.088 C 35.829 33.088 36.241 34.359 36.241 36.9 C 36.241 36.955 36.236 37.354 36.226 38.097 C 36.196 40.663 36.181 42.259 36.181 42.886 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 39.317 35.642 C 38.994 35.642 38.714 35.533 38.476 35.316 C 38.239 35.099 38.12 34.834 38.12 34.52 C 38.12 34.207 38.239 33.942 38.476 33.725 C 38.714 33.508 38.994 33.399 39.317 33.399 C 39.641 33.399 39.92 33.508 40.155 33.725 C 40.39 33.942 40.507 34.207 40.507 34.52 C 40.507 34.834 40.39 35.099 40.155 35.316 C 39.92 35.533 39.641 35.642 39.317 35.642 Z  M 39.961 41.196 C 39.961 41.484 39.97 41.946 39.988 42.583 C 40.006 43.219 40.015 43.681 40.015 43.969 C 40.015 44.262 39.916 44.504 39.719 44.693 C 39.522 44.882 39.272 44.977 38.969 44.977 C 38.666 44.977 38.416 44.882 38.219 44.693 C 38.022 44.504 37.923 44.262 37.923 43.969 C 37.923 43.681 37.914 43.219 37.897 42.583 C 37.879 41.946 37.87 41.484 37.87 41.196 C 37.87 40.746 37.895 40.183 37.946 39.506 C 37.996 38.829 38.022 38.266 38.022 37.817 C 38.022 37.524 38.12 37.282 38.317 37.093 C 38.514 36.904 38.764 36.809 39.067 36.809 C 39.371 36.809 39.621 36.904 39.818 37.093 C 40.015 37.282 40.113 37.524 40.113 37.817 C 40.113 38.266 40.088 38.829 40.037 39.506 C 39.987 40.183 39.961 40.746 39.961 41.196 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 51.631 38.074 C 51.1 40.054 50.567 41.853 50.032 43.469 C 49.88 43.924 49.633 44.391 49.289 44.871 C 49.047 45.204 48.724 45.368 48.319 45.363 C 47.683 45.353 47.183 44.74 46.819 43.522 C 46.683 43.058 46.521 42.191 46.334 40.923 C 46.228 41.146 46.162 41.294 46.137 41.37 C 45.874 41.997 45.49 42.969 44.986 44.288 C 44.91 44.5 44.796 44.669 44.644 44.795 C 44.432 45.134 44.116 45.311 43.697 45.326 C 43.46 45.336 43.21 45.124 42.947 44.689 C 42.669 44.249 42.444 43.684 42.273 42.992 C 42.116 42.365 41.874 41.001 41.545 38.9 C 41.475 38.446 41.439 38.09 41.439 37.832 C 41.439 37.554 41.544 37.323 41.754 37.139 C 41.963 36.954 42.214 36.862 42.508 36.862 C 43.053 36.862 43.389 37.132 43.515 37.673 C 43.581 37.955 43.637 38.304 43.682 38.718 C 43.743 39.314 43.78 39.665 43.796 39.771 C 43.861 40.165 43.962 40.81 44.099 41.704 C 44.473 40.678 44.902 39.403 45.387 37.877 C 45.594 37.221 45.983 36.892 46.554 36.892 C 47.115 36.892 47.483 37.259 47.66 37.991 C 47.787 38.506 47.92 39.175 48.062 39.999 C 48.269 41.196 48.395 41.908 48.441 42.136 C 48.486 41.979 48.883 40.443 49.63 37.529 C 49.741 37.094 50.057 36.877 50.578 36.877 C 50.866 36.877 51.119 36.971 51.339 37.157 C 51.559 37.344 51.669 37.577 51.669 37.855 C 51.669 37.905 51.656 37.978 51.631 38.074 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 57.215 40.052 C 57.215 39.89 57.227 39.705 57.249 39.495 C 57.272 39.285 57.306 39.051 57.352 38.794 C 57.251 38.744 57.161 38.707 57.083 38.684 C 57.005 38.661 56.937 38.65 56.882 38.65 C 56.195 38.65 55.594 38.919 55.079 39.457 C 54.563 39.995 54.306 40.618 54.306 41.325 C 54.306 42.002 54.427 42.51 54.67 42.852 C 54.912 43.193 55.276 43.363 55.76 43.363 C 56.074 43.363 56.371 43.311 56.651 43.208 C 56.931 43.104 57.195 42.951 57.443 42.749 C 57.291 41.547 57.215 40.648 57.215 40.052 Z  M 59.095 45.167 C 58.862 45.167 58.493 44.942 57.988 44.492 C 57.524 44.715 57.114 44.883 56.761 44.996 C 56.407 45.11 56.107 45.167 55.859 45.167 C 54.642 45.167 53.729 44.841 53.12 44.189 C 52.511 43.537 52.207 42.562 52.207 41.264 C 52.207 40.047 52.656 39.005 53.556 38.139 C 54.455 37.272 55.531 36.839 56.784 36.839 C 57.263 36.839 57.819 36.974 58.451 37.244 C 59.213 37.569 59.595 37.947 59.595 38.377 C 59.595 38.557 59.537 38.715 59.42 38.85 C 59.37 39.05 59.331 39.301 59.303 39.604 C 59.275 39.906 59.261 40.26 59.261 40.665 C 59.261 41.62 59.33 42.308 59.466 42.728 C 59.481 42.773 59.597 43.033 59.814 43.508 C 60.011 43.939 60.11 44.184 60.11 44.244 C 60.11 44.509 60.008 44.729 59.803 44.904 C 59.598 45.079 59.362 45.167 59.095 45.167 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 54.127 31.918 C 53.965 31.918 53.8 31.956 53.632 32.032 C 53.464 32.108 53.295 32.222 53.125 32.374 C 53.156 32.906 53.171 33.439 53.171 33.973 C 53.401 34.048 53.631 34.085 53.86 34.085 C 54.126 34.085 54.33 33.991 54.472 33.802 C 54.601 33.632 54.665 33.403 54.665 33.114 C 54.665 32.765 54.65 32.524 54.619 32.39 C 54.544 32.075 54.38 31.918 54.127 31.918 Z  M 53.86 35.119 C 53.638 35.119 53.405 35.093 53.159 35.041 L 53.156 36.62 C 53.156 36.77 53.105 36.894 53.005 36.992 C 52.904 37.09 52.776 37.139 52.622 37.139 C 52.467 37.139 52.339 37.09 52.238 36.992 C 52.138 36.894 52.088 36.77 52.088 36.62 C 52.088 36.499 52.09 36.018 52.095 35.176 C 52.1 34.552 52.1 34.042 52.095 33.648 C 52.088 33.09 52.07 32.611 52.041 32.208 C 52.002 31.653 51.983 31.399 51.983 31.445 C 51.983 31.231 52.031 31.048 52.126 30.896 C 52.237 30.723 52.387 30.636 52.575 30.636 C 52.72 30.636 52.841 30.685 52.939 30.784 C 53.037 30.882 53.086 30.999 53.086 31.136 L 53.082 31.174 C 53.255 31.076 53.429 31.003 53.603 30.956 C 53.777 30.908 53.952 30.884 54.127 30.884 C 54.721 30.884 55.154 31.136 55.428 31.639 C 55.632 32.018 55.733 32.51 55.733 33.114 C 55.733 33.679 55.572 34.147 55.25 34.519 C 54.904 34.918 54.441 35.119 53.86 35.119 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 59.554 32.099 C 59.531 32.494 59.351 32.692 59.016 32.692 C 58.691 32.692 58.528 32.524 58.528 32.189 L 58.509 31.798 C 57.928 31.89 57.513 32.189 57.262 32.692 L 57.266 34.639 C 57.266 34.786 57.216 34.907 57.115 35.004 C 57.015 35.101 56.887 35.15 56.732 35.15 C 56.572 35.15 56.448 35.098 56.36 34.994 C 56.278 34.902 56.237 34.783 56.237 34.639 L 56.237 32.103 C 56.237 32.024 56.239 31.904 56.245 31.745 C 56.249 31.587 56.252 31.467 56.252 31.387 C 56.252 31.243 56.296 31.122 56.382 31.025 C 56.468 30.929 56.591 30.88 56.751 30.88 C 57.038 30.88 57.208 31.027 57.262 31.322 C 57.719 30.981 58.226 30.811 58.784 30.811 C 59.3 30.811 59.558 31.154 59.558 31.84 C 59.558 31.972 59.556 32.058 59.554 32.099 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n            <path\r\n              d=\" M 61.946 31.898 C 61.628 31.896 61.378 32.04 61.195 32.332 C 61.04 32.577 60.963 32.863 60.963 33.191 C 60.963 33.5 61.05 33.738 61.226 33.903 C 61.365 34.035 61.528 34.1 61.714 34.1 C 61.938 34.1 62.133 34.024 62.298 33.872 C 62.487 33.694 62.587 33.453 62.6 33.148 C 62.634 32.318 62.415 31.901 61.946 31.898 Z  M 61.714 35.118 C 61.236 35.118 60.826 34.955 60.483 34.627 C 60.106 34.268 59.909 33.79 59.89 33.191 C 59.873 32.621 60.028 32.112 60.359 31.666 C 60.751 31.139 61.297 30.876 61.996 30.876 C 62.512 30.876 62.922 31.083 63.227 31.496 C 63.501 31.867 63.637 32.328 63.637 32.877 C 63.637 33.476 63.477 33.987 63.157 34.41 C 62.799 34.882 62.317 35.118 61.714 35.118 Z \"\r\n              fill=\"rgb(255,255,255)\" />\r\n          </g>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n    <svg id=\"sky\" alt=\"Sky\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      style=\"isolation:isolate\" viewBox=\"0 0 80 80\" width=\"80pt\" height=\"80pt\">\r\n      <defs>\r\n        <clipPath id=\"_clipPath_QC0p9cNzzv42tNDhldXIv2IchmC47l8D\">\r\n          <rect width=\"80\" height=\"80\" />\r\n        </clipPath>\r\n      </defs>\r\n      <g clip-path=\"url(#_clipPath_QC0p9cNzzv42tNDhldXIv2IchmC47l8D)\">\r\n        <path\r\n          d=\" M 11.662 5.492 L 8.317 6.745 L 7.452 10.211 L 5.226 7.416 L 1.662 7.665 L 3.633 4.685 L 2.295 1.372 L 5.738 2.325 L 8.476 0.029 L 8.633 3.598 L 11.662 5.492 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 71.744 69.463 L 68.398 70.716 L 67.533 74.182 L 65.308 71.387 L 61.744 71.635 L 63.715 68.655 L 62.377 65.343 L 65.82 66.296 L 68.557 64 L 68.715 67.569 L 71.744 69.463 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 21.662 21.807 L 18.317 23.06 L 17.452 26.526 L 15.226 23.731 L 11.662 23.98 L 13.633 21 L 12.295 17.687 L 15.738 18.64 L 18.476 16.344 L 18.633 19.913 L 21.662 21.807 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 30.748 78.078 L 27.383 76.977 L 24.568 79.125 L 24.575 75.584 L 21.662 73.571 L 25.032 72.483 L 26.047 69.091 L 28.122 71.96 L 31.662 71.877 L 29.575 74.737 L 30.748 78.078 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 54.385 11.399 L 51.419 9.539 L 48.205 10.927 L 49.058 7.531 L 46.744 4.903 L 50.237 4.665 L 52.022 1.653 L 53.328 4.901 L 56.744 5.667 L 54.058 7.913 L 54.385 11.399 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 76.744 13.326 L 73.228 13.403 L 71.298 16.344 L 70.137 13.024 L 66.744 12.098 L 69.543 9.968 L 69.376 6.454 L 72.266 8.458 L 75.556 7.213 L 74.543 10.582 L 76.744 13.326 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 11.662 69.463 L 8.317 70.716 L 7.452 74.182 L 5.226 71.387 L 1.662 71.635 L 3.633 68.655 L 2.295 65.343 L 5.738 66.296 L 8.476 64 L 8.633 67.569 L 11.662 69.463 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n        <path\r\n          d=\" M 66.744 51.281 L 63.398 52.534 L 62.533 56 L 60.308 53.205 L 56.744 53.453 L 58.715 50.473 L 57.377 47.161 L 60.82 48.114 L 63.557 45.818 L 63.715 49.387 L 66.744 51.281 Z \"\r\n          fill=\"rgb(255,0,255)\" />\r\n      </g>\r\n    </svg>\r\n\r\n    <span>{{ title }} app demo is running!</span>\r\n\r\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\"\r\n      viewBox=\"0 0 516.119 1083.632\">\r\n      <path id=\"Path_40\" data-name=\"Path 40\"\r\n        d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\"\r\n        transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\" />\r\n    </svg>\r\n\r\n  </div>\r\n\r\n  <!-- Terminal -->\r\n  <div class=\"terminal\">\r\n    <pre>npm i @nw-widget/nw-widget</pre>\r\n    <pre># OR</pre>\r\n    <pre>npm i @nw-widget/nw-widget --save</pre>\r\n  </div>\r\n\r\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\"\r\n    viewBox=\"0 0 2611.084 485.677\">\r\n    <path id=\"Path_39\" data-name=\"Path 39\"\r\n      d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\"\r\n      transform=\"translate(142.69 -634.312)\" fill=\"#eee\" />\r\n  </svg>\r\n\r\n</div>\r\n\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/views/timeline/timeline.component.html":
/*!***********************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/views/timeline/timeline.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div id=\"accordion\" class=\"m-5\">\r\n        <div class=\"card m-3\">\r\n            <div class=\"card-header\">\r\n                <a class=\"collapsed card-link\" data-toggle=\"collapse\"\r\n                    (click)=\"$event.preventDefault(); showAccordion = showAccordion === 1 ? 0: 1;\">\r\n                    Here is timeline presentation\r\n                </a>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"collapse\" [class.show]=\"showAccordion === 1\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                    <nw-timeline [source]=\"timelineSource | async\">\r\n                        <!-- <ng-template #singleTemplateRef let-events=\"event\" let-time=\"time\">\r\n                            {{events | json}}\r\n                        </ng-template>\r\n                        <ng-template #multipleTemplateRef let-events=\"event\" let-time=\"time\">\r\n                            {{events | json}}\r\n                        </ng-template> -->\r\n                    </nw-timeline>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card m-3\">\r\n            <div class=\"card-header\">\r\n                <a class=\"card-link\" data-toggle=\"collapse\"\r\n                    (click)=\"$event.preventDefault(); showAccordion = showAccordion === 2 ? 0: 2;\">\r\n                    And here is timeline source input from outline component\r\n                </a>\r\n            </div>\r\n            <div id=\"collapseOne\" class=\"collapse\" [class.show]=\"showAccordion === 2\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                    <pre>{{timelineSource | async | json}}</pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/views/views.component.html":
/*!***********************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/views/views.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-3\">\r\n            <app-navigation></app-navigation>\r\n        </div>\r\n        <div class=\"col-12 col-lg-9\"><router-outlet></router-outlet></div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../src/lib/nw-timeline/nw-timeline.component.scss":
/*!*********************************************************!*\
  !*** ../src/lib/nw-timeline/nw-timeline.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Timeline */\n.timeline {\n  list-style: none;\n  padding: 0;\n  position: relative;\n}\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #6c7293;\n  left: 50%;\n  margin-left: -1.5px;\n}\n.timeline .timeline-wrapper {\n  display: block;\n  margin-bottom: 20px;\n  position: relative;\n  width: 100%;\n  padding-right: 90px;\n}\n.timeline .timeline-wrapper:before {\n  content: \" \";\n  display: table;\n}\n.timeline .timeline-wrapper:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n.timeline .timeline-wrapper .timeline-panel {\n  border-radius: 2px;\n  padding: 20px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 6px;\n  box-shadow: 1px 2px 35px 0 rgba(1, 1, 1, 0.1);\n  width: 35%;\n  margin-left: 15%;\n}\n.timeline .timeline-wrapper .timeline-panel:before {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 2px;\n  content: \"\";\n  left: 0;\n  right: 0;\n}\n.timeline .timeline-wrapper .timeline-panel:after {\n  position: absolute;\n  top: 10px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #ffffff;\n  border-right: 0 solid #ffffff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-title {\n  margin-top: 0;\n  color: #001737;\n  text-transform: uppercase;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-body p + p {\n  margin-top: 5px;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-body ul {\n  margin-bottom: 0;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-footer span {\n  font-size: 0.6875rem;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-footer i {\n  font-size: 1.5rem;\n}\n.timeline .timeline-wrapper .timeline-badge {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 16px;\n  left: calc(50% - 15px);\n  z-index: 10;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border: 2px solid #ffffff;\n  text-align: center;\n  vertical-align: middle;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  display: flex;\n}\n.timeline .timeline-wrapper .timeline-badge i {\n  color: #ffffff;\n  cursor: pointer;\n}\n.timeline .timeline-wrapper.timeline-inverted {\n  padding-right: 0;\n  padding-left: 90px;\n}\n.timeline .timeline-wrapper.timeline-inverted .timeline-panel {\n  margin-left: auto;\n  margin-right: 15%;\n}\n.timeline .timeline-wrapper.timeline-inverted .timeline-panel:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n@media (max-width: 767px) {\n  .timeline .timeline-wrapper {\n    padding-right: 150px;\n  }\n\n  .timeline .timeline-wrapper.timeline-inverted {\n    padding-left: 150px;\n  }\n\n  .timeline .timeline-wrapper .timeline-panel {\n    width: 60%;\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n@media (max-width: 576px) {\n  .timeline .timeline-wrapper .timeline-panel {\n    width: 68%;\n  }\n}\n.timeline-wrapper-primary .timeline-panel:before {\n  background: #464dee;\n}\n.timeline-wrapper-primary .timeline-badge {\n  background: #464dee;\n}\n.timeline-wrapper-secondary .timeline-panel:before {\n  background: #6c7293;\n}\n.timeline-wrapper-secondary .timeline-badge {\n  background: #6c7293;\n}\n.timeline-wrapper-success .timeline-panel:before {\n  background: #0ddbb9;\n}\n.timeline-wrapper-success .timeline-badge {\n  background: #0ddbb9;\n}\n.timeline-wrapper-info .timeline-panel:before {\n  background: #0ad7f7;\n}\n.timeline-wrapper-info .timeline-badge {\n  background: #0ad7f7;\n}\n.timeline-wrapper-warning .timeline-panel:before {\n  background: #fcd539;\n}\n.timeline-wrapper-warning .timeline-badge {\n  background: #fcd539;\n}\n.timeline-wrapper-danger .timeline-panel:before {\n  background: #ef5958;\n}\n.timeline-wrapper-danger .timeline-badge {\n  background: #ef5958;\n}\n.timeline-wrapper-light .timeline-panel:before {\n  background: #eaeaea;\n}\n.timeline-wrapper-light .timeline-badge {\n  background: #eaeaea;\n}\n.timeline-wrapper-dark .timeline-panel:before {\n  background: #001737;\n}\n.timeline-wrapper-dark .timeline-badge {\n  background: #001737;\n}\n/* Cards */\n.card {\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  -ms-box-shadow: none;\n}\n.card .card-body {\n  padding: 1.75rem 1.75rem;\n}\n.card .card-body + .card-body {\n  padding-top: 1rem;\n}\n.card .card-title {\n  color: #001737;\n  margin-bottom: 0.5rem;\n  text-transform: capitalize;\n  font-size: 0.875rem;\n}\n.card .card-subtitle {\n  font-weight: 400;\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.card .card-description {\n  margin-bottom: 0.875rem;\n  font-weight: 400;\n  color: #76838f;\n}\n.card.card-outline-success {\n  border: 1px solid #0ddbb9;\n}\n.card.card-outline-primary {\n  border: 1px solid #464dee;\n}\n.card.card-outline-warning {\n  border: 1px solid #fcd539;\n}\n.card.card-outline-danger {\n  border: 1px solid #ef5958;\n}\n.card.card-rounded {\n  border-radius: 5px;\n}\n.card.card-faded {\n  background: #b5b0b2;\n  border-color: #b5b0b2;\n}\n.card.card-circle-progress {\n  color: #ffffff;\n  text-align: center;\n}\n.card.card-img-holder {\n  position: relative;\n}\n.card.card-img-holder .card-img-absolute {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n}\n.card.card-weather .weather-daily .weather-day {\n  opacity: 0.5;\n  font-weight: 900;\n}\n.card.card-weather .weather-daily i {\n  font-size: 20px;\n}\n.card.card-weather .weather-daily .weather-temp {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n  opacity: 0.5;\n  font-size: 0.75rem;\n}\n.card-inverse-primary {\n  background: rgba(70, 77, 238, 0.2);\n  border: 1px solid #4047db;\n  color: #353bb5;\n}\n.card-inverse-secondary {\n  background: rgba(108, 114, 147, 0.2);\n  border: 1px solid #636987;\n  color: #525770;\n}\n.card-inverse-success {\n  background: rgba(13, 219, 185, 0.2);\n  border: 1px solid #0cc9aa;\n  color: #0aa68d;\n}\n.card-inverse-info {\n  background: rgba(10, 215, 247, 0.2);\n  border: 1px solid #09c6e3;\n  color: #08a3bc;\n}\n.card-inverse-warning {\n  background: rgba(252, 213, 57, 0.2);\n  border: 1px solid #e8c434;\n  color: #c0a22b;\n}\n.card-inverse-danger {\n  background: rgba(239, 89, 88, 0.2);\n  border: 1px solid #dc5251;\n  color: #b64443;\n}\n.card-inverse-light {\n  background: rgba(234, 234, 234, 0.2);\n  border: 1px solid #d7d7d7;\n  color: #b2b2b2;\n}\n.card-inverse-dark {\n  background: rgba(0, 23, 55, 0.2);\n  border: 1px solid #001533;\n  color: #00112a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9saWIvbnctdGltZWxpbmUvRjpcXFNvdXJjZVxcQW5ndWxhclxcbmV3IHByb2plY3RcXG53LXdpZGdldC9zcmNcXGxpYlxcbnctdGltZWxpbmVcXG53LXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2xpYi9udy10aW1lbGluZS9udy10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxvQkFBQTtBQ0NGO0FERUE7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0U7SUFDRSxvQkFBQTtFQ0NGOztFRENBO0lBQ0UsbUJBQUE7RUNFRjs7RURBQTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFO0lBQ0UsVUFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQSxVQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FERUE7RUFDRSx3QkFBQTtBQ0NGO0FERUE7RUFDRSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0NGO0FERUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2xpYi9udy10aW1lbGluZS9udy10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRpbWVsaW5lICovXHJcbi50aW1lbGluZSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgd2lkdGg6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3MjkzO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTEuNXB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzNXB4IDAgcmdiYSgxLCAxLCAxLCAwLjEpO1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAtMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMTRweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiAjMDAxNzM3O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWJvZHkgcCArIHAge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCAudGltZWxpbmUtYm9keSB1bCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCAudGltZWxpbmUtZm9vdGVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIC50aW1lbGluZS1mb290ZXIgaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1iYWRnZSBpIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlci50aW1lbGluZS1pbnZlcnRlZCB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlci50aW1lbGluZS1pbnZlcnRlZCAudGltZWxpbmUtcGFuZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIudGltZWxpbmUtaW52ZXJ0ZWQgLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcclxuICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XHJcbiAgbGVmdDogLTE0cHg7XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyLnRpbWVsaW5lLWludmVydGVkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbiAgfVxyXG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICB3aWR0aDogNjglO1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItcHJpbWFyeSAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjNDY0ZGVlO1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1wcmltYXJ5IC50aW1lbGluZS1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogIzQ2NGRlZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItc2Vjb25kYXJ5IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICM2YzcyOTM7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXNlY29uZGFyeSAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICM2YzcyOTM7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXN1Y2Nlc3MgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzBkZGJiOTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItc3VjY2VzcyAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICMwZGRiYjk7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLWluZm8gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzBhZDdmNztcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItaW5mbyAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICMwYWQ3Zjc7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXdhcm5pbmcgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZjZDUzOTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItd2FybmluZyAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNmY2Q1Mzk7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLWRhbmdlciAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWY1OTU4O1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1kYW5nZXIgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWY1OTU4O1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1saWdodCAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1saWdodCAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLWRhcmsgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwMTczNztcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItZGFyayAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICMwMDE3Mzc7XHJcbn1cclxuXHJcbi8qIENhcmRzICovXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLW1zLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDEuNzVyZW0gMS43NXJlbTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYm9keSArIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC10aXRsZSB7XHJcbiAgY29sb3I6ICMwMDE3Mzc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLXN1YnRpdGxlIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzc2ODM4ZjtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1vdXRsaW5lLXN1Y2Nlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZGRiYjk7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtb3V0bGluZS1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0ZGVlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLW91dGxpbmUtd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZDUzOTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1vdXRsaW5lLWRhbmdlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmNTk1ODtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1yb3VuZGVkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtZmFkZWQge1xyXG4gIGJhY2tncm91bmQ6ICNiNWIwYjI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYjViMGIyO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLWNpcmNsZS1wcm9ncmVzcyB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLWltZy1ob2xkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1pbWctaG9sZGVyIC5jYXJkLWltZy1hYnNvbHV0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtd2VhdGhlciAud2VhdGhlci1kYWlseSAud2VhdGhlci1kYXkge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXdlYXRoZXIgLndlYXRoZXItZGFpbHkgaSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXdlYXRoZXIgLndlYXRoZXItZGFpbHkgLndlYXRoZXItdGVtcCB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZS1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDcwLCA3NywgMjM4LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MDQ3ZGI7XHJcbiAgY29sb3I6ICMzNTNiYjU7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2Utc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE0LCAxNDcsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzYzNjk4NztcclxuICBjb2xvcjogIzUyNTc3MDtcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZS1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAyMTksIDE4NSwgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGNjOWFhO1xyXG4gIGNvbG9yOiAjMGFhNjhkO1xyXG59XHJcblxyXG4uY2FyZC1pbnZlcnNlLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsIDIxNSwgMjQ3LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWM2ZTM7XHJcbiAgY29sb3I6ICMwOGEzYmM7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2Utd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDIxMywgNTcsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4YzQzNDtcclxuICBjb2xvcjogI2MwYTIyYjtcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZS1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA4OSwgODgsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjNTI1MTtcclxuICBjb2xvcjogI2I2NDQ0MztcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZS1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDIzNCwgMjM0LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XHJcbiAgY29sb3I6ICNiMmIyYjI7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAyMywgNTUsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMTUzMztcclxuICBjb2xvcjogIzAwMTEyYTtcclxufVxyXG4iLCIvKiBUaW1lbGluZSAqL1xuLnRpbWVsaW5lIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGltZWxpbmU6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzcyOTM7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDM1cHggMCByZ2JhKDEsIDEsIDEsIDAuMSk7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IC0xNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmZmZmY7XG4gIGJvcmRlci1yaWdodDogMCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCAudGltZWxpbmUtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzAwMTczNztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCAudGltZWxpbmUtYm9keSBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCAudGltZWxpbmUtYm9keSB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWZvb3RlciBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjY4NzVyZW07XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWZvb3RlciBpIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtYmFkZ2Uge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcbiAgei1pbmRleDogMTA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1iYWRnZSBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyLnRpbWVsaW5lLWludmVydGVkIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIudGltZWxpbmUtaW52ZXJ0ZWQgLnRpbWVsaW5lLXBhbmVsIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTUlO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIudGltZWxpbmUtaW52ZXJ0ZWQgLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcbiAgbGVmdDogLTE0cHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlci50aW1lbGluZS1pbnZlcnRlZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbiAgfVxuXG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCB7XG4gICAgd2lkdGg6IDY4JTtcbiAgfVxufVxuLnRpbWVsaW5lLXdyYXBwZXItcHJpbWFyeSAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzQ2NGRlZTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItcHJpbWFyeSAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjNDY0ZGVlO1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1zZWNvbmRhcnkgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM2YzcyOTM7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLXNlY29uZGFyeSAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjNmM3MjkzO1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1zdWNjZXNzIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMGRkYmI5O1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1zdWNjZXNzIC50aW1lbGluZS1iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICMwZGRiYjk7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLWluZm8gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwYWQ3Zjc7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLWluZm8gLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzBhZDdmNztcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItd2FybmluZyAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZjZDUzOTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItd2FybmluZyAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmNkNTM5O1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1kYW5nZXIgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNlZjU5NTg7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLWRhbmdlciAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZWY1OTU4O1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1saWdodCAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItbGlnaHQgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItZGFyayAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzAwMTczNztcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItZGFyayAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMDAxNzM3O1xufVxuXG4vKiBDYXJkcyAqL1xuLmNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLW1zLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjc1cmVtIDEuNzVyZW07XG59XG5cbi5jYXJkIC5jYXJkLWJvZHkgKyAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICMwMDE3Mzc7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5jYXJkIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xufVxuXG4uY2FyZCAuY2FyZC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzc2ODM4Zjtcbn1cblxuLmNhcmQuY2FyZC1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGRkYmI5O1xufVxuXG4uY2FyZC5jYXJkLW91dGxpbmUtcHJpbWFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjRkZWU7XG59XG5cbi5jYXJkLmNhcmQtb3V0bGluZS13YXJuaW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZjZDUzOTtcbn1cblxuLmNhcmQuY2FyZC1vdXRsaW5lLWRhbmdlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZjU5NTg7XG59XG5cbi5jYXJkLmNhcmQtcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNhcmQuY2FyZC1mYWRlZCB7XG4gIGJhY2tncm91bmQ6ICNiNWIwYjI7XG4gIGJvcmRlci1jb2xvcjogI2I1YjBiMjtcbn1cblxuLmNhcmQuY2FyZC1jaXJjbGUtcHJvZ3Jlc3Mge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC5jYXJkLWltZy1ob2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQtaW1nLWhvbGRlciAuY2FyZC1pbWctYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQuY2FyZC13ZWF0aGVyIC53ZWF0aGVyLWRhaWx5IC53ZWF0aGVyLWRheSB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNhcmQuY2FyZC13ZWF0aGVyIC53ZWF0aGVyLWRhaWx5IGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkLmNhcmQtd2VhdGhlciAud2VhdGhlci1kYWlseSAud2VhdGhlci10ZW1wIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLmNhcmQtaW52ZXJzZS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSg3MCwgNzcsIDIzOCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQwNDdkYjtcbiAgY29sb3I6ICMzNTNiYjU7XG59XG5cbi5jYXJkLWludmVyc2Utc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDExNCwgMTQ3LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjM2OTg3O1xuICBjb2xvcjogIzUyNTc3MDtcbn1cblxuLmNhcmQtaW52ZXJzZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgMjE5LCAxODUsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwY2M5YWE7XG4gIGNvbG9yOiAjMGFhNjhkO1xufVxuXG4uY2FyZC1pbnZlcnNlLWluZm8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMTUsIDI0NywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA5YzZlMztcbiAgY29sb3I6ICMwOGEzYmM7XG59XG5cbi5jYXJkLWludmVyc2Utd2FybmluZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyMTMsIDU3LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThjNDM0O1xuICBjb2xvcjogI2MwYTIyYjtcbn1cblxuLmNhcmQtaW52ZXJzZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgODksIDg4LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGM1MjUxO1xuICBjb2xvcjogI2I2NDQ0Mztcbn1cblxuLmNhcmQtaW52ZXJzZS1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDdkNztcbiAgY29sb3I6ICNiMmIyYjI7XG59XG5cbi5jYXJkLWludmVyc2UtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjMsIDU1LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAxNTMzO1xuICBjb2xvcjogIzAwMTEyYTtcbn0iXX0= */"

/***/ }),

/***/ "../src/lib/nw-timeline/nw-timeline.component.ts":
/*!*******************************************************!*\
  !*** ../src/lib/nw-timeline/nw-timeline.component.ts ***!
  \*******************************************************/
/*! exports provided: NwTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwTimelineComponent", function() { return NwTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let NwTimelineComponent = class NwTimelineComponent {
    constructor() {
        this.isTwoColumn = true;
        this.showAccordion = 1;
        this.isMultitlePanel = (item) => item && item.events && item.events instanceof Array;
        this.getObjectkeys = obj => Object.keys(obj);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NwTimelineComponent.prototype, "source", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NwTimelineComponent.prototype, "isTwoColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('singleTemplateRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: false })
], NwTimelineComponent.prototype, "singleEventTemplateRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('multipleTemplateRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: false })
], NwTimelineComponent.prototype, "multipleEventsTemplateRef", void 0);
NwTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nw-timeline',
        exportAs: 'nwTimeline',
        template: __webpack_require__(/*! raw-loader!./nw-timeline.component.html */ "../node_modules/raw-loader/index.js!../src/lib/nw-timeline/nw-timeline.component.html"),
        styles: [__webpack_require__(/*! ./nw-timeline.component.scss */ "../src/lib/nw-timeline/nw-timeline.component.scss")]
    })
], NwTimelineComponent);



/***/ }),

/***/ "../src/lib/nw-timeline/nw-timeline.module.ts":
/*!****************************************************!*\
  !*** ../src/lib/nw-timeline/nw-timeline.module.ts ***!
  \****************************************************/
/*! exports provided: NwTimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwTimelineModule", function() { return NwTimelineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _nw_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nw-timeline.component */ "../src/lib/nw-timeline/nw-timeline.component.ts");




let NwTimelineModule = class NwTimelineModule {
};
NwTimelineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_nw_timeline_component__WEBPACK_IMPORTED_MODULE_3__["NwTimelineComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_nw_timeline_component__WEBPACK_IMPORTED_MODULE_3__["NwTimelineComponent"]]
    })
], NwTimelineModule);



/***/ }),

/***/ "../src/lib/nw-widget.module.ts":
/*!**************************************!*\
  !*** ../src/lib/nw-widget.module.ts ***!
  \**************************************/
/*! exports provided: NwWidgetModule, NwTimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NwWidgetModule", function() { return NwWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nw_timeline_nw_timeline_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nw-timeline/nw-timeline.module */ "../src/lib/nw-timeline/nw-timeline.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NwTimelineModule", function() { return _nw_timeline_nw_timeline_module__WEBPACK_IMPORTED_MODULE_2__["NwTimelineModule"]; });





const NW_WIDGET_MODULE = [_nw_timeline_nw_timeline_module__WEBPACK_IMPORTED_MODULE_2__["NwTimelineModule"]];
let NwWidgetModule = class NwWidgetModule {
};
NwWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: NW_WIDGET_MODULE,
        exports: NW_WIDGET_MODULE
    })
], NwWidgetModule);



/***/ }),

/***/ "../src/public-api.ts":
/*!****************************!*\
  !*** ../src/public-api.ts ***!
  \****************************/
/*! exports provided: NwWidgetModule, NwTimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_nw_widget_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/nw-widget.module */ "../src/lib/nw-widget.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NwWidgetModule", function() { return _lib_nw_widget_module__WEBPACK_IMPORTED_MODULE_0__["NwWidgetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NwTimelineModule", function() { return _lib_nw_widget_module__WEBPACK_IMPORTED_MODULE_0__["NwTimelineModule"]; });

/*
 * Public API Surface of nw-widgets
 */



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/views.module": "./src/app/views/views.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: './views/views.module#ViewsModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/seo.service */ "./src/app/core/services/seo.service.ts");






let AppComponent = class AppComponent {
    constructor(router, activatedRoute, seoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.seoService = seoService;
        this.title = 'demo';
    }
    ngOnInit() {
        this.subRouter = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((route) => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((route) => route.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            const og = {
                url: event.url || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.url,
                type: event.type || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.type,
                title: event.title || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.title,
                image: event.image || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.image,
                description: event.description || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.description,
                keywords: event.keywords || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.keywords,
                site_name: event.site_name || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.site_name,
                email: event.email || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.email,
                phone_number: event.phone_number || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.phone_number,
            };
            const tw = {
                card: event.card || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.card,
                site: event.site || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.site,
                title: event.title || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.title,
                description: event.description || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.description,
                image: event.image || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.image,
            };
            this.seoService.updateTitle(`♥ Hữu Đại ♥ - ♦ Nw-Widgets ♦ - ○ ${og.title}`);
            this.seoService.updateMetaOrganizationTag(og);
            this.seoService.updateMetaTwitterTag(tw);
        })).subscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _views_views_module__WEBPACK_IMPORTED_MODULE_6__["ViewsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/services/seo.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/seo.service.ts ***!
  \**********************************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SeoService = class SeoService {
    constructor(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    updateTitle(title) {
        this.title.setTitle(title);
    }
    updateMetaOrganizationTag(og) {
        Object.keys(og).forEach(key => this.meta.updateTag({
            property: `og:${key}`,
            content: og[key]
        }));
    }
    updateMetaTwitterTag(tw) {
        Object.keys(tw).forEach(key => this.meta.updateTag({
            property: `twitter:${key}`,
            content: tw[key]
        }));
    }
};
SeoService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SeoService);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  padding: 1rem;\n  margin-bottom: 0;\n  background: none;\n  width: 50%;\n  margin: auto;\n  text-align: end;\n}\n\n.lead {\n  font-size: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2FwcC9sYXlvdXQvZm9vdGVyL0Y6XFxTb3VyY2VcXEFuZ3VsYXJcXG5ldyBwcm9qZWN0XFxudy13aWRnZXQvZGVtb1xcc3JjXFxhcHBcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJkZW1vL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5sZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn0iLCIuanVtYm90cm9uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5sZWFkIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "../node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar .navbar-brand {\n  margin: auto;\n}\n.navbar .navbar-collapse .navbar-nav {\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.navbar .navbar-collapse .navbar-nav .nav-item {\n  padding: 0.5rem 1rem;\n}\n.navbar .navbar-collapse .form-inline {\n  display: none;\n}\n@media (min-width: 992px) {\n  .navbar .navbar-collapse .form-inline {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2FwcC9sYXlvdXQvaGVhZGVyL0Y6XFxTb3VyY2VcXEFuZ3VsYXJcXG5ldyBwcm9qZWN0XFxudy13aWRnZXQvZGVtb1xcc3JjXFxhcHBcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJkZW1vL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FDQVI7QURHUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RaO0FERVk7RUFDSSxvQkFBQTtBQ0FoQjtBREdRO0VBQ0ksYUFBQTtBQ0RaO0FER1E7RUFDSTtJQUNJLGFBQUE7RUNEZDtBQUNGIiwiZmlsZSI6ImRlbW8vc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWlubGluZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuZm9ybS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5mb3JtLWlubGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/views-routing.module */ "./src/app/views/views-routing.module.ts");



let HeaderComponent = class HeaderComponent {
    constructor() {
        this.routes = _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__["VIEWS_ROUTES"];
        this.navs = [];
        this.getNavFromRoute = (r) => {
            const route = ['/'];
            if (r.path && r.path.length) {
                route.push(r.path);
                if (r.children && r.children.length) {
                    route.push(r.children[0].path);
                }
            }
            this.navs.push({
                name: r.data && r.data.name ? r.data.name : r.path,
                route,
                title: r.data && r.data.title ? r.data.title : r.path
            });
        };
    }
    ngOnInit() {
        this.routes.forEach(r => this.getNavFromRoute(r));
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "../node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.navbar.sidebar {\n  display: flex;\n}\n.navbar.sidebar .navbar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.navbar.sidebar .navbar-nav .nav-item.group-item {\n  font-size: large;\n}\n.navbar.sidebar .navbar-nav .nav-item a {\n  color: #687582;\n}\n.navbar.sidebar .navbar-nav .nav-item:not(.group-item) a::before {\n  content: \"♥\";\n  padding: 0 0.5rem;\n}\n.navbar.sidebar .navbar-nav .nav-item.active a {\n  color: #007bff;\n}\n.navbar.sidebar .navbar-toggler-button {\n  color: red;\n}\n@media (min-width: 992px) {\n  .navbar.sidebar .navbar-toggler.d-flex {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2FwcC9sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiZGVtby9zcmMvYXBwL2xheW91dC9uYXZpZ2F0aW9uL0Y6XFxTb3VyY2VcXEFuZ3VsYXJcXG5ldyBwcm9qZWN0XFxudy13aWRnZXQvZGVtb1xcc3JjXFxhcHBcXGxheW91dFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDWjtFQUNJLGFBQUE7QURDUjtBQ0FRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FERVo7QUNBZ0I7RUFDSSxnQkFBQTtBREVwQjtBQ0FnQjtFQUNJLGNBQUE7QURFcEI7QUNFd0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QURBNUI7QUNLb0I7RUFDSSxjQUFBO0FESHhCO0FDUVE7RUFDSSxVQUFBO0FETlo7QUNRUTtFQUVRO0lBQ0ksd0JBQUE7RURQbEI7QUFDRiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZiYXIuc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2YmFyLnNpZGViYXIgLm5hdmJhci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5ncm91cC1pdGVtIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5uYXZiYXIuc2lkZWJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjNjg3NTgyO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpub3QoLmdyb3VwLWl0ZW0pIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pmlXCI7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItdG9nZ2xlci1idXR0b24ge1xuICBjb2xvcjogcmVkO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXIuc2lkZWJhciAubmF2YmFyLXRvZ2dsZXIuZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIubmF2YmFyIHtcclxuICAgICYuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAmLmdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY4NzU4MjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bm90KC5ncm91cC1pdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn4pmlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci10b2dnbGVyLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgICAgICAgICAgJi5kLWZsZXgge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/views-routing.module */ "./src/app/views/views-routing.module.ts");



let NavigationComponent = class NavigationComponent {
    constructor() {
        this.routes = _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__["VIEWS_ROUTES"];
        this.navs = [];
        this.getNavFromRoute = (r) => {
            if (r.path !== '') {
                const route = ['/', r.path];
                this.navs.push({
                    name: r.data && r.data.name ? r.data.name : r.path,
                    route: r.children && r.children.length ? route.concat(r.children[0].path) : route,
                    title: r.data && r.data.title ? r.data.title : r.path,
                    hasChild: true
                });
                if (r.children && r.children.length) {
                    r.children.forEach(c => {
                        if (!(c.data && c.data.hide))
                            this.navs.push({
                                name: c.data && c.data.name ? c.data.name : c.path,
                                route: route.concat(c.path),
                                title: c.data && c.data.title ? c.data.title : c.path
                            });
                    });
                }
            }
        };
    }
    ngOnInit() {
        this.routes.forEach(r => this.getNavFromRoute(r));
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "../node_modules/raw-loader/index.js!./src/app/layout/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/layout/navigation/navigation.component.scss")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/shared/components/code/code.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/code/code.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.label-cell code,\np.signature,\ncode.selector,\ncode.export-as {\n  text-decoration: line-through;\n}\n\ncode[class*=language-],\npre[class*=language-],\nngb-alert {\n  background-color: #f5f5f5;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb2RlL0Y6XFxTb3VyY2VcXEFuZ3VsYXJcXG5ldyBwcm9qZWN0XFxudy13aWRnZXQvZGVtb1xcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcY29kZVxcY29kZS5jb21wb25lbnQuc2NzcyIsImRlbW8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb2RlL2NvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRSw2QkFBQTtBQ0NGOztBREVBOzs7RUFHRSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoiZGVtby9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvZGUvY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkLmxhYmVsLWNlbGwgY29kZSxcclxucC5zaWduYXR1cmUsXHJcbmNvZGUuc2VsZWN0b3IsXHJcbmNvZGUuZXhwb3J0LWFzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4vLyBvdmVycmlkZSBwcmlzbSB0aGVtZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGlubGluZSBpdCB3aXRoIGJvb3RzdHJhcCBjb2xvcnNcclxuY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXHJcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXHJcbm5nYi1hbGVydCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgLy8gc2FtZSBhcyBib290c3RyYXAgY2FyZCBoZWFkZXJcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuIiwidGQubGFiZWwtY2VsbCBjb2RlLFxucC5zaWduYXR1cmUsXG5jb2RlLnNlbGVjdG9yLFxuY29kZS5leHBvcnQtYXMge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSxcbnByZVtjbGFzcyo9bGFuZ3VhZ2UtXSxcbm5nYi1hbGVydCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/code/code.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/code/code.component.ts ***!
  \**********************************************************/
/*! exports provided: CodeComponent, Snippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snippet", function() { return Snippet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_code_highlight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/code-highlight.service */ "./src/app/shared/services/code-highlight.service.ts");



let CodeComponent = class CodeComponent {
    constructor(_service) {
        this._service = _service;
    }
    ngAfterViewInit() {
        this.codeEl.nativeElement.innerHTML = this._service.highlight(this.snippet.code, this.snippet.lang);
    }
};
CodeComponent.ctorParameters = () => [
    { type: _services_code_highlight_service__WEBPACK_IMPORTED_MODULE_2__["CodeHighlightService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('code', { static: true })
], CodeComponent.prototype, "codeEl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CodeComponent.prototype, "snippet", void 0);
CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'niwa-code',
        template: __webpack_require__(/*! raw-loader!./code.component.html */ "../node_modules/raw-loader/index.js!./src/app/shared/components/code/code.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./code.component.scss */ "./src/app/shared/components/code/code.component.scss")]
    })
], CodeComponent);

function removeEmptyLineAtIndex(lines, index) {
    if (lines[index].trim().length === 0) {
        lines.splice(index, 1);
    }
}
function findIndentLevel(lines) {
    return Math.min(...lines
        .map(line => {
        const result = /( *)[^ ]+/g.exec(line);
        return result == null ? null : result[1].length;
    })
        .filter(value => value != null));
}
function fixIndent(lines) {
    removeEmptyLineAtIndex(lines, 0);
    removeEmptyLineAtIndex(lines, lines.length - 1);
    const indentLevel = findIndentLevel(lines);
    return lines.map(line => line.substring(indentLevel));
}
function Snippet({ lang, code }) {
    return {
        lang,
        code: fixIndent(code.split(/(?:\r\n)|\n|\r/gi)).join('\n'),
    };
}


/***/ }),

/***/ "./src/app/shared/services/code-highlight.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/code-highlight.service.ts ***!
  \***********************************************************/
/*! exports provided: CodeHighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlightService", function() { return CodeHighlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "../node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "../node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-bash */ "../node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_4__);





// Prism tries to highlight the whole document on DOMContentLoad.
// Unfortunately with webpack the only way of disabling it
// is by simply forcing it to highlight no elements -> []
prismjs__WEBPACK_IMPORTED_MODULE_2__["hooks"].add('before-highlightall', (env) => {
    env['elements'] = [];
});
let CodeHighlightService = class CodeHighlightService {
    highlight(code, lang) {
        return prismjs__WEBPACK_IMPORTED_MODULE_2__["highlight"](code.trim(), prismjs__WEBPACK_IMPORTED_MODULE_2__["languages"][lang], lang);
    }
};
CodeHighlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CodeHighlightService);



/***/ }),

/***/ "./src/app/shared/services/timeline.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/timeline.service.ts ***!
  \*****************************************************/
/*! exports provided: TimelineService, TimelineResponse, TimelineEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineService", function() { return TimelineService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineResponse", function() { return TimelineResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineEvent", function() { return TimelineEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let TimelineService = class TimelineService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getTimelineData() {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].FAKE_API}/assets/data/timeline.json`);
    }
};
TimelineService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TimelineService);

class TimelineResponse {
    constructor(id, isActive, time, source) {
        this.id = id;
        this.isActive = isActive;
        this.time = time;
        this.source = source;
    }
}
TimelineResponse.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: Date },
    { type: undefined }
];
class TimelineEvent {
    constructor(name, gender, company, email, phone, address) {
        this.name = name;
        this.gender = gender;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}
TimelineEvent.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nw_widget_nw_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nw-widget/nw-widget */ "../src/public-api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/code/code.component */ "./src/app/shared/components/code/code.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["CodeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _nw_widget_nw_widget__WEBPACK_IMPORTED_MODULE_3__["NwWidgetModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _nw_widget_nw_widget__WEBPACK_IMPORTED_MODULE_3__["NwWidgetModule"],
            _components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["CodeComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/views/getting-started/getting-started.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/getting-started/getting-started.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2FwcC92aWV3cy9nZXR0aW5nLXN0YXJ0ZWQvRjpcXFNvdXJjZVxcQW5ndWxhclxcbmV3IHByb2plY3RcXG53LXdpZGdldC9kZW1vXFxzcmNcXGFwcFxcdmlld3NcXGdldHRpbmctc3RhcnRlZFxcZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwiZGVtby9zcmMvYXBwL3ZpZXdzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6ImRlbW8vc3JjL2FwcC92aWV3cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbn0iLCIuY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/getting-started/getting-started.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/getting-started/getting-started.component.ts ***!
  \********************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/code/code.component */ "./src/app/shared/components/code/code.component.ts");



let GettingStartedComponent = class GettingStartedComponent {
    constructor() {
        this.codeInstall = Object(src_app_shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_2__["Snippet"])({
            lang: 'bash',
            code: `npm install --save @nw-widget/nw-widget`,
        });
        this.codeRoot = Object(src_app_shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_2__["Snippet"])({
            lang: 'typescript',
            code: `
    import { NwWidgetModule } from '@nw-widget/nw-widget';
      @NgModule({
        ...
        imports: [NwWidgetModule, ...],
        ...
      })
      export class YourAppModule {
      }
    `,
        });
        this.codeOther = Object(src_app_shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_2__["Snippet"])({
            lang: 'typescript',
            code: `
    import { NwTimelineModule } from '@nw-widget/nw-widget';
      @NgModule({
        ...
        imports: [NwTimelineModule, ...],
        ...
      })
      export class YourAppModule {
      }
    `,
        });
        this.codeSystem = Object(src_app_shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_2__["Snippet"])({
            lang: 'typescript',
            code: `
      map: {
        '@nw-widget/nw-widget': 'node_modules/@nw-widget/nw-widget/bundles/nw-widget.js',
      }
    `,
        });
    }
};
GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getting-started',
        template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/getting-started/getting-started.component.html"),
        styles: [__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/views/getting-started/getting-started.component.scss")]
    })
], GettingStartedComponent);



/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.title = 'Nw-Widget library ';
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/views/timeline/timeline.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/timeline/timeline.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/timeline/timeline.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/timeline/timeline.component.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/timeline.service */ "./src/app/shared/services/timeline.service.ts");



let TimelineComponent = class TimelineComponent {
    constructor(service) {
        this.service = service;
        this.showAccordion = 1;
    }
    ngOnInit() {
        this.timelineSource = this.service.getTimelineData();
    }
};
TimelineComponent.ctorParameters = () => [
    { type: src_app_shared_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] }
];
TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/timeline/timeline.component.html"),
        styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/views/timeline/timeline.component.scss")]
    })
], TimelineComponent);



/***/ }),

/***/ "./src/app/views/views-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/views-routing.module.ts ***!
  \***********************************************/
/*! exports provided: VIEWS_ROUTES, ViewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWS_ROUTES", function() { return VIEWS_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsRoutingModule", function() { return ViewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/views/timeline/timeline.component.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/views/getting-started/getting-started.component.ts");







const VIEWS_ROUTES = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: {
            name: 'Home',
            title: 'Trang chủ'
        }
    },
    {
        path: 'getting-started',
        component: _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_6__["GettingStartedComponent"],
        data: {
            name: 'Getting started',
            title: 'Lời nói đầu'
        }
    },
    {
        path: 'component',
        component: _views_component__WEBPACK_IMPORTED_MODULE_3__["ViewsComponent"],
        data: {
            name: 'Component',
            title: 'Thành phần'
        },
        children: [
            {
                path: 'timeline',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                data: {
                    name: 'Timeline',
                    title: 'Dòng thời gian'
                }
            }
        ]
    }
];
let ViewsRoutingModule = class ViewsRoutingModule {
};
ViewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(VIEWS_ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViewsRoutingModule);



/***/ }),

/***/ "./src/app/views/views.component.scss":
/*!********************************************!*\
  !*** ./src/app/views/views.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvdmlld3Mvdmlld3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/views.component.ts":
/*!******************************************!*\
  !*** ./src/app/views/views.component.ts ***!
  \******************************************/
/*! exports provided: ViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsComponent", function() { return ViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");


let ViewsComponent = class ViewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-views',
        template: __webpack_require__(/*! raw-loader!./views.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/views.component.html"),
        styles: [__webpack_require__(/*! ./views.component.scss */ "./src/app/views/views.component.scss")]
    })
], ViewsComponent);



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views-routing.module */ "./src/app/views/views-routing.module.ts");
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/views/timeline/timeline.component.ts");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/navigation/navigation.component */ "./src/app/layout/navigation/navigation.component.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/views/getting-started/getting-started.component.ts");











let ViewsModule = class ViewsModule {
};
ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
            _views_component__WEBPACK_IMPORTED_MODULE_4__["ViewsComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"],
            _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_10__["GettingStartedComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _views_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewsRoutingModule"]
        ],
        entryComponents: [],
        providers: []
    })
], ViewsModule);



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
const environment = {
    production: false,
    FAKE_API: '',
    demoAPI: 'localhost:3000/api',
    meta: {
        url: window.location.href,
        type: 'article',
        title: '♥ Hữu Đại ♥ - ♦ Nw-Widgets ♦ - ○ library built in with angular 8',
        author: 'oNiwa',
        image: `${window.location.origin}/assets/images/logo-527x274.png`,
        description: 'Nw-Widgets is a smart library use angular techique. It\'s contains some module can be usage and decrement develop time with developer as search engine, timeline, ...',
        keywords: 'angular, autocomplete, ng-select, typedhead, search, search-engine, searchengine, autocomplete, typescript, javascript, directive, nw-widgets, nw, widget, widgets, oniwa, niwa, timeline',
        site_name: '♥ Hữu Đại ♥',
        email: 'oniwa1102@gmail.com',
        phone_number: '(+84) 349 803 665',
        card: 'summary',
        site: '@buihuudaitb'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Source\Angular\new project\nw-widget\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map