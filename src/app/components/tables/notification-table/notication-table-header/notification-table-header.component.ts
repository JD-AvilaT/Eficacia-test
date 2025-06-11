import { Component } from '@angular/core';
import { SearchComponent } from '../../../search/search.component';

@Component({
  selector: 'storybook-notification-table-header',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './notification-table-header.component.html',
  styleUrls: ['./notification-table-header.component.scss']
})
export class NotificationTableHeaderComponent {}
