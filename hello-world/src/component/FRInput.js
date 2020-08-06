import React from 'react'

//Another way of FunctionalComponent by using Arrow function
const FRInput =React.forwardRef( (props,ref) =>{
    // ChildComponent receives ref from ParentComponent in parameter
        return(
            <div>
                {/* receives the reference and forwarding */}
                <input type='text' ref={ref} />
            </div>
        )
    }
)

export default FRInput
