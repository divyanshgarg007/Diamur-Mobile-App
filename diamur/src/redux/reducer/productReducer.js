import { PRODUCT_ACTION_TYPES } from '../action/actionsType';

const initialState = {
    productList: {
        loading: false,
        data: null,
        error: null,
    },
    productDetail: {
        loading: false,
        data: null,
        error: null,
    },
};
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        //Product list reducer
        case PRODUCT_ACTION_TYPES.PRODUCT_LIST_REQUEST:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case PRODUCT_ACTION_TYPES.PRODUCT_LIST_FAILURE:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
            case PRODUCT_ACTION_TYPES.PRODUCT_DETAIL_REQUEST:
                return {
                    ...state,
                    productDetail: {
                        ...state.productDetail,
                        data: null,
                        loading: true,
                        error: null,
                    },
                };
            case PRODUCT_ACTION_TYPES.PRODUCT_DETAIL_SUCCESS:
                return {
                    ...state,
                    productDetail: {
                        ...state.productDetail,
                        data: action.payload,
                        loading: false,
                        error: null,
                    },
                };
            case PRODUCT_ACTION_TYPES.PRODUCT_DETAIL_FAILURE:
                return {
                    ...state,
                    productDetail: {
                        ...state.productDetail,
                        data: null,
                        loading: false,
                        error: action.payload,
                    },
                };
                case PRODUCT_ACTION_TYPES.CLEAN_UP_PRODUCT:
                return {
                    ...state,
                    productDetail: {
                        ...state.productDetail,
                        data: null,
                        loading: false,
                        error: null,
                    },
                };
        default:
            return state;
    }
};

export default productReducer;