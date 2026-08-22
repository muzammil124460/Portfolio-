import { useEffect } from "react";
import { Element } from "react-scroll";

import img1 from "../imgs/mongodb.png";
import img2 from "../imgs/express-js-icon.png";
import img3 from "../imgs/react.png";
import img4 from "../imgs/node-js.png";
import img5 from "../imgs/html-icon.png";
import img6 from "../imgs/icons8-tailwind-css-48.png";
import img7 from "../imgs/javascript-programming-language-icon.png";
import s1 from "../imgs/git.png";
import s2 from "../imgs/native.png"
import s3 from "../imgs/postman-icon.png"
import s4 from "../imgs/vs code .png"
import img9 from "../imgs/postman-icon.png";
import img10 from "../imgs/redux-icon.png";
import img11 from "../imgs/langchain.webp"
import img12 from "../imgs/langgraph.png"
import img13 from  "../imgs/python.png"
import img14 from  "../imgs/FastAPI.png"


import { BiBriefcase, BiCalendar, BiCalendarCheck, BiLinkAlt } from "react-icons/bi";
import { MdDeveloperMode, MdDone, MdSubject } from "react-icons/md";
import { SiCloudinary, SiDevpost, SiEducative, SiExoscale, SiGithub, SiHuggingface, SiHyperskill, SiMysql, SiNumpy, SiPandas, SiPostgresql, SiPostman, SiRedux, SiScikitlearn, SiSqlalchemy, SiTypescript } from "react-icons/si";
import { FaBriefcase, FaCode, FaGraduationCap, FaTools } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { HiOutlineBookOpen } from "react-icons/hi";
import { PiGraduationCapThin, PiMicrosoftExcelLogo, PiMicrosoftWordLogo } from "react-icons/pi";
import { FcBarChart, FcExport, FcGraduationCap } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { BsFileExcel } from "react-icons/bs";

