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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var NwTimelineComponent = /** @class */ (function () {
    function NwTimelineComponent() {
        this.isTwoColumn = true;
        this.showAccordion = 1;
        this.isMultitlePanel = function (item) { return item && item.events && item.events instanceof Array; };
        this.getObjectkeys = function (obj) { return Object.keys(obj); };
    }
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
    return NwTimelineComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nw_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nw-timeline.component */ "../src/lib/nw-timeline/nw-timeline.component.ts");




var NwTimelineModule = /** @class */ (function () {
    function NwTimelineModule() {
    }
    NwTimelineModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nw_timeline_component__WEBPACK_IMPORTED_MODULE_3__["NwTimelineComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_nw_timeline_component__WEBPACK_IMPORTED_MODULE_3__["NwTimelineComponent"]]
        })
    ], NwTimelineModule);
    return NwTimelineModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nw_timeline_nw_timeline_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nw-timeline/nw-timeline.module */ "../src/lib/nw-timeline/nw-timeline.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NwTimelineModule", function() { return _nw_timeline_nw_timeline_module__WEBPACK_IMPORTED_MODULE_2__["NwTimelineModule"]; });





var NW_WIDGET_MODULE = [_nw_timeline_nw_timeline_module__WEBPACK_IMPORTED_MODULE_2__["NwTimelineModule"]];
var NwWidgetModule = /** @class */ (function () {
    function NwWidgetModule() {
    }
    NwWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: NW_WIDGET_MODULE,
            exports: NW_WIDGET_MODULE
        })
    ], NwWidgetModule);
    return NwWidgetModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: './views/views.module#ViewsModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/seo.service */ "./src/app/core/services/seo.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, seoService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.seoService = seoService;
        this.title = 'demo';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subRouter = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            var og = {
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
            var tw = {
                card: event.card || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.card,
                site: event.site || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.site,
                title: event.title || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.title,
                description: event.description || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.description,
                image: event.image || src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].meta.image,
            };
            _this.seoService.updateTitle("\u2665 H\u1EEFu \u0110\u1EA1i \u2665 - \u2666 Nw-Widgets \u2666 - \u25CB " + og.title);
            _this.seoService.updateMetaOrganizationTag(og);
            _this.seoService.updateMetaTwitterTag(tw);
        })).subscribe();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_seo_service__WEBPACK_IMPORTED_MODULE_5__["SeoService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "../node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SeoService = /** @class */ (function () {
    function SeoService(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    SeoService.prototype.updateTitle = function (title) {
        this.title.setTitle(title);
    };
    SeoService.prototype.updateMetaOrganizationTag = function (og) {
        var _this = this;
        Object.keys(og).forEach(function (key) { return _this.meta.updateTag({
            property: "og:" + key,
            content: og[key]
        }); });
    };
    SeoService.prototype.updateMetaTwitterTag = function (tw) {
        var _this = this;
        Object.keys(tw).forEach(function (key) { return _this.meta.updateTag({
            property: "twitter:" + key,
            content: tw[key]
        }); });
    };
    SeoService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
    ]; };
    SeoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SeoService);
    return SeoService;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  padding: 1rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2FwcC9sYXlvdXQvZm9vdGVyL0Y6XFxTb3VyY2VcXEFuZ3VsYXJcXG5ldyBwcm9qZWN0XFxudy13aWRnZXQvZGVtb1xcc3JjXFxhcHBcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJkZW1vL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IiwiLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "../node_modules/raw-loader/index.js!./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/views-routing.module */ "./src/app/views/views-routing.module.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.routes = _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__["VIEWS_ROUTES"];
        this.navs = [];
        this.getNavFromRoute = function (r) {
            var route = ['/'];
            if (r.path && r.path.length) {
                route.push(r.path);
                if (r.children && r.children.length) {
                    route.push(r.children[0].path);
                }
            }
            _this.navs.push({
                name: r.data && r.data.name ? r.data.name : r.path,
                route: route,
                title: r.data && r.data.title ? r.data.title : r.path
            });
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.forEach(function (r) { return _this.getNavFromRoute(r); });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "../node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/views-routing.module */ "./src/app/views/views-routing.module.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        var _this = this;
        this.routes = _views_views_routing_module__WEBPACK_IMPORTED_MODULE_2__["VIEWS_ROUTES"];
        this.navs = [];
        this.getNavFromRoute = function (r) {
            if (r.path !== '') {
                var route_1 = ['/', r.path];
                _this.navs.push({
                    name: r.data && r.data.name ? r.data.name : r.path,
                    route: r.children && r.children.length ? route_1.concat(r.children[0].path) : route_1,
                    title: r.data && r.data.title ? r.data.title : r.path,
                    hasChild: true
                });
                if (r.children && r.children.length) {
                    r.children.forEach(function (c) {
                        if (!(c.data && c.data.hide))
                            _this.navs.push({
                                name: c.data && c.data.name ? c.data.name : c.path,
                                route: route_1.concat(c.path),
                                title: c.data && c.data.title ? c.data.title : c.path
                            });
                    });
                }
            }
        };
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.forEach(function (r) { return _this.getNavFromRoute(r); });
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "../node_modules/raw-loader/index.js!./src/app/layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/layout/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TimelineService = /** @class */ (function () {
    function TimelineService(httpClient) {
        this.httpClient = httpClient;
    }
    TimelineService.prototype.getTimelineData = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].FAKE_API + "/assets/data/timeline.json");
    };
    TimelineService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], TimelineService);
    return TimelineService;
}());

