import React, { useState, useEffect } from 'react'
import AdminHeader from '../../AdminHeader'
import AdminSidebar from '../../Adminsidebar'
import Table from '../../../../../components/tableComponents/Table'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "../../../../../components/dropdown/DropDown"
import { fetchRoles, deactivateRole } from '../../../../../redux/actions/action'
import Deactivate from './Deactivate';
import AddRole from './AddRole';
import { toast } from 'react-toastify';
import { useMemo } from 'react'

const RoleManagement = () => {
  const dispatch = useDispatch();
  const fetchRole = useSelector((state) => state.roles.roles);
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeactivatePopup, setShowDeactivatePopup] = useState(false);
  const [showAddRolePopup, setShowAddRolePopup] = useState(false);
  const [popupAction, setPopupAction] = useState('');

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched Roles:", fetchRole);
  }, [fetchRole]);

  const handleDeactivate = (rolesId) => {
    dispatch(deactivateRole(rolesId)).then(() => {
      dispatch(fetchRoles());
      setShowDeactivatePopup(false);
    });
  };

  const toggleAddUserPopup = () => {
    setShowAddRolePopup(!showAddRolePopup);
  };

  const handleAddRoleClick = () => {
    setShowAddRolePopup(true);
  };

  const columns = [
    {
      Header: 'Role ID',
      accessor: 'roles_id',
    },
    {
      Header: 'Role Name',
      accessor: 'roles_name',
    },
    {
      Header: 'Created Date',
      accessor: 'creation_date',
      Cell: ({ value }) => {
        if (!value) {
          return '';
        }
        const date = new Date(value);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      },
    },
    {
      Header: '',
      accessor: 'actions',
      Cell: ({ row }) => (
        <Dropdown
          options={
            row.original.status === 1
              ? ['Activate']
              : ['Deactivate']
          }
          onSelect={(option) => handleOptionSelect(option, row.original)}
        />
      ),
    },
  ]

  const handleOptionSelect = (option, roles) => {

    if (option === 'Deactivate' || option === 'Activate') {
      setSelectedRole(roles);
      setPopupAction(option);
      setShowDeactivatePopup(true);
    }
  };

  return (

    <div className="flex flex-row w-full h-screen bg-[#090119]  overflow-hidden">
      <AdminHeader dashboardName="Role Management" />
      <AdminSidebar />
      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
        <div className="text-white">
          <div className="mb-2 pt-4 flex justify-end items-center pr-8">
            <button onClick={handleAddRoleClick} className="bg-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:w-[60px] lg:mr-[-30px] lg:absolute top-[115px] xl:w-[150px] xl:mt-7 xl:mr-40 xl:absolute top-[116px]">
              Add new Role
            </button>
          </div>
          <Table
            columns={columns}
            data={fetchRole}
            heading="Role Management"
            rowClassName={(row) => (row.original.status === 1 ? 'bg-white text-black' : '')}
          />
        </div>
      </div>
      {showDeactivatePopup && (
        <Deactivate
          role={selectedRole}
          action={popupAction}
          onClose={() => setShowDeactivatePopup(false)}
          onSubmit={handleDeactivate}
        />
      )}
      {showAddRolePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div className="bg-color text-white rounded-lg shadow-lg p-8 w-full max-w-lg">
            <AddRole onAddRoleClose={() => setShowAddRolePopup(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default RoleManagement;