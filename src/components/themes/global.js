import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body{
    background: ${({ theme }) => theme.colors.blue.background};
    color: #FFF;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 15px;
    font-family: "Inter", sans-serif;
  }

  span{
    color: ${({ theme }) => theme.colors.blue.main};
  }
`;
