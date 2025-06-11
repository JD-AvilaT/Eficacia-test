import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../components/icon-button/icon.component';

@Component({
  selector: 'app-form-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './form-alert.component.html',
  styleUrls: ['./form-alert.component.scss'],
})
export class FormAlertComponent {
  @Input() textAlert: string = '';
  @Output() onClose = new EventEmitter<void>();

  closeAlert() {
    this.onClose.emit();
  }
}