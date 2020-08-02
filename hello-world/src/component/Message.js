import React, {Component} from 'react';

//State are Object used for managing components.
class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thankyou for Learning'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>                
            </div>
        );
    }
} 
export default Message