import React from 'react';
import styled from 'styled-components';


const RefereesSection = styled.section`
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
    border-bottom: 2px solid ${({ theme }) => theme.highlightBorder};
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
    text-align: justify;
    line-height: 2.0;
`;


function Referees() {
    return (
        <RefereesSection>
            <List>
                <ListItem>Dr Stephen Sikkink | Senior Scientist (CSS)</ListItem>
                <SubList>
                    <SubListItem>Project Supervisor (undergraduate and postgraduate)</SubListItem>
                    <SubListItem>Contact: s.k.sikkink@bradford.ac.uk | (+44) 1274 232379</SubListItem>
                </SubList>
                <ListItem>Dr David Ansell | Assistant Professor</ListItem>
                <SubList>
                    <SubListItem>Personal Academic Tutor (PAT)</SubListItem>
                    <SubListItem>Conatct: d.ansell@bradford.ac.uk | (+44) 1274 236521</SubListItem>
                </SubList>
            </List>
        </RefereesSection>
    );
}


export default Referees;