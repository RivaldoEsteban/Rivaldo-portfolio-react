import React from "react";
import "../css/footer.css";
import "./networks";
import Networdks from "./networks";

export default function Footeer() {
  return (
    <footer className="footer-container">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="images/leon.svg" alt="logo" width="50" height="50" />
            <p> Rivaldo Fabio Esteban Gonzalez</p>
          </div>
          <Networdks />
        </div>
      </div>
    </footer>
  );
}
