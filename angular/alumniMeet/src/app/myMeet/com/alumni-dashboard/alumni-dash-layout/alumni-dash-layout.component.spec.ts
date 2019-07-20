import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDashLayoutComponent } from './alumni-dash-layout.component';

describe('AlumniDashLayoutComponent', () => {
  let component: AlumniDashLayoutComponent;
  let fixture: ComponentFixture<AlumniDashLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniDashLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniDashLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
