import { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

import { GrMail, GrMap } from "react-icons/gr";
import { FcCallback } from "react-icons/fc";
import { IoCall } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GiMailbox } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { CiCircleAlert } from "react-icons/ci";

export const Six = () => {
  const [showName, setName] = useState("");
  const [showEmail, setEmail] = useState("");
  const [showMsg, setMsg] = useState("");

  const Submited = (e) => {
    e.preventDefault();
    console.log(showEmail, showMsg, showName);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: showName,
          message: showMsg,
          to_email: showEmail,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className="w-full min-h-screen dark:bg-bg-dark bg-white flex justify-center items-start py-20 px-4">
      <Element name="Contact" />
      <div className="max-w-4xl w-full h-fit">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-gray-500 text-sm font-bold uppercase">Contact</h1>
          <p className="text-green-400 font-bold text-lg">Let’s connect 🤝 and create</p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
          <div>
<iframe
    src="https://www.google.com/maps?q=19.907466,75.3429449&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    title="My Location"
  ></iframe>
          </div>

          <div className="gap-3">
 {/* Email */}
          <a
            href="mailto:muzammil844641@gmail.com"
            className="flex px-4 py-4 shadow-sm dark:hover:bg-border-color hover:bg-blue-50 items-center gap-4 dark:text-text-color rounded-lg dark:bg-card-color bg-white w-full"
          >
            <GrMail className="size-5" />
            <div className="flex flex-col text-sm">
              <p className="font-bold">Email</p>
              <p>muzammil844641@gmail.com</p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Chhatrapati+Sambhajinagar,+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex px-4 py-4 dark:hover:bg-border-color shadow-sm hover:bg-blue-50 items-center dark:text-text-color gap-4 rounded-lg dark:bg-card-color bg-white w-full"
          >
            <GrMap className="size-5" />
            <div className="flex flex-col text-sm">
              <p className="font-bold">Location</p>
              <p>India, Maharashtra, Aurangabad</p>
            </div>
          </a>

          {/* Phone Number */}
          <p className="flex px-4 py-4 shadow-sm dark:hover:bg-border-color dark:text-text-color hover:bg-blue-50 items-center gap-4 rounded-lg dark:bg-card-color bg-white w-full">
            <MdCall className="size-5" />
            <div className="flex flex-col text-sm">
              <p className="font-bold">Number</p>
              <p>+91 8446411038</p>
            </div>
          </p>

          {/* Availability */}
          <p className="flex px-4 py-4 shadow-sm dark:hover:bg-border-color dark:text-text-color hover:bg-green-50 items-center gap-4 rounded-lg dark:bg-card-color bg-white w-full">
            <CiCircleAlert className="size-5 text-green-700 animate-pulse" />
            <div className="flex flex-col text-sm">
              <p className="font-bold">Available for work</p>
              <p>Open to new opportunities and freelance projects</p>
            </div>
          </p>
          </div>
         
        
          
        </div>

        {/* Social Links */}
        <div className="w-full h-fit mt-10 flex-col flex gap-6">
          <h1 className="text-lg dark:text-secondary-text-color">Follow Me here</h1>
          <div className="flex flex-wrap gap-6">
            <a href="https://github.com/muzammil1244" className="hover:scale-110 transition-transform duration-150 dark:text-text-color text-xl">
              <BsGithub />
            </a>
            <a href="" className="hover:scale-110 transition-transform duration-150 dark:text-text-color text-xl">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/muzammil1244" className="hover:scale-110 transition-transform duration-150 dark:text-text-color text-xl">
              <FaLinkedin />
            </a>
            <a href="https://x.com/MohammadMu47824" className="hover:scale-110 transition-transform duration-150 dark:text-text-color text-xl">
              <FaTwitter />
            </a>
            <a href="mailto:muzammil844641@gmail.com" className="hover:scale-110 transition-transform duration-150 dark:text-text-color text-xl">
              <CgMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
