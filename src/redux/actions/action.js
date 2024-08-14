//import axios from "axios";
import { ActionTypes } from '../constants/action-types'
import axios from '../../api/axios'
import { toast } from "react-toastify"

export const setStates = (states) => ({
  type: ActionTypes.SET_STATES,
  payload: states,
});

export const fetchStates = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/state'); // replace with your API endpoint
    console.log('States data:', response.data);
    dispatch(setStates(response.data));

  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};

export const setCities = (cities) => ({
  type: ActionTypes.SET_CITIES,
  payload: cities,
});

export const fetchCities = (selectedState) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/city/${selectedState}`); // replace with your API endpoint
    console.log("states fetched", (response.data))
    dispatch(setCities(response.data));
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};


export const setHigherEducation = (higherEducation) => ({
  type: ActionTypes.SET_HIGHER_EDUCATION,
  payload: higherEducation,
});

export const fetchHigherEducation = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/degree'); // Replace with your API endpoint
    dispatch(setHigherEducation(response.data));
  } catch (error) {
    console.error('Error fetching higher education:', error);
  }
};


export const submitForm = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/students', formData);
    dispatch({
      type: 'SUBMIT_FORM_SUCCESS',
      payload: response.data,
    });

    // After form submission, send an email
    await dispatch(sendEmail(formData)); // Assuming email is part of formData

  } catch (error) {
    dispatch({
      type: 'SUBMIT_FORM_ERROR',
      payload: error,
    });

    console.error('Error submitting form:', error);
  }
};
export const resetForm = () => ({
  type: "RESET_FORM",
});


export const adminLogin = (username, password) => async (dispatch) => {
  try {
    // Make HTTP POST request to login endpoint
    const response = await axios.post('/api/login', { username, password });

    // Log the entire response for debugging
    console.log('Response:', response.data);

    // Extract message, token, and role from response data
    const { message, token, role } = response.data;

    // Log token and role for debugging
    console.log('Token:', token);
    console.log('Role:', role);

    // Check if login was successful
    if (message === 'Superadmin login successful' || message === 'Login successful') {
      // Store token in localStorage
      if (token) {
        localStorage.setItem('token', token);
      }

      // Dispatch action to update Redux state with token and role
      dispatch({
        type: 'ADMIN_LOGIN_SUCCESS',
        payload: { token, role: role || 'user', isSuperadmin: message === 'Superadmin login successful' }
      });
    } else {
      // Dispatch action for login error
      dispatch({
        type: 'ADMIN_LOGIN_ERROR',
        payload: 'Invalid username or password'
      });
    }
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    // Dispatch action for login error
    dispatch({
      type: 'ADMIN_LOGIN_ERROR',
      payload: 'Error occurred while logging in'
    });
  }
};

export const fetchStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/students');
    const totalEnrolledStudents = response.data.length;
    // console.log('Fetched data:', response.data); 
    console.log('totalEnrolledStudents     :', totalEnrolledStudents)
    dispatch({
      type: 'FETCH_STUDENTS_SUCCESS',
      payload: response.data,
      totalEnrolledStudents: totalEnrolledStudents,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_STUDENTS_ERROR',
      payload: error,
    });
    // console.error('Error fetching students:', error);
  }
};

export const sendEmail = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/enrollMail', formData);
    dispatch({
      type: 'SEND_EMAIL_SUCCESS',
      payload: response.data,
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    dispatch({
      type: 'SEND_EMAIL_ERROR',
      payload: error,
    });
    console.error('Error sending email:', error);
  }
};


export const updateEmailStatus = (student_Id, emailSent) => {
  console.log("updateEmailStatus Action:", student_Id, emailSent);
  return {
    type: 'UPDATE_EMAIL_STATUS',
    payload: { student_Id, emailSent },
  };
};

export const fetchStateById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/state/${id}`);
    console.log(response.data, "data");
    if (response.status === 200) {
      const stateData = response.data;
      //console.log(stateData,"stateData");
      dispatch({
        type: ActionTypes.FETCH_STATE_BY_ID,
        payload: stateData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching state by ID:', error);
  }
};

export const uploadNewState = (newStateData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/state', newStateData);
    const stateData = response.data;
    console.error('State loaded', stateData);
    toast.success("State created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_STATE,
      payload: stateData
    });
  } catch (error) {
    // Check if the error response contains the message indicating state name duplication
    if (error.response && error.response.data && error.response.data.error === 'State name is already available, provide a new state name') {
      toast.error("State name is already available, provide a new State name");
    } else {
      console.error(error);
    }
  }
};

