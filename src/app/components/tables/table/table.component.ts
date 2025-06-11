import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableRowComponent } from './table-row/table-row.component';
import { IconComponent } from '../../icon-button/icon.component';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableHeaderComponent, TableRowComponent, IconComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  empleados = [
    { nombre: 'Ana', edad: 30, cargo: 'Developer' },
    { nombre: 'Carlos', edad: 25, cargo: 'Designer' },
    { nombre: 'Sergio', edad: 40, cargo: 'Ux' }
  ];

  @Input() title: string = 'Tabla';
  @Input() data: any[] = this.empleados;
  @Input() showFooter!: boolean;

}