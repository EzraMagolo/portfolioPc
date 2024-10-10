import React from 'react';
import styled from 'styled-components';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#2d3748',
  mediumGray: '#4a5568',
};

// Font Configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`, // Body font
  headingFont: `'Montserrat', sans-serif`, // Heading font
};

// Styled components
const SiteInner = styled.div`
  margin-top: 61px;
  background-color: #f9fafb; /* Light gray background */
`;

const MainContent = styled.main`
  padding: 20px;
  display: flex;
  justify-content: center; /* Center the main content */
`;

const FrontPageWidget = styled.div`
  max-width: 800px;
  width: 100%; /* Ensure it takes the full width available */
  background-color: ${colors.white}; /* White background for the widget */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const AboutHeader = styled.h2`
  font-size: 2rem;
  color: ${colors.darkGray}; /* Dark gray for the header */
  margin-bottom: 20px;
  font-family: ${fonts.headingFont}; /* Apply heading font */
  text-align: center; /* Center the header text */
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: ${colors.mediumGray}; /* Medium gray for the text */
  line-height: 1.6;
  margin-bottom: 15px;
  font-family: ${fonts.bodyFont}; /* Apply body font */
  text-align: center; /* Center the text */
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const About = () => {
  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <div className="wrap">
            <section className="widget seo_slider_widget">
              <div className="widget-wrap">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-4">
                    <AboutHeader>About Us</AboutHeader>
                    <AboutText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </AboutText>
                    <AboutText>
                      Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    </AboutText>
                  </div>
                  <ImageWrapper className="lg:w-1/2 p-4">
                    <AboutImage src="" alt="About" />
                  </ImageWrapper>
                </div>
              </div>
            </section>
          </div>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default About;




