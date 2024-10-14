import React, { useState } from 'react';
import styled from 'styled-components';

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

// Styled components
const MenuItemContainer = styled.li`
    position: relative;
    list-style: none;
    padding: 0 10px; /* Add padding to ensure spacing between items */
`;

const MenuLink = styled.a`
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: ${colors.deepBlue};
    transition: background-color 0.3s;
    font-family: ${fonts.bodyFont};
    cursor: pointer;

    &:hover {
        background-color: ${colors.silver};
        color: ${colors.white};
    }
`;

const SubMenuToggle = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 5px;
    font-size: 14px;
    color: ${colors.silver};
    font-family: ${fonts.bodyFont};

    &:focus {
        outline: none; /* Remove default focus outline */
    }
`;

const SubMenu = styled.ul`
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${colors.white};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    min-width: 200px; /* Ensure minimum width for better spacing */

    /* Show submenu when parent is hovered or toggled */
    ${MenuItemContainer}:hover & {
        display: block;
    }

    @media (max-width: 768px) {
        position: relative;
        display: ${(props) => (props.isOpen ? 'block' : 'none')}; /* Show/hide based on state */
    }
`;

const SubMenuItem = styled.li`
    padding: 10px 15px;
    color: ${colors.deepBlue};
    font-family: ${fonts.bodyFont};
    cursor: pointer;

    &:hover {
        background-color: ${colors.silver};
        color: ${colors.white};
    }
`;

// React Component
const MenuItem = ({ title, subItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle submenu on click for mobile
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MenuItemContainer className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
            <MenuLink href="#">
                <span>{title}</span>
            </MenuLink>
            {subItems && subItems.length > 0 && (
                <>
                    <SubMenuToggle
                        className="sub-menu-toggle"
                        aria-expanded={isOpen}
                        aria-pressed={isOpen}
                        onClick={handleToggle}
                    >
                        {/* Display toggle indicator */}
                        ▼
                    </SubMenuToggle>
                    <SubMenu className="sub-menu" isOpen={isOpen}>
                        {subItems.map((subItem, index) => (
                            <SubMenuItem
                                key={index}
                                className="menu-item menu-item-type-custom menu-item-object-custom"
                            >
                                <MenuLink href="#">
                                    <span>{subItem}</span>
                                </MenuLink>
                            </SubMenuItem>
                        ))}
                    </SubMenu>
                </>
            )}
        </MenuItemContainer>
    );
};

export default MenuItem;



