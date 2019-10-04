import * as actionTypes from './actionTypes'
import { Dispatch } from 'redux'

export const fetchData = (request: string) => async (dispatch: Dispatch) => {
	dispatch({ type: actionTypes.FETCH_REQUEST_START })

	const URL = `https://api.stackexchange.com//2.2/search?order=desc&sort=activity&intitle=${request}&site=stackoverflow`

	fetch(URL, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(data => dispatch({ type: actionTypes.FETCH_REQUEST_SUCCESS, paylaod: data.items }))
		.catch(error => dispatch({ type: actionTypes.FETCH_REQUEST_FAIL, error }))
}