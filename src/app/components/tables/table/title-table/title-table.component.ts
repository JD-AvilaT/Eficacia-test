import { Component, Input } from '@angular/core';
import { IconComponent } from '../../../icon-button/icon.component';

@Component({
  selector: 'app-title-table',
  imports: [ IconComponent],
  templateUrl: './title-table.component.html',
  styleUrl: './title-table.component.scss'
})
export class TitleTable {
  @Input() title: string = 'Header';
  @Input() style?: 'filled' | 'text' = 'filled';
  @Input() width: string = '404px';
}
