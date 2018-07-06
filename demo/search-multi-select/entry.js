import '../../src/search-multi-select/search-multi-select.ts'
$(document).ready(function () {
    var sms=$('#root').searchMultiSelect({
        preSearchSupplier:function (value) {
            var re=[];
            for(var i=0;i<5;i++){
                var rv=value+i;
                re.push({value:rv,text:(value+i)})
            }
            return re;
        }
    });
    $('#btn').click((e)=>{
           var sm= sms[0];
           var value=sm.searchInput.input.value;
        var re=[];
        for(var i=0;i<5;i++){
            var rv=value+'123';
            re.push({value:rv,text:(value+'123')})
        }
        sm.setPreSearch(re);
        sm.clearResult(false);
    })
})
