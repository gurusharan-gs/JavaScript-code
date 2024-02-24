import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1>please login</h1>;
  } else {
    return <h1>Welcome {user.username}</h1>;
  }
};

export default Profile;
