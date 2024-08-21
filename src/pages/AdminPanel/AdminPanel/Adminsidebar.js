import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdminPanelSettings, MdDashboard, MdContentCopy } from "react-icons/md";
import { IoIosPerson, IoMdArrowDropdown } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineViewList } from 'react-icons/hi';
import { RxDropdownMenu } from "react-icons/rx";
import "./home.css";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setDown] = useState(false);
  const [profileDown, setProfileDown] = useState(false);
  const [isDashboardClicked, setIsDashboardClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle profile dropdown state
  const profilePicDown = () => {
    setProfileDown(!profileDown);
  };

  // Function to toggle admin master dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle sidebar dropdown state
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDashboardClick = () => {
    setIsDashboardClicked(true);
    navigate("/Adminhome");
  };

  const handleStudentManagementClick = () => {
    setDown(!isDown);
  };

  const navigateToEnrolledStudents = () => {
    navigate("/enrolled-students");
  };

  const navigateToQualifiedStudents = () => {
    navigate("/qualified-students");
  };

  const navigateToAreaManagement = () => {
    navigate("/allState");
  };

  const navigateToAccessManagement = () => {
    navigate("/accessControl");
  };
  return (
    <div>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleDropdownToggle}
      >
        <span className="sr-only">Open sidebar</span>
        <RxDropdownMenu className="w-8 h-8" />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        ref={dropdownRef}
        className={`fixed top-0 ml-[0px] z-40 w-64 h-screen transition-transform ${isDropdownOpen ? "" : "-translate-x-full sm:translate-x-0 pt-24"}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-custom-color dark:bg-gray-800 rounded-tr-[100px]">
          <ul className="space-y-2 font-medium">
            <button
              type="button"
              className="flex items-center w-64 p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 mt-[-30px] rounded-bl-[50px] ml-[-50px] bg-white rounded-tr-[70px]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={profilePicDown}
            >
              <img src="/admin_profile.PNG" alt="" style={{ width: "50px", height: "50px", backgroundColor: "black", borderRadius: "50%", marginLeft: "20px" }} />
              <p style={{ color: "black", marginTop: "-40px", paddingLeft: "10px" }} className="dropdown-toggle pt-[50px] font-bold">
                Admin
              </p>
              <IoMdArrowDropdown className="w-5 h-5 text-black" />
            </button>
            <ul
              id="dropdown-example"
              className={`py-2 space-y-2 ${profileDown ? "" : "hidden"}`}
            >
              <a href="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                Update Profile
              </a>
              <a href="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                Change Password
              </a>

              <a href="#" className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                Logout
              </a>
            </ul>
            <a
              href="#"
              className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group no-underline pl-[15px]"
              onClick={handleDashboardClick}
            >
              <MdDashboard className="ml-[-60px] cursor-pointer" />
              <span className="ms-3 ml-[-20px] cursor-pointer">Dashboard</span>
            </a>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 pl-[15px]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={toggleDropdown}
            >
              <MdAdminPanelSettings className="ml-[-60px] cursor-pointer" />
              <span className="ms-3 ml-[-20px] cursor-pointer">Admin Master</span>
              <IoMdArrowDropdown className="w-5 h-5" />
            </button>
            <ul id="dropdown-example" className={`py-2 space-y-2 ${isOpen ? "" : "hidden"}`}>
              <a href="/usermanagement" className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                User Management
              </a>
              <a href="/roleManagement" className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                Role Management
              </a>
              <a className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline" onClick={navigateToAreaManagement}>
                Master Modules
              </a>
              <a href="#" className="flex items-center w-full p-1 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline" onClick={navigateToAccessManagement}>
                Access Control
              </a>
            </ul>
            {/* <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group no-underline pl-[15px]">
              <IoIosPerson className="ml-[-60px] cursor-pointer" />
              <span className="ms-3 ml-[-20px] cursor-pointer">Event Management</span>
            </a> */}
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 pl-[15px]"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={handleStudentManagementClick}
            >
              <PiStudentBold className="ml-[-60px] cursor-pointer" />
              <span className="ms-3 ml-[-20px] cursor-pointer">Student Management</span>
              <IoMdArrowDropdown className="w-5 h-5" />
            </button>
            <ul id="dropdown-example" className={`py-2 space-y-2 ${isDown ? "" : "hidden"}`}>
              <a href="#" onClick={navigateToEnrolledStudents} className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                Enrolled Students
              </a>
              <a href="" onClick={navigateToQualifiedStudents} className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px] no-underline">
                Qualified Students
              </a>
            </ul>
            <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group no-underline pl-[15px]">
              <MdContentCopy className="ml-[-60px] cursor-pointer" />
              <span className="ms-3 ml-[-20px] cursor-pointer">Content Management</span>
            </a>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;
