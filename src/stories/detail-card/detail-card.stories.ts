import { Meta, StoryFn } from '@storybook/angular';
import { DetailCard } from '../../app/components/detail-card/detail-card.component';

export default {
  title: 'Components/DetailCard',
  component: DetailCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
} as Meta<DetailCard>;

const Template: StoryFn<DetailCard> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const OriginalVariation = Template.bind({});
OriginalVariation.args = {
  cards: [
    { iconType: 'default', title: 'C.C 1130618976 Gaiman, Argentina' },
    { iconType: 'phone', title: '+57 314 555 55 55' },
    { iconType: 'email', title: 'amiguel@plancha.arg' },
    { iconType: 'work', title: 'Asesor B2C' },
    { iconType: 'shop', title: 'B2C Moderno' },
    { iconType: 'location', title: 'Sur-occidente' },
    { iconType: 'info', title: 'Ayudo a vendedores/empresas B2C con productos INTANGIBLES aumentar sus ventas a través de habilidades, tácticas y herramientas PRÁCTICAS y fáciles de implementar.' }
  ]
};