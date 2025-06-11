import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-help-question',
  imports: [CommonModule, IconComponent],
  templateUrl: './question-button.component.html',
  styleUrls: ['./question-button.component.scss']
})
export class QuestionButtonComponent {
  @Input() isTooltipVisible?: boolean = false;

  toggleTooltip(event: Event) {
    event.stopPropagation();
    this.isTooltipVisible = !this.isTooltipVisible;
  }

}