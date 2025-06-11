import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../icon-button/icon.component';

@Component({
  selector: 'app-table-row',
  imports: [ CommonModule, IconComponent],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent<T = any> {
  
  @Input() rowData!: T;
  @Input() actionIcon: string = 'more_vert';

  getValues(): any[] {
    if (!this.rowData) return [];
    return Object.values(this.rowData); 
  }
}