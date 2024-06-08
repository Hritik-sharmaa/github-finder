import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 h-[4rem] text-gray-300 mt-10 font-mono">
      <p>Build and designed by</p>&nbsp;
      <FaGithub /> &nbsp;
      <a href="https://github.com/Hritik-sharmaa" className="text-blue-600">Hritik Sharma</a>
    </div>
  );
};

export default Footer;
