import { Component, OnInit } from '@angular/core';
import { TimelineData } from '../models/timeline.model';
import { HomepageService } from '../services/homepage.service';

@Component({
  selector: 'app-vert-timeline',
  templateUrl: './vert-timeline.component.html',
  styleUrls: ['./vert-timeline.component.css']
})
export class VertTimelineComponent implements OnInit {

  timelineData:TimelineData[] = [];

  constructor(private homepageSrv: HomepageService) { }

  ngOnInit() {
    this.homepageSrv.getTimelineData().subscribe((data:TimelineData[])=>{
      this.timelineData = data;
    })
  }

}
