import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                 <ComponentF />
                ComponentE context {this.context}
            </div>
        )
    }
}

// Can use simply like the above static declaration
// ComponentE.contextType= UserContext

export default ComponentE
