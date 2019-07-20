import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudDashLayoutComponent } from './stud-dash-layout.component';

describe('StudDashLayoutComponent', () => {
  let component: StudDashLayoutComponent;
  let fixture: ComponentFixture<StudDashLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudDashLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudDashLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
