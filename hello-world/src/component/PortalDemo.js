import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(//DOM method for creating portal.
        <h1>Portal Demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo
