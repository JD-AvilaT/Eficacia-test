import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-editar',
  imports: [],
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.scss'
})
export class ModalEditarComponent {

  @Input() text1: string = 'Editar';
  @Input() text2: string = 'Inactivar';
  @Input() text3: string = 'Eliminar';

  @Output() action1 = new EventEmitter<void>();
  @Output() action2 = new EventEmitter<void>();
  @Output() action3 = new EventEmitter<void>();

}