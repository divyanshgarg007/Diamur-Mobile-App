import apiInstance from '../config/api/axios'

export const cartList = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.get(`cart`, config)
    return response
  }
  export const addCart = async (data) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.post(`cart`, JSON.stringify(data), config)
    return response
  }
  export const cartQuantityUpdate = async (value, id) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.put(`cart/${id}?quantity=${value}`, config)
    return response
  }
  export const deleteCartItem = async (id) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.delete(`cart/${id}`, config)
    return response
  }
  export const cartCount = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.get(`cart-count`, config)
    return response
  }