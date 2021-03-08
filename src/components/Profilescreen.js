import React from "react";
import "./styles/Profilescreen.css";
import Navbar from "./components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./../features/userSlice";
import { auth } from "../firebase/firebase";

const Profilescreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profilescreen_container">
      <Navbar />
      <div className="profilescreen_body">
        <h1 className="profilescreen_title">Edit Profile</h1>
        <div className="profilescreen_info">
          <svg
            className="profilescreen_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="blue"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
              clipRule="evenodd"
            />
          </svg>
          <div className="profilescreen_detail">
            <h3>{user.email}</h3>
            <div className="profilescreen_plans">
              <h4 className="profilescreen_current_plan">
                Plans (Current Plan: Premium)
              </h4>
              <p className="profilescreen_plan_renewal">
                Renewal Date: <span>04/03/2021</span>
              </p>
            </div>
            <button
              className="profilescreen_logout_button"
              onClick={() => {
                auth.signOut();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilescreen;
