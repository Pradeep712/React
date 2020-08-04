import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary': ''
    return (
        <div>{/* className is class variable must be written within `  */}
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>
    )
}

export default Stylesheet
