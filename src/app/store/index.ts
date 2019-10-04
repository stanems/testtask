import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer, { initialState } from '../reducers/main'

export default createStore(mainReducer, initialState, applyMiddleware(thunk, logger))

