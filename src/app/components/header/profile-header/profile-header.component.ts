import { Component, Input } from '@angular/core';
import { IconComponent } from '../../icon-button/icon.component';
import { AvatarComponent } from '../../avatar/avatar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-profile-header',
  standalone: true,
  imports: [CommonModule,IconComponent, AvatarComponent],
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {
  @Input() showIcons: boolean = true;
  @Input() showProfile: boolean = true;
}
