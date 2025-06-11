import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-top-notification',
  imports: [CommonModule, IconComponent],
  templateUrl: './top-notification.component.html',
  styleUrl: './top-notification.component.scss'
})
export class TopNotificationComponent {

  @Input() children?: string; 
  @Input() state!: 'default' | 'started' | 'finished' | 'error' | 'completed';
  @Input() iconSrc: 'started' | 'finished' | 'error' | 'completed' = 'completed'; 

  @Output() onClick = new EventEmitter<Event>();

  currentIconSrc: 'started' | 'finished' | 'error' | 'completed' = 'completed';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['state']) {
      this.updateIconSrc();
    }
  }

  private updateIconSrc() {
    this.currentIconSrc = this.getDefaultIconForState();
  }

  private getDefaultIconForState(): 'started' | 'finished' | 'error' | 'completed' {
    switch (this.state) {
      case 'started': return 'started';
      case 'error': return 'error';
      case 'finished': return 'finished';
      default: return 'completed'; 
    }
  }

  getStyles(
    state?: 'default' | 'started' | 'finished' | 'error' | 'completed',
  ): string {
    if( state == 'completed'){
      return [
        'button',
        state,
      ].filter(Boolean).join(' ');
    } else {
      return 'button'
    }
  }
}

