import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from "../../../../components/formcomponents/TextField";
import { fetchStateById, updateStateById } from '../../../../redux/actions/action';

const UpdateStateHr = () => {
  const stateDetails = useSelector((state) => state.fetchStateById.stateById);
  console.log("##############", stateDetails);
  const dispatch = useDispatch();
  const { stateId } = useParams();
  console.log("ID from URL:", stateId);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state_name: '',
    creation_date: '',
  });

  const { state_name } = formData;

  useEffect(() => {
    dispatch(fetchStateById(stateId));
  }, [dispatch, stateId]);
  console.log(stateId, "stateId");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const stateData = {
    state_name: formData.state_name,
    creation_date: new Date().toISOString().split('T')[0],
  };
  console.log("stateData: ", stateData);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStateById(stateData, stateId));
    navigate("/allStateHR");
    console.log("formdata", stateData);
  }; 

  const selectedState = stateDetails[0];
  useEffect(() => {
    if (selectedState) {
      setFormData({
        state_name: selectedState?.state_name,
        creation_date: selectedState?.creation_date,
      });
    }
    console.log("selectedState: ", selectedState);
  }, [selectedState]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#090119]">
      <div className="w-1/2 border border-gray-300 p-10 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold text-white mb-5">Update State</h3>
          {selectedState && (
            <>
              <h6 className="text-white">STATE NAME: {selectedState?.state_name}</h6>
              <button onClick={() => navigate(-1)} className="mt-5 bg-[#532fa0] p-2 rounded">Back</button>
            </>
          )}
          <div className="flex gap-5 mt-5">
            <div sclassName="w-1/3">
              <TextField
                type="text"
                name="state_name"
                value={state_name}
                onChange={handleChange}
                placeholder="State Name"
                required
              />
            </div>
            <div className="w-1/3">
              <TextField
                type="date"
                //name="creation_date"
                value={stateData.creation_date}
                //onChange={handleChange}
                placeholder="Creation Date"
                disabled 
              />
            </div>
          </div>
          <button type="submit" className="bg-[#532fa0] text-white p-2 rounded mt-5">
            Update & Save State
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStateHr;
