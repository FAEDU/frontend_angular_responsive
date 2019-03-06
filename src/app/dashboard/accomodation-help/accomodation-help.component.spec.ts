import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationHelpComponent } from './accomodation-help.component';

describe('AccomodationHelpComponent', () => {
  let component: AccomodationHelpComponent;
  let fixture: ComponentFixture<AccomodationHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
