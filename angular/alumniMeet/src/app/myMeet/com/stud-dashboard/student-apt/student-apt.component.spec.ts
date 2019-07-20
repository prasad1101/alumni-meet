import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAptComponent } from './student-apt.component';

describe('StudentAptComponent', () => {
  let component: StudentAptComponent;
  let fixture: ComponentFixture<StudentAptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
