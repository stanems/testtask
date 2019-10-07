import * as actionTypes from './actionTypes'
import { AppStore, AnyAction } from '../utils/types'

export const initialState: AppStore = {
  data: null,
  addData: null,
  loading: false
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
    case actionTypes.FETCH_ADD_DATA_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }

    case actionTypes.FETCH_ADD_DATA_SUCCESS:
      return {
        ...state,
        addData:action.payload,
        loading: false
      }

    case actionTypes.FETCH_DATA_FAIL:
    case actionTypes.FETCH_ADD_DATA_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer