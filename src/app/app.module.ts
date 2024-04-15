import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AboutMeComponent } from "./about-me/about-me.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { LandingBannerComponent } from "./landing-banner/landing-banner.component";
import { LandingComponent } from "./landing/landing.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SkillsComponent } from "./skills/skills.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingBannerComponent,
    AboutMeComponent,
    LandingComponent,
    SkillsComponent,
    MyWorkComponent,
    ContactComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
