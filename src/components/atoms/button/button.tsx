import * as React from 'react';

import { ButtonProps } from './button.types';
import * as S from './button.styles';

const Button = (props: ButtonProps): React.ReactElement => {
  return <S.Button {...props}>Hello</S.Button>;
};

export { Button };
