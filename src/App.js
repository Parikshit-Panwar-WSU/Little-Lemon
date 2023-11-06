import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import { VStack } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
