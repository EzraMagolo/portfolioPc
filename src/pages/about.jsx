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
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const AboutHeader = styled.h2`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 15px;
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
                    <AboutImage src="https://via.placeholder.com/400" alt="About" />
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

