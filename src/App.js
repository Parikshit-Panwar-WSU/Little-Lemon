import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import BookingForm from './components/BookingForm.js';
import HeroSection from './components/HeroSection.js';
import Specials from './components/Specials.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';

function App() {
  return (
    <>
      <Nav />
      <BookingForm />
    </>
  );
}

export default App;
