import apiInstance from '../config/api/axios';

export const orderList = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get(`order`, config);
  return response;
};

export const orderAgain = async (data) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  let obj = {
    id: data
  }
  const response = await apiInstance.post(`order-again`, JSON.stringify(obj), config);
  return response;
};

//get delivery list
export const getDeliveryList = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get(`delivery-information`, config);
  return response;
};

// add delivery detail

export const addDeliveryDetail = async (data) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.post(`shipping`, JSON.stringify(data), config);
  return response;
};

///order information

export const orderInformation = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get(`order-information`, config);
  return response;
};