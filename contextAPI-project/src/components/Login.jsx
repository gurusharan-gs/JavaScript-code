import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(username);

  const { setUser } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>submit</button>
    </div>
  );
};

export default Login;
