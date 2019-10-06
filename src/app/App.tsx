import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { AppStore } from './utils/types';
import SearchPage from './containers/SearchPage';
import ResultsPage from './containers/ResultsPage';
import Loader from './components/Loader';
import { ROUTES } from './utils/routes';
import history from './utils/history'

import './App.css'

interface Props {
	loading: boolean
}

const App = (props: Props) => (
	<main className='App'>
		{props.loading && <Loader />}
		<Router history={history}>
			<Switch>
				<Route exact path={ROUTES.SEARCH} component={SearchPage} />
				<Route path={ROUTES.RESULTS} component={ResultsPage} />
			</Switch>
		</Router>
	</main>
)

export default connect((state: AppStore) => ({
	loading: state.loading
}))(App)

