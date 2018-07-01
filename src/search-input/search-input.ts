import Component, {CommonProps} from '../component/component.ts'
import '../appendLink/appendLink'
import getFileURL from '../getFileURL/getFileURL.js';
import styles from './search-input.css'


export declare interface SearchInputProps extends CommonProps {
    preSearchCount:number,
    onChange: (value: string) => void,
    preSearchSupplier:(value:string)=>string[],
}

class SearchInput extends Component {
    board = null;

    static defaultProps={
        preSearchCount:2,
    }

    handleChange(base64str) {
        this.props.onChange ? this.props.onChange(base64str) : null;
    }
    input:HTMLInputElement=null;
    list:HTMLUListElement=null;
    handleInputChange(e){
        var props=this.props,value=e.target.value;
        if(this.props.onChange){
            this.props.onChange.apply(this,[value])
        }
        if(value.length>=props.preSearchCount){
            this.showPreSearchArray();
        }
    }

    showPreSearchArray(){
        var props=this.props,value=this.input.value,thisComp=this;
        if(props.preSearchSupplier){
           var psArray= props.preSearchSupplier.apply(this,[value]);
            var $list=$(this.list);
            $list.show().children().remove();
            psArray.forEach((ps,index)=>{
                $list.appendLink('<li></li>').addClass(styles.preSearchListItem).text(ps)
                    .on('click',function(e){
                        var itemV=$(this).text();
                        thisComp.handlePreSearchSelect(itemV)
                    });
            })
        }
    }

    handlePreSearchSelect(value){
        $(this.input).val(value);
        if(this.props.onChange){
            this.props.onChange.apply(this,[value])
        }
        this.disActive();
    }

    disActive(){
        $(this.list).hide();
    }

    constructor(props: SearchInputProps) {
        super(props);
        $(document).click((e)=>{
            var target=e.target;
            if(target!=this.board&&!this.board.contains(target)){
                this.disActive();
            }
        })
        this.board = document.createElement('div');
        $(props.container).append(this.board);
        var $board = $(this.board);
        $board.addClass(this.mergeClassName(styles.preSearchBoard, props.className));
        if (props.style)
            $board.css(props.style);
        this.input=$board.appendLink('<input/>')[0];
        var $input=$(this.input).addClass(styles.searchInputEl);
        $input.on('input',(e)=>{
            this.handleInputChange(e);
        });
        this.list=$board.appendLink('<ul></ul>').addClass(styles.preSearchList).hide()[0];

    }

}

$.fn.searchInput = function (options: SearchInputProps) {
    this.each(function (index, el) {
        new SearchInput({container: el, ...options});
    })
}
export default SearchInput;