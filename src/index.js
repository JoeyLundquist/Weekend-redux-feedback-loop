import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';




// const store = createStore(
//     combineReducers({

//     }),applyMiddleware(logger)
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
