import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value: number = 0;
  @Input() status: 'green' | 'yellow' | 'red' = 'green';
  @Input() showPercent: boolean = true;

  get progressWidth(): string {
    return `${this.clamp(this.value)}%`;
  }

  get badgePosition(): string {
    return `calc(${this.clamp(this.value)}% - 24px)`;
  }

  private clamp(value: number): number {
    return Math.min(Math.max(value, 0), 100);
  }
}