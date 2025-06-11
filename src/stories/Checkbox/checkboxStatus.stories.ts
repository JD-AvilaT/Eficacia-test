import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxStatusComponent } from '../../app/components/Checkbox/CheckboxStatus/CheckboxStatus.component';

export default {
  title: 'Components/Checkbox/Checkbox Status',
  component: CheckboxStatusComponent,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: ['add', 'remove'],
      description: 'Determina si el botón muestra el ícono de agregar (+) o remover (–)',
    },
    clicked: { action: 'clicked' }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `

Componente que representa un **botón de estado** con dos variantes visuales según su tipo:

- **Add (+)**: Para acciones de agregar.
- **Remove (–)**: Para acciones de eliminar.

---

## Variantes disponibles

| Propiedad \`status\` | Descripción |
|---------------------|-------------|
| \`add\`             | Muestra botón azul con ícono \`+\` |
| \`remove\`          | Muestra botón azul con ícono \`–\` |

---

## Evento

| Evento      | Descripción                            |
|-------------|----------------------------------------|
| \`clicked\` | Se emite cuando el botón es presionado |
        `,
      },
    },
  },
} as Meta<CheckboxStatusComponent>;

type Story = StoryObj<CheckboxStatusComponent>;

export const Add: Story = {
  args: {
    status: 'add',
  },
};

export const Remove: Story = {
  args: {
    status: 'remove',
  },
};
