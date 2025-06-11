import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../../app/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Form/Input',
  component: InputComponent,
  parameters: {
    layout: 'padded', // Cambiado a 'padded' para mejor visualización
    docs: {
      description: {
        component: 'Componente de input que soporta texto simple y multilínea con varios estados y opciones de visualización.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['textField', 'multiline'],
      description: 'Tipo de input',
      table: {
        defaultValue: { summary: 'textField' }
      }
    },
    state: {
      control: 'radio',
      options: ['enable', 'selected', 'error'],
      description: 'Estado del input',
      table: {
        defaultValue: { summary: 'enable' }
      }
    },
    label: {
      control: 'text',
      description: 'Texto del label',
    },
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder',
      table: {
        defaultValue: { summary: 'Introduce' }
      }
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar icono',
    },
    showRequired: {
      control: 'boolean',
      description: 'Mostrar indicador de campo requerido',
    },
    ShowAlert: { 
      control: 'boolean',
      description: 'Mostrar mensaje de alerta',
    },
    alertText: {
      control: 'text',
      description: 'Texto de alerta',
      table: {
        defaultValue: { summary: 'Alert text' }
      }
    },
    errorText: {
      control: 'text',
      description: 'Texto de error',
      table: {
        defaultValue: { summary: 'Error text' }
      }
    },
  },
  args: { 
    type: 'textField',
    state: 'enable',
    placeholder: 'Introduce tu texto',
    showIcon: false,
    showRequired: false,
    ShowAlert: false
  }
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Nombre completo',
  }
};
