import React, { Component } from 'react'

export class Counter2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    incrementCount=() => {
        this.setState(prevState=>{
            return {
                count : prevState.count +1
            }
        })
    }
    render() {
        return (
        <div>
            {/* {this.props.render(this.state.count,this.incrementCount)} */}
            
            {/* Used to render functionality all over the app components */}
            {this.props.children(this.state.count,this.incrementCount)}            
        </div>        
        )
    }
}

export default Counter2
