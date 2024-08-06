
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UploadForgotPassword } from "../redux/actions/action";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UploadForgotPassword(email))
      .then(() => {
        navigate("/otpverification");
      })
      .catch(error => {
        toast.error("Email id is not registered.");
      });
  };

  const onHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#090119] px-8 lg:p-0">
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <div className="relative">
          <img className="w-full max-w-md" src="/login.jpg" alt="Login" />
          <img className="absolute top-0 left-0 mt-[-50px] ml-[-10%]" src="/Vector 2.png" alt="Vector 1" style={{ maxWidth: '30%' }} />
          <div className="h-[45px] lg:top-[-450px] lg:left-[-500px] xl:left-[-500px] rounded-xl flex-1 md:mr-5 relative capitalize font-medium text-white inline-block box-border pl-5 pr-5 pt-0 mb-5 md:text-lg">
            <FaHome className="h-8 w-14" onClick={onHomeClick} />
            Home
          </div>
        </div>
      </div>
      <div className="w-full bg-color max-w-md mt-0 rounded-[50px_50px_50px_50px] lg:rounded-[120px_0px_0px_120px] py-10 lg:py-44">
        <div className="flex justify-center ">
          <img className="w-32 h-32 md:w-48 mt-[-20px] md:h-38 lg:mt-[-150px]" src="/poplogo.svg" alt="Your Company" />
        </div>
        <h3 className="text-center text-2xl mt-[-25px] md:text-3xl font-extrabold text-white lg:text-2xl lg:mt-[-4px]">
          Forgot Password/Reset Password
        </h3>
        <p className="text-center text-white text-base font-bold mt-[-5px] lg:mt-[-2px]">
          Enter your E-mail <br />to send one time password
        </p>
        <form className="space-y-10 pt-0 px-5 lg:px-10 py-5" onSubmit={handleSubmit}>
          <div className="space-y-10 rounded-md shadow-sm-space-y-px">
            <div>
              <label htmlFor="email" className="block text-3xl font-medium leading-6 text-white mt-[-4px] lg:mt-[-2px]">
                Email Id:
              </label>
              <div className="input-container flex mt-1">
                <input
                  id="email"
                  name="email_id"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-l-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <CiMail className="bg-black text-white w-[50px] h-[45px] rounded-r-md" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="ml-[35px] mt-[-15px] md:ml-[130px] lg:ml-[110px] lg:mt-[0px] flex justify-center py-3 px-8 lg:py-2 lg:px-10 mb-[-5px] border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black focus:outline-purple focus:ring-2 focus:ring-offset-2 focus:ring-blue cursor-pointer"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
