import { Dispatch } from 'redux';
import { AddDataTypes, AppStore, RequestParams } from '../utils/types';
import * as actionTypes from './actionTypes';

const BASE_API_URL = 'https://api.stackexchange.com/2.2';
const hasBody = 'filter=!9Z(-wwYGT'; // thats the filter name in Stackoverflow

const queriesContructor = (params: RequestParams, withBody: boolean): string => `order=${params.orderBy}&sort=${params.sortBy}&site=stackoverflow&${withBody && hasBody}`;

export const fetchData = (request: string) =>
  (dispatch: Dispatch, getState: () => AppStore) => {
    const state: AppStore = getState();
    const params: RequestParams = state.requestParams;

    const { initialRequest } = params;

    if (initialRequest !== request) {
      dispatch({ type: actionTypes.SET_INITIAL_REQUEST, payload: request });
    }

    dispatch({ type: actionTypes.FETCH_DATA_START });

    const queries = queriesContructor(params, true);
    const URL = `${BASE_API_URL}/search?intitle=${request}&${queries}`;

    fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCH_DATA_SUCCESS, payload: data.items });
        if (data.items.length === 0) {
          window.alert(`${request} not found`);
        }
      })
      .catch((err) => {
        dispatch({ type: actionTypes.FETCH_DATA_FAIL, error: err });
        window.alert(err.message);
      });
  };

export const fetchAddData = (data: number | string, type: string) =>
  (dispatch: Dispatch, getState: () => AppStore) => {
    const state: AppStore = getState();
    const params: RequestParams = state.requestParams;

    dispatch({ type: actionTypes.SET_SEARCH_PARAM, payload: { type, value: data } });

    dispatch({ type: actionTypes.FETCH_ADD_DATA_START, payload: type });

    let URL = '';
    const queries = queriesContructor(params, true);

    type === AddDataTypes.AUTHOR ?
      URL = `${BASE_API_URL}/users/${data}/questions?${queries}` :
      URL = `${BASE_API_URL}/questions?tagged=${data}&${queries}`;

    fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => dispatch({ type: actionTypes.FETCH_ADD_DATA_SUCCESS, payload: data.items }))
      .catch((err) => {
        dispatch({ type: actionTypes.FETCH_ADD_DATA_FAIL, error: err });
        window.alert(err.message);
      });

  };

export const fetchPost = (id: string) => (dispatch: Dispatch, getState: () => AppStore) => {
  const state: AppStore = getState();
  const params: RequestParams = state.requestParams;

  dispatch({ type: actionTypes.FETCH_POST_START, payload: id });

  const hasAnswerBody = 'filter=!-*jbN-lAlw-5';
  const queries = queriesContructor(params, false);
  const URL = `${BASE_API_URL}/questions/${id}?${queries}&${hasAnswerBody}`;

  fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => dispatch({ type: actionTypes.FETCH_POST_SUCCESS, payload: data.items }))
    .catch((err) => {
      dispatch({ type: actionTypes.FETCH_POST_FAIL, error: err });
      window.alert(err.message);
    });
};

export const setSortBy = (sortValue: string) => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SET_SORT_BY_PARAM, payload: sortValue });

export const setOrderBy = (orderValue: string) => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SET_ORDER_BY_PARAM, payload: orderValue });
