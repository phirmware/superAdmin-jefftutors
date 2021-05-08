import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { component: ListComponent, path: 'list' },
  { component: DetailsComponent, path: 'course' },
  { component: NewComponent, path: 'new' },
  { component: ContentComponent, path: 'material' },
  { component: EditComponent, path: 'edit' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
