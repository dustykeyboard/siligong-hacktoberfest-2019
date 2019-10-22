import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import getTheme, { ThemeMode } from './theme';
import GlobalStyles from './GlobalStyles';

import Header from './features/Header';
import Welcome from './features/Welcome';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <div>
        <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
        <GlobalStyles />
        <Header />
        <Welcome />
      </div>
    </ThemeProvider>
  );
}

export default App;
