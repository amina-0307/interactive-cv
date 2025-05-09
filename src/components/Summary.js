import React from 'react';
import styled from 'styled-components';


const SummarySection = styled.section`
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
`;


const Highlight = styled.span`
    font-size: 2.0rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 20px;
    text-align: left;
    background-color: ${({ theme }) => theme.highlightBackground};  
`;


const SubHeading = styled.h3`
    font-size: 2.0rem;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 20px;
    text-align: left;
    border-bottom: 2px solid ${({ theme }) => theme.highlightBackground};
`; 


const Paragraph = styled.p`
    font-size: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.1rem;
    }
    font-family: 'LXGW WenKai Mono TC', sans-serif;
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


function Summary() {
    return (
        <SummarySection>
            <Paragraph>
                During my academic journey, I had the privilege of engaging in diverse research projects that allowed me to explore the intricacies of molecular biology and microbiology.
            </Paragraph>
            <Paragraph>
                These experiences nurtured my passion for scientific exploration, but they've also sparked a new interest - Software Development and AI.
            </Paragraph>
            <Paragraph>
                I am actively learning Front-End Development (HTML, CSS, and JavaScript) and exploring the fundamentals of coding and programming, with plans to expand into Back-End Development and Machine Learning. My academic background has already equipped me with strong data handling skills, structured problem-solving, and logical reasoning - all of which I am now applying in tech.
            </Paragraph>
            <Paragraph>
                As a highly motivated individual with a solid foundation in microbiology and molecular biology techniques, I bring problem-solving abilities and a creative mindset to every challenge. Throughout my academic journey, I was also the go-to person for peers needing support during research projects, highlighting my collaborative nature and strong communication skills.
            </Paragraph>
            <Paragraph>
                My skillset includes bacterial and mammalian cell culture, along with molecular biology techniques, such as RNA extraction, cDNA synthesis, and qPCR. With a keen eye for detail, I am proficient in accurately recording and intereting data - an ability I believe is just as valuable in the IT field.
            </Paragraph>
            <Paragraph>
                I am now actively seeking a Junior Role in tech where I can combine my scientific insight with my growing technical skills to contribute meaningfully - especially in areas that bridge science, technology, and innovation.
            </Paragraph>
            <Paragraph>
                Let's connect - I'd love to explore how my evolving skillset and passion can contribute to your team's success!
            </Paragraph>
            <SubHeading>Summary At A Glance:</SubHeading>
                <List>
                    <ListItem>Highly motivated and dedicated individual with a strong background in microbiology and molecular biology laboratory techniques.</ListItem>
                    <ListItem>Excellent communication and organisational skills; I helped train colleagues new to the customer service and cafe teams, as well as being the individual my classmates went to for help during both, my undergraduate and postgraduate research projects.</ListItem>
                    <ListItem>Adept at accurately interpreting data, ensuring integrity and reliability.</ListItem>
                    <ListItem>Proactive learner, continuously seeking opportunities to expand knowledge and skills.</ListItem>
                    <ListItem>Capable in HTML, CSS, and JavaScript (React framework); I am learning other coding languages, such as Python 3.</ListItem>
                </List>
        </SummarySection>
    );
}


export default Summary;