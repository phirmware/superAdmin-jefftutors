import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: [HomeComponent]
})
export class OverviewModule { }
