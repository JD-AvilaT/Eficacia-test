import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-profile',
  imports: [ CommonModule, AvatarComponent ],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() name?: string;
  @Input() showName?: boolean = true;
  @Input() image?: string;
  @Input() description?: string;
  @Input() showDescription?: boolean = true;
}