export const updateStateById = (updateStateData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/state/${id}`, updateStateData);
    const stateData = response.data;
    console.error('State updated', stateData);
    toast.success("You have successfully updated State");
    dispatch({
      type: ActionTypes.EDIT_STATE,
      payload: stateData
    });
  } catch (error) {
    console.error(error);
  }
};

export const deactivateState = (stateId) => async (dispatch) => {
  console.log(stateId, "stateId");
  try {
    const response = await axios.put(`/api/state/${stateId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated State Id ${stateId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_STATE_SUCCESS,
        payload: stateId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating state:', error);
  }
};

export const fetchCityList = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/city');

    if (response.status === 200) {
      const cityData = response.data;
      dispatch({
        type: ActionTypes.FETCH_CITY,
        payload: cityData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching cities:', error);
  }
};

export const fetchCityById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/city/${id}/city`);
    console.log(response.data, "data");
    if (response.status === 200) {
      const cityData = response.data;
      //console.log(cityData,"cityData");
      dispatch({
        type: ActionTypes.FETCH_CITY_BY_ID,
        payload: cityData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching city by ID:', error);
  }
};

export const uploadNewCity = (newCityData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/city', newCityData);
    const cityData = response.data;
    console.error('City loaded', cityData);
    toast.success("City created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_CITY,
      payload: cityData
    });
  } catch (error) {
    // Check if the error response contains the message indicating city name duplication
    if (error.response && error.response.data && error.response.data.error === 'City name is already available, provide a new city name') {
      toast.error("City name is already available, provide a new City name");
    } else {
      console.error(error);
    }
  }
};

export const updateCityById = (updateCityData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/city/${id}/city`, updateCityData);
    const cityData = response.data;
    console.error('City updated', cityData);
    toast.success("You have successfully updated City");
    dispatch({
      type: ActionTypes.EDIT_CITY,
      payload: cityData
    });
  } catch (error) {
    console.error(error);
  }
};

export const deactivateCity = (cityId) => async (dispatch) => {
  console.log(cityId, "cityId");
  try {
    const response = await axios.put(`/api/city/${cityId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated City Id ${cityId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_CITY_SUCCESS,
        payload: cityId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating state:', error);
  }
};

export const fetchEducationById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/degree/${id}`);
    console.log(response.data, "data");
    if (response.status === 200) {
      const educationData = response.data;
      //console.log(educationData,"educationData");
      dispatch({
        type: ActionTypes.FETCH_EDUCATION_BY_ID,
        payload: educationData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching education by ID:', error);
  }
};

export const uploadNewEducation = (newEducationData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/degree', newEducationData);
    const educationData = response.data;
    console.error('Education loaded', educationData);
    toast.success("Education created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_EDUCATION,
      payload: educationData
    });
  } catch (error) {
    // Check if the error response contains the message indicating Education name duplication
    if (error.response && error.response.data && error.response.data.error === 'Education name is already available, provide a new education name') {
      toast.error("Education name is already available, provide a new Education name");
    } else {
      console.error(error);
    }
  }
};

export const updateEducationById = (updateEducationData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/degree/${id}`, updateEducationData);
    const educationData = response.data;
    console.error('Education updated', educationData);
    toast.success("You have successfully updated Education");
    dispatch({
      type: ActionTypes.EDIT_EDUCATION,
      payload: educationData
    });
  } catch (error) {
    console.error(error);
  }
};

export const deactivateEducation = (degreeId) => async (dispatch) => {
  console.log(degreeId, "degreeId");
  try {
    const response = await axios.put(`/api/degree/${degreeId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated Education Id ${degreeId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_EDUCATION_SUCCESS,
        payload: degreeId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating education:', error);
  }
};

export const setRoles = (roles) => ({
  type: ActionTypes.SET_ROLES,
  payload: roles,
});

export const fetchRoles = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/roles');
    // console.log("Roles data", response.data);
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error('Error in fetching roles', error)
  }
};


