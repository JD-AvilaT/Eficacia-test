import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-current-position',
  templateUrl: './map-current-position.component.html',
  styleUrls: ['./map-current-position.component.scss']
})
export class MapCurrentPositionComponent implements OnInit, OnDestroy {
  @Input() initialZoom = 13;
  @Input() tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  @Input() tileLayerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  
  @Output() positionFound = new EventEmitter<GeolocationPosition>();
  @Output() positionError = new EventEmitter<GeolocationPositionError>();
  
  private map!: L.Map;
  private marker!: L.Marker;
  private watchId: number | null = null;
  
  ngOnInit(): void {
    this.initMap();
    this.watchPosition();
  }
  
  ngOnDestroy(): void {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
    }
    if (this.map) {
      this.map.remove();
    }
  }
  
  private initMap(): void {
    // Default coordinates (center of the world)
    const defaultLat = 0;
    const defaultLng = 0;
    
    this.map = L.map('map').setView([defaultLat, defaultLng], this.initialZoom);
    
    L.tileLayer(this.tileLayerUrl, {
      attribution: this.tileLayerAttribution,
      maxZoom: 18,
    }).addTo(this.map);
    
    // Create a marker with default position
    this.marker = L.marker([defaultLat, defaultLng], {
      draggable: false,
      title: 'Your position'
    }).addTo(this.map);
  }
  
  private watchPosition(): void {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser');
      return;
    }
    
    this.watchId = navigator.geolocation.watchPosition(
      (position) => this.updatePosition(position),
      (error) => this.handlePositionError(error),
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000
      }
    );
  }
  
  private updatePosition(position: GeolocationPosition): void {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    this.marker.setLatLng([lat, lng]);
    this.map.setView([lat, lng], this.initialZoom);
    
    this.positionFound.emit(position);
  }
  
  private handlePositionError(error: GeolocationPositionError): void {
    console.error('Error getting position:', error);
    this.positionError.emit(error);
  }
}