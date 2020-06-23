import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-landing-banner',
  templateUrl: './landing-banner.component.html',
  styleUrls: ['./landing-banner.component.scss']
})
export class LandingBannerComponent implements OnInit {

  private typewriter_title: string = "Hi, I'm Leutrim Kosumi. I'm a front-end developer.";
  private typewriter_display: string = "";
  constructor(
    private _scrollToService: ScrollToService
  ) { }

  ngOnInit() {
    this.typingCallback(this);
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

  typingCallback(that) {
    let total_length = that.typewriter_title.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_title[current_length];
      setTimeout(that.typingCallback, 100, that);
    }
  }

}
