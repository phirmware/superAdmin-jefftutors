import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [HomeComponent]
})
export class OverviewModule { }
