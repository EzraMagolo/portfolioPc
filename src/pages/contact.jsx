import React from 'react';
import styled from 'styled-components';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#2d3748',
  mediumGray: '#4a5568',
  lightGray: '#cbd5e0',
  buttonBlue: '#4a90e2',
  buttonHoverBlue: '#357ab8',
};

// Font Configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`, // Body font
  headingFont: `'Montserrat', sans-serif`, // Heading font
};

// Styled components
const SiteInner = styled.div`
  margin-top: 61px;
  background-color: #f9fafb; /* Light gray background */
`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: ${colors.white}; /* White background for the widget */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ContactHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: ${colors.darkGray}; /* Dark gray for the header */
  font-family: ${fonts.headingFont}; /* Apply heading font */
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: ${colors.mediumGray}; /* Medium gray for label */
    font-family: ${fonts.bodyFont}; /* Apply body font */
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.lightGray}; /* Light gray border */
    border-radius: 4px;
    font-size: 1rem;
    font-family: ${fonts.bodyFont}; /* Apply body font */
    transition: border-color 0.3s;

    &:focus {
      border-color: ${colors.buttonBlue}; /* Border color on focus */
      outline: none; /* Remove outline */
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${colors.buttonBlue}; /* Button background color */
  color: ${colors.white}; /* White text color */
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${fonts.bodyFont}; /* Apply body font */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.buttonHoverBlue}; /* Darker blue on hover */
  }
`;

const Contact = () => {
  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <div className="wrap">
            <section className="widget seo_slider_widget">
              <div className="widget-wrap">
                <ContactHeader>Contact Us</ContactHeader>
                <form>
                  <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" required></textarea>
                  </FormGroup>
                  <SubmitButton type="submit">Send Message</SubmitButton>
                </form>
              </div>
            </section>
          </div>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default Contact;