export const sendUserForm = (userFormData) => async (dispatch) => {
  try {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    console.log(token)

    // Check if token exists
    if (!token) {
      // Handle case where token is not found in local storage
      console.error('Token not found in local storage');
      dispatch({
        type: 'SUBMIT_USER_FORM_ERROR',
        payload: 'Token not found in local storage'
      });
      return;
    }

    const response = await axios.post('/api/grant-access', userFormData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('User form data received', response.data);
    dispatch({
      type: 'SUBMIT_USER_FORM_SUCCESS',
      payload: response.data // Assuming your response includes form data
    });
    // await dispatch(userFormData)
    console.log('User form submitted successfully', response.data);
  } catch (error) {
    console.error('Error submitting user form data', error);
    dispatch({
      type: 'SUBMIT_USER_FORM_ERROR',
      payload: error.message
    });
  }
};

/* export const sendLoginCredentials = (userData) => async (dispatch) => {
  try {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    console.log(token);

    // Check if token exists
    if (!token) {
      // Handle case where token is not found in local storage
      console.error('Token not found in local storage');
      dispatch({
        type: 'EMAIL_SENT_FAILURE',
        payload: 'Token not found in local storage'
      });
      return;
    }

    await axios.post('/api/send-login-credentials', userData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Dispatch an action indicating successful email sending if needed
    dispatch({ type: 'EMAIL_SENT_SUCCESS' });
  } catch (error) {
    // Dispatch an action for handling email sending failure if needed
    console.error('Error sending login credentials', error);
    dispatch({ type: 'EMAIL_SENT_FAILURE', payload: error.message });
  }
};

 */



export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/usermanage');
    console.log('Fetched user data:', response.data);
    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_USERS_ERROR',
      payload: error
    });
    console.error(' error in Fetching user data:', error);
  }
};

export const updateStudentById = (updateStudentData, id) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/students/${id}`, updateStudentData);
    const studentData = response.data;
    console.error('Student updated', studentData);
    toast.success("You have successfully updated Student");
    dispatch({
      type: ActionTypes.EDIT_STUDENT,
      payload: studentData
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchQualified = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/marks/qualified');

    if (response.status === 200) {
      const markData = response.data;
      dispatch({
        type: ActionTypes.FETCH_MARK,
        payload: markData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching mark:', error);
  }
};

export const uploadNewMark = (newMarkData) => async (dispatch) => {
  try {
    console.log("New mark data:", newMarkData);
    const response = await axios.post('/api/marks', newMarkData);
    const markData = response.data;
    console.error('Mark loaded', markData);
    toast.success(`Mark Added Successfully`);
    dispatch({
      type: ActionTypes.UPLOAD_MARK,
      payload: markData
    });
  } catch (error) {
    console.error("Error uploading new mark:", error.response.data);
  }
};

export const fetchStudentMark = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/marks');

    if (response.status === 200) {
      const markData = response.data;
      dispatch({
        type: ActionTypes.FETCH_STUDENT_MARK,
        payload: markData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching mark:', error);
  }
};

export const sendEmailMark = (studentId) => async (dispatch) => {
  try {
    console.log("Sending email to student:", studentId);
    const response = await axios.post(`/api/marks/${studentId}`);
    console.log('Email sent response:', response.data);
    toast.success(`Mail Sent Successfully`);
    dispatch({ type: 'EMAIL_SENT_SUCCESS', payload: studentId });
  } catch (error) {
    console.error("Error sending email:", error.response.data);
    dispatch({ type: 'EMAIL_SENT_FAILURE', payload: studentId });
  }
};

export const uploadPayment = (studentId, newpaymentData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/marks/${studentId}/payment`, newpaymentData);
    const paymentData = response.data;
    console.error('Payment loaded', paymentData);
    toast.success("Update Payment Status successfully");
    dispatch({
      type: ActionTypes.UPLOAD_PAYMENT,
      payload: paymentData
    })
  } catch (error) {
    console.error('Error adding Payment data:', error)
  }
};

