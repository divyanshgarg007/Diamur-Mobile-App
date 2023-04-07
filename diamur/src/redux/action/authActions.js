import { AUTH_ACTION_TYPES } from './actionsType';
import * as authServices from '../../services/authServices';
import { setToken } from '../../utilities/authUtils';
import AsyncStorage from '@react-native-async-storage/async-storage'
export const setUserLanguage = data => {
  return {
    type: AUTH_ACTION_TYPES.SET_USER_LANGUAGE,
    payload: data,
  };
};

// const verifyPhoneRequest = () => {
//     return {
//         type: AUTH_ACTION_TYPES.VERIFY_PHONE_PENDING,
//     }
// }

// const verifyPhoneSuccess = (data) => {
//     return {
//         type: AUTH_ACTION_TYPES.VERIFY_PHONE_SUCCESS,
//         payload: data,
//     }
// }

// const verifyPhoneFailure = (error) => {
//     return {
//         type: AUTH_ACTION_TYPES.VERIFY_PHONE_ERROR,
//         payload: error,
//     }
// }

// export const verifyPhoneAction = (data) =>
//     async (dispatch) => {
//         dispatch(verifyPhoneRequest())
//         try {
//             const responseData = await authServices.verifyPhone(data)
//             if (responseData?.success === true) {
//                 dispatch(verifyPhoneSuccess(responseData))
//             } else {
//                 dispatch(verifyPhoneFailure(responseData.errors))
//             }
//         } catch (error) {
//             dispatch(verifyPhoneFailure(error?.response?.data))
//         }
//     }

// const verifyOTPRequest = () => {
//     return {
//         type: AUTH_ACTION_TYPES.VERIFY_OTP_PENDING,
//     }
// }

// const verifyOTPSuccess = (data) => {
//     return {
//         type: AUTH_ACTION_TYPES.VERIFY_OTP_SUCCESS,
//         payload: data,
//     }
// }

// const verifyOTPFailure = (error) => {
//     return {
//         type: AUTH_ACTION_TYPES.VERIFY_OTP_ERROR,
//         payload: error,
//     }
// }

// export const verifyOTPAction = (data) =>
//     async (dispatch) => {
//         dispatch(verifyOTPRequest())
//         try {
//             const responseData = await authServices.verifyOTP(data)
//             if (responseData?.success === true) {
//                 dispatch(verifyOTPSuccess(responseData))
//             } else {
//                 dispatch(verifyOTPFailure(responseData.errors))
//             }
//         } catch (error) {
//             dispatch(verifyOTPFailure(error?.response?.data))
//         }
//     }

// const setPasswordRequest = () => {
//     return {
//         type: AUTH_ACTION_TYPES.LOGIN_PENDING,
//     }
// }

// const setPasswordSuccess = (data) => {
//     return {
//         type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
//         payload: data,
//     }
// }

// const setPasswordFailure = (error) => {
//     return {
//         type: AUTH_ACTION_TYPES.LOGIN_ERROR,
//         payload: error,
//     }
// }

// export const setPasswordAction = (data) =>
//     async (dispatch) => {
//         dispatch(setPasswordRequest())
//         try {
//             const responseData = await authServices.signup(data)
//             if (responseData?.success === true) {
//                 dispatch(setPasswordSuccess(responseData))
//             } else {
//                 dispatch(setPasswordFailure(responseData.errors))
//             }
//         } catch (error) {
//             dispatch(setPasswordFailure(error?.response?.data))
//         }
//     }

//USER SIGN IN ACTION
const loginRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.USER_SIGN_IN_REQUEST,
  };
};

const loginSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.USER_SIGN_IN_SUCCESS,
    payload: data,
  };
};

const loginFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.USER_SIGN_IN_FAILURE,
    payload: error,
  };
};

export const loginAction = data => async dispatch => {
  dispatch(loginRequest());
  try {
    const responseData = await authServices.login(data);
    if (responseData?.status === 'success') {
      dispatch(loginSuccess(responseData));
      setToken('token', responseData?.payload?.url?.token)
    } else {
      dispatch(loginFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(loginFailure(error?.response?.data));
  }
};

//COMPANY CHECK ACTION

const companyCheckRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.COMPANY_CHECK_REQUEST,
  };
};

const companyCheckSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.COMPANY_CHECK_SUCCESS,
    payload: data,
  };
};

const companyCheckFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.COMPANY_CHECK_FAILURE,
    payload: error,
  };
};

export const companyCheckAction = data => async dispatch => {
  dispatch(companyCheckRequest());
  try {
    const responseData = await authServices.companyCheck(data);
    console.log('companyCheckAction', responseData, data)
    if (responseData?.status === 'success') {
      dispatch(companyCheckSuccess(responseData));
    } else {
      dispatch(companyCheckFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(companyCheckFailure(error?.response?.data));
  }
};

//USER SIGNUP ACTION

const signUpRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.USER_SIGNUP_REQUEST,
  };
};

const signUpSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.USER_SIGNUP_SUCCESS,
    payload: data,
  };
};

const signUpFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.USER_SIGNUP_FAILURE,
    payload: error,
  };
};

export const signUpAction = data => async dispatch => {
  dispatch(signUpRequest());
  try {
    const responseData = await authServices.signup(data);
    if (responseData?.status === 'success') {
      dispatch(signUpSuccess(responseData));
    } else {
      dispatch(signUpFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(signUpFailure(error?.response?.data));
  }
};

//CLEANUP
const cleanUpStateRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.CLEAN_UP_STATE_REQUEST,
  };
};

export const cleanUpState = () => async dispatch => {
  dispatch(cleanUpStateRequest());
};

//USER LOGOUT ACTION
export const logoutAction = () => {
  return {
    type: AUTH_ACTION_TYPES.USER_LOGGED_OUT,
    payload: undefined,
  };
};

//PROFILE UPDATE ACTION

const updateProfileRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.PROFILE_UPDATE_REQUEST,
  };
};

const updateProfileSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.PROFILE_UPDATE_SUCCESS,
    payload: data,
  };
};

const updateProfileFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.PROFILE_UPDATE_FAILURE,
    payload: error,
  };
};

export const updateProfileAction = data => async dispatch => {
  dispatch(updateProfileRequest());
  try {
    const responseData = await authServices.updateProfile(data);
    if (responseData?.status === 'success') {
      dispatch(updateProfileSuccess(responseData));
    } else {
      dispatch(updateProfileFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(updateProfileFailure(error?.response?.data));
  }
};


//CONTACT US ACTION

const contactUsRequest = () => {
  return {
    type: AUTH_ACTION_TYPES.CONTACT_US_REQUEST,
  };
};

const contactUsSuccess = data => {
  return {
    type: AUTH_ACTION_TYPES.CONTACT_US_SUCCESS,
    payload: data,
  };
};

const contactUsFailure = error => {
  return {
    type: AUTH_ACTION_TYPES.CONTACT_US_FAILURE,
    payload: error,
  };
};

export const contactUsAction = data => async dispatch => {
  dispatch(contactUsRequest());
  try {
    const responseData = await authServices.contactUs(data);
    if (responseData?.status === 'success') {
      dispatch(contactUsSuccess(responseData));
    } else {
      dispatch(contactUsFailure(responseData.errors));
    }
  } catch (error) {
    dispatch(contactUsFailure(error?.response?.data));
  }
};
