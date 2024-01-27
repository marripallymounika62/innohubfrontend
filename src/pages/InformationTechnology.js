import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const InformationTechnology = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onResearchAreaTextClick = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/projectit1");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/researcharea");
  }, [navigate]);

  const onCareersTextClick = useCallback(() => {
    navigate("/informationtechnology");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray h-[2710px] overflow-hidden text-left text-xl text-cold-grey-white font-poppins">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90px] overflow-hidden">
        <img
          className="absolute h-[37.56%] top-[31.22%] bottom-[31.22%] left-[calc(50%_-_596.2px)] max-h-full w-[228.4px] cursor-pointer"
          alt=""
          src="/group-1.svg"
          onClick={onGroupClick}
        />
        <div className="absolute top-[30px] left-[calc(50%_-_111px)] w-[694px] flex flex-row items-center justify-between">
          <div
            className="relative capitalize font-medium cursor-pointer"
            onClick={onResearchAreaTextClick}
          >
            Research area
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
           // onClick={onProjectsTextClick}
          >
            Collabrations
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
           // onClick={onProjectsTextClick}
          >
            Blogs
          </div>
          <div
            className="relative capitalize font-medium cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            About us
          </div>
          <div className="w-[141px] relative rounded-xl bg-cold-grey-white h-10 overflow-hidden shrink-0 text-5xl text-blue">
            <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_44px)] capitalize font-semibold">
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[90px] right-[0px] left-[0px] [background:linear-gradient(180deg,_#09011a,_rgba(105,_63,_196,_0.57)_43%,_rgba(163,_134,_223,_0)_91%)] h-[466px] overflow-hidden text-29xl">
        <div className="absolute top-[111px] left-[910px] rounded-381xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(120,_100,_161,_0.53)_26.5%,_#1c054e_39.88%,_rgba(223,_208,_255,_0))] w-[827px] h-[826px] overflow-hidden hidden" />
        <div className="absolute top-[181px] left-[980.5px] rounded-381xl bg-color w-[686px] h-[686px] overflow-hidden hidden" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_721.4px)] w-[1442.8px] h-[375.6px] object-cover"
          alt=""
          src="/artboard-44x-1@2x.png"
        />
        <b className="absolute top-[293.6px] left-[calc(52%_-_624.1px)] capitalize">
        InformationTechnology
        </b>
      </div>
      <div className="absolute w-full top-[456px] right-[0px] left-[0px] h-[394px] overflow-hidden text-13xl">
        {/* <div className="absolute top-[31.6px] left-[calc(50%_-_599.9px)] w-[1199.7px] h-[330.8px]">
          <b className="absolute top-[0px] left-[calc(50%_-_599.55px)] capitalize">
            
          </b> */}
          <div className="absolute top-[69.8px] left-[calc(50%_-_599.85px)] text-base capitalize text-justify inline-block w-[1199.7px] h-[261px]">
          Leveraging artificial intelligence (AI) technologies in IT development and maintenance processes aims to streamline tasks, enhance efficiency, and reduce manual effort.
         AI tools are applied across various aspects of the development lifecycle. In requirements analysis and planning, natural language processing (NLP) aids in understanding project needs,
        while AI algorithms automate project planning by analysing historical data and dependencies. For code development and review, tools like OpenAI Codex generate code snippets and AI-driven static code analysis automates review processes. 
        In testing, AI algorithms automate test case generation and dynamically adapt test suites, reducing maintenance efforts. Automated bug detection analyses code changes and logs, prioritizing potential issues, with predictive maintenance anticipating problems
         proactively.
      AI extends its impact to deployment and release management through automated deployment processes and predicting the impact of code changes. 
      In infrastructure management, AI analyses system usage patterns for autonomous scaling and predicts server issues for proactive maintenance. Security and compliance benefit from continuous AI-driven security scans and behavioural analysis of anomalies. 
      AI-powered chatbots and automated ticket triage expedite support and issue resolution. Data management involves AI-assisted data cleansing and predictive analytics for system performance insights. 
      Automation extends to documentation generation based on code comments and knowledge extraction from diverse sources. Continuous improvement employs AI-powered analytics to identify bottlenecks, recommend enhancements, and trends.
      Adoption of AI platforms, such as integrated AI development environments (AIDEs) and AI-powered DevOps platforms, seamlessly integrates AI tools into the development lifecycle. Finally, AI-driven learning platforms assist in identifying skill gaps, recommending training, and personalizing learning
       paths for team members.
          </div>
       {/*  </div> */}
      </div>
      <div className="absolute w-full top-[950px] right-[0px] left-[0px] h-[1340px] overflow-hidden text-17xl text-blue">
        <div className="absolute top-[120px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[1111px]">
          <div
            className="absolute top-[0px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <div className="absolute top-[0px] left-[calc(50%_-_597.4px)] w-[551.3px] h-[516.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-gainsboro-200 w-[517.8px] h-[482.9px]" />
            </div>
            <div className="absolute top-[51.1px] left-[calc(50%_-_4.2px)] w-[601.6px] h-[334.6px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[53px]">
                AI-Powered Requirement Analysis for Software Development: A Comparative Study
              </div>
              <div className="absolute top-[253.8px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[150.7px]">
              In the rapidly evolving landscape of software development, this research focuses on the crucial role of accurate and efficient project requirement analysis in ensuring project success. The primary objective is to explore the integration of Artificial Intelligence (AI) in the requirement analysis phase, specifically comparing AI-powered methodologies against traditional approaches.
              </div>
            </div>
          </div>
          <div className="absolute top-[594.6px] left-[calc(50%_-_597.4px)] w-[1194.8px] h-[516.4px] text-8xl">
            <div className="absolute top-[0px] left-[calc(50%_+_46.1px)] w-[551.3px] h-[516.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_275.65px)] rounded-lg bg-blue w-[270.8px] h-[378.3px]" />
              <div className="absolute top-[33.5px] left-[calc(50%_-_242.15px)] rounded-lg bg-gainsboro-200 w-[517.8px] h-[482.9px]" />
            </div>
            <div className="absolute top-[88.9px] left-[calc(50%_-_597.4px)] w-[601.6px] h-[294.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_300.8px)] leading-[140%] capitalize font-semibold inline-block w-[545.8px] h-[106.1px]">
                Automated Code Review with Artificial Intelligence: Improving Code Quality and Development Efficiency
              </div>
              <div className="absolute top-[166.1px] left-[calc(50%_-_300.8px)] text-mini leading-[150%] text-cold-grey-white inline-block w-[601.6px] h-[128.4px]">
                Code Quality and Development Efficiency," seeks to revolutionize software development's code review process by integrating Artificial Intelligence (AI). With a primary goal of enhancing code quality and reducing human-intensive efforts, the project undertakes a thorough investigation into AI algorithms' capabilities for code analysis. It commences with an extensive literature review, exploring successful implementations and challenges in AI-driven code analysis, and evaluating techniques such as static code analysis, machine learning, and natural language processing.
                To assess the effectiveness of AI-powered automated code review against traditional methods, a comparative framework is developed, defining key metrics including code quality improvement, security vulnerability identification, and time efficiency. The research involves the creation and implementation of a prototype tool incorporating selected AI techniques for automated code analysis, suggestion generation, and version control system integration.

                

                

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2290px] left-[calc(50%_-_720px)] bg-blue w-[1440px] h-[420px] text-sm font-roboto">
        <b className="absolute top-[20px] left-[150px] text-17xl uppercase flex text-yellow-50 text-center items-center justify-center w-[202px] h-[68px]">
          Subscribe
        </b>
        <div className="absolute top-[68px] left-[619px] text-base inline-block w-[672px]">{`Subscribe to stay tuned for new web design and latest updates. Let's do it! `}</div>
        <div className="absolute top-[20px] left-[619px] w-[672px] h-10 text-base text-cold-grey-30">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-cold-grey-10 shadow-[0px_6px_12px_-6px_rgba(255,_255,_255,_0.12),_0px_8px_24px_-4px_rgba(255,_255,_255,_0.08)]" />
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
            <div className="absolute w-full top-[-60.53%] left-[0%] capitalize font-medium flex items-center">
              SNIPE TECH PVT LTD #123, 70Th Cross 2Nd Floor, SVA Arcade 5Th
              Block, Rajaji Nagara Bengaluru – 560010
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="absolute top-[277px] left-[1089px] w-[186px] h-6 font-poppins">
          <div className="absolute top-[2px] left-[37px] w-[149px] h-5">
            <div className="absolute top-[-5%] left-[0.67%] capitalize font-medium">
              hr@snipe.co.in
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
        </div>
        <b className="absolute top-[128px] left-[1089px] text-lg">Contact Us</b>
        <div className="absolute top-[317px] left-[1089px] w-44 h-6 font-poppins">
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
          <div className="absolute top-[2px] left-[37px] w-[139px] h-5">
            <div className="absolute top-[-60%] left-[0%] capitalize font-medium">
              <p className="m-0">+91 080-23100098</p>
              <p className="m-0">+91 63635 07858</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[392px] left-[635px] w-[171px] h-4 text-xs">
          <div className="absolute top-[6.25%] left-[0%] font-light">
            © 2021 All Rights Reserved
          </div>
        </div>
        <div className="absolute top-[128px] left-[853px] w-[203px] h-[197px]">
          <b className="absolute top-[0%] left-[0%] text-lg">Company</b>
          <div
            className="absolute top-[26.9%] left-[0%] capitalize font-medium font-poppins cursor-pointer"
            onClick={onAboutUsText2Click}
          >
            Research area
          </div>
          <div
            className="absolute top-[43.15%] left-[0%] font-medium font-poppins cursor-pointer"
            onClick={onCareersTextClick}
          >
            Projects
          </div>
          <div className="absolute top-[59.39%] left-[0%] font-poppins">
            About us
          </div>
          <div className="absolute top-[75.63%] left-[0%]">Collaboration</div>
          <div className="absolute top-[91.88%] left-[0%]">FAQs</div>
        </div>
        <div className="absolute top-[153px] left-[852px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" />
        <div className="absolute top-[153px] left-[1087px] box-border w-[50px] h-0.5 border-t-[2px] border-solid border-yellow-50" />
        <img
          className="absolute h-[8.05%] w-[15.86%] top-[43.1%] right-[75.17%] bottom-[48.86%] left-[8.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-1.svg"
        />
      </div>
    </div>
  );
};

export default InformationTechnology;
