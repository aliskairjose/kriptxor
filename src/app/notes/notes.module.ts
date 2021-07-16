import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';

import { NotesPage } from './notes.page';
import { InfoBarComponent } from '../shared/components/info-bar/info-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesPageRoutingModule
  ],
  entryComponents: [ InfoBarComponent ],
  declarations: [NotesPage,InfoBarComponent]
})
export class NotesPageModule {}
