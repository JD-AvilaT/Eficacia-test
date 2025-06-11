import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, IconComponent], 
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'] 
})
export class ButtonComponent {

  @Input() label?: string; 
  @Input() width: string = '338px';
  @Input() size!: 'small' | 'medium';
  @Input() color!: 'primary' | 'error';
  @Input() styles!: 'filled' | 'outline' | 'text';
  @Input() state!: 'active' | 'disabled' | 'pressed' | 'hovered';
  @Input() orientation: 'center' | 'left' = 'center';
  @Input() iconStart?: 'add' | 'arrowLeft' | 'shop' = 'arrowLeft' ;
  @Input() iconEnd?: 'add' | 'arrowRight' | 'shop' = 'arrowRight' ;
  @Input() showIconStart?: true | false = false;
  @Input() showIconEnd?: true | false = false;

  @Output() onClick = new EventEmitter<Event>();

  getStyles(
    size: 'small' | 'medium',
    color: 'primary' | 'error',
    state?: 'active' | 'disabled' | 'pressed' | 'hovered',
    orientation?: 'center' | 'left',
    iconStart?: 'add' | 'arrowLeft' | 'shop',
    iconEnd?: 'add' | 'arrowRight' | 'shop' ,
    showIconStart?: boolean,
    showIconEnd?: boolean,
    styles?: 'filled' | 'outline' | 'text',
    width: string = '338px'
  ): string {
    return [
      'button',
      size,
      color,
      state,
      orientation,
      iconStart,
      iconEnd,
      showIconEnd,
      showIconStart,
      styles,
      width
    ].filter(Boolean).join(' ');
  }

  getButtonStyles(): { [key: string]: string } {
    return {
      'width': this.width
    };
  }
}