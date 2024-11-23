import React from 'react';
import styled from 'styled-components';

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    white: '#FFFFFF',
    silver: '#A9A9A9',
};

// Font Configurations
const fonts = {
    bodyFont: `'Roboto', sans-serif`, // Light sans-serif font
};

// Styled components
const FooterContainer = styled.div`
    background-color: ${colors.deepBlue}; /* Deep Blue background for footer */
    padding: 20px 0; /* Add padding */
    text-align: center; /* Center text */
    color: ${colors.white}; /* White text color */
    font-family: ${fonts.bodyFont}; /* Apply body font */
`;

const FooterText = styled.p`
    margin: 0; /* Remove default margin */
    color: ${colors.white}; /* White text color */
    font-size: 14px;
    line-height: 1.5; /* Improve readability */
`;

const FooterLink = styled.a`
    color: ${colors.silver}; /* Silver link color */
    text-decoration: none; /* Remove underline */

    &:hover {
        text-decoration: underline; /* Underline on hover */
    }
`;

// Contact Info Styled Component
const ContactInfo = styled.div`
    font-size: 12px; /* Smaller font for contact details */
    margin-top: 10px; /* Space above the contact info */
`;

const FooterCredits = () => {
    return (
        <FooterContainer className="footer-credits widget-area">
            <div className="wrap">
                <section id="text-9" className="widget widget_text">
                    <div className="widget-wrap">
                        <div className="textwidget">
                            <FooterText>
                                Copyright ©&nbsp;2024 Jeffrey &nbsp;Aligula. All rights reserved.{' '}
                                <FooterLink href="#top" rel="nofollow">Return to top</FooterLink>
                            </FooterText>
                            <ContactInfo>
                                Email: <FooterLink href="mailto:aligula.jeff@gmail.com">aligula.jeff@gmail.com</FooterLink>
                                <br />
                                Follow us on:
                                <FooterLink href="https://www.facebook.com" target="_blank"> Facebook</FooterLink>, 
                                <FooterLink href="https://www.twitter.com" target="_blank"> Twitter</FooterLink>, 
                                <FooterLink href="https://www.linkedin.com/in/aligulagk/" target="_blank"> LinkedIn</FooterLink>
                            </ContactInfo>
                        </div>
                    </div>
                </section>
            </div>
        </FooterContainer>
    );
};

export default FooterCredits;



