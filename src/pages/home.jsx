import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/carousel1.jpg';
import image2 from '../assets/carousel2.jpg';
import image3 from '../assets/carousel3.jpg';
import image4 from '../assets/carousel4.jpg';
import backgroundImage from '../assets/logobanner.jpg';

const colors = {
  white: '#FFFFFF',
  deepBlue: '#003366',
  mediumGray: '#A9A9A9',
};

const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

const SiteInner = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  padding: 40px;
  width: 109%;
`;

const MainContent = styled.main`
  padding: 60px;
`;

const SliderSection = styled.section`
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
  height: 600px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;  /* Centers the content vertically and horizontally */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SlickContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content horizontally */
  justify-content: center; /* Centers content vertically */
  text-align: center; /* Centers text */

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.deepBlue};
    font-family: ${fonts.headingFont};
  }

  p {
    color: ${colors.mediumGray};
    font-size: 0.8rem;
    font-family: ${fonts.bodyFont};
  }

  button {
    margin-top: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
        <SliderSection>
          <Slider {...settings}>
            <CarouselItem image={image1}>
              <SlickContent>
                <h2>Dr. Lorem Ipsum</h2>
                <p>Professor , Innovator , Mentor, Author, Entrepreneur and Director of ed+.</p>
                <Button href="#">Contact Us</Button>
                <Button href="#">About Us</Button>
              </SlickContent>
            </CarouselItem>
            <CarouselItem image={image2}>
              <SlickContent>
                <h2>Learn from the best with ed+</h2>
                <p>Online instruction in computation, electromagnetics and more.</p>
                <Button href="#">View Course Catalog</Button>
                <Button href="#">Visit ed+ Resources</Button>
              </SlickContent>
            </CarouselItem>
            <CarouselItem image={image3}>
              <SlickContent>
                <h2>ed+</h2>
                <p>Research center focused on developing revolutionary technologies.</p>
                <Button href="#">Learn More</Button>
                <Button href="#">View Portfolio</Button>
              </SlickContent>
            </CarouselItem>
            <CarouselItem image={image4}>
              <SlickContent>
                <h2>New book by the ed+ professor</h2>
                <p>Computational electromagnetics is brilliantly taught to the complete beginner.</p>
                <Button href="#">Book Website</Button>
              </SlickContent>
            </CarouselItem>
          </Slider>
        </SliderSection>
      </MainContent>
    </SiteInner>
  );
};

export default Home;










