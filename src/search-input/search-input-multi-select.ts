import Component, {CommonProps} from '../component/component.ts'
import '../appendLink/appendLink'
import getFileURL from '../getFileURL/getFileURL.js';
import styles from './search-input.css';
import SearchInput,{SearchInputProps} from './search-input.ts'


interface SearchInputMultiSelectProps extends SearchInputProps {
   joinChar:string,
}

class SearchInputMultiSelect extends SearchInput {

    static defaultProps={
        preSearchCount:1,
        joinChar:','
    };

    lastValue=''
    handleInputChange(e){
        var props=this.props,value=e.target.value;

        if(this.props.onChange){
            this.props.onChange.apply(this,[value])
        }
        if(value.length>=props.preSearchCount){
            this.showPreSearchArray();
        }
        this.lastValue=value;
    }
    preSearchKeyGet(value){
        var props=this.props, qianBan=value.substr(0,this.lastValue.length);
        if(this.lastValue.length>value.length||qianBan===this.lastValue){
          var vs=value.split(props.joinChar);
         var key= vs[vs.length-1]
            return key;
        }else{
            return null;
        }
    }

    handlePreSearchSelect(value){
        var current=$(this.input).val(),re=null,joinChar=this.props.joinChar;
        if(current){
            var hasSame=false;
            var vs=current.split(joinChar);
            vs.forEach((v)=>{
                if(v===value){
                    hasSame=true;
                }
            })
            if(!hasSame) {
                vs[vs.length-1]=value;
                re = vs.join(joinChar)
            }
            else
                re=current;
        }else{
            re=value;
        }
        $(this.input).val(re)
    }

}

$.fn.searchInputMultiSelect = function (options: SearchInputProps) {
    this.each(function (index, el) {
        new SearchInputMultiSelect({container: el, ...options});
    })
}
export default SearchInputMultiSelect;