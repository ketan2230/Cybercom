import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAlertDemoComponent } from './sweet-alert-demo.component';

describe('SweetAlertDemoComponent', () => {
  let component: SweetAlertDemoComponent;
  let fixture: ComponentFixture<SweetAlertDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetAlertDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetAlertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
