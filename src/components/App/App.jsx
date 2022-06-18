import React from 'react';
import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


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

      <Comments />

      <ThankYou />

      <ReviewFeedback />

    </div>
  );
}

export default App;
