import { Component } from "react";
import PageHeading from "../components/PageHeading/PageHeading";
import { movieTrending } from "../servises/moviesApi";
import MovieList from "../components/MovieList/MovieList";

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const response = await movieTrending().then((resp) => resp.results);
    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <PageHeading text="Trending today" />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomePage;
