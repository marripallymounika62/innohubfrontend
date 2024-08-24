import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudentById } from '../../redux/actions/action'; 


const EditStudent = ({ student, onClose, onSubmit }) => {
  const [editedStudent, setEditedStudent] = useState(student);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  /*const handleSubmit = () => {
    onSubmit(editedStudent); // Pass the edited student data to the onSubmit function
  };*/
  const handleSubmit = () => {
    const { student_id, ...updatedData } = editedStudent; // Extract student_id from editedStudent
    dispatch(updateStudentById(updatedData, student_id)) // Send updatedData and student_id to action
      .then((updatedStudent) => {
        onSubmit(updatedStudent);
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 pr-16 rounded-lg max-w-lg ">
        <h2 className="text-lg font-semibold mb-4">Edit Student</h2>
        <label className="block mb-2">
          Mobile:
          <input type="text" name="mobile_no" value={editedStudent.mobile_no} onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
        </label>
        <label className="block mb-2">
          City:
          <input type="text" name="city" value={editedStudent.city} onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
        </label>
        <label className="block mb-2">
          State:
          <input type="text" name="state" value={editedStudent.state} onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
        </label>
        <label className="block mb-2">
          Address:
          <input type="text" name="address_line1" value={editedStudent.address_line1} onChange={handleInputChange} className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1" />
        </label>
        <div className="flex justify-end pt-6">
          <button onClick={handleSubmit} className="bg-color text-white px-4 py-2 rounded-md mr-2">Submit</button>
          <button onClick={onClose} className="bg-color text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
