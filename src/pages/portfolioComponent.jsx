import React from 'react';
import styled from 'styled-components';

const SiteInner = styled.div`
  margin-top: 61px;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-image: url('https://via.placeholder.com/1200x600'); /* Add your background image here */
  background-size: cover; /* Ensure the background image covers the area */
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 20px; /* Add padding to give space around content */
  border-radius: 10px; /* Optional: Add border-radius for rounded edges */
`;

const PortfolioHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #ffffff; /* White text to contrast with background */
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const PortfolioItem = styled.figure`
  background-color: ${props => props.bgColor || '#f3f4f6'};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const SlickContent = styled.figcaption`
  padding: 15px;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: #2d3748;
  }

  p {
    color: #4a5568;
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
                    <img src="https://via.placeholder.com/300" alt="Portfolio Item 1" />
                    <SlickContent>
                      <h3>Project Title 1</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </SlickContent>
                  </PortfolioItem>
                  {/* Portfolio Item 2 */}
                  <PortfolioItem className="portfolio-item" bgColor="#e5e7eb">
                    <img src="https://via.placeholder.com/300" alt="Portfolio Item 2" />
                    <SlickContent>
                      <h3>Project Title 2</h3>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </SlickContent>
                  </PortfolioItem>
                  {/* Portfolio Item 3 (New Card) */}
                  <PortfolioItem className="portfolio-item" bgColor="#edf2f7">
                    <img src="https://via.placeholder.com/300" alt="Portfolio Item 3" />
                    <SlickContent>
                      <h3>Project Title 3</h3>
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

