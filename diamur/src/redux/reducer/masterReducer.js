import {MASTER_ACTION_TYPES} from '../action/actionsType';

const initialState = {
  faqsList: {
    loading: false,
    data: null,
    error: null,
  },
};
const faqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MASTER_ACTION_TYPES.FAQS_LIST_REQUEST:
      return {
        ...state,
        faqsList: {
          ...state.faqsList,
          data: null,
          loading: true,
          error: null,
        },
      };
    case MASTER_ACTION_TYPES.FAQS_LIST_SUCCESS:
      return {
        ...state,
        faqsList: {
          ...state.faqsList,
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case MASTER_ACTION_TYPES.FAQS_LIST_FAILURE:
      return {
        ...state,
        faqsList: {
          ...state.faqsList,
          data: null,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default faqsReducer;
