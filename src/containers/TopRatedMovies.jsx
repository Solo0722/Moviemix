import { Button } from "antd";
import React, { useContext,useEffect,useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import { GlobalContext } from "../context/context";
import { HorizontalOverflowContainer } from "../pages/Home";
import Loading from "../utils/loadingAnimation";
import { TitleWrapper } from "./PopularMovies";

const TopRatedMovies = () => {
  const { topRatedMovies, getTopRatedMovies } = useContext(GlobalContext);
    const [typ, setTyp] = useState("movie");

  useEffect(() => {
    getTopRatedMovies('movie');
  }, []);

  const handleTypeChange = (type) => {
    getTopRatedMovies(type);
  };

  return (
    <TopRatedMoviesWrapper>
      <h2>Top rated</h2>
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
      {!topRatedMovies ? (
        <Loading />
      ) : (
        <HorizontalOverflowContainer>
          {topRatedMovies?.results?.map((movie) => (
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
