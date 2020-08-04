import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Tony', 'Steve', 'Natasha','Tony']

    //Index as key anti-pattern
    const nameList = names.map((name,index)=><h2 key={index}>{index}. {name}</h2>)
    
    //Applicable for name without duplication
    // const nameList = names.map(name=><h2 key={name}>{name}</h2>)

    // //Refator jsx in a component
    // const nameList = names.map(name => <h1>{name}</h1>)

    const persons =[
        {
            id: 1,
            name : 'Tony',
            age: '50',
            Power: 'IronMan'
        },
        {
            id: 2,
            name : 'Steve',
            age: '100',
            Power: 'Captain America'
        },
        {
            id: 3,
            name : 'Natasha',
            age: '40',
            Power: 'Black Widow'
        }
    ]
    // //This used inside same component
    // const personList = persons.map(person=>(
    // <h2>I'm {person.name}. I'm {person.old} years old  My power is {person.Power}</h2>
    // ))
    
    //List rendering from other component
    const personList = persons.map (person => <Person key={person.id} person={person} />)
    //key prop is used to provide unique value in the list.
    //person is a prop for child function

    return (
        <div>{nameList}</div>

        // <div>{personList}</div>

        //  // Render the refactored component simply
        // <div>{nameList}</div>

        //    <div>
        //        { //SetBraces is must to evaluate js expressions.
        //            names.map(name => <h1>{name}</h1>)
        //        }
        //    </div> 

        // <div> {/*Traditional method */}
        //     <h1>{names[0]}</h1>
        //     <h1>{names[1]}</h1>
        //     <h1>{names[2]}</h1>
        // </div>
    )
}

export default NameList
