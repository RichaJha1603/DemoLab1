import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RackEnterComponent } from './rack-enter/rack-enter.component';
import { EnterLabDataComponent } from './enter-lab-data/enter-lab-data.component';


const routes: Routes = [

  {path:'rackDetails',component:RackEnterComponent},
  {path:'enterLab',component:EnterLabDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
