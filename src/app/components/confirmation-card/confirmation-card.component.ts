import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-confirmation-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './confirmation-card.component.html',
  styleUrls: ['./confirmation-card.component.scss'],
})
export class ConfirmationCardComponent {
  @Input() titleText: string = '¿Estás seguro que quieres eliminar?';
  @Input() descriptionText: string =
    'La eliminación no puede revertirse, tendrás que re-crear la causal y se podrían generar inconsistencias en la información, haremos lo posible para evitarlo';
  @Input() showDoubleButton: boolean = true;
  @Input() showSingleButton: boolean = true;
  @Input() linkText: string = 'Cancelar carga masiva';
}
