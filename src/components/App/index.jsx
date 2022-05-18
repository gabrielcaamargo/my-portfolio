import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../themes/global';
import defaultTheme from '../themes/default';

import Presentation from '../Presentation';
import AboutMe from '../AboutMe';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Presentation />
      <AboutMe />
    </ThemeProvider>
  );
}
