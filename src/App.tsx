import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';

import Header from './features/Header';
import Welcome from './features/Welcome';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <Welcome />
      </div>
    </ThemeProvider>
  );
}

export default App;
