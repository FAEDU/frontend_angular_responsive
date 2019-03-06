import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockVisaComponent } from './mock-visa.component';

describe('MockVisaComponent', () => {
  let component: MockVisaComponent;
  let fixture: ComponentFixture<MockVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
