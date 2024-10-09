import React from 'react';
import styled from 'styled-components';

// Styled components
const FooterContainer = styled.div`
    background-color: #f8f9fa; /* Light background for footer */
    padding: 20px 0; /* Add padding */
    text-align: center; /* Center text */
`;

const FooterText = styled.p`
    margin: 0; /* Remove default margin */
    color: #333; /* Text color */
`;

const FooterCredits = () => {
    return (
        <FooterContainer className="footer-credits widget-area">
            <div className="wrap">
                <section id="text-9" className="widget widget_text">
                    <div className="widget-wrap">
                        <div className="textwidget">
                            <FooterText>
                                Copyright ©&nbsp;2024 Lorem C.&nbsp;Ipsum. All rights reserved. <a href="#top" rel="nofollow">Return to top</a>
                            </FooterText>
                        </div>
                    </div>
                </section>
            </div>
        </FooterContainer>
    );
};

export default FooterCredits;

