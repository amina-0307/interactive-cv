import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const SectionWrapper = styled.div`
    margin-bottom: 40px;
    border-bottom: 2px solid ${({ theme }) => theme.text};
`;


const ToggleButton = styled.h2`
    font-size: 2rem;
    cursor: pointer;
    margin: 100px;
    padding: 20px 0;
    text-align: center;
    font-family: 'LXGW WenKai Mono TC', sans-serif;

    &:hover {
        color: ${({ theme }) => theme.toggleHover};
    }
`;


const Content = styled.div`
    max-height: ${({ isOpen }) => (isOpen ? '20000px' : '0')};
    overflow: hidden;
    transition: max-height 0.4s ease;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 0.4s ease, max-height 0.4s ease;
`;


function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SectionWrapper>
            <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                {title} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </ToggleButton>
            <Content isOpen={isOpen}>
                {children}
            </Content>
        </SectionWrapper>
    );
}


export default CollapsibleSection;
