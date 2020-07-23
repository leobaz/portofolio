import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _scrollToService: ScrollToService
  ) { }

  ngOnInit(): void {
  }

  scroll(id) {
    const config: ScrollToConfigOptions = {
      target: id,
      duration: 1250,
      easing: 'easeOutElastic',
      offset: 10
    };
    this._scrollToService.scrollTo(config);
  }

}
