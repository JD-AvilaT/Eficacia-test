import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-dropdown',
  imports: [ CommonModule, IconComponent ],
  standalone: true,
  templateUrl: './dropdown-card.component.html',
  styleUrls: ['./dropdown-card.component.scss']
})
export class DropdownCardComponent {
  @Input() isOpen: boolean = false;
  @Input() header!: string;
  @Input() caption!: string;
  @Input() showCaption?: boolean;
  @Input() iconStart!: string;
  @Input() showIconEnd?: boolean;
  @Input() iconEnd!: string;
  @Input() showState?: boolean;
  @Input() stateText!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() body!: string;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
}