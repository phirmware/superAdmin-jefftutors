import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: GenerateComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargecodesRoutingModule { }
