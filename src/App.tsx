import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wash from "./pages/Wash";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/wash" element={<Wash />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
