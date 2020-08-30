import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertTimelineComponent } from './vert-timeline.component';

describe('VertTimelineComponent', () => {
  let component: VertTimelineComponent;
  let fixture: ComponentFixture<VertTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
