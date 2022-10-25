import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "antd";
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [topRatedMovies, setTopRatedMovies] = useState(null);
  const [popularActors, setPopularActors] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieVideos, setMovieVideos] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  const fetchTrendingMovies = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
      );
      setTrendingMovies(data);
    } catch (error) {
      console.error(error);
      setTrendingMovies(null);
    }
  };

  const getPopularMoviesOnTMDB = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
      );
      setPopularMovies(data);
    } catch (error) {
      console.log(error);
      setPopularMovies(null);
    }
  };

  const getTopRatedMovies = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
      );
      setTopRatedMovies(data);
    } catch (error) {
      console.log(error);
      setTopRatedMovies(null);
    }
  };

  const getUpComingMovies = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
      );
      setUpcomingMovies(data);
    } catch (error) {
      console.log(error);
      setUpcomingMovies(null);
    }
  };

  const getMovieDetails = async (movieId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovieDetails(data);
    } catch (error) {
      console.error(error);
      setMovieDetails(null);
    }
  };
  const getMovieCredits = async (movieId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      setMovieCredits(data);
    } catch (error) {
      console.log(error);
      setMovieCredits(null);
    }
  };

  const getPopularActors = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/person/popular?api_key=${API_KEY}`
      );
      setPopularActors(data);
    } catch (error) {
      console.error(error);
      setPopularActors(null);
    }
  };

  const getVideosAboutAMovie = async (movieId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      setMovieVideos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setMovieVideos(null);
    }
  };

  const getMovieOrShowReviews = async (movieId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      setMovieReviews(data);
    } catch (error) {
      console.log(error);
      setMovieReviews(null);
    }
  };

  const getSimilarMovies = async (movieId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
      );
      setSimilarMovies(data);
    } catch (error) {
      console.log(error);
      setSimilarMovies(null);
    }
  };

  const getRecommendedMovies = async (movieId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
      );
      setRecommendedMovies(data);
    } catch (error) {
      console.log(error);
      setRecommendedMovies(null);
    }
  };

  const fetchListOfGenres = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return data;
  };

  const getMoviesBasedOnGenre = async (genreId) => {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${genreId}?api_key=${API_KEY}`
    );
    return data;
  };

  return (
    <GlobalContext.Provider
      value={{
        trendingMovies,
        popularMovies,
        popularActors,
        upcomingMovies,
        topRatedMovies,
        movieDetails,
        movieCredits,
        movieVideos,
        movieReviews,
        similarMovies,
        recommendedMovies,

        fetchTrendingMovies,
        getUpComingMovies,
        getTopRatedMovies,
        getPopularMoviesOnTMDB,
        getPopularActors,
        getMovieDetails,
        getMovieCredits,
        getVideosAboutAMovie,
        getMovieOrShowReviews,
        getSimilarMovies,
        getRecommendedMovies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
