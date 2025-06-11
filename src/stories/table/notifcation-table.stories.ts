import { Meta, StoryObj } from '@storybook/angular';
import { NotificationTableComponent } from '../../app/components/tables/notification-table/notification-table.component';

const meta: Meta<NotificationTableComponent> = {
  title: 'Components/Tables/Notification Table',
  component: NotificationTableComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tabla de notificaciones utilizada para listar mensajes del sistema, actualizaciones o alertas.
Compuesta por un encabezado con barra de búsqueda y múltiples filas de notificación.
        `,
      },
    },
  },
  argTypes: {
    notifications: {
      description: 'Lista de notificaciones con título, descripción y tiempo',
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<NotificationTableComponent>;

export const Default: Story = {
  args: {
    notifications: [
      {
        title: 'Notificación 1 - Descripción General',
        description: 'Lorem libero, volutpat vitae tincidunt. Cursus morbi at mauris amet, ac sit convallis.',
        time: '2h'
      },
      {
        title: 'Notificación 2 - Cambio de horario',
        description: 'Se ha actualizado el horario de una actividad. Revísala cuanto antes.',
        time: '5h'
      },
      {
        title: 'Notificación 3 - Nueva tarea asignada',
        description: 'Tienes una nueva asignación disponible en tu panel de actividades.',
        time: '1d'
      }
    ]
  }
};
