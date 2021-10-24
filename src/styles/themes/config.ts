import { createStitches } from '@stitches/react';

import { fontSizes, fontWeights, fonts, space, zIndices, buttonStyles } from './shared';

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      primary: '#555b6e',
      secondary: '#a2a5af',
      accent100: '#da926d',
      accent200: '#d7885f',
      accent300: '#d37e51',
      accent_text: '#fafbff',
      background: '#fafbff'
    },
    fonts,
    fontWeights,
    fontSizes,
    space,
    zIndices,
    transitions: {
      ease_background_transition: 'background-color 0.3s ease'
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)'
    },
    ...buttonStyles
  }
});
