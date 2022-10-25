import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import Drawerbar from "../containers/Drawerbar";
import { Link, useLocation } from "react-router-dom";
import colors from "../utils/colors";

const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarWrapper
      style={{
        display: `${location.pathname == "/auth" ? "none" : "flex"}`,
      }}
    >
      <div
        style={{
          display: "flex",
          align: "center",
          justifyContent: "flex-start",
        }}
      >
        <Drawerbar />
      </div>
      <div
        style={{
          display: "flex",
          align: "center",
          justifyContent: "flex-start",
          marginRight: "7px",
        }}
      >
        <Link to={"/"}>
          <img
            src="/assets/images/moviemix-logo-Recovered-1.png"
            alt="hotel-logo"
            width={80}
            height={20}
          />
        </Link>
      </div>
      <div className="long-search-box">
        <Searchbar />
      </div>
      <div
        style={{
          borderLeft: "1px solid #555",
          display: "flex",
          align: "center",
          justifyContent: "flex-end",
          marginLeft: "5px",
        }}
      >
        <Link to="/search">
          <Button
            type="text"
            icon={<SearchOutlined />}
            className="search-btn"
          />
        </Link>
        <Link to="/auth">
          <Button type="text">Sign in</Button>
        </Link>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 60px;
  width: 100%;
  padding: 0 1rem;
  transition: all 0.3s ease-out 0s;
  background: ${colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  z-index: 10;
  top: 0;

  .search-btn {
    display: none;
    margin-left: 5px;
    margin-right: 5px;
  }

  .long-search-box {
    display: flex;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    .search-btn {
      display: inline-block;
    }

    .long-search-box {
      display: none;
    }
  }
`;

export default Navbar;
