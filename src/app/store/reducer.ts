import * as actionTypes from './actionTypes'
import { AppStore, AnyAction } from '../utils/types'

export const initialState: AppStore = {
  data: null,
  loading: false
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_REQUEST_SUCCESS:
      return {
        data: action.payload,
        loading: false
      }

    case actionTypes.FETCH_REQUEST_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer