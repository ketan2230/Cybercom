import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResReqComponent } from './res-req.component';

describe('ResReqComponent', () => {
  let component: ResReqComponent;
  let fixture: ComponentFixture<ResReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
