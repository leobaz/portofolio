import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./landing/landing.component").then((m) => m.LandingComponent),
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  onSameUrlNavigation: "reload",
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
