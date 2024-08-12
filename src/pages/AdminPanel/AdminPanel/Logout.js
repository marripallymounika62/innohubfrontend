import React from "react";
import { adminLogout } from "../../../redux/actions/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(adminLogout());
    navigate("/");
  };

  return (
    <div className="flex items-center pl-10 justify-center ml-40 bg-color rounded-md mt-10 border-solid border-white border-2">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-center text-white text-2xl font-bold mb-10">
          Logout
        </h2>
        <p className="text-center text-white mb-10">
          Are you sure you want to logout?
        </p>
        <div className="flex justify-between">
          <button
            className="bg-white font-bold py-3 px-7 rounded focus:outline-none focus:shadow-outline"
            onClick={logoutHandle}
          >
            Yes
          </button>
          <button
            className="bg-white font-bold py-3 px-7 rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
