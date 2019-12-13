import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RechargecodesRoutingModule } from './rechargecodes-routing.module';
import { GenerateComponent } from './generate/generate.component';
import {MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule, MatProgressBar} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    RechargecodesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  declarations: [GenerateComponent]
})
export class RechargecodesModule { }
