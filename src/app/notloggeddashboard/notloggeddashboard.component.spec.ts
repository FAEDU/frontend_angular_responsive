import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotloggeddashboardComponent } from './notloggeddashboard.component';

describe('NotloggeddashboardComponent', () => {
  let component: NotloggeddashboardComponent;
  let fixture: ComponentFixture<NotloggeddashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotloggeddashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotloggeddashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
