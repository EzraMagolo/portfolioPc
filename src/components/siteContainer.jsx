import React from 'react'; 
import styled from 'styled-components';
import Home from '../pages/home';
import Hero from '../pages/hero';
import News from '../pages/portfolioComponent';
import Banner from './banner';


// Color Configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  lightGrey: '#D3D3D3', // Light grey color
};

// Styled components for SiteContainer
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(${colors.white}, ${colors.white});  // Light grey to silver gradient
  padding: 0;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 20px;
  }
`;

const SiteContainer = () => {
  return (
    <Container className="site-container" id="top">
      
      <MainContent>
        <Home />
        <Hero />
        <Banner />
        <News />
      </MainContent>
      
    </Container>
  );
};

export default SiteContainer;





