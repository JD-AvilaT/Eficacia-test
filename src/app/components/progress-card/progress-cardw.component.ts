import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-progress-card-web',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent, ButtonComponent],
  templateUrl: './progress-cardw.component.html',
  styleUrls: ['./progress-cardw.component.scss'],
})
export class ProgressCardWebComponent {
  @Input() titleText: string = 'Carga masiva en proceso';
  @Input() descriptionText: string = 'Estamos trabajando en la carga, esto puede tomar algunos minutos.';
  @Input() progressValue: number = 40;
  @Input() progressText: string = 'Cargando x de Y';
  @Input() progressTime: string = 'Faltan 45 segundos';
  @Input() linkText: string = 'Cancelar carga masiva';
}
