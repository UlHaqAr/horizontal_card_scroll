import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeScrollComponent } from './creative-scroll.component';

describe('CreativeScrollComponent', () => {
  let component: CreativeScrollComponent;
  let fixture: ComponentFixture<CreativeScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
