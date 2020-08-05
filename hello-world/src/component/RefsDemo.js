import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()//Creating referencing element
        
        this.cbRef = null //Callback Refs
        this.setCbRef = element => {
            //We are assigning method which in turn assigns the property.
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef) {
            //In method ref the element can be directly accessed using focus() method.
            this.cbRef.focus()
        }

        // this.inputRef.current.focus()//variable is accessed using current.focus() to focus on the textfield we are referencing.
        // console.log(this.inputRef)
    }
    clickHandler=()=>{
        //Accessing current value of inputRef DOM property
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
