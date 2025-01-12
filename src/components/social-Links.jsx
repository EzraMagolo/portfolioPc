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

// Font Configurations
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

const LoremText = styled.p`
  margin-top: 20px; /* Add space above the text */
  color: ${colors.darkGray}; /* Text color */
  font-family: ${fonts.bodyFont}; /* Apply body font */
  font-size: 1rem; /* Font size */
  line-height: 1.5; /* Line height for readability */
`;

const SocialLinks = () => {
  return (
    <SocialSection id="simple-social-icons-3" className="widget simple-social-icons one-third">
      <div className="widget-wrap">
        <WidgetTitle className="widgettitle widget-title">random.a@gmail.com</WidgetTitle>
        <SocialList className="alignleft">
          <SocialItem className="ssi-email">
            <IconButton href="random@gmail.com.com" aria-label="Email">
              <EmailIcon style={{ color: colors.mediumGray }} />
            </IconButton>
          </SocialItem>
          <SocialItem className="ssi-linkedin">
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon style={{ color: colors.mediumGray }} />
            </IconButton>
          </SocialItem>
          <SocialItem className="ssi-youtube">
            <IconButton href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon style={{ color: colors.mediumGray }} />
            </IconButton>
          </SocialItem>
        </SocialList>
        <LoremText>
        Product Development Engineer Material Science | Sustainable Technology

          
        </LoremText>
      </div>
    </SocialSection>
  );
};

export default SocialLinks;









