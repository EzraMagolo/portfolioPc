import React from 'react';
import styled from 'styled-components';

// Color and Font Configurations
const colors = {
    deepBlue: '#003366',
    white: '#FFFFFF',
    silver: '#A9A9A9',
};

// Styled components
const WidgetArea = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: ${colors.deepBlue};
    border: 1px solid ${colors.silver};
    border-radius: 5px;
    margin: 20px 0;
    color: ${colors.white};
    
    @media (max-width: 1024px) {
        padding: 15px; // Reduce padding on tablets
    }

    @media (max-width: 768px) {
        flex-direction: column; // Stack content vertically on mobile
        padding: 10px;
    }
`;

const WidgetSection = styled.section`
    width: 100%; // Full width for widget section
    max-width: 1200px; // Limit max width for larger screens
    padding: 10px; // Additional padding inside the section
    
    @media (max-width: 768px) {
        padding: 5px; // Reduce padding on smaller screens
    }
`;

const WidgetTextWrap = styled.div`
    text-align: center;
    padding: 10px; // Additional padding for better spacing on all devices

    @media (max-width: 768px) {
        padding: 5px; // Adjust padding on smaller screens
    }
`;

const TextWidget = styled.div`
    margin: 0;
    font-size: 18px; // Default font size

    @media (max-width: 1024px) {
        font-size: 16px; // Slightly smaller font for tablets
    }

    @media (max-width: 768px) {
        font-size: 14px; // Reduce font size for mobile devices
    }
`;

const HeaderWidgetArea = () => {
    return (
        <WidgetArea className="widget-area header-widget-area">
            <WidgetSection id="custom_html-2" className="widget_text widget widget_custom_html">
                <WidgetTextWrap className="widget_text widget-wrap">
                    <TextWidget className="textwidget custom-html-widget">
                        {/* Add your text or content here */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </TextWidget>
                </WidgetTextWrap>
            </WidgetSection>
        </WidgetArea>
    );
};

export default HeaderWidgetArea;

