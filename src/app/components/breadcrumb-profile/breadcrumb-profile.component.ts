// src/app/components/breadcrumb-profile/breadcrumb-profile.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-breadcrumb-profile',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './breadcrumb-profile.component.html',
  styleUrls: ['./breadcrumb-profile.component.scss'],
})
export class BreadcrumbProfileComponent {
  @Input() title: string = 'Regresar a la sección previa';

  @Input() showIconArrow: boolean = true;

  @Input() items: string[] = [
    'inicio',
    'parametrización',
    'gestión de actividades',
    'Gestión de visitas a punto de venta',
  ];
}
