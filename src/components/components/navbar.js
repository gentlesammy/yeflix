import { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import logo from "../images/yeflix.svg";
import "../styles/navbar.css";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const history = useHistory();

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
        <img
          src={logo}
          alt="logo"
          className="nav_logo"
          onClick={() => {
            history.replace("/");
          }}
        />
        <Avatar
          className="nav_avatar"
          onClick={() => {
            history.replace("/profile");
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
