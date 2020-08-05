import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppnavComponent } from './appnav.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
  ],
  declarations: [AppnavComponent],
  exports: [AppnavComponent]
})
export class AppnavModule { }
