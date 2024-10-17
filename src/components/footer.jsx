import React from 'react';
import styled from 'styled-components';
import VideoCard from './card';
import SocialLinks from './social-Links';
import FooterCredits from './footerCredits';

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    white: '#FFFFFF',
    silver: '#A9A9A9',
};

// Font Configurations
const fonts = {
    bodyFont: `'Roboto', sans-serif`,
    headingFont: `'Montserrat', sans-serif`,
};

// Styled components
const FooterContainer = styled.footer`
    background-color: ${colors.deepBlue}; /* Deep Blue background for the footer */
    color: ${colors.white}; /* White text color */
    padding: 40px 20px; /* Add padding, responsive on smaller screens */
    font-family: ${fonts.bodyFont}; /* Body font for the footer */
    text-align: center; /* Center text in the footer */
`;

const FooterWidgets = styled.div`
 display: flex;
    justify-content: center; /* Center the widgets horizontally */
    align-items: center; /* Center the widgets vertically (if needed) */
    margin-bottom: 20px;
    flex-wrap: wrap;
    width: 100%; /* Ensure it spans the full width */
    gap: 20px; /* Add space between the widgets */
`;

const FooterTitle = styled.h2`
    visibility: hidden; /* Hide the title for screen readers */
`;

const WidgetArea = styled.div`
    flex: 1; /* Allow flexible sizing */
    margin: 10px; /* Space around each widget */
    min-width: 250px; /* Minimum width for smaller devices */
    max-width: 600px; /* Limit max width to maintain layout */

    a {
        color: ${colors.white}; /* White link text */
        text-decoration: none; /* Remove underlines */
        
        &:hover {
            text-decoration: underline; /* Underline on hover */
        }
    }
`;

// Footer component
const Footer = () => {
    return (
        <FooterContainer className="site-footer">
            <div className="footer-widgets" id="genesis-footer-widgets">
                <FooterTitle className="genesis-sidebar-title screen-reader-text">Footer</FooterTitle>
                <div className="wrap">
                    <FooterWidgets>
                        <WidgetArea className="widget-area footer-widgets-2 footer-widget-area">
                            <SocialLinks />
                        </WidgetArea>
                    </FooterWidgets>
                </div>
            </div>
            <FooterCredits />
        </FooterContainer>
    );
};

export default Footer;




