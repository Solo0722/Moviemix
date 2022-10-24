import { Button, Carousel } from "antd";
import React, { useEffect } from "react";
import { FaRegBookmark } from "react-icons/fa";
import styled from "styled-components";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import MovieCard2 from "../components/MovieCard2";

const movies = [
  {
    name: "Black Adam",
    image: "/assets/images/macbook.jpg",
    rating: 8.6,
  },
  {
    name: "Black Adam",
    image: "/assets/images/dell.jpg",
    rating: 8.6,
  },
  {
    name: "Black Adam",
    image: "/assets/images/dell2.jpg",
    rating: 8.6,
  },
  {
    name: "Black Adam",
    image: "/assets/images/iphone13.jpg",
    rating: 8.6,
  },
  {
    name: "Black Adam",
    image: "/assets/images/macbook2.jpg",
    rating: 8.6,
  },
  {
    name: "Black Adam",
    image: "/assets/images/macbook.jpg",
    rating: 8.6,
  },
];

const banner_items = [
  {
    name: "Macbook Pro",
    brand: "Apple",
    price: "$2,999.99",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
    image: "/assets/images/macbook.jpg",
  },
  {
    name: "Dell Core I7",
    brand: "Dell",
    price: "$1,349.99",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
    image: "/assets/images/dell.jpg",
  },
  {
    name: "Macbook 8",
    brand: "Apple",
    price: "$1,499.99",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
    image: "/assets/images/macbook2.jpg",
  },
  {
    name: "Dell Core I5",
    brand: "Dell",
    price: "$1,249.99",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
    image: "/assets/images/dell2.jpg",
  },

  {
    name: "Iphone 13",
    brand: "Apple",
    price: "$1,049.99",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit!",
    image: "/assets/images/iphone13.jpg",
  },
];

const Home = () => {
  // useEffect(() => {
  //   fetchTrendingMovies();
  // }, []);

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
          {banner_items.map((banner_item, i) => (
            <Banner key={i} banner_item={banner_item} />
          ))}
        </Carousel>
      </BannerWrapper>

      <TrendingMoviesWrapper>
        <h2>Fan favorites</h2>
        <HorizontalOverflowContainer>
          {movies.map((movie) => (
            <div style={{ display: "inline-block" }}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </HorizontalOverflowContainer>
      </TrendingMoviesWrapper>
      <FromYourWatchlistWrapper>
        <h2>From your watchlist</h2>
        <div>
          <Button size="large" type="text" icon={<FaRegBookmark />} />
          <h3>Sign in to access your watchlist</h3>
          <p>Save shows and movies to keep track of what you want to watch</p>
          <Button type="primary">Sign in to Moviemix</Button>
        </div>
      </FromYourWatchlistWrapper>
      <TrendingMoviesWrapper>
        <h2>Trending today</h2>
        <HorizontalOverflowContainer>
          {movies.map((movie) => (
            <div style={{ display: "inline-block" }}>
              <MovieCard2 movie={movie} />
            </div>
          ))}
        </HorizontalOverflowContainer>
      </TrendingMoviesWrapper>

      <TopBoxOfficeWrapper></TopBoxOfficeWrapper>
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

const TrendingMoviesWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 0 1rem;
  margin: 30px 0;
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
const TopBoxOfficeWrapper = styled.div``;

const HorizontalOverflowContainer = styled.div`
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
