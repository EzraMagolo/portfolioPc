import React from 'react';
import styled from 'styled-components';

// Styled components
const TitleArea = styled.div`
    text-align: center; /* Center align text */
    margin: 20px 0; /* Add margin around the title area */
`;

const LogoLink = styled.a`
    display: inline-block; /* Make link an inline block for better alignment */
`;

const LogoImage = styled.img`
    max-width: 100%; /* Make logo responsive */
    height: auto; /* Maintain aspect ratio */
`;

const SiteTitle = styled.p`
    font-size: 1.5rem; /* Increase font size for title */
    font-weight: bold; /* Make the title bold */
    margin: 10px 0 5px; /* Margin around title */
`;

const SiteDescription = styled.p`
    font-size: 1rem; /* Font size for description */
    color: #666; /* Lighter color for description */
    margin: 0; /* Remove margin */
`;

const Logo = () => {
    return (
        <TitleArea itemscope="itemscope" itemtype="http://schema.org/Organization">
            <LogoLink href="" className="custom-logo-link" rel="home" aria-current="page">
                <LogoImage
                    width="200"
                    height="393"
                    src=""
                    className="custom-logo"
                    alt="website logo"
                    decoding="async"
                    fetchpriority="high"
                />
            </LogoLink>
            <SiteTitle itemprop="name">
                <a href="">Lorem</a>
            </SiteTitle>
            <SiteDescription> Lorem ,Ipsum</SiteDescription>
        </TitleArea>
    );
};

export default Logo;