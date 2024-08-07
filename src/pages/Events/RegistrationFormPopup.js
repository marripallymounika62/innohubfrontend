import React, { useState } from 'react';
import TextField from '../../components/formcomponents/TextField';
import { useDispatch } from 'react-redux';
// import { UploadRegistrationForm } from '../redux/actions/action';

const RegistrationFormPopup = ({ onClose }) => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    country: '',
    event: '',
    payment: '',
    email: '',
    mobileNumber: '',
    hearAboutUs: '',
    otherSource: '',
  });

  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setIsOtherSelected(value === 'other');
    handleChange(e);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : 'Invalid email address';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formFields.firstName ||
      !formFields.lastName ||
      !formFields.profession ||
      !formFields.country ||
      !formFields.event ||
      !formFields.payment ||
      !formFields.email ||
      !formFields.mobileNumber ||
      !formFields.hearAboutUs ||
      (isOtherSelected && !formFields.otherSource)
    ) {
      alert('Please fill in all fields');
      return;
    }

    const isValidEmail = validateEmail(formFields.email);
    if (isValidEmail !== '') {
      alert('Please enter a valid email');
      return;
    }

    dispatch(UploadRegistrationForm(formFields));
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-color border-black border-4 text-white p-8 rounded-lg max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8 ml-4 mr-4 mb-4">
            <div>
              <TextField
                label="First Name*"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formFields.firstName}
                onChange={handleChange}
                required
              />
              <TextField
                label="Profession*"
                name="profession"
                type="text"
                placeholder="Enter your profession"
                value={formFields.profession}
                onChange={handleChange}
                required
              />
              <div className="mb-4">
                <label className="block font-bold mb-2">Event</label>
                <select
                  name="event"
                  className="w-full border rounded px-3 py-2 text-black"
                  value={formFields.event}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Event</option>
                  <option value="event1">Webinar</option>
                  <option value="event2">Workshop</option>
                  <option value="event2">Seminar</option>
                </select>
              </div>
              <TextField
                label="Email ID*"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formFields.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Mobile Number*"
                name="mobileNumber"
                type="tel"
                placeholder="Enter your mobile number"
                value={formFields.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <TextField
                label="Last Name*"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formFields.lastName}
                onChange={handleChange}
                required
              />
              <TextField
                label="Country*"
                name="country"
                type="text"
                placeholder="Enter your country"
                value={formFields.country}
                onChange={handleChange}
                required
              />
              <div className="mb-4">
                <label className="block font-bold mb-2">Payment</label>
                <select
                  name="payment"
                  className="w-full border rounded px-3 py-2 text-black"
                  value={formFields.payment}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="creditCard">Dedit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">How did you hear about us?</label>
                <div className="flex flex-col">
                  <label className="mb-2">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="facebook"
                      className="mr-2"
                      onChange={handleRadioChange}
                    /> Facebook
                  </label>
                  <label className="mb-2">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="linkedin"
                      className="mr-2"
                      onChange={handleRadioChange}
                    /> Linkedin
                  </label>
                  <label className="mb-2">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="instagram"
                      className="mr-2"
                      onChange={handleRadioChange}
                    /> Instagram
                  </label>
                  <label className="mb-2">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="newspaper"
                      className="mr-2"
                      onChange={handleRadioChange}
                    /> Newspaper
                  </label>
                  <label className="mb-2">
                    <input
                      type="radio"
                      name="hearAboutUs"
                      value="other"
                      className="mr-2"
                      onChange={handleRadioChange}
                    /> Other
                  </label>
                  {isOtherSelected && (
                    <TextField
                      label="Please specify"
                      name="otherSource"
                      type="text"
                      placeholder="Specify other source"
                      value={formFields.otherSource}
                      onChange={handleChange}
                      required
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="bg-white text-xl font-bold text-black px-6 py-3 rounded-xl mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-xl font-bold text-black px-6 py-2 rounded-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormPopup;
/*import React, { useState } from 'react';
import TextField from '../../components/formcomponents/TextField';
import { useDispatch } from 'react-redux';
// import { UploadRegistrationForm } from '../redux/actions/action';

const RegistrationFormPopup = ({ onClose }) => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    country: '',
    event: '',
    payment: '',
    email: '',
    mobileNumber: '',
    hearAboutUs: '',
    otherSource: '',
  });

  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setIsOtherSelected(value === 'other');
    handleChange(e);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : 'Invalid email address';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formFields.firstName ||
      !formFields.lastName ||
      !formFields.profession ||
      !formFields.country ||
      !formFields.event ||
      !formFields.payment ||
      !formFields.email ||
      !formFields.mobileNumber ||
      !formFields.hearAboutUs ||
      (isOtherSelected && !formFields.otherSource)
    ) {
      alert('Please fill in all fields');
      return;
    }

    const isValidEmail = validateEmail(formFields.email);
    if (isValidEmail !== '') {
      alert('Please enter a valid email');
      return;
    }

    dispatch(UploadRegistrationForm(formFields));
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-color border-black border-4 text-white p-8 rounded-lg max-w-lg w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField
              label="First Name*"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formFields.firstName} 
              onChange={handleChange}
              required
            />
            <TextField
              label="Last Name*"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formFields.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField
              label="Profession*"
              name="profession"
              type="text"
              placeholder="Enter your profession"
              value={formFields.profession}
              onChange={handleChange}
              required
            />
            <TextField
              label="Country*"
              name="country"
              type="text"
              placeholder="Enter your country"
              value={formFields.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-bold mb-2">Event</label>
              <select
                name="event"
                className="w-full border rounded px-3 py-2 text-black"
                value={formFields.event}
                onChange={handleChange}
                required
              >
                <option value="">Select Event</option>
                <option value="event1">Event 1</option>
                <option value="event2">Event 2</option>
              </select>
            </div>
            <div>
              <label className="block font-bold mb-2">Payment</label>
              <select
                name="payment"
                className="w-full border rounded px-3 py-2 text-black"
                value={formFields.payment}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField
              label="Email ID*"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formFields.email}
              onChange={handleChange}
              required
            />
            <div>
              <label className="block mb-2">How did you hear about us?</label>
              <div className="flex flex-col">
                <label className="mb-2">
                  <input
                    type="radio"
                    name="hearAboutUs"
                    value="facebook"
                    className="mr-2"
                    onChange={handleRadioChange}
                  /> Facebook
                </label>
                <label className="mb-2">
                  <input
                    type="radio"
                    name="hearAboutUs"
                    value="linkedin"
                    className="mr-2"
                    onChange={handleRadioChange}
                  /> Linkedin
                </label>
                <label className="mb-2">
                  <input
                    type="radio"
                    name="hearAboutUs"
                    value="instagram"
                    className="mr-2"
                    onChange={handleRadioChange}
                  /> Instagram
                </label>
                <label className="mb-2">
                  <input
                    type="radio"
                    name="hearAboutUs"
                    value="newspaper"
                    className="mr-2"
                    onChange={handleRadioChange}
                  /> Newspaper
                </label>
                <label className="mb-2">
                  <input
                    type="radio"
                    name="hearAboutUs"
                    value="other"
                    className="mr-2"
                    onChange={handleRadioChange}
                  /> Other
                </label>
                {isOtherSelected && (
                  <TextField
                    label="Please specify"
                    name="otherSource"
                    type="text"
                    placeholder="Specify other source"
                    value={formFields.otherSource}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <TextField
              label="Mobile Number*"
              name="mobileNumber"
              type="tel"
              placeholder="Enter your mobile number"
              value={formFields.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="bg-white text-xl text-black font-bold px-6 py-3 rounded-xl mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-xl text-black font-bold px-6 py-3 rounded-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormPopup;*/
