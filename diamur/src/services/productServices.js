import apiInstance from '../config/api/axios'

export const productList = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get(`product`, config)
  return response
}
export const productDetail = async (id) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  const response = await apiInstance.get(`product/${id}`, config)
  return response
}
export const productApplication = async (data) => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
    },
  }
  console.log('application', data)
  const response = await apiInstance.get(`product-filter/${data}`, config)
  console.log('applicationResponse', response)
  return response
}