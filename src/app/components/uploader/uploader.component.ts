import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class FileUploaderComponent {
  @ViewChild('linkInput') linkInput!: ElementRef;
  
  @Input() title = 'Cargar Archivo';
  @Input() hint = 'Pegar enlace aquí';
  @Input() title2 = 'Enlace Cargado';
  @Input() hint2 = 'Enlace adjuntado';
  
  @Output() linkSubmitted = new EventEmitter<string>();
  @Output() linkRemoved = new EventEmitter<void>();
  
  linkValue = '';
  hasLink = false;

  onLinkPaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText) {
      this.linkValue = pastedText;
      this.submitLink();
    }
  }

  onLinkInput(event: Event) {
    this.linkValue = (event.target as HTMLInputElement).value;
  }

  submitLink() {
    if (this.linkValue.trim()) {
      this.hasLink = true;
      this.linkSubmitted.emit(this.linkValue);
    }
  }

  removeLink() {
    this.linkValue = '';
    this.hasLink = false;
    this.linkRemoved.emit();
  }

  focusInput() {
    this.linkInput.nativeElement.focus();
  }
}