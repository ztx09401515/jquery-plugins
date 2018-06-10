import Component, {CommonProps} from '../component/component.ts'
import '../appendLink/appendLink'
import '../jt-file-dragger/jt-file-dragger.ts';
import 'cropper';
import getFileURL from '../getFileURL/getFileURL.js';
import styles from './jtCropper.css'
import 'cropperjs/dist/cropper.css'

interface CropperProps extends CommonProps {
    cropperOptions: any,
    onChange:(base64str:string)=>void
}

class JtCropper extends Component {
    board = null;
    dragger = null;
    file: File = null;
    imageEl: HTMLImageElement = null;
    cropper = null;
    init=false;
    previewEl = null;
    $cropperContainer = null;
    submitImage(){
        var base64str=$(this.imageEl).cropper('getCroppedCanvas').toDataURL('image/jpeg')
        this.handleChange(base64str);
    }
    handleChange(base64str){
        this.props.onChange?this.props.onChange(base64str):null;
    }
    constructor(props: CropperProps) {
        super(props);
        this.board = document.createElement('div');
        $(props.container).append(this.board);
        var $board = $(this.board);
        $board.addClass(this.mergeClassName(styles.jtCropperBoard, props.className));
        if (props.style)
            $board.css(props.style);

        this.dragger = $board.jtFileDragger({
            displayList: false, onFileChange: (files) => {
                this.file = files;
                if(this.init){
                    $(this.imageEl).cropper('replace',getFileURL(files))
                }else {
                    $(this.imageEl).attr('src', getFileURL(files));
                    $(this.imageEl).cropper({preview: this.previewEl, ...this.props.cropperOptions})
                    this.dragger[0].hideDragArea();
                    this.$cropperContainer.show();
                    $board.appendLink('<div></div>').addClass(styles.submitContainer).appendLink('<button>确认</button>')
                        .addClass(styles.submitBtn)
                        .on('click',(e)=>{
                            this.submitImage();
                            return false;
                        })
                    this.init = true;
                }
            }
        });
        this.$cropperContainer = $board.appendLink('<div></div>').addClass(styles.jtCropperImageContainer).hide();
        this.imageEl = this.$cropperContainer.appendLink('<div></div>')
            .addClass(styles.cropperCanvasContainer).appendLink('<img/>').hide()[0];
        this.previewEl = this.$cropperContainer.appendLink('<div></div>').addClass(styles.previewContianer)
            .appendLink('<div></div>').addClass(styles.previewContent)[0];


    }

}

$.fn.jtCropper = function (options: any) {
    this.each(function (index, el) {
        new JtCropper({container: el, ...options});
    })
}
export default JtCropper;