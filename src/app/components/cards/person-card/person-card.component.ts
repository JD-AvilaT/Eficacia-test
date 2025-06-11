import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../avatar/avatar.component';

@Component({
  selector: 'app-card',
  imports: [ CommonModule, AvatarComponent ],
  standalone: true,
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  @Input() header!: string;
  @Input() name!: string;
  @Input() detail!: string;
  @Input() image?: string;
}