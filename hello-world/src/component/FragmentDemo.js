import React, { Component } from 'react'

class FragmentDemo extends Component {
    render() {
        return (
            <React.Fragment>{/*This tag prevents from creating additional div tag in inspecting web elements.*/}
                <h1>Fragments</h1>
                <p>This describes the Fragment Demo component</p>
            </React.Fragment>
        )
    }
}

export default FragmentDemo
