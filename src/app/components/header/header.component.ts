import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbProfileComponent } from '../breadcrumb-profile/breadcrumb-profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'storybook-header',
  standalone: true,
  imports: [CommonModule, ProfileHeaderComponent, ProfileComponent, BreadcrumbProfileComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() variant: 'profile' | 'avatar' = 'profile';
}
