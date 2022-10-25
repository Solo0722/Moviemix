import { Button, Rate } from "antd";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import styled from "styled-components";
import { StarFilled, RiseOutlined } from "@ant-design/icons";
import colors from "../utils/colors";
import { Link } from "react-router-dom";
import moment from "moment";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCardWrapper>
        <ImageWrapper>
          <img
            src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path}
            alt="image"
          />
          <Button type="text" icon={<FaRegBookmark />} />
        </ImageWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <p>{movie.title}</p>
            <p> {moment(movie.release_date).format("MMMM D, YYYY")} </p>
          </TitleWrapper>
          <ImpressionsWrapper>
            <Button
              type="text"
              icon={
                <StarFilled style={{ color: "gold", marginRight: "10px" }} />
              }
            >
              {movie.vote_average}
            </Button>
            <Button
              type="text"
              icon={
                <RiseOutlined
                  style={{ color: colors.primary, marginRight: "10px" }}
                />
              }
            >
              {movie.popularity}
            </Button>
          </ImpressionsWrapper>
        </ContentWrapper>
      </MovieCardWrapper>
    </Link>
  );
};

const MovieCardWrapper = styled.div`
  width: 270px;
  height: 320px;
  background-color: #222;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  p {
    color: #fff;
  }
`;

const ImageWrapper = styled.div`
  height: 60%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ContentWrapper = styled.div`
  height: 40%;
  padding: 0.4rem;
`;

const ImpressionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 17px;
    word-wrap: break-word;
  }
`;

export default MovieCard;
