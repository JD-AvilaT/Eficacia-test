import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationTableRowComponent } from './notification-table-row/notification-table-row.component';
import { NotificationTableHeaderComponent } from './notication-table-header/notification-table-header.component';

@Component({
  selector: 'storybook-notification-table',
  standalone: true,
  imports: [CommonModule, NotificationTableHeaderComponent, NotificationTableRowComponent],
  templateUrl: './notification-table.component.html',
  styleUrls: ['./notification-table.component.scss'],
})
export class NotificationTableComponent {
  @Input() notifications = [
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
  ];
}
