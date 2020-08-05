import React from 'react'
//Memo is used to update shallow props and state changes on functional components.
function MemoComp({name}) {
    console.log('Rendering Memo Comp')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)//It was introduced >16.0 version
