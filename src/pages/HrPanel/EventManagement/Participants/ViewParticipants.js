import React from 'react';

const ViewParticipants = ({ participant, onClose }) => {
    console.log('participant:', participant);
    if (!participant) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-color pl-8 rounded-lg shadow-lg w-full max-w-2xl ml-24 mt-28 border-4 border-white border-solid">
      <h2 className="text-2xl mb-4">Participant Details</h2>
      <div className="grid grid-cols-2">
        <p><strong>Participant Id:</strong> {participant.id}</p>
        <p><strong>First Name:</strong> {participant.firstName}</p>
        <p><strong>Last Name:</strong> {participant.lastName}</p>
        <p><strong>Email:</strong> {participant.email}</p>
        <p><strong>Mobile:</strong> {participant.mobile}</p>
        <p><strong>Profession:</strong> {participant.profession}</p>
        <p><strong>Country:</strong> {participant.country}</p>
        <p><strong>Event:</strong> {participant.event}</p>
        <p><strong>Payment:</strong> {participant.payment}</p>
        <p><strong>Hear About Us:</strong> {participant.heardFrom}</p>
        </div>
        <div className="mt-6 flex justify-end mb-4 mr-4">
          <button onClick={onClose} className="bg-black text-white py-2 px-6 rounded-lg">
            Close
          </button>
        </div>
        </div>
    </div>
  );
};

export default ViewParticipants;