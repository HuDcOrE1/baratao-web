import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: SiteComponent,
   children : [
      {path: 'home', component: HomeComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