export const TPaeg = () => {
  useEffect(() => {
    const observers = new IntersectionObserver((entry) => {
      entry.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show2");
        } else {
          e.target.classList.remove("show2");
        }
      });
    });

    const observerss = new IntersectionObserver((entry) => {
      entry.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show22");
        } else {
          e.target.classList.remove("show22");
        }
      });
    });

    document.querySelectorAll(".text2").forEach((el) => observers.observe(el));
    document.querySelectorAll(".logo").forEach((el) => observerss.observe(el));
  }, []);

  return (
    <section dat-theme='dark' className="w-screen mb-10 md:mb-0 h-fit flex flex-col justify-around items-center dark:bg-bg-dark  bg-white  ">
      
      
      <Element name="Skills">
        <h1 className=" w-full font-bold pt-10 md:text-3xl text-xl  dark:text-text-color text-gray-500   flex  gap-4 "><span className="text-gray-800">Skill</span>  Summary </h1>
    

      

      {/* MERN STACK LOGOS */}
      <div className="w-full md:max-w-4xl mb-10 md:mb-0 mx-auto md:h-screen flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-center py-10 px-4 gap-10">

  {/* Grid of Letters M E R N */}
  <div className="grid md:pl-5 lg:pl-0  grid-cols-2 grid-rows-2 w-full md:w-1/2 gap-5 place-items-center md:col-span-1">
    <div className="flex hover:scale-102 duration-200 shadow-green-300  flex-col gap-2 items-center justify-center w-24 h-24 bg-green-50 shadow-2xl">
      <img src={img1} alt="" className="w-8 h-8" />
      <h1>M</h1>
    </div>

    <div className="flex  hover:scale-102 duration-200 shadow-yellow-300 flex-col gap-2  items-center justify-center w-24 h-24 bg-yellow-50 shadow-2xl">
      <img src={img2} alt="" className="w-8 h-8" />
      <h1>E</h1>
    </div>

    <div className="flex flex-col gap-2 items-center  hover:scale-102 duration-200 shadow-blue-300 justify-center w-24 h-24 bg-blue-50 shadow-2xl">
      <img src={img3} alt="" className="w-8 h-8" />
      <h1>R</h1>
    </div>

    <div className="flex flex-col gap-2 items-center  hover:scale-102 duration-200 shadow-green-400   justify-center w-24 h-24 bg-green-100 shadow-2xl">
      <img src={img4} alt="" className="w-8 h-8" />
      <h1>N</h1>
    </div>
  </div>

  {/* Text Section */}
  <div className="md:col-span-1  flex text2r  flex-col justify-center items-center text-center">
    <h1 className="font-extrabold dark:text-text-color text-xl mb-4">MERN Stack</h1>
    <p className="text-sm  text-black text-secondary-text-color  max-w-md">
      <i>I</i> work with MongoDB, Express.js, React.js, and Node.js.<br />
      And yes, I can say that I will be a pro.<br />
      I focus on clean design and strong backend logic.<br />
      I learn every single day, love solving problems, and always look for new things to improve myself and create better user experiences.
    </p>
  </div>
</div>


      {/* Additional Skills Section */}

      <div className=" max-w-4xl mb-10 md:mb-0  flex md:flex-row gap-6 flex-col-reverse md:justify-around  md:h-screen  items-center  ">
 <div className="  md:px-0 px-2 text2  md:w-1/2 col-span-1  ">
 <h1 className="text-center mb-3 dark:text-text-color font-extrabold"> Frontend & UI Skills </h1>
            <p className="    text-center text-sm dark:text-secondary-text-color text-black ">
    I have experience with Tailwind CSS, JavaScript, and Redux.
I use Tailwind for responsive UI, JavaScript for interactivity, and Redux to manage app state smoothly.

.
      </p>
        </div>
        
        <div className="grid grid-cols-2 grid-rows-2 md:w-1/4 gap-5 place-items-center md:col-span-1">
    <div className="flex hover:scale-102  duration-200 shadow-orange-300 bg-orange-50 flex-col gap-2 items-center justify-center w-24 h-24 bg-greeb-50 shadow-2xl">
      <img src={img5} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102  duration-200 shadow-blue-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-blue-50 shadow-2xl">
      <img src={img6} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102 duration-200  shadow-yellow-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-yellow-50 shadow-2xl">
      <img src={img7} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>

    <div className="flex hover:scale-102 duration-200  shadow-purple-300 flex-col gap-2 items-center justify-center w-24 h-24 bg-purple-100 shadow-2xl">
      <img src={img10} alt="" className="w-8 h-8" />
      <h1></h1>
    </div>
  </div>


        

       
      
      
      </div>

       <div className="w-full md:max-w-4xl mb-10 md:mb-0 mx-auto md:h-screen flex flex-col md:grid md:grid-cols-2 md:items-center md:justify-center py-10 px-4 gap-10">

  {/* Grid of Letters M E R N */}
  <div className="grid md:pl-5 lg:pl-0  grid-cols-2 grid-rows-2 w-full md:w-1/2 gap-5 place-items-center md:col-span-1">
    <div className="flex hover:scale-102 duration-200 shadow-gray-300  flex-col gap-2 items-center justify-center w-24 h-24 bg-gray-200 shadow-2xl">
      <img src={img11} alt="" className="w-8 h-8" />
    </div>

    <div className="flex  hover:scale-102 duration-200 shadow- flex-col gap-2  items-center justify-center w-24 h-24 bg-emerald-950/10 shadow-2xl">
      <img src={img12} alt="" className="w-8 h-8" />
    
    </div>

    <div className="flex flex-col gap-2 items-center  hover:scale-102 duration-200 shadow-2xl  shadow-blue-500/30 justify-center w-24 h-24 bg-yellow-100/20">
      <img src={img13} alt="" className="w-8 h-8" />
    </div>

    <div className="flex flex-col gap-2 items-center  hover:scale-102 duration-200   shadow-blue-600/  justify-center w-24 h-24 bg-teal-500/10 shadow-2xl">
      <img src={img14} alt="" className="w-8 h-8" />
    </div>
  </div>

  {/* Text Section */}
  <div className="md:col-span-1  flex text2r  flex-col justify-center items-center text-center">
    <h1 className="font-extrabold dark:text-text-color text-xl mb-4">GEN AI </h1>
    <p className="text-sm  text-black text-secondary-text-color  max-w-md">
      I have experience with Python, LangChain, LangGraph, and FastAPI for building AI-powered applications and backend APIs. I use these technologies to develop AI agents, RAG systems, and intelligent workflows.
  </p>
  </div>
</div>
    
   {/*  Additional Skills Section */}


  

      <h1 className="my-10 text-gray-500 text-3xl font-bold"><span className="text-gray-800">Additional</span> Skill</h1>

      <div className=" grid grid-rows-2 gap-5 justify-center items-center">

<div className=" flex gap-20">
  <SiTypescript className="size-7 animate-spin hover:text-black text-accent-color"/>
<SiRedux className="size-7 hover:text-black text-purple-600"/>
<SiPostman className="size-7 hover:text-black animate-spin text-orange-600"/>
<SiMysql className="size-10 hover:text-black text-gray-700"/>
<SiPostgresql className="size-7 hover:text-black  text-gray-800"/>
<SiSqlalchemy className="size-10 hover:text-black text-black"/>
<SiHuggingface className="size-7 hover:text-black text-amber-400"/>
</div>

<div className=" flex gap-20">
  <SiGithub className="size-7 hover:text-black text-black"/>
<SiScikitlearn className="size-10 hover:text-black text-orange-400"/>
<SiPandas className="size-7 hover:text-black text-gray-700"/>
<SiNumpy className="size-7 hover:text-black text-blue-500"/>
<PiMicrosoftExcelLogo className="size-7 hover:text-black text-green-600"/>
<PiMicrosoftWordLogo className="size-7 hover:text-black text-blue-600"/>
<SiCloudinary className="size-7 hover:text-black text-blue-600"/>
</div>





      </div>

      </Element>

      {/* Education */}

<Element name="Education">
  <div className="min-h-screen w-full mt-30 flex  justify-center items-start px-4 md:px-8 lg:px-20 py-30">
    <div className="max-w-4xl w-full">

      {/* Heading */}
      <h1 className="font-bold text-3xl md:text-4xl dark:text-text-color text-gray-800 mb-10 flex  items-center gap-3">
        <FcGraduationCap />  Education
      </h1>

      {/* Card Container */}
      <div className="w-full flex flex-col  dark:bg-card-color bg-white  rounded-2xl p-5 gap-6">

        {/* Top Row: Degree and College */}
        <div className="flex flex-col sm:flex-row justify-between gap-6">

          {/* Left Info */}
          <div className="flex flex-col gap-3">
            <h1 className="flex items-center gap-3 text-lg md:text-xl dark:text-text-color">
              Bachelor of Computer Applications (BCA)
              <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-md flex gap-2 justify-center items-center">Passed <MdDone/></span>
            </h1>
            <a href="https://maca.ac.in/"  className="text-base flex items-center  md:text-lg font-serif dark:text-text-color"> <span className=" border-b dark:border-secondary-text-color ">M</span>aulana Azad College <BiLinkAlt className="md:size-5 size-2 "/></a>
          </div>

          {/* Right Info */}
          <div className="flex flex-col items-start sm:items-end text-sm gap-2">
            <h3 className="flex items-center gap-2 dark:text-secondary-text-color">
              <BiCalendar /> 2026
            </h3>
            <p className="dark:text-secondary-text-color">Completed </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed dark:text-text-color">
        Completed BCA with a 7.44 CGPA, ranking among the top 5% students.
         Actively participated in hackathons and worked on various software 
         development and AI-based projects.
        </p>

         <div className="flex flex-col sm:flex-row justify-between gap-6">

          {/* Left Info */}
          <div className="flex flex-col gap-3">
            <h1 className="flex items-center gap-3 text-lg md:text-xl dark:text-text-color">
              Master of Computer Applications (MCA)
              <span className="bg-green-400 text-white text-xs px-2 py-1 rounded-md flex gap-2 justify-center items-center">Current <MdDone/></span>
            </h1>
            <a href="https://rsimamba.com/"  className="text-base flex items-center  md:text-lg font-serif dark:text-text-color">Rajarshi Shahu Institute of Management: Home
 <BiLinkAlt className="md:size-5 size-2 "/></a>
          </div>

          {/* Right Info */}
          <div className="flex flex-col items-start sm:items-end text-sm gap-2">
            <h3 className="flex items-center gap-2 dark:text-secondary-text-color">
              <BiCalendar /> 2026
            </h3>
            <p className="dark:text-secondary-text-color">First Year </p>
          </div>
        </div>

        {/* Subjects */}
        <div className="mt-4">
          <h1 className="flex items-center gap-2 font-serif dark:text-text-color text-lg">
            <HiOutlineBookOpen /> Key Subjects
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm font-mono">
            {[
              "Data Structures",
              "Algorithms",
              "Database Management",
              "Software Engineering",
              "Web Development",
              "Operating Systems"
            ].map((subject, i) => (
              <span key={i} className="px-3 py-1 text-center rounded-2xl bg-blue-50 dark:bg-border-color dark:text-secondary-text-color">
                {subject}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</Element>
  

  {/* Work experience */}

<Element name="Experience">
  <div className="w-screen my-12 flex justify-center items-center px-4 md:px-8 lg:px-20">
    <div className="max-w-4xl w-full">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold dark:text-text-color text-gray-800 flex flex-wrap items-center gap-3">
        Work <span className="text-gray-500">Experience</span>
      </h1>

      {/* Card Container */}
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-full dark:bg-card-color dark:px-6 dark:py-5 p-4 bg-white rounded-2xl shadow flex flex-col gap-6">

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* Left */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xl md:text-2xl font-bold flex items-center gap-3 dark:text-text-color">
                <FaBriefcase className="text-gray-500 animate-bounce" />
                Open to Work 
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2"></span>
              </h1>
              <p className="text-sm dark:text-text-color">Currently Working as a Freelance Developer</p>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              <p className="flex items-center gap-2 text-sm dark:text-secondary-text-color">
                <SlCalender /> Available Now
              </p>
              <span className="text-xs px-3 py-1 rounded-2xl bg-blue-50 dark:bg-border-color text-gray-600 dark:text-secondary-text-color border border-blue-200 dark:border-gray-600">
                Full-time
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm dark:text-secondary-text-color">
         Currently working as a freelance developer, building full-stack web applications and AI-powered solutions for clients. I work with technologies 
         like React.js, Node.js, Python, FastAPI, LangChain, and LangGraph to develop practical and scalable applications.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript"].map((tech, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-2xl bg-blue-50 dark:bg-border-color text-gray-700 dark:text-secondary-text-color">
                {tech}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
</Element>


 



    </section>
  );
};
