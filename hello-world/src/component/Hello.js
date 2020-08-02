
//Must import React library
import React from 'react'

const Hello =() =>{
    //Without JSX
    // return (
    //     <div className="dummyclass">
    //         <h1>Hello JSX Component</h1>
    //     </div>
    // )

    // With JSX
    return React.createElement( 
        'div',
        {id:'hello',className:'dummyclass'},
        React.createElement( 'h1',null, 'Hello JSX Component')
    )
}
export  default Hello