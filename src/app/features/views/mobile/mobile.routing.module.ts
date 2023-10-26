import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppChimpanceComponent } from "../app-chimpance/app-chimpance.component";
import { ContactMobileComponent } from "./views/contact-mobile/contact-mobile.component";
import { InfoComponent } from "./views/info/info.component";
import { OptionalComponentsComponent } from "./views/optional-components/optional-components.component";
import { OptionalComponent } from "./views/optional/optional.component";
import { PricesComponent } from "./views/prices/prices.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import { QuestionsComponent } from "./views/questions/questions.component";
import { WorkMethodologyComponent } from "./views/work-methodology/work-methodology.component";

const routes: Routes = [
    {
      path:"",
      component:AppChimpanceComponent,
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
            
            children: [
              {
                path: '',
                component: OptionalComponent,
              },
              {
                
                path: ':id',
                component:OptionalComponentsComponent
              }
            ]
        },
        {
            path:"projects",
            component: ProjectsComponent
        },
        {
          path:"methodology",
          component: WorkMethodologyComponent
        },
        {
          path:"questions",
          component: QuestionsComponent
        },
        {
          path:"contact",
          component: ContactMobileComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MobileRoutingModule { }