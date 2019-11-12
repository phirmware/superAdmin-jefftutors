import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {component: ListComponent, path: 'list'},
  {component: DetailsComponent, path: 'customer'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
