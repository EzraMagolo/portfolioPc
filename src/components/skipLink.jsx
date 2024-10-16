import React from 'react';
import styled from 'styled-components';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
};

// Font Configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`, // Body font
};

// Styled components
const SkipLinkList = styled.ul`
  position: absolute; /* Positioning off-screen */
  left: -9999px; /* Move it off-screen for accessibility */
  top: 0; /* Reset top positioning */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */

  &:focus {
    position: static; /* Make it visible when focused */
    left: auto; /* Reset left positioning */
    top: auto; /* Reset top positioning */
    z-index: 1000; /* Ensure it is on top of other elements */
    background-color: ${colors.white}; /* Background color for visibility */
    padding: 10px; /* Padding for better spacing */
    border: 1px solid ${colors.silver}; /* Border for visibility */
    border-radius: 4px; /* Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
  }
`;

const SkipLinkItem = styled.li`
  margin: 0; /* Remove default margin */
`;

const SkipLinkAnchor = styled.a`
  color: ${colors.deepBlue}; /* Link color */
  text-decoration: none; /* Remove underline */
  font-weight: bold; /* Make text bold */
  font-family: ${fonts.bodyFont}; /* Apply body font to links */
  display: block; /* Make the link a block element for easier clicking */
  padding: 5px 10px; /* Add padding for touch targets */

  &:hover,
  &:focus {
    text-decoration: underline; /* Underline on hover and focus */
    background-color: ${colors.silver}; /* Background color on hover/focus */
    color: ${colors.white}; /* Change text color on hover/focus */
  }
`;

const SkipLink = () => {
  return (
    <SkipLinkList className="genesis-skip-link">
      <SkipLinkItem>
        <SkipLinkAnchor href="#genesis-mobile-nav-primary" className="screen-reader-shortcut">
          Skip to primary navigation
        </SkipLinkAnchor>
      </SkipLinkItem>
      <SkipLinkItem>
        <SkipLinkAnchor href="#genesis-content" className="screen-reader-shortcut">
          Skip to main content
        </SkipLinkAnchor>
      </SkipLinkItem>
      <SkipLinkItem>
        <SkipLinkAnchor href="#genesis-footer-widgets" className="screen-reader-shortcut">
          Skip to footer
        </SkipLinkAnchor>
      </SkipLinkItem>
    </SkipLinkList>
  );
};

export default SkipLink;



