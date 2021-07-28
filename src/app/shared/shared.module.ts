import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule( {
  declarations: [
    InfoBarComponent
  ],
  exports: [
    InfoBarComponent,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: []
} )
export class SharedModule { }
