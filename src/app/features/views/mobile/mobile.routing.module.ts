import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppChimpanceComponent } from "../app-chimpance/app-chimpance.component";
import { InfoComponent } from "./views/info/info.component";
import { OptionalComponent } from "./views/optional/optional.component";
import { PricesComponent } from "./views/prices/prices.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import { WorkMethodologyComponent } from "./views/work-methodology/work-methodology.component";

const routes: Routes = [
    {
      path:"",
      children: [
        {
          path:"",
          component: AppChimpanceComponent
        },
        {
            path:"info",
            component: InfoComponent
        },
        {
            path:"prices",
            component: PricesComponent
        },
        {
            path:"optional",
            component: OptionalComponent
        },
        {
            path:"projects",
            component: ProjectsComponent
        },
        {
          path:"methodology",
          component: WorkMethodologyComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MobileRoutingModule { }