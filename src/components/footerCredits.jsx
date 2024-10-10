import React from 'react';
import styled from 'styled-components';

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    white: '#FFFFFF',
    silver: '#A9A9A9',
};

const fonts = {
    bodyFont: `'Roboto', sans-serif`,
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
`;

const FooterLink = styled.a`
    color: ${colors.silver}; /* Silver link color */
    text-decoration: none; /* Remove underline */
    
    &:hover {
        text-decoration: underline; /* Underline on hover */
    }
`;

const FooterCredits = () => {
    return (
        <FooterContainer className="footer-credits widget-area">
            <div className="wrap">
                <section id="text-9" className="widget widget_text">
                    <div className="widget-wrap">
                        <div className="textwidget">
                            <FooterText>
                                Copyright ©&nbsp;2024 Lorem C.&nbsp;Ipsum. All rights reserved.{' '}
                                <FooterLink href="#top" rel="nofollow">Return to top</FooterLink>
                            </FooterText>
                        </div>
                    </div>
                </section>
            </div>
        </FooterContainer>
    );
};

export default FooterCredits;


