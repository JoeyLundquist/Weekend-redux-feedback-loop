import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import feelingsRating from './Redux/Reducers/feelingsReducer';
import understandingRating from './Redux/Reducers/understandingReducer';
import supportedRating from './Redux/Reducers/supportedReducer';
import feedbackComments from './Redux/Reducers/feedback-commentsReducer';



const store = createStore(
    combineReducers({
        feelingsRating,
        understandingRating,
        supportedRating,
        feedbackComments,
    }),applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
