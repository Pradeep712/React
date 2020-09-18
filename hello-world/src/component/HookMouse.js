import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('logMousePosition called')
        setX(e.x)
        setY(e.y)
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        //Cleanup Code
        return()=>{//Creating componentWillUnmount for cleaning eventlistners after components disabled.
            console.log('Component Unmount Code')
            window.removeEventListener('mousemove', logMousePosition)

        }

    }, [])//Creating componentDidMount in useEffect by passing empty array as second parameter.
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
