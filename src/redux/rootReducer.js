// reducers/index.js
import { combineReducers } from 'redux';
import citiesReducer from '../redux/reducers/citiesReducer';
import statesReducer from '../redux/reducers/statesReducer';
import higherEducationReducer from '../redux/reducers/higherEducationReducer';
import formReducer from './reducers/formReducer';
import adminReducer from './reducers/adminReducer';
import studentReducer from './reducers/studentReducer'
import emailReducer from './reducers/emailReducer';
import emailStatusReducer from './reducers/emailStatusReducer';
import { updateStudent } from './reducers/UpdateStudent.js';
import { UploadState } from './reducers/UploadState.js';
import { updateState } from './reducers/UpdateState.js';
import FetchStateById from './reducers/FetchStateById.js';
import DeactivateState from './reducers/DeactivateState.js';

import { FetchCity } from './reducers/FetchCity.js';
import { UploadCity } from './reducers/UploadCity.js';
import { updateCity } from './reducers/UpdateCity.js';
import FetchCityById from './reducers/FetchCityById.js';
import DeactivateCity from './reducers/DeactivateCity.js';

import { UploadEducation } from './reducers/UploadEducation.js';
import { updateEducation } from './reducers/UpdateEducation.js';
import FetchEducationById from './reducers/FetchEducationById.js';
import DeactivateEducation from './reducers/DeactivateEducation.js';
import userSubmitReducer from './reducers/userSubmitReducer';
import rolesReducer from './reducers/rolesReducer';
import userdisplayReducer from './reducers/userdisplayReducer';
import { FetchMark } from './reducers/FetchQualified.js';
import { UploadMark } from './reducers/UploadMark.js';
import { FetchStudentMark } from './reducers/FetchStudentMark.js';
import userEmailReducer from './reducers/userEmailReducer.js';
import { EmailMark } from './reducers/EmailMark.js';
import { UploadPayment } from './reducers/UploadPayment.js';
import { FetchStudent } from './reducers/FetchTotalStudents.js';
import { UploadEmailPopup } from './reducers/UploadEmailPopup.js';
import DeactivateStudent from './reducers/DeactivateStudent.js';
import DeactivateQualifiedStudent from './reducers/DeactivateQualifiedStudent.js';
import DeactivateRole from './reducers/DeactivateRole.js';
import { UploadRole } from './reducers/UploadRole.js';
import eventReducer from './reducers/eventReducer.js';
import UploadForgotPassword from './reducers/UploadForgotPassword.js';
import UploadOtpReducer from './reducers/UploadOtpReducer.js';
import UpdatePasswordReducer from './reducers/UpdatePasswordReducer.js';
import FetchEventById from './reducers/FetchEventById.js';
// Combine all the reducers

const rootReducer = combineReducers({
 
  states: statesReducer,
  cities: citiesReducer,
  higherEducation: higherEducationReducer,
  form: formReducer,
  admin: adminReducer,
  students: studentReducer,
  email: emailReducer,
  emailstatus: emailStatusReducer,
  updateStudent: updateStudent,
  fetchStateById: FetchStateById,
  uploadState: UploadState,
  updateState: updateState,
  deactivateState: DeactivateState,

  fetchCity: FetchCity,
  fetchCityById: FetchCityById,
  uploadCity: UploadCity,
  updateCity: updateCity,
  deactivateCity: DeactivateCity,

  fetchEducationById: FetchEducationById,
  uploadEducation: UploadEducation,
  updateEducation: updateEducation,
  deactivateEducation: DeactivateEducation,
  userForm:userSubmitReducer,
  roles:rolesReducer,
  users:userdisplayReducer,
  fetchMark: FetchMark,
  uploadMark: UploadMark,
  fetchStudentMark: FetchStudentMark,
  userEmail:userEmailReducer,
  emailMark: EmailMark,
  uploadPayment: UploadPayment,
  fetchStudent: FetchStudent,
  uploadEmailPopup:UploadEmailPopup,
  deactivateStudent: DeactivateStudent,
  deactivateQualifiedStudent: DeactivateQualifiedStudent,
  deactivateRole: DeactivateRole,
  uploadRole: UploadRole,
  events:eventReducer,
  uploadForgotPassword:UploadForgotPassword,
  uploadOtp:UploadOtpReducer,
  uploadResetPassword:UpdatePasswordReducer,
  fetchEventById: FetchEventById,

});

export default rootReducer;
