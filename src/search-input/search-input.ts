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

    preSearchKeyGet(value){
        return value;
    }
    currentIndex:number=null;
    psArray:string[]=null;
    show:boolean=false;
    showPreSearchArray(){
        var props=this.props,value=this.input.value,thisComp=this;
        if(props.preSearchSupplier){
            var psKey=this.preSearchKeyGet(value);
            if(psKey===null){
                return;
            }
           var psArray= props.preSearchSupplier.apply(this,[psKey]);
            this.psArray=psArray;
            var $list=$(this.list);
            $list.show().children().remove();
            this.show=true;
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
    activePreSearchSelect(tarIndex:number){
        var $list=$(this.list);
        $list.children().removeClass(styles.preSearchListItemActive);
        $list.children().each(function(index,el){
            if(tarIndex===index){
                $(this).addClass(styles.preSearchListItemActive);
            }
        })
    };
    selectPreSearchSelect(tarIndex:number){
        var $list=$(this.list),thisComp=this;
        $list.children().each(function(index,el){
            if(tarIndex===index){
                thisComp.handlePreSearchSelect($(this).text())
            }
        })
    }
    disActive(){
        $(this.list).hide();
        this.show=false;
    }

    nextIndex(dif:number){
        var currentIndex=this.currentIndex;
        var next;
        if(currentIndex===null){
            if(dif<0){
                next=this.psArray.length-1;
            }else{
                next=0;
            }
        }else{
            next=currentIndex+dif;
        }
        this.currentIndex=next;
        this.currentIndex=this.currentIndex>this.psArray.length-1?0:this.currentIndex;
        this.currentIndex=this.currentIndex<0?0:this.psArray.length-1;

        this.activePreSearchSelect( this.currentIndex);

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
        })
            .on('keydown',(e)=>{
                var keyCode=e.keyCode;
                if(!this.show){
                    return;
                }
                if(keyCode===40){
                    e.preventDefault();
                    this.nextIndex(1);
                }else if(keyCode===38){
                    e.preventDefault();
                    this.nextIndex(-1);
                }else if(keyCode===13){
                    e.preventDefault();
                    this.selectPreSearchSelect(this.currentIndex);
                }
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