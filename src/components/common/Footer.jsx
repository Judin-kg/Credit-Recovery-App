import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Credit Recovery System | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
