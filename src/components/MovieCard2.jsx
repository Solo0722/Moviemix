import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { StarFilled, PlusCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MovieCard2 = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCardWrapper
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.7) 80%),url(${
            "https://image.tmdb.org/t/p/w342/" + movie.poster_path
          })`,
        }}
      >
        <p>{movie.title}</p>
        <Button type="dashed" block icon={<PlusCircleFilled />}>
          Add to watchlist
        </Button>
      </MovieCardWrapper>
    </Link>
  );
};

const MovieCardWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #222;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
  padding: 15px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  p {
    font-size: 17px;
    color: #fff;
  }
`;

export default MovieCard2;
