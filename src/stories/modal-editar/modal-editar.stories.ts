import { Meta, StoryFn } from '@storybook/angular';
import { ModalEditarComponent } from '../../app/components/modal-editar/modal-editar.component';

export default {
  title: 'Components/Table/EditarModal',
  component: ModalEditarComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
    docs: {
      description: {
        component: `
### Features:
- Modal con tres acciones posibles: Editar, Inactivar y Eliminar
- Textos personalizables para cada acción
- Emite eventos diferentes para cada acción
- Diseño responsive
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    text1: {
      control: 'text',
      defaultValue: 'Editar',
      description: 'Texto del primer botón (acción Editar)',
      table: {
        category: 'Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: 'Editar' },
      },
    },
    text2: {
      control: 'text',
      defaultValue: 'Inactivar',
      description: 'Texto del segundo botón (acción Inactivar)',
      table: {
        category: 'Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: 'Inactivar' },
      },
    },
    text3: {
      control: 'text',
      defaultValue: 'Eliminar',
      description: 'Texto del tercer botón (acción Eliminar)',
      table: {
        category: 'Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: 'Eliminar' },
      },
    },
    action1: {
      description: 'Evento emitido al hacer clic en el botón Editar',
      table: {
        category: 'Events',
      },
      action: 'editClicked',
    },
    action2: {
      description: 'Evento emitido al hacer clic en el botón Inactivar',
      table: {
        category: 'Events',
      },
      action: 'inactivateClicked',
    },
    action3: {
      description: 'Evento emitido al hacer clic en el botón Eliminar',
      table: {
        category: 'Events',
      },
      action: 'deleteClicked',
    },
  },
  args: {
    text1: 'Editar',
    text2: 'Inactivar',
    text3: 'Eliminar',
  },
} as Meta<ModalEditarComponent>;

const Template: StoryFn<ModalEditarComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const CustomTexts = Template.bind({});
CustomTexts.args = {
  text1: 'Modificar',
  text2: 'Deshabilitar',
  text3: 'Borrar',
};

export const DarkBackground = Template.bind({});
DarkBackground.parameters = {
  backgrounds: { default: 'dark' },
};
DarkBackground.args = {};