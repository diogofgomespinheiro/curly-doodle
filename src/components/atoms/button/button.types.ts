import * as React from 'react';
import type * as Stitches from '@stitches/react';

import { Button } from './button';

export type ButtonProps = Stitches.VariantProps<typeof Button> &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {};
