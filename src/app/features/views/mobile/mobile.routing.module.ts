import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppChimpanceComponent } from "../app-chimpance/app-chimpance.component";
import { InfoComponent } from "./views/info/info.component";
import { PricesComponent } from "./views/prices/prices.component";
import { QuestionsComponent } from "./views/questions/questions.component";
import { MobileHomeComponent } from "./mobile-home/mobile-home.component";

const routes: Routes = [
    {
      path:"",
      component:AppChimpanceComponent,
      children: [
        {
          path:"",
          component: MobileHomeComponent
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
          path:"questions",
          component: QuestionsComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MobileRoutingModule { }