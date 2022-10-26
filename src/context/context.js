import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Alert, message } from "antd";
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
  const [genres, setGenres] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [personDetails, setPersonDetails] = useState(null);

  useEffect(() => {
    !window.navigator.onLine &&
      message.info("Please go online to use moviemix!");
  }, []);

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
    try {
      const { data } = await axios.get(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
      );
      setGenres(data);
    } catch (error) {
      console.log(error);
      setGenres(null);
    }
  };

  const getMoviesBasedOnGenre = async (genreId, pageNumber) => {
    try {
      if (!genreId || genreId === "" || genreId == undefined) {
        const { data } = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${pageNumber}`
        );
        setMovies(data);
      } else {
        const { data } = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${pageNumber}`
        );
        setMovies(data);
      }
    } catch (error) {
      console.log(error);
      setMovies(null);
    }
  };

  const searchMovies = async (searchWord, searchType) => {
    try {
      if (!searchWord && !searchType) {
        const { data } = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}`
        );
        setSearchResults(data);
      } else if (!searchType) {
        const { data } = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchWord}`
        );
        setSearchResults(data);
      } else {
        const { data } = await axios.get(
          `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&query=${searchWord}`
        );
        setSearchResults(data);
      }
    } catch (error) {
      console.log(error);
      setSearchResults(null);
    }
  };

  const getPersonDetails = async (personId) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/person/${personId}?api_key=${API_KEY}`
      );
      setPersonDetails(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setPersonDetails(null);
    }
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
        genres,
        movies,
        searchTerm,
        setSearchTerm,
        searchResults,
        personDetails,

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
        fetchListOfGenres,
        getMoviesBasedOnGenre,
        searchMovies,
        getPersonDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
