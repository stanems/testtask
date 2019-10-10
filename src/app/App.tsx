import React from 'react';
import { connect } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import { createBrowserHistory } from 'history';
import { AppStore } from './utils/types';
import SearchPage from './containers/SearchPage';
import ResultsPage from './containers/ResultsPage';
import PostPage from './containers/PostPage';

import './App.css';
import './ie.css';

if (window.navigator.appName === 'Microsoft Internet Explorer') {
  document.body.className = 'ie';
}

interface Props {
  loading: boolean;
}

const history = createBrowserHistory();

const App: React.FC<Props> = (props: Props) => (
  <main className="App">
    {props.loading && <Loader />}
    <Router history={history}>
      <Switch>
        <Route exact={true} path={'/'}>
          <Redirect to={'/search'} />
        </Route>
        <Route path={'/search'} component={SearchPage} />
        <Route exact={true} path={'/posts'}>
          <Redirect to={'/search'} />
        </Route>
        <Route exact={true} path={'/posts/:value'} component={ResultsPage} />
        <Route exact={true} path={'/post/:id'} component={PostPage} />
      </Switch>
    </Router>
  </main>
);

export default connect((state: AppStore) => ({
  loading: state.loading,
}))(App);
