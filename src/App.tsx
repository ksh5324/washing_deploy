import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Auth from "./components/HOC/Auth/Auth";
import Home from "./pages/Home";
import Wash from "./pages/Wash";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/wash" element={<Wash />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
