import { useEffect } from "react";
import { Element } from "react-scroll";

import laptopimg from "../imgs/goran-ivos-iOykDIkZLQw-unsplash.jpg";
import prone from "../imgs/skillbridge.png"
import pron2 from "../imgs/Screenshot (104).png"
import pron3 from "../imgs/Screenshot (97).png"


import { LuLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export const SePage = () => {
  useEffect(() => {
    const observers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show2r");
        } else {
          entry.target.classList.remove("show2r");
        }
      });
    });

    document.querySelectorAll(".text2r").forEach((el) => observers.observe(el));
  }, []);



  return (
    <section  className=" flex flex-col  w-screen px-40    dark:text-text-color text-black">
      {/* Summary Section */}
      <div className="max-w-4xl justify-center items-center md:flex md:flex-row flex-col md:h-screen gap-10 mx-auto  md:mb-10">
        <Element name="About"></Element>
        <img className="w-80  h-60 mb-5 md:mb-0" src={laptopimg} alt="" />
        <div className=" md:w-1/2 texts w-full ">
          <h1 className="text-green-400 text-sm text-center font-bold">about me </h1>
          <h1 className="text-black dark:text-text-color   text-xl font-extrabold font-mono ">Building Things, Learning Constantly, Growing Every Day </h1>
          <p className=" break-words  dark:text-secondary-text-color ">I'm Mohammad Muzammil – a self-driven developer who enjoys building web, mobile, and AI-powered applications. I work with MERN Stack, React Native, Python, FastAPI, LangChain, and LangGraph to create clean, responsive, and practical solutions. I love turning ideas into real-world projects and continuously learning new technologies along the way</p>
        </div>
      </div>

      {/* Projects Section */}
       <Element name="Projects" className="pt-24 scroll-mt-24">

  <h1 className="text-gray-800 text-3xl font-bold dark:text-text-color mb-12 ">
          Projects  
        </h1>
      <div className="w-[100%] flex-col gap-50  flex  items-center">



      

        {/* Project 1 */}
        <div className=" h-80  w-full gap-5 mb-16 md:grid md:grid-cols-5   ">

          <div className=" relative h-full border-2 rounded-2xl border-gray-50  col-span-3">

 <iframe
      src="https://classattend-mac-fm.onrender.com/"
      title="Class Attendance System"
      className="w-[125%] h-[125%] origin-top-left border-0"
      style={{
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    />  
     <div className=" flex rounded-2xl gap-3  absolute bottom-1 right-1 w-fit h-fit bg-white/10 backdrop-blur-md px-2 py-0   ">

<a href="https://github.com/muzammil124460/Class-Attendance-Management-System" className="hover:px-3 duration-75 py-1 cursor-pointer  ">
  <FaGithub className="size-5"/>
</a>
  
<a href="https://classattend-mac-fm.onrender.com/" className="hover:px-3 duration-75 py-1 cursor-pointer  ">
  <LuLink className="size-5"/>
</a>
    </div>
   
          </div>

          <div className="col-span-2 flex flex-col justify-around">
<h1 className=" font-bold font-mono text-2xl">Class Attendance Management System</h1>

<h2 className="text-orange-400">Smart & Digital Attendance Management</h2>

<p className="
text-gray-600
text-sm leading-6 break-words">A full-stack web application designed to 
  manage student attendance digitally. Teachers
   can mark and manage attendance, students can 
   view their attendance records, and HODs can monitor
    overall attendance. The system provides role-based authentication,
     dashboards, attendance reports, and a responsive user interface. Built with React.js, 
     Tailwind CSS, Node.js, Express.js, MySQL, and Redux Toolkit.</p>

          </div>
 
 
        </div>

        {/* Project 2 */}


         <div className=" h-80  w-full gap-5 mb-16 md:grid md:grid-cols-5   ">
 <div className="col-span-2 flex flex-col justify-around">
<h1 className=" font-bold font-mono text-2xl">Appointly </h1>

<h2 className="text-cyan-400">AI Hospital Appointment Assistant</h2>

<p className="
text-gray-600
text-sm leading-6 break-words">
  Appointly is an AI-powered chatbot that helps users
   find hospital information and book doctor appointments 
   through natural language conversations. It uses LangChain,
    LangGraph, RAG, and Google Search to provide relevant information,
     check doctor availability, and handle appointment booking.
      The system also includes secure authentication and database 
      integration for managing appointments..</p>

          </div>
          <div className=" relative h-full border-2 rounded-2xl border-gray-50  col-span-3">

 <iframe
      src="https://appointly-frontend.onrender.com/"
      title="Class Attendance System"
      className="w-[125%] h-[125%] origin-top-left border-0"
      style={{
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    />  
    <div className=" flex rounded-2xl gap-3  absolute bottom-1 right-1 w-fit h-fit bg-white/10 backdrop-blur-md px-2 py-0   ">

<a href="https://github.com/muzammil124460/Appointly-" className="hover:px-3 duration-75 py-1 cursor-pointer  ">
  <FaGithub className="size-5"/>
</a>
  
<a href="https://appointly-frontend.onrender.com/" className="hover:px-3 duration-75 py-1 cursor-pointer  ">
  <LuLink className="size-5"/>
</a>
    </div>
          </div>

         
 
 
        </div>



        {/* Project 3 */}
        
         <div className=" h-80  w-full gap-5 mb-16 md:grid md:grid-cols-5   ">

          <div className=" overflow relative w-full  h-full border-2 rounded-2xl border-gray-50  col-span-3">

 <iframe
      src="https://skillbridge-v0-2-1cwl.onrender.com/"
      title="Class Attendance System"
      className="w-[125%] h-[125%] origin-top-left border-0"
      style={{
        transform: "scale(0.8)",
        transformOrigin: "top left",
      }}
    />  

    <div className=" flex rounded-2xl gap-3  absolute bottom-1 right-1 w-fit h-fit bg-white/10 backdrop-blur-md px-2 py-0   ">

<a href="https://github.com/muzammil124460/SkillBridge" className="hover:px-3 duration-75 py-1 cursor-pointer  ">
  <FaGithub className="size-5"/>
</a>
  
<a href="https://skillbridge-v0-2-1cwl.onrender.com" className="hover:px-3 duration-75 py-1 cursor-pointer  ">
  <LuLink className="size-5"/>
</a>
    </div>
          </div>

          <div className="col-span-2 flex flex-col justify-around">
<h1 className=" font-bold font-mono text-2xl">SkillBridge</h1>

<h2 className="text-purple-600">AI-Powered Learning & Career Platform</h2>

<p className="
text-gray-600
text-sm leading-6 break-words">
  SkillBridge is a full-stack web application designed
   to help students and job seekers improve their skills
    and find better career opportunities. It provides an
     interactive platform where users can explore learning
      resources, manage their profiles, and connect with
       career-related opportunities. The project is built using
        React.js, Node.js, Express.js, MongoDB, and Tailwind CSS,
         with a responsive and user-friendly interface.</p>

          </div>
 
 
        </div>
      </div>
    </Element>
    </section>
  );
};
