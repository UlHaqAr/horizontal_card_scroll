import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-close-side-nav',
  templateUrl: './half-close-side-nav.component.html',
  styleUrls: ['./half-close-side-nav.component.css']
})
export class HalfCloseSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'AngularMaterialGettingStarted';

  isMenuOpen = false;
  contentMargin = 70;

  task: string[] = [
    'Brush', 'Eat', 'Sleep', 'Smoke', 'Drink'
  ]

  /* user clicks the icon -> value of 'isMenuOpen' changes -> either of 'menu-open'or 'menu-close' class get applied 
  -> width of side-nav changes. Also left margin of side-nav content is changed (using the variable contentMargin) */
  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

}
