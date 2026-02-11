import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";

type SocialIconsProps = {
  name: string;
  background: string;
  Icon: IconType;
  url: string;
};

const Icon = ({ name, background, Icon, url }: SocialIconsProps) => {
  return (
    <li
      className={
        "w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-300 " +
        background
      }
    >
      <a
        className="flex justify-between items-center w-full text-gray-300"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
        <Icon size={30} />
      </a>
    </li>
  );
};

const SocialIcons = () => {
  return (
    <div className="fixed hidden lg:flex flex-col top-[35%] left-0">
      <ul>
        <Icon
          name="Linkedin"
          background="bg-blue-600"
          Icon={FaLinkedin}
          url="https://www.linkedin.com/in/saiteja-madha/"
        />
        <Icon
          name="Github"
          background="bg-[#333333]"
          Icon={FaGithub}
          url="https://github.com/saiteja-madha"
        />
        <Icon
          name="Email"
          background="bg-[#6fc2b0]"
          Icon={HiOutlineMail}
          url="mailto:contact@saitejamadha.me"
        />
        <Icon
          name="Resume"
          background="bg-[#565f69]"
          Icon={BsFillPersonLinesFill}
          url="https://saitejamadha.me/resume-latest.pdf"
        />
      </ul>
    </div>
  );
};

export default SocialIcons;