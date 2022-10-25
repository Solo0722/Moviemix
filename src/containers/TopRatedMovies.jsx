import React, { useContext,useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import { GlobalContext } from "../context/context";
import { HorizontalOverflowContainer } from "../pages/Home";
import Loading from "../utils/loadingAnimation";

const TopRatedMovies = () => {
  const { topRatedMovies, getTopRatedMovies } = useContext(GlobalContext);
  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <TopRatedMoviesWrapper>
      <h2>Top rated</h2>
      {!topRatedMovies ? (
        <Loading />
      ) : (
        <HorizontalOverflowContainer>
          {topRatedMovies?.results?.map((movie) => (
            <div style={{ display: "inline-block" }}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </HorizontalOverflowContainer>
      )}
    </TopRatedMoviesWrapper>
  );
};

const TopRatedMoviesWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
  margin: 30px 0;
`;

export default TopRatedMovies;
