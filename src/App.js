import CollapsibleSection from './components/CollapsibleSection';
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
import { FaSun, FaMoon } from 'react-icons/fa';


const SectionWrapper = styled.div`
  margin-bottom: 50px;
`;


const AltBackground = styled.div`
  background-color: ${({ theme }) => theme.altBackground};
  padding: 60px 0;
`;


const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'LXGW WenKai Mono TC', sans-serif;
    font-size: 1.0rem;

    svg {
      font-size: 1.0rem;
    }

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
      color: ${({ theme }) => theme.toggleHover};
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
      {isDarkMode ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>} Mode
    </ToggleButton>
    <Header />
    <SectionWrapper>
      <AltBackground>
        <CollapsibleSection title="A Little About Me">
        <About />
        </CollapsibleSection>
        <CollapsibleSection title="Professional Summary">
        <Summary />
        </CollapsibleSection>
      </AltBackground>
    </SectionWrapper>
    <SectionWrapper>
      <CollapsibleSection title="Work Experience + Employment">
      <Experience />
      </CollapsibleSection>
    </SectionWrapper>
    <SectionWrapper>
      <AltBackground>
        <CollapsibleSection title="Education and Qualifications">
        <Education />
        </CollapsibleSection>
        <CollapsibleSection title="Awards and Acknowledgements">
        <Awards />
        </CollapsibleSection>
      </AltBackground>
    </SectionWrapper>
    <SectionWrapper>
      <CollapsibleSection title="Skills">
      <Skills />
      </CollapsibleSection>
    </SectionWrapper>
    <SectionWrapper>
      <CollapsibleSection title="Hobbies and Interests">
      <Hobbies />
      </CollapsibleSection>
    </SectionWrapper>
    <SectionWrapper>
      <AltBackground>
        <CollapsibleSection title="Referees">
        <Referees />
        </CollapsibleSection>
      </AltBackground>
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