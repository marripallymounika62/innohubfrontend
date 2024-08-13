import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../../components/tableComponents/Table';
import Dropdown from '../../../../components/dropdown/DropDown';
import { fetchParticipants } from '../../../../redux/actions/action';
import ViewParticipants from './ViewParticipants';

const ParticipantsDetails = () => {
  const dispatch = useDispatch();
  const fetchParticipant = useSelector((state) => state.fetchParticipants.participants);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: 'Full Name',
        accessor: (row) => `${row.firstName} ${row.lastName}`,
      },
      {
        Header: 'Mobile Number',
        accessor: 'mobile',
      },
      {
        Header: 'Email ID',
        accessor: 'email',
      },
      {
        Header: 'Payment Status',
        accessor: 'payment',
      },
      {
        Header: 'Participants Attend',
        accessor: 'profession',
      },
      {
        Header: 'Feedback',
        accessor: 'hearAboutUs',
      },
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
    ],
    []
  );

  const handleOptionSelect = (option, participant) => {
    console.log('Selected Participant:', participant);
    if (option === 'View') {
      setSelectedParticipant(participant);
      setShowPopup(true);
      setFilterType(participant.event); 
    }
  };

  const filteredData = useMemo(() => {
    console.log('filterType:', filterType);
    console.log('fetchParticipant:', fetchParticipant);
    if (filterType === 'all') return fetchParticipant;
    return fetchParticipant.filter((participant) => participant.event === filterType);
  }, [fetchParticipant, filterType]);

  return (
    <div>
      <div className="mt-[30px] pl-36 text-black">
        <button
          className={`grow justify-center items-center px-10 pt-2 text-xl text-center rounded-l-xl h-[40px] w-[150px] ${
            filterType === 'Webinar' ? 'bg-white' : 'bg-violet-900'
          }`}
          onClick={() => setFilterType('Webinar')}
        >
          Webinar
        </button>
        <button
          className={`grow justify-center items-center px-6 pt-2 rounded-r-none text-xl w-[150px] h-[40px] ${
            filterType === 'Workshop' ? 'bg-white' : 'bg-violet-900'
          }`}
          onClick={() => setFilterType('Workshop')}
        >
          Workshop
        </button>
        <button
          className={`grow justify-center items-center px-6 pt-2 text-xl rounded-r-xl w-[150px] h-[40px] ${
            filterType === 'Seminar' ? 'bg-white' : 'bg-violet-900'
          }`}
          onClick={() => setFilterType('Seminar')}
        >
          Seminar
        </button>
      </div>
      <Table columns={columns} data={filteredData} />
      {showPopup && (
        <ViewParticipants participant={selectedParticipant} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default ParticipantsDetails;