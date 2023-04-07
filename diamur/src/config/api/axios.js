import axios from 'axios';
import { getToken } from '../../utilities/authUtils';

const apiInstance = axios.create({
  baseURL: 'https://testapp.diamur.be/api/v1/',
});

apiInstance.interceptors.request.use(async config => {
  let token1
  await getToken('token').then(data => { token1 = data })
  config.headers.Authorization = token1 && token1 !== undefined ? `Bearer ${token1}` : '';
  //config.headers['company-id'] = companyID && companyID !== undefined ? companyID : ''
  //config.headers['shop-id'] = shopID && shopID !== undefined ? shopID : ''
  return config;
});
// axios.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2))
//   return request
// })
// Add a response interceptor
apiInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default apiInstance;
