import './App.css';
import React from 'react';
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/series" element={<Series />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
