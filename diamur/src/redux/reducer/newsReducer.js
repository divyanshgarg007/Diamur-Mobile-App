import {NEWS_ACTION_TYPES} from '../action/actionsType';

const initialState = {
  newsList: {
    loading: false,
    data: null,
    error: null,
  },
  newsDetail: {
    loading: false,
    data: null,
    error: null,
  },
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    //Product list reducer
    case NEWS_ACTION_TYPES.NEWS_LIST_REQUEST:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: null,
          loading: true,
          error: null,
        },
      };
    case NEWS_ACTION_TYPES.NEWS_LIST_SUCCESS:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case NEWS_ACTION_TYPES.NEWS_LIST_FAILURE:
      return {
        ...state,
        newsList: {
          ...state.newsList,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    case NEWS_ACTION_TYPES.NEWS_DETAIL_REQUEST:
      return {
        ...state,
        newsDetail: {
          ...state.newsDetail,
          data: null,
          loading: true,
          error: null,
        },
      };
    case NEWS_ACTION_TYPES.NEWS_DETAIL_SUCCESS:
      return {
        ...state,
        newsDetail: {
          ...state.newsDetail,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case NEWS_ACTION_TYPES.NEWS_DETAIL_FAILURE:
      return {
        ...state,
        newsDetail: {
          ...state.newsDetail,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default newsReducer;
