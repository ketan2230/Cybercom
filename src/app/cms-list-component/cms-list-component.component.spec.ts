import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsListComponentComponent } from './cms-list-component.component';

describe('CmsListComponentComponent', () => {
  let component: CmsListComponentComponent;
  let fixture: ComponentFixture<CmsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsListComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
