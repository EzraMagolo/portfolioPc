import React from 'react';
import styled from 'styled-components';

const SocialSection = styled.section`
  margin: 20px 0;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const WidgetTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 15px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px; /* Space between social icons */
  list-style: none;
  padding: 0;
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 24px; /* Size of the icons */
    height: 24px;
    fill: #4a5568; /* Icon color */
    transition: fill 0.3s;

    &:hover {
      fill: #2b6cb0; /* Color change on hover */
    }
  }
`;

const SocialLinks = () => {
  return (
    <SocialSection id="simple-social-icons-3" className="widget simple-social-icons one-third">
      <div className="widget-wrap">
        <WidgetTitle className="widgettitle widget-title">Connect with me</WidgetTitle>
        <SocialList className="alignleft">
          <SocialItem className="ssi-email">
            <a href="mailto:hello@raymondrumpf.com">
              <svg role="img" className="social-email" aria-labelledby="social-email-3">
                <title id="social-email-3">Email</title>
                <use xlinkHref="https://raymondrumpf.com/wp-content/plugins/simple-social-icons/symbol-defs.svg#social-email" />
              </svg>
            </a>
          </SocialItem>
          <SocialItem className="ssi-linkedin">
            <a href="https://www.linkedin.com/in/raymondrumpf/" target="_blank" rel="noopener noreferrer">
              <svg role="img" className="social-linkedin" aria-labelledby="social-linkedin-3">
                <title id="social-linkedin-3">LinkedIn</title>
                <use xlinkHref="https://raymondrumpf.com/wp-content/plugins/simple-social-icons/symbol-defs.svg#social-linkedin" />
              </svg>
            </a>
          </SocialItem>
          <SocialItem className="ssi-youtube">
            <a href="https://www.youtube.com/channel/UCPC6uCfBVSK71MnPPcp8AGA" target="_blank" rel="noopener noreferrer">
              <svg role="img" className="social-youtube" aria-labelledby="social-youtube-3">
                <title id="social-youtube-3">YouTube</title>
                <use xlinkHref="https://raymondrumpf.com/wp-content/plugins/simple-social-icons/symbol-defs.svg#social-youtube" />
              </svg>
            </a>
          </SocialItem>
        </SocialList>
      </div>
    </SocialSection>
  );
};

export default SocialLinks;

