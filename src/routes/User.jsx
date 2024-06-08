import React, { useEffect, useState } from "react";
import UserContainer from "../components/UserContainer";

const User = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      setUsers(Array.isArray(data) ? data : [data]);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUsers([]);
    }
  };

  useEffect(() => {
    const url = searchQuery
      ? `https://api.github.com/users/${encodeURIComponent(searchQuery)}`
      : "https://api.github.com/users";
    fetchUsers(url);
  }, [searchQuery]);

  if (error) {
    return <div className="text-white text-center mt-5">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <UserContainer users={users} />
    </div>
  );
};

export default User;
