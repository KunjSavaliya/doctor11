import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';
import AboutsUs from './Pages/AboutUs/AboutsUs';

import Footer from './Component/Footer';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutsUs />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
