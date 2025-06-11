import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCurrentPositionComponent } from './map-current-position.component';

describe('MapCurrentPositionComponent', () => {
  let component: MapCurrentPositionComponent;
  let fixture: ComponentFixture<MapCurrentPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCurrentPositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCurrentPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
