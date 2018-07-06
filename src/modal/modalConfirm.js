import $ from 'jquery'
import '../appendLink/appendLink.js'
import styles from './modalConfirm.css'
var $modalBack=null;
var $modalContainer=null;
var $modal=null;
function close() {
    if($modalBack){
        $modalBack.remove();
    }
    if($modalContainer){
        $modalContainer.remove();
    }
    if($modal){
        $modal.remove();
    }
}
var ex= {
    openModalConfirm: function (content,onShow,onConfirm,onCancel) {
        close();

        $modalBack=$(document.body).appendLink('<div></div>')
            .on('click',(e)=>{
                var isModal=e.originalEvent.isModalConfirm;
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
            minWidth:'300px',
            minHeight:'100px',

            position:'absolute',
            overflow:'hidden',
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
                var isModal=e.originalEvent.isModalConfirm;
                if(!isModal) {
                    close();
                    if(onCancel)
                        onCancel()
                }
            });
        $modal=$modalContainer.appendLink('<div></div>')
            .css(defaultModalCss)
            .on('click',(e)=>{
                e.originalEvent.isModalConfirm=true;
            });
        $modal.animate({opacity:1},300,()=>{
            $modal.css({width:'auto',height:'auto'});
            if(onShow)
            onShow();
        });
        var $content=$modal.appendLink('<div></div>').css({
            marginBottom:'70px',
            padding:'15px',
        }).append(content);

        var $controlbar=$modal.appendLink('<div></div>')
            .addClass(styles.modalControlBar);

        $controlbar.appendLink('<button>取消</button>')
            .on('click',(e)=>{
                close();
                if(onCancel)
                    onCancel();
            })
            .addClass(styles.cancelBtn);
        $controlbar.appendLink('<button>确定</button>').addClass(styles.confirmBtn)
            .on('click',(e)=>{
                close();
                if(onConfirm)
                    onConfirm();
            });

    }
}
window.openModalConfirm=ex.openModalConfirm
module.exports=ex;