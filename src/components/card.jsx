import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#2d3748',
  mediumGray: '#4a5568',
};

// Font configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`, // Body font
  headingFont: `'Montserrat', sans-serif`, // Heading font
};

// Styled components
const SocialSection = styled.section`
  margin: 20px auto; /* Center the section horizontally */
  padding: 20px;
  background-color: ${colors.white}; /* Use white background */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Set a max width for the section */
  text-align: center; /* Center the text within the section */
`;

const WidgetTitle = styled.h3`
  font-size: 1.5rem;
  color: black; /* Set title color to black */
  margin-bottom: 15px;
  font-family: ${fonts.headingFont}; /* Apply heading font */
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px; /* Space between social icons */
  list-style: none;
  padding: 0;
  justify-content: center; /* Center social icons */
  align-items: center; /* Align items vertically */
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 24px; /* Size of the icons */
    height: 24px;
    fill: ${colors.mediumGray}; /* Icon color */
    transition: fill 0.3s;

    &:hover {
      fill: ${colors.deepBlue}; /* Color change on hover */
    }
  }
`;

// Random video URLs (use the video ID after "v=")
const videoIds = [
  'dQw4w9WgXcQ', // Example Video 1
  'M7lc1UVf-VE', // Example Video 2
  '9bZkp7q19f0', // Example Video 3
];

const getRandomVideoId = () => {
  const randomIndex = Math.floor(Math.random() * videoIds.length);
  return videoIds[randomIndex];
};

const Card = () => {
  const randomVideoId = getRandomVideoId();

  return (
    <SocialSection id="simple-social-icons-3" className="widget simple-social-icons one-third">
      <div className="widget-wrap">
        <WidgetTitle className="widgettitle widget-title">Video</WidgetTitle>
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${randomVideoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
    </SocialSection>
  );
};

export default Card;








