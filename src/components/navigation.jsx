import React from 'react';
import styled from 'styled-components';
import MenuItem from './menuItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

// Color Configurations
const colors = {
    deepBlue: '#003366',
    silver: '#A9A9A9',
    white: '#FFFFFF',
};

// Font Configurations
const fonts = {
    bodyFont: `'Roboto', sans-serif`,
    headingFont: `'Montserrat', sans-serif`,
};

// Styled components for Navigation
const Nav = styled.nav`
    background-color: ${colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    font-family: ${fonts.bodyFont};

    @media (max-width: 768px) {
        padding: 8px 15px; /* Reduce padding on smaller screens */
    }
`;

const MenuList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @media (max-width: 1024px) {
        flex-wrap: wrap; /* Allow items to wrap on tablets */
        justify-content: space-around; /* Distribute items on smaller screens */
    }

    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on mobile */
        align-items: center;
    }
`;

const MenuItemWrapper = styled.li`
    margin: 0 1rem;

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: 1024px) {
        margin: 0.5rem; /* Reduce spacing on tablets */
    }

    @media (max-width: 768px) {
        width: 100%; /* Full width on mobile */
        text-align: center;
        margin: 0.5rem 0; /* Add spacing on mobile */
    }
`;

const SearchWrapper = styled.li`
    margin-left: auto;

    @media (max-width: 768px) {
        width: 100%; /* Full width for search on mobile */
        margin: 1rem 0; /* Add spacing above search */
        display: flex;
        justify-content: center; /* Center the search form */
    }
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: 80%; /* Adjust width on mobile */
    }
`;

const SearchInput = styled.input`
    padding: 0.5rem;
    border: 1px solid ${colors.silver};
    border-radius: 4px;
    color: ${colors.deepBlue};
    font-family: ${fonts.bodyFont};
    width: 200px; /* Fixed width on larger screens */

    @media (max-width: 1024px) {
        width: 150px; /* Reduce input width on tablets */
    }

    @media (max-width: 768px) {
        width: 100%; /* Full width on mobile */
    }
`;

const Navigation = () => {
    return (
        <Nav className="nav-primary genesis-responsive-menu" aria-label="Main" id="genesis-nav-primary">
            <div className="wrap">
                <MenuList id="menu-primary" className="menu genesis-nav-menu menu-primary js-superfish">
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






