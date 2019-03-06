import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallthatmentorComponent } from './callthatmentor.component';

describe('CallthatmentorComponent', () => {
  let component: CallthatmentorComponent;
  let fixture: ComponentFixture<CallthatmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallthatmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallthatmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
