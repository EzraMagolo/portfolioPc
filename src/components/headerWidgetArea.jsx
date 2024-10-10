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
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center align items */
    padding: 20px; /* Add padding around the widget area */
    background-color: ${colors.deepBlue}; /* Deep Blue background for the widget area */
    border: 1px solid ${colors.silver}; /* Silver border for subtle definition */
    border-radius: 5px; /* Rounded corners */
    margin: 20px 0; /* Margin for spacing */
    color: ${colors.white}; /* White text color */
`;

const WidgetSection = styled.section`
    width: 100%; /* Full width for the widget section */
`;

const WidgetTextWrap = styled.div`
    text-align: center; /* Center align text in the widget */
`;

const TextWidget = styled.div`
    margin: 0; /* Remove default margin */
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

