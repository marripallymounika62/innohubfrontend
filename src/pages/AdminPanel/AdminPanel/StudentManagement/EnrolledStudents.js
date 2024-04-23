import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../Adminsidebar'
import { useEffect, useState, useMemo,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStudents ,sendEmail} from '../../../../redux/actions/action';
import Table from '../../../../components/tableComponents/Table';
import { CiMenuKebab } from "react-icons/ci";
import Dropdown from "../../../../components/dropdown/DropDown"
import ViewStudent from '../../../../components/enrolledstudents/ViewStudent';
import EditStudent from '../../../../components/enrolledstudents/EditStudent';
import { updateEmailStatus } from '../../../../redux/actions/action';

const EnrolledStudents= () => {

    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.students);
    //const emailSent = useSelector((state) => state.email.emailSent);
    const emailStatus = useSelector((state) => state.emailStatus);
    console.log("emailStatus",emailStatus)


    const [emailSent, setEmailSent] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editedStudent, setEditedStudent] = useState(null);

    const navigate = useNavigate();

  console.log(students, "aaaaaaaaaa")
    const columns = useMemo(
      () => [
        {
          Header: 'Student Id',
          accessor: 'student_id',
          width: 30,
        },
        {
          Header: 'Name',
          accessor: 'first_name' 
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
          Header: 'Email Sent',
          accessor: 'email_sent',
          Cell: ({ row }) => (
            <input
              className='ml-7'
              type="checkbox"
              checked={emailSent[row.original.student_id] || false}
              onChange={(e) => handleCheckboxChange(e, row.original.enrollement_id)}
            />
          ),
        },
        {
          Header: 'Test Score',
          accessor: 'test_score',
         // width: 50,
          Cell: ({ row }) => (
            <input
              type="text"
              value={row.original.test_score || ''}
              onChange={(e) => handleTestScoreChange(e, row.original.student_id)}
            />
          ),
        },
        {
          Header: 'Interview Score',
          accessor: 'interview_score',
          Cell: ({ row }) => (
            <input
              type="text"
              value={row.original.interview_score || ''}
              onChange={(e) => handleInterviewScoreChange(e, row.original.student_id)}
            />
          ),
        },
        {
          Header: 'Status',
          accessor: 'status',
          Cell: ({ row }) => (
            <select
           // value={cell.value || ''}
            //onChange={(e) => handleInputChange(e, rowIndex, cell.column.id)}
          >
            <option value="selected">Qualified</option>
            <option value="rejected">Rejected</option>
          </select>
          ),
        },
        {
          Header: '', // New column for actions
          accessor: 'actions', // Custom accessor to ensure unique key
          Cell: ({ row }) => (
            <Dropdown
              options={['View', 'Edit', 'Deactivate']}
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
     
    const handleCheckboxChange = useCallback((event, studentId) => {
      const { checked } = event.target;
      dispatch(updateEmailStatus(studentId, checked)); // Update Redux state when checkbox is changed
    }, [dispatch]);

        const handleOptionSelect = (option, student) => {
      if (option === 'View') {
        setSelectedStudent(student);
        setShowPopup(true);
      }
      else if (option === 'Edit') {
        setSelectedStudent(student);
        setShowEditPopup(true);
        setEditedStudent(student); // Set edited student data initially to selected student data
      }
      
      // You can implement other actions for 'Edit' and 'Deactivate' here
    };


    const handleEditSubmit = (editedStudentData) => {
      // Here you can dispatch an action to update the student data
      // For simplicity, let's just log the edited student data
      console.log('Edited Student:', editedStudentData);
      setShowEditPopup(false); // Close the popup after submission
    };

    const sendEmailToStudent = useCallback((student_Id) => {
      dispatch(sendEmail(student_Id));
  }, [dispatch]);

   
  return (
    <div className="flex flex-row w-full bg-[#090119]  overflow-hidden">
      <div className="w-full">
        {/* <header className="w-full flex flex-col md:flex-row items-start justify-start gap-5 text-4xl md:text-xl text-white font-poppins">
          <div className="w-full items-center flex flex-col  md:flex-row justify-start gap-5">
            <img
              className="h-24 w-60 mb-2  md:mb-0"
              loading="lazy"
              alt=""
              src="/poplogo.svg"
              onClick={onHomeClick}
            />
            <div className="flex-1 flex flex-col w-72 pr-2 items-left justify-start md:px-0 md:pb-0">
              <h1 className="m-0 bg-color h-20 rounded-lg pl-4 pt-5 font-semibold font-inherit whitespace-nowrap text-3xl md:text-xl">
                Student Management
              </h1>
              <div className='absolute pt-14 font-poppins text-sm pl-4'>Manage your Admin Dashboard learn more</div>
            </div>
          </div>
        </header> */}
        <AdminHeader dashboardName="Student Management"/>
        <div className="md:flex md:flex-row">
          <div className="md:w-64">
             <AdminSidebar/>  
          </div>
          <div className="overflow-x-auto w-full md:flex-1 md:ml-8 px-4 pt-28">
            <div className="text-white ">
              {students.length > 0 ? (
                <Table
                  columns={columns}
                  data={students}
                  heading="Enrolled Students"
                  button="Add new student" 
                 
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
    </div>
  );
};



export default EnrolledStudents
