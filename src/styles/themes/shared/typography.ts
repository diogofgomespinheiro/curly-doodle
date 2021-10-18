import { Theme } from 'styled-system';

export const themeFonts: Theme['fonts'] = {
  heading: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif',
  body: '"Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif'
};

export const themeFontWeights: Theme['fontWeights'] = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

export const themeFontSizes: Theme['fontSizes'] = {
  heading1: {
    desktop: '3.75rem',
    mobile: '2.5rem'
  },
  heading2: {
    desktop: '2.5rem',
    mobile: '1.25rem'
  },
  heading3: {
    desktop: '1.75rem',
    mobile: '1.125rem'
  },
  body1: {
    desktop: '1.375rem',
    mobile: '1.125rem'
  },
  body2: {
    desktop: '1.125rem',
    mobile: '1rem'
  },
  body3: {
    desktop: '1rem',
    mobile: '0.875rem'
  },
  body4: {
    desktop: '0.875rem',
    mobile: '0.75rem'
  }
};
