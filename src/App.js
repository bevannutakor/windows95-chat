import React from 'react';
import { ThemeProvider } from 'styled-components';

import original from 'react95/dist/themes/original';
import GlobalStyles from './styles/GlobalStyles';
import BodyWrapper from './styles/BodyWrapper';
import './styles/App.css'
import Home from './Home';

export default function App() {
  return(
    <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <BodyWrapper>
        <Home/>
      </BodyWrapper>
    </ThemeProvider>
    </>
  )
}

