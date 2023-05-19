import React, { PropsWithChildren, useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../../../atom/login/Login";
import LoginPage from "../../../pages/LoginPage";

const Auth = ({ children }: PropsWithChildren<unknown>) => {
  const [auth, setAuth] = useRecoilState(loginState);

  useEffect(() => {
    if (localStorage.getItem("Authorization")) {
      setAuth(true);
    }
  }, []);

  if (!auth) {
    return <LoginPage />;
  }

  return <>{children}</>;
};

export default Auth;
