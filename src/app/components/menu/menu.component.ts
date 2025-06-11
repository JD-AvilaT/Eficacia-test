import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { SearchMenuComponent } from '../search-menu/search-menu.component';

@Component({
  selector: 'app-menu',
  imports: [IconComponent, MenuItemComponent, CommonModule, SearchMenuComponent],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  defaultImage = new URL('../../../assets/images/avatar-default-img.png', import.meta.url).href;
  isCollapsed = true; // Estado inicial plegado
  
  @Output() searchChange = new EventEmitter<string>();
  @Output() onClickBell = new EventEmitter<Event>();
  @Output() onClickProfile = new EventEmitter<Event>();

  section1Items = [
    { text: 'Inicio', icon: 'inicio', isActive: true },
    { text: 'Notificaciones', icon: 'bell', isActive: true },
    { text: 'Tareas', icon: 'inicio', isActive: true },
    { text: 'Inicio', icon: 'inicio', isActive: true },
    { text: 'Notificaciones', icon: 'bell', isActive: true },
    { text: 'Tareas', icon: 'inicio', isActive: true }
  ];

  section2Items = [
    { text: 'Calendario', icon: 'star', isActive: true, route:'/home'},
    { text: 'Mensajes', icon: 'star', isActive: true },
    { text: 'Reportes', icon: 'star', isActive: true },
    { text: 'Reportes', icon: 'star', isActive: true }
  ];

  section3Items = [
    { text: 'Configuración', icon: 'star', isActive: true },
    { text: 'Ayuda', icon: 'star', isActive: true },
  ];

  searchValue: string = ''; 
  isSidebarOpen = false;

  onSearchChange(value: string): void {
    this.searchValue = value;
    this.searchChange.emit(this.searchValue);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  handleBellClick(event: Event) {
    this.onClickBell.emit(event);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  handleProfile(event: Event) {
    this.onClickProfile.emit(event);
  }
}