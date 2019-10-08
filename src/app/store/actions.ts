import * as actionTypes from './actionTypes'
import { Dispatch } from 'redux'
import history from '../utils/history'
import { ROUTES } from '../utils/routes'
import { AddDataTypes, Question, RequestParams, AppStore } from '../utils/types'

const BASE_API_URL = 'https://api.stackexchange.com/2.2'
const hasBody = 'filter=!9Z(-wwYGT'// thats the filter name in Stackoverflow

const queriesContructor = (params: RequestParams, body?: boolean): string => `order=${params.orderBy}&sort=${params.sortBy}&site=stackoverflow&${!body && hasBody}`

export const fetchData = (request: string) => (dispatch: Dispatch, getState: Function) => {
  const state: AppStore = getState()
  const params: RequestParams = state.requestParams

  const { initialRequest } = params

  if (initialRequest !== request) dispatch({ type: actionTypes.SET_INITIAL_REQUEST, payload: request })

  dispatch({ type: actionTypes.FETCH_DATA_START })

  const queries = queriesContructor(params)
  const URL = `${BASE_API_URL}/search?intitle=${request}&${queries}`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_DATA_SUCCESS, payload: data.items }))
    .then(() => history.push(ROUTES.RESULTS))
    .catch(error => dispatch({ type: actionTypes.FETCH_DATA_FAIL, error }))
}

export const fetchAddData = (data: number | string, type: string) => (dispatch: Dispatch, getState: Function) => {
  const state: AppStore = getState()
  const params: RequestParams = state.requestParams

  dispatch({ type: actionTypes.SET_SEARCH_PARAM, payload: { type, value: data } })

  dispatch({ type: actionTypes.FETCH_ADD_DATA_START, payload: type })

  let URL = ''
  const queries = queriesContructor(params)

  type === AddDataTypes.AUTHOR ?
    URL = `${BASE_API_URL}/users/${data}/questions?${queries}` :
    URL = `${BASE_API_URL}/questions?tagged=${data}&${queries}`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_ADD_DATA_SUCCESS, payload: data.items }))
    .then(() => type === AddDataTypes.AUTHOR ? history.push(ROUTES.AUTHOR_RESULTS) : history.push(ROUTES.TAG_RESULTS))
    .catch(error => dispatch({ type: actionTypes.FETCH_ADD_DATA_FAIL, error }))

}

export const fetchPost = (data: Question) => (dispatch: Dispatch, getState: Function) => {
  const state: AppStore = getState()
  const params: RequestParams = state.requestParams
  const questionId = data.question_id

  dispatch({ type: actionTypes.SELECT_POST, payload: data })

  dispatch({ type: actionTypes.FETCH_POST_START })

  // thats the filter name in Stackoverflow
  const hasAnswerBody = 'filter=!9Z(-wzu0T'
  const queries = queriesContructor(params, true)
  const URL = `${BASE_API_URL}/questions/${questionId}/answers?${queries}&${hasAnswerBody}`

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_POST_SUCCESS, payload: data.items }))
    .then(() => history.push(ROUTES.POST))
    .catch(error => dispatch({ type: actionTypes.FETCH_POST_FAIL, error }))
}

export const setSortBy = (sortValue: string) => (dispatch: Dispatch) => dispatch({ type: actionTypes.SET_SORT_BY_PARAM, payload: sortValue })

export const setOrderBy = (orderValue: string) => (dispatch: Dispatch) => dispatch({ type: actionTypes.SET_ORDER_BY_PARAM, payload: orderValue })
