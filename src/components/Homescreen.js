import React from "react";
import "./styles/Homescreen.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import RowMovies from "./components/rowMovies";
const Homescreen = () => {
  return (
    <div className="homescreen_container">
      {/* navbar section */}
      <Navbar />
      {/* banner  section*/}
      <Banner />

      {/* row  section*/}
      <RowMovies />
    </div>
  );
};

export default Homescreen;
