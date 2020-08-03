//rfce enter for rendering React function component
import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* Event call using props and Arrowfunction */}
            <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
