"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavClick = () => setMobileNav(!mobileNav);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNav(false);
  };

  return (
    <div className="sticky top-0 h-[60px] m-w-7xl mx-auto flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* logo placeholder */}
      <div className="hidden md:flex"></div>
      {/* Social Icons */}
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/saiteja-madha/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/saiteja-madha"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="mailto:contact@saitejamadha.me"
          target="_blank"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <BsFillPersonLinesFill
          className="mx-3"
          cursor="pointer"
          size={25}
          color="gray"
          onClick={() => window.open("https://saitejamadha.me/resume-latest.pdf", "_blank")}
        />
      </motion.div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <button onClick={() => scrollToSection("hero")} className="hover:text-white">
            Home
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")} className="hover:text-white">
            About
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("experience")} className="hover:text-white">
            Experience
          </button>
        </li>
      </ul>
      {/* hamburger*/}
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={handleNavClick}
        className="md:hidden z-10 px-4"
      >
        {!mobileNav ? (
          <FaBars className="hover:fill-white" size={20} cursor="pointer" color="gray" />
        ) : (
          <FaTimes className="hover:fill-white" size={20} cursor="pointer" color="gray" />
        )}
      </motion.div>
      {/* mobile menu*/}
      <ul
        className={
          !mobileNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-white">
          <button onClick={() => scrollToSection("hero")}>Home</button>
        </li>
        <li className="py-6 text-4xl hover:text-white">
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>
        <li className="py-6 text-4xl hover:text-white">
          <button onClick={() => scrollToSection("experience")}>Experience</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;