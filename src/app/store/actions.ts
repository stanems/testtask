import * as actionTypes from './actionTypes'
import { Dispatch } from 'redux'
import history from '../utils/history'
import { ROUTES } from '../utils/routes'
import { AddDataTypes } from '../utils/types'

const BASE_API_URL = 'https://api.stackexchange.com/2.2'

export const fetchData = (request: string) => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_DATA_START })

  const URL = `${BASE_API_URL}/search?order=desc&sort=votes&intitle=${request}&site=stackoverflow`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_DATA_SUCCESS, payload: data.items }))
    .then(() => history.push(ROUTES.RESULTS))
    .catch(error => dispatch({ type: actionTypes.FETCH_DATA_FAIL, error }))
}

export const fetchAddData = (data: number | string, type: string) => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_ADD_DATA_START, payload: type })

  let URL = ''

  type === AddDataTypes.AUTHOR ?
    URL = `${BASE_API_URL}/users/${data}/questions?order=desc&sort=votes&site=stackoverflow` :
    URL = `${BASE_API_URL}/questions?order=desc&sort=votes&tagged=${data}&site=stackoverflow`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_ADD_DATA_SUCCESS, payload: data.items }))
    .then(() => type === AddDataTypes.AUTHOR ? history.push(ROUTES.AUTHOR_RESULTS) : history.push(ROUTES.TAG_RESULTS))
    .catch(error => dispatch({ type: actionTypes.FETCH_ADD_DATA_FAIL, error }))

}