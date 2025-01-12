import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Styled Components
const EmailHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-top: -20px;
`;

const EmailSection = styled.section`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const EmailLink = styled.a`
  color: rgb(77, 89, 104);
  text-decoration: none;
  font-size: 13px;
  margin-left: 8px; /* Space between icon and email text */
`;

const IconList = styled.ul`
  display: flex;
  margin: -6px -6px 0 0;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;
  margin-left: auto; /* Push icons to the right */
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

const EmailHeader = () => {
  return (
    <EmailHeaderContainer>
      <EmailSection>
        <FontAwesomeIcon icon={faEnvelope} />
        <EmailLink href="mailto:random@gmail.com">
          random@gmail.com
        </EmailLink>
      </EmailSection>
      <IconList>
        <IconListItem>
          <IconLink href="" target="_blank" rel="noopener noreferrer">
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
            <FontAwesomeIcon icon={faXTwitter} />
          </IconLink>
        </IconListItem>
      </IconList>
    </EmailHeaderContainer>
  );
};

export default EmailHeader;







