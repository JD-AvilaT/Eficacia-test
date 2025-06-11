import { Meta, StoryObj } from '@storybook/angular';
import { DropdownMenuComponent } from '../../app/components/dropdown-menu/dropdown-menu.component';

export default {
  title: 'Components/Dropdown/DropdownMenu',
  component: DropdownMenuComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Variables

Este componente está estructurado con variantes para manejar su estado desplegable.

Es ideal para menús de navegación, listas de selección y configuraciones dentro de la interfaz.

---

## Uso

- Este componente está estructurado con variantes para manejar su estado desplegable.
- Es ideal para menús de navegación, listas de selección y configuraciones dentro de la interfaz.

---

## Elementos clave

- **Contenedor del botón:** Estructura rectangular que define su tamaño y forma.
- **Ícono de flecha:** Elemento gráfico que indica que el campo es un desplegable.
- **Estado:** Variantes como *desplegado* y *colapsado* definen el comportamiento del componente.
        `
      }
    }
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['label', 'select'],
    },
    textField: {
      control: 'text',
    },
    options: {
      control: 'object',
    },
  },
  args: {
    state: 'label',
    textField: 'Label',
    options: ['Label 1', 'Label 2', 'Label 3'],
  },
} as Meta<DropdownMenuComponent>;

type Story = StoryObj<DropdownMenuComponent>;

export const Default: Story = {};
