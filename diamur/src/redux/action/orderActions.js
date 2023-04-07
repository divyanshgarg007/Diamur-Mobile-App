import { ORDER_ACTION_TYPES } from './actionsType';
import * as orderServices from '../../services/orderServices';
const orderListRequest = () => {
  return {
    type: ORDER_ACTION_TYPES.ORDER_LIST_REQUEST,
  };
};

const orderListSuccess = data => {
  return {
    type: ORDER_ACTION_TYPES.ORDER_LIST_SUCCESS,
    payload: data,
  };
};

const orderListFailure = error => {
  return {
    type: ORDER_ACTION_TYPES.ORDER_LIST_FAILURE,
    payload: error,
  };
};

export const orderListAction = () => async dispatch => {
  dispatch(orderListRequest());
  try {
    const responseData = await orderServices.orderList();
    if (responseData?.status === 'success') {
      dispatch(orderListSuccess(responseData));
    } else {
      dispatch(orderListFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(orderListFailure(error?.response?.data));
  }
};

///order again
const orderAgainRequest = () => {
  return {
    type: ORDER_ACTION_TYPES.ORDER_AGAIN_REQUEST,
  };
};

const orderAgainSuccess = data => {
  return {
    type: ORDER_ACTION_TYPES.ORDER_AGAIN_SUCCESS,
    payload: data,
  };
};

const orderAgainFailure = error => {
  return {
    type: ORDER_ACTION_TYPES.ORDER_AGAIN_FAILURE,
    payload: error,
  };
};

export const orderAgainAction = (data) => async dispatch => {
  dispatch(orderAgainRequest());
  try {
    const responseData = await orderServices.orderAgain(data);
    if (responseData?.status === 'success') {
      dispatch(orderAgainSuccess(responseData));
    } else {
      dispatch(orderAgainFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(orderAgainFailure(error?.response?.data));
  }
};
//Get delivery list
const getDeliveryListRequest = () => {
  return {
    type: ORDER_ACTION_TYPES.GET_DELIVERY_LIST_REQUEST,
  }
}

const getDeliveryListSuccess = (data) => {
  return {
    type: ORDER_ACTION_TYPES.GET_DELIVERY_LIST_SUCCESS,
    payload: data,
  }
}

const getDeliveryListFailure = (error) => {
  return {
    type: ORDER_ACTION_TYPES.GET_DELIVERY_LIST_FAILURE,
    payload: error,
  }
}

export const getDeliveryListAction = () =>
  async (dispatch) => {

    dispatch(getDeliveryListRequest())
    try {
      const responseData = await orderServices.getDeliveryList()
      if (responseData?.status === 'success') {
        dispatch(getDeliveryListSuccess(responseData))
      } else {
        dispatch(getDeliveryListFailure(responseData.errors))
      }
    } catch (error) {
      dispatch(getDeliveryListFailure(error?.response?.data))
    }
  }
//Add Delivery detail

const addDeliveryDetailRequest = () => {
  return {
    type: ORDER_ACTION_TYPES.ADD_DELIVERY_DETAIL_REQUEST,
  }
}

const addDeliveryDetailSuccess = (data) => {
  return {
    type: ORDER_ACTION_TYPES.ADD_DELIVERY_DETAIL_SUCCESS,
    payload: data,
  }
}

const addDeliveryDetailFailure = (error) => {
  return {
    type: ORDER_ACTION_TYPES.ADD_DELIVERY_DETAIL_FAILURE,
    payload: error,
  }
}

export const addDeliveryDetailAction = (data, onSuccess, onError) =>
  async (dispatch) => {

    dispatch(addDeliveryDetailRequest())
    try {
      const responseData = await orderServices.addDeliveryDetail(data)
      if (responseData?.status === 'success') {
        onSuccess(responseData)
        // dispatch(addDeliveryDetailSuccess(responseData))
        dispatch(getDeliveryListAction())
      } else {
        onError(responseData)
        // dispatch(addDeliveryDetailFailure(responseData.errors))
      }
    } catch (error) {
      onError(error?.response?.data)
      // dispatch(addDeliveryDetailFailure(error?.response?.data))
    }
  }

//order information

export const orderInformationAction = (data, onSuccess, onError) =>
  async (dispatch) => {
    try {
      const responseData = await orderServices.orderInformation(data)
      if (responseData?.status === 'success') {
        onSuccess(responseData)
      } else {
        onError(responseData)
      }
    } catch (error) {
      onError(error?.response?.data)
    }
  }
