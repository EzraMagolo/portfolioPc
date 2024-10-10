import React from 'react';
import styled from 'styled-components';
import MenuItem from './menuItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'; // Import Material Icons Search

// Color Configurations
const colors = {
    deepBlue: '#003366',
    silver: '#A9A9A9',
    white: '#FFFFFF',
};

// Font Configurations
const fonts = {
    bodyFont: `'Roboto', sans-serif`, // Body font
    headingFont: `'Montserrat', sans-serif`, // Heading font
};

// Styled components for Navigation
const Nav = styled.nav`
    background-color: ${colors.white}; /* White background */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    padding: 10px 20px 10px 0;
    font-family: ${fonts.bodyFont}; /* Apply body font to the nav */
`;

const MenuList = styled.ul`
    display: flex; /* Use flexbox for horizontal layout */
    list-style-type: none; /* Remove default list styles */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
`;

const MenuItemWrapper = styled.li`
    margin: 0 1rem; /* Add space between menu items */

    &:last-child {
        margin-right: 0; /* Remove margin for the last item */
    }
`;

const SearchWrapper = styled.li`
    margin-left: auto; /* Push search form to the right */
`;

const SearchForm = styled.form`
    display: flex; /* Use flexbox for input and button */
    align-items: center; /* Center items vertically */
`;

const SearchInput = styled.input`
    padding: 0.5rem; /* Add padding for input */
    border: 1px solid ${colors.silver}; /* Silver border */
    border-radius: 4px; /* Rounded corners */
    color: ${colors.deepBlue}; /* Deep Blue text */
    font-family: ${fonts.bodyFont}; /* Apply body font to input */
`;

const Navigation = () => {
    return (
        <Nav className="nav-primary genesis-responsive-menu" aria-label="Main" id="genesis-nav-primary">
            <div className="wrap">
                <MenuList id="menu-primary" className="menu genesis-nav-menu menu-primary js-superfish">
                    {/* Replace these with actual MenuItems */}
                    <MenuItemWrapper>
                        <MenuItem title="Lorem Ipsum Dolor" subItems={['Sit Amet', 'Consectetur Adipiscing']} />
                    </MenuItemWrapper>
                    <MenuItemWrapper>
                        <MenuItem title="Sed Do Eiusmod" subItems={['Tempor Incididunt', 'Ut Labore']} />
                    </MenuItemWrapper>
                    <MenuItemWrapper>
                        <MenuItem title="Dolor Sit Amet" />
                    </MenuItemWrapper>
                    <MenuItemWrapper>
                        <MenuItem title="Ut Enim Ad Minim" />
                    </MenuItemWrapper>
                    <MenuItemWrapper>
                        <MenuItem title="Quis Nostrud Exercitation" />
                    </MenuItemWrapper>
                    <SearchWrapper className="right search">
                        <SearchForm className="search-form" method="get" action="" role="search">
                            <label className="search-form-label screen-reader-text" htmlFor="searchform-1"></label>
                            <SearchInput className="search-form-input" type="search" name="s" id="searchform-1" placeholder="Search this website" />
                            <IconButton type="submit" aria-label="Search">
                                <SearchIcon style={{ color: colors.deepBlue }} />
                            </IconButton>
                        </SearchForm>
                    </SearchWrapper>
                </MenuList>
            </div>
        </Nav>
    );
};

export default Navigation;





