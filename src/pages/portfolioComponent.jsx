import React from 'react';
import styled from 'styled-components';

// Import images from your assets folder
import image1 from '../assets/portfolio1.jpg'; // Adjust the path accordingly
import image2 from '../assets/portfolio2.jpg'; // Adjust the path accordingly
import image3 from '../assets/portfolio3.jpg'; // Adjust the path accordingly


// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#2d3748',
  mediumGray: '#4a5568',
  lightGray: '#cbd5e0',
  buttonBlue: '#4a90e2',
  buttonHoverBlue: '#357ab8',
};

// Font configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`, // Body font
  headingFont: `'Montserrat', sans-serif`, // Heading font
};

// Styled components
const SiteInner = styled.div`
  margin-top: -60px;

`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 4900px; /* Maximum width of the widget */
  margin: 0 auto; /* Center the widget */
  background-size: cover; /* Cover the area with the background image */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* No repeat */
  padding: 50px 20px; /* Padding around the content */

  
`;

const PortfolioHeader = styled.h2`
  text-align: center; /* Center align the header */
  margin-bottom: 30px; /* Space below the header */
  font-size: 2rem; /* Font size for the header */
  color: ${colors.white}; /* White text for contrast */
  font-family: ${fonts.headingFont}; /* Apply heading font */
`;

const PortfolioGrid = styled.div`
  display: grid; /* Grid layout */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive columns */
  gap: 20px; /* Gap between grid items */
`;

const PortfolioItem = styled.figure`
  background-color: ${props => props.bgColor || colors.lightGray}; /* Background color with default */
  border-radius: 8px; /* Rounded edges */
  overflow: hidden; /* Hide overflow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
  transition: transform 0.3s ease; /* Transition effect for hover */

  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }

  img {
    width: 100%; /* Full width image */
    height: auto; /* Auto height */
  }
`;

const SlickContent = styled.figcaption`
  padding: 15px; /* Padding for the caption */
  text-align: center; /* Center align text */

  h3 {
    font-size: 1.25rem; /* Font size for project title */
    margin-bottom: 10px; /* Space below title */
    color: ${colors.darkGray}; /* Dark gray for title */
    font-family: ${fonts.headingFont}; /* Apply heading font */
  }

  p {
    color: ${colors.mediumGray}; /* Medium gray for description */
    font-family: ${fonts.bodyFont}; /* Apply body font */
  }
`;

const Portfolio = () => {
  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <div className="wrap">
            <section className="widget seo_slider_widget">
              <div className="widget-wrap">
                <PortfolioHeader>My Portfolio</PortfolioHeader>
                <PortfolioGrid>
                  {/* Portfolio Item 1 */}
                  <PortfolioItem className="portfolio-item" bgColor="#f3f4f6">
                    <img src={image1} alt="Portfolio Item 1" />
                    <SlickContent>
                      <h3>Project Title 1</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </SlickContent>
                  </PortfolioItem>
                  {/* Portfolio Item 2 */}
                  <PortfolioItem className="portfolio-item" bgColor="#e5e7eb">
                    <img src={image2} alt="Portfolio Item 2" />
                    <SlickContent>
                      <h3>Project Title 2</h3>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </SlickContent>
                  </PortfolioItem>
                  {/* Portfolio Item 3 */}
                  <PortfolioItem className="portfolio-item" bgColor="#edf2f7">
                    <img src={image3} alt="Portfolio Item 3" />
                    <SlickContent>
                      <h3>Project Title 3</h3>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </SlickContent>
                  </PortfolioItem>
                  {/* Portfolio Item 4 */}
                  <PortfolioItem className="portfolio-item" bgColor="#edf2f7">
                    <img src={image3} alt="Portfolio Item 3" />
                    <SlickContent>
                      <h3>Project Title 4</h3>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </SlickContent>
                  </PortfolioItem>
                </PortfolioGrid>
              </div>
            </section>
          </div>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default Portfolio;





