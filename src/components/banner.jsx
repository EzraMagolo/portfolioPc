import React from 'react';
import styled from 'styled-components';
import banner from '../assets/salebanner.png';

const colors = {
  white: '#FFFFFF',
  deepBlue: '#003366',
  darkGray: '#4F4F4F',
  buttonBlue: '#003366',
  buttonHoverBlue: '#357ab8',
};

const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 50vh;
  overflow: hidden;
`;

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  /* Add a semi-transparent overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Adjust transparency level */
    z-index: 1;
    transition: background-color 0.3s ease; /* Add transition for smooth effect */
  }

  /* Remove transparency on hover */
  &:hover::before {
    background-color: rgba(0, 0, 0, 0); /* Fully transparent on hover */
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 2; /* Ensure content stays above overlay */
`;

const Headline = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    color: ${colors.white};
    font-family: ${fonts.headingFont};
    margin: 0;
  }

  p {
    font-size: 1.1rem;
    font-family: ${fonts.bodyFont};
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${colors.buttonBlue};
  color: ${colors.white};
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.buttonHoverBlue};
  }
`;

const Banner = () => {
  return (
    <Container>
      <BannerWrapper>
        <Content>
          <Headline>
            <h2>Welcome to Our Website</h2>
            <p>We provide an experience. Explore our services and get in touch!</p>
          </Headline>
          <Button href="#">Learn More</Button>
        </Content>
      </BannerWrapper>
    </Container>
  );
};

export default Banner;





