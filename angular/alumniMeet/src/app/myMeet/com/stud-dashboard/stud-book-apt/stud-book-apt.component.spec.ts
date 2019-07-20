import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudBookAptComponent } from './stud-book-apt.component';

describe('StudBookAptComponent', () => {
  let component: StudBookAptComponent;
  let fixture: ComponentFixture<StudBookAptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudBookAptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudBookAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
