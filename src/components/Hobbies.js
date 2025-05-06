import React from 'react';
import styled from 'styled-components';


const HobbiesSection = styled.section`
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
    font-size: 2.5rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 50px;
    text-align: center;
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


function Hobbies() {
    return (
        <HobbiesSection>
            <Heading>
                <Highlight>Hobbies and Interests</Highlight>
                </Heading>
            <List>
                <ListItem>Socialising and spending time with family</ListItem>
                <ListItem>Creative writing and reading (fiction and non-fiction</ListItem>
                <ListItem>Fibre arts, particularly crochet and knitting</ListItem>
                <ListItem>Hiking and spending time in nature</ListItem>
                <ListItem>Learning new coding languages (HTML, CSS, JavaScript (React.js))</ListItem>
                <ListItem>Learning new languages, currently Turkish and Spanish</ListItem>
            </List>
        </HobbiesSection>
    );
}


export default Hobbies;