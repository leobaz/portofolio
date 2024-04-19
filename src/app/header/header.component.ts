import { ViewportScroller } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller) {}

  onScrollToAnchor(component: string): void {
    this.scroller.scrollToAnchor(component);
  }
}
