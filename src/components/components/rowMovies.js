import { useEffect, useState } from "react";
import axios from "../../hooks/axios";
import "../styles/RowMovies.css";
const imgBaseUrl = "https://image.tmdb.org/t/p/original";
const RowMovies = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row_section">
      <h2>{title} </h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row_poster ${isLarge && "row_posterlarge"}`}
              src={`${imgBaseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RowMovies;
