import React from 'react';
import styled from 'styled-components';


const ExperienceSection = styled.section`
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


const Job = styled.div`
    margin-bottom: 20px;
    cursor: pointer;
`;


const Heading = styled.h2`
    font-size: 2.5rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 50px;
    text-align: center;
`;


const SubHeading = styled.h3`
    font-size: 2.0rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 20px;
    text-align: left;
    border-bottom: 2px solid ${({ theme }) => theme.highlightBackground};
`;


const Paragraph = styled.section`
    font-size: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.1rem;
    }
    font-family: 'LXGW WenKai Mono TC'; sans-serif;
    line-height: 2.0;
    text-align: justify;
`;


const List = styled.ul`
    padding-left: 20px;
    margin-top: 40px;
`;


const ListItem = styled.li`
    margin-bottom: 40px;
    text-align: justify;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    font-size: 1.25rem;
      @media (max-width: 768px) {
        font-size: 1.0rem;
    }
    line-height: 2.0;
`;


function Experience() {
    return (
        <ExperienceSection>
            <Heading>
                <Highlight>Work Experience + Employment</Highlight>
                </Heading>
            <Job>
                <SubHeading>Clitheroe Royal Grammar School and Sixth Form</SubHeading>
                <Paragraph>Science Technician | Clitheroe (2 Dec 2024 - Present, term-time)</Paragraph>
                <List>
                    <ListItem>Preparation, and setting up of equipment for science practicals across Main School and Sixth Form</ListItem>
                    <ListItem>Checking and monitoring equipment before and after use</ListItem>
                    <ListItem>Assisting in practicals and catch-up sessions if needed</ListItem>
                </List>
            </Job>
            <Job>
                <SubHeading>Booths Supermarket</SubHeading>
                <Paragraph>Customer Assistant (Specialist) | Clitheroe (31 Oct 2023 - 15 dec 2023), Barrowford (19 Dec 2023 - Present, part-time from 23 nov 2024)</Paragraph>
                <List>
                    <ListItem>Greeeted, seated, and served customers</ListItem>
                    <ListItem>Provided detailed information on the menu (food and drinks), increasing upsell opportunities</ListItem>
                    <ListItem>Made and served a variety of hot/cold drinks, includign sundaes and milkshakes, maintaining high quality standards</ListItem>
                    <ListItem>Cleaned and reset the tables, ensuring a pleasant dining experience</ListItem>
                </List>
            </Job>
            <Job>
                <SubHeading>Old Medical School</SubHeading>
                <Paragraph>Volunteer | Leeds (10 Jan 2023 - 7 Mar 2023)</Paragraph>
                <List>
                    <ListItem>Assisted in MRSA, Routine, and Enteric laboratories, gaining hands-on experience with the WASP machine</ListItem>
                    <ListItem>Helped sort samples out at delivery reception, improving sample processing efficiency</ListItem>
                </List>
            </Job>
            <Job>
                <SubHeading>Boundary Outlet</SubHeading>
                <Paragraph>Retail Customer Service Assistant | Colne (28 Aug 2019 - 17 Jun 2023)</Paragraph>
                <List>
                    <ListItem>Handled customer queries and complaints efficiently and professionally, maintaining high customer service standards</ListItem>
                    <ListItem>positive contribution to the customer service team, maintaining high levels of energy and enthusiasm for positive customer interactions</ListItem>
                    <ListItem>Promoted products and stock on till banks</ListItem>
                    <ListItem>Improved communication and problem-solving skills</ListItem>
                </List>
            </Job>
            <Job>
                <SubHeading>Banny's Fish and Chips</SubHeading>
                <Paragraph>Waitress (Front of House Staff | Colne (02 Aug 2018 - 12 Jan 2019)</Paragraph>
                <List>
                    <ListItem>Provided excellent service by greeting and serving customers efficiently</ListItem>
                    <ListItem>Cleaned and reset the tables, maintaining cleanliness and order in the dining room</ListItem>
                    <ListItem>Made and served food and hot/cold drinks</ListItem>
                </List>
            </Job>
            <Job>
                <SubHeading>Castleford Care Home For Elderly People</SubHeading>
                <Paragraph>Work Experience | Clitheroe (Jul 2018, 1 week, 9am-5pm)</Paragraph>
                <List>
                    <ListItem>Engaged and interacted with residents, providing companionship and assistance with daily activities</ListItem>
                    <ListItem>Helped feed less able residents</ListItem>
                    <ListItem>Recognised the importance of listening as a key part of communication</ListItem>
                </List>
            </Job>
            <Job>
                <SubHeading>Farleys Solicitors</SubHeading>
                <Paragraph>Work Experience | Burnley (Mar 2016, 1 week, 9am-5pm)</Paragraph>
                <List>
                    <ListItem>Assisted in cases regarding child neglect, developing strong observational and communication skills</ListItem>
                </List>
            </Job>
        </ExperienceSection>
    );
}

export default Experience;