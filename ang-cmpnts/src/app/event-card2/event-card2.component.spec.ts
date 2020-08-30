import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCard2Component } from './event-card2.component';

describe('EventCard2Component', () => {
  let component: EventCard2Component;
  let fixture: ComponentFixture<EventCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
