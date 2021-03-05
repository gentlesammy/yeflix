import { useState } from "react";
import "./styles/Loginscreen.css";
import logo from "./images/yeflix.svg";
import SignUpScreen from "./SignUpScreen";

const Loginscreen = () => {
  const [signIn, setSignIn] = useState(false);

  const signInAction = () => {
    setSignIn(true);
  };

  return (
    <div className="loginscreen_container">
      <div className="loginscreen_header">
        <img src={logo} alt="logo" className="nav_logo" />
        <button className="loginscreen_signin_btn" onClick={signInAction}>
          Login
        </button>
      </div>
      {signIn ? (
        <SignUpScreen />
      ) : (
        <>
          <div className="loginscreen_body">
            <div className="loginscreen_body_box">
              <h1 className="loginscreen-title">
                Unlimited Films, reviews and Smart suggestions{" "}
              </h1>
              <h3 className="loginscreen-subtitle">
                Best Movie Info guide anywhere
              </h3>
              <p className="loginscreen-desc">
                Stop Guess Watching, get the best movie for you.
              </p>
              <div className="loginscreen_input">
                <input placeholder="Email" type="email" />
                <button
                  className="loginscreen_subscribe_btn"
                  onClick={signInAction}
                >
                  Start Using
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Loginscreen;
