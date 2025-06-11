import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() state: 'label' | 'select' = 'label'; 
  @Input() textField: string = 'Selecciona una opción';
  @Input() options: string[] = [];

  isOpen: boolean = false;
  selectedOption: string = '';

  ngOnInit(): void {
    this.isOpen = this.state === 'select';
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isOpen = false;
  }
}
