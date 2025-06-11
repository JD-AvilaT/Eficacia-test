import { Meta, StoryObj } from '@storybook/angular';
import { CalendarComponent } from '../../app/components/dropdown/Calendar.component';

export default {
  title: 'Components/Form/Calendar',
  component: CalendarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# 📅

Componente de calendario visual utilizado para la selección de fechas.

Permite navegar entre meses, resalta el día seleccionado en verde (\`$sh-green\`), y muestra días de meses anteriores o siguientes para completar semanas.

---

## Uso

- Selección de fechas en formularios.
- Visualización de meses y años navegables.
- Indicación clara del día seleccionado.

---

## Funcionalidades

- Cambio de mes hacia adelante y atrás.
- Días de otros meses mostrados en gris.
- Día seleccionado resaltado.
- Formato de día en dos dígitos (\`01\`, \`02\`, etc.).
- Semana comienza en lunes.

---

## Elementos clave

| Elemento | Descripción |
|----------|-------------|
| Flechas  | Permiten cambiar el mes actual |
| Nombre del Mes | Visualización del mes y año actual |
| Días | Días numerados del calendario |
| Día seleccionado | Color verde \`$sh-green\` |

        `,
      },
    },
  },
} as Meta<CalendarComponent>;

type Story = StoryObj<CalendarComponent>;

export const Default: Story = {
  args: {},
};
