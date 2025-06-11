import { Component, Output, EventEmitter, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-search-menu',
  standalone: true,
  imports: [IconComponent], 
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.scss']
})
export class SearchMenuComponent implements AfterViewInit {
  @Input() placeholder: string = '¿Qué quieres buscar?';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() width: string = '182px'; // Valor por defecto
  @Input() height: string = '32px'; // Valor por defecto

  @Output() searchChange = new EventEmitter<string>();
  
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('formElement') formElement!: ElementRef;

  ngAfterViewInit(): void {
    this.applyCustomDimensions();
  }

  ngOnChanges(): void {
    if (this.formElement) {
      this.applyCustomDimensions();
    }
  }

  private applyCustomDimensions(): void {
    if (this.formElement?.nativeElement) {
      this.formElement.nativeElement.style.setProperty('--width', this.width);
      this.formElement.nativeElement.style.setProperty('--height', this.height);
    }
  }

  onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.searchChange.emit(value);
  }

  clearSearch(): void {
    this.value = '';
    this.searchChange.emit('');
    this.searchInput.nativeElement.focus();
  }
}