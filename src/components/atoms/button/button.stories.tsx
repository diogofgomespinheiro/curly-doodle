import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      table: {
        type: {
          summary: 'primary | error | object'
        },
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
      defaultValue: 'contained',
      table: {
        type: {
          summary: 'contained | outlined | text | object'
        },
        defaultValue: {
          summary: 'contained'
        }
      }
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      defaultValue: 'md',
      table: {
        type: {
          summary: 'sm | md | lg | xl | object'
        },
        defaultValue: {
          summary: 'md'
        }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    rounded: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  children: 'Button'
};

export const Colors = ({ disabled, rounded, size, variant }) => (
  <>
    <Button color="primary" disabled={disabled} rounded={rounded} size={size} variant={variant}>
      Primary
    </Button>
    <Button color="error" disabled={disabled} rounded={rounded} size={size} variant={variant}>
      Error
    </Button>
  </>
);

export const Variants = ({ color, disabled, rounded, size }) => (
  <>
    <Button color={color} disabled={disabled} rounded={rounded} size={size} variant="contained">
      Contained
    </Button>
    <Button color={color} disabled={disabled} rounded={rounded} size={size} variant="outlined">
      Outlined
    </Button>
    <Button color={color} disabled={disabled} rounded={rounded} size={size} variant="text">
      Text
    </Button>
  </>
);

export const Sizes = ({ color, disabled, rounded, variant }) => (
  <>
    <Button size="sm" color={color} disabled={disabled} rounded={rounded} variant={variant}>
      Small
    </Button>
    <Button size="md" color={color} disabled={disabled} rounded={rounded} variant={variant}>
      Medium
    </Button>
    <Button size="lg" color={color} disabled={disabled} rounded={rounded} variant={variant}>
      Large
    </Button>
    <Button size="xl" color={color} disabled={disabled} rounded={rounded} variant={variant}>
      X Large
    </Button>
  </>
);

export const Disabled: ComponentStory<typeof Button> = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true
};

export const Rounded: ComponentStory<typeof Button> = Template.bind({});
Rounded.args = {
  children: 'Button',
  rounded: true
};
