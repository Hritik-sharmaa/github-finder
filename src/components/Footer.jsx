import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 h-[4rem] mt-10 text-gray-300">
      <p>Created by </p>&nbsp;
      <FaGithub /> &nbsp;
      <a href="https://github.com/Hritik-sharmaa" className="text-blue-600">Hritik sharma</a>
    </div>
  );
};

export default Footer;
