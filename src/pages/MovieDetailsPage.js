import { Component } from "react";
import { movieDetails } from "../servises/moviesApi";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import { NavLink, Route } from "react-router-dom";
import styles from "../components/MovieList/MovieList.module.css";
import routes from "../routes";

class MovieDetailsPage extends Component {
  state = {
    genres: "",
    overview: "",
    poster_path: "",
    title: "",
    vote_average: "",
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    try {
      await movieDetails(movieId).then(
        ({
          title,
          poster_path,
          release_date,
          vote_average,
          overview,
          genres,
        }) => {
          if (genres) {
            genres = genres.map((genre) => genre.name).join(", ");
          }
          if (poster_path) {
            poster_path = `https://image.tmdb.org/t/p/w300/${poster_path}`;
          }
          this.setState({
            title,
            poster_path,
            release_date,
            vote_average,
            overview,
            genres,
          });
        }
      );
    } catch (err) {
      throw err;
    }
  }

  clickGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { title, poster_path, release_date, vote_average, overview, genres } =
      this.state;
    const year = new Date(release_date).getFullYear();
    const { match } = this.props;

    return (
      <>
        <button
          className={styles.buttonBack}
          type="button"
          onClick={this.clickGoBack}
        >
          Go Back
        </button>
        <div>
          <img src={poster_path} alt={title} />
          <div>
            <h2 className={styles.cardTitle}>
              {title}/{year}
            </h2>
            <p className={styles.text}>{overview}</p>
            <p className={styles.titleInfo}> User score: {vote_average}</p>
            <h3 className={styles.cardTitle}>Genres</h3>
            <div>{genres}</div>
          </div>
        </div>
        <p className={styles.titleInfo}>Additional information</p>
        <ul>
          <li>
            <NavLink
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: { ...this.props.location.state },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: { ...this.props.location.state },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Route exact path={`${match.path}/cast`} component={Cast} />
        <Route exact path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
