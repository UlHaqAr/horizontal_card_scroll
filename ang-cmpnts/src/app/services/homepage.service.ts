import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private timelineDataUrl = "../../../assets/timeline-data.json";

  constructor(private http: HttpClient) { }

  getTimelineData() {
    return this.http.get(this.timelineDataUrl);
  }

}
