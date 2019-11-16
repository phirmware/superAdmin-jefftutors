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



@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  declarations: [ListComponent, DetailsComponent]
})
export class CoursesModule { }
