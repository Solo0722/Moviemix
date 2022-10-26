import { StarFilled, CalendarFilled } from "@ant-design/icons";
import { Button, Rate } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Banner = ({ trendingMovie }) => {
  return (
    <Link to={`/movies/${trendingMovie.id}`}>
      <BannerItemWrapper
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.5) 80%),url(${
            "https://image.tmdb.org/t/p/w1280/" + trendingMovie.backdrop_path
          })`,
        }}
      >
        <h1>{trendingMovie.title}</h1>
        <Button
          type="text"
          icon={<CalendarFilled style={{ marginRight: "10px" }} />}
        >
          {moment(trendingMovie.release_date).format("MMMM D, YYYY")}
        </Button>
        <Button
          type="text"
          icon={<StarFilled style={{ color: "gold", marginRight: "10px" }} />}
        >
          {trendingMovie.vote_average}
        </Button>
      </BannerItemWrapper>
    </Link>
  );
};

const BannerItemWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;

  p {
    color: #fff;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export default Banner;
