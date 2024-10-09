import React from 'react';
import styled from 'styled-components';

const SiteInner = styled.div`
  margin-top: 61px;
  background-color: #f9fafb;
`;

const MainContent = styled.main`
  padding: 20px;
`;

const FrontPageWidget = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ContactHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #2d3748;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #4a5568;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
      border-color: #4a90e2;
      outline: none;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ab8;
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

