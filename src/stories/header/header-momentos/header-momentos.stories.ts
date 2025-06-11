import { Meta, StoryObj } from '@storybook/angular';
import { HeaderMomentosComponent } from '../../../app/components/header/header-momentos/header-momentos.component';

export default {
  title: 'Components/Header/HeaderMomentos',
  component: HeaderMomentosComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
} as Meta<HeaderMomentosComponent>;

type Story = StoryObj<HeaderMomentosComponent>;

export const Default: Story = {
  args: {
    title: 'Ver planes disponibles',
    subtitle: 'Visualiza los planes comerciales disponibles',
    content: 'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.',
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    title: 'Ver planes disponibles',
    subtitle: 'Visualiza los planes comerciales disponibles',
    content: 'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.',
    fullWidth: true,
  },
};
