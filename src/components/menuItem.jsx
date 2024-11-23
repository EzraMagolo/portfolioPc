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

// Styled Components
const MenuItemContainer = styled.li`
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
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
        border-radius: 25px;
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
        outline: none;
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
    min-width: 200px;

    /* Show submenu on hover for larger screens */
    @media (min-width: 769px) {
        ${MenuItemContainer}:hover & {
            display: block;
        }
    }

    /* Show/hide submenu on toggle for mobile screens */
    @media (max-width: 768px) {
        display: ${(props) => (props.isOpen ? 'block' : 'none')};
        position: relative;
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
const MenuItem = ({ title, subItems, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e) => {
        e.stopPropagation(); // Prevent click from bubbling to parent
        setIsOpen((prev) => !prev);
    };

    return (
        <MenuItemContainer>
            <MenuLink href="#" onClick={onClick}>
                {title}
            </MenuLink>
            {subItems && subItems.length > 0 && (
                <>
                    <SubMenuToggle
                        aria-expanded={isOpen}
                        aria-pressed={isOpen}
                        onClick={handleToggle}
                    >
                        ▼
                    </SubMenuToggle>
                    <SubMenu isOpen={isOpen}>
                        {subItems.map((subItem, index) => (
                            <SubMenuItem key={index}>
                                <MenuLink href={subItem.link}>{subItem.label}</MenuLink>
                            </SubMenuItem>
                        ))}
                    </SubMenu>
                </>
            )}
        </MenuItemContainer>
    );
};

export default MenuItem;




