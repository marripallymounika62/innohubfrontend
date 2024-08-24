import React from 'react';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../Adminsidebar';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStudents, sendEmail, updateEmailStatus, uploadNewMark, fetchStudentMark, sendEmailMark, deactivateStudent } from '../../../../redux/actions/action';
import Table from '../../../../components/tableComponents/Table';
import Dropdown from '../../../../components/dropdown/DropDown';
import ViewStudent from '../../../../components/enrolledstudents/ViewStudent';
import EditStudent from '../../../../components/enrolledstudents/EditStudent';
import AddMark from '../../../../components/enrolledstudents/AddMark';
import Deactivate from '../../../../components/enrolledstudents/Deactivate';

const EnrolledStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.students);
  const emailStatus = useSelector((state) => state.emailStatus);
  const mark = useSelector((state) => state.fetchStudentMark.mark);

  useEffect(() => {
    dispatch(fetchStudentMark());
  }, [dispatch]);

  const combinedData = students.map(student => ({
    ...student,
    mark: Array.isArray(mark) ? mark.find(m => m.student_id === student.student_id) : null
  }));

  const [emailSent, setEmailSent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const [showAddMarkPopup, setShowAddMarkPopup] = useState(false);
  const [showDeactivatePopup, setShowDeactivatePopup] = useState(false);
  const [popupAction, setPopupAction] = useState('');

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: 'Student Id',
        accessor: 'student_id',
        width: 30,
      },
      {
        Header: 'Name',
        accessor: (row) => `${row.first_name} ${row.last_name}`,
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
      {
        Header: 'Test Score',
        accessor: 'test_score',
      },
      {
        Header: 'Interview Score',
        accessor: 'interview_score',
      },
      {
        Header: 'Email Sent',
        accessor: 'email_sent',
        Cell: ({ row }) => (
          <div className="flex items-center">
            <input
              className="ml-7"
              type="checkbox"
              checked={emailSent[row.original.student_id] || false}
              disabled={row.original.status === 1}
              onChange={(e) => handleCheckboxChange(e, row.original.student_id)}
            />
            {emailSent[row.original.student_id]}
          </div>
        ),
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: ({ row }) => (
          <Dropdown
            options={
              row.original.status === 1
                ? ['View', 'Edit', 'Activate', 'Add Mark']
                : ['View', 'Edit', 'Deactivate', 'Add Mark']
            }
            onSelect={(option) => handleOptionSelect(option, row.original)}
          />
        ),
      },
    ],
    [emailSent]
  );

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleDeactivate = (studentId) => {
    dispatch(deactivateStudent(studentId));
  };

  const handleCheckboxChange = (event, studentId) => {
    const isChecked = event.target.checked;
    setEmailSent(prevState => ({
      ...prevState,
      [studentId]: isChecked
    }));
    dispatch(updateEmailStatus(studentId, isChecked));
    if (isChecked) {
      dispatch(sendEmailMark(studentId));
    }
  };

  const handleOptionSelect = (option, student) => {
    if (student.status === 1 && option !== 'Activate' && option !== 'View') {
      return; 
    }
    if (option === 'View') {
      setSelectedStudent(student);
      setShowPopup(true);
    } else if (option === 'Edit') {
      setSelectedStudent(student);
      setShowEditPopup(true);
      setEditedStudent(student);
    } else if (option === 'Add Mark') {
      setSelectedStudent(student);
      setShowAddMarkPopup(true);
    } else if (option === 'Deactivate' || option === 'Activate') {
      setSelectedStudent(student);
      setPopupAction(option);
      setShowDeactivatePopup(true);
    }
  };

  const handleAddMarkSubmit = (markData) => {
    dispatch(uploadNewMark(markData));
  };

  const handleEditSubmit = (editedStudentData) => {
    console.log('Edited Student:', editedStudentData);
    setShowEditPopup(false);
  };

  const sendEmailToStudent = useCallback((student_Id) => {
    dispatch(sendEmail(student_Id));
  }, [dispatch]);

  /*const rowClassName = (row) => {
    if (row.original.status === 1) {
      return 'bg-gray-200';
    }
    return '';
  };*/

  return (
    <div className="flex flex-row w-full bg-[#090119] overflow-hidden">
      <div className="w-full">
        <AdminHeader dashboardName="Student Management" />
        <div className="md:flex md:flex-row">
          <div className="md:w-64">
            <AdminSidebar />
          </div>
          <div className="overflow-x-auto w-full md:flex-1 md:ml-8 px-4 pt-28">
            <div className="text-white ">
              {students.length > 0 ? (
                <Table
                  columns={columns}
                  data={combinedData}
                  heading="Enrolled Students"
                  button="Add new student"
                  rowClassName={(row) => (row.original.status === 1 ? 'bg-midnightblue' : '')} 
                />
              ) : (
                <p>no records to display</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <ViewStudent student={selectedStudent} onClose={() => setShowPopup(false)} />
      )}
      {showEditPopup && (
        <EditStudent
          student={editedStudent}
          onClose={() => setShowEditPopup(false)}
          onSubmit={handleEditSubmit}
        />
      )}
      {showAddMarkPopup && (
        <AddMark
          student={selectedStudent}
          onClose={() => setShowAddMarkPopup(false)}
          onSubmit={handleAddMarkSubmit}
        />
      )}
      {showDeactivatePopup && (
        <Deactivate
          student={selectedStudent}
          action={popupAction}
          onClose={() => setShowDeactivatePopup(false)}
          onSubmit={handleDeactivate}
        />
      )}
    </div>
  );
};

export default EnrolledStudents;