import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtravelHelpComponent } from './airtravel-help.component';

describe('AirtravelHelpComponent', () => {
  let component: AirtravelHelpComponent;
  let fixture: ComponentFixture<AirtravelHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirtravelHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtravelHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
