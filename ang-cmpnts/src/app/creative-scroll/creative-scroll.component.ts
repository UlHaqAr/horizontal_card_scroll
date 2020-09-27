import { Component, OnInit, ViewChild, ChangeDetectionStrategy, HostListener } from '@angular/core';

@Component({
  selector: 'app-creative-scroll',
  templateUrl: './creative-scroll.component.html',
  styleUrls: ['./creative-scroll.component.css']
})
export class CreativeScrollComponent implements OnInit {

  progressHeight=0;

  constructor() { }

  ngOnInit(): void {
  }


  onWindowScroll(event)
  {
    let totalHeight = event.target.body.scrollHeight - window.innerHeight;
    this.progressHeight = (window.pageYOffset / totalHeight) * 100 ;
  }

}
