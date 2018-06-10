import Component, {CommonProps} from '../component/component.ts'
import ruleGen from 'async-validator'
import '../appendLink/appendLink'
import styles from './jtForm.css';
import '../jt-file-dragger/jt-file-dragger.ts'
import '../jtCropper/jtCropper.ts'

interface ruleType {
    required?: boolean,
    pattern?: RegExp,
    length?: number,
    message?: string,
    validator?: (rule, value, callback) => void,
}

interface fieldProps {
    name: string,
    type: 'text' | 'number' | 'file' | 'image',
    fieldProps?: object,
    label?: string,
    widthRatio?: number,
    layout?: { label: number, field: number }
    initialValue?: string,
    rules?: ruleType | ruleType[],
    trigger: string,
    validateTrigger?: string | string[]
}

interface JtFormProps extends CommonProps {
    map: (fieldProps | fieldProps[])[],
    validateFirst?: boolean,
    validateFirstFields?: boolean,
    submitText?: string,
}

class JtForm extends Component {
    static defaultLayout={
        label:0.1,
        field:0.9,
    }
    static defaultProps = {
        validateFirst: false,
        validateFirstFields: false,
        submitText: '提交',
    }
    board = null;
    formData: any = {};
    validateObj: any = {};
    validateSchema: any = null;

    validate(obj, field) {
        this.validateSchema.validate(obj, {
            first: this.props.validateFirst,
            firstFields: this.props.validateFirstFields
        }, (errors, fields) => {
            console.log(errors);
            if (errors) {
                var tarerror = errors.find((error) => error.field === field.name)
                if (tarerror) {
                    this.formData[tarerror.field].$fieldWrap.addClass('error');
                    this.formData[tarerror.field].$fieldMessage.text(tarerror.message);
                } else {
                    this.formData[field.name].$fieldWrap.removeClass('error').addClass('correct');
                }
            }
        })
    }

    eachField(field: fieldProps, $rootEl: JQuery, count: number) {
        this.formData[field.name] = {};
        this.formData[field.name].value = field.initialValue !== null || field.initialValue !== undefined ? field.initialValue : null;
        this.validateObj[field.name] = field.rules;
        var $formItem = $rootEl.appendLink('<div></div>').css({
            position: 'relative',
            width: field.widthRatio ? field.widthRatio * 100 + '%' : 100 / count + '%'
        }).addClass(styles.jtFormItem);
        var labelRat = 0;
        labelRat = field.layout && typeof(field.layout.label) === 'number' ? field.layout.label : JtForm.defaultLayout.label;
        var $labelWrap = $formItem.appendLink('<span></span>').addClass(styles.jtFormLabelWrap)
            .css({display: 'inline-block', position: 'absolute', textAlign: 'right', width: 100 * labelRat + '%'});
        this.formData[field.name].$label = $labelWrap;

        var $label = $labelWrap.appendLink('<label></label>').attr('title',field.label).addClass(styles.labelContent).text(field.label);
        var requiredRule;
        if (field.rules instanceof Array) {
            requiredRule = field.rules.find((rule) => rule.required === true);
        } else {
            requiredRule = field.rules.required === true ? field.rules : null;
        }
        if (requiredRule) {
            $label.addClass('required');
        }
        var fieldRat = field.layout && typeof(field.layout.field) === 'number' ? field.layout.field :JtForm.defaultLayout.field;
        var $fieldWrap = $formItem.appendLink('<span></span>').addClass(styles.jtFormFieldWrap).css({
            display: 'inline-block', marginLeft: 100 * (1-fieldRat) + '%',
            width: 100 * fieldRat + '%'
        })
        this.formData[field.name].$fieldWrap = $fieldWrap;
        this.formData[field.name].$fieldMessage = $fieldWrap.appendLink('<span></span>').addClass(styles.errorMessage);
        this.formData[field.name].$fieldCheck = $fieldWrap.appendLink('<span></span>')
            .addClass(this.mergeClassName('fas fa-check-circle', styles.fieldCheck));
        var $field;
        switch (field.type) {
            case 'text':
                $field = $fieldWrap.appendLink('<input/>').addClass(styles.jtFormField).val(this.formData[field.name].value);
                var trigger = field.trigger || 'change';
                var validateTrigger = field.validateTrigger || 'blur';
                $field.on(trigger, (e) => {
                    var value = e.target.value;
                    this.formData[field.name].value = value;
                }).on(validateTrigger, (e) => {
                    var value = this.formData[field.name].value
                    var va = {};
                    va[field.name] = value;
                    this.validate(va, field);
                })
                if (field.fieldProps) {
                    for (var attrIndex in field.fieldProps) {
                        $field.attr(attrIndex, field.fieldProps[attrIndex]);
                    }
                }
                break;
            case 'file':
                var fileProps = {
                    onFileChange: (files) => {
                        this.formData[field.name].value = files;
                        var va = {};
                        va[field.name] = files;
                        this.validate(va, field);
                    }, className: styles.jtFormField, ...field.fieldProps
                }
                $fieldWrap.jtFileDragger(fileProps);
                break;
            case 'image':
                $fieldWrap.jtCropper({
                    onChange: (base64str) => {
                        this.formData[field.name].value = base64str;
                        var va = {};
                        va[field.name] = base64str;
                        this.validate(va, field);
                    }
                });
                break;

        }
        this.formData[field.name].$field = $field;

    }

    constructor(props: JtFormProps) {
        super(props);
        this.board = document.createElement('form');
        $(props.container).append(this.board);
        $(this.board).addClass(this.mergeClassName(styles.jtFormBoard, props.className))
        if (props.style)
            $(this.board).css(props.style)
        this.props.map.forEach((field, num) => {
            var $row = $(this.board).appendLink('<div></div>').addClass(styles.jtFormRow);
            if (field instanceof Array) {
                field.forEach((f, index) => {
                    this.eachField(f, $row, field.length);
                })
            } else {
                this.eachField(field, $row, 1);
            }
        });
        this.validateSchema = new ruleGen(this.validateObj);
        $(this.board).appendLink('<div></div>').addClass(styles.submitBtnRow)
            .appendLink('<button></button>').text(this.props.submitText).addClass(styles.submitBtn);
    }
}

$.fn.jtForm = function (options: any) {
    this.each(function (index, el) {
        new JtForm({container: el, ...options});
    })
}

export default JtForm