import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import "./styles/SignUpScreen.css";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    if (password == null || email == null) {
      alert("username and password are required");
    } else if (password.length < 6) {
      alert("password length must be greater than six characters");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (password == null || email == null) {
      alert("username and password are required");
    } else if (password.length < 6) {
      alert("password length must be greater than six characters");
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  return (
    <div className="sign_up_screen">
      <form>
        <h2>Login Here</h2>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="loginaccount" type="submit" onClick={login}>
          Login
        </button>
        <h4>
          New to YEFLIX?{" "}
          <span className="link" onClick={register}>
            SIGN UP NOW
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
