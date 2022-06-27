import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Router from './components/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
