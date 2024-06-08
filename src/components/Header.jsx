import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Header = ({ userRef, onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <div className='bg-gray-900 text-white h-[5rem] flex items-center justify-center font-mono'>
        <FaGithub size="40" /> 
        <h2 className='text-xl font-bold ml-4 font-mono'>GitHub User Finder</h2>
      </div>
      <div className="flex justify-center items-center bg-gray-900 py-2 px-4 h-[5rem]">
        <div className="flex items-center text-gray-300 border-gray-500 border-[1px] w-full max-w-xl">
          <div className="bg-gray-950 flex items-center p-1 w-full">
            <FaSquareGithub className="ml-2" />
            <h5 className="ml-2 font-xl mr-3 font-mono font-semibold">Username</h5>
          </div>
          <input
            type="text"
            ref={userRef}
            placeholder='Search username...'
            onKeyPress={handleSearch}
            className="p-1 w-full bg-gray-950 border-l-[1px] border-gray-500 outline-none font-mono pl-4"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
