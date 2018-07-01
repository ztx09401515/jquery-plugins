import '../../src/search-input/search-input.ts'
$(document).ready(function () {
    $('#root').searchInput({preSearchSupplier:(v)=>{
        return ['123','456']
    }});
})
