import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-carga-masiva',
  imports: [CommonModule, IconComponent],
  templateUrl: './carga-masiva.component.html',
  styleUrl: './carga-masiva.component.scss'
})
export class CargaMasivaComponent {

  @Input() text1: string = 'Carga masiva';
  @Input() text2: string = 'carga';
  @Input() text3: string = 'Carga 2';

  @Output() action1 = new EventEmitter<void>();
  @Output() action2 = new EventEmitter<void>();
  @Output() action3 = new EventEmitter<void>();

}
