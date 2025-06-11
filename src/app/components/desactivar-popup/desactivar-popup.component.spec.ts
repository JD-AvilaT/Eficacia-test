import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescativarPopupComponent } from './desactivar-popup.component';

describe('DescativarPopupComponent', () => {
  let component: DescativarPopupComponent;
  let fixture: ComponentFixture<DescativarPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescativarPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescativarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
