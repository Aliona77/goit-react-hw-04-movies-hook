import React, { Component } from "react";

import SearchBar from "../components/SearchBar/SearchBar";
import { movieSearch } from "../servises/moviesApi";
import MovieList from "../components/MovieList/MovieList";

class MoviesPage extends Component {
  state = {
    movies: [],
    query: "",
  };
  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      location.search = location.search.replace(/^\?+/, "");
      this.setState({ query: location.search });
    }
  }
  onChangeQuery = (query) => {
    this.setState({
      query: query,
      movies: [],
    });
  };

  componentDidUpdate(_, prevState) {
    const { query } = this.state;
    if (prevState.searchQuery !== query) {
      this.fetchMovie();
    }
    const { location } = this.props;
    location.search = query;
  }
  async fetchMovie() {
    const { query } = this.state;
    movieSearch(query).then((response) => {
      this.setState({ movies: response.results });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onChangeQuery} />
        <MovieList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
