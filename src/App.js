import React from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import ResearchArea from "./pages/ResearchArea";
import AboutUs from "./pages/AboutUs";
import HealthCare from "./pages/HealthCare";
import Logistics from "./pages/Logistics";
import Agriculture from "./pages/Agriculture";
import AnimalHusbandry from "./pages/AnimalHusbandry";
import InformationTechnology from "./pages/InformationTechnology";
import Insurance from "./pages/Insurance";
import Education from "./pages/Education";
import Notification from "./pages/Notification";
import Project1 from "./pages/ProjectsHealthCare/Project1";
import LogProject1 from "./pages/ProjectsLogistics/LogProject1";
import ProjectIT1 from "./pages/ProjectsIT/ProjectIT1";
import AgrProject1 from "./pages/ProjectsAgriculture/AgrProject1";
import AhProject1 from "./pages/AHProjects/AhProject1";
import InsProject1 from "./pages/InsProjects/InsProject1";
import Login from "./pages/Login";


import AgrProject2 from "./pages/ProjectsAgriculture/AgrProject2";
import AgrProject3 from "./pages/ProjectsAgriculture/AgrProject3";
import AgrProject4 from "./pages/ProjectsAgriculture/AgrProject4";
import AgrProject5 from "./pages/ProjectsAgriculture/AgrProject5";

import AhProject2 from "./pages/AHProjects/AhProject2";
import AhProject3 from "./pages/AHProjects/AhProject3";
import AhProject4 from "./pages/AHProjects/AhProject4";
import AhProject5 from "./pages/AHProjects/AhProject5";


import InsProject2 from "./pages/InsProjects/InsProject2";
import InsProject3 from "./pages/InsProjects/InsProject3";
import InsProject4 from "./pages/InsProjects/InsProject4";
import InsProject5 from "./pages/InsProjects/InsProject5";

import ProjectIT2 from "./pages/ProjectsIT/ProjectIT2";
import ProjectIT3 from "./pages/ProjectsIT/ProjectIT3";
import ProjectIT4 from "./pages/ProjectsIT/ProjectIT4";
import ProjectIT5 from "./pages/ProjectsIT/ProjectIT5";
import ProjectIT6 from "./pages/ProjectsIT/ProjectIT6";
import ProjectIT7 from "./pages/ProjectsIT/ProjectIT7";

import Project2 from "./pages/ProjectsHealthCare/Project2";
import Project3 from "./pages/ProjectsHealthCare/Project3";
import Project4 from "./pages/ProjectsHealthCare/Project4";
import Project5 from "./pages/ProjectsHealthCare/Project5";

import LogProject2 from "./pages/ProjectsLogistics/LogProject2";
import LogProject3 from "./pages/ProjectsLogistics/LogProject3";
import LogProject4 from "./pages/ProjectsLogistics/LogProject4";
import LogProject5 from "./pages/ProjectsLogistics/LogProject5";

import EduProject1 from "./pages/EduProjects.js/EduProject1";
import EduProject2 from "./pages/EduProjects.js/EduProject2";
import EduProject3 from "./pages/EduProjects.js/EduProject3";
import EduProject4 from "./pages/EduProjects.js/EduProject4";
import EduProject5 from "./pages/EduProjects.js/EduProject5";
import EduProject6 from "./pages/EduProjects.js/EduProject6";
import PersonalDetailsForm from "./pages/Enrollment/PersonalDetailsForm";
import AdminHome from "./pages/AdminPanel/AdminPanel/AdminHomepage/AdminHome";
import EnrolledStudents from "./pages/AdminPanel/AdminPanel/StudentManagement/EnrolledStudents";
import QualifiedStudents from "./pages/AdminPanel/AdminPanel/StudentManagement/QualifiedStudents";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AllState from "./pages/AdminPanel/Area Management/State Master/AllState";
import UpdateState from "./pages/AdminPanel/Area Management/State Master/UpdateState";
import AllCity from "./pages/AdminPanel/Area Management/City Master/AllCity";
import UpdateCity from "./pages/AdminPanel/Area Management/City Master/UpdateCity";
import AllEducation from "./pages/AdminPanel/Area Management/Educational Master/AllEducation";
import UpdateEducation from "./pages/AdminPanel/Area Management/Educational Master/UpdateEducation";
import UserManagement from "./pages/AdminPanel/AdminPanel/UserManagement/UserManagement";
import AddUserMangForm from "./pages/AdminPanel/AdminPanel/UserManagement/AddUserMangForm";
import RoleManagement from "./pages/AdminPanel/AdminPanel/UserManagement/RoleManagement/RoleManagement";
import AccessControlHome from "./pages/adminmasteraccess/AccessControlHome";
import FaqPages from "./pages/FaqPages";



import HrHome from "./pages/HrPanel/Hrdashboard/HrHome";
import Enrolledstudents from "./pages/HrPanel/StudentManagement/Enrolledstudents";
import Qualifiedstudents from "./pages/HrPanel/StudentManagement/Qualifiedstudents";
import RoleManagementHR from "./pages/HrPanel/AdminMaster/RoleManagementHR";
import AllStateHr from "./pages/HrPanel/AdminMaster/MasterModules/AllStateHr";
import UpdateStateHr from "./pages/HrPanel/AdminMaster/MasterModules/UpdateStateHr";
import AllCityHr from "./pages/HrPanel/AdminMaster/MasterModules/CityMaster/AllCityHr";
import UpdateCityHr from "./pages/HrPanel/AdminMaster/MasterModules/CityMaster/UpdateCityHr";
import AllEducationHr from "./pages/HrPanel/AdminMaster/MasterModules/EducationMaster/AllEducationHr";
import UpdateEducationHr from "./pages/HrPanel/AdminMaster/MasterModules/EducationMaster/UpdateEducationHr";

