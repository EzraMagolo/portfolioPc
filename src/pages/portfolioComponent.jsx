import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

const SiteInner = styled.div`
  margin-top: -60px;
`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 4900px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px 20px;
`;

const PortfolioHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: ${colors.deepBlue};
  font-family: ${fonts.headingFont};
`;

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start; /* Align items to the start of the container */
  margin: 0 auto; /* Center the container if desired */
`;


const PortfolioItem = styled.figure`
  background-color: ${props => props.bgColor || colors.lightGray};
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
    color: ${colors.darkGray};
    font-family: ${fonts.headingFont};
  }

  p {
    color: ${colors.mediumGray};
    font-family: ${fonts.bodyFont};
  }
`;

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/portfolioItems');
        setPortfolioItems(response.data);
      } catch (error) {
        console.error('Failed to fetch portfolio items', error);
      }
    };
    fetchPortfolioItems();
  }, []);

  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <div className="wrap">
            <section className="widget seo_slider_widget">
              <div className="widget-wrap">
                <PortfolioHeader>Latest News</PortfolioHeader>
                <PortfolioGrid>
                  {portfolioItems.map(item => (
                    <PortfolioItem key={item._id} bgColor={item.backgroundColor}>
                      <img src={item.imageUrl} alt={item.title} />
                      <SlickContent>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </SlickContent>
                    </PortfolioItem>
                  ))}
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






