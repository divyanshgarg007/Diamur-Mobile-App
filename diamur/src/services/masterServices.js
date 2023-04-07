import apiInstance from '../config/api/axios';

export const faqsList = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get(`faq`, config);
  return response;
};
