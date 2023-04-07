import { ORDER_ACTION_TYPES } from '../action/actionsType';

const initialState = {
  orderList: {
    loading: false,
    data: null,
    error: null,
  },
  orderAgain: {
    loading: false,
    data: null,
    error: null,
  },
  getDeliveryList: {
    loading: false,
    data: null,
    error: null,
  },
  addDeliveryDetail: {
    loading: false,
    data: null,
    error: null,
  },
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ACTION_TYPES.ORDER_LIST_REQUEST:
      return {
        ...state,
        orderList: {
          ...state.orderList,
          data: null,
          loading: true,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.ORDER_LIST_SUCCESS:
      return {
        ...state,
        orderList: {
          ...state.orderList,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.ORDER_LIST_FAILURE:
      return {
        ...state,
        orderList: {
          ...state.orderList,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    //order again
    case ORDER_ACTION_TYPES.ORDER_AGAIN_REQUEST:
      return {
        ...state,
        orderAgain: {
          ...state.orderAgain,
          data: null,
          loading: true,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.ORDER_AGAIN_SUCCESS:
      return {
        ...state,
        orderAgain: {
          ...state.orderAgain,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.ORDER_AGAIN_FAILURE:
      return {
        ...state,
        orderAgain: {
          ...state.orderAgain,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    //get delivery list
    case ORDER_ACTION_TYPES.GET_DELIVERY_LIST_REQUEST:
      return {
        ...state,
        getDeliveryList: {
          ...state.getDeliveryList,
          data: null,
          loading: true,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.GET_DELIVERY_LIST_SUCCESS:
      return {
        ...state,
        getDeliveryList: {
          ...state.getDeliveryList,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.GET_DELIVERY_LIST_FAILURE:
      return {
        ...state,
        getDeliveryList: {
          ...state.getDeliveryList,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    //add delivery detail
    case ORDER_ACTION_TYPES.ADD_DELIVERY_DETAIL_REQUEST:
      return {
        ...state,
        addDeliveryDetail: {
          ...state.addDeliveryDetail,
          data: null,
          loading: true,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.ADD_DELIVERY_DETAIL_SUCCESS:
      return {
        ...state,
        addDeliveryDetail: {
          ...state.addDeliveryDetail,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case ORDER_ACTION_TYPES.ADD_DELIVERY_DETAIL_FAILURE:
      return {
        ...state,
        addDeliveryDetail: {
          ...state.addDeliveryDetail,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default orderReducer;
