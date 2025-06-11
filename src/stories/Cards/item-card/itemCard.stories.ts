import { Meta, StoryObj } from '@storybook/angular';
import { ItemCardComponent } from '../../../app/components/cards/item-card/itemCard.component';

export default {
  title: 'Components/Cards/Item Card',
  component: ItemCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    description: { control: 'text' },
    subtitle: { control: 'text' }
  }
} as Meta<ItemCardComponent>;

type Story = StoryObj<ItemCardComponent>;

export const Default: Story = {
  args: {
    description: 'Actividades relacionadas con la gestión en punto de venta',
    subtitle: '5 tipos de actividades'
  }
};