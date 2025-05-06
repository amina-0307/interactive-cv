import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';


//FadeIn animation
const fadeIn = keyframes`
    from {
    opacity: 0;
    transform: translateY(20px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`;


const HeaderSection = styled.section`
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
    animation: ${fadeIn} 2s ease-out;
`;


const StickyHeader = styled.header`
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    font-size: 4.5rem;
    font-family: 'Amatic SC', sans-serif;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    z-index: 10;
`;


const IconGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  text-align: center;
  margin: 20px 0;
`;


function Header() {
    return (
        <HeaderSection>
            <StickyHeader>
                Amina Saleem | Science Technician
                <IconGroup>
                    <FaHtml5 size={50} />
                    <FaCss3Alt size={50} />
                    <FaJsSquare size={50} />
    </IconGroup>
            </StickyHeader>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC:wght@400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
        </HeaderSection>
    );
}


export default Header;