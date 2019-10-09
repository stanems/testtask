import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { store, persistor } from './app/store/configureStore';
import App from './app/App';
import { PersistGate } from 'redux-persist/integration/react'

const APP = (
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
)

ReactDOM.render(APP, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
