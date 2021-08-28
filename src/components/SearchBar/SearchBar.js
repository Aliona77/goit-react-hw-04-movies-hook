import React, { Component } from "react";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.query);

    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          value={this.state.query}
          onChange={this.handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={styles.button} type="submit">
          <span></span>
        </button>
      </form>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
