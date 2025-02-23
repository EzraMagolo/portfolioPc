import React from "react";
import styled from "styled-components";
import person from '../assets/person.png';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#4F4F4F',
  lightGray: '#cbd5e0',
};

// Font configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

// Styled components
const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: ${colors.lightGray};
  border-radius : 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContent = styled.div`
  max-width: 50%;
  color: ${colors.deepBlue};
  margin-bottom: 50px; /* Adjusted margin-bottom for spacing */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 3rem; /* Increased font size */
  font-family: ${fonts.headingFont};
  font-weight: bold;
  color: ${colors.deepBlue};
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem; /* Increased font size */
  font-family: ${fonts.bodyFont};
  color: ${colors.darkGray};
  line-height: 1.6;
  margin-bottom: 20px; /* Add space between paragraph and button */
`;

const ImageContainer = styled.div`
  max-width: 40%;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }

  img {
    width: 70%;
    border-radius: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
  padding: 10px 20px;
  font-size: 1rem;
  font-family: ${fonts.bodyFont};
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.silver};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <TextContent>
        <Heading>Lorem</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, vero dicta suscipit, harum inventore qui quam, explicabo eius porro dolorum labore architecto ea? Perferendis expedita vero necessitatibus nostrum culpa dolore?
        </Paragraph>
        <Button href="#more-info">Lorem ipsum</Button>
      </TextContent>
      <ImageContainer>
        <img src={person} alt="Lorem" />
      </ImageContainer>
    </HeroSection>
  );
};

export default Hero;


