import React, { useState } from "react";
import { IoMdLock } from "react-icons/io";
import TextField from "../../../components/formcomponents/TextField";
import { updatePassword } from "../../../redux/actions/action";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Change = () => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found");
      return;
    }
    const decodedToken = jwtDecode(token);
    dispatch(updatePassword(decodedToken.id, newPassword, confirmPassword))
      .then(() => {
        toast.success("Password updated successfully");
        setIsPopupOpen(false);
      })
      .catch((error) => {
        toast.error("Error updating password");
      });
  };
  if (!isPopupOpen) return null;

  return (
    <div className="flex pl-10 items-center justify-center bg-color ml-60 mt-10 max-w-lg w-full rounded-lg border-solid border-2">
      <form
        onSubmit={handleSubmit}
        className="bg-color p-9 rounded shadow-sm max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-white text-center mb-6 ml-6">
          Change Password
        </h2>
        <div className="relative mb-6">
          <TextField
            label="New Password:"
            name="new-password"
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required={true}
            disabled={false}
            icon={IoMdLock}
            className=""
          />
          <div className="absolute inset-y-0 right-0 mt-8 mr-1 flex items-center">
            {showNewPassword ? (
              <FaRegEyeSlash
                className="h-5 w-5 mr-2 cursor-pointer"
                onClick={toggleNewPasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="h-5 w-5 mr-2 cursor-pointer"
                onClick={toggleNewPasswordVisibility}
              />
            )}
          </div>
        </div>
        <div className="relative mb-6">
          <TextField
            label="Confirm Password:"
            name="confirm-password"
            type={showConfirmPassword ? "text" : "password"} // Toggle input type for Confirm Password
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
            disabled={false}
            className=""
            icon={IoMdLock}
          />
          <div className="absolute inset-y-0 right-0 mt-8 flex mr-1 items-center">
            {showConfirmPassword ? (
              <FaRegEyeSlash
                className="h-5 w-5 mr-2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="h-5 w-5 mr-2 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-6/12 p-3 bg-black text-white rounded ml-20 mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Change;
