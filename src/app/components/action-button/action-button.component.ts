import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-action-button',
  imports: [ CommonModule, IconComponent],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  @Input() children!: string;
  @Input() apperance!: 'small' | 'big';

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    apperance: 'small' | 'big' ,
  ): string {
    return [
      'button',
      apperance,
    ].filter(Boolean).join(' ');
  }
}
