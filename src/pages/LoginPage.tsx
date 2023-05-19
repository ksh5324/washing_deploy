import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const LoginPage = () => {
  const location = useLocation();
  const authUrl = `https://dauth.b1nd.com/login?client_id=4cc81ba00f174bc09340a1d6d75927665b7f7c0ca5a844a98af774648043a857&redirect_uri=http://localhost:3000`;
  const [dauthCode, setDauthCode] = useState<string | null>();

  useEffect(() => {
    setDauthCode(location.search.split("&")[0].split("=")[1]);
  }, []);

  useEffect(() => {
    if (dauthCode) {
      localStorage.setItem("Authorization", dauthCode);
    }
  }, [dauthCode]);

  useEffect(() => {
    getToken();
  }, [dauthCode]);

  const getToken = async () => {
    if (!dauthCode) {
      return;
    }
    const data = await axios.post(
      `http://server.fastwash.kro.kr:8080/auth/sign-in?code=${dauthCode}`
    );
    console.log(data);
  };

  return (
    <LoginContainer>
      <a href={authUrl}>dodam으로 로그인하기</a>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    text-decoration: none;

    width: 250px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    background-color: blue;
  }
  a::active {
    color: white;
  }
`;
