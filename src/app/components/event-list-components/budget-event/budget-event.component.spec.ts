import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEventComponent } from './budget-event.component';

describe('BudgetEventComponent', () => {
  let component: BudgetEventComponent;
  let fixture: ComponentFixture<BudgetEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetEventComponent]
    });
    fixture = TestBed.createComponent(BudgetEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
