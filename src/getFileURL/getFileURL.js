function getFileURL(fileorinput){

    var url;
    if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
        url = fileorinput.value;
    } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
        url = window.URL.createObjectURL(fileorinput);
    } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
        url = window.URL.createObjectURL(fileorinput);
    }
    return url;

}

module.exports=getFileURL;