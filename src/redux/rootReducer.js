// reducers/index.js
import { combineReducers } from 'redux';
import citiesReducer from '../redux/reducers/citiesReducer';
import statesReducer from '../redux/reducers/statesReducer';
import higherEducationReducer from '../redux/reducers/higherEducationReducer';
import formReducer from './reducers/formReducer';
import adminReducer from './reducers/adminReducer';
import studentReducer from './reducers/studentReducer'
import emailReducer from './reducers/emailReducer';


const rootReducer = combineReducers({
 
  states: statesReducer,
  cities: citiesReducer,
  higherEducation: higherEducationReducer,
  form: formReducer,
  admin: adminReducer,
  students: studentReducer,
  email: emailReducer

  
});

export default rootReducer;
