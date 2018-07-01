import '../../src/search-input/search-input-multi-select.ts'
$(document).ready(function () {
    $('#root').searchInputMultiSelect({preSearchSupplier:(v)=>{
        return [v+'123'];
    }});
})
