import Component, {CommonProps} from '../component/component.ts'
import '../appendLink/appendLink';
import "../search-input/search-input.ts";
import SearchInput, {SearchInputProps} from "../search-input/search-input";

import "../search-input/search-input.ts";
import '../hasDescendant/hasDescendant.js';
import styles from './search-multi-select.css'

interface selectItemModel {
    value: number | string,
    text: string
}

export declare interface SearchMultiSelectProps extends CommonProps {
    searchInputProps: SearchInputProps,
    preSearchCount: number,
    onChange: (value: selectItemModel[]) => void,
    preSearchSupplier: (value: string) => selectItemModel[],
}

class SearchMultiSelect extends Component {
    board = null;

    static defaultProps = {
        preSearchCount: 1,
    }

    searchInput: SearchInput = null;
    select: HTMLDivElement = null;
    selectlist: HTMLUListElement = null;
    resultBox: HTMLDivElement = null;
    resultBoard:HTMLDivElement=null;
    data: {
        key: string,
        ps: selectItemModel[],
        result: selectItemModel[],
    } = {
        key: null,
        ps: [],
        result: [],
    }

    search() {
        var props = this.props, key = this.data.key;
        if (key && key.length >= props.preSearchCount) {
            this.data.ps = props.preSearchSupplier.apply(this, [key]);
            this.refreshSelect();
        }
    }

    refreshResult(show=true) {
        var $result = $(this.resultBoard);
        $result.children().remove();
        this.data.result.forEach((r) => {
            var $item = $result.appendLink('<div></div>')
                .on('mousemove',(e)=>{
                    this.showResult();
                    e.originalEvent.resultBoxOver=true;
                })
                .addClass(styles.resultItem).attr('title', r.text).attr('data-value', r.value);
            $item.appendLink('<span></span>').text(r.text).addClass(styles.resultContent);
            $item.appendLink('<div></div>')
                .on('click', (e) => {
                    var value = $item.attr('data-value');
                    var tarIndex = this.getResultIndex(value);
                    if (tarIndex !== null) {
                        this.data.result.splice(tarIndex, 1);
                        this.refreshResult();
                    }
                })
                .addClass(this.mergeClassName('fas fa-times', styles.cross));
        });
        this.refreshSelect(show);
        this.props.onChange?this.props.onChange.apply(this,[this.data.result]):null
    }

    getResultIndex(value, findCallback?: any) {
        var tarIndex = null;
        this.data.result.forEach((r, index) => {
            if (r.value === value) {
                tarIndex = index;
                findCallback ? findCallback(r, index) : null
            }
        })
        return tarIndex;
    }
    clearResult(show=true){
        this.data.result=[];
        this.refreshResult(show);
    }
    setPreSearch(ps,show){
        this.data.ps=ps;
        this.refreshSelect(show);
    }

    setResult(result){
        this.data.result=result;
        this.refreshResult(false);
    }

    refreshSelect(show=true) {
        var props = this.props, $selectlist = $(this.selectlist);
        if(show) {
            $selectlist.show();
        }
        $selectlist.children().remove();

        this.data.ps.forEach((p, index) => {
            var $item = $selectlist.appendLink('<li></li>').addClass(styles.msItem)
                .on('click', (e) => {
                    var tarIndex = null, match = false;

                    var iv = $item.attr('data-value');
                    var text = $item.text();
                    tarIndex = this.getResultIndex(iv, (v) => {
                        match = true;
                    })
                    if (match) {
                        this.data.result.splice(tarIndex, 1);
                        this.refreshResult();
                    } else {
                        this.data.result.push({value: iv, text: text});
                        this.refreshResult();
                    }
                    e.preventDefault();
                })
                .attr('data-value', p.value).text(p.text);
            $item .appendLink('<span></span>')
                .addClass(this.mergeClassName('fas fa-check', styles.msTick));
            var checkedIndex = this.getResultIndex(p.value.toString());
            if (checkedIndex !== null) {
                $item.addClass(styles.active);
            }
        });
    }

    disActive(){
        $(this.selectlist).hide();
    }
    showResult(){
        $(this.resultBoard).show()
    }
    hideResult(){
        $(this.resultBoard).hide()
    }
    constructor(props: SearchMultiSelectProps) {
        super(props);
        $(document).click((e)=>{
            var target=e.target;
            // var find=$(this.select).hasDescendant(target,(temp,t)=>{
            //     var tV=$(t).attr('data-value');
            //     var tempV= $(temp).attr('data-value')
            //     return (tempV&&tV&&tempV===tV)||temp==t||$
            // });

            if(target!==this.select&&!e.originalEvent.searchMultiSelectClick){
                this.disActive();
            }
        })
            .on('mousemove',(e)=>{
                var target=e.target;
                // var findbox=$.contains(this.resultBox,target);
                // var findboard=$.contains(this.resultBoard,target);
                // console.log(target);
                if(target!==this.resultBox&&!e.originalEvent.resultBoxOver){
                    // console.log('hideresult')
                    this.hideResult();
                }
            });
        this.board = document.createElement('div');
        $(props.container).append(this.board);
        var $board = $(this.board);
        $board.addClass(this.mergeClassName(styles.searchMultiSelectBoard, props.className))
            .on('click',(e)=>{
                e.originalEvent.searchMultiSelectClick=true;
            });
        if (props.style)
            $board.css(props.style);
        this.searchInput = $board.searchInput({
            placeholder:'线路搜索',
            className: styles.msSearchInput,
            onChange: (value) => {
                this.data.key = value;
                this.search();
            },
        })[0];
        this.select = $board.appendLink('<div></div>')
            .on('click', (e) => {
                $(this.selectlist).show();
                e.originalEvent.searchMultiSelectClick=true;
            })
            .addClass(styles.msSelect)[0];
        $(this.select).appendLink('<span></span>').addClass(styles.selectLabel).appendLink('<span></span>').text('--请选择--');
        $(this.select).appendLink('<div></div>').addClass(this.mergeClassName('fas fa-angle-down', styles.msSelectDownArrow));

        this.selectlist = $(this.select).appendLink('<ul></ul>')
            .on('click',(e)=>{
                e.originalEvent.searchMultiSelectClick=true;
            })
            .addClass(styles.msSelectList).hide()[0]
        this.resultBox = $board.appendLink('<div></div>').text('结果显示')
            .on('mousemove',(e)=>{
                e.originalEvent.resultBoxOver=true;
                this.showResult();
            })
            .on('click',(e)=>{
                e.originalEvent.searchMultiSelectClick=true;
            })
            .addClass(styles.msResultBox)[0];
        this.resultBoard=$(this.resultBox)
            .on('mousemove',(e)=>{
                this.showResult();
                e.originalEvent.resultBoxOver=true;
            })
            .appendLink('<div></div>').addClass(styles.msResultBoard).hide()[0];
    }

}

$.fn.searchMultiSelect = function (options: SearchMultiSelectProps) {
    var sms=[];
    this.each(function (index, el) {
       var sm= new SearchMultiSelect({container: el, ...options});
       sms.push(sm)
    });
    return sms;
}
export default SearchMultiSelect;