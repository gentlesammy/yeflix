import { useState, useEffect } from "react";
import "../styles/Banner.css";
import axios from "../../hooks/axios";
import links from "../../hooks/links";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      const request = await axios.get(links.fetchTrending);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    getMovie();
  }, []);

  console.log(movies);
  const truuncateDesc = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className="banner_section"
      style={{
        background: `linear-gradient(0deg, rgba(12, 1, 7, 0.3), rgba(12, 1, 7, 0.3)), url("https://image.tmdb.org/t/p/original/${
          movies ? movies.backdrop_path : ""
        }")`,
        backgroundSize: "cover !important",
        backgroundPosition: "center center !important",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {" "}
          {movies ? movies.original_title : "Yeflix World"}
        </h1>
        <div className="banner_buttons">
          <button className="play_buttons banner_button"> Play </button>
          <button className="playlist_buttons banner_button">
            {" "}
            My Playlist{" "}
          </button>
        </div>
        <p className="banner_description">
          {truuncateDesc(
            movies
              ? movies.overview
              : "We give you best  of movies that is best for your taste buds, we mean your eye bud!",
            150
          )}
        </p>
      </div>
    </div>
  );
};

export default Banner;
