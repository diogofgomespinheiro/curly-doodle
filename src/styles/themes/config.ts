import { createStitches } from '@stitches/react';

import {
  buttonStyles,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  media,
  space,
  transitions,
  zIndices
} from './shared';

export const { styled, theme } = createStitches({
  theme: {
    colors,
    fonts,
    fontWeights,
    fontSizes,
    space,
    zIndices,
    transitions,
    media,
    ...buttonStyles
  }
});
