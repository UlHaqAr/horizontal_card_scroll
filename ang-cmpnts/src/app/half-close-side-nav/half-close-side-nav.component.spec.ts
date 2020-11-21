import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfCloseSideNavComponent } from './half-close-side-nav.component';

describe('HalfCloseSideNavComponent', () => {
  let component: HalfCloseSideNavComponent;
  let fixture: ComponentFixture<HalfCloseSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfCloseSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfCloseSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
