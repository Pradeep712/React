//Install ES7 extension 
//Type rce and enter (it renders necessary react code)

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state ={
            count : 0
        }
    }
    increment(){
        // this.setState({
        //     count : this.state.count +1
        // },
        // ()=> {//Callback Parameter (Arror function)
        //     console.log('Call back value ',this.state.count)
        // })
        
        //Update value based on Previous state
        this.setState(prevState =>({
            count : prevState.count + 1
        }))

        console.log(this.state.count)//Asyncronous state value
    }
    incrementFive(){//React optimises code in console using callback
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <h1>count {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
