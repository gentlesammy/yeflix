import React from "react";
import "./styles/Homescreen.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import RowMovies from "./components/rowMovies";
import links from "../hooks/links";
import Footer from "./components/footer";
const Homescreen = () => {
  return (
    <div className="homescreen_container">
      {/* navbar section */}
      <Navbar />
      {/* banner  section*/}
      <Banner />

      {/* row  section*/}
      <RowMovies
        title="Netflix Originals"
        fetchUrl={links.fetchNetflixOriginals}
        isLarge={true}
      />
      <RowMovies
        title="Action Movies"
        fetchUrl={links.fetchActionMovies}
        isLarge={true}
      />
      <RowMovies
        title="Comedy Movies"
        fetchUrl={links.fetchComedyMovies}
        isLarge={true}
      />
      <RowMovies
        title="Documentaries"
        fetchUrl={links.fetchDocumentaries}
        isLarge={true}
      />
      <RowMovies
        title="Horror Movies"
        fetchUrl={links.fetchHorrorMovies}
        isLarge={true}
      />
      <RowMovies
        title="Romantic Movies"
        fetchUrl={links.fetchRomanticMovies}
        isLarge={true}
      />
      <RowMovies
        title="Top Rated Movies"
        fetchUrl={links.fetchTopRtaed}
        isLarge={true}
      />
      <RowMovies
        title="Trending Movies"
        fetchUrl={links.fetchTrending}
        isLarge={true}
      />
      <Footer />
    </div>
  );
};

export default Homescreen;
