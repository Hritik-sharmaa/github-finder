import React from "react";

const Events = ({ events }) => {
  return (
    <>
      {events.map((event, index) => (
        <div key={index} className="flex gap-x-4 items-center">
          <img src={event.actor?.avatar_url} className="w-16 rounded-full" alt="avatar"/>
          <h1 className="text-gray-200 break-words">
            {event?.actor?.login} {event?.type}
            <br />
            {event?.repo?.name}
            <br/>
            <span>{new Date(event.created_at).toLocaleDateString()}</span>
          </h1>
        </div>
      ))}
    </>
  );
};

export default Events;
