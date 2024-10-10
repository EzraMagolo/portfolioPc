import React from 'react';
import Logo from './logo';
import Navigation from './navigation';
import styled from 'styled-components';

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
    margin-top: 0; /* Set top margin */
    background-color: ${colors.deepBlue}; /* Set deep blue background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const HeaderWrap = styled.div`
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
    justify-content: space-between; /* Space items evenly */
    padding: 30px; /* Add padding */
`;

const Header = () => {
    return (
        <HeaderContainer className="site-header">
            <HeaderWrap className="wrap">
                <Logo />
                <Navigation />
            </HeaderWrap>
        </HeaderContainer>
    );
};

export default Header;


