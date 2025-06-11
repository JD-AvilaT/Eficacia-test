import { Meta, StoryObj } from '@storybook/angular';
import { ProfileHeaderComponent } from '../../../app/components/header/profile-header/profile-header.component';

export default {
  title: 'Components/Header/ProfileHeader',
  component: ProfileHeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    showIcons: { control: 'boolean' },
    showProfile: { control: 'boolean' }
  }
} as Meta<ProfileHeaderComponent>;

type Story = StoryObj<ProfileHeaderComponent>;

export const Default: Story = {
  args: {
    showIcons: true,
    showProfile: true
  }
};

export const OnlyIcons: Story = {
  args: {
    showIcons: true,
    showProfile: false
  }
};

export const OnlyProfile: Story = {
  args: {
    showIcons: false,
    showProfile: true
  }
};
