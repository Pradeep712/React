import React, { Component } from 'react';
import './App.css';
import ClassMouse from './component/ClassMouse';
import HookMouse from './component/HookMouse';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClassMouse />
        <HookMouse />
      </div>
    )
  }
}

export default App;