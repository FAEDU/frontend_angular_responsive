import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexHelpComponent } from './forex-help.component';

describe('ForexHelpComponent', () => {
  let component: ForexHelpComponent;
  let fixture: ComponentFixture<ForexHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
