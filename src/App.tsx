import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import getTheme, { ThemeMode } from './theme';
import GlobalStyles from './GlobalStyles';

import Header from './features/Header';
import Welcome from './features/Welcome';
import Sponsors from './features/Sponsors';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const localTheme = window.localStorage.getItem('theme');
  let initialTheme: ThemeMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  if (localTheme === 'light' || localTheme === 'dark')
    initialTheme = localTheme;

  const [theme, setTheme] = useState<ThemeMode>(initialTheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <div>
        <ThemeToggle {...{ theme, toggleTheme }} />
        <GlobalStyles />
        <Header />
        <Welcome />
        <Sponsors />
      </div>
    </ThemeProvider>
  );
};

export default App;
