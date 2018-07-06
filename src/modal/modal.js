import $ from 'jquery'
import '../appendLink/appendLink.js'
var $modalBack=null;
var $modalContainer=null;
var $modal=null;
var ex= {
    openModalIframe: function (url,options) {
        if($modalBack){
            $modalBack.remove();
        }
        if($modalContainer){
            $modalContainer.remove();
        }
        if($modal){
            $modal.remove();
        }

        $modalBack=$(document.body).appendLink('<div></div>')
            .on('click',(e)=>{
                var isModal=e.originalEvent.isModal;
                if(!isModal)
                $modalBack.remove();
                $modalContainer.remove();
            })
            .css({backgroundColor:'#383838',opacity:0.5,zIndex:1000,position:'fixed',
                width:'100%',
                height:'100%',
                top:'0px',
                left:'0px',
            });
        var defaultModalCss={
            width:'200px',
            position:'absolute',
            overflow:'visible',
            height:200/16*9+'px',
            margin:'0px auto',
            backgroundColor:'white',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)',
            opacity:0.1,
            borderRadius:'5px',
            borderWidth:'0px',
        }
        $modalContainer=$(document.body).appendLink('<div></div>').css({
            position:'fixed',
            width:'100%',
            height:'100%',
            left:0,
            top:0,
            zIndex:1001,

        })
            .on('click',(e)=>{
                var isModal=e.originalEvent.isModal;
                if(!isModal)
                    $modalBack.remove();
                $modalContainer.remove();
            });
        $modal=$modalContainer.appendLink('<iframe></iframe>')
            .on('click',(e)=>{
                e.originalEvent.isModal=true;
            })
            .attr('src',url).css(defaultModalCss);
        $modal.animate({width:1000,height:1000/16*9,opacity:1},500)
    }
}
window.openModalIframe=ex.openModalIframe
module.exports=ex;