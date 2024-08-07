import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../../redux/actions/action';
import { useNavigate } from 'react-router-dom';

function EventSection() {
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.events);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleViewMore = (eventId) => {
    navigate(`/webinarSpeaker/${eventId}`);
  };

  const groupedEvents = events.reduce((acc, event) => {
    const eventDate = new Date(event.dateOfEvent);
    if (!acc[event.selectEvent] || eventDate < new Date(acc[event.selectEvent].dateOfEvent)) {
      acc[event.selectEvent] = event;
    }
    return acc;
  }, {});

  const uniqueEvents = Object.values(groupedEvents).sort((a, b) => new Date(a.dateOfEvent) - new Date(b.dateOfEvent));

  return (
    <section id="events" className="relative my-8">
      <div className="relative h-screen w-screen">
        <img src="Desktop - 3.png" alt="Event background" className="w-full h-full object-cover absolute inset-0 z-0 -ml-10" />
        <div className="relative z-10 text-white py-8 mt-24 flex flex-col items-start sm:justify-left lg:justify-center lg:justify-center h-full ml-20">
          <h2 className="text-17xl md:text-29xl lg:text-29xl font-bold mb-4 mt-20">Event Hub</h2>
          <p className="text-3xl md:text-13xl lg:text-13xl -mb-6">The ultimate solution for organizing</p>
          <p className="text-3xl md:text-13xl lg:text-13xl mb-60">and advertising prosperous events.</p>
        </div>
      </div>
      <div className="w-full text-white p-4 relative z-10 -mt-40">
        <h3 className="text-13xl md:text-29xl lg:text-29xl font-bold ml-12">Events</h3>
        <div className="flex flex-nowrap gap-4 mt-8 px-4 overflow-x-auto">
          {uniqueEvents.slice(0, 4).map(event => (
            <div key={event.id} className="relative bg-white text-black p-4 rounded-3xl shadow-lg border-8 border-color flex flex-col items-center ml-8 -mr-20 w-72 h-140 z-10">
              <h3 className="text-3xl font-bold mb-12">{event.selectEvent}</h3>
              <div className="rounded-full overflow-hidden border-8 border-indigo-600 bg-color w-40 h-40 flex items-center justify-center mb-8">
                <img src={event.imageUrl || "instructor1.jpg"} alt={event.topic} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start mt-12">
                <p className="m-0">Event Name: {event.eventName}</p>
                <p className="m-0">Speaker Name: {event.speakerName}</p>
                <p className="m-0">Bio: {event.speakerDetails}</p>
              </div>
              <button onClick={() => handleViewMore(event.id)} className="mt-10 bg-black text-white py-2.5 px-5 font-bold rounded-3xl mb-12">View More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventSection;
