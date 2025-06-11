import { Component } from '@angular/core';
import { MapCurrentPositionComponent } from '../map-current-position/map-current-position.component';

@Component({
  selector: 'app-location-popup',
  standalone: true,
  imports: [MapCurrentPositionComponent],
  templateUrl: './location-popup.component.html',
  styleUrl: './location-popup.component.scss'
})
export class LocationPopupComponent {

}
