import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Styled Components
const EmailHeaderContainer = styled.div`
  width: 100%;
  max-width: 4000px;
  padding: 2px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #FFFFFF; /* Set background to white */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a slight shadow for depth */
  box-sizing: border-box;
  min-height: 1px; /* Set a minimum height (adjust as needed) *
`;

const EmailSection = styled.section`
  display: flex;
  margin-bottom: 0;
  align-items: center;
  box-sizing: border-box;
`;

const EmailLink = styled.a`
  color: rgb(77, 89, 104);
  text-decoration: none;
  font-size: 16px; /* Adjust font size as needed */
`;

const IconList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: -6px -6px 0 0;
  padding: 0;
  flex-wrap: wrap;
  list-style-type: none;
  box-sizing: border-box;
`;

const IconListItem = styled.li`
  margin: 6px 6px 0 0;
  padding: 0;
  box-sizing: border-box;
`;

const IconLink = styled.a`
  border-radius: 50%; /* Optional: Make icons circular */
  padding: 10px;
  background-color: rgb(246, 248, 250);
  color: rgb(77, 89, 104); /* Change icon color */
  display: inline-block;
  width: 40px; /* Size of the icon */
  height: 40px; /* Size of the icon */
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s; /* Add transition for hover effect */

  &:hover {
    background-color: rgb(233, 236, 239); /* Change background color on hover */
  }
`;

const EmailHeader = () => {
  return (
    <EmailHeaderContainer>
      <EmailSection>
        <div>
          <p style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '6px' }} />
            <EmailLink href="mailto:info@assist@gmail.com">
              info@assist@gmail.com
            </EmailLink>
          </p>
        </div>
      </EmailSection>
      <EmailSection>
        <IconList>
          <IconListItem>
            <IconLink href="mailto:info@assist@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconLink>
          </IconListItem>
          <IconListItem>
            <IconLink href="https://www.facebook.com/EMPossibleProfessor" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </IconLink>
          </IconListItem>
          <IconListItem>
            <IconLink href="https://www.linkedin.com/in/raymondrumpf/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconLink>
          </IconListItem>
          <IconListItem>
            <IconLink href="https://www.youtube.com/channel/UCPC6uCfBVSK71MnPPcp8AGA" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </IconLink>
          </IconListItem>
        </IconList>
      </EmailSection>
    </EmailHeaderContainer>
  );
};

export default EmailHeader;


