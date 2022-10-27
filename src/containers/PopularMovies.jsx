import { Button } from "antd";
import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import { GlobalContext } from "../context/context";
import { HorizontalOverflowContainer } from "../pages/Home";
import Loading from "../utils/loadingAnimation";

const PopularMovies = () => {
  const { popularMovies, getPopularMoviesOnTMDB } = useContext(GlobalContext);
  const [typ, setTyp] = useState("movie");

  useEffect(() => {
    getPopularMoviesOnTMDB("movie");
  }, []);

  const handleTypeChange = (type) => {
    getPopularMoviesOnTMDB(type);
  };

  return (
    <PopularMoviesWrapper>
      <h2>Most popular</h2>
      <TitleWrapper>
        <Button shape="round" onClick={() => {
          handleTypeChange("movie");
          setTyp('movie');
        }}>
          Movies
        </Button>
        <Button shape="round" onClick={() => {
          handleTypeChange("tv");
          setTyp('tv');
        }}>
          Series
        </Button>
      </TitleWrapper>
      {!popularMovies ? (
        <Loading />
      ) : (
        <HorizontalOverflowContainer>
          {popularMovies?.results?.map((movie) => (
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
    </PopularMoviesWrapper>
  );
};

const PopularMoviesWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
  margin: 30px 0;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 20px;
  button {
    margin-right: 10px;
  }
`;

export default PopularMovies;
