import Component, {CommonProps} from '../component/component.ts'
import '../appendLink/appendLink'
import '../jt-file-dragger/file-draster.ts';
import 'cropper';
import getFileURL from '../getFileURL/getFileURL.js';
import styles from './draster-image-preview.css'
import 'cropperjs/dist/cropper.css'

interface CropperProps extends CommonProps {
    cropperOptions: any,
    onChange: (base64str: string) => void
}

class JtCropper extends Component {
    board = null;
    dragger = null;
    file: File = null;
    imageEl: HTMLImageElement = null;
    cropper = null;
    init = false;
    previewEl = null;
    $cropperContainer = null;
    width = 100;
    height = 100;
    drasterLevel=null;
    submitImage() {
        var base64str = $(this.imageEl).cropper('getCroppedCanvas').toDataURL('image/jpeg')
        this.handleChange(base64str);
    }

    handleChange(base64str) {
        this.props.onChange ? this.props.onChange(base64str) : null;
    }

    constructor(props: CropperProps) {
        super(props);
        this.board = document.createElement('div');
        $(props.container).append(this.board);
        var $board = $(this.board);
        $board.addClass(this.mergeClassName(styles.jtCropperBoard, props.className));
        if (props.style)
            $board.css(props.style);
        this.drasterLevel=$(this.board).appendLink('<div></div>').addClass(styles.drasterLevel)
        var $drasterLevel= $(this.drasterLevel)
        this.dragger = $drasterLevel.fileDraster({
            className:styles.drasterBoard,
            displayList: false, onFileChange: (files) => {
                this.file = files;
                if (this.init) {
                    $(this.imageEl).attr('src', getFileURL(files));
                    this.width = this.imageEl.width;
                    this.height = this.imageEl.height;
                } else {
                    $(this.imageEl).attr('src', getFileURL(files));
                    this.width = this.imageEl.width;
                    this.height = this.imageEl.height;
                    this.$cropperContainer.show();
                    $board.appendLink('<div></div>').addClass(styles.submitContainer).appendLink('<button>确认</button>')
                        .addClass(styles.submitBtn)
                        .on('click', (e) => {
                            this.submitImage();
                            return false;
                        })
                    this.dragger[0].setClassName(styles.previewDrasterBoard);
                    this.init = true;
                }
              
            },
            accept:'image/*',
        });
        this.$cropperContainer = $drasterLevel.appendLink('<div></div>').addClass(styles.jtCropperImageContainer).hide();
        this.imageEl = this.$cropperContainer.appendLink('<img/>')[0];



    }

}

$.fn.jtCropper = function (options: any) {
    this.each(function (index, el) {
        new JtCropper({container: el, ...options});
    })
}
export default JtCropper;