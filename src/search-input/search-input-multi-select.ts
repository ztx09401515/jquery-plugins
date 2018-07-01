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
        preSearchCount:2,
        joinChar:','
    };

    handlePreSearchSelect(value){
        var current=$(this.input).val(),re=null;

        if(current){
            var hasSame=false;
            var vs=current.split(',');
            vs.forEach((v)=>{
                if(v===value){
                    hasSame=true;
                }
            })
            if(!hasSame)
            re=current+','+value;
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