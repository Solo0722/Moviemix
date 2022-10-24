import React from "react";
import styled from "styled-components";

const MovieCard2 = ({ movie }) => {
  return (
    <MovieCardWrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 80%),url(${movie.image})`,
      }}
    ></MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #222;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;

  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default MovieCard2;
