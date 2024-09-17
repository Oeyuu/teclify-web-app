import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home'; 
import Portfolio from './components/portfolio/Portfolio'; 
import Expertise from './components/expertise/Expertise'; 
import AboutUs from './components/aboutus/AboutUs'; 
import Service from './components/service/Service'; 
import Career from './components/career/Career'; 
import Contact from './components/contact/Contact'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/aboutus"element={<AboutUs />} /> 
          <Route path="/services"element={<Service />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/expertise" element={<Expertise />} /> 
          <Route path="/career" element={<Career />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
