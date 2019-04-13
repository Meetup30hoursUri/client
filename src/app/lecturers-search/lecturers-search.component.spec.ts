import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersSearchComponent } from './lecturers-search.component';

describe('LecturersSearchComponent', () => {
  let component: LecturersSearchComponent;
  let fixture: ComponentFixture<LecturersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
