import React from 'react';
import styled from 'styled-components';


const FooterSection = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: {({ theme }) => theme.body};
    padding: 10px 0;
    text-align: center;
    border-top: 2 px solid ${({ theme }) => theme.text};
    z-index: 100;
`;


function Footer({ toggleTheme, isDarkMode, ToggleButton }) {
    return (
        <FooterSection>
            <ToggleButton onClick={toggleTheme}>
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </ToggleButton>
        </FooterSection>
    );
}


export default Footer;