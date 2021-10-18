import CSS from 'csstype';
import { variant, ObjectOrArray, Theme, RequiredTheme, ResponsiveValue } from 'styled-system';

export type ButtonVariantsStyleProps<ThemeType extends Theme = RequiredTheme> = {
  variant?: ResponsiveValue<string, ThemeType> | undefined;
};

export const buttonVariantsStyle = variant({
  prop: 'variant',
  scale: 'buttonVariants',
  variants: {
    primary: {
      border: 0,
      borderRadius: 8
    },
    secondary: {},
    outlined: {},
    text: {}
  }
});

export type ButtonSizesStyleProps<ThemeType extends Theme = RequiredTheme> = {
  size?: ResponsiveValue<string, ThemeType> | undefined;
};

export const buttonSizesStyle = variant({
  prop: 'size',
  scale: 'buttonSizes',
  variants: {
    small: {},
    medium: {
      padding: '8px 16px',
      fontSize: ['body2.mobile', 'body2.desktop'],
      fontWeight: 500
    },
    large: {},
    extraLarge: {}
  }
});

export type ButtonColorsStyleProps<ThemeType extends Theme = RequiredTheme> = {
  colorType?: ResponsiveValue<string, ThemeType> | undefined;
};

export const buttonColorsStyle = variant({
  prop: 'colorType',
  scale: 'buttonColors',
  variants: {
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
    },
    secondary: {},
    success: {
      color: 'ghost-white',
      backgroundColor: 'green',
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
    },
    danger: {},
    info: {},
    warning: {}
  }
});

export type ButtonThemeStyles = {
  buttonVariants?: ObjectOrArray<CSS.StandardProperties<string | string[] | number | number[]>>;
  buttonColors?: ObjectOrArray<CSS.StandardProperties<string | string[] | number | number[]>>;
  buttonSizes?: ObjectOrArray<CSS.StandardProperties<string | string[] | number | number[]>>;
};
