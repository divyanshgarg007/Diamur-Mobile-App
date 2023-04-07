import apiInstance from '../config/api/axios';

export const newsList = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get(`news`, config);
  return response;
};

export const newsDetail = async slug => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get(`news/${slug}`, config);
  return response;
};
