import { Meta, StoryObj } from '@storybook/angular';
import { QuickActionCardComponent } from '../../../app/components/cards/quick-action-card/quick-action-card.component';

export default {
  title: 'Components/Cards/QuickActionCard',
  component: QuickActionCardComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['content', 'void']
    },
    caption: { control: 'text' }
  },
  parameters: {
    layout: 'centered'
  }
} as Meta<QuickActionCardComponent>;

type Story = StoryObj<QuickActionCardComponent>;

export const Content: Story = {
  args: {
    type: 'content',
    caption: 'Crear nuevos usuarios en tu organización'
  }
};

export const Void: Story = {
  args: {
    type: 'void',
    caption: 'Crear nuevos usuarios en tu organización'
  }
};
