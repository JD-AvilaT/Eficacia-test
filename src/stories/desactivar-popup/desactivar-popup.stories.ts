import { Meta, StoryFn } from '@storybook/angular';
import { DesactivarPopupComponent } from '../../app/components/desactivar-popup/desactivar-popup.component';

export default {
  title: 'Components/Table/Desactivar Popup',
  component: DesactivarPopupComponent,
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
- Botón para desactivar pop-ups individuales o todos
- Soporta estado deshabilitado
- Emite evento al hacer clic
- Diseño responsive
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['single', 'all'],
      defaultValue: 'single',
      description: 'Tipo de botón (individual o desactivar todos)',
      table: {
        category: 'Inputs',
        type: { summary: 'single | all' },
        defaultValue: { summary: 'single' },
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Estado deshabilitado del botón',
      table: {
        category: 'Inputs',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    action: {
      description: 'Evento emitido al hacer clic en el botón',
      table: {
        category: 'Events',
      },
      action: 'buttonClicked',
    },
  },
  args: {
    variant: 'single',
    disabled: false,
  },
} as Meta<DesactivarPopupComponent>;

const Template: StoryFn<DesactivarPopupComponent> = (args) => ({
  props: args,
});

export const DesactivarPopUp = Template.bind({});
DesactivarPopUp.args = {
  variant: 'single',
};

export const DesactivarTodos = Template.bind({});
DesactivarTodos.args = {
  variant: 'all',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DarkBackground = Template.bind({});
DarkBackground.parameters = {
  backgrounds: { default: 'dark' },
};
DarkBackground.args = {
  variant: 'all',
};