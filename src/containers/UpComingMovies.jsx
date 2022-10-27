import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import { GlobalContext } from "../context/context";
import { HorizontalOverflowContainer } from "../pages/Home";
import Loading from "../utils/loadingAnimation";
import { TitleWrapper } from "./PopularMovies";

const UpComingMovies = () => {
  const { upcomingMovies, getUpComingMovies } = useContext(GlobalContext);
  const [typ, setTyp] = useState("movie");

  useEffect(() => {
    getUpComingMovies("movie");
  }, []);

  const handleTypeChange = (type) => {
    getUpComingMovies(type);
  };

  return (
    <UpComingMoviesWrapper>
      <h2>Upcoming</h2>
      <TitleWrapper>
        <Button
          shape="round"
          onClick={() => {
            handleTypeChange("movie");
            setTyp("movie");
          }}
        >
          Movies
        </Button>
        <Button
          shape="round"
          onClick={() => {
            handleTypeChange("tv");
            setTyp("tv");
          }}
        >
          Series
        </Button>
      </TitleWrapper>
      {!upcomingMovies ? (
        <Loading />
      ) : (
        <HorizontalOverflowContainer>
          {upcomingMovies?.results?.map((movie) => (
            <div style={{ display: "inline-block" }}>
              {typ == "movie" ? (
                <MovieCard movie={movie} />
              ) : (
                <SeriesCard series={movie} />
              )}
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
