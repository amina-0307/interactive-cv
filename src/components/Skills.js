import React from 'react';
import styled, { keyframes } from 'styled-components';


//FadeIn animation
const fadeIn = keyframes`
    from {
    opacity: 0;
    transform: trans;ateY(20px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`;


const SkillsSection = styled.section`
    padding: 20px;
    max-width: 1100px;
    margin: 0 auto;
    animation: ${fadeIn} 2s ease-out;
`;


const Highlight = styled.span`
    background-color: ${({ theme }) => theme.highlightBackground};
    color: ${({ theme }) => theme.highlightText};
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-weight: bold;
    box-shadow: 0 0 10px ${({ theme }) => theme.highlight};
`;


const Heading = styled.h2`
    font-size: 3.5rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 50px;
    text-align: center;
`;


const Paragraph = styled.section`
    font-size: 1.5rem;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    line-height: 2.0;
    text-align: justify;
    border-bottom: 2px solid ${({ theme }) => theme.highlightBackground};
`;


const List = styled.ul`
    padding-left: 20px;
    margin-top: 20px;
`;


const ListItem = styled.li`
    margin-top: 20px;
    text-align: justify;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    font-size: 1.25rem;
    line-height: 2.0;
`;


const SubList = styled.ul`
    padding-left: 20px;
    margin-bottom: 20px;
`;


const SubListItem = styled.li`
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    font-size: 1.0rem;
    text-align: justify:
    line-height: 2.0;
`;


function Skills() {
    return (
        <SkillsSection>
            <Heading>
                <Highlight>Skills</Highlight>
                </Heading>
            <Paragraph>Technical Skills</Paragraph>
            <List>
                <ListItem>Bacterial and mammalian cell culture</ListItem>
                <ListItem>Molecular biology techniques</ListItem>
                <SubList>
                    <SubListItem>RNA isolation</SubListItem>
                    <SubListItem>cDNA synthesis</SubListItem>
                    <SubListItem>PCR/qPCR</SubListItem>
                    <SubListItem>Gel electrophoresis</SubListItem>
                    <SubListItem>Cloning</SubListItem>
                    <SubListItem>Restriction enzyme digest</SubListItem>
                    <SubListItem>ELISA</SubListItem>
                    <SubListItem>Western blotting</SubListItem>
                </SubList>
                <ListItem>Scientific writing</ListItem>
                <ListItem>Microsoft Word/PowerPoint/Excel (data handling and interpretation)</ListItem>
                <ListItem>GraphPad Prism</ListItem>
                <ListItem>Critical/independent thinking</ListItem>
                <ListItem>Problem-solving</ListItem>
            </List>
            <Paragraph>Soft Skills</Paragraph>
            <List>
                <ListItem>Leadership/initiative</ListItem>
                <ListItem>Observation and attention to detail</ListItem>
                <ListItem>Customer service and interpersonal communication</ListItem>
                <ListItem>Teamwork</ListItem>
                <ListItem>Hardworking</ListItem>
                <ListItem>Proactive Learning</ListItem>
                <ListItem>Excellent communication and organisational skills</ListItem>
            </List>
        </SkillsSection>
    );
}


export default Skills;