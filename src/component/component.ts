
class Component {
    props:any = {};
    state = {};
    container:HTMLElement;
    constructor(props) {
        this.props = this.constructor.defaultProps?{...this.constructor.defaultProps,...props}:props;
        this.container=this.props.container;
    }
    mergeClassName(...classNames){
        var re=''
        for(var classname of  classNames){
            re=classname?re+' '+classname:re;
        }
        return re;
    }
}
export declare interface CommonProps{
    style?:object,
    className?:string,
    container:HTMLElement,
}
export default Component