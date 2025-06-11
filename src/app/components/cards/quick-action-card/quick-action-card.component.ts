import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-quick-action-card',
  standalone: true,
  templateUrl: './quick-action-card.component.html',
  styleUrls: ['./quick-action-card.component.scss']
})
export class QuickActionCardComponent {
  @Input() type: 'content' | 'void' = 'content';
  @Input() caption: string = 'Texto descriptivo';

  onIconClick() {
    console.log('Icono clickeado');
  }
}