var TimelineResponse = /** @class */ (function () {
    function TimelineResponse(id, isActive, time, source) {
        this.id = id;
        this.isActive = isActive;
        this.time = time;
        this.source = source;
    }
    TimelineResponse.ctorParameters = function () { return [
        { type: String },
        { type: Boolean },
        { type: Date },
        { type: undefined }
    ]; };
    return TimelineResponse;
}());

var TimelineEvent = /** @class */ (function () {
    function TimelineEvent(name, gender, company, email, phone, address) {
        this.name = name;
        this.gender = gender;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    TimelineEvent.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return TimelineEvent;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nw_widget_nw_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nw-widget/nw-widget */ "../src/public-api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    GettingStartedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ./getting-started.component.scss */ "./src/app/views/getting-started/getting-started.component.scss")]
        })
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Nw-Widgets demo ';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/timeline.service */ "./src/app/shared/services/timeline.service.ts");



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(service) {
        this.service = service;
        this.showAccordion = 1;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.timelineSource = this.service.getTimelineData();
    };
    TimelineComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] }
    ]; };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/views/timeline/timeline.component.scss")]
        })
    ], TimelineComponent);
    return TimelineComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/views/timeline/timeline.component.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/views/getting-started/getting-started.component.ts");







var VIEWS_ROUTES = [
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
var ViewsRoutingModule = /** @class */ (function () {
    function ViewsRoutingModule() {
    }
    ViewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(VIEWS_ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewsRoutingModule);
    return ViewsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ViewsComponent = /** @class */ (function () {
    function ViewsComponent() {
    }
    ViewsComponent.prototype.ngOnInit = function () {
    };
    ViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-views',
            template: __webpack_require__(/*! raw-loader!./views.component.html */ "../node_modules/raw-loader/index.js!./src/app/views/views.component.html"),
            styles: [__webpack_require__(/*! ./views.component.scss */ "./src/app/views/views.component.scss")]
        })
    ], ViewsComponent);
    return ViewsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _views_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views-routing.module */ "./src/app/views/views-routing.module.ts");
/* harmony import */ var _views_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views.component */ "./src/app/views/views.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/views/timeline/timeline.component.ts");
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/navigation/navigation.component */ "./src/app/layout/navigation/navigation.component.ts");
/* harmony import */ var _getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getting-started/getting-started.component */ "./src/app/views/getting-started/getting-started.component.ts");











var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
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
    return ViewsModule;
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
    production: false,
    FAKE_API: '',
    demoAPI: 'localhost:3000/api',
    meta: {
        url: window.location.href,
        type: 'article',
        title: '♥ Hữu Đại ♥ - ♦ Nw-Widgets ♦ - ○ library built in with angular 8',
        author: 'oNiwa',
        image: window.location.origin + "/assets/images/logo-527x274.png",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! F:\Source\Angular\new project\nw-widget\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map