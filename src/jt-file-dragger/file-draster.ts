import Component, {CommonProps} from '../component/component.ts'
import '../appendLink/appendLink'
import styles from './draliper.css';
import getFileURL from '../getFileURL/getFileURL.js'

interface FileDrasterProps extends CommonProps {
    accept?: string,
    multi?: boolean,
    displayList?: boolean,
    onFileChange?: (file: File[] | File) => void,
    text?: string,
    dragArea?: boolean,
}

class FileDraster extends Component {
    board = null;
    static defaultProps = {
        text: '上传文件',
        displayList: true,
        multi: false,
        dragArea: true,
    }
    $input = null;
    $dragArea = null;
    $btn = null;
    $list = null;
    state = {
        files: []
    }

    handlerFileChange(files) {
        this.props.onFileChange ? this.props.onFileChange.call(this, files) : null
    }

    rerangeList() {
        if (!this.props.displayList) {
            return;
        }
        this.$list.children().remove();
        this.state.files.forEach((file) => {
            this.$list.appendLink('<div></div>').addClass(styles.fileItem).text(file.name).appendLink('<span></span>')
                .click((e) => {
                    this.removeFile(file);
                })
                .addClass(this.mergeClassName('fas fa-minus-circle', styles.deleteBtn));
        })

    }
    setClassName(clazz){
        $(this.board).attr('class',clazz)
    }
    removeFile(file) {
        if (this.props.multi) {
            var stateFiles = this.state.files;
            if (stateFiles) {
                var nStateFiles = [];
                stateFiles.forEach((stateFile, index) => {
                    if (stateFile !== file) {
                        nStateFiles.push(stateFile);
                    }
                })
                this.state.files = nStateFiles;
                this.$input.val(null);
                this.handlerFileChange(this.state.files)
                this.rerangeList();
            }
        } else {
            var stateFile = this.state.files[0];
            if (stateFile && stateFile === file) {
                this.state.files = [];
                this.$input.val(null);
                this.handlerFileChange(this.state.files[0])
                this.rerangeList();
            }
        }
    }

    measureFile(files, multiCallback, singleCallback) {
        if (this.props.multi) {
            var stateFiles = this.state.files;
            if (!stateFiles) {
                stateFiles = [];
            }
            for (var i = 0; i < files.length; i++) {
                var file = files[i]
                if (!stateFiles.find((stateFile) => {
                        return stateFile.name === file.name
                    })) {
                    stateFiles.push(file);
                }
            }
            this.state.files = stateFiles;
            this.$input.val(null);
            this.handlerFileChange(this.state.files)
            multiCallback ? multiCallback() : null;
        } else {
            var stateFile = this.state.files[0];
            if (!stateFile || stateFile.name !== files[0].name) {
                stateFile = files[0];
            }
            this.state.files = [stateFile]
            this.$input.val(null);
            this.handlerFileChange(this.state.files[0])
            singleCallback ? singleCallback() : null;
        }
    }

    addFiles(files:Array) {
        var accept=this.props.accept;
        if(accept) {
            var pat = new RegExp(accept.replace('/', '\\/'))
            var allow = true;
            for (var file of files) {
                if (!pat.test(file.type)) {
                    allow = false;
                }
            }
            if (!allow) {
                return;
            }
        }
        this.measureFile(files, () => {
            this.rerangeList();
        }, () => {
            this.rerangeList();
        })
    }
    showDragArea(){
        this.$btn.hide();
        this.$dragArea.show();
    }
    hideDragArea(){
        this.$btn.show();
        this.$dragArea.hide();
    }
    constructor(props: FileDrasterProps) {
        super(props);
        this.board = document.createElement('div');
        $(props.container).append(this.board);
        var $board = $(this.board), props = this.props;
        $board.addClass(this.mergeClassName(props.className))
        if (props.style)
            $board.css(props.style);
        this.$input = $board.appendLink('<input type="file" hidden/>')
            .attr('accept', props.accept).attr('multiple', this.props.multi)
            .change((e) => {
                var files = e.target.files;
                this.addFiles(files);

            });
            this.$dragArea = $board.appendLink('<div></div>').addClass(styles.upLoadCoverDragBox)
                // .on('click',()=>{
                //     this.$input.click()
                // })
                .attr('tabindex','-1')
                .on('paste',(e)=>{
                    var clipboardData=e.originalEvent.clipboardData
                    console.log(clipboardData);
                    var items=clipboardData.items;
                    var files=clipboardData.files;
                    if(files&&files.length>0){
                        this.addFiles(files)
                    }
                })
                .on('dragenter', (e) => {
                e.originalEvent.preventDefault()
            }).on('dragover', (e) => {
                e.originalEvent.preventDefault();
                this.$dragArea.addClass(styles.upLoadDragOver)
            }).on('dragleave', (e) => {
                e.originalEvent.preventDefault();
                this.$dragArea.removeClass(styles.upLoadDragOver)
            }).on('drop', (e) => {
                e.originalEvent.preventDefault()
                this.$dragArea.removeClass(styles.upLoadDragOver)
                e.originalEvent.dataTransfer.dropEffect = 'move';
                var files = e.originalEvent.dataTransfer.files
                this.addFiles(files)
            });
            var $dragContent = this.$dragArea.appendLink('<div></div>').addClass(styles.dragContent);
            $dragContent.appendLink('<p></p>').addClass(this.mergeClassName('fas fa-upload', styles.uploadIcon));
            $dragContent.appendLink('<p></p>').text(this.props.text);
            $dragContent.appendLink('<p></p>').text('拖动到此处或点击');
            this.$btn = $board.appendLink('<button></button>').addClass(styles.uploadBtn).text(this.props.text).click(() => {
                this.$input.click();
                return false;
            })
            if(this.props.dragArea){
                this.$btn.hide();
            }else{
                this.$dragArea.hide();
            }
        if (this.props.displayList) {
            this.$list = $board.appendLink('<div></div>').addClass(styles.uploadFileList);
        }

    }

}

$.fn.fileDraster = function (options: any) {
    var re=[];
    this.each(function (index, el) {
        var dragger=new FileDraster({container: el, ...options});
        re.push(dragger)
    })
    return re;
}
export default FileDraster;