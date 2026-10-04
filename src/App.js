// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryPage from "./components/CountryPage";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Rendered once, outside <Routes>, so it appears - fixed to the
          bottom-left corner - on every page and stays put while scrolling. */}
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
