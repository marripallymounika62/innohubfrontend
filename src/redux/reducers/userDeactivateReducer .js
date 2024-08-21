import { ActionTypes } from "../constants/action-types";
const initialState = {
    deactivateuserSuccess: false,
    deactivateuserMessage: '',
    deactivateuserError: '',
    loading: false,
    error: null,
};
const userDeactivateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DEACTIVATE_USER_SUCCESS':
        return {
          ...state,
          deactivateuserSuccess: true,
          deactivateuserMessage: action.payload,
          deactivateuserError: '',
        };
      case 'DEACTIVATE_USER_FAIL':
        return {
          ...state,
          deactivateuserSuccess: false,
          deactivateuserMessage: '',
          deactivateuserError: action.payload,
        };
      default:
        return state;
    }
  };
  
export default userDeactivateReducer;