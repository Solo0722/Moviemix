import { Button, Divider, Pagination } from "antd";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import SeriesCard from "../components/SeriesCard";
import { GlobalContext } from "../context/context";
import Loading from "../utils/loadingAnimation";
import { HorizontalOverflowContainer } from "./Home";

const AllSeries = () => {
  const { genres, fetchListOfGenres, movies, getMoviesBasedOnGenre } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchListOfGenres("tv");
    getMoviesBasedOnGenre("tv");
  }, []);

  const [current, setCurrent] = useState(1);
  const [genreKey, setGenreKey] = useState(null);

  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
    getMoviesBasedOnGenre("tv",genreKey, page);
  };

  const selectGenre = (genreId) => {
    setGenreKey(genreId);
    getMoviesBasedOnGenre("tv",genreId, current);
  };

  return (
    <MoviesWrapper>
      {!genres ? (
        <Loading />
      ) : (
        <NavWrapper>
          <HorizontalOverflowContainer>
            {genres.genres.map((genre, i) => (
              <div style={{ display: "inline-block" }} key={i}>
                <Button
                  shape="round"
                  style={{ margin: "0px 10px" }}
                  onClick={() => selectGenre(genre.id)}
                >
                  {genre.name}
                </Button>
              </div>
            ))}
          </HorizontalOverflowContainer>
        </NavWrapper>
      )}
      <Divider />
      {!movies ? (
        <Loading />
      ) : (
        <BodyWrapper>
          {movies?.results?.map((movie, i) => (
            <SeriesCard series={movie} key={i} />
          ))}
        </BodyWrapper>
      )}
      <PaginationWrapper>
        <Pagination current={current} onChange={onChange} total={499} />
      </PaginationWrapper>
    </MoviesWrapper>
  );
};

const MoviesWrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export default AllSeries;
