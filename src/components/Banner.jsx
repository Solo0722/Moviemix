import React from "react";
import styled from "styled-components";

const Banner = ({ banner_item }) => {
  return (
    <BannerItemWrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.8) 80%),url(${banner_item.image})`,
      }}
    >
      {banner_item.name}
    </BannerItemWrapper>
  );
};

const BannerItemWrapper = styled.div`
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    object-fit: cover;
    object-position: center;
  }
`;

export default Banner;
