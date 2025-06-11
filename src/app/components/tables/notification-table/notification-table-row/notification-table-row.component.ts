import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-notification-table-row',
  standalone: true,
  templateUrl: './notification-table-row.component.html',
  styleUrls: ['./notification-table-row.component.scss']
})
export class NotificationTableRowComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() time: string = '';
}
