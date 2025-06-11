import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTable } from './title-table.component';

describe('TableHeaderComponent', () => {
  let component: TitleTable;
  let fixture: ComponentFixture<TitleTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
