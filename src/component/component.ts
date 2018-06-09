
class Component {
    props:any = {};
    state = {};

    constructor(props) {
        this.props = this.constructor.defaultProps?{...this.constructor.defaultProps,...props}:props;
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