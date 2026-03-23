import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./SendReminderButton.css";

const SendReminderButton = ({ onClick, disabled = false }) => {
  return (
    <button
      className="send-reminder-btn"
      onClick={onClick}
      disabled={disabled}
    >
      <FaWhatsapp className="icon" />
      Send Reminder
    </button>
  );
};

export default SendReminderButton;
