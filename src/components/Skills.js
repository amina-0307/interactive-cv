import React from 'react';
import styled from 'styled-components';


const SkillsSection = styled.section`
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
`;


const Paragraph = styled.section`
    font-size: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.1rem;
    }
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
      @media (max-width: 768px) {
        font-size: 1.0rem;
    }
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
      @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    text-align: justify:
    line-height: 2.0;
`;


function Skills() {
    return (
        <SkillsSection>
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