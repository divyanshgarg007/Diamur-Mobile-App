import * as paymentServices from '../../services/paymentServices';

export const paymentRequestAction = (data, onSuccess, onError) => async dispatch => {
    try {
        const responseData = await paymentServices.paymentRequest(data);
        if (responseData?.status === 'success') {
            onSuccess(responseData);
        } else {
            onError(responseData.errors);
        }
    } catch (error) {
        onError(error?.response?.data);
    }
};

export const paymentSuccessAction = (data, onSuccess, onError) => async dispatch => {
    try {
        const responseData = await paymentServices.paymentSuccess(data);
        if (responseData?.status === 'success') {
            onSuccess(responseData);
        } else {
            onError(responseData.errors);
        }
    } catch (error) {
        onError(error?.response?.data);
    }
};