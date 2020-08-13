import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-landing-banner',
  templateUrl: './landing-banner.component.html',
  styleUrls: ['./landing-banner.component.scss']
})
export class LandingBannerComponent implements OnInit {
  constructor(
    private _scrollToService: ScrollToService
  ) { }

  ngOnInit() {
  }

  scrollToAbout(): void {
    const config: ScrollToConfigOptions = {
      target: '#about',
      duration: 1250,
      easing: 'easeOutElastic',
      offset: 10
    };
    this._scrollToService.scrollTo(config);
  }

}
