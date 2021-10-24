import { styled } from '@themes/config';

const getColorStyles = (variant: string) => {
  return {
    color: `$buttonColors$${variant}_text`,
    backgroundColor: `$buttonColors$${variant}_background`,
    '&:hover': {
      backgroundColor: `$buttonColors$${variant}_background_hover`
    },
    '&:active': {
      backgroundColor: `$buttonColors$${variant}_background_active`
    },
    '&:disabled': {
      backgroundColor: `$buttonColors$${variant}_background_disabled`
    }
  };
};

const getSizeStyles = (size: string) => {
  return {
    padding: `$buttonSizes$${size}_padding`,
    fontSize: `$buttonSizes$${size}_fontSize`,
    fontWeight: `$buttonSizes$${size}_fontWeight`
  };
};

const getOutlinedStyles = (variant: string) => {
  return {
    color: `$buttonColors$${variant}_outlined_variant`,
    border: `2px solid $buttonColors$${variant}_outlined_variant`,
    '&:hover': {
      backgroundColor: `$buttonColors$${variant}_outlined_variant_hover`
    },
    '&:active': {
      backgroundColor: `$buttonColors$${variant}_outlined_variant_active`
    },
    '&:disabled': {
      backgroundColor: `transparent`,
      borderColor: `$buttonColors$${variant}_outlined_variant_disabled`,
      color: `$buttonColors$${variant}_outlined_variant_disabled`
    }
  };
};

const getTextStyles = (variant: string) => {
  return {
    color: `$buttonColors$${variant}_text_variant`,
    '&:hover': {
      backgroundColor: `$buttonColors$${variant}_text_variant_hover`
    },
    '&:active': {
      backgroundColor: `$buttonColors$${variant}_text_variant_active`
    },
    '&:disabled': {
      color: `$buttonColors$${variant}_text_variant_disabled`,
      backgroundColor: 'transparent'
    }
  };
};

export const Button = styled('button', {
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '$ease_background_transition',

  '& + button': {
    marginLeft: '10px'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    color: {
      primary: getColorStyles('primary'),
      error: getColorStyles('error')
    },
    size: {
      sm: getSizeStyles('sm'),
      md: getSizeStyles('md'),
      lg: getSizeStyles('lg'),
      xl: getSizeStyles('xl')
    },
    variant: {
      contained: {
        border: '$buttonBorders$border_styles'
      },
      outlined: {
        border: '$buttonBorders$border_styles',
        backgroundColor: 'transparent'
      },
      text: {
        border: 'none',
        backgroundColor: 'transparent'
      }
    },
    rounded: {
      true: { borderRadius: '$buttonBorders$border_radius' }
    }
  },

  compoundVariants: [
    {
      color: 'primary',
      variant: 'outlined',
      css: getOutlinedStyles('primary')
    },
    {
      color: 'error',
      variant: 'outlined',
      css: getOutlinedStyles('error')
    },
    {
      color: 'primary',
      variant: 'text',
      css: getTextStyles('primary')
    },
    {
      color: 'error',
      variant: 'text',
      css: getTextStyles('error')
    }
  ],

  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'contained',
    rounded: false
  }
});
