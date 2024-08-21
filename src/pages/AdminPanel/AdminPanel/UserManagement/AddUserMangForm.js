import React, { useEffect } from 'react'
import { useState } from 'react';
import TextField from '../../../../components/formcomponents/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, fetchStates } from '../../../../redux/actions/action';
import { fetchCities } from '../../../../redux/actions/action';
import { fetchRoles } from '../../../../redux/actions/action';
import { sendUserForm, resetForm } from '../../../../redux/actions/action';
import DatePicker from '../../../../components/formcomponents/DatePicker';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { FaHome } from "react-icons/fa";

function AddUserMangForm({ onCloseee }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFieldsss, setFormFieldsss] = useState({
    first_name: '',
    last_name: '',
    adhaar_no: '',
    // user_id: '',
    email_id: '',
    Communication_Address_line_1: '',
    dob: '',
    mobile_no: '',
    state: '',
    city: '',
    pincode: '',
    roles_name: '',
    gender: '',
    profession: ''
  });
  const [formState, setFormState] = useState({
    username: '', // Define your form fields here
    password: '', // Define your form fields here 
  });
  const userFormData = useSelector((state) => state.userForm);
  const error = useSelector((state) => state.error);
  const states = useSelector((state) => state.states.states);
  const cities = useSelector((state) => state.cities.cities);
  const roles = useSelector((state) => state.roles.roles);
  const email = useSelector((state) => state.userEmail);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedRoles, setSelectedRoles] = useState('');

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  useEffect(() => {
    if (selectedState) {
      dispatch(fetchCities(selectedState))
    }
  }, [dispatch, selectedState])

  useEffect(() => {
    dispatch(fetchRoles(roles));
  }, [])

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      setFormFieldsss({
        ...formFieldsss,
        [name]: file,
      });
    } else {
      setFormFieldsss({
        ...formFieldsss,
        [name]: value,
      });
    }
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
  };
  const { username, password } = formState;
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const stateName = states.find(state => state.state_id === parseInt(selectedState))?.state_name || '';
    const cityName = cities.find(city => city.city_id === parseInt(selectedCity))?.city_name || '';
    const updatedFormFields = {
      ...formFieldsss,
      state: stateName,
      city: cityName,
      gender: selectedGender,
      roles_name: selectedRoles
    };
    dispatch(sendUserForm(updatedFormFields));

    //    dispatch(sendLoginCredentials({ first_name: formFieldsss.first_name, email_id: formFieldsss.email_id })); // Dispatch action to send email

    setShowSuccessPopup(true);
    //onCloseee();
    handleReset();

  };

  const handleReset = () => {
    dispatch(resetForm());
    setFormFieldsss({
      first_name: '',
      first_name: '',
      last_name: '',
      adhaar_no: '',
      // user_id: '',
      email_id: '',
      Communication_Address_line_1: '',
      dob: '',
      mobile_no: '',
      state: '',
      city: '',
      pincode: '',
      roles_name: '',
      gender: '',
      profession: ''
    });

    setSelectedState('');
    setSelectedCity('');
    setSelectedGender('');
    setSelectedRoles('');
  };


  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleDashboard = () => {
    setShowSuccessPopup(false);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? "" : "Invalid email address";
  };

  const validateDateOfBirth = (value) => {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    const [year] = value.split('-');
    return dobRegex.test(value) && year.length === 4 ? "" : "Invalid date of birth";
  };

  const validateMobileNumber = (value) => {
    const isValid = /^\d{10}$/.test(value);
    return isValid ? "" : "Invalid mobile number";
  };

  const validateAadharNumber = (value) => {
    const isValid = /^\d{12}$/.test(value);
    return isValid ? "" : "Invalid Aadhar number";
  };
  useEffect(() => {
    if (showSuccessPopup) {
      const timeoutId = setTimeout(() => {
        onCloseee();
        setShowSuccessPopup(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessPopup, onCloseee]);

  return (
    <div className='relative bg-custom-color mt-5 ml-[-320px] w-screen-full  md:ml-[-500px] lg:ml-[-610px] lg:mr-17 xl:mr-[320px] xl:ml-[-950px]  rounded-lg border-4 border-white popup-content grid justify-items-start'>
      <div className="self-stretch flex flex-col bg-color items-start justify-start max-w-full text-start text-xl text-black font-poppins">
        <form onSubmit={handleUserSubmit}
          className="w-[280px]   mx-0 mt-4 m-0 md:mx-0 md:px-3  md:mt-8  lg:mx-0 lg:mt-5 lg:justify-center md:pt-4 lg:pr-24" >
          <div className="flex flex-col mx-2  lg:flex-row space-y-4 lg:space-y-0 pb-3  ">
            <TextField
              label="First Name"
              name="first_name"
              type="text"
              placeholder="Enter your first name"
              value={formFieldsss.first_name}
              onChange={handleChange}
              required={true}
              disabled={false}
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="lg:mx-8" >
              <TextField
                label="Last Name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                value={formFieldsss.last_name}
                onChange={handleChange}
                required={true}
                disabled={false}
                className="w-full md:w-1/2 lg:w-1/4 "
              />
            </div>
          </div>
          <div className="flex flex-col mx-2  lg:flex-row space-y-4 lg:space-y-0 pb-3">
            <TextField
              label="Email ID"
              name="email_id"
              type="text"
              placeholder="Enter your email"
              value={formFieldsss.email_id}
              onChange={handleChange}
              required={true}
              disabled={false}
              validate={validateEmail}
            />
            <div className="lg:mx-8" >
              <TextField
                className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                label="Communication Address line 1"
                name="Communication_Address_line_1"
                type="text"
                placeholder="Enter your address1"
                value={formFieldsss.Communication_Address_line_1}
                onChange={handleChange}
                required={true}
                disabled={false}
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 text-white gap-[5px_0px]">
              <div className="w-[130px] relative font-semibold inline-block z-[1]">
                State
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between  pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] text-xs text-gray-300 border-[1px] border-solid border-color1">
                <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[315px] "
                  value={selectedState}
                  onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {states
                    .filter(state => state.status === 0)
                    .map(state => (
                      <option key={state.state_id} value={state.state_id}>
                        {state.state_name}
                      </option>
                    ))}
                </select>

              </div>

            </div>
            <div className="lg:mx-8 lg:flex-row space-y-4 lg:space-y-0" >
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px_0px] text-lg text-white">
                <div className="relative font-semibold inline-block z-[1] items-start pt-[-50px]">
                  City
                </div>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between pt-[1px] pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] border-[1px] border-solid border-color1">
                  <select
                    className="w-130 [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[315px]  "
                    value={selectedCity}
                    onChange={handleCityChange}>
                    <option value="">Select City</option>
                    {cities.filter(city => city.status === 0).map(city => (
                      <option key={city.city_id} value={city.city_id}>
                        {city.city_name}
                      </option>
                    ))}
                  </select></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3">
            <TextField
              label="Pincode"
              name="pincode"
              type="text"
              placeholder="Enter your pincode"
              value={formFieldsss.pincode}
              onChange={handleChange}
              required={true}
              disabled={false}
            />
            <div className="lg:mx-8" >
              <TextField
                label="Adhaar no"
                name="adhaar_no"
                type="text"
                placeholder="Enter your adhaar number "
                value={formFieldsss.adhaar_no}
                onChange={handleChange}
                required={true}
                disabled={false}
                validate={validateAadharNumber}
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex flex-col ml-2  lg:flex-row space-y-4 lg:space-y-0 md:space-y-0 pb-3 md:ml-[10px] lg:gap-5 ">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 text-white gap-[5px_0px]">
              <div className="w-[232px] relative font-semibold inline-block z-[1]">
                Roles
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between  pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] text-xs text-gray-300 border-[1px] border-solid border-color1">
                <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[315px] "
                  value={selectedRoles}
                  onChange={(e) => setSelectedRoles(e.target.value)}
                >
                  <option value="">Select Roles</option>
                  {roles.filter(roles => roles.status === 0).map(roles => (
                    <option key={roles.roles_id} value={roles.roles_name}>
                      {roles.roles_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="lg:mx-8 " >
              <div className="self-stretch flex flex-col md:flex flex-row items-start justify-start gap-[5px_0px] text-lg text-white">
                <div className="relative font-semibold inline-block z-[1] items-start lg:ml-[-20px]">
                  Gender
                </div>
                <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-between pt-[1px] pb-0.5 pr-6 pl-3 whitespace-nowrap gap-[20px] z-[1] border-[1px] border-solid border-color1 lg:ml-[-20px]">
                  <select
                    className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[315px]  "
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-2  lg:flex-row space-y-4 lg:space-y-0 pb-3">
            <DatePicker
              label="Date of Birth"
              value={formFieldsss.dob}
              onChange={(newDateValue) => handleChange({ target: { name: 'dob', value: newDateValue } })}
              required={true}
              validate={validateDateOfBirth}
            />
            <div className="lg:mx-28  pt-2 lg:ml-[120px]" >
              <TextField
                className="w-[130px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[18px] relative text-gray-300 whitespace-pre-wrap text-left inline-block"
                label="Mobile Number"
                name="mobile_no"
                type="text"
                placeholder="Enter your mobile number"
                value={formFieldsss.mobile_no}
                onChange={handleChange}
                required={true}
                disabled={false}
                validate={validateMobileNumber}
              />
              <div className='mt-4'>
                <TextField
                  label="profession"
                  name="profession"
                  type="text"
                  placeholder="Enter your profession"
                  value={formFieldsss.profession}
                  onChange={handleChange}
                  required={true}
                  disabled={false}
                  className="w-full md:w-1/2 lg:w-1/4 mt-4"
                />
              </div>
            </div>
          </div>
          {error && <div className="text-red-500">Error: {error.message}</div>}
          <div className="md:grid grid-flow-col  ">
            <div className="w-[453px] mx-5 lg:mx-[300px] flex flex-row items-start justify-start py-0 pr-0 pt-12 pb-10 box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[0px_39px] max-w-full mq450:gap-[0px_39px]">
                <button type='submit' className="cursor-pointer my-2 [border:none] pt-[13px] px-[13px] pb-3.5 bg-white flex-1 rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center box-border min-w-[130px] hover:bg-darkslategray">
                  <b className="w-[152px] relative text-base-2 inline-block font-poppins text-black text-center shrink-0">
                    Submit
                  </b>
                </button>
                <button onClick={onCloseee} className="cursor-pointer my-2 [border:none] pt-[13px] px-[13px] pb-3.5 bg-white flex-1 rounded-lg shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center box-border min-w-[130px] hover:bg-darkslategray lg:mr-3 ">
                  <b className="w-[152px] relative text-base-2 inline-block font-poppins text-black text-center shrink-0">
                    Cancel
                  </b>
                </button>
              </div>
            </div>
          </div>
          {showSuccessPopup && (
            <div
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
              onClick={() => setShowSuccessPopup(false)}
            >
              <div className="bg-white rounded-lg p-8">
                <p className="text-black text-center">Successfully submitted.</p>

              </div>
            </div>
          )}
          {/*  {emailSent && (
      <p>Email has been successfully sent.</p>
    )}
    {emailError && (
      <p>Error in sending email: {emailError.message}</p>
    )} */}
          {error && <div className="text-red-500">Error: {error.message}</div>}
        </form>
      </div>
    </div>
  )
}

export default AddUserMangForm
