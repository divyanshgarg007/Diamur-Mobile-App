import apiInstance from '../config/api/axios';

// export const verifyPhone = async (data) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }

//   const response = await apiInstance.post('employee/verifyPhone', JSON.stringify(data), config)
//   return response
// }

// export const verifyOTP = async (data) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }

//   const response = await apiInstance.post('employee/verify', JSON.stringify(data), config)
//   return response
// }

export const signup = async data => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const response = await apiInstance.post(
    `register?company= ${data.company}&btwNumber= ${data.btwNumber}&activity[]= ${data.activity}&responsible= ${data.responsible}&email= ${data.email}&telephone= ${data.telephone}&address= ${data.address}&number= ${data.number}&postcode= ${data.postcode}&gender= ${data.gender}&password= ${data.password}&password_confirmation= ${data.password_confirmation}&terms= ${data.terms}&township=${data.township}`,
    config,
  );
  return response;
};

export const login = async data => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const response = await apiInstance.post(
    'login',
    JSON.stringify(data),
    config,
  );
  return response;
};

export const companyCheck = async data => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const response = await apiInstance.post(
    'check-register-company',
    JSON.stringify(data),
    config,
  );
  return response;
};

export const updateProfile = async data => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.put(
    `profile/update/${data.id}?company=${data.company}&btw_number=${data.btw_number}&name=${data.name}&email=${data.email}&address=${data.address.address}&postcode=${data.address.postcode}&township=${data.address.township}`,
    // JSON.stringify(data),
    config,
  );
  return response;
};

export const contactUs = async data => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const response = await apiInstance.post(
    `contact?business= ${data.business}&name= ${data.name}&email= ${data.email}&telephone= ${data.telephone}&email= ${data.email}&telephone= ${data.telephone}&message= ${data.message}&zip_city= ${data.zip_city}&street_no= ${data.street_no}&req_url='http://127.0.0.1:8000/en/contact'`,
    config,
  );
  return response;
};

// export const checkSession = async () => {
//   const response = await apiInstance.get('user', null)
//   return response
// }

// export const changePassword = async (form) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const data = {
//     old_password: form.oldPassword,
//     password: form.newPassword,
//     password_confirmation: form.confirmPassword,
//   }
//   const response = await apiInstance.put('user/change-password', JSON.stringify(data), config)
//   return response
// }
// export const setPassword = async (form) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const data = {
//     password: form.password,
//     password_confirmation: form.confirmPassword,
//   }
//   const response = await apiInstance.put('user/set-password', JSON.stringify(data), config)
//   return response
// }
export const userLogout = async () => {
  let config = {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };
  const response = await apiInstance.get('user/logout', config);
  return response;
};

// export const forgotSentOTP = async (form) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const data = {
//     email: form.email,
//   }
//   const response = await apiInstance.post('forgot-password/otp/send', JSON.stringify(data), config)
//   return response
// }

// export const forgotVerifyOTP = async (otpID, otp) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const data = {
//     otp_id: otpID,
//     otp: otp,
//   }
//   const response = await apiInstance.post('forgot-password/otp/verify', JSON.stringify(data), config)
//   return response
// }

// export const forgotChangePassword = async (otpID, otp, form) => {
//   let config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'accept': 'application/json',
//     },
//   }
//   const data = {
//     otp_id: otpID,
//     otp: otp,
//     password: form.password,
//     password_confirmation: form.password_confirmation,
//   }
//   const response = await apiInstance.put('forgot-password/otp/change-password', JSON.stringify(data), config)
//   return response
// }
