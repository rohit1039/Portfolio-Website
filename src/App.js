import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project";
import Skill from "./components/Skills/Skill";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import React from "react";
import { ToastContainer } from "react-toastify";

function App() {
  
  return (
    <BrowserRouter>
      <ToastContainer style={{ zIndex: 999999999999 }} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
