import { useState } from "react";
import "../styles/Banner.css";

const Banner = () => {
  const truuncateDesc = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div className="banner_section">
      <div className="banner_content">
        <h1 className="banner_title"> Moonlight Tale</h1>
        <div className="banner_buttons">
          <button className="play_buttons banner_button"> Play </button>
          <button className="playlist_buttons banner_button">
            {" "}
            My Playlist{" "}
          </button>
        </div>
        <p className="banner_description">
          {truuncateDesc(
            "In the midst of darkness and calamity, a young soul arose... ",
            100
          )}
        </p>
      </div>
    </div>
  );
};

export default Banner;
