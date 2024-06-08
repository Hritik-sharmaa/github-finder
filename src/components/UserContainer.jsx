import React from "react";
import { Link } from "react-router-dom";

const UserContainer = ({ users }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center py-5 mt-5 font-mono">
      {users.map((user, index) => (
        <div
          key={index}
          className="text-white flex flex-col items-center w-[180px] md:w-[200px] p-3 border-2 border-gray-900 rounded-md">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="mt-3 mb-2 rounded-lg"
          />
          <h4 className="text-xl font-mono font-bold">{user.login}</h4>
          <Link to={`/${user.login}`}>
            <span className="text-gray-100 bg-gray-900 my-3 font-semibold block py-1 px-3 rounded-md cursor-pointer transition ease-in hover:bg-black">
              View
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserContainer;
