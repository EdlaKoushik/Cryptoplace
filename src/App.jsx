import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin.jsx";
import Features from "./pages/Features/Features.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/features" element={<Features/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;