import React from 'react';
import styled from 'styled-components';
import SkipLink from './skipLink';
import Header from './header';
import Home from '../pages/home';
import Portfolio from '../pages/portfolioComponent';
import About from '../pages/about';
import Contact from '../pages/contact';
import Footer from './footer';
import Banner from './banner';

// Color Configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
};

// Styled components for SiteContainer
const Container = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack child elements vertically */
  min-height: 100vh; /* Ensure full viewport height */
  background-color: ${colors.white}; /* White background */
  padding: 0; /* Remove default padding */
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

// Styled components for Main Content
const MainContent = styled.main`
  flex: 1; /* Take up remaining space */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the content */
  padding: 20px; /* Add padding for spacing */
  gap: 40px; /* Space between different sections */

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding on smaller screens */
    gap: 20px; /* Reduce gap on smaller screens */
  }
`;

const SiteContainer = () => {
  return (
    <Container className="site-container" id="top">
      <SkipLink />
      <Header />
      <MainContent>
        <Home />
        <Portfolio />
        <About />
        <Banner/>
        <Contact />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default SiteContainer;


