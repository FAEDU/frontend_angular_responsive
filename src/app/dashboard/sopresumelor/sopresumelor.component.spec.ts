import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SopresumelorComponent } from './sopresumelor.component';

describe('SopresumelorComponent', () => {
  let component: SopresumelorComponent;
  let fixture: ComponentFixture<SopresumelorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SopresumelorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SopresumelorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
