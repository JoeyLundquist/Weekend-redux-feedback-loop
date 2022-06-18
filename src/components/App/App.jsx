import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Feelings />

      <Understanding />

      <Supported />

    </div>
  );
}

export default App;
