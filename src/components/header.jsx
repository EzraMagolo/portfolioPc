import React, { useState } from 'react';
import Logo from './logo';
import Navigation from './navigation';
import styled from 'styled-components';
import EmailHeader from './emailHeader';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    white: '#FFFFFF',
    silver: '#A9A9A9',
};

// Styled components
const HeaderContainer = styled.header`
    background-color: ${colors.deepBlue};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const HeaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;

    @media (max-width: 1080px) {
        padding: 10px 20px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

// Logo Styling
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 3;

    @media (max-width: 1080px) {
        display: flex;
    }
`;

// Navigation Wrapper
const NavWrapper = styled.nav`
    flex: 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: transparent;
    padding: 0;

    @media (max-width: 1080px) {
        display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
        flex-direction: column;
        align-items: center;
        background-color: ${colors.deepBlue};
        padding: 10px;
        border-radius: 5px;
    }
`;

// Menu Toggle Button
const MenuToggle = styled.div`
    display: none;

    @media (max-width: 1080px) {
        display: block;
        align-self: center;

        .MuiIconButton-root {
            padding: 8px;
        }

        svg {
            font-size: 2.5rem; /* Increase size for the menu icons */
        }
    }
`;

const EmailWrapper = styled.div`
    @media (max-width: 1080px) {
        display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
        background-color: ${colors.deepBlue};
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        text-align: center;
    }

    @media (min-width: 300px) {
        display: block;
        position: static;
        margin-top: 20px;
    }
`;

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <HeaderContainer>
            <EmailWrapper isMenuOpen={isMenuOpen}>
                <EmailHeader />
            </EmailWrapper>
            <HeaderWrap>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <MenuToggle>
                    <IconButton onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? (
                            <CloseIcon style={{ color: colors.white }} />
                        ) : (
                            <MenuIcon style={{ color: colors.white }} />
                        )}
                    </IconButton>
                </MenuToggle>
                <NavWrapper isMenuOpen={isMenuOpen}>
                    <Navigation />
                </NavWrapper>
            </HeaderWrap>
        </HeaderContainer>
    );
};

export default Header;






