import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-checkbox-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './CheckboxStatus.component.html',
  styleUrls: ['./CheckboxStatus.component.scss'],
})
export class CheckboxStatusComponent {
  @Input() status: 'add' | 'remove' = 'add';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
