import React, { useState, useEffect } from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../Adminsidebar'
import Table from '../../../../components/tableComponents/Table'
import { useMemo } from 'react'
import { fetchQualified, fetchStudents, uploadPayment, deactivateQualifiedStudent } from '../../../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "../../../../components/dropdown/DropDown";
import ViewStudent from '../../../../components/enrolledstudents/ViewStudent';
import TextField from "../../../../components/formcomponents/TextField";
//import Deactivate from '../../../../components/enrolledstudents/Deactivate';

const  QualifiedStudents = () => {
  const mark = useSelector((state) => state.fetchMark.mark); 
  const students = useSelector((state) => state.students.students);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [installmentStatus, setInstallmentStatus] = useState({});
  const [selectedDates, setSelectedDates] = useState({});
  //const [showDeactivatePopup, setShowDeactivatePopup] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQualified());
    dispatch(fetchStudents());
  }, [dispatch]);
  useEffect(() => {
    const status = {};
    combinedData.forEach(student => {
      status[student.student_id] = {
        installment1: student.installment1 || 'Unpaid',
        installment2: student.installment2 || 'Unpaid'
      };
    });
    setInstallmentStatus(status);
  }, [students, mark]);  

  const combinedData = mark.map((m) => {
    const student = students.find((s) => s.student_id === m.student_id);
    const testScore = m.test_score || 0; 
    const interviewScore = m.interview_score || 0; 
    const totalScore = testScore + interviewScore; 
    const percentage = (totalScore / 50) * 100; 
    let scholarshipGranted = 'No'; 

    // Calculate scholarship based on percentage 
    if (percentage >= 95 && percentage <= 99.99) {
      scholarshipGranted = '50%';
    } else if (percentage >= 90 && percentage <= 94.99) {
      scholarshipGranted = '40%';
    } else if (percentage >= 80 && percentage <= 89.99) {
      scholarshipGranted = '25%';
    } else if (percentage >= 71 && percentage <= 79.99) {
      scholarshipGranted = '10%';
    }
    return { ...m, ...student, percentage, scholarshipGranted };
    });

    const columns = [
        {
          Header: 'UQ.ID',
          accessor: 'roll_no',
        },
        {
          Header: 'Full Name',
          accessor: (row) => `${row.first_name} ${row.last_name}`,
        },{
          Header: 'Test Score',
          accessor: 'test_score',
        },
        {
          Header: 'Interview Score',
          accessor: 'interview_score',
        },
        {
          Header: 'Percentage',
          accessor: (row) => `${row.percentage}%`,
        },
        {
          Header: 'Scholarship Granted',
          accessor: 'scholarshipGranted',
        },
        {
          Header: 'Installment1',
          accessor: 'installment1',
          Cell: ({ row }) => (
            <select
              value={installmentStatus[row.original.student_id]?.installment1 || 'Unpaid'}
              onChange={(e) => handleInstallmentChange(row.original.student_id, 'installment1', e.target.value)}
              disabled={row.original.status === 1}
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          ),
        },
        {
          Header: 'Installment2',
          accessor: 'installment2',
          Cell: ({ row }) => (
            <select
              value={installmentStatus[row.original.student_id]?.installment2 || 'Unpaid'}
              onChange={(e) => handleInstallmentChange(row.original.student_id, 'installment2', e.target.value)}
              disabled={row.original.status === 1}
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          ),
        },
        {
          Header: 'Date',
          accessor: 'date',
          Cell: ({ row }) => (
           <input
            type="date"
            value={selectedDates[row.original.student_id] || ''}
            onChange={(e) => handleDateChange(row.original.student_id, e.target.value)}
            className="w-35 h-6"
            disabled={row.original.status === 1}
            />
          ),
        },
        /*{
          Header: 'ProgramAssigned',
          accessor: 'programassigned',
        },
        {
          Header: 'Start Date',
          accessor: 'start date',
        },
        {
          Header: 'End Date',
          accessor: 'enddate',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Awards',
          accessor: 'Awards',
        },
        {
          Header: 'Recognitions',
          accessor: 'recognition',
        },
        {
            Header:'Certificate',
            accessor:'certificate'
        }*/
        {
          Header: '', 
          accessor: 'actions', 
          Cell: ({ row }) => (
            <Dropdown
              options={['View']}
              onSelect={(option) => handleOptionSelect(option, row.original)}
            />
          ),
        },
    ]
      
    /*const handleDeactivate = (studentId) => {
      dispatch(deactivateQualifiedStudent(studentId));
    };*/ 

    const handleOptionSelect = (option, student) => {
      if (option === 'View') {
        const foundStudent = students.find((s) => s.student_id === student.student_id);
        setSelectedStudent(foundStudent);
        setShowPopup(true);
      }
      /*else if (option === 'Deactivate') {
        setSelectedStudent(student);  
        setShowDeactivatePopup(true);  
      }*/
      /*else if  (option === 'Deactivate') {
        handleDeactivate(student.student_id);
      }*/
    };
    const handleInstallmentChange = (studentId, installment, value) => {
      const student = combinedData.find((s) => s.student_id === studentId);
        if (student.status === 1) return;
      const updatedStatus = {
        ...installmentStatus[studentId],
        [installment]: value,
      };
  
      setInstallmentStatus((prevStatus) => ({
        ...prevStatus,
        [studentId]: updatedStatus,
      }));
  
      const date = installmentStatus[studentId]?.date;
  
      if (date) {
        const paymentData = {
          installment1: installment === 'installment1' ? value : installmentStatus[studentId]?.installment1,
          installment2: installment === 'installment2' ? value : installmentStatus[studentId]?.installment2,
          date: date,
        };
  
        dispatch(uploadPayment(studentId, paymentData));
      }
    };
  
    const handleDateChange = (studentId, date) => {
      const student = combinedData.find((s) => s.student_id === studentId);
        if (student.status === 1) return;
      setSelectedDates((prevDates) => ({
        ...prevDates,
        [studentId]: date,
      }));
  
      setInstallmentStatus((prevStatus) => ({
        ...prevStatus,
        [studentId]: {
          ...prevStatus[studentId],
          date: date,
        },
      }));
  
      const status = installmentStatus[studentId];
  
      if (status) {
        const paymentData = {
          installment1: status.installment1,
          installment2: status.installment2,
          date: date,
        };
  
        dispatch(uploadPayment(studentId, paymentData));
      }
    };
       

      
   
  return (
    
    <div className="flex flex-row w-full h-screen bg-[#090119]  overflow-hidden">
    <AdminHeader dashboardName="Student Management" />
    <AdminSidebar/>
     
      <div className="md:flex-1 md:ml-8 px-4 pt-24 pl-60">
       <div className="text-white">
        <Table
          columns={columns}
          data={combinedData} 
          heading="Qualified Students"
          rowClassName={(row) => (row.original.status === 1 ? 'bg-midnightblue' : '')} 
       />
      </div>
      </div>
      {showPopup && (
        <ViewStudent student={selectedStudent} onClose={() => setShowPopup(false)} />
      )}
       {/*{showDeactivatePopup && (
        <Deactivate
          student={selectedStudent}
          onClose={() => setShowDeactivatePopup(false)}
          onSubmit={handleDeactivate}
        />
      )}*/}
    </div>
  )
}

export default QualifiedStudents