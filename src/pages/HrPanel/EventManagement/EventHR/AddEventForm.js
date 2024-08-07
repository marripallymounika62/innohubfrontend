import React, { useState } from "react";
import TextField from "../../../../components/formcomponents/TextField";
import { FaFileUpload } from "react-icons/fa";
import TextArea from "../../../../components/formcomponents/TextArea";
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from "../../../../redux/actions/action";

const AddEventForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventPlatform: "",
    topic: "",
    email: "",
    organizerContactNumber: "",
    eventWebsiteUrl: "",
    dateOfEvent: "",
    lastDateOfRegistration: "",
    selectEvent: "",
    speakerName: "",
    organizer: "",
    address: "",
    freePaid: "",
    paidAmount: "",
    aboutEvent: "",
    speakerDetails: "",
  });

  const [selectedMode, setSelectedMode] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(formData)); // Dispatch the action to add the event
    onClose(); // Close the form after submission
  };*/
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = { ...formData };
    if (eventData.freePaid === 'Free') {
      delete eventData.paidAmount;
    }
  
    dispatch(addEvent(eventData)); 
    onClose(); 
  };
  

  return (
    <div className="relative bg-color mt-[600px] w-screen-full md:ml-[-500px] lg:ml-[300px] mr-16 xl:ml-[-50px] rounded-3xl border-4 border-white popup-content grid justify-items-start">
      <div className="self-stretch flex flex-col bg-color items-start justify-start max-w-full text-start text-xl text-black font-poppins rounded-3xl ">
        <form
          onSubmit={handleSubmit}
          className="w-[670px] mx-0 mt-4 m-0 md:mx-0 md:px-3 md:mt-8 lg:mx-0 lg:mt-5 lg:justify-center md:pt-4 lg:pr-24"
        >
          <div className="h-[166px] w-[155px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border">
            <div className="self-stretch mx-2 flex-1 rounded-8xs bg-white overflow-hidden flex flex-col justify-end py-11 pr-0 pl-[19px] relative z-[1] border-[2px] border-solid border-white">
              <label className="relative w-[calc(100% - 19px)] h-[18px] bg-transparent text-gray-100 text-left inline-block min-w-[83px] border-none outline-none font-poppins text-xs">
                Upload your Photo
                <input
                  className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                  type="file"
                  onChange={handleChange}
                  name="upload_photo"
                />
              </label>
              <FaFileUpload className="w-[40px] h-[40px] absolute !m-[0] top-[25px] left-[calc(50%_-_20px)] overflow-hidden shrink-0" />
            </div>
          </div>
          
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
            <TextField
              label="Event Name*"
              name="eventName"
              type="text"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Enter Event Name"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="md:mx-8" >
              <div className="relative text-base-6 font-semibold font-poppins text-white items-start inline-block">
               Select Event 
              </div>

              <div className="self-stretch rounded-[8.08px] bg-whitesmoke flex flex-row items-center justify-between  pb-[11px] pr-4  box-border gap-[20px] max-w-full mq450:flex-wrap">
                <div className="h-[51px] w-[165px] relative rounded-[8.08px] bg-whitesmoke hidden max-w-full" />
                <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[51px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[20px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[270px] md:min-w-[355px]"
                  name="selectEvent"
                  value={formData.selectEvent}
                  onChange={handleChange}
                >
                  <option value="">Select Event</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Conference">Conference</option>
                  <option value="Workshop">Workshop</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
          <TextField
                label="Speaker Name*"
                name="speakerName"
                type="text"
                value={formData.speakerName}
                onChange={handleChange}
                placeholder="Enter Speaker Name"
                required
              />
             <div className="lg:mx-8">
             <TextField
              label="Topic*"
              name="topic"
              type="text"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter Topic"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
              
            </div>
            
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
          <TextField
              label="Organizer*"
              name="organizer"
              type="text"
              value={formData.organizer}
              onChange={handleChange}
              placeholder="Enter Organizer"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="lg:mx-8">
            <TextField
              label="Organizer Contact Number*"
              name="organizerContactNumber"
              type="tel"
              value={formData.organizerContactNumber}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
           </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
            <TextField
              label="Date of Event*"
              name="dateOfEvent"
              type="date"
              value={formData.dateOfEvent}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 lg:w-1/4"
            />
            <div className="lg:mx-8">
              <TextField
                label="Last Date of Registration*"
                name="lastDateOfRegistration"
                type="date"
                value={formData.lastDateOfRegistration}
                onChange={handleChange}
                required
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex flex-col mx-[-20px] pl-6 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[4px_2px]">
                <div className="w-[183px] relative text-base-6 font-semibold font-poppins text-white text-left inline-block">
                  Event Platform
                </div>
                <div className="rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start px-3.5  border-[1px] border-solid border-white">
                  <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[45px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[5px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[270px] md:min-w-[325px] "
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                >
                  <option value="">Select Mode</option>
                  <option value="Male">Online</option>
                  <option value="Female">Offline</option>
                  </select>
              </div>
           
          </div>
            <div className="lg:mx-8">
              <TextField
                label="Event URL/Address*"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                required
                className="w-full md:w-1/2 lg:w-1/4"
              />
            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3 ">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[4px_2px]">
          <div className="w-[183px] relative text-base-6 font-semibold font-poppins text-white text-left inline-block">
                  Select(free/paid)
                </div>
                <div className="rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start px-3.5  border-[1px] border-solid border-white">
                  <select
                  className="w-full [border:none] [outline:none] bg-whitesmoke self-stretch h-[45px] rounded-[8.08px] flex flex-row items-center justify-start pt-3 px-[5px] pb-4 box-border font-poppins text-mini-1 text-color min-w-[270px] md:min-w-[325px] "
                  name="freePaid"
                  value={formData.freePaid}
                  onChange={handleChange}
                >
                  <option value="">Select Mode</option>
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                  </select>
              </div>
            </div>
            <div className="lg:mx-8">
              {/*<TextField
                label="Paid Amount*"
                name="paidAmount"
                type="number"
                value={formData.paidAmount}
                onChange={handleChange}
                placeholder="Enter Amount"
                disabled={formData.freePaid === "Free"}
                className={formData.freePaid === "Free" ? "bg-gray-200 text-gray-500" : ""}

              />*/}
              <TextField
                label="Paid Amount*"
                name="paidAmount"
                type="number"
                value={formData.paidAmount}
                onChange={handleChange}
                placeholder="Enter Amount"
                disabled={formData.freePaid === "Free"}
                className={formData.freePaid === "Free" ? "bg-gray-200 text-gray-500" : ""}
              />

            </div>
          </div>
          <div className="flex flex-col mx-2 lg:flex-row space-y-4 lg:space-y-0 pb-3">
          <TextArea
                //style="width:320px;overflow-wrap: break-word;"
                label="Speaker Details*"
                name="speakerDetails"
                type="text"
                value={formData.speakerDetails}
                onChange={handleChange}
                placeholder="Enter Speaker Details"
                required
                width="325px"
                //className="w-full  lg-[330px]"
              />
           
            <div className=" lg:mx-8 ">
            <TextArea
            width="325px"
              label="Event Details"
              name="aboutEvent"
              type="text"
              value={formData.aboutEvent}
              onChange={handleChange}
              placeholder="Enter Event Details"
              required
              //className="w-full md:w-1/2 lg:w-1/4"
            />
            </div>
          </div>
          <div className="flex justify-center mt-6 pb-5 ">
            <button
              onClick={onClose}
              className="bg-black text-white py-2 px-6 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white py-2 px-8 mx-6 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventForm;