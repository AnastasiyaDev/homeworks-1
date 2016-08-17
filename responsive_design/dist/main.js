var main =
webpackJsonp_name_([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint no-unused-vars: "true"*/
	/*global require*/
	'use strict';

	const header = __webpack_require__(7);
	const imgGrid = __webpack_require__(10);
	const footer = __webpack_require__(13);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*global $ requere*/
	__webpack_require__(8);

	var headerHtml = requere('html!./index.html');
	requere('./temp-menu.js');

	// $('#header').html(headerHtml);
	document.getElementById('header').innerHTML += headerHtml;



/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".top-panel {\n  margin: 10px 20px;\n}\n.top-panel .info-menu {\n  float: left;\n}\n.top-panel .info-menu__link {\n  color: #666;\n}\n.top-panel .logo {\n  width: 25%;\n}\n@media only screen and (max-width: 767px) {\n  .top-panel .logo {\n    width: 40%;\n  }\n}\n.top-panel .reg-menu {\n  float: right;\n}\n.top-panel .reg-menu__link {\n  text-transform: uppercase;\n}\n.top-panel .info-menu__item,\n.top-panel .reg-menu__item {\n  padding: 5px;\n  margin: 10px 0;\n  border-right: 1px solid #d6d6d6;\n}\n.top-panel .info-menu__item:last-child,\n.top-panel .reg-menu__item:last-child {\n  border-right: none;\n}\n.top-panel .info-menu__link,\n.top-panel .reg-menu__link {\n  padding: 5px;\n  font-size: 12px;\n}\n.header-menu {\n  background: #000;\n  text-align: center;\n}\n.header-menu__item {\n  padding: 5px;\n}\n.header-menu__link {\n  padding: 5px;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n@media only screen and (max-width: 767px) {\n  .header-menu__link {\n    color: #000;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .menu {\n    width: 300px;\n    position: absolute;\n    height: 100vh;\n    background: #fff;\n    -webkit-transform: translate(-300px, 0);\n            transform: translate(-300px, 0);\n    -webkit-transition: all 1s;\n    transition: all 1s;\n  }\n  .menu.open {\n    -webkit-transform: translate(0px, 0);\n            transform: translate(0px, 0);\n  }\n  .menu-toggle {\n    position: absolute;\n    font-size: 160%;\n    cursor: pointer;\n    z-index: 100;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*global requere*/


	function welcome() {
	    __webpack_require__(11);

	    var gridHtml = requere('html!./index.html');
	    document.getElementById('imgGrid').innerHTML += gridHtml;

	}

	module.exports = welcome;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "body {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  max-width: 100%;\n  color: #000;\n  font-size: 14px;\n}\n.home-banner img {\n  max-width: 100%;\n}\n.home-banner .home-banner-item__image.hide-on-mobile {\n  display: none !important;\n}\n.home-banner .home-banner-item__image.only-mobile {\n  display: block !important;\n}\n.home-banner {\n  -js-display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n}\n.row-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n.row-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 30%;\n          flex: 0 0 30%;\n}\n.row-1,\n.row-2 {\n  -js-display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n}\n@media only screen and (max-width: 767px) {\n  .row-1,\n  .row-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n}\n.home-banner-item {\n  margin: 0;\n  padding: 0;\n}\n.home-banner-item img {\n  width: 100%;\n  height: 100%;\n}\n.home-banner-item_0 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 100%;\n          flex: 1 100%;\n}\n@media only screen and (max-width: 767px) {\n  .home-banner-item_0:before {\n    background: #d6d6d6 none repeat scroll 0 0;\n    content: \"\";\n    display: block;\n    height: 2px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .home-banner-item_1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n}\n.home-banner-item_2 {\n  height: 300px;\n  background: #88B5BA;\n}\n.home-banner-item_3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n}\n@media only screen and (max-width: 767px) {\n  .home-banner-item_3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n}\n.home-banner-item_4 {\n  height: 600px;\n  background: #000;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 70%;\n          flex: 0 0 70%;\n}\n@media only screen and (max-width: 767px) {\n  .home-banner-item_4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n  }\n}\n.home-banner-item_5 {\n  height: 300px;\n  background: #141414;\n}\n.home-banner-item_6 {\n  height: 300px;\n  background: #BB1C18;\n}\n.home-banner-item_7 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 100%;\n          flex: 1 100%;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/*global $ requere*/
	__webpack_require__(14);

	var footerHtml = requere('html!./index.html');

	$('#footer').html(footerHtml);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".streak {\n  text-transform: uppercase;\n  font-size: 16px;\n  text-align: center;\n}\n.streak .link-on-main-res {\n  font-weight: bold;\n}\n.streak:after {\n  background: #d6d6d6 none repeat scroll 0 0;\n  content: \"\";\n  display: block;\n  height: 1px;\n}\n.conditions {\n  -js-display: flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.conditions__block {\n  margin: 20px 0;\n  padding-right: 30px;\n  padding-left: 5px;\n  border-right: 1px solid #d6d6d6;\n  text-align: center;\n  font-size: 13px;\n}\n.conditions__block:last-child {\n  border-right: none;\n}\n.conditions__block .svg-icon {\n  width: 40px;\n  height: 40px;\n}\n.conditions__block h4 {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 0;\n}\n.conditions__block p {\n  color: #666;\n  margin-top: 5px;\n}\n@media only screen and (max-width: 767px) {\n  .conditions__block {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    border-right: 1px solid #d6d6d6;\n    border-bottom: 1px solid #d6d6d6;\n    margin: 0;\n    padding: 40px 5px;\n  }\n}\n", ""]);

	// exports


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlYWRlci9pbmRleC5sZXNzP2U1YTIiLCJ3ZWJwYWNrOi8vLy4vaGVhZGVyL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vaW1nLWdyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW1nLWdyaWQvaW5kZXgubGVzcz9lZTYzIiwid2VicGFjazovLy8uL2ltZy1ncmlkL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Zvb3Rlci9pbmRleC5sZXNzPzg2YjEiLCJ3ZWJwYWNrOi8vLy4vZm9vdGVyL2luZGV4Lmxlc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyplc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwidHJ1ZVwiKi9cbi8qZ2xvYmFsIHJlcXVpcmUqL1xuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWFkZXIgPSByZXF1aXJlKCcuL2hlYWRlcicpO1xuY29uc3QgaW1nR3JpZCA9IHJlcXVpcmUoJy4vaW1nLWdyaWQnKTtcbmNvbnN0IGZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL21haW4uanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKmdsb2JhbCAkIHJlcXVlcmUqL1xucmVxdWlyZSgnLi9pbmRleC5sZXNzJyk7XG5cbnZhciBoZWFkZXJIdG1sID0gcmVxdWVyZSgnaHRtbCEuL2luZGV4Lmh0bWwnKTtcbnJlcXVlcmUoJy4vdGVtcC1tZW51LmpzJyk7XG5cbi8vICQoJyNoZWFkZXInKS5odG1sKGhlYWRlckh0bWwpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLmlubmVySFRNTCArPSBoZWFkZXJIdG1sO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaGVhZGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4Lmxlc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vaGVhZGVyL2luZGV4Lmxlc3NcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3AtcGFuZWwge1xcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XFxufVxcbi50b3AtcGFuZWwgLmluZm8tbWVudSB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLnRvcC1wYW5lbCAuaW5mby1tZW51X19saW5rIHtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4udG9wLXBhbmVsIC5sb2dvIHtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC50b3AtcGFuZWwgLmxvZ28ge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG4udG9wLXBhbmVsIC5yZWctbWVudSB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi50b3AtcGFuZWwgLnJlZy1tZW51X19saW5rIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi50b3AtcGFuZWwgLmluZm8tbWVudV9faXRlbSxcXG4udG9wLXBhbmVsIC5yZWctbWVudV9faXRlbSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNmQ2ZDY7XFxufVxcbi50b3AtcGFuZWwgLmluZm8tbWVudV9faXRlbTpsYXN0LWNoaWxkLFxcbi50b3AtcGFuZWwgLnJlZy1tZW51X19pdGVtOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG4udG9wLXBhbmVsIC5pbmZvLW1lbnVfX2xpbmssXFxuLnRvcC1wYW5lbCAucmVnLW1lbnVfX2xpbmsge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uaGVhZGVyLW1lbnUge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlYWRlci1tZW51X19pdGVtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmhlYWRlci1tZW51X19saW5rIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5oZWFkZXItbWVudV9fbGluayB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAubWVudSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMDBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHB4LCAwKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIH1cXG4gIC5tZW51Lm9wZW4ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwKTtcXG4gIH1cXG4gIC5tZW51LXRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAxNjAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9ob21lL3VzZXIvcmVwby9ob21ld29ya3MtMS9yZXNwb25zaXZlX2Rlc2lnbi9+L2Nzcy1sb2FkZXIhL2hvbWUvdXNlci9yZXBvL2hvbWV3b3Jrcy0xL3Jlc3BvbnNpdmVfZGVzaWduL34vYXV0b3ByZWZpeGVyLWxvYWRlciEvaG9tZS91c2VyL3JlcG8vaG9tZXdvcmtzLTEvcmVzcG9uc2l2ZV9kZXNpZ24vfi9sZXNzLWxvYWRlciEuL2hlYWRlci9pbmRleC5sZXNzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLypnbG9iYWwgcmVxdWVyZSovXG5cblxuZnVuY3Rpb24gd2VsY29tZSgpIHtcbiAgICByZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTtcblxuICAgIHZhciBncmlkSHRtbCA9IHJlcXVlcmUoJ2h0bWwhLi9pbmRleC5odG1sJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ0dyaWQnKS5pbm5lckhUTUwgKz0gZ3JpZEh0bWw7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3ZWxjb21lO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ltZy1ncmlkL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXgubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ltZy1ncmlkL2luZGV4Lmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmhvbWUtYmFubmVyIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5ob21lLWJhbm5lciAuaG9tZS1iYW5uZXItaXRlbV9faW1hZ2UuaGlkZS1vbi1tb2JpbGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uaG9tZS1iYW5uZXIgLmhvbWUtYmFubmVyLWl0ZW1fX2ltYWdlLm9ubHktbW9iaWxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi5ob21lLWJhbm5lciB7XFxuICAtanMtZGlzcGxheTogZmxleDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1zLWZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG59XFxuLnJvdy0xIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgLW1zLWZsZXg6IDAgMCA1MCU7XFxuICAgICAgICAgIGZsZXg6IDAgMCA1MCU7XFxufVxcbi5yb3ctMiB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgIC1tcy1mbGV4OiAwIDAgMzAlO1xcbiAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xcbn1cXG4ucm93LTEsXFxuLnJvdy0yIHtcXG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLnJvdy0xLFxcbiAgLnJvdy0yIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcXG4gIH1cXG59XFxuLmhvbWUtYmFubmVyLWl0ZW0ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmhvbWUtYmFubmVyLWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaG9tZS1iYW5uZXItaXRlbV8wIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDEgMTAwJTtcXG4gICAgICAgICAgZmxleDogMSAxMDAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaG9tZS1iYW5uZXItaXRlbV8wOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQ6ICNkNmQ2ZDYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhvbWUtYmFubmVyLWl0ZW1fMSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAtbXMtZmxleDogMCAwIDEwMCU7XFxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XFxuICB9XFxufVxcbi5ob21lLWJhbm5lci1pdGVtXzIge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQ6ICM4OEI1QkE7XFxufVxcbi5ob21lLWJhbm5lci1pdGVtXzMge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAtbXMtZmxleDogMCAwIDUwJTtcXG4gICAgICAgICAgZmxleDogMCAwIDUwJTtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmhvbWUtYmFubmVyLWl0ZW1fMyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgICAgICAtbXMtZmxleDogMCAwIDEwMCU7XFxuICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XFxuICB9XFxufVxcbi5ob21lLWJhbm5lci1pdGVtXzQge1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgIC1tcy1mbGV4OiAwIDAgNzAlO1xcbiAgICAgICAgICBmbGV4OiAwIDAgNzAlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuaG9tZS1iYW5uZXItaXRlbV80IHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTAwJTtcXG4gIH1cXG59XFxuLmhvbWUtYmFubmVyLWl0ZW1fNSB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogIzE0MTQxNDtcXG59XFxuLmhvbWUtYmFubmVyLWl0ZW1fNiB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogI0JCMUMxODtcXG59XFxuLmhvbWUtYmFubmVyLWl0ZW1fNyB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxIDEwMCU7XFxuICAgICAgICAgIGZsZXg6IDEgMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvaG9tZS91c2VyL3JlcG8vaG9tZXdvcmtzLTEvcmVzcG9uc2l2ZV9kZXNpZ24vfi9jc3MtbG9hZGVyIS9ob21lL3VzZXIvcmVwby9ob21ld29ya3MtMS9yZXNwb25zaXZlX2Rlc2lnbi9+L2F1dG9wcmVmaXhlci1sb2FkZXIhL2hvbWUvdXNlci9yZXBvL2hvbWV3b3Jrcy0xL3Jlc3BvbnNpdmVfZGVzaWduL34vbGVzcy1sb2FkZXIhLi9pbWctZ3JpZC9pbmRleC5sZXNzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qZ2xvYmFsICQgcmVxdWVyZSovXG5yZXF1aXJlKCcuL2luZGV4Lmxlc3MnKTtcblxudmFyIGZvb3Rlckh0bWwgPSByZXF1ZXJlKCdodG1sIS4vaW5kZXguaHRtbCcpO1xuXG4kKCcjZm9vdGVyJykuaHRtbChmb290ZXJIdG1sKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZm9vdGVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXgubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2Zvb3Rlci9pbmRleC5sZXNzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0cmVhayB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc3RyZWFrIC5saW5rLW9uLW1haW4tcmVzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc3RyZWFrOmFmdGVyIHtcXG4gIGJhY2tncm91bmQ6ICNkNmQ2ZDYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDFweDtcXG59XFxuLmNvbmRpdGlvbnMge1xcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uY29uZGl0aW9uc19fYmxvY2sge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDZkNmQ2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4uY29uZGl0aW9uc19fYmxvY2s6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcbi5jb25kaXRpb25zX19ibG9jayAuc3ZnLWljb24ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5jb25kaXRpb25zX19ibG9jayBoNCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5jb25kaXRpb25zX19ibG9jayBwIHtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuY29uZGl0aW9uc19fYmxvY2sge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgLW1zLWZsZXg6IDAgMCA1MCU7XFxuICAgICAgICAgICAgZmxleDogMCAwIDUwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q2ZDZkNjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNDBweCA1cHg7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL2hvbWUvdXNlci9yZXBvL2hvbWV3b3Jrcy0xL3Jlc3BvbnNpdmVfZGVzaWduL34vY3NzLWxvYWRlciEvaG9tZS91c2VyL3JlcG8vaG9tZXdvcmtzLTEvcmVzcG9uc2l2ZV9kZXNpZ24vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS9ob21lL3VzZXIvcmVwby9ob21ld29ya3MtMS9yZXNwb25zaXZlX2Rlc2lnbi9+L2xlc3MtbG9hZGVyIS4vZm9vdGVyL2luZGV4Lmxlc3NcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==