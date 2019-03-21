import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLineEditComponent } from './request-line-edit.component';

describe('RequestLineEditComponent', () => {
  let component: RequestLineEditComponent;
  let fixture: ComponentFixture<RequestLineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
