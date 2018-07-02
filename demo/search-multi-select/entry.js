import '../../src/search-multi-select/search-multi-select.ts'
$(document).ready(function () {
    $('#root').searchMultiSelect({
        preSearchSupplier:function (value) {
            var re=[];
            for(var i=0;i<5;i++){
                re.push({value:i,text:(value+i)})
            }
            return re;
        }
    });
})
