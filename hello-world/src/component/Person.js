import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I'm {person.name}. I'm {person.old} years old  My power is {person.Power}</h2>
        </div>
    )
}

export default Person
