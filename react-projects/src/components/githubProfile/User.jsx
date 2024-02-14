import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt={name} className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>{`user joined on ${createdDate.getDate()} ${createdDate.toLocaleString(
          "en-us",
          { month: "short" }
        )} ${createdDate.getFullYear()}`}</p>
      </div>

      <div>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
