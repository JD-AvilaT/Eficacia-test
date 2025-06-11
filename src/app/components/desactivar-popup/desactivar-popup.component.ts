import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desactivar-popup',
  templateUrl: './desactivar-popup.component.html',
  styleUrls: ['./desactivar-popup.component.scss']
})
export class DesactivarPopupComponent {
  @Input() variant: 'single' | 'all' = 'single';
  @Input() disabled: boolean = false;
  @Output() action = new EventEmitter<void>();

  get buttonText(): string {
    return this.variant === 'single' ? 'Desactivar Pop-Up' : 'Desactivar todos';
  }

  handleClick(): void {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}