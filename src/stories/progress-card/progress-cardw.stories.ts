import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressCardWebComponent } from '../../app/components/progress-card/progress-cardw.component';

const meta: Meta<ProgressCardWebComponent> = {
  title: 'Components/Cards/ProgressCard',
  component: ProgressCardWebComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

- Mostrar el avance de una tarea en tiempo real.
- Informar al usuario sobre el estado de una carga o procesamiento.
- Permitir la cancelación de una tarea prolongada.

---

## Elementos clave

- **Título con estado de la actividad:** (ej. “Carga masiva en proceso”).
- **Descripción breve del proceso:** Texto explicativo junto al título.
- **Barra de progreso visual:** Representa gráficamente el porcentaje completado.
- **Texto con detalles de avance:** (ej. “Cargando x de Y” y “Faltan 45 segundos”).
- **Acción secundaria:** Botón de cancelación para interrumpir la tarea.
        `,
      },
    },
  },
  argTypes: {
    titleText: {
      control: 'text',
      description: 'Título principal de la card',
    },
    descriptionText: {
      control: 'text',
      description: 'Descripción bajo el título',
    },
    progressValue: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'Valor de la barra de progreso (0–100)',
    },
    progressText: {
      control: 'text',
      description: 'Texto a la izquierda bajo la barra',
    },
    progressTime: {
      control: 'text',
      description: 'Texto a la derecha bajo la barra',
    },
    linkText: {
      control: 'text',
      description: 'Texto del botón/link inferior',
    },
  },
  args: {
    titleText: 'Carga masiva en proceso',
    descriptionText:
      'Estamos trabajando en la carga, esto puede tomar algunos minutos.',
    progressValue: 40,
    progressText: 'Cargando x de Y',
    progressTime: 'Faltan 45 segundos',
    linkText: 'Cancelar carga masiva',
  },
};

export default meta;
type Story = StoryObj<ProgressCardWebComponent>;

export const Default: Story = {};
