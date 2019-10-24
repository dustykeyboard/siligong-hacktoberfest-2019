import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components'
import theme from './src/theme';

const Themed = ({ children }) => {
  return (
    <ThemeProvider theme={theme('light')}>
      {children}
    </ThemeProvider>
  )
}

const themedRenderer = (ui, options) =>
  render(ui, { wrapper: Themed, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { themedRenderer as render }