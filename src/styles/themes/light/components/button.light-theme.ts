import { ButtonThemeStyles } from '@themes/shared';

export const buttonLightThemeColors: ButtonThemeStyles['buttonColors'] = {
  primary: {
    color: 'ghost-white',
    backgroundColor: 'dark-salmon',
    '&:hover': {
      backgroundColor: 'cooper'
    },
    '&:active': {
      backgroundColor: 'medium-vermilion'
    },
    '&:disabled': {
      backgroundColor: 'dark-salmon-70'
    },
    transition: 'background-color 0.3s ease',
    textDecoration: 'none'
  }
};
