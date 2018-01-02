import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkupComponent } from './markup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MarkupComponent],
  declarations: [MarkupComponent]
})
export class MarkupModule { }
