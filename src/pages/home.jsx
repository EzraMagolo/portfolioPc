import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  margin-top: 61px;
  background-color: #f9fafb; /* Light gray background */
`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 1200px;
  margin: 0 auto; /* Center the widget */
`;

const SliderSection = styled.section`
  .slick-slider {
    position: relative;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    background-color: ${colors.mediumGray}; /* Medium gray background */
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-next {
    right: 0; /* Position right arrow correctly */
  }

  .slick-prev {
    left: 0; /* Position left arrow correctly */
  }
`;

const CarouselItem = styled.figure`
  background-color: ${props => props.bgColor || colors.lightGray}; /* Default light gray */
  border-radius: 8px;
  padding: 20px;
  width: 100%; /* Full width */
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow effect */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: ${colors.buttonBlue}; /* Button background color */
  color: ${colors.white}; /* White text color */
  border-radius: 5px;
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.buttonHoverBlue}; /* Darker blue on hover */
  }
`;

const SlickContent = styled.div`
  text-align: center; /* Center align content */

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px; /* Space below heading */
    color: ${colors.darkGray}; /* Dark gray for heading */
    font-family: ${fonts.headingFont}; /* Apply heading font */
  }

  p {
    color: ${colors.mediumGray}; /* Medium gray for paragraph */
    font-family: ${fonts.bodyFont}; /* Apply body font */
  }
`;

const Home = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    nextArrow: <button className="slick-next">Next</button>, // Custom next arrow
    prevArrow: <button className="slick-prev">Previous</button>, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for tablet
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Breakpoint for mobile
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <div className="wrap">
            <SliderSection className="widget seo_slider_widget">
              <Slider {...settings}>
                <CarouselItem bgColor="#f3f4f6">
                  <SlickContent>
                    <h2>Lorem Ipsum Dolor Sit Amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button href="#">Learn More</Button>
                  </SlickContent>
                </CarouselItem>
                <CarouselItem bgColor="#e5e7eb">
                  <SlickContent>
                    <h2>Consectetur Adipiscing Elit</h2>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button href="#">Discover More</Button>
                  </SlickContent>
                </CarouselItem>
                <CarouselItem bgColor="#f0f0f0">
                  <SlickContent>
                    <h2>Curabitur Vulputate</h2>
                    <p>Curabitur vulputate vel metus ac aliquam. Praesent non nisi eu tortor blandit malesuada.</p>
                    <Button href="#">Get Started</Button>
                  </SlickContent>
                </CarouselItem>
                <CarouselItem bgColor="#e2e8f0">
                  <SlickContent>
                    <h2>Aliquam at Viverra</h2>
                    <p>Aliquam at viverra orci. Morbi faucibus ante sit amet tortor scelerisque, non convallis risus tincidunt.</p>
                    <Button href="#">Explore More</Button>
                  </SlickContent>
                </CarouselItem>
              </Slider>
            </SliderSection>
          </div>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default Home;



