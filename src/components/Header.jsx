import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Header = ({ userRef, onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <div className="bg-gray-900 text-white h-[4.5rem] flex items-center justify-center">
        <FaGithub size="40" />
        <h2 className="text-xl font-bold ml-4 font-mono">GitHub User Finder</h2>
      </div>
      <div className="flex justify-center items-center bg-gray-900 h-[4rem]">
        <div
          className="flex justify-center items-center text-gray-300 w-full max-w-xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        >
          <div className="bg-gray-950 flex justify-center items-center p-1">
            <FaSquareGithub className="ml-2" />
            <h5 className="ml-2 font-xl mr-3 font-mono font-semibold">Username</h5>
          </div>
          <input
            type="text"
            ref={userRef}
            placeholder="Search username..."
            onKeyPress={handleSearch}
            className="p-1 w-full bg-gray-950 outline-none font-mono pl-4 input-field"
            
          />
        </div>
      </div>
    </>
  );
};

export default Header;
