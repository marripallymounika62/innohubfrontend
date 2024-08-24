import React, { useState } from 'react';
import { GoPencil } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import TextField from '../components/formcomponents/TextField';
// import {jwtDecode} from 'jwt-decode';
import { useDispatch } from 'react-redux';
// import { UpdateUserProfile } from '../../../redux/actions/action';

const UpdateProfile = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const dispatch = useDispatch();
    const token=localStorage.getItem('token')
    const decodedToken = jwtDecode(token);
    const [formFields, setFormFields] = useState({
    id:decodedToken.id,
    first_name: '',
    last_name: '',
    email_id: '',
    mobile_no: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    });  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Fields:', formFields);
    dispatch(UpdateUserProfile(formFields))
    .then(() => {
        setIsPopupOpen(false);
      })
  };
  const closePopup = ()=>{
    setIsPopupOpen(false);
  }
  if (!isPopupOpen) return null;
  return (
    <div className="flex ml-40 mt-40 p-10 items-center justify-center h-md   w-1/2 bg-color rounded-lg border-2 border-solid border-black ">
      <form onSubmit={handleSubmit} className="self-center justify-self-center">
        <div className="flex justify-center mb-6">
          <FaRegCircleUser className='h-20 w-auto self-center' />
          <GoPencil className='h-5 w-auto self-end'/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <TextField
            label="First Name :"
            name="first_name"
            type="text"
            placeholder="Enter your first name"
            value={formFields.first_name}
            onChange={handleChange}
            required={true}
            className="w-md md:w-1/2 lg:w-1/4"
          />
          <TextField
            label="Last Name :"
            name="last_name"
            type="text"
            placeholder="Enter your last name"
            value={formFields.last_name}
            onChange={handleChange}
            required={true}
            className="w-md md:w-1/2 lg:w-1/4"
          />
          <TextField
            label="Email Id :"
            name="email_id"
            type="email"
            placeholder="Enter your email id"
            value={formFields.email_id}
            onChange={handleChange}
            required={true}
            className="w-md md:w-1/2 lg:w-1/4"
          />
          <TextField
            label="Mobile Number :"
            name="mobile_no"
            type="text"
            placeholder="Enter your mobile number"
            value={formFields.mobile_no}
            onChange={handleChange}
            required={true}
            className="w-md md:w-1/2 lg:w-1/4"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button type="submit" className="w-32 p-3 bg-black text-white rounded" onClick={handleSubmit}>
            Save
          </button>
          <button type="button" className="w-32 p-3 bg-black text-white rounded" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProfile;