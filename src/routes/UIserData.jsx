import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Tabs from "../components/Tabs";
import Repos from "../components/Repos";
import Events from "../components/Events";
import UserContainer from "../components/UserContainer";

const UserData = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [infos, setInfos] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const URL = "https://api.github.com/users";

  const getUserData = async () => {
    try {
      const res = await fetch(URL + pathname);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setUser([data]);
    } catch (error) {
      setUser([]);
    }
  };

  const getUserUrl = async () => {
    const res = await fetch(URL + pathname + `/${type}`);
    const data = await res.json();
    setInfos(data);
  };

  useEffect(() => {
    getUserData();
  }, [pathname]);

  useEffect(() => {
    getUserUrl();
  }, [type, pathname]);

  return (
    <>
      <div className="py-5 text-gray-200">
        <button
          className="bg-gray-900 text-gray-200 py-2 px-4 font-medium mx-4 my-4 rounded"
          onClick={() => navigate("/")}>
          Back
        </button>
        {user.length > 0 ? (
          user.map((udata, i) => (
            <div
              className="flex justify-center flex-col md:flex-row items-center md:items-start gap-10 px-4 md:px-0"
              key={i}>
              <img
                src={udata.avatar_url}
                className="w-[350px] rounded border-2 border-gray-600 mt-3 md:mt-0"
                alt={`${udata.login}'s avatar`}
              />
              <div className="text-xl px-3">
                <h1 className="text-3xl font-bold border-b-2 border-blue-500 mb-5">
                  {udata.name}
                </h1>
                <h1 className="mb-2">
                  <span className="font-bold text-blue-500">Login name: </span>{" "}
                  {udata.login}
                </h1>
                <h1 className="mb-2">
                  <span className="font-bold text-blue-500">Followers:</span>{" "}
                  {udata.followers}
                </h1>
                <h1 className="mb-2">
                  <span className="font-bold text-blue-500">Following:</span>{" "}
                  {udata.following}
                </h1>
                <h1 className="mb-2">
                  <span className="font-bold text-blue-500">Repository:</span>{" "}
                  {udata.public_repos}
                </h1>
                <h1>
                  <span className="font-bold text-blue-500">Created on:</span>{" "}
                  {new Date(udata.created_at).toLocaleDateString()}
                </h1>
                <h1 className="mb-5">
                  <span className="font-bold text-blue-500">Location: </span>{" "}
                  {udata.location}
                </h1>
                <a
                  href={udata.html_url}
                  target="_blank"
                  className="bg-gray-900 text-gray-200 py-2 px-4 font-medium rounded">
                  Visit
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>User not found</p>
        )}
        <Tabs type={type} setType={setType} />
      </div>
      {type === "repos" && (
        <div className="text-gray-200 grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto">{infos && <Repos repos={infos} />}</div>
      )}
      {type === "received_events" && (
        <div className="text-gray-200">
          <Events />
        </div>
      )}
      {type === "followers" && (
        <div className="text-gray-200">
          <UserContainer users={infos} />
        </div>
      )}
    </>
  );
};

export default UserData;
