import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HeroSection from './components/HeroSection.js';
import Specials from './components/Specials.js';

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Specials />
      <Footer />
    </>
  );
}

export default App;
