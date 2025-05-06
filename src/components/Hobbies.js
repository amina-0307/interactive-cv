import React from 'react';
import styled from 'styled-components';


const HobbiesSection = styled.section`
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
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
            <List>
                <ListItem>Socialising and spending time with family</ListItem>
                <ListItem>Creative writing and reading (fiction and non-fiction)</ListItem>
                <ListItem>Fibre arts, particularly crochet and knitting</ListItem>
                <ListItem>Hiking and spending time in nature</ListItem>
                <ListItem>Learning new coding languages (HTML, CSS, JavaScript (React.js))</ListItem>
                <ListItem>Learning new languages, currently Turkish and Spanish</ListItem>
            </List>
        </HobbiesSection>
    );
}


export default Hobbies;