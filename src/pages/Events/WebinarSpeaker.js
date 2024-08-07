import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventById } from '../../redux/actions/action';
import Header from '../Header';
import Footer from '../Footer';
import RegistrationFormPopup from './RegistrationFormPopup';

const WebinarSpeaker = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.fetchEventById.eventById);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  }, [dispatch, eventId]);

  const handleRegisterClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative bg-gray xl:w-full lg:w-[1300px] md:w-[1180px] w-full px-[0px] mx-auto">
      <Header />
      <div className="absolute top-[95px] right-0 left-0 [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden z-0"></div>
      <div className="relative z-10 px-4 pt-20 text-white lg:px-16">
        <div className="text-5xl md:text-8xl lg:text-17xl font-bold mb-6 mt-20">
          {eventDetails.selectEvent ? `${eventDetails.selectEvent} Speaker` : 'Webinar Speaker'}
        </div>
        <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row -mx-4">
          <div className="w-full lg:w-1/2 order-1">
            <div className="bg-white rounded-lg p-4 w-full lg:w-3/4 h-[300px] md:h-[400px] lg:h-[500px] mx-auto lg:mx-0">
              <img src={eventDetails.imageUrl || "instructor1.jpg"} alt="Speaker Photo" className="w-full h-full object-cover rounded-corner" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center order-2 mt-4 lg:mt-0">
            <div className="flex flex-col justify-start h-full px-4 md:px-8 lg:px-16">
              <div className="text-lg md:text-4xl lg:text-8xl font-bold text-white">{eventDetails.speakerName}</div>
              <p className="text-white text-xs md:text-lg lg:text-xl">
                {eventDetails.speakerDetails}
              </p>
              <p>&nbsp;</p>
              <button
                className="w-full md:w-1/2 lg:w-auto bg-white text-xs md:text-2xl lg:text-3xl text-color italic py-2 px-6 rounded-3xl mt-4 md:mt-8 lg:mt-0 whitespace-nowrap"
                onClick={handleRegisterClick}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-3xl md:text-8xl lg:text-13xl font-bold mb-6">
            {eventDetails.selectEvent ? `About ${eventDetails.selectEvent}` : 'About Webinar'}
          </div>
          <p className="text-xs md:text-base lg:text-base mb-25">{eventDetails.aboutEvent}</p>
        </div>
      </div>
      <Footer />
      {isPopupOpen && <RegistrationFormPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default WebinarSpeaker;
