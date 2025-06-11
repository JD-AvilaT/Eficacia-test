import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';
import { IconName } from '../icon-button/icon.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  imports: [IconComponent],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() text: string = 'Text';
  @Input() isActive: boolean = true;
  @Input() icon?: IconName = 'list';
  @Input() route?: string; // Nueva propiedad para la ruta de navegación
  @Output() clicked = new EventEmitter<void>(); // Evento para manejar clicks

  constructor(private router: Router) {}

  handleClick(event: Event) {
    event.preventDefault();
    
    // Emitir el evento de click
    this.clicked.emit();
    
    // Navegar si hay una ruta definida
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}