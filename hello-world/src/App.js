import React, { Component } from 'react';
import './App.css';
import ClickCounter2 from './component/ClickCounter2';
import Counter2 from './component/Counter2';
import HoverCounter2 from './component/HoverCounter2';

//Render props
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter2>
            {(count, incrementCount) => (
              <HoverCounter2 count={count} incrementCount={incrementCount} 
              />
            )}
        </Counter2>
        <Counter2> 
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
              )} 
        </Counter2>
        {/* <Counter2 render={(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
              )} 
            /> */}        
      </div>
    )
  }
}

export default App;