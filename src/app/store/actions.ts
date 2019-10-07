import * as actionTypes from './actionTypes'
import { Dispatch } from 'redux'
import history from '../utils/history'
import { ROUTES } from '../utils/routes'
import { AddDataTypes, Data } from '../utils/types'
import { getQuestionId } from '../utils/selectors'

const BASE_API_URL = 'https://api.stackexchange.com/2.2'
const BASE_SORT_AND_ORDER_PARAMS = 'order=desc&sort=votes&site=stackoverflow'

export const fetchData = (request: string) => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.FETCH_DATA_START })

  // thats the filter name in Stackoverflow
  const hasBody = '&filter=!9Z(-wwYGT'

  const URL = `${BASE_API_URL}/search?intitle=${request}&${BASE_SORT_AND_ORDER_PARAMS}${hasBody}`

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
    URL = `${BASE_API_URL}/users/${data}/questions?${BASE_SORT_AND_ORDER_PARAMS}` :
    URL = `${BASE_API_URL}/questions?${BASE_SORT_AND_ORDER_PARAMS}&tagged=${data}`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_ADD_DATA_SUCCESS, payload: data.items }))
    .then(() => type === AddDataTypes.AUTHOR ? history.push(ROUTES.AUTHOR_RESULTS) : history.push(ROUTES.TAG_RESULTS))
    .catch(error => dispatch({ type: actionTypes.FETCH_ADD_DATA_FAIL, error }))

}

export const selectPost = (data: Data) => (dispatch: Dispatch) => dispatch({ type: actionTypes.SELECT_POST, payload: data })

export const fetchPost = () => (dispatch: Dispatch, getState: Function) => {
  const state = getState()
  const questionId = getQuestionId(state)

  dispatch({ type: actionTypes.FETCH_POST_START })

  // thats the filter name in Stackoverflow
  const hasBody = '&filter=!9Z(-wzu0T'
  const URL = `${BASE_API_URL}/questions/${questionId}/answers?${BASE_SORT_AND_ORDER_PARAMS}${hasBody}`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      dispatch({ type: actionTypes.FETCH_POST_SUCCESS, payload: data.items })
    })
    .then(() => history.push(ROUTES.POST))
    .catch(error => dispatch({ type: actionTypes.FETCH_POST_FAIL, error }))
}