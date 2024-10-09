import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
`;

const SliderSection = styled.section`
  .slick-slider {
    position: relative;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    background-color: #4a5568;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-next {
    right: 0; /* Ensure right arrow is positioned correctly */
  }

  .slick-prev {
    left: 0;
  }
`;

const CarouselItem = styled.figure`
  background-color: ${props => props.bgColor || '#f3f4f6'};
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: inline-block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #3182ce;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2b6cb0;
  }
`;

const SlickContent = styled.div`
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2d3748;
  }

  p {
    color: #4a5568;
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
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


