import { Button, Carousel } from "antd";
import React, { useEffect, useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import styled from "styled-components";
import Banner from "../components/Banner";
import PopularActors from "../containers/PopularActors";
import PopularMovies from "../containers/PopularMovies";
import TopRatedMovies from "../containers/TopRatedMovies";
import UpComingMovies from "../containers/UpComingMovies";
import { GlobalContext } from "../context/context";
import Loading from "../utils/loadingAnimation";

const Home = () => {
  const { trendingMovies, fetchTrendingMovies } = useContext(GlobalContext);
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <HomeWrapper>
      <BannerWrapper>
        <Carousel
          autoplay
          adaptiveHeight
          autoplaySpeed={5000}
          dots={false}
          draggable
          easing="linear"
          effect="fade"
          style={{ width: "100%", marginRight: "0px" }}
        >
          {!trendingMovies ? (
            <Loading />
          ) : (
            trendingMovies?.results?.map((trendingMovie, i) => (
              <Banner key={i} trendingMovie={trendingMovie} />
            ))
          )}
        </Carousel>
      </BannerWrapper>
      <PopularMovies />
      <FromYourWatchlistWrapper>
        <h2>From your watchlist</h2>
        <div>
          <Button size="large" type="text" icon={<FaRegBookmark />} />
          <h3>Sign in to access your watchlist</h3>
          <p>Save shows and movies to keep track of what you want to watch</p>
          <Button type="primary">Sign in to Moviemix</Button>
        </div>
      </FromYourWatchlistWrapper>
      <UpComingMovies />
      <TopRatedMovies />
      <PopularActors />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
`;

const BannerWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  margin-bottom: 30px;
`;

const FromYourWatchlistWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 1rem;
  margin: 30px 0;

  div {
    background: #222;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div h3 {
    font-weight: bold;
  }
`;
const PopularActorsWrapper = styled.div``;

export const HorizontalOverflowContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Home;
