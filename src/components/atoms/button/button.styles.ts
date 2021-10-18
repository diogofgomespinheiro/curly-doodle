import styled from 'styled-components';
import { border, color, fontSize, fontWeight, fontFamily, space, compose } from 'styled-system';

import { StyledButtonProps } from './button.types';
import { buttonColorsStyle, buttonSizesStyle, buttonVariantsStyle } from '@themes/shared';

export const Button = styled.button<StyledButtonProps>`
  ${compose(
    border,
    buttonColorsStyle,
    buttonSizesStyle,
    buttonVariantsStyle,
    space,
    fontSize,
    fontWeight,
    fontFamily,
    color
  )}

  cursor: pointer;
`;
