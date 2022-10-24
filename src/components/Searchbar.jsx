import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";

const Searchbar = () => {
  const navigate = useNavigate();

  return (
    <SearchbarWrapper>
      <Input
        onFocus={() => navigate("/search")}
        bordered={false}
        placeholder="Search moviemix"
        suffix={<SearchOutlined style={{ color: "#000" }} />}
        style={{
          borderRadius: "3px",
          background: `${colors.white}`,
          width: "100%",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      />
    </SearchbarWrapper>
  );
};

const SearchbarWrapper = styled.div`
  width: 100%;
  input {
    color: #000;
    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export default Searchbar;
