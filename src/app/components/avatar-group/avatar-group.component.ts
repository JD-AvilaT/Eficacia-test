import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-avatar-group',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './avatar-group.component.html',
  styleUrls: ['./avatar-group.component.scss']
})
export class AvatarGroupComponent {
  @Input() size: 'large' | 'medium' | 'small' = 'medium';
  @Input() spacing: 'medium' | 'small' = 'medium';
  @Input() avatars: {
    content: 'image' | 'text';
    image?: string;         
    avatarText?: string;         
  }[] = [];
  @Input() maxDisplay: number = 5;

  get displayedAvatars() {
    return this.avatars.slice(0, this.maxDisplay - 1);
  }

  get remainingCount() {
    return Math.max(0, this.avatars.length - (this.maxDisplay - 1));
  }

}