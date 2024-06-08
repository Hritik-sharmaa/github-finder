import React from "react";

const Tabs = ({ type, setType }) => {
  return (
    <>
      <div className="flex pb-4 gap-6 justify-center mt-[8%] mb-6 font-mono">
        <button
          onClick={() => setType("repos")}
          className={`${type === "repos" && "text-blue-500"}`}>
          Repositories
        </button>
        <button
          onClick={() => setType("received_events")}
          className={`${type === "received_events" && "text-blue-500"}`}>
          Activity
        </button>
        <button
          onClick={() => setType("followers")}
          className={`${type === "followers" && "text-blue-500"}`}>
          Followers
        </button>
      </div>
    </>
  );
};

export default Tabs;
