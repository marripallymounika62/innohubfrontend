import React from 'react';

const Deactivate = ({ role, onClose, onSubmit }) => {
  const handleDeactivate = () => {
    onSubmit(role.roles_id);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#090119] p-6 rounded-lg w-96 text-white border-4 border-white border-solid">
        <h2 className="text-xl font-semibold mb-4 text-center">Deactivate</h2>
        <p className="text-center">Are you sure you want to deactivate {role.roles_name}? Deactivating a role will immediately suspend all related resources. This action is irreversible.</p>
        <div className="flex justify-center mt-6">
          <button
            className="bg-white-500 py-2 px-5 font-semibold rounded mr-5"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-white-600 py-2 px-5 font-semibold rounded"
            onClick={handleDeactivate}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deactivate;
