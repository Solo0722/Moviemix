import { Button, Rate } from "antd";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import styled from "styled-components";

const MovieCard = ({ movie }) => {
  return (
    <MovieCardWrapper>
      <ImageWrapper>
        <img src={movie.image} alt="image" />
        <Button type="text" icon={<FaRegBookmark />} />
      </ImageWrapper>
      <ContentWrapper>
        <ImpressionsWrapper>
          <Rate count={1} value={movie.rating} />
          &nbsp;
          <span>{movie.rating}</span>
        </ImpressionsWrapper>
        <TitleWrapper>
          <p>{movie.name}</p>
        </TitleWrapper>
      </ContentWrapper>
    </MovieCardWrapper>
  );
};

const MovieCardWrapper = styled.div`
  width: 270px;
  height: 300px;
  background-color: #222;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;

  display: flex;
  flex-direction: column;

  
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

const ImpressionsWrapper = styled.div``;
const TitleWrapper = styled.div`
  p {
    font-size: 20px;
  }
`;

export default MovieCard;
