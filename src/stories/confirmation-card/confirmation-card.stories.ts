import type { Meta, StoryObj } from '@storybook/angular';
import { ConfirmationCardComponent } from '../../app/components/confirmation-card/confirmation-card.component';

const meta: Meta<ConfirmationCardComponent> = {
  title: 'Components/Cards/ConfirmationCard',
  component: ConfirmationCardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

- Confirmar una acción importante o irreversible.
- Advertir sobre consecuencias antes de ejecutar la acción.
- Ofrecer opciones claras de decisión al usuario.

---

## Elementos clave

- **Título con pregunta clara y directa.**
- **Texto explicativo con advertencia o contexto.**
- **Botones de acción bien diferenciados (azul y rojo).**
- **Acción secundaria:** opción para cancelar o cerrar.
        `,
      },
    },
  },
  argTypes: {
    titleText: { control: 'text', description: 'Título principal de la card' },
    descriptionText: { control: 'text', description: 'Descripción o advertencia' },
    showDoubleButton: {
      control: 'boolean',
      description: 'Mostrar dos botones diferenciados (primario y secundario)',
    },
    showSingleButton: {
      control: 'boolean',
      description: 'Mostrar un solo botón ancho centrado',
    },
    linkText: {
      control: 'text',
      description: 'Texto del enlace secundario para cancelar o cerrar',
    },
  },
  args: {
    titleText: '¿Estás seguro que quieres eliminar?',
    descriptionText:
      'La eliminación no puede revertirse, tendrás que re-crear la causal y se podrían generar inconsistencias en la información, haremos lo posible para evitarlo',
    showDoubleButton: true,
    showSingleButton: true,
    linkText: 'Cancelar',
  },
};

export default meta;
type Story = StoryObj<ConfirmationCardComponent>;

export const Default: Story = {};