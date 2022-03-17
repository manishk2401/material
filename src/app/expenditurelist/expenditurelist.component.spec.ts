import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditurelistComponent } from './expenditurelist.component';

describe('ExpenditurelistComponent', () => {
  let component: ExpenditurelistComponent;
  let fixture: ComponentFixture<ExpenditurelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditurelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditurelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
