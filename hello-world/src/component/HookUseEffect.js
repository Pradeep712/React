import React, { useState, useEffect } from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //It runs after every single render effect
    useEffect(() => {
        console.log("UseEffect  -Updates Document Title")
        document.title = `You Clicked ${count} times`
    }, [count])//This 2nd parameter conditionally renders when count value changes.

    return (
        <div>
            <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookUseEffect
