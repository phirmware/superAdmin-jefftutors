import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { ListComponent } from './list/list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  declarations: [ListComponent]
})
export class SubscriptionModule { }
