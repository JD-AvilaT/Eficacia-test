import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-momentos',
  templateUrl: './headerMomentos.component.html',
  styleUrls: ['./headerMomentos.component.scss']
})
export class HeaderMomentosComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
}