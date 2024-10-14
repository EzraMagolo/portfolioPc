import React from 'react';
import styled from 'styled-components';

// Color configurations
const colors = {
  white: '#FFFFFF',
  silver: '#A9A9A9',
  deepBlue: '#003366',
  darkGray: '#4F4F4F',
  mediumGray: '#A9A9A9',
  lightGray: '#cbd5e0',
  buttonBlue: '#003366',
  buttonHoverBlue: '#357ab8',
};

// Font Configurations
const fonts = {
  bodyFont: `'Roboto', sans-serif`,
  headingFont: `'Montserrat', sans-serif`,
};

// Styled components
const SiteInner = styled.div`
  margin-top: 61px;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 800px; /* Overall widget width */
  width: 100%; /* Ensure it takes full width up to the max-width */
  margin: 0 auto; /* Center the widget */
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px 40px; /* Use consistent padding on all sides */
  box-sizing: border-box;
`;


const ContactHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: ${colors.deepBlue};
  font-family: ${fonts.headingFont};
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 2px solid ${colors.deepBlue};
`;

const FormContainer = styled.div`
  max-width: 500px; /* Set a max width for the form */
  width: 100%; /* Make sure it takes full width within its container */
  margin: 0 auto; /* Center the form container */
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: ${colors.mediumGray};
    font-family: ${fonts.bodyFont};
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid ${colors.lightGray};
    border-radius: 4px;
    font-size: 1rem;
    font-family: ${fonts.bodyFont};
    transition: border-color 0.3s;

    &:focus {
      border-color: ${colors.buttonBlue};
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${colors.buttonBlue};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${fonts.bodyFont};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.buttonHoverBlue};
  }
`;

const Contact = () => {
  return (
    <SiteInner>
      <MainContent className="content" id="genesis-content">
        <FrontPageWidget className="front-page-widget front-page-1">
          <ContactHeader>Contact Us</ContactHeader>
          <FormContainer>
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
          </FormContainer>
        </FrontPageWidget>
      </MainContent>
    </SiteInner>
  );
};

export default Contact;
