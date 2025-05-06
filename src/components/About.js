import React from 'react';
import styled from 'styled-components';


const AboutSection = styled.section`
    padding: 60px 20px;
    max-width: 1100px;
    margin: 0 auto;
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


function About() {
    return (
        <AboutSection>
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