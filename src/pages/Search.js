import { Button, Divider } from "antd";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Searchbar from "../components/Searchbar";
import { GlobalContext } from "../context/context";
import Loading from "../utils/loadingAnimation";

const Search = () => {
  const { searchResults, searchMovies, searchTerm } = useContext(GlobalContext);

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <SearchWrapper>
      <div className="search-box">
        <Searchbar />
      </div>
      <NavWrapper>
        <Button shape="round" style={{ margin: "0px 10px" }}>
          Movies
        </Button>
        <Button shape="round" style={{ margin: "0px 10px" }}>
          TV shows
        </Button>
        <Button shape="round" style={{ margin: "0px 10px" }}>
          People
        </Button>
      </NavWrapper>
      <h2 style={{ textAlign: "center", margin: "15px 0" }}>
        Search results for {searchTerm ? searchTerm : "all movies"}
      </h2>
      <Divider />
      {!searchResults ? (
        <Loading />
      ) : (
        <BodyWrapper>
          {searchResults?.results?.map((movie, i) => (
            <MovieCard movie={movie} key={i} />
          ))}
        </BodyWrapper>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  padding: 1rem;

  .search-box {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .search-box {
      display: block;
    }
  }
`;

const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Search;
