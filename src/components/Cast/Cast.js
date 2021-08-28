import React, { Component } from "react";
import { movieCredits } from "../../servises/moviesApi";
import PropTypes from "prop-types";
import styles from "./Cast.module.css";
import defaultImg from "../../images/default.jpg";

const imageSrc = "https://image.tmdb.org/t/p/w500";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await movieCredits(movieId);
    this.setState({ cast: response.cast });
  }

  render() {
    const casts = this.state.cast;
    return (
      <ul className={styles.list}>
        {this.state.cast.length !== 0 &&
          casts.map((cast) => (
            <li key={cast.id} className={styles.item}>
              <img
                src={
                  cast.profile_path
                    ? ` ${imageSrc}${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
                className={styles.imgCard}
              />
              <p className={styles.name}>{cast.name}</p>
              <p className={styles.character}>{cast.character}</p>
            </li>
          ))}
      </ul>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
export default Cast;
