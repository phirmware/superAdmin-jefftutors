import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailsComponent } from './details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditComponent } from './edit/edit.component';
import { CourselistComponent } from './list/courselist/courselist.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ContentComponent } from './content/content.component'


@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    CKEditorModule,
    MatSnackBarModule,
  ],
  declarations: [ListComponent, DetailsComponent, NewComponent, EditComponent, CourselistComponent, ContentComponent]
})
export class CoursesModule { }
