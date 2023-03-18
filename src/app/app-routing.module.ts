import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemComponent} from "./components/system-page/system.component";
import {SystemsListComponent} from "./components/systems-list/systems-list.component";

const routes: Routes = [
  {path: 'add-pc', component: SystemComponent},
  {path: 'edit-pc/:pc_id', component: SystemComponent},
  {path: 'list-pcs', component: SystemsListComponent},
  {path: '', component: SystemsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
