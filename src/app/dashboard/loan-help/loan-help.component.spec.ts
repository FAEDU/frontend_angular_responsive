import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanHelpComponent } from './loan-help.component';

describe('LoanHelpComponent', () => {
  let component: LoanHelpComponent;
  let fixture: ComponentFixture<LoanHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
