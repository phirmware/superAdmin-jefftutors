import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { ListComponent } from './list/list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  declarations: [ListComponent]
})
export class SubscriptionModule { }
