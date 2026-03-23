import React from "react";
import "./StartCard.css";

const StartCard = ({ title, value, icon, color }) => {
  return (
    <div className={`start-card ${color}`}>
      <div className="start-card-icon">{icon}</div>
      <div className="start-card-content">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StartCard;
