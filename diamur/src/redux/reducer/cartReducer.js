import { CART_ACTION_TYPES } from '../action/actionsType';

const initialState = {
    cartList: {
        loading: false,
        data: null,
        error: null,
    },
    addCart: {
        loading: false,
        data: null,
        error: null,
    },
    cartQuantityUpdate: {
        loading: false,
        data: null,
        error: null,
    },
    cartDeleteItem: {
        loading: false,
        data: null,
        error: null,
    },
    cartCount: {
        loading: false,
        data: null,
        error: null,
    },
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        //cart list reducer
        case CART_ACTION_TYPES.CART_LIST_REQUEST:
            return {
                ...state,
                cartList: {
                    ...state.cartList,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_LIST_SUCCESS:
            return {
                ...state,
                cartList: {
                    ...state.cartList,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_LIST_FAILURE:
            return {
                ...state,
                cartList: {
                    ...state.cartList,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
        //Add cart reducer
        case CART_ACTION_TYPES.ADD_CART_REQUEST:
            return {
                ...state,
                addCart: {
                    ...state.addCart,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.ADD_CART_SUCCESS:
            return {
                ...state,
                addCart: {
                    ...state.addCart,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.ADD_CART_FAILURE:
            return {
                ...state,
                addCart: {
                    ...state.addCart,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
        //Quantity update reducer
        case CART_ACTION_TYPES.CART_QUANTITY_UPDATE_REQUEST:
            return {
                ...state,
                cartQuantityUpdate: {
                    ...state.cartQuantityUpdate,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_QUANTITY_UPDATE_SUCCESS:
            return {
                ...state,
                cartQuantityUpdate: {
                    ...state.cartQuantityUpdate,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_QUANTITY_UPDATE_FAILURE:
            return {
                ...state,
                cartQuantityUpdate: {
                    ...state.cartQuantityUpdate,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
        //Cart delete item reducer
        case CART_ACTION_TYPES.CART_DELETE_REQUEST:
            return {
                ...state,
                cartDeleteItem: {
                    ...state.cartDeleteItem,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_DELETE_SUCCESS:
            return {
                ...state,
                cartDeleteItem: {
                    ...state.cartDeleteItem,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_DELETE_FAILURE:
            return {
                ...state,
                cartDeleteItem: {
                    ...state.cartDeleteItem,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
        //Cart count reducer
        case CART_ACTION_TYPES.CART_COUNT_REQUEST:
            return {
                ...state,
                cartCount: {
                    ...state.cartCount,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_COUNT_SUCCESS:
            return {
                ...state,
                cartCount: {
                    ...state.cartCount,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CART_ACTION_TYPES.CART_COUNT_FAILURE:
            return {
                ...state,
                cartCount: {
                    ...state.cartCount,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};

export default cartReducer;
