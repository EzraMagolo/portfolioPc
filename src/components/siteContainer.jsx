import React from 'react';
import styled from 'styled-components';
import SkipLink from './skipLink';
import Header from './header';
import Home from '../pages/home';
import Portfolio from '../pages/portfolioComponent';
import About from '../pages/about';
import Contact from '../pages/contact';
import Footer from './footer';

// Styled components for SiteContainer
const Container = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack child elements vertically */
  min-height: 100vh; /* Ensure full viewport height */
  background-color: #fefefe; /* Light background color */
  padding: 0; /* Remove default padding */
`;

const SiteContainer = () => {
    return (
        <Container className="site-container" id="top">
            <SkipLink />
            <Header />
            <Home />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </Container>
    );
};

export default SiteContainer;
