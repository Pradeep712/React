import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const {count,incrementCount} =this.props //receives values as props and return in constants
        return (
            <h2 onMouseOver={incrementCount}>
                {this.props.name} Hovered {count} times</h2>
        )
    }
}

export default withCounter(HoverCounter,10)
