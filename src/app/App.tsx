import React from 'react';
import MainPage from './containers/MainPage';
import { Provider } from 'react-redux'
import './App.css';
import store from './store';

const App: React.FC = () => (
  <div className="App">
    <Provider store={store}>
      <MainPage />
    </Provider>
  </div>
);

export default App;
