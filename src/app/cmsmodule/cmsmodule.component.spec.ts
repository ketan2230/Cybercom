import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSModuleComponent } from './cmsmodule.component';

describe('CMSModuleComponent', () => {
  let component: CMSModuleComponent;
  let fixture: ComponentFixture<CMSModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMSModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMSModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
