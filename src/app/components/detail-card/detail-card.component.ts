import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCardCompComponent } from '../detail-card-comp/detail-card-comp.component';


@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule, DetailCardCompComponent], // Importa el componente de tarjeta
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCard {
  // Datos para las tarjetas
  cards = [
    { iconType: 'location', title: 'Oficina Central: Av. Principal 1234' },
    { iconType: 'phone', title: 'Teléfono: +54 11 4321-5678' },
    { iconType: 'email', title: 'Email: contacto@empresa.com' },
    { iconType: 'shop', title: 'Contacto: María González' },
    { iconType: 'location', title: 'Horario: L-V 9:00 a 18:00' },
    { iconType: 'info', title: 'CUIT: 30-12345678-9' }
  ];
}