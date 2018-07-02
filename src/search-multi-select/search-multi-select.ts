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
    onChange: (value: number[]) => void,
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

    refreshResult() {
        var $result = $(this.resultBox);
        $result.children().remove();
        this.data.result.forEach((r) => {
            var $item = $result.appendLink('<div></div>').addClass(styles.resultItem).attr('title', r.text).attr('data-value', r.value);
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
        this.refreshSelect();
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

    refreshSelect() {
        var props = this.props, $selectlist = $(this.selectlist);
        $selectlist.show();
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

    constructor(props: SearchMultiSelectProps) {
        super(props);
        $(document).click((e)=>{
            var target=e.target;
            var find=$(this.select).hasDescendant(target,(temp,t)=>{
                var tV=$(t).attr('data-value');
                var tempV= $(temp).attr('data-value')
                return tempV!==undefined&&tV!==undefined&&tempV===tV
            });

            if(target!==this.select&&!find){
                this.disActive();
            }
        })
        this.board = document.createElement('div');
        $(props.container).append(this.board);
        var $board = $(this.board);
        $board.addClass(this.mergeClassName(styles.searchMultiSelectBoard, props.className));
        if (props.style)
            $board.css(props.style);
        this.searchInput = $board.searchInput({
            className: styles.msSearchInput,
            onChange: (value) => {
                this.data.key = value;
                this.search();
            },
        })[0];
        this.select = $board.appendLink('<div></div>').text('--请选择--')
            .on('click', (e) => {
                $(this.selectlist).show();
            })
            .addClass(styles.msSelect)[0];
        $(this.select).appendLink('<div></div>').addClass(this.mergeClassName('fas fa-angle-down', styles.msSelectDownArrow));
        this.selectlist = $(this.select).appendLink('<ul></ul>').addClass(styles.msSelectList).hide()[0]
        this.resultBox = $board.appendLink('<div></div>').addClass(styles.msResultBox)[0];

    }

}

$.fn.searchMultiSelect = function (options: SearchMultiSelectProps) {
    this.each(function (index, el) {
        new SearchMultiSelect({container: el, ...options});
    })
}
export default SearchMultiSelect;