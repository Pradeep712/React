import React, { Component } from 'react';
import './App.css';
import PostList from './component/PostList'
import PostForm from './component/PostForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <PostList /> */}
        <PostForm />
      </div>
    )
  }
}

export default App;