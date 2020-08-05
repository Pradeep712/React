import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           name: 'Pradeep'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Pradeep'
            })
        },2000
        )
    }
    render() {
        console.log('*************************Parent comp render ****************************')
        //PureComponent deals with Class components &
        //Memo deals with Functional components
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
