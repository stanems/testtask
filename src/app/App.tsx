import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import PostPage from './containers/PostPage';
import ResultsPage from './containers/ResultsPage';
import SearchPage from './containers/SearchPage';
import history from './utils/history';
import { ROUTES } from './utils/routes';
import { AppStore } from './utils/types';

import './App.css';

interface Props {
  loading: boolean;
}

const App = (props: Props) => (
  <main className="App">
    {props.loading && <Loader />}
    <Router history={history}>
      <Switch>
        <Route exact={true} path={ROUTES.HOME} >
          <Redirect to={ROUTES.SEARCH} />
        </Route> />
        <Route path={ROUTES.SEARCH} component={SearchPage} />
        <Route path={ROUTES.RESULTS} component={ResultsPage} />
        <Route exact={true} path={ROUTES.POST} component={PostPage} />
      </Switch>
    </Router>
  </main>
);

export default connect((state: AppStore) => ({
  loading: state.loading,
}))(App);
