import React from 'react';
import styled from 'styled-components';
import MenuItem from './menuItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// Color Configurations
const colors = {
    deepBlue: '#003366',
    silver: '#A9A9A9',
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
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
    background-color: ${colors.lightGray};
    border-radius: 20px;
    padding: 5px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        width: 80%; /* Adjust width on mobile */
    }

    &:focus-within {
        background-color: ${colors.white};
        border: 1px solid ${colors.deepBlue};
    }
`;

const SearchInput = styled.input`
    padding: 0.5rem;
    border: none;
    border-radius: 20px;
    color: ${colors.deepBlue};
    font-family: ${fonts.bodyFont};
    width: 200px; /* Fixed width on larger screens */
    outline: none;
    background-color: transparent;
    transition: width 0.3s ease;

    @media (max-width: 1024px) {
        width: 150px; /* Reduce input width on tablets */
    }

    @media (max-width: 768px) {
        width: 100%; /* Full width on mobile */
    }

    &:focus {
        width: 250px;
    }
`;

const ClearButton = styled(IconButton)`
    padding: 5px;
    display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Navigation = () => {
    const [searchValue, setSearchValue] = React.useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const clearSearch = () => {
        setSearchValue("");
    };

    return (
        <Nav>
            <MenuList>
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
                <SearchWrapper>
                    <SearchForm method="get" action="" role="search">
                        <SearchInput
                            type="search"
                            name="s"
                            value={searchValue}
                            onChange={handleSearchChange}
                            placeholder="Search this website"
                        />
                        {searchValue && (
                            <ClearButton onClick={clearSearch} aria-label="Clear search">
                                <CloseIcon style={{ color: colors.deepBlue }} />
                            </ClearButton>
                        )}
                        <IconButton type="submit" aria-label="Search">
                            <SearchIcon style={{ color: colors.deepBlue }} />
                        </IconButton>
                    </SearchForm>
                </SearchWrapper>
            </MenuList>
        </Nav>
    );
};

export default Navigation;







