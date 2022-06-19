//Importing needed tools
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
//Importing reducers
import feelingsRating from '../Reducers/feelingsReducer';
import understandingRating from '../Reducers/understandingReducer';
import supportedRating from '../Reducers/supportedReducer';
import feedbackComments from '../Reducers/feedback-commentsReducer';

//Store to be sent out to components
const store = createStore(
    combineReducers({
        feelingsRating,
        understandingRating,
        supportedRating,
        feedbackComments,
    }),applyMiddleware(logger)
);

//Exporting store for state in needed components
export default store;