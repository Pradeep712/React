import React, { Component } from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClassCounter/>
        <HookCounter />
      </div>
    )
  }
}

export default App;