import React from 'react';
import styled from 'styled-components';
import about from '../assets/about.jpg'; // Ensure this path is correct

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#4F4F4F',
  mediumGray: '#A9A9A9',
};

// Font Configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

// Styled components
const SiteInner = styled.div`
  margin-top: -60px;
  background-color: #f9fafb;
  margin-top: 20px; /* Adjust the value as needed */
`;

const MainContent = styled.main`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FrontPageWidget = styled.div`
  max-width: 100%;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: none; /* Removed box shadow */
  padding: 20px;
  margin: 0 auto;
  margin-left: -10px; /* Shift slightly to the left */
`;


const AboutHeader = styled.h2`
  font-size: 2rem;
  color: ${colors.deepBlue};
  margin-bottom: 20px;
  font-family: ${fonts.headingFont};
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.deepBlue};
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: ${colors.darkGray};
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: ${fonts.bodyFont};
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;

`;


const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Column = styled.div`
  flex: 1;
  min-width: 100%; /* Full width on mobile */
  padding: 0 10px;
  @media (min-width: 768px) {
    min-width: 300px; /* Adjust for larger screens */
  }
`;

const About = () => {
  return (
    <div id = "about">
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <FlexContainer>
            <Column>
              <AboutHeader>About Us</AboutHeader>
              <AboutText>
                Dedicated to addressing the global energy challenge, my research leverages material science, nanotechnology, and a multi-disciplinary approach to develop innovative solutions in perovskite solar cells
              </AboutText>
              <AboutText>
                My work bridges theory and practice, contributing directly to UN Sustainable Development Goal 7—ensuring access to affordable, reliable, and sustainable energy for all.
              </AboutText>
            </Column>
            <Column>
              <ImageWrapper>
                <AboutImage src={about} alt="About" /> {/* Updated to use the imported image */}
              </ImageWrapper>
            </Column>
          </FlexContainer>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
    </div>
  );
};

export default About;






