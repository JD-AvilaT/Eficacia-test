import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-header-momentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-momentos.component.html',
  styleUrls: ['./header-momentos.component.scss'],
})
export class HeaderMomentosComponent {
  @Input() title: string = 'Ver planes disponibles';
  @Input() subtitle: string = 'Visualiza los planes comerciales disponibles';
  @Input() content: string = 'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.';
  @Input() fullWidth: boolean = false;
}
