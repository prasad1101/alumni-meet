import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDashComponent } from './alumni-dash.component';

describe('AlumniDashComponent', () => {
  let component: AlumniDashComponent;
  let fixture: ComponentFixture<AlumniDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
