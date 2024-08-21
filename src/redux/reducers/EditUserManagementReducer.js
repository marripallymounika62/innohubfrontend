import { ActionTypes } from "../constants/action-types";
const initialState = {
  editeuserSuccess: false,
  edituserMessage: '',
  edituserError: '',
  loading: false,
  error: null,
};
const EditUserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_USER_SUCCESS':
      return {
        ...state,
        edituserSuccess: true,
        edituserMessage: action.payload,
        edituserError: '',
      };
    case 'EDIT_USER_FAIL':
      return {
        ...state,
        edituserSuccess: false,
        edituserMessage: '',
        edituserError: action.payload,
      };
    default:
      return state;
  }
};

export default EditUserManagementReducer;