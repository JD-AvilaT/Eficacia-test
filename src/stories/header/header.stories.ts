import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from '../../app/components/header/header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['profile', 'avatar']
    }
  },
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<HeaderComponent>;

export const ProfileVariant: Story = {
  args: {
    variant: 'profile'
  }
};

export const AvatarVariant: Story = {
  args: {
    variant: 'avatar'
  }
};
