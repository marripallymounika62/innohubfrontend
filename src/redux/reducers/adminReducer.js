const initialState = {
  loggedIn: false,
  superadminLoggedIn: false,
  token: null,
  role: null,
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADMIN_LOGIN_SUCCESS':
          return {
              ...state,
              loggedIn: !action.payload.isSuperadmin,
              superadminLoggedIn: action.payload.isSuperadmin,
              token: action.payload.token,
              role: action.payload.role,
              error: null,
          };
      case 'ADMIN_LOGIN_ERROR':
          return {
              ...state,
              loggedIn: false,
              superadminLoggedIn: false,
              token: null,
              role: null,
              error: action.payload,
          };
        case 'ADMIN_LOGOUT_SUCCESS':
            return {
                ...state,
              loggedIn: false,
              superadminLoggedIn: false,
              token: null,
              role: null,
              error: null,
            }
      default:
          return state;
  }
};

export default adminReducer;
