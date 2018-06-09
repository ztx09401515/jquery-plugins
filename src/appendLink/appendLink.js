$.fn.appendLink=function (children) {
    var contents;
    if(typeof children==='string'){
        contents=$(children)

    }else{
        contents=children;
    }
    this.append(contents)
    return $(contents);

}