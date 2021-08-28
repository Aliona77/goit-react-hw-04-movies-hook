import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./MovieList.module.css";
import defaultImg from "../../images/default.jpg";
import routes from "../../routes";

const imageSrc = "https://image.tmdb.org/t/p/original";

const MovieList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `${routes.moviesPage}/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              className={styles.card}
              src={
                movie.poster_path
                  ? `${imageSrc}${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
            <h2 className={styles.cardTitle}>{movie.title || movie.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
