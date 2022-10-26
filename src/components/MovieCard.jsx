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
        </ImageWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <h3>{movie.title}</h3>
            <br />
          </TitleWrapper>
          <TitleWrapper>
            <p> {moment(movie.release_date).format("MMMM D, YYYY")} </p>
          </TitleWrapper>
          <ImpressionsWrapper>
            <p>
              <span>
                <StarFilled style={{ color: "gold", marginRight: "10px" }} />
              </span>
              <span>{movie.vote_average}</span>
            </p>
          </ImpressionsWrapper>
        </ContentWrapper>
      </MovieCardWrapper>
    </Link>
  );
};

const MovieCardWrapper = styled.div`
  width: 220px;
  height: 320px;
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
    border-radius: 15px;
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
`;

export default MovieCard;
