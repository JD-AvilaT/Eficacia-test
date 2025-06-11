import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../../app/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Buttons/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    styles: {
      control: {
        type: 'radio'
      },
      options: ['filled', 'outline', 'text'],
    },
    state: {
      control: {
        type: 'radio'
      },
      options: ['disabled', 'active', 'pressed'],
    },
    orientation: {
      control: {
        type: 'radio'
      },
      options: ['center', 'left'],
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['small', 'medium'],
    },
    color: {
      control: {
        type: 'radio'
      },
      options: ['primary', 'error'],
    },
    iconStart: {
      control: {
        type: 'select',
      },
      options: ['add', 'arrowLeft', 'shop'], 
    },
    iconEnd: {
      control: {
        type: 'select',
      },
      options: ['add', 'arrowRight', 'shop'], 
    },
    showIconStart: {
      control: {
        type: 'boolean'
    }
    },
    showIconEnd: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    styles: 'filled',
    color: 'primary',
    size: 'small',
    orientation: 'center',
    state: 'active',
    label: 'Button',

  },
};

export const Error: Story = {
  args: {
    styles: 'filled',
    color: 'error',
    size: 'small',
    orientation: 'center',
    state: 'active',
    label: 'Button',
  },
};
