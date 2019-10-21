import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  * {
    box-sizing: border-box;
  }

  :root {
    color: #D5EBF2;
    background: #152347;
  }
`;

export default GlobalStyle;
