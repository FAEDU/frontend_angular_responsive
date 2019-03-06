import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsformentorComponent } from './appointmentsformentor.component';

describe('AppointmentsformentorComponent', () => {
  let component: AppointmentsformentorComponent;
  let fixture: ComponentFixture<AppointmentsformentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsformentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsformentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
