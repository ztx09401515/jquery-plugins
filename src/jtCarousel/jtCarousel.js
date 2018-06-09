"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _component = _interopRequireDefault(require("../component/component.ts"));

var _jtCarousel = _interopRequireDefault(require("./jtCarousel.css"));

require("../appendLink/appendLink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JtCarousel =
/*#__PURE__*/
function (_Component) {
  _inherits(JtCarousel, _Component);

  _createClass(JtCarousel, [{
    key: "toIndex",
    value: function toIndex(index) {}
  }, {
    key: "toIndex",
    value: function toIndex(index, callback) {
      var _this2 = this;

      var tindex = index % this.props.contents.length,
          left = tindex * this.width;
      this.$ul.clearQueue();
      this.$ul.animate({
        left: -left
      }, this.props.moveDuration, function () {
        _this2.currentIndex = tindex;

        _this2.$cul.children('li').removeClass('active');

        $(_this2.$cul.children('li')[tindex]).addClass('active');
        callback ? callback() : null;
      });
    }
  }, {
    key: "stopLoop",
    value: function stopLoop() {
      if (this.loopThread) clearInterval(this.loopThread);
    }
  }, {
    key: "loop",
    value: function loop() {
      var thisComp = this;
      this.loopThread = setInterval(function () {
        thisComp.toIndex(thisComp.currentIndex + 1);
      }, thisComp.props.stayTime);
    }
  }]);

  function JtCarousel(props) {
    var _this;

    _classCallCheck(this, JtCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JtCarousel).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "board", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$ul", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "$cul", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "width", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "currentIndex", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "auto", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loopThread", null);

    _this.board = document.createElement('div');
    $(props.container).appendLink(_this.board).addClass(_this.mergeClassName(_jtCarousel.default.jtCarouselBoard, props.className));
    if (props.style) $(_this.board).css(props.style).on('mouseover', function () {
      _this.stopLoop();
    }).on('mouseleave', function () {
      _this.loop();
    });
    _this.width = $(_this.board).width();
    var height = $(_this.board).height();
    _this.$ul = $(_this.board).appendLink('<ul></ul>').addClass(_jtCarousel.default.jtCarouselUl).css({
      width: _this.width * props.contents.length,
      height: height,
      position: 'absolute'
    });
    _this.$cul = $(_this.board).appendLink('<div></div>').addClass(_jtCarousel.default.jtCarouselSmUl).appendLink('<ul></ul>');
    props.contents.forEach(function (c, index) {
      var $li = _this.$ul.appendLink('<li></li>').addClass(_jtCarousel.default.jtCarouselItem).appendLink('<a></a>').attr('href', c.url).appendLink('<img/>').attr('src', c.src).css({
        width: _this.width,
        height: height
      });

      var $c = _this.$cul.appendLink('<li></li>').addClass(_jtCarousel.default.jtCarouselSmHandler).on('click', function () {
        _this.toIndex(index);
      });
    });

    _this.loop();

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

_defineProperty(JtCarousel, "defaultProps", {
  moveDuration: 300,
  stayTime: 1000
});

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