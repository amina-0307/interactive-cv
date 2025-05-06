import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme';
import { GlobalStyles } from './components/GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Referees from './components/Referees';
import Footer from './components/Footer';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';


const SectionWrapper = styled.div`
  margin-bottom: 50px;
`;


const AltBackground = styled.div`
  background-color: ${({ theme }) => theme.altBackground};
  padding: 60px 0;
`;


const IconGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 20px 0;
`;


const ToggleButton = styled.button`
    width: 100%;
    margin-right: 10px;
    margin-top: 4px;
    padding: 10px 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.text};
    border-radius: 15px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.2, 0.01, 0.47, 1);

    &: hover {
      box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    }
`;


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <GlobalStyles />
    <ToggleButton onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </ToggleButton>
    <IconGroup>
      <FaHtml5 size={30} />
      <FaCss3Alt size={30} />
      <FaJsSquare size={30} />
    </IconGroup>
    <Header />
    <SectionWrapper>
      <AltBackground>
        <About />
        <Summary />
      </AltBackground>
    </SectionWrapper>
    <SectionWrapper>
      <Experience />
    </SectionWrapper>
    <SectionWrapper>
      <AltBackground>
        <Education />
        <Awards />
      </AltBackground>
    </SectionWrapper>
    <SectionWrapper>
      <Skills />
    </SectionWrapper>
    <SectionWrapper>
      <Hobbies />
    </SectionWrapper>
    <SectionWrapper>
      <Referees />
    </SectionWrapper>
    <Footer
      toggleTheme={toggleTheme}
      isDarkMode={isDarkMode}
      ToggleButton={ToggleButton}
    />
  </ThemeProvider>
  );
}

export default App;