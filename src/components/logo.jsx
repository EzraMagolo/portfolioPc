import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';

const colors = {
    deepBlue: '#003366',
    silver: '#A9A9A9',
    white: '#FFFFFF',
};

const TitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Keeps the logo on the left */
    margin: 20px 0;
`;

const LogoLink = styled.a`
    display: inline-block;
`;

const LogoImage = styled.img`
    max-width: 30%;
    height: auto;
    margin-top: 27px;
    border-radius: 50%; /* Makes the logo circular */
    overflow: hidden;
`;

const SiteTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0 5px;
    color: ${colors.deepBlue};
`;

const SiteDescription = styled.p`
    font-size: 1rem;
    color: ${colors.silver};
    margin: 0;
`;

const Logo = () => {
    return (
        <TitleArea itemscope="itemscope" itemtype="http://schema.org/Organization">
            <LogoLink href="/" className="custom-logo-link" rel="home" aria-current="page">
                <LogoImage
                    src={logo}
                    width="300"
                    height="500"
                    className="custom-logo"
                    alt="Website logo"
                    decoding="async"
                    fetchpriority="high"
                />
            </LogoLink>
            <SiteTitle itemprop="name">
                <a href="/" style={{ color: colors.deepBlue }}>ed+</a>
            </SiteTitle>
            <SiteDescription></SiteDescription>
        </TitleArea>
    );
};

export default Logo;




