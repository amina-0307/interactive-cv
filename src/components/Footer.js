import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';


const FooterSection = styled.div`
    bottom: 0;
    width: 100%;
    background: {({ theme }) => theme.body};
    padding: 10px 0;
    text-align: center;
    border-top: 2 px solid ${({ theme }) => theme.text};
    z-index: 5;
`;


const Paragraph = styled.p`
    font-size: 0.8rem;
    @media (max-width: 768px) {
        font-size: 0.5rem;
    }
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    line-height: 1.0;
    text-align: center;
    z-index: 10;
`;


function Footer({ toggleTheme, isDarkMode, ToggleButton }) {
    return (
        <FooterSection>
                <Paragraph>
                Built and designed by Amina Saleem. All rights reserved. ©
            </Paragraph>
            <ToggleButton onClick={toggleTheme}>
                {isDarkMode ? <><FaSun /> Light Mode</> : <><FaMoon /> DarkMode</>} Mode
            </ToggleButton>
            
        </FooterSection>
    );
}


export default Footer;