export const fetchTotalStudents = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/students/count');
    console.log('API Response:', response.data);
    if (response.status === 200) {
      const { totalEnrolledStudents, totalQualifiedStudents, totalRejectedStudents } = response.data;
      dispatch({
        type: ActionTypes.FETCH_STUDENT,
        payload: { totalEnrolledStudents, totalQualifiedStudents, totalRejectedStudents },
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching student data:', error);
  }
};


export const UploadEmailPopup = (popupFields) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/Mail`, popupFields);
    dispatch({
      type: 'POPUP_EMAIL_SENT_SUCCES',
      payload: response.data,
    });
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    dispatch({
      type: 'POPUP_EMAIL_SENT_FAILURE',
      payload: error,
    });
    console.error('Error sending email:', error);
  }
};

export const deactivateStudent = (studentId) => async (dispatch) => {
  console.log(studentId, "studentId");
  try {
    const response = await axios.put(`/api/students/${studentId}/deactivate`);
    if (response.status === 200) {
      const { message } = response.data;
      toast.success(message);
      dispatch({
        type: ActionTypes.DEACTIVATE_STUDENT_SUCCESS,
        payload: studentId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating student:', error);
    toast.error('Failed to update student status.');
  }
};

export const deactivateQualifiedStudent = (studentId) => async (dispatch) => {
  console.log(studentId, "studentId");
  try {
    const response = await axios.put(`/api/marks/${studentId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated Student Id ${studentId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_QUALIFIED_STUDENT_SUCCESS,
        payload: studentId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating student:', error);
  }
};

export const deactivateRole = (rolesId) => async (dispatch) => {
  console.log(rolesId, "rolesId");
  try {
    const response = await axios.delete(`/api/roles/${rolesId}/deactivate`);
    if (response.status === 200) {
      toast.success(`You have successfully deactivated Role Id ${rolesId}`);
      dispatch({
        type: ActionTypes.DEACTIVATE_ROLE_SUCCESS,
        payload: rolesId,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while deactivating role:', error);
  }
};

export const uploadNewRole = (newRoleData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/roles', newRoleData);
    const roleData = response.data;
    console.error('Role loaded', roleData);
    toast.success("Role created successfully");
    dispatch({
      type: ActionTypes.UPLOAD_ROLE,
      payload: roleData
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error("An error occurred while creating the role.");
    }
    console.error('Error uploading new role:', error);
  }
};


export const addEvent = (eventData) => async dispatch => {
  dispatch({ type: ActionTypes.ADD_EVENT_REQUEST });
  try {
    const response = await axios.post('api/events', eventData);

    toast.success("form submitted successfully");
    dispatch({
      type: ActionTypes.ADD_EVENT_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ADD_EVENT_FAILURE,
      payload: error.message
    });
  }
};

export const fetchEvents = () => async dispatch => {
  dispatch({
    type: ActionTypes.FETCH_EVENTS_REQUEST
  });
  try {
    const response = await axios.get('api/events');
    dispatch({
      type: ActionTypes.FETCH_EVENTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_EVENTS_FAILURE,
      payload: error.message
    });
  }
};

export const deleteEvent = (id) => async dispatch => {
  dispatch({ type: ActionTypes.DELETE_EVENT_REQUEST });
  try {
    await axios.delete(`/api/events/${id}`);
    dispatch({ type: ActionTypes.DELETE_EVENT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_EVENT_FAILURE, payload: error.message });
  }
};

export const updateEvent = (event) => async dispatch => {
  dispatch({ type: ActionTypes.UPDATE_EVENT_REQUEST });
  try {
    const response = await axios.put(`/api/events/${event.id}`, event);
    dispatch({ type: ActionTypes.UPDATE_EVENT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.UPDATE_EVENT_FAILURE, payload: error.message });
  }
};

export const UploadForgotPassword = (email) => async (dispatch) => {
  try {
    const response = await axios.post('/api/password', { email_id: email });
    const { token, message } = response.data;
    dispatch({
      type: ActionTypes.OTP_SENT_SUCCESS,
      payload: { message, token },
    });
    localStorage.setItem('resetToken', token);
    toast.success('OTP sent successfully!');
    return Promise.resolve();
  } catch (error) {
    dispatch({
      type: ActionTypes.OTP_SENT_FAILURE,
      payload: error.response ? error.response.data.message : 'Email id is not registered',
    });
    return Promise.reject(error);
  }
};

export const UploadOtpVerification = (otp) => async (dispatch) => {
  const token = localStorage.getItem('resetToken');
  if (!token) {
    toast.error('Token not found. Please request a new OTP.');
    dispatch({
      type: ActionTypes.UPLOAD_OTP_VERIFICATION_FAILURE,
      payload: 'Token not found. Please request a new OTP.',
    });
    return;
  }
  dispatch({ type: ActionTypes.UPLOAD_OTP_VERIFICATION_REQUEST });
  try {
    const response = await axios.post('/api/password/otp', { otp, token }, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const { success, message } = response.data;
    dispatch({
      type: ActionTypes.UPLOAD_OTP_VERIFICATION_SUCCESS,
      payload: { success, message },
    });
    toast.success('OTP verified successfully!');
  } catch (error) {
    dispatch({
      type: ActionTypes.UPLOAD_OTP_VERIFICATION_FAILURE,
      payload: error.response ? error.response.data.message : 'OTP verification failed',
    });
    toast.error('Invalid OTP');
  }
};

export const UploadPassword = (newPassword, confirmPassword) => async (dispatch) => {
  const token = localStorage.getItem('resetToken');
  if (!token) {
    toast.error('Token not found');
    dispatch({
      type: ActionTypes.UPDATE_PASSWORD_FAILED,
      payload: 'Token not found',
    });
    return;
  }
  try {
    const response = await axios.post('/api/password/updatepassword',
      { newPassword, confirmPassword, token },
      { headers: { 'Authorization': `Bearer ${token}` } }
    );
    const { message } = response.data;
    dispatch({
      type: ActionTypes.UPDATE_PASSWORD_SUCCESSFULLY,
      payload: { message },
    });
    localStorage.removeItem('resetToken');
    toast.success('Password updated successfully!');
  } catch (error) {
    dispatch({
      type: ActionTypes.UPDATE_PASSWORD_FAILED,
      payload: error.response ? error.response.data.message : 'Failed to update password',
    });
    toast.error(error.response ? error.response.data.message : 'Failed to update password');
  }
};

export const resendOtp = (token) => async (dispatch) => {
  dispatch({ type: ActionTypes.RESEND_OTP_REQUEST });
  try {
    const token = localStorage.getItem('resetToken');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await axios.post(
      '/api/password/resend',
      { token },
      { headers: { 'Authorization': `Bearer ${token}` } }
    );
    const { message } = response.data;
    dispatch({
      type: ActionTypes.RESEND_OTP_SUCCESS,
      payload: { message },
    });
    toast.success("OTP resend Successfully")
  } catch (error) {
    dispatch({
      type: ActionTypes.RESEND_OTP_FAILED,
      payload: error.response ? error.response.data.message : 'Failed to resend OTP',
    });
  }
};

export const fetchEventById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/events/${id}`);
      console.log(response.data,"data");
    if (response.status === 200) {
      const eventData = response.data;
      //console.log(eventData,"eventData");
      dispatch({
        type: ActionTypes.FETCH_EVENT_BY_ID,
        payload: eventData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching event by ID:', error);
  }
};

export const UploadRegistrationForm = (newFormData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/participantseventform', newFormData);
    const formData = response.data;
    toast.success("Form uploded successfully");
    dispatch({
      type: ActionTypes.UPLOAD_PARTICIPANT,
      payload: formData
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error("An error occurred while creating the participant.");
    }
    console.error('Error uploading new participant:', error);
  }
};

export const fetchParticipants = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/participantseventform');
    console.log('API Response:', response.data);
    if (response.status === 200) {
      const participantsData = response.data;
      dispatch({
        type: ActionTypes.FETCH_PARTICIPANT,
        payload: participantsData,
      });
    } else {
      console.error('Unexpected status code:', response.status);
    }
  } catch (error) {
    console.error('Error while fetching Participants:', error);
  }
};