import { AnyAction, AppStore, OrderVariation, SortVariation, TableTypes } from '../utils/types';
import * as actionTypes from './actionTypes';

export const initialState: AppStore = {
  requestParams: {
    initialRequest: '',
    sortBy: SortVariation.VOTES,
    orderBy: OrderVariation.DESC,
    addTableParam: null,
  },
  mainResult: {
    data: [],
    type: TableTypes.MAIN,
  },
  addResult: {
    data: [],
    type: TableTypes.ADD,
  },
  loading: false,
  selectedPost: {
    question: null,
    answers: [],
  },
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SET_INITIAL_REQUEST:
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          initialRequest: action.payload,
        },
      };

    case actionTypes.FETCH_DATA_START:
    case actionTypes.FETCH_ADD_DATA_START:
    case actionTypes.FETCH_POST_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        mainResult: {
          ...state.mainResult,
          data: action.payload,
        },
        loading: false,
      };

    case actionTypes.SET_SEARCH_PARAM: {
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          addTableParam: action.payload,
        },
      };
    }

    case actionTypes.SET_SORT_BY_PARAM: {
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          sortBy: action.payload,
        },
      };
    }

    case actionTypes.SET_ORDER_BY_PARAM: {
      return {
        ...state,
        requestParams: {
          ...state.requestParams,
          orderBy: action.payload,
        },
      };
    }

    case actionTypes.FETCH_ADD_DATA_SUCCESS:
      return {
        ...state,
        addResult: {
          ...state.addResult,
          data: action.payload,
        },
        loading: false,
      };

    case actionTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedPost: {
          ...state.selectedPost,
          answers: action.payload,
        },
      };

    case actionTypes.FETCH_DATA_FAIL:
    case actionTypes.FETCH_ADD_DATA_FAIL:
    case actionTypes.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.SELECT_POST:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          question: action.payload,
        },
      };

    default:
      return state;
  }
};

export default reducer;
