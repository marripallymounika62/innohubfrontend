import { ActionTypes } from "../constants/action-types";

const initialState = {
  students: [],
};

const DeactivateStudent = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DEACTIVATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.map(state => {
          if (state.student_id === payload) {
            return { ...state, status: 1 };
          }
          return state;
        })   
      };
    default:
      return state;
  }
};

export default DeactivateStudent;     
