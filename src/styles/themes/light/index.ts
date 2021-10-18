import { Theme } from 'styled-system';

import { ButtonThemeStyles, baseTheme } from '@themes/shared';

import { buttonLightThemeColors } from './components';
import { themeColors } from './colors';

export const lightTheme: Theme & ButtonThemeStyles & { name: string } = {
  name: 'Light Theme',
  ...baseTheme,
  colors: themeColors,
  buttonColors: buttonLightThemeColors
};
