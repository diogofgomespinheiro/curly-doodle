import * as React from 'react';
import { ColorProps, SpaceProps, FontSizeProps, FontWeightProps, BorderProps } from 'styled-system';

import {
  ButtonColorsStyleProps,
  ButtonVariantsStyleProps,
  ButtonSizesStyleProps
} from '@themes/shared';

export type StyledButtonProps = ColorProps &
  FontSizeProps &
  FontWeightProps &
  SpaceProps &
  BorderProps &
  ButtonColorsStyleProps &
  ButtonVariantsStyleProps &
  ButtonSizesStyleProps;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps & {
    variant: 'primary' | 'secondary' | 'danger';
    size: 'medium' | 'large';
  };
