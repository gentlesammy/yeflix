import { logRoles } from "@testing-library/react";
import React from "react";
import logo from "../images/yeflix.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <img src={logo} alt="felix_logo" />
      <p className="footer_app_detail">
        Unlimited Films, reviews and Smart suggestions Best Movie Info guide
        anywhere Stop Guess Watching, get the best movie for you.
      </p>
      <p className="footer_author">
        WITH LOVE FROM{" "}
        <a href="https://samodunlade.herokuapp.com/" target="_new">
          PSALM SAM
        </a>
      </p>
    </div>
  );
};

export default Footer;
