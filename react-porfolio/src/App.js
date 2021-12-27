import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('Home');

    // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About me />;
    }
  };
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}  />
      <div>{renderPage(currentPage)}</div>
      <Footer />
    </div>
  );
}

export default App;
