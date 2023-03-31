class Component{
    constructor(){
        if(this.constructor === Component){
            throw new error("Abstract classes can't be intialized")
        }
    }

    render(){}
}