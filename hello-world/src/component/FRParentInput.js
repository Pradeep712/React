import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef= React.createRef()
    }
    clickHandler=()=>{
        //Gets current focus from child component 
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                {/* Attaches Ref to the ChildComponent */}
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Fous Input</button>
            </div>
        )
    }
}

export default FRParentInput
