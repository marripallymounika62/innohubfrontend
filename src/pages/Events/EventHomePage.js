import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import EventSection from "./EventSection";
import UpcomingEvents from "./UpcomingEvents";
import Gallery from "./Gallery";

const EventHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray xl:w-full lg:w-full md:w-full w-full px-0 mx-auto">
      <div className="relative mx-auto pt-5 font-poppins">
        <Header />
        <main className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <EventSection />
          <UpcomingEvents />
          <Gallery />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default EventHomePage;
/*import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const EventHomePage = () => {
  return (
    <div className="relative bg-gray xl:w-full lg:w-[1300px] md:w-[1180px] w-[749px] px-[0px] mx-full">
       
    <div className="absolute flex mx-auto top-0 right-0 left-0 h-[95px] overflow-hidden">
    <Header />
    </div>
      </div>
      

    
  )
}

export default EventHomePage*/
