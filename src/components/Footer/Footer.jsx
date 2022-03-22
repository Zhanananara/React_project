import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div
          style={{
            color: "white",
            border: "3px solid #0f0c29",
            width: "100%",
            height: "100px",

            fontSize: "30px",
            margin: "10px auto",
            padding: "20px",
          }}
        >
          © React Bootstrap{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
