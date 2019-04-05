import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buycourse1Component } from './buycourse1.component';

describe('Buycourse1Component', () => {
  let component: Buycourse1Component;
  let fixture: ComponentFixture<Buycourse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buycourse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buycourse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
