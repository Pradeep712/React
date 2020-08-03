import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn : false
        }
    }
    render() {
         //Short circuit Approach
         return this.state.isLoggedIn && <div>Welcome Pradeep</div>

        // //Ternary Operator Approach often used
        // return (
        //     this.state.isLoggedIn ? 
        //         <div>Welcome Pradeep</div> :
        //             <div>Welcome Guest</div>
        // )

        // let message //Element Variable approach
        // if (this.state.isLoggedIn)
        //     message = <div>Welcome Pradeep</div>
        // else
        //     message = <div>Welcome Guest</div>
        // return <div>{message}</div>

        // //Using If-else approach
        // if(this.state.isLoggedIn)
        //     return <div>Welcome Pradeep</div>
        // else
        //     return <div>Welcome Guest</div>
        
        // return (
        //     <div>
        //         Welcome Pradeep
        //     </div>
        // )
    }
}

export default UserGreeting
