import React from "react";

const Profile = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflow: "hidden",
      }}
    >
      <div>
        <img
          style={{ width: "100%", aspectRatio: "3/3", objectFit: "contain" }}
          src={item.image}
          alt="Katherine Johnson"
        />
      </div>

      <h3>{item.name}</h3>
      <p>{item.cuisine}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{item.caloriesPerServing}</p>
        <p
          style={{
            backgroundColor: item.rating > 4 ? "green" : "red",
            padding: "2px 8px",
            borderRadius: "5px",
          }}
        >
          {item.rating}
        </p>
      </div>
    </div>
  );
};

export default Profile;
