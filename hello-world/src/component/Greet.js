import React from 'react';
//Traditional
// function Greet(){
//     return <h1>Hello Pradeep</h1>;
// }

// export default Greet;

//Simple
// export const Greet = () => <h1>Hello Pradeep</h1>

//Stateless props
// export const Greet = (props) =>{
//     console.log(props)
//     return (
//     <div>
//         <h1>Hello {props.name} @ {props.heroName}</h1>
//         {props.children}
//     </div>
//     )
// }

//Destructuring parameters
export const Greet = (props)=>{
    const {name,heroName } = props
    return (
        <div>
            <h1>Hello {name} @ {heroName}</h1>
        </div>
    )
}