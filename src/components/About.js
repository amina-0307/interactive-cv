import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


//Scroll animation
const AboutSection = styled(motion.section)`
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
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Amatic SC', sans-serif;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    line-height: 2.0;
    text-align: justify;
`;


function About() {
    return (
        <AboutSection
            initial={{ opacity: 0, y: 50 }} //where it starts
            whileInView={{ opacity: 1, y: 0 }} //where it ends when visible
            transition={{ duration: 0.8 }} //how long it takes
            viewport={{ once: true, amount: 0.3 }} //triggers when 30% is visible
        >
            <Heading>
                <Highlight>A Little About Me</Highlight>
            </Heading>
            <Paragraph>
                Hello! Welcome to my Interactive CV. I am passionate about creating user-friendly web applications and bringing designs to life.
            </Paragraph>
            <Paragraph>
                MSc Medical Bioscience and BSc (Hons) Biomedical Science graduate from the University of Bradford (IBMS accredited).
            </Paragraph>
            <Paragraph>
                Undergraduate Research Project Title: Cloning of the wound repair target gene: Perlecan (LG3 fragment) into Lentiviral expression vectors and expression in human fibroblasts.
            </Paragraph>
            <Paragraph>
                Postgraduate Research Project Title: Oxidative stress in melanoma cells - the influence of the skin microbiome.
            </Paragraph>
        </AboutSection>
    );
};

export default About;