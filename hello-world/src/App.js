import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet}  from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello'
import Message from './component/Message'
import Counter from './component/Counter';

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

class App extends Component{
  render(){
    return (
     <div className="App">
        <Greet name='Jones' heroName='BatMan'>
        </Greet>
        <Welcome name='Pradeep' heroName='Ironman'>
        </Welcome>
      </div>
    )
  }
}
export default App;