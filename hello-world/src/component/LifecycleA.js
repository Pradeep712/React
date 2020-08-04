import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Pradeep'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')  
        return null      
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')  
    }
    changeState=()=>{
        this.setState({
            name: 'Coding'
        })        
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>  
        )      
    }
}
//UnMounting
/*
componentWillUnmount - this method is triggered for removing DOM. also used for cancelling network request,removing event handlers, cancelling any subscribtions and also invalidating timers.
Don't call the setState method
*/

//Error Handling
/*
1. static getDerivedStateFromState(error)
2. componentDidCatch(error,info)
When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.

*/

export default LifecycleA
