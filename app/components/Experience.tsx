"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

interface Experience {
  title: string;
  company_name: string;
  employment_type: "Full-time" | "Contract" | "Internship";
  icon?: string;
  icon_bg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company_name: "FannieMae",
    employment_type: "Contract",
    icon: "/assets/logo_fnma.png",
    icon_bg: "#FFFFFF",
    date: "Oct 2024 - Current",
    points: [
      "Led client interactions to gather requirements, ensuring alignment with business goals and timely delivery of solutions.",
      "Designed and implemented a microservices architecture, reducing code complexity and enabling independent deployment of services.",
      "Integrated Box API to enable file uploads and downloads, reducing manual intervention by 60% and improving data security.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "W4M.ai",
    employment_type: "Internship",
    icon: "/assets/logo_w4m.png",
    icon_bg: "#FFFFFF",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed scripts using LLMs to match resumes with job postings, enabling personalized job recommendations.",
      "Implemented lazy loading to efficiently fetch and display large datasets, reducing initial page load times.",
      "Implemented asynchronous task queues with Celery and Redis, improving background task performance by 50% and ensuring real-time processing of high-volume requests.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Coforge Limited",
    employment_type: "Full-time",
    icon: "/assets/logo_coforge.png",
    icon_bg: "#0b2343",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed robust RESTful APIs using Flask and Django, leveraging data classes and serializers.",
      "Implemented reliability patterns such as Circuit Breaker and Exponential Backoff with RabbitMQ, reducing downtime and message delivery failures by 40%",
      "Automated AWS functionalities through Lambda functions and Python scripts, significantly reducing manual intervention.",
      "Leveraged Docker for containerization and Kubernetes for orchestration, ensuring reliable, scalable, and consistent testing and deployment across platforms.",
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a2238",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.icon_bg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {experience.icon && (
            <Image
              src={experience.icon}
              alt={experience.company_name}
              width={60}
              height={60}
              className="w-[60%] h-[60%] object-contain"
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[#8892b0] text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name} - {experience.employment_type}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div>
        <p className="sm:text-[18px] text-theme-light text-base text-primary uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-black text-5xl text-center">Work Experience.</h2>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;