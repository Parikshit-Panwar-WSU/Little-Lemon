import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import BookingPage from './components/BookingPage.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  const pageMode = {
    HOME: 'HomePage',
    RESERVATION: 'ReservationPage'
  };

  Object.freeze(pageMode);    // This makes the pageMode Object immutable.

  const [currPage, setCurrPage] = useState(pageMode.HOME);

  const updatePage = (newPage) => {
    setCurrPage(newPage);
  }

  return (
    <>
      <Nav
        currPage={currPage}
        updatePage={updatePage}
        pageMode={pageMode} />
      <Routes>
        <Route path='/'
          element={<HomePage
                    pageMode={pageMode}
                    updatePage={updatePage}/>} />
        <Route path='booking' element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
