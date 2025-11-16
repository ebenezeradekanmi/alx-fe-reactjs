// src/components/UserProfile.jsx
import React from "react";

const UserProfile = ({ name, email }) => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        color: "#333",
        textAlign: "center",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserProfile;
