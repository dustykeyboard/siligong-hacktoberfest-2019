import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle<ThemeType>`
  ${styledNormalize};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${p => p.theme.background};
    color: ${p => p.theme.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`;

export default GlobalStyle;
