import * as actionTypes from './actionTypes'
import { AppStore, AnyAction } from '../utils/types'

export const initialState: AppStore = {
  data: [],
  addData: [],
  loading: false,
  selectedPost: {
    question: null,
    answers: [],
  }
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
    case actionTypes.FETCH_ADD_DATA_START:
    case actionTypes.FETCH_POST_START:
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
        addData: action.payload,
        loading: false
      }

    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedPost: {
          ...state.selectedPost,
          answers: action.payload
        }
      }

    case actionTypes.FETCH_DATA_FAIL:
    case actionTypes.FETCH_ADD_DATA_FAIL:
    case actionTypes.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false
      }

    case actionTypes.SELECT_POST:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          question: action.payload
        }
      }

    default:
      return state
  }
}

export default reducer