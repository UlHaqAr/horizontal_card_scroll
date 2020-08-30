import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCard1Component } from './event-card1.component';

describe('EventCard1Component', () => {
  let component: EventCard1Component;
  let fixture: ComponentFixture<EventCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