import EventHomePage from "./pages/Events/EventHomePage";
import EventHr from "./pages/HrPanel/EventManagement/EventHR/EventHr";
import ForgotPassword from "./pages/ForgotPassword";
import OtpVerification from "./pages/OtpVerification";
import UpdatePassword from "./pages/UpdatePassword";
import WebinarSpeaker from "./pages/Events/WebinarSpeaker";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isMinimized, setIsMinimized] = useState(false); // State to manage minimization


  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/eduproject1":
        title = "";
        metaDescription = "";
        break;
      case "/researcharea":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-3":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/eduproject1" element={<EduProject1 />} />
        <Route path="/researcharea" element={<ResearchArea />} />
        <Route path="/education" element={<Education />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="faq_page1" element={<FaqPages />} />
        <Route path="/healthcare" element={<HealthCare />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/animalhusbandry" element={<AnimalHusbandry />} />
        <Route
          path="/informationtechnology"
          element={<InformationTechnology />}
        />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/logproject1" element={<LogProject1 />} />
        <Route path="/projectit1" element={<ProjectIT1 />} />
        <Route path="agrproject1" element={<AgrProject1 />} />
        <Route path="ahproject1" element={<AhProject1 />} />
        <Route path="insproject1" element={<InsProject1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />

        <Route path="Agrproject3" element={<AgrProject3 />} />
        <Route path="Agrproject2" element={<AgrProject2 />} />
        <Route path="Agrproject4" element={<AgrProject4 />} />
        <Route path="Agrproject5" element={<AgrProject5 />} />

        <Route path="ahproject2" element={<AhProject2 />} />
        <Route path="ahproject3" element={<AhProject3 />} />
        <Route path="ahproject4" element={<AhProject4 />} />
        <Route path="ahproject5" element={<AhProject5 />} />

        <Route path="insproject2" element={<InsProject2 />} />
        <Route path="insproject3" element={<InsProject3 />} />
        <Route path="insproject4" element={<InsProject4 />} />
        <Route path="insproject5" element={<InsProject5 />} />

        <Route path="/projectit2" element={<ProjectIT2 />} />
        <Route path="/projectit3" element={<ProjectIT3 />} />
        <Route path="/projectit4" element={<ProjectIT4 />} />
        <Route path="/projectit5" element={<ProjectIT5 />} />
        <Route path="/projectit6" element={<ProjectIT6 />} />
        <Route path="/projectit7" element={<ProjectIT7 />} />

        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Project5 />} />

        <Route path="/logproject2" element={<LogProject2 />} />
        <Route path="/logproject3" element={<LogProject3 />} />
        <Route path="/logproject4" element={<LogProject4 />} />
        <Route path="/logproject5" element={<LogProject5 />} />

        <Route path="/eduproject2" element={<EduProject2 />} />
        <Route path="/eduproject3" element={<EduProject3 />} />
        <Route path="/eduproject4" element={<EduProject4 />} />
        <Route path="/eduproject5" element={<EduProject5 />} />
        <Route path="/eduproject6" element={<EduProject6 />} />
        <Route path="/enrollment_form" element={<PersonalDetailsForm />} />

        <Route path="/Adminhome" element={<AdminHome />} />
        <Route path="/enrolled-students" element={<EnrolledStudents />} />
        <Route path="/qualified-students" element={<QualifiedStudents />} />
        <Route path='allState' element={<AllState />} />
        <Route path='updateState/:stateId' element={<UpdateState />} />
        <Route path='allCity' element={<AllCity />} />
        <Route path='updateCity/:cityId' element={<UpdateCity />} />
        <Route path='allEducation' element={<AllEducation />} />
        <Route path='updateEducation/:degreeId' element={<UpdateEducation />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/AddUserMangForm" element={<AddUserMangForm />} />
        <Route path="/roleManagement" element={<RoleManagement />} />
        <Route path="accessControl" element={<AccessControlHome />} />


        <Route path="/hrDashboard" element={<HrHome />} />
        <Route path="/enrolledstudents" element={<Enrolledstudents />} />
        <Route path="/qualifiedstudents" element={<Qualifiedstudents />} />
        <Route path="/RoleManagementHR" element={<RoleManagementHR />} />
        <Route path='/allStateHR' element={<AllStateHr />} />
        <Route path="/updateStateHR" element={<UpdateStateHr />} />
        <Route path="/allCityHR" element={<AllCityHr />} />
        <Route path="/updateCityHR" element={<UpdateCityHr />} />
        <Route path="/allEducationHR" element={<AllEducationHr />} />
        <Route path="/updateEducationHR" element={<UpdateEducationHr />} />
        <Route path="/eventmanagementHR" element={<EventHr />} />

        <Route path="/events" element={<EventHomePage />} />
        <Route path="/webinarSpeaker/:eventId" element={<WebinarSpeaker />} />

      </Routes>



    </div>
  );
}
export default App;
