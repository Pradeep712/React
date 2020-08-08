import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props//receives values as props and return in constants
        return (
            <button onClick={incrementCount}>
               Clicked {count} times</button>
        )
    }
}

export default withCounter(ClickCounter,5)
