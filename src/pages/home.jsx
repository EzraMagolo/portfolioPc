import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/carousel1.jpg';
import image2 from '../assets/carousel2.jpg';
import image3 from '../assets/carousel3.jpg';
import image4 from '../assets/carousel4.jpg';
import backgroundImage from '../assets/logobanner.png';

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
  padding:0px;
  width: 109%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slight zoom effect */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
  }
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
  margin-top :20px;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.deepBlue};
    font-family: ${fonts.headingFont};
  }

  p {
    color: ${colors.white};
    font-size: 1.8rem;
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
                <h2>Dr. Jeffrey Aligula</h2>
                <p>Professor , Innovator , Mentor, Author, Entrepreneur and Director of ed+.</p>
                <Button href="/contact">Contact Us</Button>
                <Button href="/about">About Us</Button>
              </SlickContent>
            </CarouselItem>
            <CarouselItem image={image2}>
              <SlickContent>
                <h2>Learn from the best with (entinty name)</h2>
                <p>Online instruction in computation, electromagnetics and more.</p>
                <Button href="/courses">View Course Catalog</Button>
                <Button href="/publications">Visit ed+ Publications</Button>
              </SlickContent>
            </CarouselItem>
            <CarouselItem image={image3}>
              <SlickContent>
                <h2>(entinty name)</h2>
                <p>Research center focused on developing revolutionary technologies.</p>
                <Button href="/about">Learn More</Button>
                <Button href="/portfolio">View Portfolio</Button>
              </SlickContent>
            </CarouselItem>
            <CarouselItem image={image4}>
              <SlickContent>
                <h2>New book by the (entinty) professor</h2>
                <p>Computational electromagnetics is brilliantly taught to the complete beginner.</p>
                <Button href="/courses">Courses </Button>
              </SlickContent>
            </CarouselItem>
          </Slider>
        </SliderSection>
      </MainContent>
    </SiteInner>
  );
};

export default Home;











