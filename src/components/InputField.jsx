import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

const InputField = ({userRef}) => {
  return (
    <div className="flex justify-center items-center bg-gray-900 h-[4rem] ">
      <div className="flex justify-center items-center text-gray-300 border-gray-500 border-[1px] ">
        <div className=" bg-gray-950 flex justify-center items-center p-1 ">
        <FaSquareGithub className="ml-2"/>
        <h5 className="ml-2 font-xl mr-3 font-mono font-semibold " >Username</h5>
        </div>
        <input type="text" ref={userRef} placeholder='Search username...' className="p-1 w-[40rem] bg-gray-950 border-l-[1px] border-gray-500 outline-none font-mono pl-4"/>
      </div>
    </div>
  );
};

export default InputField;
