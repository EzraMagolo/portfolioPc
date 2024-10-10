import React from 'react';
import styled from 'styled-components';
import VideoCard from './card';
import SocialLinks from './social-Links';
import FooterCredits from './footerCredits';
import { Card } from '@mui/material';

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
    padding: 40px 0; /* Add padding */
    font-family: ${fonts.bodyFont}; /* Body font for the footer */
`;

const FooterWidgets = styled.div`
    display: flex; /* Flexbox layout for widget areas */
    justify-content: space-between; /* Space between the widgets */
    margin-bottom: 20px; /* Margin below the widgets */
    flex-wrap: wrap; /* Ensure widgets wrap on smaller screens */
`;

const FooterTitle = styled.h2`
    visibility: hidden; /* Hide the title for screen readers */
`;

const WidgetArea = styled.div`
    flex: 1; /* Allow flexible sizing */
    margin-right: 20px; /* Space between widget columns */
    min-width: 200px; /* Minimum width for smaller devices */
    color: black; /* Set text color to black for widget content */
    
    &:last-child {
        margin-right: 0; /* Remove margin from last widget */
    }

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
                        <WidgetArea className="widget-area footer-widgets-1 footer-widget-area">
                            <VideoCard/>
                        </WidgetArea>
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



