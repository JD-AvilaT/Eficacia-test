import type { Meta, StoryObj } from '@storybook/angular';
import { NewsCardComponent } from '../../app/components/news-card/news-card.component';

const meta: Meta<NewsCardComponent> = {
  title: 'Components/Cards/News Card',
  component: NewsCardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
        control: 'text',
        description: 'Title',
      },
    body: {
        control: 'text',
        description: 'Body description',
    },
    caption: {
      control: 'text',
      description: 'Caption',
    }
    
  },
};

export default meta;
type Story = StoryObj<NewsCardComponent>;

export const Default: Story = {
  args: {
    title: '¡Nuevo equipo en tu portafolio',
    body: 'Échale un vistazo al nuevo Motorola G20',
    caption: 'Hace unos segundos',
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};