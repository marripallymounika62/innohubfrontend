const initialState = {
    students: [],
    totalEnrolledStudents: 0,
    loading: false,
    error: null,
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_STUDENTS_SUCCESS':
        
        return {
          ...state,
          students: action.payload,
          totalEnrolledStudents: action.payload.totalEnrolledStudents,

          loading: false,
          error: null,
        };
      case 'FETCH_STUDENTS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  