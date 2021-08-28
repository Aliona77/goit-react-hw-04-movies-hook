import axios from "axios";

const BASE_URl = "https://api.themoviedb.org/3";
const KEY = "f5a3937924711066fc534c3e8274ae15";

const movieTrending = () => {
  return axios
    .get(`${BASE_URl}/trending/all/day?api_key=${KEY}`)
    .then((response) => response.data);
};
const movieSearch = (query) => {
  return axios
    .get(
      `${BASE_URl}/search/movie?&query=${query}&api_key=${KEY}&language=en-US&include_adult=false`
    )
    .then((response) => response.data);
};

const movieDetails = (movieId) => {
  return axios
    .get(`${BASE_URl}/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then((response) => response.data);
};

const movieCredits = (movieId) => {
  return axios
    .get(`${BASE_URl}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    .then((response) => response.data);
};

const movieReviews = (movieId) => {
  return axios
    .get(
      `${BASE_URl}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    )
    .then((response) => response.data);
};

export { movieTrending, movieSearch, movieDetails, movieCredits, movieReviews };
