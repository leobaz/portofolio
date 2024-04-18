import { Component } from "@angular/core";

@Component({
  selector: "app-general-info",
  standalone: true,
  imports: [],
  templateUrl: "./general-info.component.html",
  styleUrl: "./general-info.component.scss",
})
export class GeneralInfoComponent {
  downloadResume(): void {
    window.open("assets/documents/leutrim-kosumi.pdf", "_blank");
  }
}
