import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icon-button/icon.component';

@Component({
  selector: 'app-dropdown',
  imports: [ CommonModule, IconComponent ],
  standalone: true,
  templateUrl: './dropdown-card.component.html',
  styleUrls: ['./dropdown-card.component.scss']
})
export class DropdownCardComponent {
  @Input() isOpen: boolean = false;
  @Input() style: 'primary' | 'secondary' = 'primary';
  @Input() title!: string;
  @Input() caption!: string;
  @Input() iconStart: 'alertInfo' | 'card' = 'card';
  @Input() showIconEnd?: boolean;
  @Input() description!: string;
  @Input() width: string = '477px';

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}