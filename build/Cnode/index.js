(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.2'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "cnode-page"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": "../Common/cnode.png"
	      }
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "titleline"
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "repeat": function () {return this.CnodeList},
	      "classList": [
	        "list"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "item"
	          ],
	          "events": {
	            "click": function (evt) {this.goToWeb(this.$item.id,evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.$item.author.avatar_url},
	                "alt": function () {return this.$item.author.loginname}
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "置顶"
	              },
	              "classList": [
	                "zhiding"
	              ],
	              "shown": function () {return this.$item.top}
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "分享"
	              },
	              "classList": [
	                "types"
	              ],
	              "shown": function () {return this.$item.tab==='share'&&!this.$item.top}
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "问答"
	              },
	              "classList": [
	                "types"
	              ],
	              "shown": function () {return (this.$item.tab==='ask'&&!this.$item.top)&&!(this.$item.tab==='share'&&!this.$item.top)}
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "工作"
	              },
	              "classList": [
	                "types"
	              ],
	              "shown": function () {return (this.$item.tab==='job'&&!this.$item.top)&&!(this.$item.tab==='share'&&!this.$item.top)&&!(this.$item.tab==='ask'&&!this.$item.top)}
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "topic_title_wrapper"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {},
	                  "classList": [
	                    "textss"
	                  ],
	                  "children": [
	                    {
	                      "type": "a",
	                      "attr": {},
	                      "classList": [
	                        "topic_title"
	                      ],
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.$item.title}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".cnode-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".cnode-page image": {
	    "width": "50%",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cnode-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".titleline": {
	    "backgroundColor": "#444444",
	    "width": "100%",
	    "height": "5px"
	  },
	  ".list": {
	    "paddingTop": "10px",
	    "paddingRight": "0px",
	    "paddingBottom": "10px",
	    "paddingLeft": "0px"
	  },
	  ".list .item": {
	    "width": "100%",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#cccccc",
	    "borderStyle": "solid",
	    "color": "#000000",
	    "paddingTop": "10px",
	    "paddingRight": "5px",
	    "paddingBottom": "10px",
	    "paddingLeft": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        }
	      ]
	    }
	  },
	  ".item image": {
	    "width": "60px",
	    "height": "60px",
	    "marginTop": "0px",
	    "marginRight": "10px",
	    "marginBottom": "0px",
	    "marginLeft": "10px",
	    "borderRadius": "6px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".zhiding": {
	    "backgroundColor": "#80bd01",
	    "paddingTop": "2px",
	    "paddingRight": "4px",
	    "paddingBottom": "2px",
	    "paddingLeft": "4px",
	    "width": "55px",
	    "textAlign": "center",
	    "borderRadius": "3px",
	    "color": "#ffffff",
	    "fontSize": "20px"
	  },
	  ".types": {
	    "backgroundColor": "#e5e5e5",
	    "color": "#999999",
	    "width": "55px",
	    "textAlign": "center",
	    "paddingTop": "2px",
	    "paddingRight": "4px",
	    "paddingBottom": "2px",
	    "paddingLeft": "4px",
	    "borderRadius": "3px",
	    "fontSize": "20px"
	  },
	  ".item .topic_title_wrapper": {
	    "fontSize": "30px",
	    "lineHeight": "50px",
	    "paddingLeft": "10px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "topic_title_wrapper"
	        }
	      ]
	    }
	  },
	  ".item .textss": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "textss"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    title: 'Cnode',
	
	    jokeList: [],
	    CnodeList: []
	  },
	  onInit: function onInit() {
	    console.info('\u89E6\u53D1\uFF1AonInit');
	  },
	  goToWeb: function goToWeb(urlString) {
	    _system2.default.push({
	      uri: '/CnodeDetail',
	      params: {
	        url: urlString
	      }
	    });
	  },
	  onReady: function onReady() {
	    var _this = this;
	    _system4.default.fetch({
	      url: 'https://cnodejs.org/api/v1/topics',
	      method: 'get',
	      success: function success(res) {
	        var cn = JSON.parse(res.data);
	        console.log(cn);
	        if (cn.success == true) {
	          console.log("状态成功");
	          var cnode = cn.data;
	          _this.CnodeList = cnode;
	        }
	      },
	      fail: function fail() {
	        console.log("失败");
	      }
	    });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map