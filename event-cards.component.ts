import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.css']
})
export class EventCardsComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  constructor() { }

  ngOnInit() {
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
  }

}
