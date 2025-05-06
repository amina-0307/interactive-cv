import React from 'react';
import styled from 'styled-components';


const AwardsSection = styled.section`
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
    border-bottom: 2px solid ${({ theme }) => theme.highlightBorder};
`;


const List = styled.ul`
    padding-left: 20px;
    margin-top: 20px;
`;


const ListItem = styled.li`
    margin-bottom: 20px;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    font-size: 1.25rem;
      @media (max-width: 768px) {
        font-size: 1.0rem;
    }
    text-align: justify;
    line-height: 2.0
`;


function Awards() {
    return (
        <AwardsSection>
            <Paragraph>Clitheroe Royal Grammar School and Sixth Form</Paragraph>
            <List>
                <ListItem>AQA Baccalaureate (PASS)</ListItem>
                <ListItem>Extended Project Qualification (A)</ListItem>
            </List>
            <Paragraph>Reed.co.uk</Paragraph>
            <List>
                <ListItem>Intellectual Property Law (Online Training)</ListItem>
            </List>
            <Paragraph>Codecademy Courses (with certificates)</Paragraph>
            <List>
                <ListItem>Learn HTML</ListItem>
                <ListItem>Learn CSS-in-JS</ListItem>
                <ListItem>Learn CSS</ListItem>
                <ListItem>Introduction to Back-End Programming</ListItem>
                <ListItem>CompTIA Security+: Architecture & Infrastructure Concepts</ListItem>
                <ListItem>CompTIA Cloud Essentials+: Utilising Cloud Services</ListItem>
            </List>
        </AwardsSection>
    );
}


export default Awards;