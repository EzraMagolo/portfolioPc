import React from 'react';
import styled from 'styled-components';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#4F4F4F', // Updated for better readability
  mediumGray: '#A9A9A9',
};

// Font Configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`, // Body font
  headingFont: `'Montserrat', sans-serif`, // Heading font
};

// Styled components
const SiteInner = styled.div`
  margin-top: -60px;
  background-color: #f9fafb; /* Light gray background */
`;

const MainContent = styled.main`
  padding: 20px;
  display: flex;
  justify-content: center; /* Center the main content */
  flex-direction: column; /* Allow vertical stacking on small screens */
`;

const FrontPageWidget = styled.div`
  max-width: 4000px;
  width: 100%; /* Ensure it takes the full width available */
  background-color: ${colors.white}; /* White background for the widget */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 auto; /* Center the widget horizontally */
`;

const AboutHeader = styled.h2`
  font-size: 2rem;
  color: ${colors.deepBlue}; /* Deep blue for the header */
  margin-bottom: 20px;
  font-family: ${fonts.headingFont}; /* Apply heading font */
  text-align: center; /* Center the header text */
  font-weight: bold; /* Bold font weight */
  text-transform: uppercase; /* Uppercase for emphasis */
  border-bottom: 2px solid ${colors.deepBlue}; /* Underline for added emphasis */
`;

const AboutText = styled.p`
  font-size: 1rem; /* Moderate size for readability */
  color: ${colors.darkGray}; /* Dark gray for the text */
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: ${fonts.bodyFont}; /* Apply body font */
  text-align: center; /* Center the text */
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0; /* Add some margin for spacing */
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: center; /* Center align items */
`;

const Column = styled.div`
  flex: 1; /* Take equal space */
  min-width: 300px; /* Minimum width for smaller screens */
  padding: 0 10px; /* Horizontal padding for spacing */
`;

const About = () => {
  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <FlexContainer>
            <Column>
              <AboutHeader>About Us</AboutHeader>
              <AboutText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </AboutText>
              <AboutText>
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </AboutText>
            </Column>
            <Column>
              <ImageWrapper>
                <AboutImage src="" alt="About" />
              </ImageWrapper>
            </Column>
          </FlexContainer>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default About;




