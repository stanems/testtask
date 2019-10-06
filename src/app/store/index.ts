import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer, { initialState } from './reducer'

export default createStore(reducer, initialState, applyMiddleware(thunk, logger))

