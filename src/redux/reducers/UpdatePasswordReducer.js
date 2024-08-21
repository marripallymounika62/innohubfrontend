import { ActionTypes } from "../constants/action-types";
const initialState = {
    updatePasswordSuccess: false,
    updatePasswordMessage: '',
    updatePasswordError: '',
    loading: false,
    error: null,
};

const UpdatePasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PASSWORD_SUCCESSFULLY':
            return {
                ...state,
                updatePasswordSuccess: true,
                updatePasswordMessage: action.payload.message,
                updatePasswordError: '',
            };
        case 'UPDATE_PASSWORD_FAILED':
            return {
                ...state,
                updatePasswordSuccess: false,
                updatePasswordMessage: '',
                updatePasswordError: action.payload,
            };
        default:
            return state;
    }
};

export default UpdatePasswordReducer;