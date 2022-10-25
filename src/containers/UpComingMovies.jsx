import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MovieCard2 from "../components/MovieCard2";
import { GlobalContext } from "../context/context";
import { HorizontalOverflowContainer } from "../pages/Home";
import Loading from "../utils/loadingAnimation";

const UpComingMovies = () => {
  const { upcomingMovies, getUpComingMovies } = useContext(GlobalContext);
  useEffect(() => {
    getUpComingMovies();
  }, []);

  return (
    <UpComingMoviesWrapper>
      <h2>Upcoming</h2>
      {!upcomingMovies ? (
        <Loading />
      ) : (
        <HorizontalOverflowContainer>
          {upcomingMovies?.results?.map((movie) => (
            <div style={{ display: "inline-block" }}>
              <MovieCard2 movie={movie} />
            </div>
          ))}
        </HorizontalOverflowContainer>
      )}
    </UpComingMoviesWrapper>
  );
};

const UpComingMoviesWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
  margin: 30px 0;
`;

export default UpComingMovies;
