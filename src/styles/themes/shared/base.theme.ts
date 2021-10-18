import { Theme } from 'styled-system';

import { themeSpace } from './dimensions';
import { themeFontSizes, themeFontWeights, themeFonts } from './typography';
import { ButtonThemeStyles } from './components';

export interface BaseTheme
  extends Pick<
      Theme,
      | 'breakpoints'
      | 'mediaQueries'
      | 'space'
      | 'fontSizes'
      | 'fonts'
      | 'fontWeights'
      | 'lineHeights'
      | 'letterSpacings'
      | 'sizes'
      | 'borderWidths'
      | 'radii'
      | 'zIndices'
    >,
    Pick<ButtonThemeStyles, 'buttonSizes'> {}

export const baseTheme: BaseTheme = {
  space: themeSpace,
  fonts: themeFonts,
  fontSizes: themeFontSizes,
  fontWeights: themeFontWeights
};
