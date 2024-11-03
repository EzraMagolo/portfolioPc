import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Styled Components
const EmailHeaderContainer = styled.div`
  width: 100%;
  max-width: 4000px;
  padding: 2px 0;
  display: flex;
  flex-direction: column; /* Changed to column to stack items */
  justify-content: center; /* Center align the items */
  margin: 0 auto;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  overflow: hidden; /* Hide overflow when minimized */
  transition: max-height 0.3s ease; /* Smooth transition for height change */
`;

const EmailSection = styled.section`
  display: flex;
  margin-bottom: 0;
  align-items: center;
  justify-content: center; /* Center the content */
  box-sizing: border-box;
`;

const EmailLink = styled.a`
  color: rgb(77, 89, 104);
  text-decoration: none;
  font-size: 13px;
`;

const IconList = styled.ul`
  display: flex;
  justify-content: center; /* Center the icon list */
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
  border-radius: 50%;
  padding: 10px;
  background-color: rgb(246, 248, 250);
  color: rgb(77, 89, 104);
  display: inline-block;
  width: 40px;
  height: 40px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(233, 236, 239);
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 1px solid rgb(77, 89, 104);
  border-radius: 15px;
  color: rgb(77, 89, 104);
  cursor: pointer;
  font-size: 14px;
  padding: 5px 15px;
  margin: 10px 0; /* Space above and below the button */
`;

const EmailHeader = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <EmailHeaderContainer style={{ maxHeight: isMinimized ? '40px' : '200px' }}>
      <EmailSection>
       
      </EmailSection>
      <ToggleButton onClick={() => setIsMinimized(!isMinimized)}>
        {isMinimized ? 'Connect With Us!' : 'Hide Socials'}
      </ToggleButton>
      {!isMinimized && (
        <EmailSection>
          <IconList>
             <IconListItem>
              <IconLink href="mailto:info@assist@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </IconLink>
            </IconListItem>
            <IconListItem>
              <IconLink href="mailto:info@assist@gmail.com">
                <FontAwesomeIcon icon={faInstagram} />
              </IconLink>
            </IconListItem>
            <IconListItem>
              <IconLink href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </IconLink>
            </IconListItem>
            <IconListItem>
              <IconLink href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconLink>
            </IconListItem>
            <IconListItem>
              <IconLink href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </IconLink>
            </IconListItem>
          </IconList>
        </EmailSection>
      )}
    </EmailHeaderContainer>
  );
};

export default EmailHeader;





