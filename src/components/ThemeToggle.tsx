import React from 'react';
import { ThemeMode } from '../theme';
import styled, { css } from 'styled-components';

type Props = {
  theme: ThemeMode,
  toggleTheme: () => void,
};

const ThemeToggleLink = styled.button`
  display: block;
  border: 2px solid ${p => p.theme.color};
  background: ${p => p.theme.background};
  border-radius: 0.75em;
  text-decoration: none;
  position: absolute;
  top: ${p => p.theme.spacing};
  right: ${p => p.theme.spacing};
  cursor: pointer;
  font-size: 2rem;
  width: 2.5em;
  padding: ${p => p.title === 'light theme' ? css`0 0 0 1em` : css`0 1em 0 0`};
  transition: 0.3s;
`;

const themeEmoji = {
  light: '😎',
  dark: '🌚'
}

const ThemeToggle = ({ theme, toggleTheme }: Props) => (
  <ThemeToggleLink onClick={toggleTheme} title={`${theme} theme`}>
    {themeEmoji[theme]}
  </ThemeToggleLink>
);

export default ThemeToggle;