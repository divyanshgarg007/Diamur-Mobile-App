import {NEWS_ACTION_TYPES} from './actionsType';
import * as newsServices from '../../services/newsServices';
const newsListRequest = () => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_LIST_REQUEST,
  };
};

const newsListSuccess = data => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_LIST_SUCCESS,
    payload: data,
  };
};

const newsListFailure = error => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_LIST_FAILURE,
    payload: error,
  };
};

export const newsListAction = () => async dispatch => {
  dispatch(newsListRequest());
  try {
    const responseData = await newsServices.newsList();
    if (responseData?.status === 'success') {
      dispatch(newsListSuccess(responseData));
    } else {
      dispatch(newsListFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(newsListFailure(error?.response?.data));
  }
};

const newsDetailRequest = () => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_DETAIL_REQUEST,
  };
};

const newsDetailSuccess = data => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_DETAIL_SUCCESS,
    payload: data,
  };
};

const newsDetailFailure = error => {
  return {
    type: NEWS_ACTION_TYPES.NEWS_DETAIL_FAILURE,
    payload: error,
  };
};

export const newsDetailAction = slug => async dispatch => {
  dispatch(newsDetailRequest());
  try {
    const responseData = await newsServices.newsDetail(slug);
    if (responseData?.status === 'success') {
      dispatch(newsDetailSuccess(responseData));
    } else {
      dispatch(newsDetailFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(newsDetailFailure(error?.response?.data));
  }
};
