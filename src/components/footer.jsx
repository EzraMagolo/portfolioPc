import React from 'react';
import styled from 'styled-components';
import Sitemap from './siteMap';
import SocialLinks from './social-Links';
import FooterCredits from './footerCredits';

// Styled components
const FooterContainer = styled.footer`
    background-color: #343a40; /* Dark background for the footer */
    color: #ffffff; /* White text color */
    padding: 40px 0; /* Add padding */
`;

const FooterWidgets = styled.div`
    display: flex; /* Flexbox layout for widget areas */
    justify-content: space-between; /* Space between the widgets */
    margin-bottom: 20px; /* Margin below the widgets */
`;

const FooterTitle = styled.h2`
    visibility: hidden; /* Hide the title for screen readers */
`;

const Footer = () => {
    return (
        <FooterContainer className="site-footer">
            <div className="footer-widgets" id="genesis-footer-widgets">
                <FooterTitle className="genesis-sidebar-title screen-reader-text">Footer</FooterTitle>
                <div className="wrap">
                    
                        <div className="widget-area footer-widgets-1 footer-widget-area">
                            <Sitemap />
                             <SocialLinks/>
                        </div>

                        
                   
                </div>
            </div>
            <FooterCredits />
        </FooterContainer>
    );
};

export default Footer;

