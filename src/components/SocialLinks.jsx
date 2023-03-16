import React from "react";
import { socials } from "../constants";

//icons for socials
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socials.map(({ id, name, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="blank"
              rel="noreferrer"
            >
              {name == "LinkedIn" ? (
                <>
                  LinkedIn
                  <FaLinkedin size={30} />
                </>
              ) : name == "GitHub" ? (
                <>
                  GitHub
                  <FaGithub size={30} />
                </>
              ) : name == "Resume" ? (
                <>
                  Resume
                  <BsFillPersonLinesFill size={30} />
                </>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
