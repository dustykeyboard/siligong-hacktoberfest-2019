import React from 'react';
import { ThemeMode } from '../theme';
import styled from 'styled-components';

type Props = {
  themeMode: ThemeMode,
  toggleTheme: () => void,
};

const ThemeToggleLink = styled.a`
  display: block;
  border: 0;
  text-decoration: none;
  position: absolute;
  top: ${p => p.theme.spacing};
  right: ${p => p.theme.spacing};
  cursor: pointer;
  font-size: 2rem;
`;

const ThemeToggle = ({ themeMode, toggleTheme }: Props) => (
  <ThemeToggleLink href="/#" onClick={toggleTheme} title={`${themeMode} theme`}>
    {themeMode === 'dark' ? '🌚' : '😎'}
  </ThemeToggleLink>
);

export default ThemeToggle;