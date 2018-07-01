import '../../src/jtCropper/draster-image-preview.ts'
import getFileURL from '../../src/getFileURL/getFileURL'
$(document).ready(function () {
    $('#root').drasterPreview({
        onChange:(file)=>{

            console.log(file);
           
        }
    });
})