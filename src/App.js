import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Cookie from "./components/Cookie";
import Home from "./pages/Home";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      <Cookie />
      <Routes>
        <Route path="/" element={<Home {...props} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
