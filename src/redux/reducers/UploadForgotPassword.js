import { ActionTypes } from "../constants/action-types";
const initialState = {
  loading: false,
  error: null,
};

export const UploadForgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case 'OTP_SENT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };
    case 'OTP_SENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UploadForgotPassword;