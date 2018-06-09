import Component, {CommonProps} from '../component/component.ts'
import styles from './jtCarousel.css'
import '../appendLink/appendLink'

interface JtCarouselProps extends CommonProps {
    stayTime?: number,
    moveDuration?: number,

    contents: {
        url: string,
        src: string,
    }[],
}

export default class JtCarousel extends Component {
    state = {}
    static defaultProps = {
        moveDuration: 300,
        stayTime: 1500,

    }

    toIndex(index: number) {

    }

    board: HTMLElement = null;
    $ul: JQuery = null;
    $cul: JQuery = null;
    width: number = null;
    currentIndex: number = 0;
    auto: boolean = true;

    toIndex(index: number, callback: () => void) {
        var tindex=index % this.props.contents.length, left: number = tindex * this.width;
        this.$ul.clearQueue();
        this.$ul.animate({left: -left}, this.props.moveDuration, () => {
            this.currentIndex = tindex;
            this.$cul.children('li').removeClass('active')
            $(this.$cul.children('li')[tindex]).addClass('active')
            callback ? callback() : null
        });
    }

    stopLoop() {
        if (this.loopThread)
            clearInterval(this.loopThread)
    }

    loopThread = null;

    loop() {
        let thisComp = this;
        this.loopThread = setInterval(() => {
            thisComp.toIndex(thisComp.currentIndex + 1);
        }, thisComp.props.stayTime)
    }

    constructor(props: JtCarouselProps) {
        super(props);
        this.board = document.createElement('div')
        $(props.container).appendLink(this.board)
            .addClass(this.mergeClassName(styles.jtCarouselBoard, props.className));
        if (props.style)
            $(this.board).css(props.style).on('mouseover', () => {
                this.stopLoop()
            }).on('mouseleave', () => {
                this.loop()
            })
        this.width = $(this.board).width();
        var height = $(this.board).height();
        this.$ul = $(this.board).appendLink('<ul></ul>').addClass(styles.jtCarouselUl).css({
            width: this.width * props.contents.length,
            height: height,
            position: 'absolute',
        });
        this.$cul = $(this.board).appendLink('<div></div>')
            .addClass(styles.jtCarouselSmUl).appendLink('<ul></ul>');

        props.contents.forEach((c, index) => {
            var $li = this.$ul.appendLink('<li></li>').addClass(styles.jtCarouselItem).appendLink('<a></a>')
                .attr('href', c.url)
                .appendLink('<img/>')
                .attr('src', c.src)
                .css({
                    width: this.width,
                    height: height,
                });
            var $c = this.$cul.appendLink('<li></li>').addClass(styles.jtCarouselSmHandler).on('click'
                , () => {
                    this.toIndex(index)
                });

        });
        this.loop()
    }

}


// contents:[{
// text:'',
// name:'',
// html:'',element,
// click
// active:false,
// disabled:false,
// }]
// event:'onIndexChangeStart',function(event,currentindex,targetindex){}
// 'onIndexChangeEnd',function(event,currentindex){}

var JtCarousel_ = function (container, board, options) {
    Component.apply(this, [container, board, options]);
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
    fireAnim: function () {
        var thisobj = this;
        this.animate = true;
        if (this.threadId) {
            try {
                window.clearTimeout(this.threadId);
            } finally {
            }
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
    setByName: function (name) {

    },
    setWidth: function (width) {
        this.width = width;
    },
    setByIndex: function (index, callback) {
        if (index > this.length - 1) {
            return;
        }
        var $ul = $(this.board).children('[jtCarouselUl]');
        var $smhandler = $(this.board).children('[jtCarouselSmUl]').children('[jtCarouselSmHandler]');
        var tarRatio = -100 * index;
        var thisobj = this;
        $(this.container).trigger('jt.carousel.onIndexChangeStart', [this.current, index]);
        $ul.animate({left: tarRatio + '%'}, this.options.speed, 'linear', function () {
            $(this.container).trigger('jt.carousel.onIndexChangeEnd', [index]);
            thisobj.current = index;
            if (callback)
                callback();

        });

        $smhandler.removeClass('active');
        $($smhandler[index]).addClass('active');
    },

};
JtCarousel_.prototype.__proto__ = Component.prototype;
JtCarousel_.defaultOptions = {

    contents: [],
    current: 0,
    width: null,
    height: null,
    speed: 1000,//millisecond
    duration: 2000,
    autoMove: true,
    boardClass: 'jtCarouselBoard',
    ulClass: 'jtCarouselUl',
    smUlClass: 'jtCarouselSmUl',
    itemClass: 'jtCarouselItem',
    smHandlerClass: 'jtCarouselSmHandler',
    onValueChange: function (targetelement, value) {
    },

};
JtCarousel_.boardTemp = '<div jtCarouselBoard></div>';
JtCarousel_.ulTemp = '<ul jtCarouselUl></ul>';
JtCarousel_.smUlTemp = '<ul jtCarouselSmUl></ul>';
JtCarousel_.itemTemp = '<li jtCarouselItem></li>';
JtCarousel_.smHandlerTemp = '<li jtCarouselSmHandler></li>';


$.fn.jtCarousel = function (options: JtCarouselProps, args) {
    this.each(function (index, el) {
        new JtCarousel({container: el, ...options})
    });

};
