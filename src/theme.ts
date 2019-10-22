export type ThemeType = {
  theme: {
    color: string,
    background: string,
    link: string,
  }
};

export const dark = {
  theme: {
    color: '#D5EBF2',
    background: '#152347',
    link: '#FFF34E',
    linkHover: '#D110B8',
    spacing: '1rem',
  },
};

export const light = {
  theme: {
    color: '#152347',
    background: '#D5EBF2',
    link: '#4B57EA',
    linkHover: '#69BE5A',
    spacing: '1rem',
  },
};

export type ThemeMode = 'light' | 'dark';
const theme = (mode: ThemeMode) => mode === 'dark' ? dark.theme : light.theme;

export default theme
