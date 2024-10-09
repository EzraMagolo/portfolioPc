import React from 'react';
import styled from 'styled-components';

const SitemapSection = styled.section`
  margin-bottom: 2rem; /* Margin at the bottom for spacing */
`;

const SitemapTitle = styled.h3`
  font-size: 1.5rem; /* Title font size */
  margin-bottom: 1rem; /* Margin below the title */
`;

const MenuContainer = styled.div`
  background-color: #f9f9f9; /* Background color for the menu */
  padding: 1rem; /* Padding around the menu */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow */
`;

const MenuList = styled.ul`
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem; /* Margin between menu items */

  &:last-child {
    margin-bottom: 0; /* Remove margin from the last item */
  }
`;

const MenuLink = styled.a`
  color: #2b6cb0; /* Link color */
  text-decoration: none; /* Remove underline */
  
  &:hover,
  &:focus {
    text-decoration: underline; /* Underline on hover and focus */
  }
`;

const Sitemap = () => {
  return (
    <SitemapSection id="nav_menu-2" className="widget widget_nav_menu one-third first">
      <div className="widget-wrap">
        <SitemapTitle className="widgettitle widget-title">Sitemap</SitemapTitle>
        <MenuContainer className="menu-sitemap-container">
          <MenuList id="menu-sitemap" className="menu">
            <MenuItem className="menu-item menu-item-type-post_type menu-item-object-page">
              <MenuLink href="https://raymondrumpf.com/course-offerings/">Lorem Ipsum</MenuLink>
            </MenuItem>
            <MenuItem className="menu-item menu-item-type-post_type menu-item-object-page">
              <MenuLink href="https://raymondrumpf.com/research/">Dolor Sit Amet</MenuLink>
            </MenuItem>
            <MenuItem className="menu-item menu-item-type-post_type menu-item-object-page">
              <MenuLink href="https://raymondrumpf.com/publications/">Consectetur Adipiscing</MenuLink>
            </MenuItem>
            <MenuItem className="menu-item menu-item-type-post_type menu-item-object-page">
              <MenuLink href="https://raymondrumpf.com/news/">Ut Enim Ad Minima</MenuLink>
            </MenuItem>
            <MenuItem className="menu-item menu-item-type-post_type menu-item-object-page">
              <MenuLink href="https://raymondrumpf.com/about/">Quis Nostrud Exercitation</MenuLink>
            </MenuItem>
            <MenuItem className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item">
              <MenuLink href="https://raymondrumpf.com/" aria-current="page">Home</MenuLink>
            </MenuItem>
          </MenuList>
        </MenuContainer>
      </div>
    </SitemapSection>
  );
};

export default Sitemap;


