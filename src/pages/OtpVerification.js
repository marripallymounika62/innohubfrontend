import { FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { UploadOtpVerification, resendOtp } from '../redux/actions/action';
import { toast } from 'react-toastify';

const OtpVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { verificationSuccess, isVerifying } = useSelector((state) => state.uploadOtp || {});
  const { resendOtpSuccess } = useSelector((state) => state.uploadResetPassword || {});
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(false);
  const onHomeClick = () => {
    navigate("/");
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleOtpVerification = () => {
    const otpCode = otp.join("");
    const resetToken = localStorage.getItem('resetToken');
    if (otpCode && resetToken) {
      dispatch(UploadOtpVerification(otpCode));
    } else {
      toast.error('Please enter the OTP code and ensure the reset token is available.');
    }
  };
  useEffect(() => {
    if (verificationSuccess) {
      navigate('/updatepassword');
    };
  }, [verificationSuccess, navigate]);
  const handleResendOtp = () => {
    const resetToken = localStorage.getItem('resetToken');
    if (resetToken) {
      dispatch(resendOtp(resetToken));
      setTimer(300);
      setShowTimer(true);
    } else {
      toast.error('Unable to resend OTP. Please ensure the reset token is available.');
    }
  };
  useEffect(() => {
    setTimer(300);
    setShowTimer(true);
  }, []);
  useEffect(() => {
    if (resendOtpSuccess) {
      toast.success('OTP has been resent successfully.');
    }
  }, [resendOtpSuccess]);
  useEffect(() => {
    let countdown;

    if (showTimer && timer > 0) {
      countdown = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(countdown);
            setShowTimer(false);
            toast.error('OTP has expired. Click Resend to get a new OTP.')
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [showTimer, timer]);

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
      <div className="w-full bg-color max-w-md mt-0 rounded-[50px_50px_50px_50px] py-6 lg:rounded-[120px_0px_0px_120px] lg:py-44">
        <div className="flex justify-center ">
          <img className="w-32 h-32 md:w-48 mt-[-20px] md:h-38 lg:mt-[-150px]" src="/poplogo.svg" alt="Your Company" />
        </div>
        <h3 className="text-center text-2xl mt-[-25px] md:text-3xl font-extrabold text-white lg:text-2xl lg:mt-[-4px] lg:ml-[15px]">
          OTP Verification
        </h3>
        <p className="text-center text-white text-sm text-base font-bold mt-[-5px] lg:mt-[10px] lg:ml-[-22px] lg:text-base">
          Enter the One Time Password
          {showTimer && (
            <p className="text-white text-sm mt-[5px]  lg:mt-[-17px] lg:ml-[290px]">
              {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
            </p>
          )}
        </p>
        <form className="space-y-10 pt-0 px-5 lg:px-10 py-5" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                className="w-6 h-6 mt-[-25px] text-base md:w-8 h-8 lg:w-10 lg:h-10 lg:ml-[15px] text-center text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <p className="mt-[-35px] ml-[5px] text-white text-sm md:ml-[0px] md:text-sm lg:ml-[15px] lg:mt-[-35px] lg:text-sm">
              If you didn't receive a code!
              <span
                className=" mr-2 md:mr-1 lg:mr-0 hover:underline cursor-pointer font-bold text-white"
                onClick={handleResendOtp}
              >
                Resend
              </span>
            </p>

          </div>
          <div>
            <button
              type="button"
              className="ml-[45px] mt-[-10px] md:ml-[135px] lg:ml-[125px] flex justify-center py-3 px-8 lg:py-2 lg:px-8 mb-[10px] border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-white hover:text-black focus:outline-purple focus:ring-2 focus:ring-offset-2 focus:ring-blue cursor-pointer"
              onClick={handleOtpVerification}
              disabled={isVerifying}
            >
              {isVerifying ? 'Verifying...' : 'Confirm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
