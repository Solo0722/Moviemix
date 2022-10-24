import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  console.log(data);
  return data;
};

export const getPopularMoviesOnTMDB = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  console.log(data);
  return data;
};

export const getTopRatedMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );
  console.log(data);
  return data;
};

export const getLatestMovie = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/latest?api_key=${API_KEY}`
  );
  console.log(data);
  return data;
};

export const getUpComingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
  );
  console.log(data);
  return data;
};

export const getVideosAboutAMovie = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  console.log(data);
  return data;
};

export const fetchMovieGenres = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieDetail = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const getMoviesBasedOnGenre = async (genreId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

export const getSimilarMovies = async (movieId) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieOrShowReviews = async (reviewId) => {
  const { data } = await axios.get(
    `${BASE_URL}/review/${reviewId}?api_key=${API_KEY}`
  );
  return data;
};
