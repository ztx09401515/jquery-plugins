import '../../src/jtForm/jtForm.ts'
$(document).ready(function () {
    $('#root').jtForm({map:[
        {
            name:'username',
            type:'text',
            label:'用户名:',
            rules:{
                type:'string',
                required:true,
                message:'用户名不能为空',
            }
        },
        {
            name:'password',
            type:'text',
            fieldProps:{
              type:'password'
            },
            label:'密码:',
            rules:{
                type:'string',
                required:true,
                message:'密码必填',
            }
        },
        [{
            name:'nickname',
            type:'text',
            fieldProps:{
                type:'text'
            },
            label:'昵称:',
            layout:{label:0.2,field:0.8},
            rules:{
                type:'string',
                message:'不接受符号',
                pattern:/^\w*$/,
            }
        },
            {
                name:'email',
                type:'text',
                fieldProps:{
                    type:'text'
                },
                label:'email:',
                layout:{label:0.15,field:0.8},
                rules:{
                    type:'string',
                    message:'格式不正确',
                    pattern:/^\w+@\w+\.\w+$/,
                }
            }
        ],

        {
            name:'imageFile',
            type:'file',
            fieldProps:{
                accept:'image/*'
            },
            label:'图片文件:',
            rules:{
                required:true,
                message:'图片文件必填',
            }
        },
        {
            name:'cropperImage',
            type:'image',

            label:'截图',
            rules:{
                required:true,
                message:'截图必填',
            }
        },
    ]})
})
