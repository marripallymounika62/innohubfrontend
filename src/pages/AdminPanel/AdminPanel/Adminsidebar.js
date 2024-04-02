import React, { useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { HiOutlineViewList } from 'react-icons/hi';
// import PiStudent from 'react-icons'
import "./home.css"
const AdminSidebar = () => {

 

  const navigateToHR = () => {
    navigate("/hrmanagement");
  };

  const navigateToUser = () => {
    navigate("/usermanagement");
  };

  
  
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  
  
  const [isOpen, setIsOpen] = useState(false);
  const [isDown, setDown]=useState(false);
  const[profileDown, setprofileDown]=useState(false);

  // Function to toggle dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const studentDropdown=()=>{
    setDown(!isDown)
  }

  const profilepicDown=()=>{
    setprofileDown(!profileDown)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  
  // Function to toggle dropdown state
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

  
  return (
    <div >

<button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleDropdownToggle} // Attach event handler
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        ref={dropdownRef} // Assign ref to the aside element
        className={`fixed top-0 ml-[0px] z-40 w-64 h-screen transition-transform ${
          isDropdownOpen ? "" : "-translate-x-full sm:translate-x-0 pt-24 "
        }` }
        aria-label="Sidebar"
      >



        <div className="h-full px-3 py-4 overflow-y-auto bg-custom-color dark:bg-gray-800 rounded-tr-[100px] ">

          
        
          <ul class="space-y-2 font-medium">
         
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 mt-[-30px] rounded-bl-[50px] ml-[-20px]"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={profilepicDown} // Add onClick event handler here
              >
                
                <img src="&#8205;" alt="" style={{ width: "50px", height: "50px", backgroundColor: "black", borderRadius:"50%" }}  />
            <p style={{color:"white",marginTop:"-40px", paddingLeft:"10px" }} className="dropdown-toggle pt-[50px]">
              Admin
            </p>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`py-2 space-y-2 ${profileDown ? "" : "hidden"}`} // Conditionally apply 'hidden' class based on isOpen state
              >
               
               <a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Change profile pictutre
</a>

              
                
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Change Password
</a>
                
              
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
  FAQ's
</a>
             
              
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Logout
</a>
               
              </ul>
            
          
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-[-60px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />


                  
                </svg>

                <span class="ms-3 ml-[-20px]">Dashboard</span>
              </a>
           
          
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleDropdown} // Add onClick event handler here
              >
                <MdAdminPanelSettings className="ml-[-60px]" />
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                 AdminMaster
                </span>
                <svg
                  class="w-3 h-3 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`py-2 space-y-2 ${isOpen ? "" : "hidden"}`} // Conditionally apply 'hidden' class based on isOpen state
              >
                
                <a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
  User Managent
</a>

                
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Role management
</a>
              
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
 Area management
</a>
                
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Access control
</a>
               
              </ul>
            

          
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-[-60px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                
                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Event management
                </span>
              </a>
         
            
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-white bg-custom-color transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={studentDropdown} // Add onClick event handler here
              >
            
           
                <span class="flex-1 ms-3 text-left bg-custom-color rtl:text-right whitespace-nowrap ml-[-40px]" >
               

                 Student management
                </span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`py-2 space-y-2 ${isDown ? "" : "hidden"}`} // Conditionally apply 'hidden' class based on isOpen state
              >
                
                <a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Enrolled students
</a>
          
              
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Screening test results
</a>
             
             
<a
    href="#"
    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 whitespace-nowrap ml-[-70px]"
>
   Qualified students
</a>
               
              
              </ul>
         
            
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-[-60px]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap ">Content management</span>
              </a>
        
            
          </ul>
        </div>
      </aside>

      

</div>

  );
};

export default AdminSidebar;