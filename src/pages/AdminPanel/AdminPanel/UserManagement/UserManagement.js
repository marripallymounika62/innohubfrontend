import React, { useEffect } from 'react';
import AdminSidebar from '../Adminsidebar';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import Table from '../../../../components/tableComponents/Table';
import Dropdown from '../../../../components/dropdown/DropDown';
import { fetchUsers } from '../../../../redux/actions/action';
import { useGlobalFilter } from 'react-table';
import { useDispatch, useSelector } from 'react-redux';
import AdminHeader from '../AdminHeader';
import AddUserMangForm from './AddUserMangForm';

function UserManagement() {

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const users=useSelector((state)=>state.users.users);
  
  const [emailSent, setEmailSent] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleAddUserPopup = () => {
    setShowAddUserPopup(!showAddUserPopup);
  };

  const handleAddUserClick = () => {
    setShowAddUserPopup(true);
  };


  const columns = [
    {
      Header: 'ID',
      accessor: 'user_id',
    },
    {
      Header: 'Full Name',
      accessor: (row) => `${row.first_name} ${row.last_name}`,
      //accessor: 'first_name',
    },
    {
      Header: 'Email',
      accessor: 'email_id',
    },
    {
      Header: 'Mobile',
      accessor: 'mobile_no',
    },
    
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    ,
    {
      Header: 'Role',
      accessor: 'roles_name',
    },
    ,{
      Header: '', // New column for actions
      accessor: 'actions', // Custom accessor to ensure unique key
      Cell: ({ row }) => (
        <Dropdown
          options={['View', 'Edit', 'Deactivate']}
          onSelect={(option) => handleOptionSelect(option, row.original)}
        />
      ),
    },
  ];

  const data = [
    {
      id: 1,
      fullName: 'John paul jones',
      email: 'john@example.com',
      mobile: '1234567890',
      city: 'Bengaluru',
      state: "karnataka",
      role: 'student',
      
    },
    // Add more data objects as needed
  ];

  

  const handleOptionSelect = (option, user) => {
    if (option === 'View') {
      setSelectedUsers(user);
      setShowPopup(true);
    }
    // You can implement other actions for 'Edit' and 'Deactivate' here
  };

  useEffect(()=>{
    dispatch(fetchUsers());
  },[dispatch]);

const onHomeClick = useCallback(() => {
  navigate("/");
}, [navigate]);

  return (
    
     <div className="flex flex-row w-full  bg-[#090119]  overflow-hidden">
      <div className="w-full">
      <AdminHeader dashboardName="User Management"/>
        
        <div className='ml-[280px] mt-28 grid gap-x-8 gap-y-4  lg:flex flex-row md:ml-[300px] gap gap-6 xl:ml-[300px] '>
          <p className='text-white'>Filterby:</p>
          <button
            type="button"
            class="flex items-center w-[150px]  text-base text-black bg-white transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 pl-[15px] cursor-pointer"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
            onClick={toggleDropdown} // Add onClick event handler here
          >
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
              User ID
            </span>
            <select className="bg-whitesmoke text-black h-auto rounded-[8.08px]  pt-3 px-[0px] pb-4 box-border font-poppins text-mini-1 w-[50px]">
            <option value="">Select user ID</option>
              {users.map((user)=>{
                return(
                  <option key={user.user_id} value={user.first_name}> 
                  {user.user_id}

                  </option>
                )
              })}
            <IoMdArrowDropdown class="w-5 h-5" />
            </select>
            
          </button>
          <button
            type="button"
            class="flex items-center w-[150px]  text-base text-black bg-white transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-700 pl-[15px] cursor-pointer"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
            onClick={toggleDropdown} // Add onClick event handler here
          >
            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap ">
              Last login
            </span>
            <IoMdArrowDropdown class="w-5 h-5" />
          </button>
          <input placeholder="Deactivate Accounts" className='text-white bg-[#090119] border-2 w-[150px]'   aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
            onClick={toggleDropdown}  />
          <IoMdArrowDropdown />
          <button onClick={handleAddUserClick} className='cursor-pointer bg-color hover:bg-blue-700 text-white font-bold  md:mt-0 md:ml-4 rounded w-[150px]'>Add new user</button>
        </div>
        <div className="md:flex md:flex-row">
          <div className="md:w-64">
             <AdminSidebar/>  
          </div>
          <div className="md:flex-1 md:ml-8 px-4">
            <div className="text-white">
              {users.length > 0 ? (
                <Table
                  columns={columns}
                  data={users}
                  heading="Enrolled Users"
                                 
                />
              ) : (
                <p>No records to display........</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <Popup user={selectedUsers} onClose={() => setShowPopup(false)} />
      )}

      {/* Popup for adding a new user */}
      {showAddUserPopup && (
        
          <div className="">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <AddUserMangForm onCloseee={()=>setShowAddUserPopup(false)} />
          </div>
        
      )}
    </div>
  );
}

const Popup = ({ user, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-color bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-bold mb-4">Student Details</h2>
        <p><strong>User Id:</strong> {user.user_id}</p>
        <p><strong>First Name:</strong> {user.first_name}</p>
        <p><strong>Last Name:</strong> {user.last_name}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Adhaar number:</strong> {user.adhaar_no}</p>
        <p><strong>Email:</strong> {user.email_id}</p>
        <p><strong>Mobile:</strong> {user.mobile_no}</p>
        <p><strong>Date of birth:</strong> {user.dob}</p>
        <p><strong>State:</strong> {user.state}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>Roles name:</strong> {user.roles_name}</p>
        <p><strong>profession:</strong> {user.profession}</p>
        <button className="bg-color text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};


export default UserManagement;
