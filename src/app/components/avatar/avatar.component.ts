import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon-button/icon.component';

@Component({
  selector: 'app-avatar',
  imports: [ CommonModule, IconComponent ],
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  defaultImage = new URL('../../../assets/images/avatar-default-img.png', import.meta.url).href;

  @Input() size!: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small';
  @Input() content!: 'image' | 'text';
  @Input() showBadge!: boolean;
  @Input() avatarText?: string = 'AA';
  @Input() image?: string = this.defaultImage;

  get sizeIcon(): string {
    return this.size === 'extra-large' ? '34px' : '12px';
  }
}