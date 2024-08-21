import { ActionTypes } from "../constants/action-types";

const initialState = {
  roles: [],
};

const DeactivateRole = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DEACTIVATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: state.roles.map(state => {
          if (state.degree_id === payload) {
            return { ...state, status: 1 };
          }
          return state;
        })
      };
    default:
      return state;
  }
};

export default DeactivateRole;     
