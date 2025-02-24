import "./App.css";
import React from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HowWeWork from "./Components/HowWeWork";
import Enquire from "./Components/Enquire";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/howWeWork" element={<HowWeWork />} />
        <Route path="/enquire" element={<Enquire />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
