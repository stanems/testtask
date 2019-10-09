import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';

const persistedReducer = persistReducer({ key: 'root', storage }, reducer);

const store = createStore(persistedReducer, initialState as any, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { store, persistor };
