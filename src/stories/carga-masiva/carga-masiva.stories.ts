import { Meta, StoryFn } from '@storybook/angular';
import { CargaMasivaComponent } from '../../app/components/carga-masiva/carga-masiva.component';

export default {
  title: 'Components/File Uploader/CargaMasiva',
  component: CargaMasivaComponent,
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
- Modal con tres acciones posibles
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
      description: 'Texto del primer botón (acción Editar)',
      table: {
        category: 'Inputs',
        type: { summary: 'string' },
      },
    },
    text2: {
      control: 'text',
      description: 'Texto del segundo botón (acción Inactivar)',
      table: {
        category: 'Inputs',
        type: { summary: 'string' },
      },
    },
    text3: {
      control: 'text',
      description: 'Texto del tercer botón (acción Eliminar)',
      table: {
        category: 'Inputs',
        type: { summary: 'string' },
      },
    },
    action1: {
      description: 'Evento emitido al hacer clic en el botón Editar',
      table: {
        category: 'Events',
      },
      action: 'action1',
    },
    action2: {
      description: 'Evento emitido al hacer clic en el botón Inactivar',
      table: {
        category: 'Events',
      },
      action: 'action2',
    },
    action3: {
      description: 'Evento emitido al hacer clic en el botón Eliminar',
      table: {
        category: 'Events',
      },
      action: 'action3',
    },
  },
  args: {
    text1: 'Carga masiva',
    text2: 'carga',
    text3: 'Carga 2',
  },
} as Meta<CargaMasivaComponent>;

const Template: StoryFn<CargaMasivaComponent> = (args) => ({
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