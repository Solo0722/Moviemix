import React from "react";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";

const Search = () => {
  return (
    <SearchWrapper>
      <div className="search-box">
        <Searchbar />
      </div>
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

export default Search;
