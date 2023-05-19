import React, { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { loginState } from "../../../atom/login/Login";
import LoginPage from "../../../pages/LoginPage";

const Auth = ({ children }: PropsWithChildren<unknown>) => {
  const [auth, setAuth] = useRecoilState(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      setAuth(true);
      navigate("/");
    }
  }, [auth]);

  if (!auth) {
    return <LoginPage />;
  }

  return <>{children}</>;
};

export default Auth;
