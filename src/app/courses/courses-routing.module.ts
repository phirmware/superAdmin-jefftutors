import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {component: ListComponent, path: 'list'},
  { component: DetailsComponent, path: 'course' },
  { component: NewComponent, path: 'new' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
