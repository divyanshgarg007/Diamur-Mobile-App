import apiInstance from '../config/api/axios'

export const tileJoint = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.get(`tilejoint`, config)
    return response
  }
  export const mortelList = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.get(`mortelcalculator`, config)
    return response
  }
  export const mortelJoint = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.get(`jointmortar`, config)
    return response
  }
  export const tileAdhesive = async () => {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
    }
    const response = await apiInstance.get(`tileadhesive`, config)
    return response
  }