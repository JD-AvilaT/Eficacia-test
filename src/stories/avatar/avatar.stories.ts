import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from '../../app/components/avatar/avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Components/Avatar/Avatar',
  component: AvatarComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio'
      },
      options: ['extra-large', 'large', 'medium', 'small', 'extra-small'],
    },
    content: {
      control: {
        type: 'radio'
      },
      options: ['image', 'text'],
    },
    showBadge: {
      control: {
        type: 'boolean'
      } 
    },
    avatarText: {
      control: 'text',
      description: 'Avatar text',
    },
    image: {
      control: 'text',
      description: 'image user profile',
    },
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  args: {
    size: 'medium',
    content: 'image',
    showBadge: true,
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};