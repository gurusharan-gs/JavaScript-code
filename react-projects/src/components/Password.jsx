import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Password = () => {
  const [password, setPassword] = useState(false);
  const handleClick = () => {
    setPassword(!password);
  };
  return (
    <div className="password">
      <input type={password ? "text" : "password"} placeholder="password" />
      {password ? (
        <FaEyeSlash
          onClick={handleClick}
          style={{ cursor: "pointer", padding: "0px 10px" }}
        />
      ) : (
        <FaEye
          onClick={handleClick}
          style={{ cursor: "pointer", padding: "0px 10px" }}
        />
      )}
    </div>
  );
};

export default Password;
