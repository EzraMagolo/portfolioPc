import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images from assets folder
import image1 from '../assets/carousel1.jpg';
import image2 from '../assets/carousel2.jpg';
import image3 from '../assets/carousel3.jpg';
import image4 from '../assets/carousel4.jpg';
import backgroundImage from '../assets/backgroundimage.jpg';

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

// Styled components
const SiteInner = styled.div`
  margin-top: -100px;
  background-color: #f9fafb;
  background-image: url(${backgroundImage}); /* Add this line */
  background-size: cover; /* Ensures the image covers the entire div */
  background-position: center; /* Centers the background image */
  padding: 40px;
  min-height: calc(100vh - 61px);
  width: 150%;
  box-sizing: border-box;
`;

const MainContent = styled.main`
  padding: 60px;
`;

const FrontPageWidget = styled.div`
  max-width: 4000px;
  margin: 0 auto;

`;

const SliderSection = styled.section`
  .slick-slider {
    position: relative;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    background-color: ${colors.mediumGray};
    color: ${colors.white};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-next {
    right: 10px;
  }

  .slick-prev {
    left: 10px;
  }
`;

const CarouselItem = styled.figure`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 20px;
  height: 600px;
  width: 150%;
  display: flex; /* Change to flex */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: ${colors.buttonBlue};
  color: ${colors.white};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.buttonHoverBlue};
  }
`;

const SlickContent = styled.div`
  margin-top: 20px;
  text-align: left; /* Align text to the left */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Ensure buttons are aligned to the left */

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${colors.darkGray};
    font-family: ${fonts.headingFont};
  }

  p {
    color: ${colors.mediumGray};
    font-family: ${fonts.bodyFont};
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next" aria-label="Next slide">Next</button>,
    prevArrow: <button className="slick-prev" aria-label="Previous slide">Previous</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <SliderSection className="widget seo_slider_widget">
            <Slider {...settings}>
              <CarouselItem image={image1}>
                <SlickContent>
                  <h2>Lorem Ipsum Dolor Sit Amet</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Button href="#">Learn More</Button>
                  <Button href="#">Contact Us</Button>
                </SlickContent>
              </CarouselItem>
              <CarouselItem image={image2}>
                <SlickContent>
                  <h2>Consectetur Adipiscing Elit</h2>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Button href="#">Discover More</Button>
                  <Button href="#">Get a Quote</Button>
                </SlickContent>
              </CarouselItem>
              <CarouselItem image={image3}>
                <SlickContent>
                  <h2>Curabitur Vulputate</h2>
                  <p>Curabitur vulputate vel metus ac aliquam.</p>
                  <Button href="#">Get Started</Button>
                  <Button href="#">View Portfolio</Button>
                </SlickContent>
              </CarouselItem>
              <CarouselItem image={image4}>
                <SlickContent>
                  <h2>Aliquam at Viverra</h2>
                  <p>Aliquam at viverra orci. Morbi faucibus ante sit amet tortor scelerisque.</p>
                  <Button href="#">Explore More</Button>
                  <Button href="#">Learn About Us</Button>
                </SlickContent>
              </CarouselItem>
            </Slider>
          </SliderSection>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default Home;






