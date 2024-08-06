import { ActionTypes } from "../constants/action-types";
const initialState = {
    resendOtpSuccess: false,
    resendOtpError: '',
    resendOtpMessage: '',
    error: null,
    loading: false
}

const ResendOtpReducer = (state = initialState, action) => {
    switch (action.types) {
        case 'RESEND_OTP_SUCCESS':
            return {
                ...state,
                resendOtpSuccess: true,
                resendOtpMessage: action.payload.message,
                resendOtpError: '',
            };
        case 'RESEND_OTP_FAILED':
            return {
                ...state,
                resendOtpSuccess: false,
                resendOtpMessage: '',
                resendOtpError: action.payload,
            };
        default:
            return state;
    }
};

export default ResendOtpReducer;