import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';

import feelingsRating from '../Reducers/feelingsReducer';
import understandingRating from '../Reducers/understandingReducer';
import supportedRating from '../Reducers/supportedReducer';
import feedbackComments from '../Reducers/feedback-commentsReducer';


const store = createStore(
    combineReducers({
        feelingsRating,
        understandingRating,
        supportedRating,
        feedbackComments,
    }),applyMiddleware(logger)
);

export default store;