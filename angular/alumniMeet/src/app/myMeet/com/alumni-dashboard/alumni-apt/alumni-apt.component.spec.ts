import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniAptComponent } from './alumni-apt.component';

describe('AlumniAptComponent', () => {
  let component: AlumniAptComponent;
  let fixture: ComponentFixture<AlumniAptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniAptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
