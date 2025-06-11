// itemCard.component.ts
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [ ButtonComponent],
  templateUrl: './itemCard.component.html',
  styleUrls: ['./itemCard.component.scss'],
})
export class ItemCardComponent {
  @Input() description: string = '';
  @Input() subtitle: string = '';
}
