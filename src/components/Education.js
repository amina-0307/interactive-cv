import React from 'react';
import styled from 'styled-components';


const EducationSection = styled.section`
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
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


const SubHeading = styled.h3`
    font-size: 2.5rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 20px;
    text-align: left;
    border-bottom: 2px solid ${({ theme }) => theme.highlightBackground};
`;


const Paragraph = styled.section`
    font-size: 1.5rem;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    line-height: 2.0;
    text-align: justify;
`;


const List = styled.ul`
    padding-left: 20px;
    margin-top: 20px;
`;


const ListItem = styled.li`
    margin-bottom: 20px;
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
    margin-bottom: 10px;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    font-size: 1.0rem;
    text-align: justify;
    line-height: 2.0;
`;


function Education() {
    return (
        <EducationSection>
            <Heading>
                <Highlight>Education and Qualifications</Highlight>
                </Heading>
            <SubHeading>MSc Medical Bioscience (Merit)</SubHeading>
            <Paragraph>University of Bradford | Sept 2022 - Sept 2023</Paragraph>
            <List>
                <ListItem>Research Project Module Overall: Research Project (74.0% - Distinction)</ListItem>
                <SubList>
                    <SubListItem>Viva Voce on Research Project (80.0% - Distinction)</SubListItem>
                    <SubListItem>Laboratory Performance (90.0% - Distinction)</SubListItem>
                    <SubListItem>Project Report: 10,000 words (67.0% - Merit)</SubListItem>
                </SubList>
            </List>
            <SubHeading>BSc (Hons) Biomedical Science (2:1)</SubHeading>
            <Paragraph>University of Bradford | Sept 2019 - Sept 2022</Paragraph>
            <List>
                <ListItem>Final Year Project Overall: Biomedical Science Research Project (81.0% - First Class)</ListItem>
                <SubList>
                    <SubListItem>Poster Presentation of Literature and Project Plan (95.0% - First Class)</SubListItem>
                    <SubListItem>Project Report: 5,000 words (75.5% - First Class)</SubListItem>
                    <SubListItem>Laboratory Performance (89.0% - First Class)</SubListItem>
                </SubList>
            </List>
            <SubHeading>A Levels (AQA)</SubHeading>
            <Paragraph>Clitheroe Royal Grammar School and Sixth Form | Sept 2017 - Aug 2019</Paragraph>
            <List>
                <ListItem>4A, 7B</ListItem>
            </List>
            <SubHeading>GCSE's</SubHeading>
            <Paragraph>Clitheroe Royal Grammar School | Sept 2012 - Aug 2017</Paragraph>
            <List>
                <ListItem>4A, 7B</ListItem>
            </List>
        </EducationSection>
    );
}


export default Education;