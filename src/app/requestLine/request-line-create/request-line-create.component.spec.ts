import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLineCreateComponent } from './request-line-create.component';

describe('RequestLineCreateComponent', () => {
  let component: RequestLineCreateComponent;
  let fixture: ComponentFixture<RequestLineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
