import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../icon-button/icon.component';
import { TitleTable } from '../title-table/title-table.component';

@Component({
  selector: 'app-table-header',
  imports: [ CommonModule, TitleTable, IconComponent ],
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {
  empleados = [
    { nombre: 'Ana', edad: 30, cargo: 'Developer' },
    { nombre: 'Carlos', edad: 25, cargo: 'Designer' }
  ];

  @Input() data: any[] = this.empleados;
  @Input() title: string = 'Header'; 

  getColumns(): string[] {
    if (this.data.length > 0) {
      const keys = Object.keys(this.data[0]);
      return keys.slice(1);
    }
    return [];
  }
}