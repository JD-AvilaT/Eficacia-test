import { Meta, StoryObj } from '@storybook/angular';
import { EmptyCardComponent } from '../../../app/components/cards/empty-card/emptyCard.component';

export default {
  title: 'Components/Cards/Empty Card',
  component: EmptyCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} as Meta<EmptyCardComponent>;

type Story = StoryObj<EmptyCardComponent>;

export const Default: Story = {};
