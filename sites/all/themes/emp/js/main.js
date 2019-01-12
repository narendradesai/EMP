jQuery(document).ready(function(){
    /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: enableDevMode, slideTime, slideChange, default */
/***/ (function(module) {

    module.exports = {"enableDevMode":true,"slideTime":500,"slideChange":10000};

    /***/ }),
    
    /***/ "./index.css":
    /*!*******************!*\
      !*** ./index.css ***!
      \*******************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = "/* <reusable> */\n.padding-0-5-rem {\n  padding: 0.5rem;\n}\n\n/* </reusable> */\nhtml {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\nhtml body {\n  margin: 0;\n}\nhtml body ul {\n  padding: 0;\n}\nhtml body ul li {\n  list-style: none;\n}\nhtml body a {\n  text-decoration: none;\n  color: #000000;\n}\nhtml body button {\n  border: 1px solid transparent;\n  background: #ffffff;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  font-size: 1rem;\n  background: #ffffff;\n  z-index: 1;\n}\n.header ul {\n  display: flex;\n  justify-content: space-around;\n}\n.header a {\n  white-space: nowrap;\n}\n.header .menu .menu-bar-button {\n  display: none;\n  width: 1em;\n}\n.header .menu .menu-bar-button div {\n  border-bottom: 1px solid #000000;\n  padding: 2px 0;\n}\n@media only screen and (max-width: 540px) {\n  .header .menu .menu-bar-button {\n    display: block;\n  }\n}\n.header .menu .menu-bar-expanded li {\n  border-bottom: 1px solid transparent;\n}\n.header .menu .menu-bar-expanded li:hover {\n  border-bottom: 1px solid #D9D9D9;\n}\n.header .menu .menu-bar-expanded > .active {\n  border-bottom: 1px solid red;\n}\n.header .menu .menu-bar-expanded > .active:hover {\n  border-bottom: 1px solid red;\n}\n@media only screen and (max-width: 540px) {\n  .header .menu .menu-bar-expanded {\n    display: none;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .header .menu > .active {\n    display: block;\n    text-align: center;\n    background: #ffffff;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    margin-top: 1em;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .header .close .menu-bar-button div:nth-child(odd) {\n    border-bottom: 1px solid transparent;\n  }\n  .header .close .menu-bar-button div:nth-child(even) {\n    -webkit-animation: skew-button 250ms linear 1 forwards;\n    -moz-animation: skew-button 250ms linear 1 forwards;\n    -o-animation: skew-button 250ms linear 1 forwards;\n    animation: skew-button 250ms linear 1 forwards;\n  }\n  .header .close .menu-bar-button div:nth-child(even)::after {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-bottom: 1px solid black;\n    margin: -2px 0;\n    -webkit-animation: skew-button-after 250ms linear 1 forwards;\n    -moz-animation: skew-button-after 250ms linear 1 forwards;\n    -o-animation: skew-button-after 250ms linear 1 forwards;\n    animation: skew-button-after 250ms linear 1 forwards;\n  }\n}\n\n.content {\n  margin-top: calc(2em + 2em + 0.3rem);\n  z-index: 0;\n  position: relative;\n  overflow: hidden;\n}\n.content .service-header {\n  font-size: 1.3rem;\n  text-align: center;\n}\n.content .service-section .services {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  color: #000000;\n}\n.content .service-section .services .service {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5em;\n  width: 21vmax;\n}\n.content .service-section .services .service > img {\n  margin: 0.5em;\n  height: 16em;\n  align-self: center;\n}\n@media only screen and (max-width: 540px) {\n  .content .service-section .services .service > img {\n    height: 57vmax;\n  }\n}\n.content .service-section .services .service > .text {\n  margin: 1vmax;\n}\n.content .service-section .services .service > .text p:first-child {\n  font-size: 2rem;\n  margin: 0.5vmax 0;\n}\n@media only screen and (max-width: 540px) {\n  .content .service-section .services .service > .text {\n    margin: 0 5vmax;\n  }\n}\n.content .service-section .services .service:nth-child(2) {\n  border-left: 1px solid #D9D9D9;\n  border-right: 1px solid #D9D9D9;\n  padding: 0 3vmax;\n}\n@media only screen and (max-width: 1300px) {\n  .content .service-section .services .service:nth-child(2) {\n    padding: 0;\n    border: 0px;\n    border-top: 1px solid #D9D9D9;\n    border-bottom: 1px solid #D9D9D9;\n  }\n}\n@media only screen and (max-width: 1300px) and (min-width: 540px) {\n  .content .service-section .services .service {\n    flex-direction: row;\n    width: auto;\n  }\n}\n@media only screen and (max-width: 540px) {\n  .content .service-section .services .service {\n    width: 60vmax;\n  }\n}\n@media only screen and (max-width: 1300px) {\n  .content .service-section .services {\n    flex-direction: column;\n  }\n}\n\n.footer {\n  position: relative;\n  background: #0D9361;\n  display: flex;\n  justify-content: space-around;\n  color: #ffffff;\n  padding-bottom: 1em;\n  overflow: hidden;\n}\n.footer > div {\n  margin: 1em 2em;\n}\n.footer .contact p {\n  font-size: 2rem;\n}\n@media only screen and (min-width: 540px) {\n  .footer .contact p {\n    margin: 0.5vmax 0;\n  }\n}\n.footer .contact form {\n  display: flex;\n  flex-direction: column;\n}\n.footer .contact form label {\n  margin-top: 0.5vmax;\n}\n.footer .contact form button {\n  margin-top: 1em;\n  font-family: inherit;\n  align-self: center;\n  padding: 0.1em 2em;\n  color: #0D9361;\n}\n.footer .about {\n  width: 50%;\n  text-align: end;\n}\n.footer .about > :nth-child(2) {\n  font-size: 2rem;\n  margin-top: -1.6em;\n}\n.footer .about .red-div {\n  background: red;\n  width: 200%;\n  height: 4em;\n}\n.footer .about .followers ul {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.footer .about .followers ul > li {\n  margin: 0 0.5em;\n  white-space: nowrap;\n}\n.footer .about .followers img {\n  height: 3em;\n}\n@media only screen and (max-width: 540px) {\n  .footer {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n.developerOnly {\n  background: #0D9361;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n}\n.developerOnly p {\n  margin: 0;\n  color: #ffffff;\n  margin-right: 0.5em;\n}\n.developerOnly img {\n  height: 2em;\n}\n\n.goTop {\n  position: fixed;\n  right: 0;\n  background: #ffffff;\n  box-shadow: 0 0 1em 0 #000000;\n  padding: 1em 0.5em;\n  margin: 4.5em 1.1em;\n  border-radius: 0.2em;\n}\n.goTop.active {\n  -webkit-animation: move-to-top 500ms 0s linear forwards;\n  -moz-animation: move-to-top 500ms 0s linear forwards;\n  -o-animation: move-to-top 500ms 0s linear forwards;\n  animation: move-to-top 500ms 0s linear forwards;\n}\n.goTop.inactive {\n  -webkit-animation: move-to-bottom 500ms 0s linear forwards;\n  -moz-animation: move-to-bottom 500ms 0s linear forwards;\n  -o-animation: move-to-bottom 500ms 0s linear forwards;\n  animation: move-to-bottom 500ms 0s linear forwards;\n}\n\n/* <keyframes> */\n@-webkit-keyframes move-right-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-moz-keyframes move-right-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-o-keyframes move-right-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes move-right-center {\n  0% {\n    left: 100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes move-center-left {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: -100%;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-moz-keyframes move-center-left {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: -100%;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-o-keyframes move-center-left {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: -100%;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@keyframes move-center-left {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: -100%;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@-webkit-keyframes move-left-center {\n  0% {\n    left: -100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-moz-keyframes move-left-center {\n  0% {\n    left: -100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-o-keyframes move-left-center {\n  0% {\n    left: -100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes move-left-center {\n  0% {\n    left: -100%;\n  }\n  30% {\n    left: 0;\n  }\n  100% {\n    left: 0;\n  }\n}\n@-webkit-keyframes move-center-right {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: 100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@-moz-keyframes move-center-right {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: 100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@-o-keyframes move-center-right {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: 100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@keyframes move-center-right {\n  0% {\n    left: 0;\n  }\n  30% {\n    left: 100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n@-webkit-keyframes skew-button {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, 36deg);\n  }\n}\n@-moz-keyframes skew-button {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, 36deg);\n  }\n}\n@-o-keyframes skew-button {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, 36deg);\n  }\n}\n@keyframes skew-button {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, 36deg);\n  }\n}\n@-webkit-keyframes skew-button-after {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, -56deg);\n  }\n}\n@-moz-keyframes skew-button-after {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, -56deg);\n  }\n}\n@-o-keyframes skew-button-after {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, -56deg);\n  }\n}\n@keyframes skew-button-after {\n  0% {\n    transform: skew(0, 0);\n  }\n  100% {\n    transform: skew(0, -56deg);\n  }\n}\n@-webkit-keyframes move-to-top {\n  0% {\n    bottom: -50%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n@-moz-keyframes move-to-top {\n  0% {\n    bottom: -50%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n@-o-keyframes move-to-top {\n  0% {\n    bottom: -50%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n@keyframes move-to-top {\n  0% {\n    bottom: -50%;\n  }\n  100% {\n    bottom: 0%;\n  }\n}\n@-webkit-keyframes move-to-bottom {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: -50%;\n  }\n}\n@-moz-keyframes move-to-bottom {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: -50%;\n  }\n}\n@-o-keyframes move-to-bottom {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: -50%;\n  }\n}\n@keyframes move-to-bottom {\n  0% {\n    bottom: 0%;\n  }\n  100% {\n    bottom: -50%;\n  }\n}\n/* </keyframes> */\n\n/*# sourceMappingURL=index.css.map */\n"
    
    /***/ }),
    
    /***/ "./index.html":
    /*!********************!*\
      !*** ./index.html ***!
      \********************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\r\n    <title>Safety</title>\r\n    <link rel=\"stylesheet\" href=\"index.css\"/>\r\n</head>\r\n<body>\r\n    <div class=\"header\">\r\n        <ul class=\"\">\r\n            <li class=\"padding-0-5-rem\"><a href=\"#\">Logo</a></li>\r\n            <li class=\"menu\">\r\n                <div class=\"menu-bar-button padding-0-5-rem\">\r\n                    <div></div>\r\n                    <div></div>\r\n                    <div></div>\r\n                </div>\r\n                <ul class=\"menu-bar-expanded\">\r\n                    <li class=\"padding-0-5-rem active\"><a href=\"#home\" value=\"slide-show\">Home</a></li>\r\n                    <li class=\"padding-0-5-rem\"><a href=\"#services\" value=\"service-section\">Services</a></li>\r\n                    <li class=\"padding-0-5-rem\"><a href=\"#contact\" value=\"contact\">Contact Us</a></li>\r\n                    <li class=\"padding-0-5-rem\"><a href=\"#about\" value=\"about\">About Us</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"slide-show\">\r\n            <div class=\"slide-image image-1 move-right-center centered\">\r\n                <div class=\"skewed\"></div>\r\n                <div class=\"text\">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class=\"slide-image image-2\">\r\n                <div class=\"skewed\"></div>\r\n                <div class=\"text\">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class=\"slide-image image-3\">\r\n                <div class=\"skewed\"></div>\r\n                <div class=\"text\">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class=\"slide-image image-4\">\r\n                <div class=\"skewed\"></div>\r\n                <div class=\"text\">\r\n                    <h1>Lorem ipsum dolor sit amet.</h1>\r\n                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        \r\n                </div>\r\n            </div>\r\n            <div class=\"slide-nav-bar\">\r\n                <button class=\"slide-nav-bar-1 active\" value=\"1\"></button>\r\n                <button class=\"slide-nav-bar-2\" value=\"2\"></button>\r\n                <button class=\"slide-nav-bar-3\" value=\"3\"></button>\r\n                <button class=\"slide-nav-bar-4\" value=\"4\"></button>\r\n            </div>\r\n            <div class=\"slide-buttons\">\r\n                <button class=\"slide-button\" value=\"dec\"><</button>\r\n                <button class=\"slide-button\" value=\"inc\">></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"service-section\">\r\n            <p class=\"service-header\">This is why you should choose us...</p>\r\n            <div class=\"services\">\r\n                <div class=\"service\">\r\n                    <img src=\"images/info1.png\" alt=\"\">\r\n                    <div class=\"text\">\r\n                        <p>Lorem ipsum dolor sit.</p>\r\n                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"service\">\r\n                    <img src=\"images/info2.jpg\" alt=\"\">\r\n                    <div class=\"text\">\r\n                        <p>Lorem ipsum dolor sit.</p>\r\n                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"service\">\r\n                    <img src=\"images/info3.png\" alt=\"\">\r\n                    <div class=\"text\">\r\n                        <p>Lorem ipsum dolor sit.</p>\r\n                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempora error! Quaerat modi asperiores adipisci aspernatur corporis illo reprehenderit earum officiis a voluptatem, soluta saepe. Impedit, rem? Incidunt adipisci nobis excepturi, neque quas dicta repudiandae dolores minima assumenda deserunt minus!</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n        <div class=\"contact\">\r\n            <p class=\"contact-header\">Enquiry</p>\r\n            <form>\r\n                <label for=\"cname\">Name</label>\r\n                <input type=\"text\" name=\"cname\" id=\"\">\r\n                <label for=\"cphone\">Phone</label>\r\n                <input type=\"text\" name=\"cphone\" id=\"\">\r\n                <label for=\"cemail\">Email</label>\r\n                <input type=\"text\" name=\"cemail\" id=\"\">\r\n                <label for=\"cmessage\">Message</label>\r\n                <textarea name=\"cmessage\" id=\"\" cols=\"30\" rows=\"5\"></textarea>\r\n                <button type=\"submit\">Submit</button>\r\n            </form>\r\n        </div>\r\n        <div class=\"about\">\r\n            <div class=\"red-div\"></div>\r\n            <p>About Us</p>\r\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto atque deleniti dolor saepe dolorum est odio optio. Reiciendis possimus nihil, sed enim distinctio adipisci quisquam, dolorem aliquam dolorum maiores id.</p>\r\n            <div class=\"followers\">\r\n                <ul>\r\n                    <li>Fool us on</li>\r\n                    <li><a href=\"#\" target=\"_blank\"><img src=\"gatsby.svg\" alt=\"\"></a></li>\r\n                    <li><a href=\"#\" target=\"_blank\"><img src=\"gatsby.svg\" alt=\"\"></a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"developerOnly\">\r\n        <p>This website is Created & Developed by</p>\r\n        <img src=\"gatsby.svg\" alt=\"\">\r\n    </div>\r\n    <div class=\"goTop inactive\">^</div>\r\n    <script type=\"text/javascript\" src=\"dist/index.js\"></script>\r\n</body>\r\n</html>"
    
    /***/ }),
    
    /***/ "./main.js":
    /*!*****************!*\
      !*** ./main.js ***!
      \*****************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    
    var config = __webpack_require__(/*! ./config.json */ "./config.json");
    
    if (config.enableDevMode) {
      __webpack_require__(/*! ./index.html */ "./index.html");
    
      __webpack_require__(/*! ./index.css */ "./index.css");
    }
    
    var menu =
    /*#__PURE__*/
    function () {
      function menu() {
        _classCallCheck(this, menu);
    
        this.addEventListners();
      }
    
      _createClass(menu, [{
        key: "addEventListners",
        value: function addEventListners() {
          var _this = this;
    
          var menuBarExpanded = document.getElementsByClassName("menu");
          var li = menuBarExpanded[0].getElementsByTagName("li");
          var liArray = Array.from(li);
          liArray.map(function (element) {
            element.addEventListener("click", function (e) {
              var startY = _this.currentYPosition();
    
              var stopY = _this.elementYPosition(element.getElementsByTagName("a")[0].getAttribute("value"));
    
              _this.smoothScroll(startY, stopY);
            });
          });
          var menu = document.getElementsByClassName("main-menu");
          menu[0].addEventListener("click", function (e) {
              
          var mediaQuery = window.matchMedia("(max-width: 540px)");
          if (mediaQuery.matches) {
              if (menu[0].classList.contains("close")) {
                menu[0].classList.remove("close");
                menu[0].getElementsByTagName("ul")[0].classList.remove("active");
              } else {
                menu[0].classList.add("close");
                menu[0].getElementsByTagName("ul")[0].classList.add("active");
              }
            }
          });
          
          var goTop = document.getElementsByClassName("goTop");
          goTop[0].addEventListener("click", function (e) {
            var startY = _this.currentYPosition();
    
            var stopY = 0;
    
            _this.smoothScroll(startY, stopY);
          });
        //   window.addEventListener("scroll", function (e) {
        //     var currentY = _this.currentYPosition();
    
        //     currentY += self.innerHeight / 1.9;
        //     console.log("".concat(_this.currentYPosition(), " : ").concat(currentY));
    
        //     var secondViewOffsetTop = _this.elementYPosition("service-section");
    
        //     if (currentY > secondViewOffsetTop) {
        //       goTop[0].classList.add("active");
        //       goTop[0].classList.remove("inactive");
        //     } else {
        //       goTop[0].classList.remove("active");
        //       goTop[0].classList.add("inactive");
        //     }
    
        //     liArray.filter(function (element) {
        //       element.classList.remove("active");
        //     });
        //     liArray.filter(function (element) {
        //       var anchorValue = element.getElementsByTagName("a")[0].getAttribute("value");
        //       var view = document.getElementsByClassName(anchorValue);
    
        //       var viewOffsetTop = _this.elementYPosition(anchorValue);
    
        //       var viewOffsetBottom = viewOffsetTop + view[0].offsetHeight;
    
        //       if (currentY >= viewOffsetTop && currentY <= viewOffsetBottom) {
        //         element.classList.add("active");
        //       }
        //     });
        //   });
        }
      }, {
        key: "currentYPosition",
        value: function currentYPosition() {
          if (self.pageYOffset) return self.pageYOffset;
          if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
          if (document.body.scrollTop) return document.body.scrollTop;
          return 0;
        }
      }, {
        key: "elementYPosition",
        value: function elementYPosition(elementName) {
          var element = document.getElementsByClassName(elementName);
          var y = element[0].offsetTop;
          var node = element;
    
          while (node[0].offsetParent && node[0].offsetParent != document.body) {
            node = [];
            node.push(element[0].offsetParent);
            y += node[0].offsetTop;
          }
    
          y -= document.getElementsByClassName("header")[0].offsetHeight;
          return y;
        }
      }, {
        key: "smoothScroll",
        value: function smoothScroll(startY, stopY) {
          var distance = stopY > startY ? stopY - startY : startY - stopY;
    
          if (distance < 100) {
            scrollTo(0, stopY);
            return;
          }
    
          var speed = Math.round(distance / 100);
          if (speed >= 20) speed = 20;
          var step = Math.round(distance / 25);
          var leapY = stopY > startY ? startY + step : startY - step;
          var timer = 0;
    
          if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
              setTimeout("window.scrollTo(0, ".concat(leapY, ")"), timer * speed);
              leapY += step;
              if (leapY > stopY) leapY = stopY;
              timer++;
            }
    
            return;
          } else {
            for (var _i = startY; _i > stopY; _i -= step) {
              setTimeout("window.scrollTo(0, ".concat(leapY, ")"), timer * speed);
              leapY -= step;
              if (leapY < stopY) leapY = stopY;
              timer++;
            }
          }
    
          return false;
        }
      }]);
    
      return menu;
    }();
    
    new menu();
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=index.js.map
});
