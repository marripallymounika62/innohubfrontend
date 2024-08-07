import React from 'react';

function UpcomingEvents() {
  const events = [
    { name: "Conference on Future", technology: "", date: "May 4th" },
    { name: "Webinar on Future", technology: "", date: "May 24th" },
    { name: "Workshop on Future", technology: "", date: "May 30th" },
  ];

  return (
    <section id="upcoming-events" className="my-8 ml-4 md:mr-4 lg:ml-14">
      <h2 className="lg:text-17xl md:text-base-17xl sm:text-13xl font-bold mb-8 text-white">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -ml-2">
        {events.map((event, index) => (
          <div key={index} className="text-white p-4 sm:text-lg md:text-xl lg:text-xl rounded shadow">
            {/*<h3 className="text-xl font-bold">{event.name}</h3>*/}
            <p>{event.name}</p>
            <p>Technology{event.technology}</p>
            <p>{event.date}</p>
            <button className="mt-10 bg-white text-lg md:text-xl lg:text-xl text-black py-3 px-5 font-bold rounded-2xl">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
