import React, { useState, useEffect } from 'react'
import AdminHeader from '../../AdminHeader'
import AdminSidebar from '../../Adminsidebar'
import Table from '../../../../../components/tableComponents/Table'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "../../../../../components/dropdown/DropDown"
import { fetchRoles, deactivateRole } from '../../../../../redux/actions/action'
import Deactivate from './Deactivate';
import AddRole from './AddRole';
import { useMemo } from 'react'

const RoleManagement = () => {
  const dispatch = useDispatch();
  const fetchRole = useSelector((state) => state.roles.roles); 
  const [selectedRole, setSelectedRole] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeactivatePopup, setShowDeactivatePopup] = useState(false);
  const [showAddRolePopup, setShowAddRolePopup] = useState(false);

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
          /*Cell: ({ value }) => {
            const date = new Date(value);
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          },*/
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
              options={['Deactivate']}
              onSelect={(option) => handleOptionSelect(option, row.original)}
            />
          ),
        },

        
    ]
      
      /*const data = [
        {
         roleId: 1,
          roleName: 'admin',
          Createdat: 'john@example.com',
        }
      ];*/
      const handleOptionSelect = (option, role) => {
        if (option === 'Deactivate') {
          setSelectedRole(role);  
          setShowDeactivatePopup(true);  
        }
      };

      const activeRoles = useMemo(() => {
        return fetchRole.filter(role => role.status === 0);
      }, [fetchRole]);
    
      useEffect(() => {
        console.log("Active Roles:", activeRoles); 
      }, [activeRoles]);
  return (
    
    <div className="flex flex-row w-full h-screen bg-[#090119]  overflow-hidden">
    <AdminHeader dashboardName="Role Management" />
    <AdminSidebar/>
   
      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
       <div className="text-white">
       <div className="mb-2 pt-4 flex justify-end items-center pr-8">
        <button onClick={handleAddRoleClick} className="bg-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add new Role
        </button>
       </div>
        
        <Table
          columns={columns}
          data={activeRoles} //{fetchRole} 
          heading="Role Management"
       />
        
      </div>
      </div>
      {showDeactivatePopup && (
        <Deactivate
          role={selectedRole}
          onClose={() => setShowDeactivatePopup(false)}
          onSubmit={handleDeactivate}
        />
      )}
      {/*{showAddRolePopup && ( 
        <div className="">
          <h2 className="text-xl font-bold mb-4">Add New Role</h2>
          <AddRole onAddRoleClose={()=>setShowAddRolePopup(false)} />
        </div>
      )}*/}
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

export default RoleManagement