import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
    static getDerivedStateFromError= error => {
        return {
            hasError:true
        }
    }
    //Catches Error from the component thats needs to be logged
    componentDidCatch = (error,info) =>{
        console.log(`error ${error}`)
        console.log(info)
    }
    
    render() {
        if(this.state.hasError){
            return  <h1>Something went wrong</h1>
        }
      return this.props.children//'children' element returns child components
    }
}

export default ErrorBoundary
