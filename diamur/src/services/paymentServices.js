import apiInstance from '../config/api/axios';

export const paymentRequest = async (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    };
    const response = await apiInstance.post(`order`, JSON.stringify(data), config);
    return response;
};

export const paymentSuccess = async (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
    };
    const response = await apiInstance.get(`payment?order-number=${data}`, config);
    return response;
};