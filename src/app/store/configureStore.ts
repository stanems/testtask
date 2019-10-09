import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';

export default createStore(reducer, initialState as any, applyMiddleware(thunk, logger));
