import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, rating, summary, year, poster, genres }) {
  const ratingOutOfFive = Math.round(rating / 2);
  const emptyStars = 5 - ratingOutOfFive;
  let stars = "";
  for (let i = 0; i < ratingOutOfFive; i++) {
    stars = stars + "★";
  }
  for (let i = 0; i < emptyStars; i++) {
    stars = stars + "☆";
  }

  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: { poster, year, title, summary, stars, genres },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h4 className="movie__year">
            {stars} {year}
          </h4>
          <h4 className="movie__genres">
            {genres.map((genre, index) => genre + "  ")}
          </h4>
          <p className="movie__summary">{summary.slice(0, 200) + "..."}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
