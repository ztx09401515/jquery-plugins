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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jtCarousel/test/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/component.js":
/*!************************************!*\
  !*** ./src/component/component.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
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
}

var Component =
/*#__PURE__*/
function () {
  function Component(props) {
    _classCallCheck(this, Component);

    _defineProperty(this, "props", {});

    _defineProperty(this, "state", {});

    this.props = props;
  }

  _createClass(Component, [{
    key: "mergeClassName",
    value: function mergeClassName() {
      var re = '';

      for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
        classNames[_key] = arguments[_key];
      }

      for (var _i = 0; _i < classNames.length; _i++) {
        var classname = classNames[_i];
        re = classname ? re + ' ' + classname : re;
      }

      return re;
    }
  }]);

  return Component;
}();

var _default = Component;
exports.default = _default;

/***/ }),

/***/ "./src/jtCarousel/jtCarousel.css":
/*!***************************************!*\
  !*** ./src/jtCarousel/jtCarousel.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"jtCarouselBoard":"jtCarouselBoard","jtCarouselUl":"jtCarouselUl","jtCarouselItem":"jtCarouselItem","jtCarouselSmUl":"jtCarouselSmUl","jtCarouselSmHandler":"jtCarouselSmHandler","active":"active"};

/***/ }),

/***/ "./src/jtCarousel/jtCarousel.js":
/*!**************************************!*\
  !*** ./src/jtCarousel/jtCarousel.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _component = _interopRequireDefault(__webpack_require__(/*! ../component/component */ "./src/component/component.js"));

var _jtCarousel = _interopRequireDefault(__webpack_require__(/*! ./jtCarousel.css */ "./src/jtCarousel/jtCarousel.css"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
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
}

var JtCarousel =
/*#__PURE__*/
function (_Component) {
  _inherits(JtCarousel, _Component);

  _createClass(JtCarousel, [{
    key: "toIndex",
    value: function toIndex(index) {}
  }]);

  function JtCarousel(props) {
    var _this;

    _classCallCheck(this, JtCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JtCarousel).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "board", null);

    _this.board = document.createElement('ul');
    $(props.container).append(_this.board).addClass(_this.mergeClassName(_jtCarousel.default.jtCarouselBoard, props.className));
    if (props.style) $(_this.board).css(props.style);
    var width = $(_this.board).width(),
        height = $(_this.board).height();
    props.contents.forEach(function (c, index) {
      var $li = $(_this.board).append('<li></li>').addClass(_jtCarousel.default.jtCarouselItem);
      $li.append('<img/>').attr('src', c.src).attr('href', c.url).css({
        width: width,
        height: height
      });
    });
    return _this;
  }

  return JtCarousel;
}(_component.default); // contents:[{
// text:'',
// name:'',
// html:'',element,
// click
// active:false,
// disabled:false,
// }]
// event:'onIndexChangeStart',function(event,currentindex,targetindex){}
// 'onIndexChangeEnd',function(event,currentindex){}


exports.default = JtCarousel;

var JtCarousel_ = function JtCarousel_(container, board, options) {
  _component.default.apply(this, [container, board, options]);

  this.contents = options.contents;
  this.current = options.current;
  this.width = $(board).width();
  this.height = $(board).height();
  this.length = this.contents.length;
  var $ul = $(this.board).children('[jtCarouselUl]');

  if (!options.autoMove) {
    return;
  }

  var thisobj = this;
  this.fireAnim();
};

JtCarousel_.prototype = {
  container: null,
  contents: null,
  options: null,
  name: null,
  width: null,
  height: null,
  length: null,
  current: null,
  value: null,
  threadId: null,
  animate: false,
  fireAnim: function fireAnim() {
    var thisobj = this;
    this.animate = true;

    if (this.threadId) {
      try {
        window.clearTimeout(this.threadId);
      } finally {}

      this.threadId = null;
    }

    this.threadId = window.setTimeout(function () {
      var tarindex = thisobj.current + 1;
      thisobj.threadId = null;
      tarindex = tarindex > thisobj.length - 1 ? 0 : tarindex;
      thisobj.setByIndex(tarindex, function () {
        thisobj.fireAnim();
      });
    }, thisobj.options.duration);
  },
  setByName: function setByName(name) {},
  setWidth: function setWidth(width) {
    this.width = width;
  },
  setByIndex: function setByIndex(index, callback) {
    if (index > this.length - 1) {
      return;
    }

    var $ul = $(this.board).children('[jtCarouselUl]');
    var $smhandler = $(this.board).children('[jtCarouselSmUl]').children('[jtCarouselSmHandler]');
    var tarRatio = -100 * index;
    var thisobj = this;
    $(this.container).trigger('jt.carousel.onIndexChangeStart', [this.current, index]);
    $ul.animate({
      left: tarRatio + '%'
    }, this.options.speed, 'linear', function () {
      $(this.container).trigger('jt.carousel.onIndexChangeEnd', [index]);
      thisobj.current = index;
      if (callback) callback();
    });
    $smhandler.removeClass('active');
    $($smhandler[index]).addClass('active');
  }
};
JtCarousel_.prototype.__proto__ = _component.default.prototype;
JtCarousel_.defaultOptions = {
  contents: [],
  current: 0,
  width: null,
  height: null,
  speed: 1000,
  //millisecond
  duration: 2000,
  autoMove: true,
  boardClass: 'jtCarouselBoard',
  ulClass: 'jtCarouselUl',
  smUlClass: 'jtCarouselSmUl',
  itemClass: 'jtCarouselItem',
  smHandlerClass: 'jtCarouselSmHandler',
  onValueChange: function onValueChange(targetelement, value) {}
};
JtCarousel_.boardTemp = '<div jtCarouselBoard></div>';
JtCarousel_.ulTemp = '<ul jtCarouselUl></ul>';
JtCarousel_.smUlTemp = '<ul jtCarouselSmUl></ul>';
JtCarousel_.itemTemp = '<li jtCarouselItem></li>';
JtCarousel_.smHandlerTemp = '<li jtCarouselSmHandler></li>';

$.fn.jtCarousel = function (options, args) {
  this.each(function (index, el) {
    new JtCarousel(_objectSpread({
      container: el
    }, options));
  });
};

/***/ }),

/***/ "./src/jtCarousel/test/entry.js":
/*!**************************************!*\
  !*** ./src/jtCarousel/test/entry.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jtCarousel = _interopRequireDefault(__webpack_require__(/*! ../jtCarousel */ "./src/jtCarousel/jtCarousel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  $('#root').jtCarousel({
    contents: [{
      src: './resources/shan1.jpg',
      url: ''
    }, {
      src: './resources/shan2.jpg',
      url: ''
    }, {
      src: './resources/shan3.jpg',
      url: ''
    }]
  });
});

/***/ })

/******/ });
//# sourceMappingURL=jtCarousel.js.map