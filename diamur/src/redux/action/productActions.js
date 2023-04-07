import { PRODUCT_ACTION_TYPES } from './actionsType';
import * as productServices from '../../services/productServices'
const productListRequest = () => {
    return {
        type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_REQUEST,
    }
}

const productListSuccess = (data) => {
    return {
        type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_SUCCESS,
        payload: data,
    }
}

const productListFailure = (error) => {
    return {
        type: PRODUCT_ACTION_TYPES.PRODUCT_LIST_FAILURE,
        payload: error,
    }
}

export const productListAction = () =>
    async (dispatch) => {

        dispatch(productListRequest())
        try {
            const responseData = await productServices.productList()
            if (responseData?.status === 'success') {
                dispatch(productListSuccess(responseData))
            } else {
                dispatch(productListFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(productListFailure(error?.response?.data))
        }
    }

const productDetailRequest = () => {
    return {
        type: PRODUCT_ACTION_TYPES.PRODUCT_DETAIL_REQUEST,
    }
}

const productDetailSuccess = (data) => {
    return {
        type: PRODUCT_ACTION_TYPES.PRODUCT_DETAIL_SUCCESS,
        payload: data,
    }
}

const productDetailFailure = (error) => {
    return {
        type: PRODUCT_ACTION_TYPES.PRODUCT_DETAIL_FAILURE,
        payload: error,
    }
}

export const productDetailAction = (data, onSuccessProduct, onErrorProduct) =>
    async (dispatch) => {

        dispatch(productDetailRequest())
        try {
            const responseData = await productServices.productDetail(data)
            if (responseData?.status === 'success') {
                onSuccessProduct(responseData)
            } else {
                onErrorProduct(responseData.errors)
            }
        } catch (error) {
            onErrorProduct(error?.response?.data)
        }
    }
///clean up
const cleanUpRequest = () => {
    return {
        type: PRODUCT_ACTION_TYPES.CLEAN_UP_PRODUCT,
    }
}
export const cleanUpAction = () =>
    async (dispatch) => {
        dispatch(cleanUpRequest())
    }

///Product application area
export const productApplicationFilter = (data, onSuccessApplication, onErrorApplication, obj) =>
    async (dispatch) => {
        try {
            const responseData = await productServices.productApplication(data)
            if (responseData?.status === 'success') {
                onSuccessApplication(responseData?.payload, obj)
            } else {
                onErrorApplication(responseData.errors)
            }
        } catch (error) {
            onErrorApplication(error?.response?.data)
        }
    }