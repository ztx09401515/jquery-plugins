/**
 * @author 杰瑞
 * @param children
 * @returns {JQuery<TElement extends Node> | jQuery | HTMLElement}
 */
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