import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLinesComponent } from './review-lines.component';

describe('ReviewLinesComponent', () => {
  let component: ReviewLinesComponent;
  let fixture: ComponentFixture<ReviewLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
