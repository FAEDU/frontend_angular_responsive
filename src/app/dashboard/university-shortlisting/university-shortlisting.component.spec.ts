import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityShortlistingComponent } from './university-shortlisting.component';

describe('UniversityShortlistingComponent', () => {
  let component: UniversityShortlistingComponent;
  let fixture: ComponentFixture<UniversityShortlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityShortlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityShortlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
