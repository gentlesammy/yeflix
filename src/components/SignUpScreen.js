import React from "react";
import { Link } from "react-router-dom";
import "./styles/SignUpScreen.css";

const SignUpScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign_up_screen">
      <form>
        <h2>Login Here</h2>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button className="loginaccount" type="submit">
          Login
        </button>
        <h4>
          New to YEFLIX? <Link className="link">SIGN UP NOW</Link>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
