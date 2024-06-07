import React, { useEffect, useRef, useState } from "react";
import UserContainer from "../components/UserContainer";

const User = ({userRef}) => {
  const [users, setUsers] = useState([]);
  const URL = "https://api.github.com/users";

  const userData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      // console.log("Fetched Users: ", data);
      setUsers(data);
    } catch (error) {
      // console.error("Error fetching users: ", error);
    }
  };

  const searchUser = async (username) => {
    try{
        const res = await fetch(URL + `/${username}`)
        const data = await res.json();
        setUsers([data])
    }
    catch(error){
        console.log("error fetching data: ", error);
    }

  }

  useEffect(() => {
    userData();
  }, []);

  return (
    <div>
      <UserContainer users={users} searchUser={searchUser}/>
    </div>
  );
};

export default User;
