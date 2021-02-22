import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResReqLoginComponent } from './res-req-login.component';

describe('ResReqLoginComponent', () => {
  let component: ResReqLoginComponent;
  let fixture: ComponentFixture<ResReqLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResReqLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResReqLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
