import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import feelingsRating from './Redux/Reducers/Feelings';
import understandingRating from './Redux/Reducers/understanding';




const store = createStore(
    combineReducers({
        feelingsRating,
        understandingRating,
    }),applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
