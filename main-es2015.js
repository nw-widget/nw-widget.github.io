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

module.exports = "<div class=\"jumbotron\">\r\n    <p class=\"lead\">This is a simple project built in Angular 8+.</p>\r\n    <hr class=\"my-4\">\r\n    <p>oNiwa &copy;2019</p>\r\n</div>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html":
/*!********************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/layout/header/header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <a class=\"navbar-brand\" href=\"#\">Nw-Widget</a>\r\n\r\n    <div class=\"navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\" *ngFor=\"let item of navs\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"item.route\" routerLinkActive=\"router-link-active\" [title]=\"item.title\">{{item.name}} <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/layout/navigation/navigation.component.html":
/*!****************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/layout/navigation/navigation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sidebar p-0\">\r\n    <div class=\"align-items-center d-flex navbar-toggler w-100\">\r\n        <span class=\"mr-auto\">Menu</span>\r\n        <button class=\"btn navbar-toggler-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\r\n            aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <svg class=\"align-middle\" focusable=\"false\" height=\"30\" viewBox=\"0 0 30 30\" width=\"30\"\r\n                xmlns=\"http://www.w3.org/2000/svg\">\r\n                <title>Menu</title>\r\n                <path d=\"M4 7h22M4 15h22M4 23h22\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\"\r\n                    stroke-width=\"2\"></path>\r\n            </svg>\r\n        </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n            <li class=\"nav-item\" [class.group-item]=\"item.hasChild\" *ngFor=\"let item of navs\" routerLinkActive=\"active\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a class=\"nav-link\" [routerLink]=\"item.route\" routerLinkActive=\"router-link-active\"\r\n                    [title]=\"item.title\">{{item.name}} <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/views/getting-started/getting-started.component.html":
/*!*************************************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/views/getting-started/getting-started.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-3\">\r\n            <app-navigation></app-navigation>\r\n        </div>\r\n        <div class=\"col-12 col-lg-9\">\r\n            <!--Getting started content here-->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 content\">\r\n                    Getting started\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../node_modules/raw-loader/index.js!./src/app/views/home/home.component.html":
/*!***************************************************************************!*\
  !*** ../node_modules/raw-loader!./src/app/views/home/home.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\r\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n\r\n<style>\r\n    :host {\r\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n      font-size: 14px;\r\n      color: #333;\r\n      box-sizing: border-box;\r\n      -webkit-font-smoothing: antialiased;\r\n      -moz-osx-font-smoothing: grayscale;\r\n    }\r\n  \r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4,\r\n    h5,\r\n    h6 {\r\n      margin: 8px 0;\r\n    }\r\n  \r\n    p {\r\n      margin: 0;\r\n    }\r\n  \r\n    .spacer {\r\n      flex: 1;\r\n    }\r\n  \r\n    .toolbar {\r\n      height: 60px;\r\n      margin: -8px;\r\n      display: flex;\r\n      align-items: center;\r\n      background-color: #1976d2;\r\n      color: white;\r\n      font-weight: 600;\r\n    }\r\n  \r\n    .toolbar img {\r\n      margin: 0 16px;\r\n    }\r\n  \r\n    .toolbar #twitter-logo {\r\n      height: 40px;\r\n      margin: 0 16px;\r\n    }\r\n  \r\n    .toolbar #twitter-logo:hover {\r\n      opacity: 0.8;\r\n    }\r\n  \r\n    .content {\r\n      display: flex;\r\n      margin: 32px auto;\r\n      padding: 0 16px;\r\n      max-width: 960px;\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n  \r\n    svg.material-icons {\r\n      height: 24px;\r\n      width: auto;\r\n    }\r\n  \r\n    svg.material-icons:not(:last-child) {\r\n      margin-right: 8px;\r\n    }\r\n  \r\n    .card svg.material-icons path {\r\n      fill: #888;\r\n    }\r\n  \r\n    .card-container {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      margin-top: 16px;\r\n    }\r\n  \r\n    .card {\r\n      border-radius: 4px;\r\n      border: 1px solid #eee;\r\n      background-color: #fafafa;\r\n      height: 40px;\r\n      width: 200px;\r\n      margin: 0 8px 16px;\r\n      padding: 16px;\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: center;\r\n      align-items: center;\r\n      transition: all 0.2s ease-in-out;\r\n      line-height: 24px;\r\n    }\r\n  \r\n    .card-container .card:not(:last-child) {\r\n      margin-right: 0;\r\n    }\r\n  \r\n    .card.card-small {\r\n      height: 16px;\r\n      width: 168px;\r\n    }\r\n  \r\n    .card-container .card:not(.highlight-card) {\r\n      cursor: pointer;\r\n    }\r\n  \r\n    .card-container .card:not(.highlight-card):hover {\r\n      transform: translateY(-3px);\r\n      box-shadow: 0 4px 17px rgba(black, 0.35);\r\n    }\r\n  \r\n    .card-container .card:not(.highlight-card):hover .material-icons path {\r\n      fill: rgb(105, 103, 103);\r\n    }\r\n  \r\n    .card.highlight-card {\r\n      background-color: #1976d2;\r\n      color: white;\r\n      font-weight: 600;\r\n      border: none;\r\n      width: auto;\r\n      min-width: 30%;\r\n      position: relative;\r\n    }\r\n  \r\n    .card.card.highlight-card span {\r\n      margin-left: 60px;\r\n    }\r\n  \r\n    svg#rocket {\r\n      width: 80px;\r\n      position: absolute;\r\n      left: -10px;\r\n      top: -24px;\r\n    }\r\n  \r\n    svg#rocket-smoke {\r\n      height: 100vh;\r\n      position: absolute;\r\n      top: 10px;\r\n      right: 180px;\r\n      z-index: -10;\r\n    }\r\n  \r\n    a,\r\n    a:visited,\r\n    a:hover {\r\n      color: #1976d2;\r\n      text-decoration: none;\r\n    }\r\n  \r\n    a:hover {\r\n      color: #125699;\r\n    }\r\n  \r\n    .terminal {\r\n      position: relative;\r\n      width: 80%;\r\n      max-width: 600px;\r\n      border-radius: 6px;\r\n      padding-top: 45px;\r\n      margin-top: 8px;\r\n      overflow: hidden;\r\n      background-color: rgb(15, 15, 16);\r\n    }\r\n  \r\n    .terminal::before {\r\n      content: \"\\2022 \\2022 \\2022\";\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      height: 4px;\r\n      background: rgb(58, 58, 58);\r\n      color: #c2c3c4;\r\n      width: 100%;\r\n      font-size: 2rem;\r\n      line-height: 0;\r\n      padding: 14px 0;\r\n      text-indent: 4px;\r\n    }\r\n  \r\n    .terminal pre {\r\n      font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n      color: white;\r\n      padding: 0 1rem 1rem;\r\n      margin: 0;\r\n    }\r\n  \r\n    .circle-link {\r\n      height: 40px;\r\n      width: 40px;\r\n      border-radius: 40px;\r\n      margin: 8px;\r\n      background-color: white;\r\n      border: 1px solid #eeeeee;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      cursor: pointer;\r\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n      transition: 1s ease-out;\r\n    }\r\n  \r\n    .circle-link:hover {\r\n      transform: translateY(-0.25rem);\r\n      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n    }\r\n  \r\n    footer {\r\n      margin-top: 8px;\r\n      display: flex;\r\n      align-items: center;\r\n      line-height: 20px;\r\n    }\r\n  \r\n    footer a {\r\n      display: flex;\r\n      align-items: center;\r\n    }\r\n  \r\n    .github-star-badge {\r\n      color: #24292e;\r\n      display: flex;\r\n      align-items: center;\r\n      font-size: 12px;\r\n      padding: 3px 10px;\r\n      border: 1px solid rgba(27,31,35,.2);\r\n      border-radius: 3px;\r\n      background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n      margin-left: 4px;\r\n      font-weight: 600;\r\n      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n    }\r\n  \r\n    .github-star-badge:hover {\r\n      background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n      border-color: rgba(27,31,35,.35);\r\n      background-position: -.5em;\r\n    }\r\n  \r\n    .github-star-badge .material-icons {\r\n      height: 16px;\r\n      width: 16px;\r\n      margin-right: 4px;\r\n    }\r\n  \r\n    svg#clouds {\r\n      position: fixed;\r\n      bottom: -160px;\r\n      left: -230px;\r\n      z-index: -10;\r\n      width: 1920px;\r\n    }\r\n  \r\n  \r\n    /* Responsive Styles */\r\n    @media screen and (max-width: 767px) {\r\n  \r\n      .card-container > *:not(.circle-link) ,\r\n      .terminal {\r\n        width: 100%;\r\n      }\r\n  \r\n      .card:not(.highlight-card) {\r\n        height: 16px;\r\n        margin: 8px 0;\r\n      }\r\n  \r\n      .card.highlight-card span {\r\n        margin-left: 72px;\r\n      }\r\n  \r\n      svg#rocket-smoke {\r\n        right: 120px;\r\n        transform: rotate(-5deg);\r\n      }\r\n    }\r\n  \r\n    @media screen and (max-width: 575px) {\r\n      svg#rocket-smoke {\r\n        display: none;\r\n        visibility: hidden;\r\n      }\r\n    }\r\n  </style>\r\n  \r\n  <!-- Toolbar -->\r\n  <app-header></app-header>\r\n  \r\n  <div class=\"content\" role=\"main\">\r\n  \r\n    <!-- Highlight Card -->\r\n    <div class=\"card highlight-card card-small\">\r\n  \r\n      <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\r\n        <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\r\n          <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\r\n          <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\r\n            <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\r\n            <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\r\n          </g>\r\n        </g>\r\n      </svg>\r\n  \r\n      <span>{{ title }} app is running!</span>\r\n  \r\n      <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\r\n        <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\r\n      </svg>\r\n  \r\n    </div>\r\n  \r\n    <!-- Resources -->\r\n    <h2>Resources</h2>\r\n    <p>Here are some links to help you get started:</p>\r\n  \r\n    <div class=\"card-container\">\r\n      <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\r\n  \r\n        <span>Learn Angular</span>\r\n  \r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\r\n  \r\n      <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\r\n  \r\n        <span>CLI Documentation</span>\r\n  \r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\r\n      </a>\r\n  \r\n      <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\r\n  \r\n        <span>Angular Blog</span>\r\n  \r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\r\n      </a>\r\n  \r\n    </div>\r\n  \r\n    <!-- Next Steps -->\r\n    <h2>Next Steps</h2>\r\n    <p>What do you want to do next with your app?</p>\r\n  \r\n    <input type=\"hidden\" #selection>\r\n  \r\n    <div class=\"card-container\">\r\n      <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\r\n          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n  \r\n        <span>New Component</span>\r\n      </div>\r\n  \r\n      <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\r\n          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n  \r\n        <span>Angular Material</span>\r\n      </div>\r\n  \r\n      <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n  \r\n        <span>Add Dependency</span>\r\n      </div>\r\n  \r\n      <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n  \r\n        <span>Run and Watch Tests</span>\r\n      </div>\r\n  \r\n      <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\r\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\r\n  \r\n        <span>Build for Production</span>\r\n      </div>\r\n    </div>\r\n  \r\n    <!-- Terminal -->\r\n    <div class=\"terminal\" [ngSwitch]=\"selection.value\">\r\n        <pre *ngSwitchDefault>ng generate component xyz</pre>\r\n        <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\r\n        <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\r\n        <pre *ngSwitchCase=\"'test'\">ng test</pre>\r\n        <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\r\n    </div>\r\n  \r\n    <!-- Links -->\r\n    <div class=\"card-container\">\r\n      <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\r\n        <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\r\n          <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\r\n          <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\r\n          <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\r\n          <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\r\n          <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\r\n        </svg>\r\n      </a>\r\n  \r\n      <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\r\n        <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\r\n          <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\r\n            <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\r\n            <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\r\n            <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\r\n            <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\r\n            <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\r\n          </g>\r\n        </svg>\r\n      </a>\r\n  \r\n      <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\r\n        <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\r\n          <defs>\r\n            <clipPath id=\"clip-path\">\r\n              <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\r\n            </clipPath>\r\n          </defs>\r\n          <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\r\n            <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\r\n            <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\r\n            <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\r\n              <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\r\n                <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\r\n                  <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\r\n                </g>\r\n              </g>\r\n            </g>\r\n            <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\r\n          </g>\r\n        </svg>\r\n      </a>\r\n  \r\n      <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\r\n        <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\r\n          <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\r\n            <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\r\n            <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\r\n            <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\r\n          </g>\r\n        </svg>\r\n      </a>\r\n  \r\n      <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\r\n        <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\r\n          <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\r\n        </svg>\r\n      </a>\r\n  \r\n      <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\r\n        <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\r\n          <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\r\n            <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\r\n            <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\r\n              <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\r\n                <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\r\n                <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\r\n                <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\r\n                <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\r\n              </g>\r\n            </g>\r\n          </g>\r\n        </svg>\r\n      </a>\r\n    </div>\r\n  \r\n    <!-- Footer -->\r\n    <footer>\r\n        Love Angular?&nbsp;\r\n        <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\r\n          <div class=\"github-star-badge\">\r\n              <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\r\n            Star\r\n          </div>\r\n        </a>\r\n        <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\r\n          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\r\n        </a>\r\n    </footer>\r\n  \r\n    <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\r\n      <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\r\n    </svg>\r\n  \r\n  </div>\r\n  \r\n  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n  <!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\r\n  <!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r\n  <!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\r\n  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n  <!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\r\n  <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n  \r\n  <app-footer></app-footer>"

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

module.exports = "/* Timeline */\n.timeline {\n  list-style: none;\n  padding: 0;\n  position: relative;\n}\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #6c7293;\n  left: 50%;\n  margin-left: -1.5px;\n}\n.timeline .timeline-wrapper {\n  display: block;\n  margin-bottom: 20px;\n  position: relative;\n  width: 100%;\n  padding-right: 90px;\n}\n.timeline .timeline-wrapper:before {\n  content: \" \";\n  display: table;\n}\n.timeline .timeline-wrapper:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n.timeline .timeline-wrapper .timeline-panel {\n  border-radius: 2px;\n  padding: 20px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 6px;\n  box-shadow: 1px 2px 35px 0 rgba(1, 1, 1, 0.1);\n  width: 35%;\n  margin-left: 15%;\n}\n.timeline .timeline-wrapper .timeline-panel:before {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 2px;\n  content: \"\";\n  left: 0;\n  right: 0;\n}\n.timeline .timeline-wrapper .timeline-panel:after {\n  position: absolute;\n  top: 10px;\n  right: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 14px solid #ffffff;\n  border-right: 0 solid #ffffff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-title {\n  margin-top: 0;\n  color: #001737;\n  text-transform: uppercase;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-body p + p {\n  margin-top: 5px;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-body ul {\n  margin-bottom: 0;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-footer span {\n  font-size: 0.6875rem;\n}\n.timeline .timeline-wrapper .timeline-panel .timeline-footer i {\n  font-size: 1.5rem;\n}\n.timeline .timeline-wrapper .timeline-badge {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 16px;\n  left: calc(50% - 15px);\n  z-index: 10;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n  border: 2px solid #ffffff;\n  text-align: center;\n  vertical-align: middle;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  align-self: center;\n  display: flex;\n}\n.timeline .timeline-wrapper .timeline-badge i {\n  color: #ffffff;\n  cursor: pointer;\n}\n.timeline .timeline-wrapper.timeline-inverted {\n  padding-right: 0;\n  padding-left: 90px;\n}\n.timeline .timeline-wrapper.timeline-inverted .timeline-panel {\n  margin-left: auto;\n  margin-right: 15%;\n}\n.timeline .timeline-wrapper.timeline-inverted .timeline-panel:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n@media (max-width: 767px) {\n  .timeline .timeline-wrapper {\n    padding-right: 150px;\n  }\n\n  .timeline .timeline-wrapper.timeline-inverted {\n    padding-left: 150px;\n  }\n\n  .timeline .timeline-wrapper .timeline-panel {\n    width: 60%;\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n@media (max-width: 576px) {\n  .timeline .timeline-wrapper .timeline-panel {\n    width: 68%;\n  }\n}\n.timeline-wrapper-primary .timeline-panel:before {\n  background: #464dee;\n}\n.timeline-wrapper-primary .timeline-badge {\n  background: #464dee;\n}\n.timeline-wrapper-secondary .timeline-panel:before {\n  background: #6c7293;\n}\n.timeline-wrapper-secondary .timeline-badge {\n  background: #6c7293;\n}\n.timeline-wrapper-success .timeline-panel:before {\n  background: #0ddbb9;\n}\n.timeline-wrapper-success .timeline-badge {\n  background: #0ddbb9;\n}\n.timeline-wrapper-info .timeline-panel:before {\n  background: #0ad7f7;\n}\n.timeline-wrapper-info .timeline-badge {\n  background: #0ad7f7;\n}\n.timeline-wrapper-warning .timeline-panel:before {\n  background: #fcd539;\n}\n.timeline-wrapper-warning .timeline-badge {\n  background: #fcd539;\n}\n.timeline-wrapper-danger .timeline-panel:before {\n  background: #ef5958;\n}\n.timeline-wrapper-danger .timeline-badge {\n  background: #ef5958;\n}\n.timeline-wrapper-light .timeline-panel:before {\n  background: #eaeaea;\n}\n.timeline-wrapper-light .timeline-badge {\n  background: #eaeaea;\n}\n.timeline-wrapper-dark .timeline-panel:before {\n  background: #001737;\n}\n.timeline-wrapper-dark .timeline-badge {\n  background: #001737;\n}\n/* Cards */\n.card {\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  -ms-box-shadow: none;\n}\n.card .card-body {\n  padding: 1.75rem 1.75rem;\n}\n.card .card-body + .card-body {\n  padding-top: 1rem;\n}\n.card .card-title {\n  color: #001737;\n  margin-bottom: 0.5rem;\n  text-transform: capitalize;\n  font-size: 0.875rem;\n}\n.card .card-subtitle {\n  font-weight: 400;\n  margin-top: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n.card .card-description {\n  margin-bottom: 0.875rem;\n  font-weight: 400;\n  color: #76838f;\n}\n.card.card-outline-success {\n  border: 1px solid #0ddbb9;\n}\n.card.card-outline-primary {\n  border: 1px solid #464dee;\n}\n.card.card-outline-warning {\n  border: 1px solid #fcd539;\n}\n.card.card-outline-danger {\n  border: 1px solid #ef5958;\n}\n.card.card-rounded {\n  border-radius: 5px;\n}\n.card.card-faded {\n  background: #b5b0b2;\n  border-color: #b5b0b2;\n}\n.card.card-circle-progress {\n  color: #ffffff;\n  text-align: center;\n}\n.card.card-img-holder {\n  position: relative;\n}\n.card.card-img-holder .card-img-absolute {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n}\n.card.card-weather .weather-daily .weather-day {\n  opacity: 0.5;\n  font-weight: 900;\n}\n.card.card-weather .weather-daily i {\n  font-size: 20px;\n}\n.card.card-weather .weather-daily .weather-temp {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n  opacity: 0.5;\n  font-size: 0.75rem;\n}\n.card-inverse-primary {\n  background: rgba(70, 77, 238, 0.2);\n  border: 1px solid #4047db;\n  color: #353bb5;\n}\n.card-inverse-secondary {\n  background: rgba(108, 114, 147, 0.2);\n  border: 1px solid #636987;\n  color: #525770;\n}\n.card-inverse-success {\n  background: rgba(13, 219, 185, 0.2);\n  border: 1px solid #0cc9aa;\n  color: #0aa68d;\n}\n.card-inverse-info {\n  background: rgba(10, 215, 247, 0.2);\n  border: 1px solid #09c6e3;\n  color: #08a3bc;\n}\n.card-inverse-warning {\n  background: rgba(252, 213, 57, 0.2);\n  border: 1px solid #e8c434;\n  color: #c0a22b;\n}\n.card-inverse-danger {\n  background: rgba(239, 89, 88, 0.2);\n  border: 1px solid #dc5251;\n  color: #b64443;\n}\n.card-inverse-light {\n  background: rgba(234, 234, 234, 0.2);\n  border: 1px solid #d7d7d7;\n  color: #b2b2b2;\n}\n.card-inverse-dark {\n  background: rgba(0, 23, 55, 0.2);\n  border: 1px solid #001533;\n  color: #00112a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWIvbnctdGltZWxpbmUvRjpcXFNvdXJjZVxcQW5ndWxhclxcbmV3IHByb2plY3RcXG53LXdpZGdldFxcZGVtby8uLlxcc3JjXFxsaWJcXG53LXRpbWVsaW5lXFxudy10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsIi4uL3NyYy9saWIvbnctdGltZWxpbmUvbnctdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsTUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7QUNDRjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFO0lBQ0Usb0JBQUE7RUNDRjs7RURDQTtJQUNFLG1CQUFBO0VDRUY7O0VEQUE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRTtJQUNFLFVBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtQkFBQTtBQ0NGO0FERUEsVUFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREVBO0VBQ0Usd0JBQUE7QUNDRjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREVBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7QUNDRjtBREVBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGO0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6Ii4uL3NyYy9saWIvbnctdGltZWxpbmUvbnctdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaW1lbGluZSAqL1xyXG4udGltZWxpbmUge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aW1lbGluZTpiZWZvcmUge1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIHdpZHRoOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzI5MztcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMzVweCAwIHJnYmEoMSwgMSwgMSwgMC4xKTtcclxuICB3aWR0aDogMzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogLTE0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIC50aW1lbGluZS10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBjb2xvcjogIzAwMTczNztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIC50aW1lbGluZS1ib2R5IHAgKyBwIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWJvZHkgdWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWZvb3RlciBzcGFuIHtcclxuICBmb250LXNpemU6IDAuNjg3NXJlbTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyIC50aW1lbGluZS1wYW5lbCAudGltZWxpbmUtZm9vdGVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLWJhZGdlIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTZweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtYmFkZ2UgaSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIudGltZWxpbmUtaW52ZXJ0ZWQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA5MHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIudGltZWxpbmUtaW52ZXJ0ZWQgLnRpbWVsaW5lLXBhbmVsIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyLnRpbWVsaW5lLWludmVydGVkIC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xyXG4gIGxlZnQ6IC0xNHB4O1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUwcHg7XHJcbiAgfVxyXG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlci50aW1lbGluZS1pbnZlcnRlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG4gIH1cclxuICAudGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwge1xyXG4gICAgd2lkdGg6IDY4JTtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXByaW1hcnkgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogIzQ2NGRlZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItcHJpbWFyeSAudGltZWxpbmUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICM0NjRkZWU7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXNlY29uZGFyeSAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3MjkzO1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1zZWNvbmRhcnkgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3MjkzO1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1zdWNjZXNzIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMwZGRiYjk7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXN1Y2Nlc3MgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjMGRkYmI5O1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1pbmZvIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMwYWQ3Zjc7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLWluZm8gLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjMGFkN2Y3O1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci13YXJuaW5nIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICNmY2Q1Mzk7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLXdhcm5pbmcgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmNkNTM5O1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1kYW5nZXIgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmNTk1ODtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItZGFuZ2VyIC50aW1lbGluZS1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmNTk1ODtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItbGlnaHQgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxufVxyXG5cclxuLnRpbWVsaW5lLXdyYXBwZXItbGlnaHQgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG59XHJcblxyXG4udGltZWxpbmUtd3JhcHBlci1kYXJrIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQ6ICMwMDE3Mzc7XHJcbn1cclxuXHJcbi50aW1lbGluZS13cmFwcGVyLWRhcmsgLnRpbWVsaW5lLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAxNzM3O1xyXG59XHJcblxyXG4vKiBDYXJkcyAqL1xyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gIC1tcy1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxLjc1cmVtIDEuNzVyZW07XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJvZHkgKyAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiAjMDAxNzM3O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM3NjgzOGY7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtb3V0bGluZS1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGRkYmI5O1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NGRlZTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1vdXRsaW5lLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2Q1Mzk7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtb3V0bGluZS1kYW5nZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZjU5NTg7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtcm91bmRlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLWZhZGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjYjViMGIyO1xyXG4gIGJvcmRlci1jb2xvcjogI2I1YjBiMjtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1jaXJjbGUtcHJvZ3Jlc3Mge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1pbWctaG9sZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtaW1nLWhvbGRlciAuY2FyZC1pbWctYWJzb2x1dGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXdlYXRoZXIgLndlYXRoZXItZGFpbHkgLndlYXRoZXItZGF5IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC13ZWF0aGVyIC53ZWF0aGVyLWRhaWx5IGkge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC13ZWF0aGVyIC53ZWF0aGVyLWRhaWx5IC53ZWF0aGVyLXRlbXAge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg3MCwgNzcsIDIzOCwgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDA0N2RiO1xyXG4gIGNvbG9yOiAjMzUzYmI1O1xyXG59XHJcblxyXG4uY2FyZC1pbnZlcnNlLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDExNCwgMTQ3LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MzY5ODc7XHJcbiAgY29sb3I6ICM1MjU3NzA7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2Utc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMywgMjE5LCAxODUsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBjYzlhYTtcclxuICBjb2xvcjogIzBhYTY4ZDtcclxufVxyXG5cclxuLmNhcmQtaW52ZXJzZS1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAyMTUsIDI0NywgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDljNmUzO1xyXG4gIGNvbG9yOiAjMDhhM2JjO1xyXG59XHJcblxyXG4uY2FyZC1pbnZlcnNlLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyMTMsIDU3LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGM0MzQ7XHJcbiAgY29sb3I6ICNjMGEyMmI7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgODksIDg4LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzUyNTE7XHJcbiAgY29sb3I6ICNiNjQ0NDM7XHJcbn1cclxuXHJcbi5jYXJkLWludmVyc2UtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAyMzQsIDIzNCwgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2Q3O1xyXG4gIGNvbG9yOiAjYjJiMmIyO1xyXG59XHJcblxyXG4uY2FyZC1pbnZlcnNlLWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMjMsIDU1LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDE1MzM7XHJcbiAgY29sb3I6ICMwMDExMmE7XHJcbn1cclxuIiwiLyogVGltZWxpbmUgKi9cbi50aW1lbGluZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3MjkzO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMS41cHg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAzNXB4IDAgcmdiYSgxLCAxLCAxLCAwLjEpO1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAtMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMTRweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCIgXCI7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICMwMDE3Mzc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWJvZHkgcCArIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwgLnRpbWVsaW5lLWJvZHkgdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIC50aW1lbGluZS1mb290ZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIC50aW1lbGluZS1mb290ZXIgaSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLWJhZGdlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtYmFkZ2UgaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlci50aW1lbGluZS1pbnZlcnRlZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyLnRpbWVsaW5lLWludmVydGVkIC50aW1lbGluZS1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS13cmFwcGVyLnRpbWVsaW5lLWludmVydGVkIC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gIGxlZnQ6IC0xNHB4O1xuICByaWdodDogYXV0bztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciB7XG4gICAgcGFkZGluZy1yaWdodDogMTUwcHg7XG4gIH1cblxuICAudGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIudGltZWxpbmUtaW52ZXJ0ZWQge1xuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XG4gIH1cblxuICAudGltZWxpbmUgLnRpbWVsaW5lLXdyYXBwZXIgLnRpbWVsaW5lLXBhbmVsIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC50aW1lbGluZSAudGltZWxpbmUtd3JhcHBlciAudGltZWxpbmUtcGFuZWwge1xuICAgIHdpZHRoOiA2OCU7XG4gIH1cbn1cbi50aW1lbGluZS13cmFwcGVyLXByaW1hcnkgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM0NjRkZWU7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLXByaW1hcnkgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzQ2NGRlZTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItc2Vjb25kYXJ5IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNmM3MjkzO1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1zZWNvbmRhcnkgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzZjNzI5Mztcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItc3VjY2VzcyAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzBkZGJiOTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItc3VjY2VzcyAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMGRkYmI5O1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1pbmZvIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMGFkN2Y3O1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1pbmZvIC50aW1lbGluZS1iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICMwYWQ3Zjc7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLXdhcm5pbmcgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmY2Q1Mzk7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLXdhcm5pbmcgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogI2ZjZDUzOTtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItZGFuZ2VyIC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZWY1OTU4O1xufVxuXG4udGltZWxpbmUtd3JhcHBlci1kYW5nZXIgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogI2VmNTk1ODtcbn1cblxuLnRpbWVsaW5lLXdyYXBwZXItbGlnaHQgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLWxpZ2h0IC50aW1lbGluZS1iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLWRhcmsgLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMwMDE3Mzc7XG59XG5cbi50aW1lbGluZS13cmFwcGVyLWRhcmsgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogIzAwMTczNztcbn1cblxuLyogQ2FyZHMgKi9cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tcy1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS43NXJlbSAxLjc1cmVtO1xufVxuXG4uY2FyZCAuY2FyZC1ib2R5ICsgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4uY2FyZCAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMDAxNzM3O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG4uY2FyZCAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbn1cblxuLmNhcmQgLmNhcmQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM3NjgzOGY7XG59XG5cbi5jYXJkLmNhcmQtb3V0bGluZS1zdWNjZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkZGJiOTtcbn1cblxuLmNhcmQuY2FyZC1vdXRsaW5lLXByaW1hcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0ZGVlO1xufVxuXG4uY2FyZC5jYXJkLW91dGxpbmUtd2FybmluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2Q1Mzk7XG59XG5cbi5jYXJkLmNhcmQtb3V0bGluZS1kYW5nZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWY1OTU4O1xufVxuXG4uY2FyZC5jYXJkLXJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYXJkLmNhcmQtZmFkZWQge1xuICBiYWNrZ3JvdW5kOiAjYjViMGIyO1xuICBib3JkZXItY29sb3I6ICNiNWIwYjI7XG59XG5cbi5jYXJkLmNhcmQtY2lyY2xlLXByb2dyZXNzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQuY2FyZC1pbWctaG9sZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLWltZy1ob2xkZXIgLmNhcmQtaW1nLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkLmNhcmQtd2VhdGhlciAud2VhdGhlci1kYWlseSAud2VhdGhlci1kYXkge1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jYXJkLmNhcmQtd2VhdGhlciAud2VhdGhlci1kYWlseSBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZC5jYXJkLXdlYXRoZXIgLndlYXRoZXItZGFpbHkgLndlYXRoZXItdGVtcCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5cbi5jYXJkLWludmVyc2UtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzAsIDc3LCAyMzgsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MDQ3ZGI7XG4gIGNvbG9yOiAjMzUzYmI1O1xufVxuXG4uY2FyZC1pbnZlcnNlLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTQsIDE0NywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYzNjk4NztcbiAgY29sb3I6ICM1MjU3NzA7XG59XG5cbi5jYXJkLWludmVyc2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTMsIDIxOSwgMTg1LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGNjOWFhO1xuICBjb2xvcjogIzBhYTY4ZDtcbn1cblxuLmNhcmQtaW52ZXJzZS1pbmZvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwgMjE1LCAyNDcsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOWM2ZTM7XG4gIGNvbG9yOiAjMDhhM2JjO1xufVxuXG4uY2FyZC1pbnZlcnNlLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjEzLCA1NywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4YzQzNDtcbiAgY29sb3I6ICNjMGEyMmI7XG59XG5cbi5jYXJkLWludmVyc2UtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDg5LCA4OCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjNTI1MTtcbiAgY29sb3I6ICNiNjQ0NDM7XG59XG5cbi5jYXJkLWludmVyc2UtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMjM0LCAyMzQsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZDc7XG4gIGNvbG9yOiAjYjJiMmIyO1xufVxuXG4uY2FyZC1pbnZlcnNlLWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIzLCA1NSwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMTUzMztcbiAgY29sb3I6ICMwMDExMmE7XG59Il19 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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

module.exports = ".jumbotron {\n  padding: 1rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9GOlxcU291cmNlXFxBbmd1bGFyXFxuZXcgcHJvamVjdFxcbnctd2lkZ2V0XFxkZW1vL3NyY1xcYXBwXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IiwiLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

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

module.exports = ".navbar .navbar-brand {\n  margin: auto;\n}\n.navbar .navbar-collapse .navbar-nav {\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.navbar .navbar-collapse .navbar-nav .nav-item {\n  padding: 0.5rem 1rem;\n}\n.navbar .navbar-collapse .form-inline {\n  display: none;\n}\n@media (min-width: 992px) {\n  .navbar .navbar-collapse .form-inline {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9GOlxcU291cmNlXFxBbmd1bGFyXFxuZXcgcHJvamVjdFxcbnctd2lkZ2V0XFxkZW1vL3NyY1xcYXBwXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7QUNBUjtBREdRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRFo7QURFWTtFQUNJLG9CQUFBO0FDQWhCO0FER1E7RUFDSSxhQUFBO0FDRFo7QURHUTtFQUNJO0lBQ0ksYUFBQTtFQ0RkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWlubGluZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuZm9ybS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5mb3JtLWlubGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufSJdfQ== */"

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

module.exports = "@charset \"UTF-8\";\n.navbar.sidebar {\n  display: flex;\n}\n.navbar.sidebar .navbar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.navbar.sidebar .navbar-nav .nav-item.group-item {\n  font-size: large;\n}\n.navbar.sidebar .navbar-nav .nav-item a {\n  color: #687582;\n}\n.navbar.sidebar .navbar-nav .nav-item:not(.group-item) a::before {\n  content: \"♥\";\n  padding: 0 0.5rem;\n}\n.navbar.sidebar .navbar-nav .nav-item.active a {\n  color: #007bff;\n}\n.navbar.sidebar .navbar-toggler-button {\n  color: red;\n}\n@media (min-width: 992px) {\n  .navbar.sidebar .navbar-toggler.d-flex {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L25hdmlnYXRpb24vRjpcXFNvdXJjZVxcQW5ndWxhclxcbmV3IHByb2plY3RcXG53LXdpZGdldFxcZGVtby9zcmNcXGFwcFxcbGF5b3V0XFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NaO0VBQ0ksYUFBQTtBRENSO0FDQVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QURFWjtBQ0FnQjtFQUNJLGdCQUFBO0FERXBCO0FDQWdCO0VBQ0ksY0FBQTtBREVwQjtBQ0V3QjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBREE1QjtBQ0tvQjtFQUNJLGNBQUE7QURIeEI7QUNRUTtFQUNJLFVBQUE7QUROWjtBQ1FRO0VBRVE7SUFDSSx3QkFBQTtFRFBsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZiYXIuc2lkZWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2YmFyLnNpZGViYXIgLm5hdmJhci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5ncm91cC1pdGVtIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5uYXZiYXIuc2lkZWJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjNjg3NTgyO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpub3QoLmdyb3VwLWl0ZW0pIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pmlXCI7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLm5hdmJhci5zaWRlYmFyIC5uYXZiYXItdG9nZ2xlci1idXR0b24ge1xuICBjb2xvcjogcmVkO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXIuc2lkZWJhciAubmF2YmFyLXRvZ2dsZXIuZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIubmF2YmFyIHtcclxuICAgICYuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAmLmdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY4NzU4MjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bm90KC5ncm91cC1pdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn4pmlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhci10b2dnbGVyLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgICAgICAgICAgJi5kLWZsZXgge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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






let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
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
            _nw_widget_nw_widget__WEBPACK_IMPORTED_MODULE_3__["NwWidgetModule"]
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

module.exports = ".content {\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZ2V0dGluZy1zdGFydGVkL0Y6XFxTb3VyY2VcXEFuZ3VsYXJcXG5ldyBwcm9qZWN0XFxudy13aWRnZXRcXGRlbW8vc3JjXFxhcHBcXHZpZXdzXFxnZXR0aW5nLXN0YXJ0ZWRcXGdldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9nZXR0aW5nLXN0YXJ0ZWQvZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbn0iLCIuY29udGVudCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufSJdfQ== */"

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


let GettingStartedComponent = class GettingStartedComponent {
    constructor() { }
    ngOnInit() {
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'Nw-Widgets demo ';
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ZpZXdzLmNvbXBvbmVudC5zY3NzIn0= */"

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
            _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_10__["GettingStartedComponent"],
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