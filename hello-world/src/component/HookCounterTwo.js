import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFn = () => {
        for (let i = 0; i < 5; i++){
            //Previous state will change the count value 
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}<br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button><br />
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button><br />
            <button onClick={incrementFn}>Increment 5</button><br />
            <button onClick={() => setCount(initialCount)}>Reset</button>         
        </div>
    )
}

export default HookCounterTwo
