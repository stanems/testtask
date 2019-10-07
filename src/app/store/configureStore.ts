import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer, { initialState } from './reducer'

const persistedReducer = persistReducer({ key: 'root', storage }, reducer)

let store = createStore(persistedReducer, initialState as any, applyMiddleware(thunk, logger))
let persistor = persistStore(store)

export { store, persistor }