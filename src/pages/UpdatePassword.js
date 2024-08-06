import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UploadPassword } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ newPassword: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showStrengthHint, setShowStrengthHint] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const { updatePasswordSuccess, updatePasswordError } = useSelector((state) => state.uploadResetPassword || {});
  const onHomeClick = () => {
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.newPassword !== credentials.confirmPassword) {
      window.alert('Passwords do not match');
      return;
    }
    if (passwordStrength !== 'Strong') {
      window.alert('Password must be strong. It should be at least 8 characters long and include lowercase letters, uppercase letters, numbers, and special characters eg:P@ssw0rd2024!.');
      return;
    }
    const resetToken = localStorage.getItem('resetToken');
    if (!resetToken) {
      window.alert('No reset token found');
      return;
    }
    dispatch(UploadPassword(credentials.newPassword, credentials.confirmPassword));
  };
  const validatePasswordStrength = (password) => {
    const lengthCriteria = /.{8,}/;
    const numberCriteria = /[0-9]/;
    const uppercaseCriteria = /[A-Z]/;
    const lowercaseCriteria = /[a-z]/;
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/;
    let strength = 'Weak';
    if (lengthCriteria.test(password) && numberCriteria.test(password) && uppercaseCriteria.test(password) && specialCharCriteria.test(password) && lowercaseCriteria.test(password)) {
      strength = 'Strong';
    } else if (lengthCriteria.test(password) && (numberCriteria.test(password) || uppercaseCriteria.test(password))) {
      strength = 'Medium';
    }
    setPasswordStrength(strength);
  };
  useEffect(() => {
    if (updatePasswordSuccess) {
      navigate("/login");
    }
  }, [updatePasswordSuccess, navigate]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#090119] px-8 lg:p-0">
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="relative">
          <img className="w-full max-w-md" src="/login.jpg" alt="Login" />
          <img className="absolute top-0 left-0 mt-[-50px] ml-[-10%]" src="/Vector 2.png" alt="Vector 1" style={{ maxWidth: '30%' }} />
          <div className="h-[45px] lg:top-[-450px] lg:left-[-500px] xl:left-[-500px] rounded-xl flex-1 md:mr-5 relative capitalize font-medium text-white inline-block box-border pl-5 pr-5 pt-0 mb-5 md:text-lg">
            <FaHome className="h-8 w-14 cursor-pointer" onClick={onHomeClick} />
            Home
          </div>
        </div>
      </div>
      <div className="w-full bg-color max-w-md mt-0 rounded-[50px_50px_50px_50px] lg:rounded-[120px_0px_0px_120px] py-6 lg:py-[128px]">
        <div className="flex justify-center">
          <img className="w-32 h-32 md:w-48 mt-[-20px] md:h-38 lg:mt-[-100px]" src="/poplogo.svg" alt="Your Company" />
        </div>
        <h3 className="mt-[-20px] text-center text-2xl md:text-3xl font-extrabold text-white lg:text-2xl lg:mt-[14px] lg:ml-[6px]">
          Update Password
        </h3>
        <form className="space-y-5 pt-0 px-5 lg:px-10 py-5" onSubmit={handleSubmit}>
          <input type="hidden" name="username" value="" aria-label="Username" />
          <div className="space-y-5 rounded-md shadow-sm-space-y-px">
            <div>
              <label htmlFor="newPassword" className="block text-3xl font-medium leading-6 text-white">
                New Password
              </label>
              <div className="input-container flex mt-1 relative">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setCredentials({ ...credentials, newPassword: e.target.value });
                    validatePasswordStrength(e.target.value);
                  }}
                  onFocus={() => setShowStrengthHint(true)}
                  onBlur={() => setShowStrengthHint(false)}
                  required
                  aria-labelledby="newPasswordLabel"
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-[50px] top-1/2 transform -translate-y-1/2 text-gray-500 bg-white"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  aria-label={showNewPassword ? "Hide password" : "Show password"}
                >
                  {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <RiLockPasswordLine className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white w-[50px] h-[42px] rounded-r-md" />
              </div>
              {showStrengthHint && (
                <div className="mt-2 text-white text-sm">
                  <p>Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.</p>
                </div>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-3xl font-medium leading-6 text-white">
                Confirm Password
              </label>
              <div className="input-container flex mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                  required
                  aria-labelledby="confirmPasswordLabel"
                  className="appearance-none rounded-md block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  className="absolute right-[50px] top-1/2 transform -translate-y-1/2 text-gray-500 bg-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <RiLockPasswordLine className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white w-[50px] h-[42px] rounded-r-md" />
              </div>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div>
              <button
                type="submit"
                className="ml-[45px] mt-8 md:ml-[135px] lg:ml-[125px] lg:mt-[40px] flex justify-center py-3 px-8 lg:py-2 lg:px-8 mb-[10px] border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black focus:outline-purple focus:ring-2 focus:ring-offset"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;

