import { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import logo from "../images/yeflix.svg";
import "../styles/navbar.css";
const Navbar = () => {
  const [show, setshow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`navbar_section  ${show && "navbar_black"}`}>
      <div className="nav_contents">
        <img src={logo} alt="logo" className="nav_logo" />
        <Avatar className="nav_avatar" />
      </div>
    </div>
  );
};

export default Navbar;
