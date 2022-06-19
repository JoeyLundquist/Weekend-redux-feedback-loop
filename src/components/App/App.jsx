//Importing needed files and tools
import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import './App.css';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';


function App() {
  //Whats being rendered
  return (
    <Router>
      <div className='App'>

        <Header />

        <Route path='/' exact>
          <Feelings />
        </Route>

        <Route path='/1' exact>
          <Understanding />
        </Route>

        <Route path='/2' exact>
          <Supported />
        </Route>

        <Route path='/3' exact>
          <Comments />
        </Route>

        <Route path='/4' exact>
          <ReviewFeedback />
        </Route>

        <Route path='/thankyou' exact>
          <ThankYou />
        </Route>

        <Route path='/admin' exact>
          <Admin />
        </Route>

      </div>
    </Router>
  );
}

export default App;
