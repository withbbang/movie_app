import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, summary, poster, year }) {
  return (
    <div>
      <h4>{title}</h4>
      <img alt="poster" src={poster} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
