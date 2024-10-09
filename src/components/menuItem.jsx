import React from 'react';
import styled from 'styled-components';

// Styled components
const MenuItemContainer = styled.li`
    position: relative; /* Positioning for dropdown */
    list-style: none; /* Remove default list style */
`;

const MenuLink = styled.a`
    display: block; /* Block display for full clickable area */
    padding: 10px 15px; /* Padding around the link */
    text-decoration: none; /* Remove underline */
    color: #333; /* Text color */
    transition: background-color 0.3s; /* Smooth background transition */

    &:hover {
        background-color: #f3f3f3; /* Background color on hover */
    }
`;

const SubMenuToggle = styled.button`
    background: transparent; /* Transparent background */
    border: none; /* No border */
    cursor: pointer; /* Pointer cursor */
    padding: 0; /* Remove padding */
    margin-left: 10px; /* Space between title and button */
    font-size: 14px; /* Font size */
    color: #666; /* Color of the toggle */
`;

const SubMenu = styled.ul`
    display: none; /* Hidden by default */
    position: absolute; /* Positioning for dropdown */
    left: 0; /* Align to the left */
    top: 100%; /* Position below the parent */
    margin: 0; /* Remove margin */
    padding: 0; /* Remove padding */
    list-style: none; /* Remove default list style */
    background-color: #fff; /* Background color */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Add shadow for depth */
    z-index: 1000; /* Ensure it appears above other content */

    /* Show submenu when parent is expanded */
    ${MenuItemContainer}:hover & {
        display: block; /* Show submenu on hover */
    }
`;

const SubMenuItem = styled.li`
    padding: 10px 15px; /* Padding for submenu items */

    &:hover {
        background-color: #f3f3f3; /* Background color on hover */
    }
`;

const MenuItem = ({ title, subItems }) => {
    return (
        <MenuItemContainer className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
            <MenuLink href="#">
                <span>{title}</span>
            </MenuLink>
            {subItems && subItems.length > 0 && (
                <>
                    <SubMenuToggle
                        className="sub-menu-toggle"
                        aria-expanded="false"
                        aria-pressed="false"
                    >
                        <span className="screen-reader-text"></span>
                    </SubMenuToggle>
                    <SubMenu className="sub-menu">
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
