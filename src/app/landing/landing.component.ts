import { Component } from "@angular/core";
import { ContactComponent } from "./contact/contact.component";
import { GeneralInfoComponent } from "./general-info/general-info.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [
    IntroductionComponent,
    GeneralInfoComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: "./landing.component.html",
  styleUrl: "./landing.component.scss",
})
export class LandingComponent {}
