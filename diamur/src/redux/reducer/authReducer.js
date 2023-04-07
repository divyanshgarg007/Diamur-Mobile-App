import { AUTH_ACTION_TYPES } from '../action/actionsType';

const initialState = {
  signUp: {
    loading: false,
    data: null,
    error: null,
  },

  signIn: {
    loading: false,
    data: null,
    error: null,
  },
  settings: {
    language: 'nl',
  },
  checkCompany: {
    loading: false,
    data: null,
    error: null,
  },
  updateProfile: {
    loading: false,
    data: null,
    error: null,
  },
  contactUs: {
    loading: false,
    data: null,
    error: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_USER_LANGUAGE:
      return {
        ...state,
        settings: {
          ...state.settings,
          language: action.payload,
        },
      };

    // case AUTH_ACTION_TYPES.VERIFY_PHONE_PENDING:
    //     return {
    //         ...state,
    //         verifyPhone: {
    //             ...state.verifyPhone,
    //             data: null,
    //             loading: true,
    //             error: null,
    //         },
    //     };
    // case AUTH_ACTION_TYPES.VERIFY_PHONE_SUCCESS:
    //     return {
    //         ...state,
    //         verifyPhone: {
    //             ...state.verifyPhone,
    //             data: action.payload,
    //             loading: false,
    //             error: null,
    //         },
    //     };
    // case AUTH_ACTION_TYPES.VERIFY_PHONE_ERROR:
    //     return {
    //         ...state,
    //         verifyPhone: {
    //             ...state.verifyPhone,
    //             data: null,
    //             loading: false,
    //             error: action.payload,
    //         },
    //     };

    // case AUTH_ACTION_TYPES.VERIFY_OTP_PENDING:
    //     return {
    //         ...state,
    //         verifyOtp: {
    //             ...state.verifyOtp,
    //             data: null,
    //             loading: true,
    //             error: null,
    //         },
    //     };
    // case AUTH_ACTION_TYPES.VERIFY_OTP_SUCCESS:
    //     return {
    //         ...state,
    //         verifyOtp: {
    //             ...state.verifyOtp,
    //             data: action.payload,
    //             loading: false,
    //             error: null,
    //         },
    //     };
    // case AUTH_ACTION_TYPES.VERIFY_OTP_ERROR:
    //     return {
    //         ...state,
    //         verifyOtp: {
    //             ...state.verifyOtp,
    //             data: null,
    //             loading: false,
    //             error: action.payload,
    //         },
    //     };

    //USER SIGN IN REDUCER
    case AUTH_ACTION_TYPES.USER_SIGN_IN_REQUEST:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          data: null,
          loading: true,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.USER_SIGN_IN_FAILURE:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    //USER SIGNUP REDUCER

    case AUTH_ACTION_TYPES.USER_SIGNUP_REQUEST:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          data: null,
          loading: true,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.USER_SIGNUP_FAILURE:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    //COMPANY CHECK REDUCER

    case AUTH_ACTION_TYPES.COMPANY_CHECK_REQUEST:
      return {
        ...state,
        checkCompany: {
          ...state.checkCompany,
          data: null,
          loading: true,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.COMPANY_CHECK_SUCCESS:
      return {
        ...state,
        checkCompany: {
          ...state.checkCompany,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.COMPANY_CHECK_FAILURE:
      return {
        ...state,
        checkCompany: {
          ...state.checkCompany,
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    case AUTH_ACTION_TYPES.USER_LOGGED_OUT:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          data: null,
          loading: false,
          error: null,
        },
        // verifyPhone: {
        //     loading: false,
        //     data: null,
        //     error: null,
        // },
        // verifyOtp: {
        //     loading: false,
        //     data: null,
        //     error: null
        // }
      };
    case AUTH_ACTION_TYPES.CLEAN_UP_STATE_REQUEST:
      return {
        ...state,
        checkCompany: {
          ...state.checkCompany,
          data: null,
          error: null,
        },
        // signIn: {
        //     ...state.signIn,
        //     data: null,
        //     error: null,
        // },
        signUp: {
          ...state.signUp,
          data: null,
          error: null,
        },
      };

    //PROFILE UPDATE REDUCER

    case AUTH_ACTION_TYPES.PROFILE_UPDATE_REQUEST:
      return {
        ...state,
        updateProfile: {
          ...state.updateProfile,
          data: null,
          loading: true,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        updateProfile: {
          ...state.updateProfile,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        updateProfile: {
          ...state.updateProfile,
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    //CONTACT US REDUCER

    case AUTH_ACTION_TYPES.CONTACT_US_REQUEST:
      return {
        ...state,
        contactUs: {
          ...state.contactUs,
          data: null,
          loading: true,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.CONTACT_US_SUCCESS:
      return {
        ...state,
        contactUs: {
          ...state.contactUs,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case AUTH_ACTION_TYPES.CONTACT_US_FAILURE:
      return {
        ...state,
        contactUs: {
          ...state.contactUs,
          data: null,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default authReducer;
