import { Meta, StoryFn } from '@storybook/angular';
import { DetailCardCompComponent } from '../../app/components/detail-card-comp/detail-card-comp.component';

export default {
  title: 'Components/DetailCard/DetailCardComponent',
  component: DetailCardCompComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark', 
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
    docs: {
      description: {
        component: `
        Componente de tarjeta con icono y texto. Permite seleccionar entre diferentes tipos de iconos.
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Texto del título',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'C.C 1130618976 Gaiman, Argentina' },
      },
    },
    iconType: {
      description: 'Tipo de icono a mostrar',
      control: 'select',
      options: ['phone', 'email', 'shop', 'location', 'info', 'work', 'default'],
      table: {
        category: 'Appearance',
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    title: 'C.C 1130618976 Gaiman, Argentina',
    iconType: 'default',
  },
} as Meta<DetailCardCompComponent>;

const Template: StoryFn<DetailCardCompComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const LocationIcon = Template.bind({});
LocationIcon.args = {
  iconType: 'location',
  title: 'Ubicación: Av. Principal 123'
};

export const PhoneIcon = Template.bind({});
PhoneIcon.args = {
  iconType: 'email',
  title: 'Teléfono: +54 11 1234-5678'
};

export const EmailIcon = Template.bind({});
EmailIcon.args = {
  iconType: 'email',
  title: 'Email: contacto@ejemplo.com'
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  iconType: 'work',
  title: 'Fecha: 15/05/2023'
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  iconType: 'shop',
  title: 'Usuario: John Doe'
};

export const DocumentIcon = Template.bind({});
DocumentIcon.args = {
  iconType: 'location',
  title: 'Documento: DNI 12345678'
};

export const InfoIcon = Template.bind({});
DocumentIcon.args = {
  iconType: 'info',
  title: 'Ayudo a vendedores/empresas B2C con productos INTANGIBLES aumentar sus ventas a través de habilidades, tácticas y herramientas PRÁCTICAS y fáciles de implementar.'
};
