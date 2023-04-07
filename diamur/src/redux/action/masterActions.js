import {MASTER_ACTION_TYPES} from './actionsType';
import * as masterServices from '../../services/masterServices';
const faqsListRequest = () => {
  return {
    type: MASTER_ACTION_TYPES.FAQS_LIST_REQUEST,
  };
};

const faqsListSuccess = data => {
  return {
    type: MASTER_ACTION_TYPES.FAQS_LIST_SUCCESS,
    payload: data,
  };
};

const faqsListFailure = error => {
  return {
    type: MASTER_ACTION_TYPES.FAQS_LIST_FAILURE,
    payload: error,
  };
};

export const faqsListAction = () => async dispatch => {
  dispatch(faqsListRequest());
  try {
    const responseData = await masterServices.faqsList();
    if (responseData?.status === 'success') {
      dispatch(faqsListSuccess(responseData));
    } else {
      dispatch(faqsListFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(faqsListFailure(error?.response?.data));
  }
};
