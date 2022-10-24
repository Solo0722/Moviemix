import { Button, Divider, Form, Input, message } from "antd";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error(`Authentication failed: ${errorInfo}`);
  };

  const toggleAuth = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <AuthWrapper>
      <Nav>
        <Link to={"/"}>
          <img
            src="/assets/images/moviemix-logo-Recovered-1.png"
            alt=""
            width={80}
            height={20}
          />
        </Link>
      </Nav>
      <FormWrapper>
        <h1>{isSignUp ? "Create a new account" : "Sign in to your account"}</h1>
        <Form
          form={form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
          layout="vertical"
        >
          {isSignUp && (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Invalid name!",
                },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Invalid email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          {isSignUp && (
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  min: 8,
                  message: "Invalid phone number!",
                },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                min: 5,
                message: "Invalid password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Form.Item>
        </Form>
        <Button type="text" onClick={toggleAuth}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Do not have an account yet? Sign Up"}
        </Button>
        <DividerContainer>
          <Divider />
          <span>or</span>
          <Divider />
        </DividerContainer>
        <Button
          type="primary"
          block
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "lavender",
            borderColor: "lavender",
            color: "black",
          }}
          icon={<FaGoogle style={{ marginRight: "10px" }} />}
        >
          Sign in with Google
        </Button>
      </FormWrapper>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  min-height: 110vh;
`;

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background: ${colors.secondary};
  padding: 0 1rem;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FormWrapper = styled.div`
  width: 40%;
  min-height: 450px;
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  background: ${colors.secondary};
  box-shadow: ${colors.black} 0px 3px 8px;

  input {
  }

  @media screen and (max-width: 768px) {
    & {
      width: 85%;
    }
  }
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;

  span {
    margin: 0px 5px;
  }
`;

export default Auth;
