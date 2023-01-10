import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './features/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path:":id",
    loadChildren: ()=>import("./features/views/mobile/mobile.module").then((m)=>m.MobileModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
