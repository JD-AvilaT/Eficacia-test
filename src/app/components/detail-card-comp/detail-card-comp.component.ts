import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-card-comp',
  imports: [CommonModule], // Añade CommonModule aquí
  templateUrl: './detail-card-comp.component.html',
  styleUrl: './detail-card-comp.component.scss',
  standalone: true // Asegúrate de que el componente es standalone
})
export class DetailCardCompComponent {
  @Input() title = 'C.C 1130618976 Gaiman, Argentina';
  @Input() iconType: 'phone' | 'email' | 'work' | 'shop' | 'location' | 'info' | 'default' = 'default';
}