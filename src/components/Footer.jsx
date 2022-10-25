import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import {
  FaFacebook,
  FaInstagram,
  FaPlaystation,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <TopContainer>
        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center" }}
          icon={<AiFillAppstore style={{ marginRight: "10px" }} />}
        >
          Get the Moviemix app
        </Button>
      </TopContainer>
      <BottomContainer>
        <div>
          <Button type="text" icon={<FaTiktok />} />
          <Button type="text" icon={<FaInstagram />} />
          <Button type="text" icon={<FaTwitter />} />
          <Button type="text" icon={<FaYoutube />} />
          <Button type="text" icon={<FaFacebook />} />
        </div>
        <div>
          <Button type="text">Help</Button>
          <Button type="text">Contact us</Button>
          <Button type="text">MoviemixPro</Button>
          <Button type="text">Box office mojo</Button>
        </div>
        <p>
          API by &nbsp;
          <a href="https://themoviedb.org" target={"_blank"}>
            <img
              src="/assets/images/tmdb.svg"
              alt="tmdb-logo"
              width={100}
              height={30}
            />
          </a>
        </p>
        <cite>Developed and designed by OAS &copy; 2022</cite>
      </BottomContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopContainer = styled.div`
  width: 100%;
  background-color: ${colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
`;
const BottomContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;

  button {
    margin: 5px 10px;
  }

  cite,
  p {
    color: rgba(255, 255, 255, 0.4);
    margin-top: 10px;
  }
`;

export default Footer;
