import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import SiteContainer from './components/siteContainer';
import Header from './components/header';
import Home from './pages/home';
import Hero from './pages/hero';
import Publications from './pages/publications';
import Courses from './pages/courseOfferings';
import Research from './pages/researchCard';
import Portfolio from './pages/portfolioComponent';
import Contact from './pages/contact';
import About from './pages/about';
import Banner from './components/banner';
import Footer from './components/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Global Styles for Consistent Responsiveness
const GlobalStyle = createGlobalStyle`
  /* Normalize styles and set box-sizing */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set base font size for scaling */
  html {
    font-size: 16px;
    @media (max-width: 667px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  /* Ensure images and embeds scale properly */
  img, video, iframe {
    max-width: 100%;
    height: auto;
  }

  /* Add responsive utilities */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

// Styled Container for the App
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1; /* Ensures main content stretches between header and footer */
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle /> {/* Apply global styles */}
      <AppWrapper>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SiteContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/banner" element={<Banner />} />
          </Routes>
        </main>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;



