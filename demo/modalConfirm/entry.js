import '../../src/modal/modalConfirm.js'
$(document).ready(function () {
    $('#btn1').click(()=>{
        openModalConfirm($('<div style="width:500px"><h1>111111111111111</h1><h1>111111111111111</h1><h1>111111111111111</h1><h1>111111111111111</h1><h1>111111111111111</h1></div>'),()=>console.log('show'),()=>console.log('confirm'),()=>console.log('cancel'));
    })
})
