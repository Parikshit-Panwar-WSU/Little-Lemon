import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import ReservationPage from './components/ReservationPage.js';

function App() {
  return (
    <>
      <Nav />
        <ReservationPage />
      <Footer />
    </>
  );
}

export default App;
