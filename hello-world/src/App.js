import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Greet}  from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello'
// import Message from './component/Message'
// import Counter from './component/Counter';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import Stylesheet from './component/Stylesheet';
// import Inline from './component/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css' //module styles must be import like above
// import Form from './component/Form';
import LifecycleA from './component/LifecycleA'

class App extends Component{
  render(){
    return(
      <div className="App">
        <LifecycleA />
      </div>
    )
  }
}


// //Form Handling
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <Form />
//       </div>
//     )
//   }
// }

// //Styling and CSS Basics
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1 className='error'>Error</h1>
//         <h1 className={styles.success}>Sucess</h1>

//         <Stylesheet primary={true}/>{/* Class styling using css file*/}
//         <Inline />{/*Inline styling */}
//       </div>
//     )
//   }
// }


// //List using index as key anti-pattern
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <NameList />
//         {/* <UserGreeting /> */}
//       </div>
//     )
//   }
// }

// //Method as Props
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <ParentComponent />
//       </div>
//     );
//   }
// }

// //Event Handlers
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <EventBind />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       {/*<Welcome /> */}
//       {/* <Hello /> */}
//     </div>
//   );  
// }

//Props are immutable i.e.,Values can't be changed
// class App extends Component{
//   render(){
//     return (
//      <div className="App">
//         <Greet name='Jones' heroName='BatMan'>
//           <p>Bad Boy</p>
//         </Greet>
//         <Greet name='Hayas' heroName='Joker'>
//           <button>Good One</button>
//         </Greet>
//         <Greet name='Praga' heroName='Ironman' />

//         <Welcome name='Jones' heroName='BatMan'/>
//         <Welcome name='Hayas' heroName='Joker' />
        
//         {/* <Hello /> */}
//       </div>
//     );
//   }
// }

// //State usage in components
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Message />
//       </div>
//     );
//   }
// }

//setState Co
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Counter />
//       </div>
//     );
//   }
// }

//Props and State management
// class App extends Component{
//   render(){
//     return (
//      <div className="App">
//         <Greet name='Jones' heroName='BatMan'>
//         </Greet>
//         <Welcome name='Pradeep' heroName='Ironman'>
//         </Welcome>
//       </div>
//     )
//   }
// }
export default App;