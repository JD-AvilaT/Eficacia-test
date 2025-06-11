import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  onChange() {
    if (!this.selected) {
      this.selected = true;
      this.selectedChange.emit(this.selected);
    }
  }
}
