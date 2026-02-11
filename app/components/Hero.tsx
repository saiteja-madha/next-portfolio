"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full h-screen mt-[-60px] bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-primary">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Sai Teja Madha</h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          <span>
            <Typewriter
              words={["Developer", "Freelancer", "Software Engineer Graduate"]}
              loop={true}
              cursor
              cursorColor="#A02271"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </span>
        </h2>
        <p className="text-[#8892b0] py-5 max-w-[700px]">
          Currently, focused on exploring new technologies and developing software solutions, quick hacks.
        </p>
        <div>
          <a
            href="#experience"
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-primary hover:border-secondary w-fit"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;