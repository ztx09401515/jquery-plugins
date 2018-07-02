$.fn.hasDescendant= function hasDescendant(temp,condition) {
   var first=this[0]
    var root=first;
    if(root===temp){
        return false;
    }else{
       return has_(root,temp,condition)
    }
}

function has_(root,target,condition) {
    var childs=root.childNodes;
    if(childs&&childs.length>0){
        for(var c of childs){
            var con=condition(c,target);
            if(con){
                return con;
            }else{
                var re=has_(c,target,condition);
                if(re){
                    return re;
                }
            }
        }
    }
    return false;
}