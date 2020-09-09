import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
    incrementCount = ()=>{
        this.setState({
            count : this.state.count +1
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <button type="submit" onClick={this.incrementCount} >ClassCounter {count}</button>
            </div>
        )
    }s
}

export default ClassCounter
