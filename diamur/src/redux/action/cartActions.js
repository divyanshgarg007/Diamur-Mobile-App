import { CART_ACTION_TYPES } from './actionsType';
import * as cartServices from '../../services/cartServices'
//Cart list action
const cartListRequest = () => {
    return {
        type: CART_ACTION_TYPES.CART_LIST_REQUEST,
    }
}

const cartListSuccess = (data) => {
    return {
        type: CART_ACTION_TYPES.CART_LIST_SUCCESS,
        payload: data,
    }
}

const cartListFailure = (error) => {
    return {
        type: CART_ACTION_TYPES.CART_LIST_FAILURE,
        payload: error,
    }
}

export const cartListAction = () =>
    async (dispatch) => {

        dispatch(cartListRequest())
        try {
            const responseData = await cartServices.cartList()
            if (responseData?.status === 'success') {
                dispatch(cartListSuccess(responseData))
            } else {
                dispatch(cartListFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(cartListFailure(error?.response?.data))
        }
    }
//Add to cart
const addCartRequest = () => {
    return {
        type: CART_ACTION_TYPES.ADD_CART_REQUEST,
    }
}

const addCartSuccess = (data) => {
    return {
        type: CART_ACTION_TYPES.ADD_CART_SUCCESS,
        payload: data,
    }
}

const addCartFailure = (error) => {
    return {
        type: CART_ACTION_TYPES.ADD_CART_FAILURE,
        payload: error,
    }
}

export const addCartAction = (data) =>
    async (dispatch) => {

        dispatch(addCartRequest())
        try {
            const responseData = await cartServices.addCart(data)
            if (responseData?.status === 'success') {
                dispatch(addCartSuccess(responseData))
                dispatch(cartListAction())
                dispatch(cartCountAction())
            } else {
                dispatch(addCartFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(addCartFailure(error?.response?.data))
        }
    }
//Cart quantity update action
const cartQuantityUpdateRequest = () => {
    return {
        type: CART_ACTION_TYPES.CART_QUANTITY_UPDATE_REQUEST,
    }
}

const cartQuantityUpdateSuccess = (data) => {
    return {
        type: CART_ACTION_TYPES.CART_QUANTITY_UPDATE_SUCCESS,
        payload: data,
    }
}

const cartQuantityUpdateFailure = (error) => {
    return {
        type: CART_ACTION_TYPES.CART_QUANTITY_UPDATE_FAILURE,
        payload: error,
    }
}

export const cartQuantityUpdateAction = (value, id) =>
    async (dispatch) => {

        dispatch(cartQuantityUpdateRequest())
        try {
            const responseData = await cartServices.cartQuantityUpdate(value, id)
            if (responseData?.status === 'success') {
                dispatch(cartQuantityUpdateSuccess(responseData))
                dispatch(cartListAction())
            } else {
                dispatch(cartQuantityUpdateFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(cartQuantityUpdateFailure(error?.response?.data))
        }
    }
//Delete item action
const deleteCartItemRequest = () => {
    return {
        type: CART_ACTION_TYPES.CART_DELETE_REQUEST,
    }
}

const deleteCartItemSuccess = (data) => {
    return {
        type: CART_ACTION_TYPES.CART_DELETE_SUCCESS,
        payload: data,
    }
}

const deleteCartItemFailure = (error) => {
    return {
        type: CART_ACTION_TYPES.CART_DELETE_FAILURE,
        payload: error,
    }
}

export const deleteCartItemAction = (id) =>
    async (dispatch) => {

        dispatch(deleteCartItemRequest())
        try {
            const responseData = await cartServices.deleteCartItem(id)
            if (responseData?.status === 'success') {
                dispatch(deleteCartItemSuccess(responseData))
                dispatch(cartListAction())
                dispatch(cartCountAction())
            } else {
                dispatch(deleteCartItemFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(deleteCartItemFailure(error?.response?.data))
        }
    }

///Cart count
const cartCountRequest = () => {
    return {
        type: CART_ACTION_TYPES.CART_COUNT_REQUEST,
    }
}

const cartCountSuccess = (data) => {
    return {
        type: CART_ACTION_TYPES.CART_COUNT_SUCCESS,
        payload: data,
    }
}

const cartCountFailure = (error) => {
    return {
        type: CART_ACTION_TYPES.CART_COUNT_FAILURE,
        payload: error,
    }
}

export const cartCountAction = () =>
    async (dispatch) => {

        dispatch(cartCountRequest())
        try {
            const responseData = await cartServices.cartCount()
            if (responseData?.status === 'success') {
                dispatch(cartCountSuccess(responseData))
            } else {
                dispatch(cartCountFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(cartCountFailure(error?.response?.data))
        }
    }