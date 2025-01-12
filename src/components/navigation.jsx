import React, { useState } from 'react';
import styled from 'styled-components';
import MenuItem from './menuItem';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Import dropdown icon

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    silver: '#A9A9A9',
    white: '#FFFFFF',
    lightGray: '#F5F5F5',
};

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
    border-radius: 20px;

    @media (max-width: 768px) {
        padding: 8px 15px;
    }
`;

const MenuList = styled.ul`
    display: flex;
    list-style-type: none;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    position: relative;
    white-space: nowrap;

    @media (max-width: 1024px) {
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

const MenuItemWrapper = styled.li`
    position: relative;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: 1024px) {
        margin: 0.5rem;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin: 0.5rem 0;
    }
`;

const SubMenu = styled.ul`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    right: 100%;
    top: 0;
    background-color: ${colors.white};
    list-style-type: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;

    @media (max-width: 900px) {
        right: 40%;
        transform: translateX(-50%);
    }
`;

const SubMenuItem = styled.li`
    padding: 8px;
    font-size: 14px;
    font-weight: normal;
    color: ${colors.deepBlue};
    cursor: pointer;

    &:hover {
        background-color: ${colors.lightGray};
    }
`;

const DropdownIcon = styled(ArrowDropDownIcon)`
    margin-left: 8px;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const SearchWrapper = styled.li`
    margin-left: auto;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        margin: 1rem 0;
        margin-top: 6rem;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 10px 0;
    }
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    background-color: ${colors.lightGray};
    border-radius: 20px;
    padding: 5px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, opacity 0.3s ease;
    width: auto;

    @media (max-width: 768px) {
        transform: translateY(-150%);
        opacity: 0;
        pointer-events: none;
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
    width: 200px;
    outline: none;
    background-color: transparent;
    transition: width 0.3s ease;

    @media (max-width: 1024px) {
        width: 150px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    &:focus {
        width: 250px;
    }
`;

const ClearButton = styled(IconButton)`
    padding: 5px;
    display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const ContactButton = styled.button`
    background-color: ${colors.deepBlue};
    color: ${colors.white};
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-family: ${fonts.bodyFont};
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        transform: translateY(-150%);
        opacity: 0;
        pointer-events: none;
    }

    &:hover {
        background-color: ${colors.silver};
        color: ${colors.deepBlue};
    }
`;

const Navigation = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [activeSubMenu, setActiveSubMenu] = useState(null); 
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    const toggleSubMenu = (menuIndex) => {
        setActiveSubMenu(activeSubMenu === menuIndex ? null : menuIndex);
    };

    return (
        <Nav>
            <MenuList>
                <MenuItemWrapper onClick={() => toggleSubMenu(1)}>
                    <MenuItem onClick={() => navigate('/courses')} title="Course Offers" />
                    <DropdownIcon isOpen={activeSubMenu === 1} />
                    <SubMenu isOpen={activeSubMenu === 1}>
                        <SubMenuItem>Courses</SubMenuItem>
                        <SubMenuItem>Materials</SubMenuItem>
                    </SubMenu>
                </MenuItemWrapper>
                <MenuItemWrapper onClick={() => toggleSubMenu(2)}>
                    <MenuItem onClick={() => navigate('/research')} title="Research" />
                    <DropdownIcon isOpen={activeSubMenu === 2} />
                    <SubMenu isOpen={activeSubMenu === 2}>
                        <SubMenuItem onClick={() => navigate('/research/robotics')}>Robotics</SubMenuItem>
                        <SubMenuItem onClick={() => navigate('/research/ai')}>AI</SubMenuItem>
                        <SubMenuItem onClick={() => navigate('/research/robotics')}>Environment</SubMenuItem>
                        <SubMenuItem onClick={() => navigate('/research/ai')}>BeeTrax</SubMenuItem>
                        <SubMenuItem onClick={() => navigate('/research/robotics')}>Mechanical Engineering</SubMenuItem>
                    </SubMenu>
                </MenuItemWrapper>
                <MenuItemWrapper>
                    <MenuItem onClick={() => navigate('/publications')} title="Publications" />
                </MenuItemWrapper>
                <MenuItemWrapper>
                    <MenuItem onClick={() => navigate('/about')} title="About" />
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
                                <CloseIcon />
                            </ClearButton>
                        )}
                        <IconButton type="submit" aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                    </SearchForm>
                </SearchWrapper>
            </MenuList>
        </Nav>
    );
};

export default Navigation;

















