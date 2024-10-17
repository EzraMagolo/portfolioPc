import React from 'react';
import styled from 'styled-components';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#4F4F4F',
  mediumGray: '#A9A9A9',
  lightGray: '#cbd5e0',
  buttonBlue: '#003366',
  buttonHoverBlue: '#357ab8',
};

// Font configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f5f7f8;
`;

const BannerWrapper = styled.div`
  position: relative;
  height: 100%;
  max-height: 198px;
  width: 100%;
  max-width: 1279px;
  background: none;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 706px;
  padding: 30px;
  color: ${colors.darkGray};
  height: 80%; /* Ensure vertical centering */

  @media (min-width: 1000px) {
    max-width: 100%;
    align-items: stretch;
    justify-content: space-around;
  }
`;

const Illo = styled.div`
  z-index: 1;
  position: absolute;
  right: auto;
  left: 0;
  top: 0;

  @media (min-width: 650px) {
    right: 0;
    left: auto;
  }

  @media (min-width: 1000px) {
    right: 260px;
    left: auto;
  }
`;

const Headline = styled.div`
  text-align: center;

  h2 {
    font-size: 1.8rem;
    color: ${colors.deepBlue};
    font-family: ${fonts.headingFont};
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: ${colors.darkGray};
    font-family: ${fonts.bodyFont};
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 8px 16px; /* Reduce padding for smaller button */
  background-color: ${colors.buttonBlue};
  color: ${colors.white};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;
  font-size: 0.9rem; /* Adjust font size */

  &:hover {
    background-color: ${colors.buttonHoverBlue};
  }
`;

// React Component
const Banner = () => {
  return (
    <Container>
      <BannerWrapper>
        <Content>
          <ContentWrapper>
            <Headline>
              <h2>Welcome to Our Website</h2>
              <p>We provide the best solutions for your business needs. Explore our services and get in touch!</p>
            </Headline>
            <Button href="#">Learn More</Button>
          </ContentWrapper>
          <Illo>
            {/* Image or illustration */}
            <img src="/path-to-image.jpg" alt="Illustration" style={{ width: '100%', maxWidth: '300px' }} />
          </Illo>
        </Content>
      </BannerWrapper>
    </Container>
  );
};

export default Banner;

