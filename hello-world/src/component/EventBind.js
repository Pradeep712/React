import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state ={
            message:'Hello'
        }

        //3rd approach Binding in class Constructor
        this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
    //    this.setState({
    //        message :"Goodbye!!"
    //    })
    //    console.log(this)
    // }

    //Binding class method as Arrow function
    clickHandler= () =>{
        this.setState({
            message : 'GoodBye!!!'
        })
    }
    render() {
        return (
            <div>
               <div>{this.state.message}</div>
               {/* 'this' keyword is undefined in EventHandler so EventBinding is used.But Poor performance */}
               <button onClick={this.clickHandler.bind(this)}>EventBinding</button> 
               <br/><br/>

               {/* Use Arrow Function for EventHandling, for passing parameters */}
               <button onClick={() => this.clickHandler()}>Arror function</button>
               <br/><br/>

               {/* Use class constructor */}
               <button onClick={this.clickHandler}>Class constructor</button>
               <br/><br/>

               {/* Using Class method as Arrow function Default in React */}
               <button onClick={this.clickHandler}>Class ArrowFn</button>


            </div>
        )
    }
}

export default EventBind
