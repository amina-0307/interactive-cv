import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Shadows Into Light Two', sans-serif;
        font-size: 1.5rem;
        transition: all 0.25s linear;
        margin: 0;
        padding: 0;
    }
    * {
    box-sizing: border-box;
    }
`;