import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';
import { InfoBarComponent } from '../shared/components/info-bar/info-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPageRoutingModule
  ],
  entryComponents: [ InfoBarComponent ],
  declarations: [DocumentsPage,InfoBarComponent]
})
export class DocumentsPageModule {}
