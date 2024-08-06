import { ActionTypes } from "../constants/action-types";
const initialState = {
  isVerifying: false,
  verificationSuccess: false,
  verificationMessage: '',
  loading: false,
  error: null,
};

const UploadOtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_OTP_VERIFICATION_REQUEST':
      return {
        ...state,
        isVerifying: true,
      };
    case 'UPLOAD_OTP_VERIFICATION_SUCCESS':
      return {
        ...state,
        isVerifying: false,
        verificationSuccess: true,
        verificationMessage: action.payload.message,
      };
    case 'UPLOAD_OTP_VERIFICATION_FAILURE':
      return {
        ...state,
        isVerifying: false,
        verificationSuccess: false,
        verificationMessage: action.payload,
      };
    default:
      return state;
  }
};

export default UploadOtpReducer;