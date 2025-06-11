import { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from '../../app/components/footer/footer.component';

export default {
  title: 'Components/Footer/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} as Meta<FooterComponent>;

type Story = StoryObj<FooterComponent>;

export const Default: Story = {};
