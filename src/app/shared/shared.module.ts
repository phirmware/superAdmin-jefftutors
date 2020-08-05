import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppnavComponent } from './components/appnav/appnav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppnavComponent],
  exports: [AppnavComponent]
})
export class SharedModule { }
