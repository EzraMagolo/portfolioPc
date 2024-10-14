import React from 'react';
import styled from 'styled-components';

// Styled Components
const EmailHeaderContainer = styled.div`
  width: 88%;
  max-width: 4000px;
  padding: 10px;
  border-radius: 60.5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  background-color: #FFFFFF; /* Set background to white */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a slight shadow for depth */
  box-sizing: border-box;
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
            <i className="fa fa-envelope" style={{ marginRight: '6px' }}></i>
            <EmailLink href="mailto:info@raymondrumpf.com">
              info@assist@gmail.com
            </EmailLink>
          </p>
        </div>
      </EmailSection>
      <EmailSection>
        <IconList>
          <IconListItem>
            <IconLink href="mailto:info@raymondrumpf.com">
              <i className="fa fa-envelope"></i> {/* Font Awesome Email Icon */}
            </IconLink>
          </IconListItem>
          <IconListItem>
            <IconLink href="https://www.facebook.com/EMPossibleProfessor" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook-f"></i> {/* Font Awesome Facebook Icon */}
            </IconLink>
          </IconListItem>
          <IconListItem>
            <IconLink href="https://www.linkedin.com/in/raymondrumpf/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin-in"></i> {/* Font Awesome LinkedIn Icon */}
            </IconLink>
          </IconListItem>
          <IconListItem>
            <IconLink href="https://www.youtube.com/channel/UCPC6uCfBVSK71MnPPcp8AGA" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube"></i> {/* Font Awesome YouTube Icon */}
            </IconLink>
          </IconListItem>
        </IconList>
      </EmailSection>
    </EmailHeaderContainer>
  );
};

export default EmailHeader;

