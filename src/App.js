import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import BookingForm from './components/BookingForm.js';

function App() {
  return (
    <>
      <Nav />
      <BookingForm />
    </>
  );
}

export default App;
