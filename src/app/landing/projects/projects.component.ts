import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  modalData = {
    title: "",
    gallery: [],
  };

  goToWebsite(url: string): void {
    window.open(url, "_blank");
  }

  assignModalGallery(type: string): void {
    if (type === "123mobile") {
      this.modalData = {
        title: "123Mobile",
        gallery: [
          {
            imageUrl: "assets/images/123mobile-1.jpg",
            active: true,
          },
          {
            imageUrl: "assets/images/123mobile-2.jpg",
            active: false,
          },
          {
            imageUrl: "assets/images/123mobile-3.jpg",
            active: false,
          },
        ],
      };
    } else {
      this.modalData = {
        title: "Bookings",
        gallery: [
          {
            imageUrl: "assets/images/discover-place-detail.png",
            active: true,
          },
          {
            imageUrl: "assets/images/discover-places-page.png",
            active: false,
          },
          {
            imageUrl: "assets/images/my-offers-page.png",
            active: false,
          },
          {
            imageUrl: "assets/images/new-offer.png",
            active: false,
          },
        ],
      };
    }
  }
}
