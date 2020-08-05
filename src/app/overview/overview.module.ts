import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChartModule } from 'angular2-chartjs';
import { StatChartComponent } from './home/stat-chart/stat-chart.component';


@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatGridListModule,
    ChartModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [HomeComponent, StatChartComponent]
})
export class OverviewModule { }
