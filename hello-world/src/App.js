import React, { Component } from 'react';
import './App.css';
import DataFetching from './component/DataFetching';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <DataFetching />
      </div>
    )
  }
}

export default App;