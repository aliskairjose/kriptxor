import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
import { InfoBarComponent } from '../shared/components/info-bar/info-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NotesPageRoutingModule
  ],
  providers: [ InfoBarComponent ],
  declarations: [ NotesPage ]
} )
export class NotesPageModule { }
