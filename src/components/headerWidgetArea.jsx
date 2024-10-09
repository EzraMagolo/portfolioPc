import React from 'react';

import styled from 'styled-components';

// Styled components
const WidgetArea = styled.div`
    display: flex; /* Use flexbox for layout */
    justify-content: center; /* Center align items */
    padding: 20px; /* Add padding around the widget area */
    background-color: #f9f9f9; /* Light background color for the widget area */
    border: 1px solid #e5e5e5; /* Light border for subtle definition */
    border-radius: 5px; /* Rounded corners */
    margin: 20px 0; /* Margin for spacing */
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
                        
                    </TextWidget>
                </WidgetTextWrap>
            </WidgetSection>
        </WidgetArea>
    );
};

export default HeaderWidgetArea;

