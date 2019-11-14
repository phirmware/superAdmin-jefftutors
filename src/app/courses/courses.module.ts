import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [ListComponent]
})
export class CoursesModule { }
