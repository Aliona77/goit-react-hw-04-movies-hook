import React, { Component } from "react";
import { movieReviews } from "../../servises/moviesApi";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    review: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await movieReviews(movieId);
    this.setState({ review: response.results });
  }
  render() {
    const { review } = this.state;
    return (
      <ul>
        {review.length !== 0 ? (
          review.map((revie) => (
            <li key={revie.id}>
              <h3 className={styles.title}>Author: {revie.author}</h3>
              <p className={styles.text}>{revie.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    );
  }
}
export default Reviews;
