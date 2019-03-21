import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLineListComponent } from './request-line-list.component';

describe('RequestLineListComponent', () => {
  let component: RequestLineListComponent;
  let fixture: ComponentFixture<RequestLineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
