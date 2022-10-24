import React, { useState } from "react";
import { Button, Drawer, List, Tree } from "antd";
import {
  MenuOutlined,
  CloseCircleFilled,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import colors from "../utils/colors";
import styled from "styled-components";
import { navLinks } from "../utils/data";
import { Link } from "react-router-dom";

const Drawerbar = () => {
  const [visible, setVisible] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const renderNavLinks = () => (
    <LinksWrapper>
      <List>
        {navLinks.map((nl, i) => (
          <Link to={nl.link} onClick={onClose}>
            <List.Item key={i} style={{ border: "none" }}>
              <Button className="btn" type="text" block icon={nl.icon}>
                {nl.title}
              </Button>
            </List.Item>
          </Link>
        ))}
      </List>
    </LinksWrapper>
  );

  return (
    <div>
      <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80px",
              position: "relative",
            }}
          >
            <Link to="/">
              <img
                src="/assets/images/moviemix-logo-Recovered-1.png"
                alt=""
                width={80}
                height={20}
              />
            </Link>
            <Button
              type="text"
              onClick={onClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
              icon={<CloseCircleFilled />}
            />
          </div>
        }
        closable={false}
        placement="left"
        onClose={onClose}
        open={visible}
        headerStyle={{
          borderBottom: "none",
          padding: "0px",
          background: `${colors.black}`,
          height: "200px",
        }}
        bodyStyle={{
          margin: 0,
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          width: "100%",
        }}
      >
        {renderNavLinks()}
      </Drawer>
    </div>
  );
};

const LinksWrapper = styled.div`
  .btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
  }
`;

export default Drawerbar;
