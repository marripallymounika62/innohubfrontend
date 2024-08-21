import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "../components/ScrollingText";
import EmailPopup from "./EmailPopup";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

const HomePage = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='artboard44x1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResearchAreaTextClick = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

   const onLoginClick = useCallback(() => {
    navigate("/Login");
   }, [navigate]);

   const onFAQClick = useCallback(() => {
    navigate("/faq_page1");
   }, [navigate]);

   const [showPopup, setShowPopup] = useState(false);
  
  // Function to handle mouse enter event
  // const onHandleClick = useCallback(() => {
  //   setShowPopup(true);
  // }, []);
  const handleEmailClick = useCallback(() => {
    setShowPopup(true);
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (

  <div className="xl:w-[1362px] relative bg-gray h-[4276px] lg:h-[3420px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins
    w-[1207px] flex flex-col  items-start justify-start  py-0 px-5">
      <div className="absolute w-[calc(100%_-_3px)] top-[0px] right-[1.6px] left-[1.4px] h-[95px] overflow-hidden">
        <ScrollingText />
         <img
          className="absolute h-[80.56%] top-[21%] bottom-[31.22%] left-[calc(48%_-_596.2px)] max-h-full w-[248.4px] cursor-pointer"
          alt=""
          src="/poplogo.svg"
          onClick={onGroupClick}
        /> 
         <div className="absolute top-[40px] left-[calc(50%_-_111px)] w-[694px] flex flex-row items-center justify-between">
          <div
            className="relative capitalize font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 
             Save Changes
           </button>"
            onClick={onResearchAreaTextClick}
          >
            Research area
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300  "
          onClick={onProjectsTextClick}
          >
            Collaborations
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 "
          onClick={onProjectsTextClick}
          >
            Events
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 "
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
          <div className="w-[90px] relative rounded-xl bg-cold-grey-white h-6 overflow-hidden shrink-0 text-2xl text-blue">
            <div className="absolute top-[calc(63%-_18px)] left-[calc(62%-_44px)] capitalize font-semibold cursor-pointer " onClick={onLoginClick}>
              Log In
            </div>
          </div>
        </div> 
       {/* <Header/> 
        <div className="w-[90px] relative rounded-xl bg-cold-grey-white h-6 overflow-hidden shrink-0 text-2xl text-blue ml-[1100px] md:ml-[1100px]">
        <div className="absolute top-[calc(63%-_18px)] left-[calc(62%-_44px)] capitalize font-semibold " 
        onClick={onLoginClick}>
          Log In
        </div>
      </div> */}

      </div>

      <div className="absolute w-[calc(100%-_3px)] top-[90px] right-[1.6px] left-[1.4px] [background:linear-gradient(180deg,#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[711px] overflow-hidden text-29xl">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />

        <img
          className="absolute top-[20px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[493.5px] object-cover object-fit: none;"
          alt=""
          src="/artboard-44x-1@2x.png"
          data-scroll-to="artboard44x1"
        />
        <img
          className="absolute top-[453.6px] left-[calc(50%_-_722.8px)] w-[1442.8px] h-[257.4px] object-contain"
          alt=""
          src="/Artboard 4@4x 3.png"
        />
        <div className="absolute top-[363.6px] left-[calc(52%_-_624.1px)] capitalize  w-[924.2px] h-[191.8px]">
          <p className="m-0 text:29xl lg:text-13xl ">
            <b>Explore the World of Innovation</b>
          </p>
          {/*  <p className="m-0 text-13xl font-medium">{` `}</p> */}
        </div>
        <div className="absolute top-[453.6px] left-[calc(52%_-_624.1px)] capitalize font-medium text-thistle inline-block w-[857.4px] h-[191.8px] text-17xl lg:text-8xl">
          <p className="m-0">Content Creation at InnoHub Research Center</p>
          <p className="m-0 text-5xl">&nbsp;</p>
        </div>
      </div>

      <div className="absolute top-[801px] left-[calc(50%_-_720.5px)] w-[1442.8px] h-[578.8px] text-17xl">
        {/*  <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[578.8px] object-contain"
          alt=""
          src="/artboard-44x-2@2x.png"
        /> */}

        <div className="absolute top-[39.4px] left-[calc(50%_-_602.8px)] w-[1193.9px] h-[495.1px]">
          <b className="absolute top-[0px] left-[calc(50%_-_594.55px)] capitalize inline-block w-[963.2px] h-[80.2px] text-29xl lg:text-17xl ">
            Welcome to InnoHub research center
          </b>
          <div className="absolute top-[80.2px] left-[calc(50%_-_596.95px)] text-17xl lg:text-base w-[1193.9px] h-[414.8px] text-justify">
            <p className="m-0">
              At the InnoHub Research Center, we are at the forefront of pioneering
              research and innovation in key domains that shape the future of
              computing. Our multidisciplinary approach brings together
              brilliant minds to explore the realms of Artificial Intelligence
              (AI), Cybersecurity, Web Applications, Databases, Internet of
              Things (IoT), and Cloud Computing.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Exploring the Frontiers of Technology.</p>
            
            <p className="m-0">
              In the ever-evolving computing landscape, our research center
              stands as a hub for cutting-edge advancements. We are dedicated to
              pushing the boundaries of knowledge and fostering a collaborative
              environment where experts from diverse fields converge to address
              complex challenges.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[1630px] lg:top-[1129.8px] left-[calc(50%_-_719.1px)] w-[1440px] h-[282px] overflow-hidden text-17xl">
        <b className="absolute top-[26.2px] left-[calc(50%_-_598px)] capitalize inline-block w-[567.2px] h-[54px] text-29xl lg:text-17xl">
          Our Key Focus Areas:
        </b>
        <div className="absolute top-[106.4px] left-[calc(50%_-_599.7px)] w-[1197.7px] h-[67.1px] text-17xl lg:text-base">
          <p className="m-0">
            InnoHub RC works in the areas of Research in Education, health care,
            Logistics, Agriculture, Animal husbandry,Insurance, and basic
            science. The technology-driven through the following :
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-5xl">
            <b>&nbsp;</b>
          </p>
        </div>
      </div>
      <div className="absolute top-[1980px] lg:top-[1291.8px] left-[calc(50%_-_719.1px)] w-[1440px] h-[1391px] overflow-hidden text-13xl text-blue">
        <img
          className="absolute top-[53.9px] left-[465.9px] w-[1066.1px] h-[1386.7px] object-contain"
          alt=""
          src="/artboard-44x-4@2x.png"
        />
        <img
          className="absolute top-[3.9px] left-[-175px] w-[1066.1px] h-[1386.7px] object-contain"
          alt=""
          src="/artboard-44x-3@2x.png"
        />
        <div className="absolute top-[73px] left-[767px] lg:w-[546px] h-[1042px] flex lg:flex flex-col items-start justify-between">
          <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
              <b className="absolute top-[6px] left-[22.5px]">{`Cybersecurity `}</b>
            </div>
            <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px] ">
              Fortifying digital landscapes against evolving threats through
              innovative cybersecurity solutions and robust defense mechanisms.
            </div>
            <img
              className="absolute h-[29.02%] w-[18.1%] top-[45.98%] right-[74.84%] bottom-[25%] left-[7.07%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-5.svg"
            />
          </div>
          <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
              <b className="absolute top-[6px] left-[22.5px]">
                Web Applications
              </b>
            </div>
            <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
              Crafting seamless and -centric web experiences through innovative
              applications that harness the latest technologies.
            </div>
            <img
              className="absolute h-[31.72%] w-[18.97%] top-[46.09%] right-[76.98%] bottom-[22.19%] left-[4.05%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-8.svg"
            />
          </div>
          <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top] text-color">
            <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
              <b className="absolute top-[6px] left-[22.5px]">Databases</b>
            </div>
            <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
              Designing scalable and efficient database systems that underpin
              data-driven decision-making and analytics.
            </div>
            <img
              className="absolute h-[38.87%] w-[15.92%] top-[37.93%] right-[76.58%] bottom-[23.2%] left-[7.51%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-6.svg"
            />
          </div>
        </div>
        <div className="absolute top-[262px] left-[122px] h-[1035px] flex lg:flex flex-col items-start justify-between">
          <div className="w-full lg:w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
              <b className="absolute top-[6px] left-[22.5px]">
                {" "}
                Artificial Intelligence (AI)
              </b>
            </div>
            <img
              className="absolute h-[43.59%] w-[20.66%] top-[37.23%] right-[75.22%] bottom-[19.18%] left-[4.12%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-2.svg"
            />
            <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
              Unleashing the power of machine learning and AI to create
              intelligent systems that adapt, learn, and transform industries.
            </div>
          </div>
          <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-16@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
              <b className="absolute top-[6px] left-[22.5px]">
                Internet of Things (IoT)
              </b>
            </div>
            <div className="absolute top-[94.8px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
              Connecting the physical and digital worlds, driving innovation in
              smart technologies for a connected future.
            </div>
            <img
              className="absolute h-[35.59%] w-[18.1%] top-[42.7%] right-[75.77%] bottom-[21.72%] left-[6.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <div className="w-[546px] relative rounded-xl h-64 overflow-hidden shrink-0 bg-[url('/public/frame-17@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute w-[calc(100%_+_19px)] top-[-0.5px] right-[-19px] left-[0px] rounded-t-xl rounded-b-none bg-cold-grey-white shadow-[0px_7px_10px_rgba(0,_0,_0,_0.25)] h-[60px] overflow-hidden">
              <b className="absolute top-[6px] left-[22.5px]">
                Cloud Computing
              </b>
            </div>
            <div className="absolute top-[84.7px] left-[166.6px] text-xl text-cold-grey-white inline-block w-[379.3px]">
              Shaping the future of computing infrastructure, enabling scalable,
              flexible, and reliable solutions in the cloud.
            </div>
            <img
              className="absolute h-[32.7%] w-[18.86%] top-[44.14%] right-[77.01%] bottom-[23.16%] left-[4.12%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-3.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[3292.8px] lg:top-[2700px] left-[calc(50%_-_719.1px)] w-[1440px] h-[575px] overflow-hidden">
        <div className="absolute top-[33.1px] left-[120.3px]  w-[1197.7px] h-[216px]">
          <b className="capitalize inline-block w-[947.2px] h-[54px] text-29xl lg:text-17xl">
            Collaborate, Innovate, Transform:
          </b>

          {/* <div className="overflow-hidden text-17xl ">Collaborate, Innovate, Transform:</div> */}
          <p className="m-0 text-17xl lg:text-base text-justify">
            Whether you are a researcher, industry partner, or enthusiast, InnoHub
            RC welcomes you to join us on this journey of discovery. Explore our
            projects, engage with our expert teams, and be part of the
            transformational impact we strive to create.
          </p>
          <p className="m-0">&nbsp;</p> 
          <p className="m-0 text-13xl lg:text-base">

            Together, Let’s Redefine the Future of Computing!
          </p>
          
          <p className="m-0 text-13xl lg:text-base font-semibold">Mallikarjuna G D</p>
          <p className="m-0  text-13xl lg:text-base">Director, InnoHub Research Center</p>
        </div>
      </div>
 <div className="absolute top-[3857.8px] lg:top-[3000px] left-[calc(50%_-_719.1px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
        <b className="absolute top-[20px] left-[150px] text-17xl uppercase flex text-yellow-50 text-center items-center justify-center w-[202px] h-[68px]">
          Subscribe
        </b>
        <div className="absolute top-[68px] left-[619px] text-base inline-block w-[672px]">{`Subscribe to stay tuned for new web design and latest updates. Let's do it! `}</div>
        <div className="absolute top-[20px] left-[619px] w-[672px] h-10 text-base text-cold-grey-30">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cold-grey-10 shadow-[0px_6px_12px_-6px_rgba(255,255,_255,_0.12),_0px_8px_24px-4px_rgba(255,_255,_255,_0.08)]" />
          <div className="absolute w-[70.86%] top-[30%] left-[2.29%] inline-block">
            Enter your email Address
          </div>
          <div className="absolute h-4/5 w-[26.22%] top-[10%] right-[0.68%] bottom-[10%] left-[73.1%] bg-midnightblue flex flex-row items-center justify-center py-[5px] px-[26px] box-border text-center text-cold-grey-white">
            <div className="relative">Subscribe</div>
          </div>
        </div>
        <div className="absolute top-[272px] left-[221px] text-center">
          Follow us
        </div>
        <div className="absolute top-[296px] left-[166px] w-[170.7px] h-4">
          <img
            className="absolute top-[0.7px] left-[0px] w-2 h-[14.7px]"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[18.7px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0.7px] left-[45.3px] w-5 h-[14.7px]"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[76px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[102.7px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0px] left-[129.3px] w-4 h-4 overflow-hidden"
            alt=""
            src="/social.svg"
          />
          <img
            className="absolute top-[0.7px] left-[156px] w-[14.7px] h-[14.7px] object-cover"
            alt=""
            src="/social@2x.png"
          />
        </div>
        <div className="absolute top-[103px] left-[-1px] box-border w-[1442px] h-0.5 border-t-[2px] border-solid border-cold-grey-white" />
        <div className="absolute top-[383px] left-[148.5px] box-border w-[1143px] h-px border-t-[1px] border-solid border-cold-grey-white" />
        <div className="absolute top-[171px] left-[1089px] w-[234px] h-16 font-poppins">
          <div className="absolute top-[26px] left-[37px] w-[197px] h-[38px]">
            <div className="absolute w-full top-[-65.53%] left-[0%] font-medium flex items-center">
              SNIPE TECH PVT LTD #123, 70Th Cross 2Nd Floor,
              <br />
              SVA Arcade 5Th Block,
              <br />
              Rajaji Nagara,
              <br /> Bengaluru – 560010
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.png"
          />
        </div>
        <div className="absolute top-[277px] left-[1089px] w-[186px] h-6 mt-2 font-poppins"
        onClick={ handleEmailClick }>
          <div className="absolute top-[2px] left-[37px] w-[149px] h-5 pt-1 ">
            <div className="absolute top-[-5%] left-[0.67%] font-medium cursor-pointer">
            snipe.upl@gmail.com
           {/* {showPopup && <EmailPopup
            />} */}
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon1.png"
          />
        </div>
        <b className="absolute top-[128px] left-[1110px] text-lg">Contact Us</b>
        <div className="absolute top-[317px] left-[1089px] w-44 h-6 font-poppins">
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
          <div className="absolute top-[2px] left-[37px] w-[139px] h-5 ">
            <div className="absolute top-[-60%] left-[0%] capitalize font-medium">
              <p className="m-0">+91 080-23100098</p>
              <p className="m-0">+91 63635 07858</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[392px] left-[635px] w-[171px] h-4 text-xs">
          <div className="absolute top-[6.25%] left-[0%] font-light">
            © 2017 All Rights Reserved
          </div>
          {showPopup && <EmailPopup 
      onClose={handleClosePopup} />}
        </div>
        <div className="absolute top-[128px] left-[853px] w-[203px] h-[197px]">
          <b className="absolute top-[0%] left-[0%] text-lg">Company</b>
          <div
            className="absolute top-[26.9%] left-[0%] capitalize font-medium font-poppins cursor-pointer"
            onClick={onResearchAreaTextClick}
          >
            Research area
          </div>
          <div
            className="absolute top-[43.15%] left-[0%] font-medium font-poppins cursor-pointer"
          onClick={onProjectsTextClick}
          >
            Collaborations
          </div>
          <div
            className="absolute top-[59.39%] left-[0%] font-poppins cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
          <div className="absolute top-[75.63%] left-[0%] cursor-pointer"  onClick={onProjectsTextClick}>Blogs</div>
          <div className="absolute top-[91.88%] left-[0%] cursor-pointer" onClick={onFAQClick}>FAQs</div>
        </div>
        {/* <div className="absolute top-[153px] left-[852px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" />
        <div className="absolute top-[153px] left-[1087px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" /> */}
         <img
          className="absolute h-[18.05%] w-[17.86%] top-[31.1%] right-[75.17%] bottom-[48.86%] left-[8.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/poplogo.svg"
        />
      </div> 
     {/*  <div className="w-full absolute top-[3857.8px] lg:top-[3000px] ">
      <Footer/>
      </div> */}
    </div>

  );
};

export default HomePage;