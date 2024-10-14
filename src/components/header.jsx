import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import styled from 'styled-components';
import EmailHeader from './emailHeader';

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    white: '#FFFFFF',
    silver: '#A9A9A9',
};

const fonts = {
    headingFont: `'Montserrat', sans-serif`,
};

// Styled components
const HeaderContainer = styled.header`
    background-color: ${colors.deepBlue}; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky; // Make the header stick to the top during scrolling
    top: 0;
    z-index: 1000; // Ensure it stays above other content
`;

const HeaderWrap = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px; 
    
    @media (max-width: 1024px) {
        padding: 15px 30px; // Adjust padding for tablets
    }

    @media (max-width: 768px) {
        flex-direction: column; // Stack logo and navigation on smaller screens
        padding: 10px 20px;
    }
`;

// Logo Styling
const LogoWrapper = styled.div`
    flex: 1; 
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center; // Center logo on smaller screens
        margin-bottom: 10px; // Add space below the logo
    }
`;

// Navigation Styling
const NavWrapper = styled.nav`
    flex: 2; 
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center; // Center navigation on smaller screens
    }
`;

const Header = () => {
    return (
        <HeaderContainer className="site-header">
           <EmailHeader/>
            <HeaderWrap className="wrap">
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <NavWrapper>
                    <Navigation />
                </NavWrapper>
            </HeaderWrap>
        </HeaderContainer>
    );
};

export default Header;



