import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-card',
  imports: [ CommonModule, AvatarComponent ],
  standalone: true,
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() title!: string;
  @Input() body!: string;
  @Input() caption!: string;
  @Input() image?: string;
}