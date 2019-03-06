import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogopenComponent } from './blogopen.component';

describe('BlogopenComponent', () => {
  let component: BlogopenComponent;
  let fixture: ComponentFixture<BlogopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
