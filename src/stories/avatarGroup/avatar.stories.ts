import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarGroupComponent } from '../../app/components/avatar-group/avatar-group.component';

const meta: Meta<AvatarGroupComponent> = {
  title: 'Components/Avatar/Avatar Group',
  component: AvatarGroupComponent,
  parameters: {
    layout: 'padded', // Mejor para visualizar grupos
    docs: {
      description: {
        component: 'Muestra un grupo de avatares con un máximo configurable. Los excedentes se muestran como un contador.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Tamaño de los avatares',
      table: {
        defaultValue: { summary: 'medium' }
      }
    },
    spacing: {
      control: 'radio',
      options: ['medium', 'small'],
      description: 'Espaciado entre avatares',
      table: {
        defaultValue: { summary: 'medium' }
      }
    },
    maxDisplay: {
      control: 'number',
      description: 'Máximo de avatares a mostrar antes del contador',
    },
    avatars: {
      control: 'object',
      description: 'Array de avatares (image o text)'
    }
  },
  args: {
    size: 'medium',
    spacing: 'medium',
    maxDisplay: 5,
    avatars: [
      { content: 'image', image: 'https://i.pravatar.cc/150?img=1' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=2' },
      { content: 'text', avatarText: 'JD' },
      { content: 'text', avatarText: 'AM' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=3' },
      { content: 'text', avatarText: 'TS' }
    ]
  }
};

export default meta;
type Story = StoryObj<AvatarGroupComponent>;

export const Default: Story = {};

export const LargeGroup: Story = {
  args: {
    maxDisplay: 3,
    avatars: [
      { content: 'image', image: 'https://i.pravatar.cc/150?img=4' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=5' },
      { content: 'text', avatarText: 'RG' },
      { content: 'text', avatarText: 'LP' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=6' },
      { content: 'text', avatarText: 'MC' },
      { content: 'image', image: 'https://i.pravatar.cc/150?img=7' }
    ]
  },
  name: 'Grupo grande (mostrando +4)'
};
