import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCardCompComponent } from './detail-card-comp.component';

describe('DeatilCardCompComponent', () => {
  let component: DetailCardCompComponent;
  let fixture: ComponentFixture<DetailCardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCardCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
